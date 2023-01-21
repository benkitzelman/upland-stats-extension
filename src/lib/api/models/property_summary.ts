import * as Constants from "@/lib/constants";
import type { PropertySummary } from "../types";

export type PropertySummaryModel = ReturnType<typeof Model>;

const Model = (obj: PropertySummary, rentUPXPerUnitPerMo?: number | null) => ({
  rentUPXPerUnitPerMo,

  attrs() {
    return { ...obj };
  },

  monthlyRentUPX() {
    return this.rentUPXPerUnitPerMo
      ? Number((this.attrs().area * this.rentUPXPerUnitPerMo).toFixed(2))
      : undefined;
  },

  priceUPX() {
    return this.attrs().currency === "USD"
      ? this.attrs().price * Constants.UPX_EXCHANGE_RATE
      : this.attrs().price;
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
    };
  },
});

export default Model;
