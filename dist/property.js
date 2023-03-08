var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const SharedState = {
  offline: true,
  loading: false,
  session: void 0,
  currentCoordinates: void 0,
  currentPropertyId: void 0,
  viewableNeighbourhoods: [],
  viewableProperties: [],
  screenDimensions: void 0
};
const TAB_URL = "*://*.upland.me/";
const APP_URL = "https://play.upland.me";
const API_BASE_URL = "https://api.prod.upland.me/api";
const UPX_EXCHANGE_RATE = 1e3;
const DAYS_IN_MONTH = 30;
const INDENT_CHARS = 2;
const MAX_LEVEL = 4;
const indent = (label, indent2, root) => {
  let str = `${root || ""}{${indent2}} - ${label} - [${Math.random()}]`;
  for (let i = 0; i < (indent2 + 1) * INDENT_CHARS; i++)
    str = ` ${str}`;
  return str;
};
async function time(opts, fn) {
  let indentLevel = opts.indent || 0;
  const indentedLabel = indent(opts.label, indentLevel, opts.root);
  const shouldLog = indentLevel <= MAX_LEVEL;
  if (shouldLog) {
    console.time(indentedLabel);
    indentLevel++;
  }
  const res = await fn({ ...opts, indent: indentLevel });
  if (shouldLog) {
    indentLevel--;
    console.timeEnd(indentedLabel);
  }
  return res;
}
const invocations = {};
function singleInvocation(key, fn, ...args) {
  const existing = invocations[key];
  if (existing)
    return existing;
  invocations[key] = fn(...args).finally(() => {
    delete invocations[key];
  });
  return invocations[key];
}
function timedSingleInvocation(opts, fn) {
  const key = [opts.root, opts.label].filter(Boolean).join(" - ");
  return singleInvocation(key, () => time(opts, fn));
}
class UplandApi {
  constructor(authToken) {
    __publicField(this, "authToken");
    this.authToken = authToken || void 0;
  }
  headers() {
    return {
      authorization: this.authToken,
      "Content-Type": "application/json",
      redirect: "follow"
    };
  }
  async get(path, extraHeaders = {}, opts) {
    const url = API_BASE_URL + path;
    return singleInvocation(url, async () => {
      const resp = await fetch(url, {
        ...opts,
        method: "GET",
        headers: { ...this.headers(), ...extraHeaders }
      });
      return resp.json();
    });
  }
  property(id, opts) {
    return this.get(`/properties/${id}`, {}, opts);
  }
  listProperties(area, page, sort = "asc", opts) {
    return this.get(
      `/properties/list-view?north=${area.north}&south=${area.south}&east=${area.east}&west=${area.west}&offset=${page.offset}&limit=${page.limit}&sort=${sort}`,
      {},
      opts
    );
  }
  async listAllProperties(area, opts) {
    return this.listProperties(area, { limit: 100, offset: 0 }, "asc", opts);
  }
  listNeighbourhoods(opts) {
    return this.get("/neighborhood", {}, opts);
  }
  collections(opts) {
    return this.get(
      "/collections?$sort[category]=1&$sort[one_time_reward]=1&$sort[yield_boost]=1",
      {},
      opts
    );
  }
  myCollections(opts) {
    return this.get("/dashboard/collections", {}, opts);
  }
  myProperties(opts) {
    return this.get("/properties/mine/detailed", {}, opts);
  }
  myYield(opts) {
    return this.get("/yield/mine", {}, opts);
  }
  myDashboard(opts) {
    return this.get("/dashboard", {}, opts);
  }
}
const get = async (key) => {
  return (await chrome.storage.local.get([key]))[key];
};
const set = async (keyVal) => {
  await chrome.storage.local.set(keyVal);
};
const getNeighbourhoodYields = () => {
  return get("neighbourhoodMonthlyYields");
};
const setNeighbourhoodYields = async (yields) => {
  await set({ neighbourhoodMonthlyYields: yields });
  return yields || {};
};
const getStashedProperties = async () => {
  return await get("stashedProperties") || [];
};
const setStashedProperties = async (props) => {
  await set({ stashedProperties: (props || []).filter(Boolean) });
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var es = {};
var computeDestinationPoint$1 = {};
var getLatitude$1 = {};
var constants = {};
Object.defineProperty(constants, "__esModule", { value: true });
constants.areaConversion = constants.timeConversion = constants.distanceConversion = constants.altitudeKeys = constants.latitudeKeys = constants.longitudeKeys = constants.MAXLON = constants.MINLON = constants.MAXLAT = constants.MINLAT = constants.earthRadius = constants.sexagesimalPattern = void 0;
var sexagesimalPattern = /^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;
constants.sexagesimalPattern = sexagesimalPattern;
var earthRadius = 6378137;
constants.earthRadius = earthRadius;
var MINLAT = -90;
constants.MINLAT = MINLAT;
var MAXLAT = 90;
constants.MAXLAT = MAXLAT;
var MINLON = -180;
constants.MINLON = MINLON;
var MAXLON = 180;
constants.MAXLON = MAXLON;
var longitudeKeys = ["lng", "lon", "longitude", 0];
constants.longitudeKeys = longitudeKeys;
var latitudeKeys = ["lat", "latitude", 1];
constants.latitudeKeys = latitudeKeys;
var altitudeKeys = ["alt", "altitude", "elevation", "elev", 2];
constants.altitudeKeys = altitudeKeys;
var distanceConversion = { m: 1, km: 1e-3, cm: 100, mm: 1e3, mi: 1 / 1609.344, sm: 1 / 1852.216, ft: 100 / 30.48, in: 100 / 2.54, yd: 1 / 0.9144 };
constants.distanceConversion = distanceConversion;
var timeConversion = { m: 60, h: 3600, d: 86400 };
constants.timeConversion = timeConversion;
var areaConversion = { m2: 1, km2: 1e-6, ha: 1e-4, a: 0.01, ft2: 10.763911, yd2: 1.19599, in2: 1550.0031 };
constants.areaConversion = areaConversion;
areaConversion.sqm = areaConversion.m2;
areaConversion.sqkm = areaConversion.km2;
areaConversion.sqft = areaConversion.ft2;
areaConversion.sqyd = areaConversion.yd2;
areaConversion.sqin = areaConversion.in2;
var getCoordinateKey$1 = {};
Object.defineProperty(getCoordinateKey$1, "__esModule", { value: true });
getCoordinateKey$1.default = void 0;
var getCoordinateKey = function getCoordinateKey2(point, keysToLookup) {
  return keysToLookup.reduce(function(foundKey, key) {
    if (typeof point === "undefined" || point === null) {
      throw new Error("'".concat(point, "' is no valid coordinate."));
    }
    if (Object.prototype.hasOwnProperty.call(point, key) && typeof key !== "undefined" && typeof foundKey === "undefined") {
      foundKey = key;
      return key;
    }
    return foundKey;
  }, void 0);
};
var _default$D = getCoordinateKey;
getCoordinateKey$1.default = _default$D;
var toDecimal$1 = {};
var isDecimal$1 = {};
Object.defineProperty(isDecimal$1, "__esModule", { value: true });
isDecimal$1.default = void 0;
var isDecimal = function isDecimal2(value) {
  var checkedValue = value.toString().trim();
  if (isNaN(parseFloat(checkedValue))) {
    return false;
  }
  return parseFloat(checkedValue) === Number(checkedValue);
};
var _default$C = isDecimal;
isDecimal$1.default = _default$C;
var isSexagesimal$1 = {};
Object.defineProperty(isSexagesimal$1, "__esModule", { value: true });
isSexagesimal$1.default = void 0;
var _constants$e = constants;
var isSexagesimal = function isSexagesimal2(value) {
  return _constants$e.sexagesimalPattern.test(value.toString().trim());
};
var _default$B = isSexagesimal;
isSexagesimal$1.default = _default$B;
var sexagesimalToDecimal$1 = {};
Object.defineProperty(sexagesimalToDecimal$1, "__esModule", { value: true });
sexagesimalToDecimal$1.default = void 0;
var _constants$d = constants;
var sexagesimalToDecimal = function sexagesimalToDecimal2(sexagesimal) {
  var data = new RegExp(_constants$d.sexagesimalPattern).exec(sexagesimal.toString().trim());
  if (typeof data === "undefined" || data === null) {
    throw new Error("Given value is not in sexagesimal format");
  }
  var min = Number(data[2]) / 60 || 0;
  var sec = Number(data[4]) / 3600 || 0;
  var decimal = parseFloat(data[1]) + min + sec;
  return ["S", "W"].includes(data[7]) ? -decimal : decimal;
};
var _default$A = sexagesimalToDecimal;
sexagesimalToDecimal$1.default = _default$A;
var isValidCoordinate$1 = {};
var getCoordinateKeys$1 = {};
Object.defineProperty(getCoordinateKeys$1, "__esModule", { value: true });
getCoordinateKeys$1.default = void 0;
var _constants$c = constants;
var _getCoordinateKey$2 = _interopRequireDefault$q(getCoordinateKey$1);
function _interopRequireDefault$q(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getCoordinateKeys = function getCoordinateKeys2(point) {
  var keysToLookup = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { longitude: _constants$c.longitudeKeys, latitude: _constants$c.latitudeKeys, altitude: _constants$c.altitudeKeys };
  var longitude = (0, _getCoordinateKey$2.default)(point, keysToLookup.longitude);
  var latitude = (0, _getCoordinateKey$2.default)(point, keysToLookup.latitude);
  var altitude = (0, _getCoordinateKey$2.default)(point, keysToLookup.altitude);
  return _objectSpread$1({ latitude, longitude }, altitude ? { altitude } : {});
};
var _default$z = getCoordinateKeys;
getCoordinateKeys$1.default = _default$z;
var isValidLatitude$1 = {};
Object.defineProperty(isValidLatitude$1, "__esModule", { value: true });
isValidLatitude$1.default = void 0;
var _isDecimal$2 = _interopRequireDefault$p(isDecimal$1);
var _isSexagesimal$2 = _interopRequireDefault$p(isSexagesimal$1);
var _sexagesimalToDecimal$2 = _interopRequireDefault$p(sexagesimalToDecimal$1);
var _constants$b = constants;
function _interopRequireDefault$p(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var isValidLatitude = function isValidLatitude2(value) {
  if ((0, _isDecimal$2.default)(value)) {
    if (parseFloat(value) > _constants$b.MAXLAT || value < _constants$b.MINLAT) {
      return false;
    }
    return true;
  }
  if ((0, _isSexagesimal$2.default)(value)) {
    return isValidLatitude2((0, _sexagesimalToDecimal$2.default)(value));
  }
  return false;
};
var _default$y = isValidLatitude;
isValidLatitude$1.default = _default$y;
var isValidLongitude$1 = {};
Object.defineProperty(isValidLongitude$1, "__esModule", { value: true });
isValidLongitude$1.default = void 0;
var _isDecimal$1 = _interopRequireDefault$o(isDecimal$1);
var _isSexagesimal$1 = _interopRequireDefault$o(isSexagesimal$1);
var _sexagesimalToDecimal$1 = _interopRequireDefault$o(sexagesimalToDecimal$1);
var _constants$a = constants;
function _interopRequireDefault$o(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var isValidLongitude = function isValidLongitude2(value) {
  if ((0, _isDecimal$1.default)(value)) {
    if (parseFloat(value) > _constants$a.MAXLON || value < _constants$a.MINLON) {
      return false;
    }
    return true;
  }
  if ((0, _isSexagesimal$1.default)(value)) {
    return isValidLongitude2((0, _sexagesimalToDecimal$1.default)(value));
  }
  return false;
};
var _default$x = isValidLongitude;
isValidLongitude$1.default = _default$x;
Object.defineProperty(isValidCoordinate$1, "__esModule", { value: true });
isValidCoordinate$1.default = void 0;
var _getCoordinateKeys2 = _interopRequireDefault$n(getCoordinateKeys$1);
var _isValidLatitude = _interopRequireDefault$n(isValidLatitude$1);
var _isValidLongitude = _interopRequireDefault$n(isValidLongitude$1);
function _interopRequireDefault$n(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var isValidCoordinate = function isValidCoordinate2(point) {
  var _getCoordinateKeys3 = (0, _getCoordinateKeys2.default)(point), latitude = _getCoordinateKeys3.latitude, longitude = _getCoordinateKeys3.longitude;
  if (Array.isArray(point) && point.length >= 2) {
    return (0, _isValidLongitude.default)(point[0]) && (0, _isValidLatitude.default)(point[1]);
  }
  if (typeof latitude === "undefined" || typeof longitude === "undefined") {
    return false;
  }
  var lon = point[longitude];
  var lat = point[latitude];
  if (typeof lat === "undefined" || typeof lon === "undefined") {
    return false;
  }
  if ((0, _isValidLatitude.default)(lat) === false || (0, _isValidLongitude.default)(lon) === false) {
    return false;
  }
  return true;
};
var _default$w = isValidCoordinate;
isValidCoordinate$1.default = _default$w;
Object.defineProperty(toDecimal$1, "__esModule", { value: true });
toDecimal$1.default = void 0;
var _isDecimal = _interopRequireDefault$m(isDecimal$1);
var _isSexagesimal = _interopRequireDefault$m(isSexagesimal$1);
var _sexagesimalToDecimal = _interopRequireDefault$m(sexagesimalToDecimal$1);
var _isValidCoordinate = _interopRequireDefault$m(isValidCoordinate$1);
var _getCoordinateKeys = _interopRequireDefault$m(getCoordinateKeys$1);
function _interopRequireDefault$m(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var toDecimal = function toDecimal2(value) {
  if ((0, _isDecimal.default)(value)) {
    return Number(value);
  }
  if ((0, _isSexagesimal.default)(value)) {
    return (0, _sexagesimalToDecimal.default)(value);
  }
  if ((0, _isValidCoordinate.default)(value)) {
    var keys = (0, _getCoordinateKeys.default)(value);
    if (Array.isArray(value)) {
      return value.map(function(v, index) {
        return [0, 1].includes(index) ? toDecimal2(v) : v;
      });
    }
    return _objectSpread(_objectSpread(_objectSpread({}, value), keys.latitude && _defineProperty({}, keys.latitude, toDecimal2(value[keys.latitude]))), keys.longitude && _defineProperty({}, keys.longitude, toDecimal2(value[keys.longitude])));
  }
  if (Array.isArray(value)) {
    return value.map(function(point) {
      return (0, _isValidCoordinate.default)(point) ? toDecimal2(point) : point;
    });
  }
  return value;
};
var _default$v = toDecimal;
toDecimal$1.default = _default$v;
Object.defineProperty(getLatitude$1, "__esModule", { value: true });
getLatitude$1.default = void 0;
var _constants$9 = constants;
var _getCoordinateKey$1 = _interopRequireDefault$l(getCoordinateKey$1);
var _toDecimal$1 = _interopRequireDefault$l(toDecimal$1);
function _interopRequireDefault$l(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getLatitude = function getLatitude2(point, raw) {
  var latKey = (0, _getCoordinateKey$1.default)(point, _constants$9.latitudeKeys);
  if (typeof latKey === "undefined" || latKey === null) {
    return;
  }
  var value = point[latKey];
  return raw === true ? value : (0, _toDecimal$1.default)(value);
};
var _default$u = getLatitude;
getLatitude$1.default = _default$u;
var getLongitude$1 = {};
Object.defineProperty(getLongitude$1, "__esModule", { value: true });
getLongitude$1.default = void 0;
var _constants$8 = constants;
var _getCoordinateKey = _interopRequireDefault$k(getCoordinateKey$1);
var _toDecimal = _interopRequireDefault$k(toDecimal$1);
function _interopRequireDefault$k(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getLongitude = function getLongitude2(point, raw) {
  var latKey = (0, _getCoordinateKey.default)(point, _constants$8.longitudeKeys);
  if (typeof latKey === "undefined" || latKey === null) {
    return;
  }
  var value = point[latKey];
  return raw === true ? value : (0, _toDecimal.default)(value);
};
var _default$t = getLongitude;
getLongitude$1.default = _default$t;
var toRad$1 = {};
Object.defineProperty(toRad$1, "__esModule", { value: true });
toRad$1.default = void 0;
var toRad = function toRad2(value) {
  return value * Math.PI / 180;
};
var _default$s = toRad;
toRad$1.default = _default$s;
var toDeg$1 = {};
Object.defineProperty(toDeg$1, "__esModule", { value: true });
toDeg$1.default = void 0;
var toDeg = function toDeg2(value) {
  return value * 180 / Math.PI;
};
var _default$r = toDeg;
toDeg$1.default = _default$r;
Object.defineProperty(computeDestinationPoint$1, "__esModule", { value: true });
computeDestinationPoint$1.default = void 0;
var _getLatitude$9 = _interopRequireDefault$j(getLatitude$1);
var _getLongitude$9 = _interopRequireDefault$j(getLongitude$1);
var _toRad$7 = _interopRequireDefault$j(toRad$1);
var _toDeg$4 = _interopRequireDefault$j(toDeg$1);
var _constants$7 = constants;
function _interopRequireDefault$j(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var computeDestinationPoint = function computeDestinationPoint2(start, distance, bearing) {
  var radius = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6371e3;
  var lat = (0, _getLatitude$9.default)(start);
  var lng = (0, _getLongitude$9.default)(start);
  var delta = distance / radius;
  var theta = (0, _toRad$7.default)(bearing);
  var phi1 = (0, _toRad$7.default)(lat);
  var lambda1 = (0, _toRad$7.default)(lng);
  var phi2 = Math.asin(Math.sin(phi1) * Math.cos(delta) + Math.cos(phi1) * Math.sin(delta) * Math.cos(theta));
  var lambda2 = lambda1 + Math.atan2(Math.sin(theta) * Math.sin(delta) * Math.cos(phi1), Math.cos(delta) - Math.sin(phi1) * Math.sin(phi2));
  var longitude = (0, _toDeg$4.default)(lambda2);
  if (longitude < _constants$7.MINLON || longitude > _constants$7.MAXLON) {
    lambda2 = (lambda2 + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    longitude = (0, _toDeg$4.default)(lambda2);
  }
  return { latitude: (0, _toDeg$4.default)(phi2), longitude };
};
var _default$q = computeDestinationPoint;
computeDestinationPoint$1.default = _default$q;
var convertArea$1 = {};
Object.defineProperty(convertArea$1, "__esModule", { value: true });
convertArea$1.default = void 0;
var _constants$6 = constants;
var convertArea = function convertArea2(squareMeters) {
  var targetUnit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "m";
  var factor = _constants$6.areaConversion[targetUnit];
  if (factor) {
    return squareMeters * factor;
  }
  throw new Error("Invalid unit used for area conversion.");
};
var _default$p = convertArea;
convertArea$1.default = _default$p;
var convertDistance$1 = {};
Object.defineProperty(convertDistance$1, "__esModule", { value: true });
convertDistance$1.default = void 0;
var _constants$5 = constants;
var convertDistance = function convertDistance2(meters) {
  var targetUnit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "m";
  var factor = _constants$5.distanceConversion[targetUnit];
  if (factor) {
    return meters * factor;
  }
  throw new Error("Invalid unit used for distance conversion.");
};
var _default$o = convertDistance;
convertDistance$1.default = _default$o;
var convertSpeed$1 = {};
Object.defineProperty(convertSpeed$1, "__esModule", { value: true });
convertSpeed$1.default = void 0;
var _constants$4 = constants;
var convertSpeed = function convertSpeed2(metersPerSecond) {
  var targetUnit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "kmh";
  switch (targetUnit) {
    case "kmh":
      return metersPerSecond * _constants$4.timeConversion.h * _constants$4.distanceConversion.km;
    case "mph":
      return metersPerSecond * _constants$4.timeConversion.h * _constants$4.distanceConversion.mi;
    default:
      return metersPerSecond;
  }
};
var _default$n = convertSpeed;
convertSpeed$1.default = _default$n;
var decimalToSexagesimal = {};
Object.defineProperty(decimalToSexagesimal, "__esModule", { value: true });
decimalToSexagesimal.default = void 0;
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
var imprecise = function imprecise2(number) {
  var decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
  var factor = Math.pow(10, decimals);
  return Math.round(number * factor) / factor;
};
var decimal2sexagesimalNext = function decimal2sexagesimalNext2(decimal) {
  var _decimal$toString$spl = decimal.toString().split("."), _decimal$toString$spl2 = _slicedToArray$1(_decimal$toString$spl, 2), pre = _decimal$toString$spl2[0], post = _decimal$toString$spl2[1];
  var deg = Math.abs(Number(pre));
  var min0 = Number("0." + (post || 0)) * 60;
  var sec0 = min0.toString().split(".");
  var min = Math.floor(min0);
  var sec = imprecise(Number("0." + (sec0[1] || 0)) * 60).toString();
  var _sec$split = sec.split("."), _sec$split2 = _slicedToArray$1(_sec$split, 2), secPreDec = _sec$split2[0], _sec$split2$ = _sec$split2[1], secDec = _sec$split2$ === void 0 ? "0" : _sec$split2$;
  return deg + "° " + min.toString().padStart(2, "0") + "' " + secPreDec.padStart(2, "0") + "." + secDec.padEnd(1, "0") + '"';
};
var _default$m = decimal2sexagesimalNext;
decimalToSexagesimal.default = _default$m;
var findNearest$1 = {};
var orderByDistance$1 = {};
var getDistance$2 = {};
var robustAcos$1 = {};
Object.defineProperty(robustAcos$1, "__esModule", { value: true });
robustAcos$1.default = void 0;
var robustAcos = function robustAcos2(value) {
  if (value > 1) {
    return 1;
  }
  if (value < -1) {
    return -1;
  }
  return value;
};
var _default$l = robustAcos;
robustAcos$1.default = _default$l;
Object.defineProperty(getDistance$2, "__esModule", { value: true });
getDistance$2.default = void 0;
var _getLatitude$8 = _interopRequireDefault$i(getLatitude$1);
var _getLongitude$8 = _interopRequireDefault$i(getLongitude$1);
var _toRad$6 = _interopRequireDefault$i(toRad$1);
var _robustAcos$1 = _interopRequireDefault$i(robustAcos$1);
var _constants$3 = constants;
function _interopRequireDefault$i(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getDistance$1 = function getDistance(from, to) {
  var accuracy = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  accuracy = typeof accuracy !== "undefined" && !isNaN(accuracy) ? accuracy : 1;
  var fromLat = (0, _getLatitude$8.default)(from);
  var fromLon = (0, _getLongitude$8.default)(from);
  var toLat = (0, _getLatitude$8.default)(to);
  var toLon = (0, _getLongitude$8.default)(to);
  var distance = Math.acos((0, _robustAcos$1.default)(Math.sin((0, _toRad$6.default)(toLat)) * Math.sin((0, _toRad$6.default)(fromLat)) + Math.cos((0, _toRad$6.default)(toLat)) * Math.cos((0, _toRad$6.default)(fromLat)) * Math.cos((0, _toRad$6.default)(fromLon) - (0, _toRad$6.default)(toLon)))) * _constants$3.earthRadius;
  return Math.round(distance / accuracy) * accuracy;
};
var _default$k = getDistance$1;
getDistance$2.default = _default$k;
Object.defineProperty(orderByDistance$1, "__esModule", { value: true });
orderByDistance$1.default = void 0;
var _getDistance$5 = _interopRequireDefault$h(getDistance$2);
function _interopRequireDefault$h(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var orderByDistance = function orderByDistance2(point, coords) {
  var distanceFn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _getDistance$5.default;
  distanceFn = typeof distanceFn === "function" ? distanceFn : _getDistance$5.default;
  return coords.slice().sort(function(a, b) {
    return distanceFn(point, a) - distanceFn(point, b);
  });
};
var _default$j = orderByDistance;
orderByDistance$1.default = _default$j;
Object.defineProperty(findNearest$1, "__esModule", { value: true });
findNearest$1.default = void 0;
var _orderByDistance = _interopRequireDefault$g(orderByDistance$1);
function _interopRequireDefault$g(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var findNearest = function findNearest2(point, coords) {
  return (0, _orderByDistance.default)(point, coords)[0];
};
var _default$i = findNearest;
findNearest$1.default = _default$i;
var getAreaOfPolygon$1 = {};
Object.defineProperty(getAreaOfPolygon$1, "__esModule", { value: true });
getAreaOfPolygon$1.default = void 0;
var _toRad$5 = _interopRequireDefault$f(toRad$1);
var _getLatitude$7 = _interopRequireDefault$f(getLatitude$1);
var _getLongitude$7 = _interopRequireDefault$f(getLongitude$1);
var _constants$2 = constants;
function _interopRequireDefault$f(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getAreaOfPolygon = function getAreaOfPolygon2(points) {
  var area = 0;
  if (points.length > 2) {
    var lowerIndex;
    var middleIndex;
    var upperIndex;
    for (var i = 0; i < points.length; i++) {
      if (i === points.length - 2) {
        lowerIndex = points.length - 2;
        middleIndex = points.length - 1;
        upperIndex = 0;
      } else if (i === points.length - 1) {
        lowerIndex = points.length - 1;
        middleIndex = 0;
        upperIndex = 1;
      } else {
        lowerIndex = i;
        middleIndex = i + 1;
        upperIndex = i + 2;
      }
      var p1lon = (0, _getLongitude$7.default)(points[lowerIndex]);
      var p2lat = (0, _getLatitude$7.default)(points[middleIndex]);
      var p3lon = (0, _getLongitude$7.default)(points[upperIndex]);
      area += ((0, _toRad$5.default)(p3lon) - (0, _toRad$5.default)(p1lon)) * Math.sin((0, _toRad$5.default)(p2lat));
    }
    area = area * _constants$2.earthRadius * _constants$2.earthRadius / 2;
  }
  return Math.abs(area);
};
var _default$h = getAreaOfPolygon;
getAreaOfPolygon$1.default = _default$h;
var getBounds$1 = {};
Object.defineProperty(getBounds$1, "__esModule", { value: true });
getBounds$1.default = void 0;
var _getLatitude$6 = _interopRequireDefault$e(getLatitude$1);
var _getLongitude$6 = _interopRequireDefault$e(getLongitude$1);
function _interopRequireDefault$e(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getBounds = function getBounds2(points) {
  if (Array.isArray(points) === false || points.length === 0) {
    throw new Error("No points were given.");
  }
  return points.reduce(function(stats, point) {
    var latitude = (0, _getLatitude$6.default)(point);
    var longitude = (0, _getLongitude$6.default)(point);
    return { maxLat: Math.max(latitude, stats.maxLat), minLat: Math.min(latitude, stats.minLat), maxLng: Math.max(longitude, stats.maxLng), minLng: Math.min(longitude, stats.minLng) };
  }, { maxLat: -Infinity, minLat: Infinity, maxLng: -Infinity, minLng: Infinity });
};
var _default$g = getBounds;
getBounds$1.default = _default$g;
var getBoundsOfDistance$1 = {};
Object.defineProperty(getBoundsOfDistance$1, "__esModule", { value: true });
getBoundsOfDistance$1.default = void 0;
var _getLatitude$5 = _interopRequireDefault$d(getLatitude$1);
var _getLongitude$5 = _interopRequireDefault$d(getLongitude$1);
var _toRad$4 = _interopRequireDefault$d(toRad$1);
var _toDeg$3 = _interopRequireDefault$d(toDeg$1);
var _constants$1 = constants;
function _interopRequireDefault$d(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getBoundsOfDistance = function getBoundsOfDistance2(point, distance) {
  var latitude = (0, _getLatitude$5.default)(point);
  var longitude = (0, _getLongitude$5.default)(point);
  var radLat = (0, _toRad$4.default)(latitude);
  var radLon = (0, _toRad$4.default)(longitude);
  var radDist = distance / _constants$1.earthRadius;
  var minLat = radLat - radDist;
  var maxLat = radLat + radDist;
  var MAX_LAT_RAD = (0, _toRad$4.default)(_constants$1.MAXLAT);
  var MIN_LAT_RAD = (0, _toRad$4.default)(_constants$1.MINLAT);
  var MAX_LON_RAD = (0, _toRad$4.default)(_constants$1.MAXLON);
  var MIN_LON_RAD = (0, _toRad$4.default)(_constants$1.MINLON);
  var minLon;
  var maxLon;
  if (minLat > MIN_LAT_RAD && maxLat < MAX_LAT_RAD) {
    var deltaLon = Math.asin(Math.sin(radDist) / Math.cos(radLat));
    minLon = radLon - deltaLon;
    if (minLon < MIN_LON_RAD) {
      minLon += Math.PI * 2;
    }
    maxLon = radLon + deltaLon;
    if (maxLon > MAX_LON_RAD) {
      maxLon -= Math.PI * 2;
    }
  } else {
    minLat = Math.max(minLat, MIN_LAT_RAD);
    maxLat = Math.min(maxLat, MAX_LAT_RAD);
    minLon = MIN_LON_RAD;
    maxLon = MAX_LON_RAD;
  }
  return [{ latitude: (0, _toDeg$3.default)(minLat), longitude: (0, _toDeg$3.default)(minLon) }, { latitude: (0, _toDeg$3.default)(maxLat), longitude: (0, _toDeg$3.default)(maxLon) }];
};
var _default$f = getBoundsOfDistance;
getBoundsOfDistance$1.default = _default$f;
var getCenter$1 = {};
Object.defineProperty(getCenter$1, "__esModule", { value: true });
getCenter$1.default = void 0;
var _getLatitude$4 = _interopRequireDefault$c(getLatitude$1);
var _getLongitude$4 = _interopRequireDefault$c(getLongitude$1);
var _toRad$3 = _interopRequireDefault$c(toRad$1);
var _toDeg$2 = _interopRequireDefault$c(toDeg$1);
function _interopRequireDefault$c(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getCenter = function getCenter2(points) {
  if (Array.isArray(points) === false || points.length === 0) {
    return false;
  }
  var numberOfPoints = points.length;
  var sum = points.reduce(function(acc, point) {
    var pointLat = (0, _toRad$3.default)((0, _getLatitude$4.default)(point));
    var pointLon = (0, _toRad$3.default)((0, _getLongitude$4.default)(point));
    return { X: acc.X + Math.cos(pointLat) * Math.cos(pointLon), Y: acc.Y + Math.cos(pointLat) * Math.sin(pointLon), Z: acc.Z + Math.sin(pointLat) };
  }, { X: 0, Y: 0, Z: 0 });
  var X = sum.X / numberOfPoints;
  var Y = sum.Y / numberOfPoints;
  var Z = sum.Z / numberOfPoints;
  return { longitude: (0, _toDeg$2.default)(Math.atan2(Y, X)), latitude: (0, _toDeg$2.default)(Math.atan2(Z, Math.sqrt(X * X + Y * Y))) };
};
var _default$e = getCenter;
getCenter$1.default = _default$e;
var getCenterOfBounds$1 = {};
Object.defineProperty(getCenterOfBounds$1, "__esModule", { value: true });
getCenterOfBounds$1.default = void 0;
var _getBounds = _interopRequireDefault$b(getBounds$1);
function _interopRequireDefault$b(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getCenterOfBounds = function getCenterOfBounds2(coords) {
  var bounds = (0, _getBounds.default)(coords);
  var latitude = bounds.minLat + (bounds.maxLat - bounds.minLat) / 2;
  var longitude = bounds.minLng + (bounds.maxLng - bounds.minLng) / 2;
  return { latitude: parseFloat(latitude.toFixed(6)), longitude: parseFloat(longitude.toFixed(6)) };
};
var _default$d = getCenterOfBounds;
getCenterOfBounds$1.default = _default$d;
var getCompassDirection$1 = {};
var getRhumbLineBearing$1 = {};
Object.defineProperty(getRhumbLineBearing$1, "__esModule", { value: true });
getRhumbLineBearing$1.default = void 0;
var _getLatitude$3 = _interopRequireDefault$a(getLatitude$1);
var _getLongitude$3 = _interopRequireDefault$a(getLongitude$1);
var _toRad$2 = _interopRequireDefault$a(toRad$1);
var _toDeg$1 = _interopRequireDefault$a(toDeg$1);
function _interopRequireDefault$a(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getRhumbLineBearing = function getRhumbLineBearing2(origin, dest) {
  var diffLon = (0, _toRad$2.default)((0, _getLongitude$3.default)(dest)) - (0, _toRad$2.default)((0, _getLongitude$3.default)(origin));
  var diffPhi = Math.log(Math.tan((0, _toRad$2.default)((0, _getLatitude$3.default)(dest)) / 2 + Math.PI / 4) / Math.tan((0, _toRad$2.default)((0, _getLatitude$3.default)(origin)) / 2 + Math.PI / 4));
  if (Math.abs(diffLon) > Math.PI) {
    if (diffLon > 0) {
      diffLon = (Math.PI * 2 - diffLon) * -1;
    } else {
      diffLon = Math.PI * 2 + diffLon;
    }
  }
  return ((0, _toDeg$1.default)(Math.atan2(diffLon, diffPhi)) + 360) % 360;
};
var _default$c = getRhumbLineBearing;
getRhumbLineBearing$1.default = _default$c;
Object.defineProperty(getCompassDirection$1, "__esModule", { value: true });
getCompassDirection$1.default = void 0;
var _getRhumbLineBearing = _interopRequireDefault$9(getRhumbLineBearing$1);
function _interopRequireDefault$9(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getCompassDirection = function getCompassDirection2(origin, dest) {
  var bearingFn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _getRhumbLineBearing.default;
  var bearing = typeof bearingFn === "function" ? bearingFn(origin, dest) : (0, _getRhumbLineBearing.default)(origin, dest);
  if (isNaN(bearing)) {
    throw new Error("Could not calculate bearing for given points. Check your bearing function");
  }
  switch (Math.round(bearing / 22.5)) {
    case 1:
      return "NNE";
    case 2:
      return "NE";
    case 3:
      return "ENE";
    case 4:
      return "E";
    case 5:
      return "ESE";
    case 6:
      return "SE";
    case 7:
      return "SSE";
    case 8:
      return "S";
    case 9:
      return "SSW";
    case 10:
      return "SW";
    case 11:
      return "WSW";
    case 12:
      return "W";
    case 13:
      return "WNW";
    case 14:
      return "NW";
    case 15:
      return "NNW";
    default:
      return "N";
  }
};
var _default$b = getCompassDirection;
getCompassDirection$1.default = _default$b;
var getDistanceFromLine$1 = {};
Object.defineProperty(getDistanceFromLine$1, "__esModule", { value: true });
getDistanceFromLine$1.default = void 0;
var _getDistance$4 = _interopRequireDefault$8(getDistance$2);
var _robustAcos = _interopRequireDefault$8(robustAcos$1);
function _interopRequireDefault$8(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getDistanceFromLine = function getDistanceFromLine2(point, lineStart, lineEnd) {
  var accuracy = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  var d1 = (0, _getDistance$4.default)(lineStart, point, accuracy);
  var d2 = (0, _getDistance$4.default)(point, lineEnd, accuracy);
  var d3 = (0, _getDistance$4.default)(lineStart, lineEnd, accuracy);
  var alpha = Math.acos((0, _robustAcos.default)((d1 * d1 + d3 * d3 - d2 * d2) / (2 * d1 * d3)));
  var beta = Math.acos((0, _robustAcos.default)((d2 * d2 + d3 * d3 - d1 * d1) / (2 * d2 * d3)));
  if (alpha > Math.PI / 2) {
    return d1;
  }
  if (beta > Math.PI / 2) {
    return d2;
  }
  return Math.sin(alpha) * d1;
};
var _default$a = getDistanceFromLine;
getDistanceFromLine$1.default = _default$a;
var getGreatCircleBearing$1 = {};
Object.defineProperty(getGreatCircleBearing$1, "__esModule", { value: true });
getGreatCircleBearing$1.default = void 0;
var _getLatitude$2 = _interopRequireDefault$7(getLatitude$1);
var _getLongitude$2 = _interopRequireDefault$7(getLongitude$1);
var _toRad$1 = _interopRequireDefault$7(toRad$1);
var _toDeg = _interopRequireDefault$7(toDeg$1);
function _interopRequireDefault$7(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getGreatCircleBearing = function getGreatCircleBearing2(origin, dest) {
  var destLat = (0, _getLatitude$2.default)(dest);
  var detLon = (0, _getLongitude$2.default)(dest);
  var originLat = (0, _getLatitude$2.default)(origin);
  var originLon = (0, _getLongitude$2.default)(origin);
  var bearing = ((0, _toDeg.default)(Math.atan2(Math.sin((0, _toRad$1.default)(detLon) - (0, _toRad$1.default)(originLon)) * Math.cos((0, _toRad$1.default)(destLat)), Math.cos((0, _toRad$1.default)(originLat)) * Math.sin((0, _toRad$1.default)(destLat)) - Math.sin((0, _toRad$1.default)(originLat)) * Math.cos((0, _toRad$1.default)(destLat)) * Math.cos((0, _toRad$1.default)(detLon) - (0, _toRad$1.default)(originLon)))) + 360) % 360;
  return bearing;
};
var _default$9 = getGreatCircleBearing;
getGreatCircleBearing$1.default = _default$9;
var getPathLength$1 = {};
Object.defineProperty(getPathLength$1, "__esModule", { value: true });
getPathLength$1.default = void 0;
var _getDistance$3 = _interopRequireDefault$6(getDistance$2);
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
var getPathLength = function getPathLength2(points) {
  var distanceFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _getDistance$3.default;
  return points.reduce(function(acc, point) {
    if (_typeof(acc) === "object" && acc.last !== null) {
      acc.distance += distanceFn(point, acc.last);
    }
    acc.last = point;
    return acc;
  }, { last: null, distance: 0 }).distance;
};
var _default$8 = getPathLength;
getPathLength$1.default = _default$8;
var getPreciseDistance = {};
Object.defineProperty(getPreciseDistance, "__esModule", { value: true });
getPreciseDistance.default = void 0;
var _getLatitude$1 = _interopRequireDefault$5(getLatitude$1);
var _getLongitude$1 = _interopRequireDefault$5(getLongitude$1);
var _toRad = _interopRequireDefault$5(toRad$1);
var _constants = constants;
function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getDistance2 = function getDistance3(start, end) {
  var accuracy = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  accuracy = typeof accuracy !== "undefined" && !isNaN(accuracy) ? accuracy : 1;
  var startLat = (0, _getLatitude$1.default)(start);
  var startLon = (0, _getLongitude$1.default)(start);
  var endLat = (0, _getLatitude$1.default)(end);
  var endLon = (0, _getLongitude$1.default)(end);
  var b = 6356752314245e-6;
  var ellipsoidParams = 1 / 298.257223563;
  var L = (0, _toRad.default)(endLon - startLon);
  var cosSigma;
  var sigma;
  var sinAlpha;
  var cosSqAlpha;
  var cos2SigmaM;
  var sinSigma;
  var U1 = Math.atan((1 - ellipsoidParams) * Math.tan((0, _toRad.default)(parseFloat(startLat))));
  var U2 = Math.atan((1 - ellipsoidParams) * Math.tan((0, _toRad.default)(parseFloat(endLat))));
  var sinU1 = Math.sin(U1);
  var cosU1 = Math.cos(U1);
  var sinU2 = Math.sin(U2);
  var cosU2 = Math.cos(U2);
  var lambda = L;
  var lambdaP;
  var iterLimit = 100;
  do {
    var sinLambda = Math.sin(lambda);
    var cosLambda = Math.cos(lambda);
    sinSigma = Math.sqrt(cosU2 * sinLambda * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
    if (sinSigma === 0) {
      return 0;
    }
    cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
    sigma = Math.atan2(sinSigma, cosSigma);
    sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
    cosSqAlpha = 1 - sinAlpha * sinAlpha;
    cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;
    if (isNaN(cos2SigmaM)) {
      cos2SigmaM = 0;
    }
    var C = ellipsoidParams / 16 * cosSqAlpha * (4 + ellipsoidParams * (4 - 3 * cosSqAlpha));
    lambdaP = lambda;
    lambda = L + (1 - C) * ellipsoidParams * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
  } while (Math.abs(lambda - lambdaP) > 1e-12 && --iterLimit > 0);
  if (iterLimit === 0) {
    return NaN;
  }
  var uSq = cosSqAlpha * (_constants.earthRadius * _constants.earthRadius - b * b) / (b * b);
  var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
  var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
  var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
  var distance = b * A * (sigma - deltaSigma);
  return Math.round(distance / accuracy) * accuracy;
};
var _default$7 = getDistance2;
getPreciseDistance.default = _default$7;
var getRoughCompassDirection$1 = {};
Object.defineProperty(getRoughCompassDirection$1, "__esModule", { value: true });
getRoughCompassDirection$1.default = void 0;
var getRoughCompassDirection = function getRoughCompassDirection2(exact) {
  if (/^NNE|NE|NNW|N$/.test(exact)) {
    return "N";
  }
  if (/^ENE|E|ESE|SE$/.test(exact)) {
    return "E";
  }
  if (/^SSE|S|SSW|SW$/.test(exact)) {
    return "S";
  }
  if (/^WSW|W|WNW|NW$/.test(exact)) {
    return "W";
  }
};
var _default$6 = getRoughCompassDirection;
getRoughCompassDirection$1.default = _default$6;
var getSpeed$1 = {};
Object.defineProperty(getSpeed$1, "__esModule", { value: true });
getSpeed$1.default = void 0;
var _getDistance$2 = _interopRequireDefault$4(getDistance$2);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var getSpeed = function getSpeed2(start, end) {
  var distanceFn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _getDistance$2.default;
  var distance = distanceFn(start, end);
  var time2 = Number(end.time) - Number(start.time);
  var metersPerSecond = distance / time2 * 1e3;
  return metersPerSecond;
};
var _default$5 = getSpeed;
getSpeed$1.default = _default$5;
var isPointInLine$1 = {};
Object.defineProperty(isPointInLine$1, "__esModule", { value: true });
isPointInLine$1.default = void 0;
var _getDistance$1 = _interopRequireDefault$3(getDistance$2);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var isPointInLine = function isPointInLine2(point, lineStart, lineEnd) {
  return (0, _getDistance$1.default)(lineStart, point) + (0, _getDistance$1.default)(point, lineEnd) === (0, _getDistance$1.default)(lineStart, lineEnd);
};
var _default$4 = isPointInLine;
isPointInLine$1.default = _default$4;
var isPointInPolygon$1 = {};
Object.defineProperty(isPointInPolygon$1, "__esModule", { value: true });
isPointInPolygon$1.default = void 0;
var _getLatitude = _interopRequireDefault$2(getLatitude$1);
var _getLongitude = _interopRequireDefault$2(getLongitude$1);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var isPointInPolygon = function isPointInPolygon2(point, polygon) {
  var isInside = false;
  var totalPolys = polygon.length;
  for (var i = -1, j = totalPolys - 1; ++i < totalPolys; j = i) {
    if (((0, _getLongitude.default)(polygon[i]) <= (0, _getLongitude.default)(point) && (0, _getLongitude.default)(point) < (0, _getLongitude.default)(polygon[j]) || (0, _getLongitude.default)(polygon[j]) <= (0, _getLongitude.default)(point) && (0, _getLongitude.default)(point) < (0, _getLongitude.default)(polygon[i])) && (0, _getLatitude.default)(point) < ((0, _getLatitude.default)(polygon[j]) - (0, _getLatitude.default)(polygon[i])) * ((0, _getLongitude.default)(point) - (0, _getLongitude.default)(polygon[i])) / ((0, _getLongitude.default)(polygon[j]) - (0, _getLongitude.default)(polygon[i])) + (0, _getLatitude.default)(polygon[i])) {
      isInside = !isInside;
    }
  }
  return isInside;
};
var _default$3 = isPointInPolygon;
isPointInPolygon$1.default = _default$3;
var isPointNearLine$1 = {};
Object.defineProperty(isPointNearLine$1, "__esModule", { value: true });
isPointNearLine$1.default = void 0;
var _getDistanceFromLine = _interopRequireDefault$1(getDistanceFromLine$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var isPointNearLine = function isPointNearLine2(point, start, end, distance) {
  return (0, _getDistanceFromLine.default)(point, start, end) < distance;
};
var _default$2 = isPointNearLine;
isPointNearLine$1.default = _default$2;
var isPointWithinRadius$1 = {};
Object.defineProperty(isPointWithinRadius$1, "__esModule", { value: true });
isPointWithinRadius$1.default = void 0;
var _getDistance = _interopRequireDefault(getDistance$2);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var isPointWithinRadius = function isPointWithinRadius2(point, center, radius) {
  return (0, _getDistance.default)(point, center) < radius;
};
var _default$1 = isPointWithinRadius;
isPointWithinRadius$1.default = _default$1;
var wktToPolygon$1 = {};
Object.defineProperty(wktToPolygon$1, "__esModule", { value: true });
wktToPolygon$1.default = void 0;
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var wktToPolygon = function wktToPolygon2(wkt) {
  if (!wkt.startsWith("POLYGON")) {
    throw new Error("Invalid wkt.");
  }
  var coordsText = wkt.slice(wkt.indexOf("(") + 2, wkt.indexOf(")")).split(", ");
  var polygon = coordsText.map(function(coordText) {
    var _coordText$split = coordText.split(" "), _coordText$split2 = _slicedToArray(_coordText$split, 2), longitude = _coordText$split2[0], latitude = _coordText$split2[1];
    return { longitude: parseFloat(longitude), latitude: parseFloat(latitude) };
  });
  return polygon;
};
var _default = wktToPolygon;
wktToPolygon$1.default = _default;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var _exportNames = { computeDestinationPoint: true, convertArea: true, convertDistance: true, convertSpeed: true, decimalToSexagesimal: true, findNearest: true, getAreaOfPolygon: true, getBounds: true, getBoundsOfDistance: true, getCenter: true, getCenterOfBounds: true, getCompassDirection: true, getCoordinateKey: true, getCoordinateKeys: true, getDistance: true, getDistanceFromLine: true, getGreatCircleBearing: true, getLatitude: true, getLongitude: true, getPathLength: true, getPreciseDistance: true, getRhumbLineBearing: true, getRoughCompassDirection: true, getSpeed: true, isDecimal: true, isPointInLine: true, isPointInPolygon: true, isPointNearLine: true, isPointWithinRadius: true, isSexagesimal: true, isValidCoordinate: true, isValidLatitude: true, isValidLongitude: true, orderByDistance: true, sexagesimalToDecimal: true, toDecimal: true, toRad: true, toDeg: true, wktToPolygon: true };
  Object.defineProperty(exports, "computeDestinationPoint", { enumerable: true, get: function get2() {
    return _computeDestinationPoint.default;
  } });
  Object.defineProperty(exports, "convertArea", { enumerable: true, get: function get2() {
    return _convertArea.default;
  } });
  Object.defineProperty(exports, "convertDistance", { enumerable: true, get: function get2() {
    return _convertDistance.default;
  } });
  Object.defineProperty(exports, "convertSpeed", { enumerable: true, get: function get2() {
    return _convertSpeed.default;
  } });
  Object.defineProperty(exports, "decimalToSexagesimal", { enumerable: true, get: function get2() {
    return _decimalToSexagesimal.default;
  } });
  Object.defineProperty(exports, "findNearest", { enumerable: true, get: function get2() {
    return _findNearest.default;
  } });
  Object.defineProperty(exports, "getAreaOfPolygon", { enumerable: true, get: function get2() {
    return _getAreaOfPolygon.default;
  } });
  Object.defineProperty(exports, "getBounds", { enumerable: true, get: function get2() {
    return _getBounds2.default;
  } });
  Object.defineProperty(exports, "getBoundsOfDistance", { enumerable: true, get: function get2() {
    return _getBoundsOfDistance.default;
  } });
  Object.defineProperty(exports, "getCenter", { enumerable: true, get: function get2() {
    return _getCenter.default;
  } });
  Object.defineProperty(exports, "getCenterOfBounds", { enumerable: true, get: function get2() {
    return _getCenterOfBounds.default;
  } });
  Object.defineProperty(exports, "getCompassDirection", { enumerable: true, get: function get2() {
    return _getCompassDirection.default;
  } });
  Object.defineProperty(exports, "getCoordinateKey", { enumerable: true, get: function get2() {
    return _getCoordinateKey2.default;
  } });
  Object.defineProperty(exports, "getCoordinateKeys", { enumerable: true, get: function get2() {
    return _getCoordinateKeys3.default;
  } });
  Object.defineProperty(exports, "getDistance", { enumerable: true, get: function get2() {
    return _getDistance2.default;
  } });
  Object.defineProperty(exports, "getDistanceFromLine", { enumerable: true, get: function get2() {
    return _getDistanceFromLine2.default;
  } });
  Object.defineProperty(exports, "getGreatCircleBearing", { enumerable: true, get: function get2() {
    return _getGreatCircleBearing.default;
  } });
  Object.defineProperty(exports, "getLatitude", { enumerable: true, get: function get2() {
    return _getLatitude2.default;
  } });
  Object.defineProperty(exports, "getLongitude", { enumerable: true, get: function get2() {
    return _getLongitude2.default;
  } });
  Object.defineProperty(exports, "getPathLength", { enumerable: true, get: function get2() {
    return _getPathLength.default;
  } });
  Object.defineProperty(exports, "getPreciseDistance", { enumerable: true, get: function get2() {
    return _getPreciseDistance.default;
  } });
  Object.defineProperty(exports, "getRhumbLineBearing", { enumerable: true, get: function get2() {
    return _getRhumbLineBearing2.default;
  } });
  Object.defineProperty(exports, "getRoughCompassDirection", { enumerable: true, get: function get2() {
    return _getRoughCompassDirection.default;
  } });
  Object.defineProperty(exports, "getSpeed", { enumerable: true, get: function get2() {
    return _getSpeed.default;
  } });
  Object.defineProperty(exports, "isDecimal", { enumerable: true, get: function get2() {
    return _isDecimal2.default;
  } });
  Object.defineProperty(exports, "isPointInLine", { enumerable: true, get: function get2() {
    return _isPointInLine.default;
  } });
  Object.defineProperty(exports, "isPointInPolygon", { enumerable: true, get: function get2() {
    return _isPointInPolygon.default;
  } });
  Object.defineProperty(exports, "isPointNearLine", { enumerable: true, get: function get2() {
    return _isPointNearLine.default;
  } });
  Object.defineProperty(exports, "isPointWithinRadius", { enumerable: true, get: function get2() {
    return _isPointWithinRadius.default;
  } });
  Object.defineProperty(exports, "isSexagesimal", { enumerable: true, get: function get2() {
    return _isSexagesimal2.default;
  } });
  Object.defineProperty(exports, "isValidCoordinate", { enumerable: true, get: function get2() {
    return _isValidCoordinate2.default;
  } });
  Object.defineProperty(exports, "isValidLatitude", { enumerable: true, get: function get2() {
    return _isValidLatitude2.default;
  } });
  Object.defineProperty(exports, "isValidLongitude", { enumerable: true, get: function get2() {
    return _isValidLongitude2.default;
  } });
  Object.defineProperty(exports, "orderByDistance", { enumerable: true, get: function get2() {
    return _orderByDistance2.default;
  } });
  Object.defineProperty(exports, "sexagesimalToDecimal", { enumerable: true, get: function get2() {
    return _sexagesimalToDecimal2.default;
  } });
  Object.defineProperty(exports, "toDecimal", { enumerable: true, get: function get2() {
    return _toDecimal2.default;
  } });
  Object.defineProperty(exports, "toRad", { enumerable: true, get: function get2() {
    return _toRad2.default;
  } });
  Object.defineProperty(exports, "toDeg", { enumerable: true, get: function get2() {
    return _toDeg2.default;
  } });
  Object.defineProperty(exports, "wktToPolygon", { enumerable: true, get: function get2() {
    return _wktToPolygon.default;
  } });
  var _computeDestinationPoint = _interopRequireDefault2(computeDestinationPoint$1);
  var _convertArea = _interopRequireDefault2(convertArea$1);
  var _convertDistance = _interopRequireDefault2(convertDistance$1);
  var _convertSpeed = _interopRequireDefault2(convertSpeed$1);
  var _decimalToSexagesimal = _interopRequireDefault2(decimalToSexagesimal);
  var _findNearest = _interopRequireDefault2(findNearest$1);
  var _getAreaOfPolygon = _interopRequireDefault2(getAreaOfPolygon$1);
  var _getBounds2 = _interopRequireDefault2(getBounds$1);
  var _getBoundsOfDistance = _interopRequireDefault2(getBoundsOfDistance$1);
  var _getCenter = _interopRequireDefault2(getCenter$1);
  var _getCenterOfBounds = _interopRequireDefault2(getCenterOfBounds$1);
  var _getCompassDirection = _interopRequireDefault2(getCompassDirection$1);
  var _getCoordinateKey2 = _interopRequireDefault2(getCoordinateKey$1);
  var _getCoordinateKeys3 = _interopRequireDefault2(getCoordinateKeys$1);
  var _getDistance2 = _interopRequireDefault2(getDistance$2);
  var _getDistanceFromLine2 = _interopRequireDefault2(getDistanceFromLine$1);
  var _getGreatCircleBearing = _interopRequireDefault2(getGreatCircleBearing$1);
  var _getLatitude2 = _interopRequireDefault2(getLatitude$1);
  var _getLongitude2 = _interopRequireDefault2(getLongitude$1);
  var _getPathLength = _interopRequireDefault2(getPathLength$1);
  var _getPreciseDistance = _interopRequireDefault2(getPreciseDistance);
  var _getRhumbLineBearing2 = _interopRequireDefault2(getRhumbLineBearing$1);
  var _getRoughCompassDirection = _interopRequireDefault2(getRoughCompassDirection$1);
  var _getSpeed = _interopRequireDefault2(getSpeed$1);
  var _isDecimal2 = _interopRequireDefault2(isDecimal$1);
  var _isPointInLine = _interopRequireDefault2(isPointInLine$1);
  var _isPointInPolygon = _interopRequireDefault2(isPointInPolygon$1);
  var _isPointNearLine = _interopRequireDefault2(isPointNearLine$1);
  var _isPointWithinRadius = _interopRequireDefault2(isPointWithinRadius$1);
  var _isSexagesimal2 = _interopRequireDefault2(isSexagesimal$1);
  var _isValidCoordinate2 = _interopRequireDefault2(isValidCoordinate$1);
  var _isValidLatitude2 = _interopRequireDefault2(isValidLatitude$1);
  var _isValidLongitude2 = _interopRequireDefault2(isValidLongitude$1);
  var _orderByDistance2 = _interopRequireDefault2(orderByDistance$1);
  var _sexagesimalToDecimal2 = _interopRequireDefault2(sexagesimalToDecimal$1);
  var _toDecimal2 = _interopRequireDefault2(toDecimal$1);
  var _toRad2 = _interopRequireDefault2(toRad$1);
  var _toDeg2 = _interopRequireDefault2(toDeg$1);
  var _wktToPolygon = _interopRequireDefault2(wktToPolygon$1);
  var _constants2 = constants;
  Object.keys(_constants2).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    Object.defineProperty(exports, key, { enumerable: true, get: function get2() {
      return _constants2[key];
    } });
  });
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
})(es);
const Geo = /* @__PURE__ */ getDefaultExportFromCjs(es);
const anyOverlap = (polygonA, polygonB) => {
  return !!(polygonA.find(isIn(polygonB)) || polygonB.find(isIn(polygonA)));
};
const isIn = (polygon) => (point) => Geo.isPointInPolygon(point, polygon);
const areaCoordsToPolygon = (area) => {
  return [
    { latitude: area.north, longitude: area.west },
    { latitude: area.north, longitude: area.east },
    { latitude: area.south, longitude: area.east },
    { latitude: area.south, longitude: area.west }
  ];
};
const boundariesToPolygon = (boundaries) => {
  return boundaries.coordinates.flat().map((coords) => ({
    latitude: coords[1],
    longitude: coords[0]
  }));
};
const areaCoordsFrom = ([long, lat], adjustment = 0) => {
  return {
    north: lat + adjustment,
    south: lat - adjustment,
    east: long + adjustment,
    west: long - adjustment
  };
};
const toXY = (longLat, area, screenDimensions) => {
  if (!longLat || longLat.length !== 2 || !screenDimensions)
    return void 0;
  const ratio = (geoMin, geoMax, geoCoord) => {
    const spanGeo = Math.abs(geoMax - geoMin);
    return Math.abs(geoCoord - geoMin) / spanGeo;
  };
  return {
    x: ratio(area.west, area.east, longLat[0]) * screenDimensions.width,
    y: ratio(area.north, area.south, longLat[1]) * screenDimensions.height
  };
};
class ClientError extends Error {
  constructor(msg) {
    super(msg);
  }
}
class ServiceError extends Error {
  constructor(msg, service) {
    super(msg);
    __publicField(this, "service");
    this.service = service;
  }
}
const yieldPerMonth = (hourlyYield) => hourlyYield * 24 * DAYS_IN_MONTH;
let Error$1 = class Error2 extends ServiceError {
  constructor(msg) {
    super(msg, "neighbourhood");
  }
};
let rents;
let hoods;
const FUZZY_AREA_RADIUS = 5e-3;
const fetchAll = async (api, opts) => {
  if (hoods)
    return hoods;
  return await timedSingleInvocation({ ...opts == null ? void 0 : opts.timerOpts, label: "hood - fetchAll" }, async () => {
    const all = await api.listNeighbourhoods(opts);
    hoods = all.reduce((map, hood) => {
      map[hood.id] = hood;
      return map;
    }, {});
    return hoods;
  });
};
const monthlyRentPerUnitFor = async (neighbourhoodId, api, opts) => {
  return timedSingleInvocation({ ...opts == null ? void 0 : opts.timerOpts, label: `monthlyRentPerUnitFor ${neighbourhoodId}` }, async (timerOpts) => {
    rents || (rents = await getNeighbourhoodYields());
    const rent = rents[neighbourhoodId];
    const hasAlreadyAttemptedToFetchRentThisSession = typeof rent !== "undefined";
    if (rent || hasAlreadyAttemptedToFetchRentThisSession)
      return rent;
    const neighbourhoods = await fetchAll(api, { timerOpts, ...opts });
    const hood = neighbourhoods[neighbourhoodId];
    if (!hood)
      throw new Error$1(`Unknown hood (Id: ${neighbourhoodId})`);
    if (!hood.center)
      throw new Error$1(`Hood has no center coords (Id: ${neighbourhoodId})`);
    const hoodAreaCoords = areaCoordsFrom(
      hood.center.coordinates,
      FUZZY_AREA_RADIUS
    );
    const res = (await api.listProperties(hoodAreaCoords, { limit: 1, offset: 0 }, "asc", opts)).properties || [];
    if (!res || res.length === 0) {
      return null;
    }
    const propertySummary = res[0];
    const property = await api.property(propertySummary.prop_id, opts);
    const monthlyRent = yieldPerMonth(property.yield_per_hour);
    const amt = monthlyRent / property.area;
    rents[neighbourhoodId] = amt;
    setNeighbourhoodYields(rents);
    return amt;
  });
};
const neighbourhoodsWithin = async (area, api, opts) => {
  return await timedSingleInvocation({ ...opts == null ? void 0 : opts.timerOpts, label: "neighbourhoodsWithin" }, async (timerOpts) => {
    const neighbourhoods = await fetchAll(api, { timerOpts, ...opts });
    const polygon = areaCoordsToPolygon(area);
    return Object.values(neighbourhoods).filter((hood) => {
      if (!(hood == null ? void 0 : hood.boundaries))
        return false;
      const points = boundariesToPolygon(hood.boundaries);
      return anyOverlap(polygon, points);
    });
  });
};
const decorate = (hoods2, state, api, opts) => {
  return timedSingleInvocation({ ...opts == null ? void 0 : opts.timerOpts, label: "neighbourhood decorate" }, async (timerOpts) => {
    const promises = hoods2.map(async (hood) => {
      const upx = await monthlyRentPerUnitFor(hood.id, api, { timerOpts });
      return {
        ...hood,
        monthlyYield: hood.monthlyYield || (upx ? parseFloat(upx.toFixed(2)) : null),
        screenCoords: hood.screenCoords || screenCoordsFor(
          hood,
          state.currentCoordinates,
          state.screenDimensions
        )
      };
    });
    return Promise.all(promises);
  });
};
const screenCoordsFor = (hood, area, screenDimensions) => {
  var _a, _b;
  const boundaries = areaCoordsToPolygon(area);
  if (!((_a = hood.center) == null ? void 0 : _a.coordinates))
    return;
  const coords = {
    latitude: hood.center.coordinates[1],
    longitude: hood.center.coordinates[0]
  };
  if (!isIn(boundaries)(coords))
    return;
  return toXY((_b = hood.center) == null ? void 0 : _b.coordinates, area, screenDimensions);
};
const isMyProperty = (prop) => typeof prop.owner === "undefined";
const Model = (obj, rentUPXPerUnitPerMo) => ({
  rentUPXPerUnitPerMo,
  attrs() {
    return { ...obj };
  },
  monthlyRentUPX() {
    const attrs = this.attrs();
    if (isMyProperty(attrs))
      return Number(yieldPerMonth(attrs.yield_per_hour).toFixed(2));
    return this.rentUPXPerUnitPerMo ? Number((attrs.area * this.rentUPXPerUnitPerMo).toFixed(2)) : void 0;
  },
  currency() {
    const attrs = this.attrs();
    if (isMyProperty(attrs)) {
      return attrs.sale_fiat_price !== null ? "USD" : "UPX";
    }
    const { on_market, currency } = attrs;
    return (on_market == null ? void 0 : on_market.currency) || currency;
  },
  priceUPX() {
    const attrs = this.attrs();
    if (isMyProperty(attrs)) {
      if (attrs.sale_fiat_price)
        return attrs.sale_fiat_price * UPX_EXCHANGE_RATE;
      if (attrs.sale_upx_price)
        return attrs.sale_upx_price;
    }
    return this.currency() === "USD" ? attrs.price * UPX_EXCHANGE_RATE : attrs.price;
  },
  roi() {
    const rent = this.monthlyRentUPX();
    return rent ? `${(rent * 12 / this.priceUPX() * 100).toFixed(3)}%` : void 0;
  },
  toJSON() {
    return {
      ...this.attrs(),
      monthlyRentUPX: this.monthlyRentUPX(),
      roi: this.roi(),
      priceUPX: this.priceUPX(),
      currency: this.currency()
    };
  }
});
const propertiesWithRent = async (hoods2, area, api, opts) => {
  return await time({ ...opts == null ? void 0 : opts.timerOpts, label: "propertiesWithRent" }, async (timerOpts) => {
    if (hoods2.length !== 1)
      return;
    const hood = hoods2[0];
    const rentUpx = await monthlyRentPerUnitFor(hood.id, api, { timerOpts, ...opts });
    const properties = (await api.listAllProperties(area, opts)).properties;
    return properties.map((attrs) => Model(attrs, rentUpx).toJSON());
  });
};
const stashedProperties = async (api, opts) => {
  return await time({ label: "stashedProperties" }, async (timerOpts) => {
    const properties = await getStashedProperties();
    return Promise.all(
      properties.map(async ({ id, hoodId }) => {
        const rentUpx = await monthlyRentPerUnitFor(hoodId, api, { timerOpts, ...opts });
        return Model(await api.property(id, opts), rentUpx);
      })
    );
  });
};
export {
  APP_URL as A,
  ClientError as C,
  Model as M,
  SharedState as S,
  TAB_URL as T,
  UplandApi as U,
  stashedProperties as a,
  UPX_EXCHANGE_RATE as b,
  commonjsGlobal as c,
  decorate as d,
  API_BASE_URL as e,
  getStashedProperties as g,
  neighbourhoodsWithin as n,
  propertiesWithRent as p,
  setStashedProperties as s,
  time as t
};
