import * as Constants from "@/lib/constants";
import type { Property, PropertySummary } from "../types";

export type PropertySummaryModel = ReturnType<typeof Model>;

const Model = (obj: Property | PropertySummary, rentUPXPerUnitPerMo?: number | null) => ({
  rentUPXPerUnitPerMo,

  attrs() {
    return { ...obj };
  },

  monthlyRentUPX() {
    return this.rentUPXPerUnitPerMo
      ? Number((this.attrs().area * this.rentUPXPerUnitPerMo).toFixed(2))
      : undefined;
  },

  currency() {
    const { on_market, currency } = this.attrs();
    return on_market?.currency || currency;
  },

  priceUPX() {
    const { price } = this.attrs();

    return this.currency() === "USD"
      ? price * Constants.UPX_EXCHANGE_RATE
      : price;
  },

  roi() {
    const rent = this.monthlyRentUPX();
    return rent ? `${((rent * 12 / this.priceUPX()) * 100).toFixed(3)}%` : undefined;
  },

  toJSON() {
    return {
      ...this.attrs(),
      monthlyRentUPX: this.monthlyRentUPX(),
      roi: this.roi(),
      priceUPX: this.priceUPX(),
      currency: this.currency(),
    };
  },
});

export default Model;
