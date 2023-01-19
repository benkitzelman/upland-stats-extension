import type { CheerioAPI } from "cheerio";
import * as PropertyDetails from "./property_details";

export const parsers = {
  PropertyDetails,
};

export const parserFor = (page: CheerioAPI) => {
  for (const pageParser of Object.values(parsers)) {
    if (pageParser.canService(page)) return pageParser.buildFor(page);
  }
};
