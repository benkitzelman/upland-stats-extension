import * as Constants from "@/lib/constants";
import { yieldPerMonth } from "@/lib/calc";
import type { Property, PropertySummary, MyProperty } from "../types";

export type PropertySummaryModel = ReturnType<typeof Model>;

export const isMyProperty = (prop: any): prop is MyProperty =>
  typeof prop.yield_per_hour !== "undefined";
export const isPropertySumamry = (prop: any): prop is PropertySummary =>
  typeof prop.currency !== "undefined";

const Model = (
  obj: Property | PropertySummary | MyProperty,
  rentUPXPerUnitPerMo?: number | null
) => ({
  rentUPXPerUnitPerMo,

  attrs() {
    return { ...obj };
  },

  monthlyRentUPX() {
    const attrs = this.attrs();
    if (isMyProperty(attrs))
      return Number(yieldPerMonth(attrs.yield_per_hour).toFixed(2));

    return this.rentUPXPerUnitPerMo
      ? Number((attrs.area * this.rentUPXPerUnitPerMo).toFixed(2))
      : undefined;
  },

  currency() {
    const attrs = this.attrs();
    if (isMyProperty(attrs)) {
      return attrs.sale_fiat_price !== null ? "USD" : "UPX";
    }

    const { on_market, currency } = attrs;
    return on_market?.currency || currency;
  },

  priceUPX() {
    const attrs = this.attrs();

    if (isMyProperty(attrs)) {
      if (attrs.sale_fiat_price) return attrs.sale_fiat_price * Constants.UPX_EXCHANGE_RATE
      if (attrs.sale_upx_price) return attrs.sale_upx_price;
    }

    return this.currency() === "USD"
      ? attrs.price * Constants.UPX_EXCHANGE_RATE
      : attrs.price;
  },

  roi() {
    const rent = this.monthlyRentUPX();
    return rent
      ? `${(((rent * 12) / this.priceUPX()) * 100).toFixed(3)}%`
      : undefined;
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
