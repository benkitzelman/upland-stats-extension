import { CheerioAPI } from "cheerio";
import * as Parsers from './client/page_parsers';

const UPX_EXCHANGE_RATE = 1000;

export const viewTestFor = (page: CheerioAPI) => ({
  propertyDetails() { return !!page(".property-details-wrapper").length; }
});

export default (page: CheerioAPI) => {
  const parser = Parsers.parserFor(page);

  if (parser?.type === "PropertyDetails") {
    const price      = parser.price();
    const cost       = price.unit === "UPX" ? price.price : price.price * UPX_EXCHANGE_RATE;
    const earnings   = parser.monthlyEarnings();
    const monthlyROI = ((earnings * 12) / cost) * 100;

    return `<div><h1>Property Details</h1><p>${earnings} / ${cost} = ${monthlyROI}%</p></div>`;
  }

  return "<h1>Select a property</h1>";
};
