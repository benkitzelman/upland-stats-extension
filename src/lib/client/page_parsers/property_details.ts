import * as Constants from "../../constants";
import type { CheerioAPI } from "cheerio";

const els = {
  wrapper: ".property-details-wrapper",
  price: ".price .value",
  priceUnit: ".price .label",
  baseMonthlyEarnings: ".popup__description .collapsible .value",
  maxMonthlyEarnings: ".popup__description .collapsible .value.boosted",
};

type Currency = "UPX" | "USD";

export const canService = (page: CheerioAPI) => {
  return !!page(els.wrapper).length;
};

const parseCurrency = (text: string) => (
  parseFloat(text.replace(/[$,]/g, "")) || 0
);

const calcROI = (monthlyEarnings: number, cost: number) => {
  return ((monthlyEarnings * 12) / cost) * 100;
};

export const buildFor = (page: CheerioAPI) => {
  return {
    html: page,

    type: "PropertyDetails" as const,

    price() {
      const priceStr = page(els.price).text().replace(/[$,]/g, "");

      return {
        price: parseFloat(priceStr) || 0,
        unit:
          page(els.priceUnit).text().indexOf("UPX") > -1
            ? ("UPX" as Currency)
            : ("USD" as Currency),
      };
    },

    cost(unit: Currency) {
      const amt = this.price();
      if (amt.unit === unit) return amt.price;

      return unit === "UPX"
        ? amt.price * Constants.UPX_EXCHANGE_RATE // UPX
        : amt.price / Constants.UPX_EXCHANGE_RATE; // USD
    },

    baseMonthlyEarnings() {
      return parseCurrency(page(els.baseMonthlyEarnings).text());
    },

    maxMonthlyEarnings() {
      const range = page(els.maxMonthlyEarnings).text().split(" - ");
      return parseCurrency(range[range.length - 1]);
    },

    baseMonthlyROI() {
      return calcROI(this.baseMonthlyEarnings(), this.cost("UPX"));
    },

    maxMonthlyROI() {
      return calcROI(this.maxMonthlyEarnings(), this.cost("UPX"));
    },

    breakdown() {
      return {
        price: this.price(),
        costUPX: this.cost("UPX"),
        costUSD: this.cost("USD"),
        baseMonthlyUPX: this.baseMonthlyEarnings(),
        maxMonthlyUPX: this.maxMonthlyEarnings(),
        baseMonthlyROI: this.baseMonthlyROI(),
        maxMonthlyROI: this.maxMonthlyROI(),
      };
    },
  };
};
