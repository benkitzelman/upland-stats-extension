import { CheerioAPI } from "cheerio";

const els = {
  wrapper      : '.property-details-wrapper',
  price        : '.price .value',
  priceUnit    : '.price .label',
  monthEarnings: '.popup__description .collapsible .value.bottom',
};

export const canService = (page: CheerioAPI) => { return !!page(els.wrapper).length; };

export const buildFor = (page: CheerioAPI) => {
  return {
    type: "PropertyDetails" as const,

    monthlyEarnings() {
      return parseFloat(page(els.monthEarnings).text().replace(/[\$,]/g, '')) || 0;
    },

    price() {
      const priceStr = page(els.price).text().replace(/[\$,]/g, '');

      return {
        price: parseFloat(priceStr) || 0,
        unit : page(els.priceUnit).text().indexOf("UPX") > -1
          ? 'UPX' as const
          : '$' as const
      };
    }
  }
}
