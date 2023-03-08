var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function() {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = "\n.v-spinner .v-bounce\n{\n}\n.v-spinner .v-bounce1\n{\n}\n.v-spinner .v-bounce2\n{\n\n    -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n            animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n.v-spinner .v-bounce3\n{\n    -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n            animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n@-webkit-keyframes v-bounceStretchDelay\n{\n0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n}\n50%\n    { \n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n}\n}\n@keyframes v-bounceStretchDelay\n{\n0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n}\n50%\n    { \n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n}\n}\n\nheader[data-v-719ce579] {\n  line-height: 1.5;\n  max-height: 100vh;\n  justify-content: space-between;\n  display: flex;\n  place-items: center;\n  align-items: baseline;\n  width: 100%;\n  margin-bottom: 1rem;\n}\nheader .Links[data-v-719ce579] {\n  display: flex;\n  place-items: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n}\nheader h2[data-v-719ce579] {\n  margin-right: 60px;\n}\nnav[data-v-719ce579] {\n  margin-top: 2rem;\n  text-align: left;\n  font-size: 1rem;\n  margin-top: 0;\n}\nnav a.router-link-exact-active[data-v-719ce579] {\n  color: var(--color-text);\n}\nnav a.router-link-exact-active[data-v-719ce579]:hover {\n  background-color: transparent;\n}\nnav a[data-v-719ce579] {\n  display: inline-block;\n  padding: 0 1rem;\n  border-left: 1px solid var(--color-border);\n}\n.Offline[data-v-719ce579] {\n  margin-top: 30px;\n  text-align: center;\n}\n\n.Stat[data-v-7d77c629] {\n  padding: 5px 0;\n}\n.Stat label[data-v-7d77c629] {\n  font-weight: 800;\n  width: 135px;\n  display: inline-block;\n}\n.Stat span[data-v-7d77c629] {\n  font-weight: 400;\n  margin-left: 5px;\n  display: inline-block;\n}\n\n.PageStats[data-v-687d10c9] {\n  padding-top: 1rem;\n}\n\n.SimpleList > .ListHeader[data-v-e7da9f49] {\n  display: flex;\n  justify-content: space-between;\n}\n.SimpleList > .Filter[data-v-e7da9f49] {\n  display: block;\n  text-align: right;\n}\n.SimpleList > .Filter input[data-v-e7da9f49] {\n  border-radius: 4px;\n  padding: 3px 5px;\n}\n.SimpleList > table[data-v-e7da9f49] {\n  border: 1px solid hsla(160, 100%, 37%, 1);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  margin: 10px 0 0 0;\n  border-spacing: 0;\n  width: 100%;\n}\n.SimpleList > table > thead > tr > th[data-v-e7da9f49] {\n  font-weight: 800;\n  background: #254545;\n  color: hsla(160, 100%, 37%, 1);\n  padding: 5px;\n}\n.SimpleList > table > thead > tr > th[data-v-e7da9f49]:first-child {\n  border-top-left-radius: 10px;\n}\n.SimpleList > table > thead > tr > th[data-v-e7da9f49]:last-child {\n  border-top-right-radius: 10px;\n}\n.SimpleList > table > thead > tr > th > .Header[data-v-e7da9f49] {\n  display: flex;\n}\n.SimpleList > table > thead > tr > th > .Header .Sort[data-v-e7da9f49] {\n  margin-left: 5px;\n}\n.SimpleList > table > tbody[data-v-e7da9f49] {\n  border: 1px solid hsla(160, 100%, 37%, 1);\n  border-top: none;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.SimpleList > table > tbody > tr.Expandable[data-v-e7da9f49] {\n  cursor: pointer;\n}\n.SimpleList > table > tbody > tr > td[data-v-e7da9f49] {\n  padding: 0 5px;\n  border-bottom: 1px dotted #2f2f2f;\n}\n.SimpleList > table > tbody > tr > td > .Actions[data-v-e7da9f49] {\n  display: flex;\n}\n.SimpleList > table > tbody .Hidden[data-v-e7da9f49] {\n  display: none;\n}\n\n.Hood[data-v-50a5c01a] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.Hood .Yield[data-v-50a5c01a] {\n  max-width: 100px;\n}\n.EmptyMsg[data-v-50a5c01a] {\n  text-align: center;\n}\n\n.LabelAndField[data-v-c0530f4a] {\n  display: flex;\n}\n.LabelAndField > label[data-v-c0530f4a] {\n  width: 150px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.LabelAndField > div[data-v-c0530f4a] {\n  overflow-x: auto;\n}\n\n.PropertyDetails[data-v-42f95ba9] {\n  padding: 15px;\n  background: #2f2f2f;\n  box-shadow: inset 0px 6px 12px rgb(0 0 0 / 50%);\n}\n.PropertyDetails .Prop[data-v-42f95ba9] {\n  display: flex;\n  border-bottom: 1px dotted #5f5f5f;\n}\n.PropertyDetails .Prop label[data-v-42f95ba9] {\n  width: 200px;\n}\n\n.Info[data-v-b4a4f271] {\n  text-align: center;\n}\n\n.EmptyMsg[data-v-d0d9bc81] {\n  text-align: center;\n}\n\n.MyProperties[data-v-421c4931] {\n  margin-top: 15px;\n}\n/* color palette from <https://github.com/vuejs/theme> */\n:root {\n  --vt-c-white: #ffffff;\n  --vt-c-white-soft: #f8f8f8;\n  --vt-c-white-mute: #f2f2f2;\n\n  --vt-c-black: #181818;\n  --vt-c-black-soft: #222222;\n  --vt-c-black-mute: #282828;\n\n  --vt-c-indigo: #2c3e50;\n\n  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);\n  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);\n  --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);\n  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);\n\n  --vt-c-text-light-1: var(--vt-c-indigo);\n  --vt-c-text-light-2: rgba(60, 60, 60, 0.66);\n  --vt-c-text-dark-1: var(--vt-c-white);\n  --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);\n}\n/* semantic color variables for this project */\n:root {\n  --color-background: var(--vt-c-white);\n  --color-background-soft: var(--vt-c-white-soft);\n  --color-background-mute: var(--vt-c-white-mute);\n\n  --color-border: var(--vt-c-divider-light-2);\n  --color-border-hover: var(--vt-c-divider-light-1);\n\n  --color-heading: var(--vt-c-text-light-1);\n  --color-text: var(--vt-c-text-light-1);\n\n  --section-gap: 160px;\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-background: var(--vt-c-black);\n    --color-background-soft: var(--vt-c-black-soft);\n    --color-background-mute: var(--vt-c-black-mute);\n\n    --color-border: var(--vt-c-divider-dark-2);\n    --color-border-hover: var(--vt-c-divider-dark-1);\n\n    --color-heading: var(--vt-c-text-dark-1);\n    --color-text: var(--vt-c-text-dark-2);\n  }\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  position: relative;\n  font-weight: normal;\n}\nbody {\n  min-height: 100vh;\n  color: var(--color-text);\n  background: var(--color-background);\n  transition: color 0.5s, background-color 0.5s;\n  line-height: 1.6;\n  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  font-size: 12px;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n#app {\n  max-width: 1280px;\n  min-width: 550px;\n  margin: 0 auto;\n  padding: 2rem;\n\n  font-weight: normal;\n}\na,\n.Green {\n  text-decoration: none;\n  color: hsla(160, 100%, 37%, 1);\n  transition: 0.4s;\n}\nh1 {\n  font-weight: 500;\n  font-size: 2.6rem;\n}\nh2 {\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n@media (hover: hover) {\n  a:hover {\n    background-color: hsla(160, 100%, 37%, 0.2);\n  }\n}\n@media (min-width: 1024px) {\n  body {\n    display: flex;\n    place-items: center;\n  }\n\n  #app {\n\n  }\n}\n.Icon {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.Icon svg {\n  max-width: 25px;\n  max-height: 25px;\n  min-width: 20px;\n  min-height: 20px;\n}\n";
  document.head.appendChild(__vite_style__);
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  function normalizeStyle(value) {
    if (isArray$1(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value)) {
      return value;
    } else if (isObject(value)) {
      return value;
    }
  }
  const listDelimiterRE = /;(?![^(]*\))/g;
  const propertyDelimiterRE = /:([^]+)/;
  const styleCommentRE = /\/\*.*?\*\//gs;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray$1(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  const toDisplayString = (val) => {
    return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  const replacer = (_key, val) => {
    if (val && val.__v_isRef) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject(val) && !isArray$1(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  const EMPTY_OBJ = {};
  const EMPTY_ARR = [];
  const NOOP = () => {
  };
  const NO = () => false;
  const onRE = /^on[^a-z]/;
  const isOn = (key) => onRE.test(key);
  const isModelListener = (key) => key.startsWith("onUpdate:");
  const extend = Object.assign;
  const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const isArray$1 = Array.isArray;
  const isMap = (val) => toTypeString(val) === "[object Map]";
  const isSet = (val) => toTypeString(val) === "[object Set]";
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isSymbol = (val) => typeof val === "symbol";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  const isReservedProp = /* @__PURE__ */ makeMap(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  const cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  const camelizeRE = /-(\w)/g;
  const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  const hyphenateRE = /\B([A-Z])/g;
  const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  let activeEffectScope;
  class EffectScope {
    constructor(detached = false) {
      this.detached = detached;
      this.active = true;
      this.effects = [];
      this.cleanups = [];
      this.parent = activeEffectScope;
      if (!detached && activeEffectScope) {
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
      }
    }
    run(fn) {
      if (this.active) {
        const currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      activeEffectScope = this.parent;
    }
    stop(fromParent) {
      if (this.active) {
        let i, l;
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
        }
        if (!this.detached && this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.parent = void 0;
        this.active = false;
      }
    }
  }
  function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) {
      scope.effects.push(effect);
    }
  }
  const createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
  };
  const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
  const newTracked = (dep) => (dep.n & trackOpBit) > 0;
  const initDepMarkers = ({ deps }) => {
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].w |= trackOpBit;
      }
    }
  };
  const finalizeDepMarkers = (effect) => {
    const { deps } = effect;
    if (deps.length) {
      let ptr = 0;
      for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        if (wasTracked(dep) && !newTracked(dep)) {
          dep.delete(effect);
        } else {
          deps[ptr++] = dep;
        }
        dep.w &= ~trackOpBit;
        dep.n &= ~trackOpBit;
      }
      deps.length = ptr;
    }
  };
  const targetMap = /* @__PURE__ */ new WeakMap();
  let effectTrackDepth = 0;
  let trackOpBit = 1;
  const maxMarkerBits = 30;
  let activeEffect;
  const ITERATE_KEY = Symbol("");
  const MAP_KEY_ITERATE_KEY = Symbol("");
  class ReactiveEffect {
    constructor(fn, scheduler = null, scope) {
      this.fn = fn;
      this.scheduler = scheduler;
      this.active = true;
      this.deps = [];
      this.parent = void 0;
      recordEffectScope(this, scope);
    }
    run() {
      if (!this.active) {
        return this.fn();
      }
      let parent = activeEffect;
      let lastShouldTrack = shouldTrack;
      while (parent) {
        if (parent === this) {
          return;
        }
        parent = parent.parent;
      }
      try {
        this.parent = activeEffect;
        activeEffect = this;
        shouldTrack = true;
        trackOpBit = 1 << ++effectTrackDepth;
        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }
        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }
        trackOpBit = 1 << --effectTrackDepth;
        activeEffect = this.parent;
        shouldTrack = lastShouldTrack;
        this.parent = void 0;
        if (this.deferStop) {
          this.stop();
        }
      }
    }
    stop() {
      if (activeEffect === this) {
        this.deferStop = true;
      } else if (this.active) {
        cleanupEffect(this);
        if (this.onStop) {
          this.onStop();
        }
        this.active = false;
      }
    }
  }
  function cleanupEffect(effect) {
    const { deps } = effect;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect);
      }
      deps.length = 0;
    }
  }
  let shouldTrack = true;
  const trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (shouldTrack && activeEffect) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = createDep());
      }
      trackEffects(dep);
    }
  }
  function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack2 = false;
    if (effectTrackDepth <= maxMarkerBits) {
      if (!newTracked(dep)) {
        dep.n |= trackOpBit;
        shouldTrack2 = !wasTracked(dep);
      }
    } else {
      shouldTrack2 = !dep.has(activeEffect);
    }
    if (shouldTrack2) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    let deps = [];
    if (type === "clear") {
      deps = [...depsMap.values()];
    } else if (key === "length" && isArray$1(target)) {
      const newLength = toNumber(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newLength) {
          deps.push(dep);
        }
      });
    } else {
      if (key !== void 0) {
        deps.push(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray$1(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            deps.push(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray$1(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    if (deps.length === 1) {
      if (deps[0]) {
        {
          triggerEffects(deps[0]);
        }
      }
    } else {
      const effects = [];
      for (const dep of deps) {
        if (dep) {
          effects.push(...dep);
        }
      }
      {
        triggerEffects(createDep(effects));
      }
    }
  }
  function triggerEffects(dep, debuggerEventExtraInfo) {
    const effects = isArray$1(dep) ? dep : [...dep];
    for (const effect of effects) {
      if (effect.computed) {
        triggerEffect(effect);
      }
    }
    for (const effect of effects) {
      if (!effect.computed) {
        triggerEffect(effect);
      }
    }
  }
  function triggerEffect(effect, debuggerEventExtraInfo) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
  const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  const builtInSymbols = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
  );
  const get$1 = /* @__PURE__ */ createGetter();
  const shallowGet = /* @__PURE__ */ createGetter(false, true);
  const readonlyGet = /* @__PURE__ */ createGetter(true);
  const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get2(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return shallow;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray$1(target);
      if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        return targetIsArray && isIntegerKey(key) ? res : res.value;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    };
  }
  const set$1 = /* @__PURE__ */ createSetter();
  const shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set2(target, key, value, receiver) {
      let oldValue = target[key];
      if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
        return false;
      }
      if (!shallow) {
        if (!isShallow(value) && !isReadonly(value)) {
          oldValue = toRaw(oldValue);
          value = toRaw(value);
        }
        if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys$2(target) {
    track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  const mutableHandlers = {
    get: get$1,
    set: set$1,
    deleteProperty,
    has,
    ownKeys: ownKeys$2
  };
  const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      return true;
    },
    deleteProperty(target, key) {
      return true;
    }
  };
  const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  const toShallow = (value) => value;
  const getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1$1(target, key, isReadonly2 = false, isShallow2 = false) {
    target = target[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (key !== rawKey) {
        track(rawTarget, "get", key);
      }
      track(rawTarget, "get", rawKey);
    }
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly2 = false) {
    const target = this[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (key !== rawKey) {
        track(rawTarget, "has", key);
      }
      track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    }
    get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow2) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      const rawTarget = toRaw(target);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target = this[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  const shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  const reactiveMap = /* @__PURE__ */ new WeakMap();
  const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  const readonlyMap = /* @__PURE__ */ new WeakMap();
  const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value[
      "__v_skip"
      /* ReactiveFlags.SKIP */
    ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      return target;
    }
    if (target[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ] && !(isReadonly2 && target[
      "__v_isReactive"
      /* ReactiveFlags.IS_REACTIVE */
    ])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ]);
    }
    return !!(value && value[
      "__v_isReactive"
      /* ReactiveFlags.IS_REACTIVE */
    ]);
  }
  function isReadonly(value) {
    return !!(value && value[
      "__v_isReadonly"
      /* ReactiveFlags.IS_READONLY */
    ]);
  }
  function isShallow(value) {
    return !!(value && value[
      "__v_isShallow"
      /* ReactiveFlags.IS_SHALLOW */
    ]);
  }
  function isProxy(value) {
    return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
    const raw = observed && observed[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    def(value, "__v_skip", true);
    return value;
  }
  const toReactive = (value) => isObject(value) ? reactive(value) : value;
  const toReadonly = (value) => isObject(value) ? readonly(value) : value;
  function trackRefValue(ref2) {
    if (shouldTrack && activeEffect) {
      ref2 = toRaw(ref2);
      {
        trackEffects(ref2.dep || (ref2.dep = createDep()));
      }
    }
  }
  function triggerRefValue(ref2, newVal) {
    ref2 = toRaw(ref2);
    if (ref2.dep) {
      {
        triggerEffects(ref2.dep);
      }
    }
  }
  function isRef(r) {
    return !!(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value, false);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  class RefImpl {
    constructor(value, __v_isShallow) {
      this.__v_isShallow = __v_isShallow;
      this.dep = void 0;
      this.__v_isRef = true;
      this._rawValue = __v_isShallow ? value : toRaw(value);
      this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
      trackRefValue(this);
      return this._value;
    }
    set value(newVal) {
      const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
      newVal = useDirectValue ? newVal : toRaw(newVal);
      if (hasChanged(newVal, this._rawValue)) {
        this._rawValue = newVal;
        this._value = useDirectValue ? newVal : toReactive(newVal);
        triggerRefValue(this);
      }
    }
  }
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  var _a;
  class ComputedRefImpl {
    constructor(getter, _setter, isReadonly2, isSSR) {
      this._setter = _setter;
      this.dep = void 0;
      this.__v_isRef = true;
      this[_a] = false;
      this._dirty = true;
      this.effect = new ReactiveEffect(getter, () => {
        if (!this._dirty) {
          this._dirty = true;
          triggerRefValue(this);
        }
      });
      this.effect.computed = this;
      this.effect.active = this._cacheable = !isSSR;
      this[
        "__v_isReadonly"
        /* ReactiveFlags.IS_READONLY */
      ] = isReadonly2;
    }
    get value() {
      const self2 = toRaw(this);
      trackRefValue(self2);
      if (self2._dirty || !self2._cacheable) {
        self2._dirty = false;
        self2._value = self2.effect.run();
      }
      return self2._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
  }
  _a = "__v_isReadonly";
  function computed$1(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
      getter = getterOrOptions;
      setter = NOOP;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    return cRef;
  }
  function warn(msg, ...args) {
    return;
  }
  function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
      res = args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
    return res;
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = type;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      const appErrorHandler = instance.appContext.config.errorHandler;
      if (appErrorHandler) {
        callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
    {
      console.error(err);
    }
  }
  let isFlushing = false;
  let isFlushPending = false;
  const queue = [];
  let flushIndex = 0;
  const pendingPostFlushCbs = [];
  let activePostFlushCbs = null;
  let postFlushIndex = 0;
  const resolvedPromise = /* @__PURE__ */ Promise.resolve();
  let currentFlushPromise = null;
  function nextTick(fn) {
    const p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJobId = getId(queue[middle]);
      middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
  }
  function queueJob(job) {
    if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
      if (job.id == null) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(job.id), 0, job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
      queue.splice(i, 1);
    }
  }
  function queuePostFlushCb(cb) {
    if (!isArray$1(cb)) {
      if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
        pendingPostFlushCbs.push(cb);
      }
    } else {
      pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
  }
  function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
    for (; i < queue.length; i++) {
      const cb = queue[i];
      if (cb && cb.pre) {
        queue.splice(i, 1);
        i--;
        cb();
      }
    }
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)];
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  const getId = (job) => job.id == null ? Infinity : job.id;
  const comparator = (a, b) => {
    const diff = getId(a) - getId(b);
    if (diff === 0) {
      if (a.pre && !b.pre)
        return -1;
      if (b.pre && !a.pre)
        return 1;
    }
    return diff;
  };
  function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    queue.sort(comparator);
    const check = NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && job.active !== false) {
          if (false)
            ;
          callWithErrorHandling(
            job,
            null,
            14
            /* ErrorCodes.SCHEDULER */
          );
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs();
      isFlushing = false;
      currentFlushPromise = null;
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs();
      }
    }
  }
  function emit$1(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
      return;
    const props = instance.vnode.props || EMPTY_OBJ;
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props) {
      const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
      const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
      if (trim) {
        args = rawArgs.map((a) => isString(a) ? a.trim() : a);
      }
      if (number) {
        args = rawArgs.map(toNumber);
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(handler, instance, 6, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, null);
      }
      return null;
    }
    if (isArray$1(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    if (isObject(comp)) {
      cache.set(comp, normalized);
    }
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  let currentRenderingInstance = null;
  let currentScopeId = null;
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function pushScopeId(id) {
    currentScopeId = id;
  }
  function popScopeId() {
    currentScopeId = null;
  }
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx)
      return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      let res;
      try {
        res = fn(...args);
      } finally {
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
          setBlockTracking(1);
        }
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  function markAttrsAccessed() {
  }
  function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
        const render2 = Component;
        if (false)
          ;
        result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
          get attrs() {
            markAttrsAccessed();
            return attrs;
          },
          slots,
          emit
        } : { attrs, slots, emit }) : render2(
          props,
          null
          /* we know it doesn't need it */
        ));
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(
        err,
        instance,
        1
        /* ErrorCodes.RENDER_FUNCTION */
      );
      result = createVNode(Comment);
    }
    let root = result;
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
          }
          root = cloneVNode(root, fallthroughAttrs);
        }
      }
    }
    if (vnode.dirs) {
      root = cloneVNode(root);
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      root.transition = vnode.transition;
    }
    {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent && parent.subTree === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    }
  }
  const isSuspense = (type) => type.__isSuspense;
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray$1(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  function provide(key, value) {
    if (!currentInstance)
      ;
    else {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
      const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
      } else
        ;
    }
  }
  const INITIAL_WATCHER_VALUE = {};
  function watch(source, cb, options) {
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
      getter = () => source.value;
      forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
      getter = () => source;
      deep = true;
    } else if (isArray$1(source)) {
      isMultiSource = true;
      forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
      getter = () => source.map((s) => {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction(s)) {
          return callWithErrorHandling(
            s,
            instance,
            2
            /* ErrorCodes.WATCH_GETTER */
          );
        } else
          ;
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = () => callWithErrorHandling(
          source,
          instance,
          2
          /* ErrorCodes.WATCH_GETTER */
        );
      } else {
        getter = () => {
          if (instance && instance.isUnmounted) {
            return;
          }
          if (cleanup) {
            cleanup();
          }
          return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
        };
      }
    } else {
      getter = NOOP;
    }
    if (cb && deep) {
      const baseGetter = getter;
      getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
      cleanup = effect.onStop = () => {
        callWithErrorHandling(
          fn,
          instance,
          4
          /* ErrorCodes.WATCH_CLEANUP */
        );
      };
    };
    let ssrCleanup;
    if (isInSSRComponentSetup) {
      onCleanup = NOOP;
      if (!cb) {
        getter();
      } else if (immediate) {
        callWithAsyncErrorHandling(cb, instance, 3, [
          getter(),
          isMultiSource ? [] : void 0,
          onCleanup
        ]);
      }
      if (flush === "sync") {
        const ctx = useSSRContext();
        ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
      } else {
        return NOOP;
      }
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = () => {
      if (!effect.active) {
        return;
      }
      if (cb) {
        const newValue = effect.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
          if (cleanup) {
            cleanup();
          }
          callWithAsyncErrorHandling(cb, instance, 3, [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            onCleanup
          ]);
          oldValue = newValue;
        }
      } else {
        effect.run();
      }
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") {
      scheduler = job;
    } else if (flush === "post") {
      scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    } else {
      job.pre = true;
      if (instance)
        job.id = instance.uid;
      scheduler = () => queueJob(job);
    }
    const effect = new ReactiveEffect(getter, scheduler);
    if (cb) {
      if (immediate) {
        job();
      } else {
        oldValue = effect.run();
      }
    } else if (flush === "post") {
      queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    } else {
      effect.run();
    }
    const unwatch = () => {
      effect.stop();
      if (instance && instance.scope) {
        remove(instance.scope.effects, effect);
      }
    };
    if (ssrCleanup)
      ssrCleanup.push(unwatch);
    return unwatch;
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
      setCurrentInstance(cur);
    } else {
      unsetCurrentInstance();
    }
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i = 0; i < segments.length && cur; i++) {
        cur = cur[segments[i]];
      }
      return cur;
    };
  }
  function traverse(value, seen) {
    if (!isObject(value) || value[
      "__v_skip"
      /* ReactiveFlags.SKIP */
    ]) {
      return value;
    }
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) {
      return value;
    }
    seen.add(value);
    if (isRef(value)) {
      traverse(value.value, seen);
    } else if (isArray$1(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], seen);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, seen);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], seen);
      }
    }
    return value;
  }
  function defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
  }
  const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(
      type,
      hook,
      keepAliveRoot,
      true
      /* prepend */
    );
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        unsetCurrentInstance();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    }
  }
  const createHook = (lifecycle) => (hook, target = currentInstance) => (
    // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
    (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
  );
  const onBeforeMount = createHook(
    "bm"
    /* LifecycleHooks.BEFORE_MOUNT */
  );
  const onMounted = createHook(
    "m"
    /* LifecycleHooks.MOUNTED */
  );
  const onBeforeUpdate = createHook(
    "bu"
    /* LifecycleHooks.BEFORE_UPDATE */
  );
  const onUpdated = createHook(
    "u"
    /* LifecycleHooks.UPDATED */
  );
  const onBeforeUnmount = createHook(
    "bum"
    /* LifecycleHooks.BEFORE_UNMOUNT */
  );
  const onUnmounted = createHook(
    "um"
    /* LifecycleHooks.UNMOUNTED */
  );
  const onServerPrefetch = createHook(
    "sp"
    /* LifecycleHooks.SERVER_PREFETCH */
  );
  const onRenderTriggered = createHook(
    "rtg"
    /* LifecycleHooks.RENDER_TRIGGERED */
  );
  const onRenderTracked = createHook(
    "rtc"
    /* LifecycleHooks.RENDER_TRACKED */
  );
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
      return vnode;
    }
    const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
      let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
      if (dir) {
        if (isFunction(dir)) {
          dir = {
            mounted: dir,
            updated: dir
          };
        }
        if (dir.deep) {
          traverse(value);
        }
        bindings.push({
          dir,
          instance,
          value,
          oldValue: void 0,
          arg,
          modifiers
        });
      }
    }
    return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  const COMPONENTS = "components";
  function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
  }
  const NULL_DYNAMIC_COMPONENT = Symbol();
  function resolveDynamicComponent(component) {
    if (isString(component)) {
      return resolveAsset(COMPONENTS, component, false) || component;
    } else {
      return component || NULL_DYNAMIC_COMPONENT;
    }
  }
  function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
      const Component = instance.type;
      if (type === COMPONENTS) {
        const selfName = getComponentName(
          Component,
          false
          /* do not include inferred name to avoid breaking existing code */
        );
        if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
          return Component;
        }
      }
      const res = (
        // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name)
      );
      if (!res && maybeSelfReference) {
        return Component;
      }
      return res;
    }
  }
  function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
  }
  function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if (isArray$1(source) || isString(source)) {
      ret = new Array(source.length);
      for (let i = 0, l = source.length; i < l; i++) {
        ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
      }
    } else if (typeof source === "number") {
      ret = new Array(source);
      for (let i = 0; i < source; i++) {
        ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
      }
    } else if (isObject(source)) {
      if (source[Symbol.iterator]) {
        ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
      } else {
        const keys = Object.keys(source);
        ret = new Array(keys.length);
        for (let i = 0, l = keys.length; i < l; i++) {
          const key = keys[i];
          ret[i] = renderItem(source[key], key, i, cached && cached[i]);
        }
      }
    } else {
      ret = [];
    }
    if (cache) {
      cache[index] = ret;
    }
    return ret;
  }
  function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
      if (name !== "default")
        props.name = name;
      return createVNode("slot", props, fallback && fallback());
    }
    let slot = slots[name];
    if (slot && slot._c) {
      slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(
      Fragment,
      {
        key: props.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        validSlotContent && validSlotContent.key || `_${name}`
      },
      validSlotContent || (fallback ? fallback() : []),
      validSlotContent && slots._ === 1 ? 64 : -2
      /* PatchFlags.BAIL */
    );
    if (!noSlotted && rendered.scopeId) {
      rendered.slotScopeIds = [rendered.scopeId + "-s"];
    }
    if (slot && slot._c) {
      slot._d = true;
    }
    return rendered;
  }
  function ensureValidVNode(vnodes) {
    return vnodes.some((child) => {
      if (!isVNode(child))
        return true;
      if (child.type === Comment)
        return false;
      if (child.type === Fragment && !ensureValidVNode(child.children))
        return false;
      return true;
    }) ? vnodes : null;
  }
  const getPublicInstance = (i) => {
    if (!i)
      return null;
    if (isStatefulComponent(i))
      return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
  };
  const publicPropertiesMap = (
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
      $: (i) => i,
      $el: (i) => i.vnode.el,
      $data: (i) => i.data,
      $props: (i) => i.props,
      $attrs: (i) => i.attrs,
      $slots: (i) => i.slots,
      $refs: (i) => i.refs,
      $parent: (i) => getPublicInstance(i.parent),
      $root: (i) => getPublicInstance(i.root),
      $emit: (i) => i.emit,
      $options: (i) => resolveMergedOptions(i),
      $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
      $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
      $watch: (i) => instanceWatch.bind(i)
    })
  );
  const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
  const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
      const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
      let normalizedProps;
      if (key[0] !== "$") {
        const n = accessCache[key];
        if (n !== void 0) {
          switch (n) {
            case 1:
              return setupState[key];
            case 2:
              return data[key];
            case 4:
              return ctx[key];
            case 3:
              return props[key];
          }
        } else if (hasSetupBinding(setupState, key)) {
          accessCache[key] = 1;
          return setupState[key];
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          accessCache[key] = 2;
          return data[key];
        } else if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
        ) {
          accessCache[key] = 3;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 4;
          return ctx[key];
        } else if (shouldCacheAccess) {
          accessCache[key] = 0;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key === "$attrs") {
          track(instance, "get", key);
        }
        return publicGetter(instance);
      } else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])
      ) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (
        // global properties
        globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
      ) {
        {
          return globalProperties[key];
        }
      } else
        ;
    },
    set({ _: instance }, key, value) {
      const { data, setupState, ctx } = instance;
      if (hasSetupBinding(setupState, key)) {
        setupState[key] = value;
        return true;
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        data[key] = value;
        return true;
      } else if (hasOwn(instance.props, key)) {
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance) {
        return false;
      } else {
        {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
      let normalizedProps;
      return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
    },
    defineProperty(target, key, descriptor) {
      if (descriptor.get != null) {
        target._.accessCache[key] = 0;
      } else if (hasOwn(descriptor, "value")) {
        this.set(target, key, descriptor.value, null);
      }
      return Reflect.defineProperty(target, key, descriptor);
    }
  };
  let shouldCacheAccess = true;
  function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(
        options.beforeCreate,
        instance,
        "bc"
        /* LifecycleHooks.BEFORE_CREATE */
      );
    }
    const {
      // state
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      // lifecycle
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      // public API
      expose,
      inheritAttrs,
      // assets
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = null;
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          {
            ctx[key] = methodHandler.bind(publicThis);
          }
        }
      }
    }
    if (dataOptions) {
      const data = dataOptions.call(publicThis, publicThis);
      if (!isObject(data))
        ;
      else {
        instance.data = reactive(data);
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
        const c = computed({
          get: get2,
          set: set2
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: (v) => c.value = v
        });
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(
        created,
        instance,
        "c"
        /* LifecycleHooks.CREATED */
      );
    }
    function registerLifecycleHook(register, hook) {
      if (isArray$1(hook)) {
        hook.forEach((_hook) => register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray$1(expose)) {
      if (expose.length) {
        const exposed = instance.exposed || (instance.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val
          });
        });
      } else if (!instance.exposed) {
        instance.exposed = {};
      }
    }
    if (render && instance.render === NOOP) {
      instance.render = render;
    }
    if (inheritAttrs != null) {
      instance.inheritAttrs = inheritAttrs;
    }
    if (components)
      instance.components = components;
    if (directives)
      instance.directives = directives;
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
    if (isArray$1(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(
            opt.from || key,
            opt.default,
            true
            /* treat default function as factory */
          );
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef(injected)) {
        if (unwrapRef) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => injected.value,
            set: (v) => injected.value = v
          });
        } else {
          ctx[key] = injected;
        }
      } else {
        ctx[key] = injected;
      }
    }
  }
  function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(isArray$1(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
  }
  function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        watch(getter, handler);
      }
    } else if (isFunction(raw)) {
      watch(getter, raw.bind(publicThis));
    } else if (isObject(raw)) {
      if (isArray$1(raw)) {
        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch(getter, handler, raw);
        }
      }
    } else
      ;
  }
  function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
      }
      mergeOptions$1(resolved, base, optionMergeStrategies);
    }
    if (isObject(base)) {
      cache.set(base, resolved);
    }
    return resolved;
  }
  function mergeOptions$1(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions$1(to, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
    }
    for (const key in from) {
      if (asMixin && key === "expose")
        ;
      else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
      }
    }
    return to;
  }
  const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
  };
  function mergeDataFn(to, from) {
    if (!from) {
      return to;
    }
    if (!to) {
      return from;
    }
    return function mergedDataFn() {
      return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
    };
  }
  function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray$1(raw)) {
      const res = {};
      for (let i = 0; i < raw.length; i++) {
        res[raw[i]] = raw[i];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
    return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
  }
  function mergeWatchOptions(to, from) {
    if (!to)
      return from;
    if (!from)
      return to;
    const merged = extend(/* @__PURE__ */ Object.create(null), to);
    for (const key in from) {
      merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
  }
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      (optimized || patchFlag > 0) && !(patchFlag & 16)
    ) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          let key = propsToUpdate[i];
          if (isEmitListener(instance.emitsOptions, key)) {
            continue;
          }
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(
                options,
                rawCurrentProps,
                camelizedKey,
                value,
                instance,
                false
                /* isAbsent */
              );
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || // for camelCase
        !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && // for camelCase
            (rawPrevProps[key] !== void 0 || // for kebab-case
            rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(
                options,
                rawCurrentProps,
                key,
                void 0,
                instance,
                true
                /* isAbsent */
              );
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) && true) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance, "set", "$attrs");
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (!(key in attrs) || value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(null, props);
            unsetCurrentInstance();
          }
        } else {
          value = defaultValue;
        }
      }
      if (opt[
        0
        /* BooleanFlags.shouldCast */
      ]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[
          1
          /* BooleanFlags.shouldCastTrue */
        ] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys)
          needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, EMPTY_ARR);
      }
      return EMPTY_ARR;
    }
    if (isArray$1(raw)) {
      for (let i = 0; i < raw.length; i++) {
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction(opt) ? { type: opt } : Object.assign({}, opt);
          if (prop) {
            const booleanIndex = getTypeIndex(Boolean, prop.type);
            const stringIndex = getTypeIndex(String, prop.type);
            prop[
              0
              /* BooleanFlags.shouldCast */
            ] = booleanIndex > -1;
            prop[
              1
              /* BooleanFlags.shouldCastTrue */
            ] = stringIndex < 0 || booleanIndex < stringIndex;
            if (booleanIndex > -1 || hasOwn(prop, "default")) {
              needCastKeys.push(normalizedKey);
            }
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    if (isObject(comp)) {
      cache.set(comp, res);
    }
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$") {
      return true;
    }
    return false;
  }
  function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? "null" : "";
  }
  function isSameType(a, b) {
    return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
    if (isArray$1(expectedTypes)) {
      return expectedTypes.findIndex((t) => isSameType(t, type));
    } else if (isFunction(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
  }
  const isInternalKey = (key) => key[0] === "_" || key === "$stable";
  const normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
  const normalizeSlot$1 = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
      return rawSlot;
    }
    const normalized = withCtx((...args) => {
      if (false)
        ;
      return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
  };
  const normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key))
        continue;
      const value = rawSlots[key];
      if (isFunction(value)) {
        slots[key] = normalizeSlot$1(key, value, ctx);
      } else if (value != null) {
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  const normalizeVNodeSlots = (instance, children) => {
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
  };
  const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        instance.slots = toRaw(children);
        def(children, "_", type);
      } else {
        normalizeObjectSlots(children, instance.slots = {});
      }
    } else {
      instance.slots = {};
      if (children) {
        normalizeVNodeSlots(instance, children);
      }
    }
    def(instance.slots, InternalObjectKey, 1);
  };
  const updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        if (optimized && type === 1) {
          needDeletionCheck = false;
        } else {
          extend(slots, children);
          if (!optimized && type === 1) {
            delete slots._;
          }
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget = children;
    } else if (children) {
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget = { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
          delete slots[key];
        }
      }
    }
  };
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let uid = 0;
  function createAppAPI(render, hydrate) {
    return function createApp2(rootComponent, rootProps = null) {
      if (!isFunction(rootComponent)) {
        rootComponent = Object.assign({}, rootComponent);
      }
      if (rootProps != null && !isObject(rootProps)) {
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = /* @__PURE__ */ new Set();
      let isMounted = false;
      const app2 = context.app = {
        _uid: uid++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin))
            ;
          else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app2, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app2, ...options);
          } else
            ;
          return app2;
        },
        mixin(mixin) {
          {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            }
          }
          return app2;
        },
        component(name, component) {
          if (!component) {
            return context.components[name];
          }
          context.components[name] = component;
          return app2;
        },
        directive(name, directive) {
          if (!directive) {
            return context.directives[name];
          }
          context.directives[name] = directive;
          return app2;
        },
        mount(rootContainer, isHydrate, isSVG) {
          if (!isMounted) {
            const vnode = createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (isHydrate && hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render(vnode, rootContainer, isSVG);
            }
            isMounted = true;
            app2._container = rootContainer;
            rootContainer.__vue_app__ = app2;
            return getExposeProxy(vnode.component) || vnode.component.proxy;
          }
        },
        unmount() {
          if (isMounted) {
            render(null, app2._container);
            delete app2._container.__vue_app__;
          }
        },
        provide(key, value) {
          context.provides[key] = value;
          return app2;
        }
      };
      return app2;
    };
  }
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray$1(rawRef)) {
      rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref2 } = rawRef;
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref2) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (hasOwn(setupState, oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isFunction(ref2)) {
      callWithErrorHandling(ref2, owner, 12, [value, refs]);
    } else {
      const _isString = isString(ref2);
      const _isRef = isRef(ref2);
      if (_isString || _isRef) {
        const doSet = () => {
          if (rawRef.f) {
            const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
            if (isUnmount) {
              isArray$1(existing) && remove(existing, refValue);
            } else {
              if (!isArray$1(existing)) {
                if (_isString) {
                  refs[ref2] = [refValue];
                  if (hasOwn(setupState, ref2)) {
                    setupState[ref2] = refs[ref2];
                  }
                } else {
                  ref2.value = [refValue];
                  if (rawRef.k)
                    refs[rawRef.k] = ref2.value;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref2] = value;
            if (hasOwn(setupState, ref2)) {
              setupState[ref2] = value;
            }
          } else if (_isRef) {
            ref2.value = value;
            if (rawRef.k)
              refs[rawRef.k] = value;
          } else
            ;
        };
        if (value) {
          doSet.id = -1;
          queuePostRenderEffect(doSet, parentSuspense);
        } else {
          doSet();
        }
      }
    }
  }
  const queuePostRenderEffect = queueEffectWithSuspense;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    const target = getGlobalThis();
    target.__VUE__ = true;
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref: ref2, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, isSVG);
          }
          break;
        case Fragment:
          processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          break;
        default:
          if (shapeFlag & 1) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else
            ;
      }
      if (ref2 != null && parentComponent) {
        setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
      } else {
        const el = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      isSVG = isSVG || n2.type === "svg";
      if (n1 == null) {
        mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { type, props, shapeFlag, transition, dirs } = vnode;
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (vnode === subTree) {
          const parentVNode = parentComponent.vnode;
          setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
      for (let i = start; i < children.length; i++) {
        const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const el = n2.el = n1.el;
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent && toggleRecurse(parentComponent, false);
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent && toggleRecurse(parentComponent, true);
      const areChildrenSVG = isSVG && n2.type !== "foreignObject";
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
      } else if (!optimized) {
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, isSVG);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        const container = (
          // oldVNode may be an errored async setup() component inside Suspense
          // which will not have a mounted element
          oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
          oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
            // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer
          )
        );
        patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
      }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
      if (oldProps !== newProps) {
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
        for (const key in newProps) {
          if (isReservedProp(key))
            continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
          patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
          if (
            // #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree
          ) {
            traverseStaticChildren(
              n1,
              n2,
              true
              /* shallow */
            );
          }
        } else {
          patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
          mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
      const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        setupComponent(instance);
      }
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
        }
        return;
      }
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          updateComponentPreRender(instance, n2, optimized);
          return;
        } else {
          instance.next = n2;
          invalidateJob(instance.update);
          instance.update();
        }
      } else {
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent } = instance;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          toggleRecurse(instance, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance, true);
          if (el && hydrateNode) {
            const hydrateSubTree = () => {
              instance.subTree = renderComponentRoot(instance);
              hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            };
            if (isAsyncWrapperVNode) {
              initialVNode.type.__asyncLoader().then(
                // note: we are moving the render call into an async callback,
                // which means it won't track dependencies - but it's ok because
                // a server-rendered async wrapper is already in resolved state
                // and it will never need to change.
                () => !instance.isUnmounted && hydrateSubTree()
              );
            } else {
              hydrateSubTree();
            }
          } else {
            const subTree = instance.subTree = renderComponentRoot(instance);
            patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
            initialVNode.el = subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
          }
          if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          initialVNode = container = anchor = null;
        } else {
          let { next, bu, u, parent, vnode } = instance;
          let originNext = next;
          let vnodeHook;
          toggleRecurse(instance, false);
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance, true);
          const nextTree = renderComponentRoot(instance);
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          patch(
            prevTree,
            nextTree,
            // parent may have changed if it's in a teleport
            hostParentNode(prevTree.el),
            // anchor may have changed if it's in a fragment
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            isSVG
          );
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
          }
        }
      };
      const effect = instance.effect = new ReactiveEffect(
        componentUpdateFn,
        () => queueJob(update),
        instance.scope
        // track it in component's effect scope
      );
      const update = instance.update = () => effect.run();
      update.id = instance.uid;
      toggleRecurse(instance, true);
      update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs();
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
      if (oldLength > newLength) {
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
      } else {
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        i++;
      }
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            i++;
          }
        }
      } else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 = i;
        const s2 = i;
        const keyToNewIndexMap = /* @__PURE__ */ new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (nextChild.key != null) {
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++)
          newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (moved) {
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(
                nextChild,
                container,
                anchor,
                2
                /* MoveType.REORDER */
              );
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition) {
        if (moveType === 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove3 = () => hostInsert(el, container, anchor);
          const performLeave = () => {
            leave(el, () => {
              remove3();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove3, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
      if (ref2 != null) {
        setRef(ref2, null, parentSuspense, vnode, true);
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        {
          removeFragment(el, anchor);
        }
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      const { bum, scope, update, subTree, um } = instance;
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (update) {
        update.active = false;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i = start; i < children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, isSVG) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
      }
      flushPreFlushCbs();
      flushPostFlushCbs();
      container._vnode = vnode;
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
      render,
      hydrate,
      createApp: createAppAPI(render, hydrate)
    };
  }
  function toggleRecurse({ effect, update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray$1(ch1) && isArray$1(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow)
            traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text) {
          c2.el = c1.el;
        }
      }
    }
  }
  function getSequence(arr) {
    const p2 = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p2[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = u + v >> 1;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p2[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p2[v];
    }
    return result;
  }
  const isTeleport = (type) => type.__isTeleport;
  const Fragment = Symbol(void 0);
  const Text = Symbol(void 0);
  const Comment = Symbol(void 0);
  const Static = Symbol(void 0);
  const blockStack = [];
  let currentBlock = null;
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  let isBlockTreeEnabled = 1;
  function setBlockTracking(value) {
    isBlockTreeEnabled += value;
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
      /* isBlock */
    ));
  }
  function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
      /* isBlock: prevent a block from tracking itself */
    ));
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    return n1.type === n2.type && n1.key === n2.key;
  }
  const InternalObjectKey = `__vInternal`;
  const normalizeKey = ({ key }) => key != null ? key : null;
  const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
    return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null,
      ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  const createVNode = _createVNode;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(
        type,
        props,
        true
        /* mergeRef: true */
      );
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
        if (cloned.shapeFlag & 6) {
          currentBlock[currentBlock.indexOf(type)] = cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag |= -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray$1(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false) {
    const { props, ref: ref2, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? (
        // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref2 ? isArray$1(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
      ) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition: vnode.transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor,
      ctx: vnode.ctx
    };
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function createStaticVNode(content, numberOfNodes) {
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
  }
  function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray$1(child)) {
      return createVNode(
        Fragment,
        null,
        // #3666, avoid reference pollution when reusing vnode
        child.slice()
      );
    } else if (typeof child === "object") {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray$1(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !(InternalObjectKey in children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray$1(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  const emptyAppContext = createAppContext();
  let uid$1 = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid$1++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new EffectScope(
        true
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      // emit
      emit: null,
      emitted: null,
      // props default value
      propsDefaults: EMPTY_OBJ,
      // inheritAttrs
      inheritAttrs: type.inheritAttrs,
      // state
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      // suspense related
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    {
      instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  let currentInstance = null;
  const setCurrentInstance = (instance) => {
    currentInstance = instance;
    instance.scope.on();
  };
  const unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
  };
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  let isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isInSSRComponentSetup = false;
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    const { setup } = Component;
    if (setup) {
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      setCurrentInstance(instance);
      pauseTracking();
      const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
      resetTracking();
      unsetCurrentInstance();
      if (isPromise(setupResult)) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e) => {
            handleError(
              e,
              instance,
              0
              /* ErrorCodes.SETUP_FUNCTION */
            );
          });
        } else {
          instance.asyncDep = setupResult;
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      if (instance.type.__ssrInlineRender) {
        instance.ssrRender = setupResult;
      } else {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      instance.setupState = proxyRefs(setupResult);
    } else
      ;
    finishComponentSetup(instance, isSSR);
  }
  let compile;
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (!isSSR && compile && !Component.render) {
        const template = Component.template || resolveMergedOptions(instance).template;
        if (template) {
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(extend({
            isCustomElement,
            delimiters
          }, compilerOptions), componentCompilerOptions);
          Component.render = compile(template, finalCompilerOptions);
        }
      }
      instance.render = Component.render || NOOP;
    }
    {
      setCurrentInstance(instance);
      pauseTracking();
      applyOptions(instance);
      resetTracking();
      unsetCurrentInstance();
    }
  }
  function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      }
    });
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      instance.exposed = exposed || {};
    };
    let attrs;
    {
      return {
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance));
        },
        slots: instance.slots,
        emit: instance.emit,
        expose
      };
    }
  }
  function getExposeProxy(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        },
        has(target, key) {
          return key in target || key in publicPropertiesMap;
        }
      }));
    }
  }
  function getComponentName(Component, includeInferred = true) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  const computed = (getterOrOptions, debugOptions) => {
    return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  };
  function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray$1(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }
  const ssrContextKey = Symbol(``);
  const useSSRContext = () => {
    {
      const ctx = inject(ssrContextKey);
      return ctx;
    }
  };
  const version = "3.2.45";
  const svgNS = "http://www.w3.org/2000/svg";
  const doc = typeof document !== "undefined" ? document : null;
  const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
  const nodeOps = {
    insert: (child, parent, anchor) => {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) => {
      const parent = child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, isSVG, is, props) => {
      const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
      if (tag === "select" && props && props.multiple != null) {
        el.setAttribute("multiple", props.multiple);
      }
      return el;
    },
    createText: (text) => doc.createTextNode(text),
    createComment: (text) => doc.createComment(text),
    setText: (node, text) => {
      node.nodeValue = text;
    },
    setElementText: (el, text) => {
      el.textContent = text;
    },
    parentNode: (node) => node.parentNode,
    nextSibling: (node) => node.nextSibling,
    querySelector: (selector) => doc.querySelector(selector),
    setScopeId(el, id) {
      el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG, start, end) {
      const before = anchor ? anchor.previousSibling : parent.lastChild;
      if (start && (start === end || start.nextSibling)) {
        while (true) {
          parent.insertBefore(start.cloneNode(true), anchor);
          if (start === end || !(start = start.nextSibling))
            break;
        }
      } else {
        templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
        const template = templateContainer.content;
        if (isSVG) {
          const wrapper = template.firstChild;
          while (wrapper.firstChild) {
            template.appendChild(wrapper.firstChild);
          }
          template.removeChild(wrapper);
        }
        parent.insertBefore(template, anchor);
      }
      return [
        // first
        before ? before.nextSibling : parent.firstChild,
        // last
        anchor ? anchor.previousSibling : parent.lastChild
      ];
    }
  };
  function patchClass(el, value, isSVG) {
    const transitionClasses = el._vtc;
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el.removeAttribute("class");
    } else if (isSVG) {
      el.setAttribute("class", value);
    } else {
      el.className = value;
    }
  }
  function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = isString(next);
    if (next && !isCssString) {
      for (const key in next) {
        setStyle(style, key, next[key]);
      }
      if (prev && !isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    } else {
      const currentDisplay = style.display;
      if (isCssString) {
        if (prev !== next) {
          style.cssText = next;
        }
      } else if (prev) {
        el.removeAttribute("style");
      }
      if ("_vod" in el) {
        style.display = currentDisplay;
      }
    }
  }
  const importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray$1(val)) {
      val.forEach((v) => setStyle(style, name, v));
    } else {
      if (val == null)
        val = "";
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  const prefixes = ["Webkit", "Moz", "ms"];
  const prefixCache = {};
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
      const prefixed = prefixes[i] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  const xlinkNS = "http://www.w3.org/1999/xlink";
  function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      const isBoolean = isSpecialBooleanAttr(key);
      if (value == null || isBoolean && !includeBooleanAttr(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, isBoolean ? "" : value);
      }
    }
  }
  function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
      if (prevChildren) {
        unmountChildren(prevChildren, parentComponent, parentSuspense);
      }
      el[key] = value == null ? "" : value;
      return;
    }
    if (key === "value" && el.tagName !== "PROGRESS" && // custom elements may use _value internally
    !el.tagName.includes("-")) {
      el._value = value;
      const newValue = value == null ? "" : value;
      if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
      // textContent if no value attribute is present. And setting .value for
      // OPTION has no side effect
      el.tagName === "OPTION") {
        el.value = newValue;
      }
      if (value == null) {
        el.removeAttribute(key);
      }
      return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
      const type = typeof el[key];
      if (type === "boolean") {
        value = includeBooleanAttr(value);
      } else if (value == null && type === "string") {
        value = "";
        needRemove = true;
      } else if (type === "number") {
        value = 0;
        needRemove = true;
      }
    }
    try {
      el[key] = value;
    } catch (e) {
    }
    needRemove && el.removeAttribute(key);
  }
  function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(nextValue, instance);
        addEventListener(el, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  const optionsModifierRE = /(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m;
      while (m = name.match(optionsModifierRE)) {
        name = name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] = true;
      }
    }
    const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
    return [event, options];
  }
  let cachedNow = 0;
  const p = /* @__PURE__ */ Promise.resolve();
  const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
  function createInvoker(initialValue, instance) {
    const invoker = (e) => {
      if (!e._vts) {
        e._vts = Date.now();
      } else if (e._vts <= invoker.attached) {
        return;
      }
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray$1(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
    } else {
      return value;
    }
  }
  const nativeOnRE = /^on[a-z]/;
  const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    if (key === "class") {
      patchClass(el, nextValue, isSVG);
    } else if (key === "style") {
      patchStyle(el, prevValue, nextValue);
    } else if (isOn(key)) {
      if (!isModelListener(key)) {
        patchEvent(el, key, prevValue, nextValue, parentComponent);
      }
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
      patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    } else {
      if (key === "true-value") {
        el._trueValue = nextValue;
      } else if (key === "false-value") {
        el._falseValue = nextValue;
      }
      patchAttr(el, key, nextValue, isSVG);
    }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el && nativeOnRE.test(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el.tagName === "TEXTAREA") {
      return false;
    }
    if (nativeOnRE.test(key) && isString(value)) {
      return false;
    }
    return key in el;
  }
  const systemModifiers = ["ctrl", "shift", "alt", "meta"];
  const modifierGuards = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
  };
  const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
      for (let i = 0; i < modifiers.length; i++) {
        const guard = modifierGuards[modifiers[i]];
        if (guard && guard(event, modifiers))
          return;
      }
      return fn(event, ...args);
    };
  };
  const vShow = {
    beforeMount(el, { value }, { transition }) {
      el._vod = el.style.display === "none" ? "" : el.style.display;
      if (transition && value) {
        transition.beforeEnter(el);
      } else {
        setDisplay(el, value);
      }
    },
    mounted(el, { value }, { transition }) {
      if (transition && value) {
        transition.enter(el);
      }
    },
    updated(el, { value, oldValue }, { transition }) {
      if (!value === !oldValue)
        return;
      if (transition) {
        if (value) {
          transition.beforeEnter(el);
          setDisplay(el, true);
          transition.enter(el);
        } else {
          transition.leave(el, () => {
            setDisplay(el, false);
          });
        }
      } else {
        setDisplay(el, value);
      }
    },
    beforeUnmount(el, { value }) {
      setDisplay(el, value);
    }
  };
  function setDisplay(el, value) {
    el.style.display = value ? el._vod : "none";
  }
  const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
  let renderer;
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  const createApp = (...args) => {
    const app2 = ensureRenderer().createApp(...args);
    const { mount } = app2;
    app2.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (!container)
        return;
      const component = app2._component;
      if (!isFunction(component) && !component.render && !component.template) {
        component.template = container.innerHTML;
      }
      container.innerHTML = "";
      const proxy = mount(container, false, container instanceof SVGElement);
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      return proxy;
    };
    return app2;
  };
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      return res;
    }
    return container;
  }
  /*!
    * vue-router v4.1.6
    * (c) 2022 Eduardo San Martin Morote
    * @license MIT
    */
  const isBrowser = typeof window !== "undefined";
  function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === "Module";
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const isArray = Array.isArray;
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const hashPos = location2.indexOf("#");
    let searchPos = location2.indexOf("?");
    if (hashPos < searchPos && hashPos >= 0) {
      searchPos = -1;
    }
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (segment === ".")
        continue;
      if (segment === "..") {
        if (position > 1)
          position--;
      } else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  function normalizeBase(base) {
    if (!base) {
      if (isBrowser) {
        const baseEl = document.querySelector("base");
        base = baseEl && baseEl.getAttribute("href") || "/";
        base = base.replace(/^\w+:\/\/[^\/]+/, "");
      } else {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
      behavior: offset.behavior,
      left: elRect.left - docRect.left - (offset.left || 0),
      top: elRect.top - docRect.top - (offset.top || 0)
    };
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  function scrollToPosition(position) {
    let scrollToOptions;
    if ("el" in position) {
      const positionEl = position.el;
      const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
      const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
      if (!el) {
        return;
      }
      scrollToOptions = getElementPosition(el, position);
    } else {
      scrollToOptions = position;
    }
    if ("scrollBehavior" in document.documentElement.style)
      window.scrollTo(scrollToOptions);
    else {
      window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
    }
  }
  function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
  }
  const scrollPositions = /* @__PURE__ */ new Map();
  function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
  }
  function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    scrollPositions.delete(key);
    return scroll;
  }
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index = listeners.indexOf(callback);
        if (index > -1)
          listeners.splice(index, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        // the length is off by one, we need to decrease it
        position: history2.length - 1,
        replaced: true,
        // don't add a scroll as the user may have an anchor, and we want
        // scrollBehavior to be triggered without a saved position
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign({}, history2.state, buildState(
        historyState.value.back,
        // keep back and forward entries but override current position
        to,
        historyState.value.forward,
        true
      ), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign(
        {},
        // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        historyState.value,
        history2.state,
        {
          forward: to,
          scroll: computeScrollPosition()
        }
      );
      changeLocation(currentState.current, currentState, true);
      const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      // it's overridden right after
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = Symbol("");
  var NavigationFailureType;
  (function(NavigationFailureType2) {
    NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
    NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
    NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
  })(NavigationFailureType || (NavigationFailureType = {}));
  function createRouterError(type, params) {
    {
      return assign(new Error(), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [
        90
        /* PathScore.Root */
      ];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
            // or /:p?-:p2
            optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (isArray(param) && !repeatable) {
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            }
            const text = isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path || "/";
    }
    return {
      re,
      score,
      keys,
      parse,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
      if (isLastScoreNegative(aScore))
        return 1;
      if (isLastScoreNegative(bScore))
        return -1;
    }
    return bScore.length - aScore.length;
  }
  function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      // these needs to be populated by the parent
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if (mainNormalizedRecord.children) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
          insertMatcher(matcher);
        }
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index = matchers.indexOf(matcherRef);
        if (index > -1) {
          matchers.splice(index, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && // Adding children with empty path should still appear before the parent
      // https://github.com/vuejs/router/issues/1124
      (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve2(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign(
          // paramsFromLocation is a new object
          paramsFromLocation(
            currentLocation.params,
            // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            matcher.keys.filter((k) => !k.optional).map((k) => k.name)
          ),
          // discard any existing params in the current location that do not exist here
          // #1497 this ensures better active/exact matching
          location2.params && paramsFromLocation(location2.params, matcher.keys.map((k) => k.name))
        );
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes.forEach((route) => addRoute(route));
    return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || null : record.component && { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign(meta, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  const matchedRouteKey = Symbol("");
  const viewDepthKey = Symbol("");
  const routerKey = Symbol("");
  const routeLocationKey = Symbol("");
  const routerViewLocationKey = Symbol("");
  function useCallbacks() {
    let handlers = [];
    function add2(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add: add2,
      list: () => handlers,
      reset
    };
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && // name is defined if record is because of the function overload
    (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve2, reject) => {
      const next = (valid) => {
        if (valid === false) {
          reject(createRouterError(4, {
            from,
            to
          }));
        } else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
          record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
            enterCallbackArray.push(valid);
          }
          resolve2();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router2 = inject(routerKey);
    const currentRoute = inject(routeLocationKey);
    const route = computed(() => router2.resolve(unref(props.to)));
    const activeRecordIndex = computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index > -1)
        return index;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return (
        // we are dealing with nested routes
        length > 1 && // if the parent and matched route have the same path, this link is
        // referring to the empty child. Or we currently are on a different
        // child of the same parent
        getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
        currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
      );
    });
    const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router2[unref(props.replace) ? "replace" : "push"](
          unref(props.to)
          // avoid uncaught errors are they are logged anyway
        ).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ defineComponent({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      // inactiveClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = reactive(useLink(props));
      const { options } = inject(routerKey);
      const elClass = computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        // [getLinkClass(
        //   props.inactiveClass,
        //   options.linkInactiveClass,
        //   'router-link-inactive'
        // )]: !link.isExactActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          // this would override user added attrs but Vue will still add
          // the listener, so we end up triggering both
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ defineComponent({
    name: "RouterView",
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    // Better compat for @vue/compat users
    // https://github.com/vuejs/router/issues/1315
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      const injectedRoute = inject(routerViewLocationKey);
      const routeToDisplay = computed(() => props.route || injectedRoute.value);
      const injectedDepth = inject(viewDepthKey, 0);
      const depth = computed(() => {
        let initialDepth = unref(injectedDepth);
        const { matched } = routeToDisplay.value;
        let matchedRoute;
        while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
          initialDepth++;
        }
        return initialDepth;
      });
      const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
      provide(viewDepthKey, computed(() => depth.value + 1));
      provide(matchedRouteKey, matchedRouteRef);
      provide(routerViewLocationKey, routeToDisplay);
      const viewRef = ref();
      watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && // if there is no instance but to and from are the same this might be
        // the first visit
        (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const currentName = props.name;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[currentName];
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[currentName];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return (
          // pass the vnode to the slot as a prop.
          // h and <component :is="..."> both accept vnodes
          normalizeSlot(slots.default, { Component: component, route }) || component
        );
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = (
      // @ts-expect-error: intentionally avoid the type check
      applyToParams.bind(null, decode)
    );
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve2(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        // keep the hash encoded so fullPath is effectively path + encodedQuery +
        // hash
        hash,
        query: (
          // if the user is using a custom query lib like qs, we might have
          // nested objects, so we keep the query as is, meaning it can contain
          // numbers at `$route.query`, but at the point, the user will have to
          // use their own type anyway.
          // https://github.com/vuejs/router/issues/328#issuecomment-649481567
          stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
        )
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
            // force empty params
            { path: newTargetLocation }
          );
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          // avoid transferring params if the redirect has a path
          params: "path" in newTargetLocation ? {} : to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve2(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(
          assign(locationAsObject(shouldRedirect), {
            state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
            force,
            replace: replace2
          }),
          // keep original redirectedFrom if it exists
          redirectedFrom || targetLocation
        );
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll(
          from,
          from,
          // this is a push, the only way for it to be triggered from a
          // history.listen is with a redirect, which makes it become a push
          true,
          // This cannot be the first navigation because the initial location
          // cannot be manually navigated to
          false
        );
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
        // navigation redirects still mark the router as ready
        isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ) ? error : markAsReady(error)
      ) : (
        // reject any unknown error
        triggerError(error, toLocation, from)
      )).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(
            failure2,
            2
            /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
          )) {
            return pushWithRedirect(
              // keep options
              assign({
                // preserve an existing replacement but allow the redirect to override it
                replace: replace2
              }, locationAsObject(failure2.to), {
                state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
                force
              }),
              // preserve the original redirectedFrom if any
              redirectedFrom || toLocation
            );
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(
        err,
        8
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = !isBrowser ? {} : history.state;
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll(toLocation, from, isPush, isFirstNavigation);
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        if (!router2.listening)
          return;
        const toLocation = resolve2(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        if (isBrowser) {
          saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
        }
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(
            error,
            4 | 8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            return error;
          }
          if (isNavigationFailure(
            error,
            2
            /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
          )) {
            pushWithRedirect(
              error.to,
              toLocation
              // avoid an uncaught rejection, let push call triggerError
            ).then((failure) => {
              if (isNavigationFailure(
                failure,
                4 | 16
                /* ErrorTypes.NAVIGATION_DUPLICATED */
              ) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          }
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(
            // after navigation, all matched components are resolved
            toLocation,
            from,
            false
          );
          if (failure) {
            if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
            // entry while a different route is displayed
            !isNavigationFailure(
              failure,
              8
              /* ErrorTypes.NAVIGATION_CANCELLED */
            )) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            )) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve3, reject) => {
        readyHandlers.add([resolve3, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      const { scrollBehavior } = options;
      if (!isBrowser || !scrollBehavior)
        return Promise.resolve();
      const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
      return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
    }
    const go = (delta) => routerHistory.go(delta);
    let started;
    const installedApps = /* @__PURE__ */ new Set();
    const router2 = {
      currentRoute,
      listening: true,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve: resolve2,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app2) {
        const router3 = this;
        app2.component("RouterLink", RouterLink);
        app2.component("RouterView", RouterView);
        app2.config.globalProperties.$router = router3;
        Object.defineProperty(app2.config.globalProperties, "$route", {
          enumerable: true,
          get: () => unref(currentRoute)
        });
        if (isBrowser && // used for the initial navigation client side to avoid pushing
        // multiple times when the router is used in multiple apps
        !started && currentRoute.value === START_LOCATION_NORMALIZED) {
          started = true;
          push(routerHistory.location).catch((err) => {
          });
        }
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = computed(() => currentRoute.value[key]);
        }
        app2.provide(routerKey, router3);
        app2.provide(routeLocationKey, reactive(reactiveRoute));
        app2.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app2.unmount;
        installedApps.add(app2);
        app2.unmount = function() {
          installedApps.delete(app2);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            started = false;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router2;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  var BounceLoader_vue_vue_type_style_index_0_lang = "";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$h = {
    name: "BounceLoader",
    props: {
      loading: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: "#5dc596"
      },
      size: {
        type: String,
        default: "60px"
      },
      margin: {
        type: String,
        default: "2px"
      },
      radius: {
        type: String,
        default: "100%"
      }
    },
    data() {
      return {
        spinnerStyle: {
          backgroundColor: this.color,
          height: this.size,
          width: this.size,
          borderRadius: this.radius,
          opacity: 0.6,
          position: "absolute",
          top: 0,
          left: 0
        }
      };
    },
    computed: {
      spinnerBasicStyle() {
        return {
          height: this.size,
          width: this.size,
          position: "relative"
        };
      }
    }
  };
  const _hoisted_1$e = { class: "v-spinner" };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$e, [
      createBaseVNode("div", {
        class: "v-bounce v-bounce1",
        style: normalizeStyle($options.spinnerBasicStyle)
      }, [
        createBaseVNode("div", {
          class: "v-bounce v-bounce2",
          style: normalizeStyle($data.spinnerStyle)
        }, null, 4),
        createBaseVNode("div", {
          class: "v-bounce v-bounce3",
          style: normalizeStyle($data.spinnerStyle)
        }, null, 4)
      ], 4)
    ], 512)), [
      [vShow, $props.loading]
    ]);
  }
  var Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g]]);
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
  const State = reactive({
    ...SharedState
  });
  const syncWithWorker = async function() {
    chrome.runtime.onMessage.addListener(function(msg) {
      if (msg.action === "state-changed") {
        for (const prop of Object.keys(msg.state)) {
          State[prop] = msg.state[prop];
        }
      }
    });
    await chrome.runtime.sendMessage({ action: "get-state" });
  };
  var _sfc_main$g = {
    components: { RouterLink, RouterView, Spinner },
    data() {
      return {
        state: State
      };
    },
    watch: {
      "state.loading"() {
      }
    }
  };
  var App_vue_vue_type_style_index_0_scoped_719ce579_lang = "";
  const _withScopeId$4 = (n) => (pushScopeId("data-v-719ce579"), n = n(), popScopeId(), n);
  const _hoisted_1$d = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("h2", { class: "Green" }, "Upland Stats", -1));
  const _hoisted_2$b = {
    key: 0,
    class: "Links"
  };
  const _hoisted_3$6 = {
    key: 0,
    class: "Offline"
  };
  const _hoisted_4$6 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("a", {
    href: "https://play.upland.me",
    target: "upland"
  }, "Upland", -1));
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_RouterLink = resolveComponent("RouterLink");
    const _component_Spinner = resolveComponent("Spinner");
    const _component_RouterView = resolveComponent("RouterView");
    return openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("header", null, [
        _hoisted_1$d,
        !$data.state.offline ? (openBlock(), createElementBlock("div", _hoisted_2$b, [
          createBaseVNode("nav", null, [
            createVNode(_component_RouterLink, { to: "/" }, {
              default: withCtx(() => [
                createTextVNode("Live")
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, { to: "/stash" }, {
              default: withCtx(() => [
                createTextVNode("Stashed")
              ]),
              _: 1
            }),
            $data.state.session ? (openBlock(), createBlock(_component_RouterLink, {
              key: 0,
              to: "/me"
            }, {
              default: withCtx(() => [
                createTextVNode("Me")
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          createVNode(_component_Spinner, {
            loading: $data.state.loading,
            color: "#3AB982",
            size: "25px",
            class: "Spinner"
          }, null, 8, ["loading"])
        ])) : createCommentVNode("", true)
      ]),
      $data.state.offline ? (openBlock(), createElementBlock("p", _hoisted_3$6, [
        createTextVNode(" Open the stats extension while on "),
        _hoisted_4$6
      ])) : (openBlock(), createBlock(_component_RouterView, { key: 1 }))
    ], 64);
  }
  var App = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-719ce579"]]);
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
  var _sfc_main$f = {
    props: {
      page: Object
    },
    data() {
      var _a2;
      return {
        ...(_a2 = this.page) == null ? void 0 : _a2.breakdown(),
        property: null
      };
    },
    async created() {
      await this.fetchProperty();
    },
    methods: {
      async fetchProperty() {
        var _a2;
        console.log("?S", State);
        if (!((_a2 = State.session) == null ? void 0 : _a2.auth_token) || !State.currentPropertyId)
          return;
        const api = new UplandApi(State.session.auth_token);
        this.property = await api.property(State.currentPropertyId);
        console.log(this.property);
      }
    }
  };
  var PropertyDetails_vue_vue_type_style_index_0_scoped_7d77c629_lang = "";
  const _withScopeId$3 = (n) => (pushScopeId("data-v-7d77c629"), n = n(), popScopeId(), n);
  const _hoisted_1$c = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("h3", { class: "Green" }, "Property Details", -1));
  const _hoisted_2$a = { class: "Stat" };
  const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("label", null, "UPX / mo:", -1));
  const _hoisted_4$5 = { class: "Stat" };
  const _hoisted_5$6 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("label", null, "UPX / mo (max):", -1));
  const _hoisted_6$3 = { class: "Stat" };
  const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("label", null, "Mo ROI:", -1));
  const _hoisted_8$2 = { class: "Stat" };
  const _hoisted_9$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("label", null, "Mo ROI (max):", -1));
  const _hoisted_10$2 = { class: "Stat" };
  const _hoisted_11$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("label", null, "Cost:", -1));
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    var _a2, _b, _c, _d;
    return openBlock(), createElementBlock("div", null, [
      _hoisted_1$c,
      createBaseVNode("div", _hoisted_2$a, [
        _hoisted_3$5,
        createBaseVNode("span", null, toDisplayString((_a2 = _ctx.baseMonthlyUPX) == null ? void 0 : _a2.toFixed(0)), 1)
      ]),
      createBaseVNode("div", _hoisted_4$5, [
        _hoisted_5$6,
        createBaseVNode("span", null, toDisplayString((_b = _ctx.maxMonthlyUPX) == null ? void 0 : _b.toFixed(0)), 1)
      ]),
      createBaseVNode("div", _hoisted_6$3, [
        _hoisted_7$2,
        createBaseVNode("span", null, toDisplayString((_c = _ctx.baseMonthlyROI) == null ? void 0 : _c.toFixed(2)) + "%", 1)
      ]),
      createBaseVNode("div", _hoisted_8$2, [
        _hoisted_9$2,
        createBaseVNode("span", null, toDisplayString((_d = _ctx.maxMonthlyROI) == null ? void 0 : _d.toFixed(2)) + "%", 1)
      ]),
      createBaseVNode("div", _hoisted_10$2, [
        _hoisted_11$2,
        createBaseVNode("span", null, "UPX: " + toDisplayString(_ctx.costUPX), 1),
        createBaseVNode("span", null, "USD: " + toDisplayString(_ctx.costUSD), 1)
      ])
    ]);
  }
  var PropertyDetails$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-7d77c629"]]);
  var _sfc_main$e = {
    components: { PropertyDetails: PropertyDetails$1 },
    data() {
      return {
        page: void 0
      };
    },
    async created() {
    }
  };
  var PageStatsPanel_vue_vue_type_style_index_0_scoped_687d10c9_lang = "";
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.page ? (openBlock(), createBlock(resolveDynamicComponent($data.page.type), {
      key: 0,
      page: $data.page,
      class: "PageStats"
    }, null, 8, ["page"])) : createCommentVNode("", true);
  }
  var PageStats = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-687d10c9"]]);
  const compare = (a, b, prop, formatVal) => {
    const fmt = formatVal || ((val) => val);
    if (fmt(a[prop]) > fmt(b[prop]))
      return 1;
    if (fmt(a[prop]) < fmt(b[prop]))
      return -1;
    return 0;
  };
  const compareNumeric = (a, b, prop) => {
    return compare(a, b, prop, (val) => {
      const numStr = (String(val).match(/\d+(\.?\d+)/) || [])[0];
      return Number(numStr) || 0;
    });
  };
  var _sfc_main$d = {
    props: {
      title: {
        type: String,
        required: false
      },
      items: {
        type: Array,
        required: true
      },
      cols: {
        type: Array,
        required: true
      },
      idKey: {
        type: String,
        required: false,
        default: () => "id"
      },
      actionsCol: {
        type: Boolean,
        required: false,
        default: () => false
      },
      sorting: {
        type: Object,
        required: false,
        default: () => null
      },
      expandable: {
        type: Boolean,
        required: false,
        default: () => false
      }
    },
    data() {
      return {
        ...this.parseTableData(this.items),
        sortBy: this.sorting,
        filter: null
      };
    },
    created() {
      this.rerender();
    },
    watch: {
      items: {
        handler(newItems) {
          const data = this.parseTableData(newItems);
          this.headers = data.headers;
          this.rows = data.rows;
          this.rerender();
        },
        deep: true
      }
    },
    methods: {
      itemWithId(id) {
        return this.items.find((item) => item[this.idKey] === id);
      },
      colForProp(prop) {
        return this.cols.find((col) => col.prop === prop);
      },
      parseTableData(items) {
        const headers = this.cols.map(({ header }) => header);
        const props = this.cols.map(({ prop }) => prop);
        const rows = items.map(
          (item) => props.reduce(
            (row, prop) => {
              row[prop] = item[prop];
              return row;
            },
            { __id: item[this.idKey] }
          )
        );
        return { headers, rows };
      },
      sortByProp(prop) {
        var _a2;
        let dir = "asc";
        if (((_a2 = this.sortBy) == null ? void 0 : _a2.prop) === prop) {
          dir = this.sortBy.dir === "asc" ? "desc" : "asc";
        }
        this.sortBy = { prop, dir };
        this.sort();
      },
      sort() {
        var _a2;
        if (!this.sortBy)
          return;
        const comparitor = ((_a2 = this.colForProp(this.sortBy.prop)) == null ? void 0 : _a2.sortFn) || compare;
        this.rows.sort((a, b) => {
          const res = comparitor(a, b, this.sortBy.prop);
          return this.sortBy.dir === "desc" ? res * -1 : res;
        });
      },
      toggleExpand(item) {
        if (this.expandable)
          item.expanded = !item.expanded;
      },
      applyFilter() {
        var _a2;
        [...(_a2 = this.$el) == null ? void 0 : _a2.querySelectorAll("tbody tr")].forEach((el) => {
          const item = this.rows.find(
            (row) => String(el.dataset["id"]) === String(row.__id)
          );
          if (!item)
            return;
          item.hidden = !((el.innerText || "").toLowerCase().indexOf((this.filter || "").toLowerCase()) > -1);
        });
      },
      rerender() {
        try {
          this.applyFilter();
          this.sort();
        } catch (e) {
          console.warn(e);
        }
      },
      onClick(item) {
        this.toggleExpand(item);
        this.$emit("item-click", this.itemWithId(item.__id));
      },
      onMouseOver(item) {
        this.$emit("item-hover-on", this.itemWithId(item.__id));
      },
      onMouseLeave(item) {
        this.$emit("item-hover-off", this.itemWithId(item.__id));
      },
      onFilterInput(e) {
        this.filter = e.currentTarget.value;
        this.applyFilter();
      }
    }
  };
  var SimpleList_vue_vue_type_style_index_0_scoped_e7da9f49_lang = "";
  const _withScopeId$2 = (n) => (pushScopeId("data-v-e7da9f49"), n = n(), popScopeId(), n);
  const _hoisted_1$b = { class: "SimpleList" };
  const _hoisted_2$9 = { class: "ListHeader" };
  const _hoisted_3$4 = {
    key: 0,
    class: "Green"
  };
  const _hoisted_4$4 = { class: "Filter" };
  const _hoisted_5$5 = ["onClick"];
  const _hoisted_6$2 = { class: "Header" };
  const _hoisted_7$1 = { class: "Name" };
  const _hoisted_8$1 = {
    key: 0,
    class: "Sort"
  };
  const _hoisted_9$1 = { key: 0 };
  const _hoisted_10$1 = { key: 1 };
  const _hoisted_11$1 = { key: 0 };
  const _hoisted_12$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "Header" }, null, -1));
  const _hoisted_13$1 = [
    _hoisted_12$1
  ];
  const _hoisted_14 = ["data-id", "onClick", "onMouseover", "onMouseleave"];
  const _hoisted_15 = { key: 0 };
  const _hoisted_16 = { class: "Actions" };
  const _hoisted_17 = { key: 0 };
  const _hoisted_18 = ["colspan"];
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("div", _hoisted_1$b, [
      createBaseVNode("div", _hoisted_2$9, [
        $props.title ? (openBlock(), createElementBlock("h3", _hoisted_3$4, toDisplayString($props.title), 1)) : createCommentVNode("", true),
        createBaseVNode("label", _hoisted_4$4, [
          createTextVNode(" Filter: "),
          createBaseVNode("input", {
            onInput: _cache[0] || (_cache[0] = (...args) => $options.onFilterInput && $options.onFilterInput(...args)),
            placeholder: "Enter text..."
          }, null, 32)
        ])
      ]),
      createBaseVNode("table", null, [
        createBaseVNode("thead", null, [
          createBaseVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headers, (header, index) => {
              var _a2;
              return openBlock(), createElementBlock("th", {
                key: index,
                onClick: ($event) => $options.sortByProp($props.cols[index].prop)
              }, [
                createBaseVNode("div", _hoisted_6$2, [
                  createBaseVNode("div", _hoisted_7$1, toDisplayString(header), 1),
                  ((_a2 = $data.sortBy) == null ? void 0 : _a2.prop) === $props.cols[index].prop ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                    $data.sortBy.dir === "asc" ? (openBlock(), createElementBlock("span", _hoisted_9$1, "▲")) : (openBlock(), createElementBlock("span", _hoisted_10$1, "▼"))
                  ])) : createCommentVNode("", true)
                ])
              ], 8, _hoisted_5$5);
            }), 128)),
            $props.actionsCol ? (openBlock(), createElementBlock("th", _hoisted_11$1, _hoisted_13$1)) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, ({ __id, expanded, hidden, ...item }, index) => {
            return openBlock(), createElementBlock(Fragment, { key: index }, [
              createBaseVNode("tr", {
                class: normalizeClass(
                  [hidden ? "Hidden" : "", $props.expandable ? "Expandable" : ""].join(" ")
                ),
                "data-id": __id,
                onClick: ($event) => $options.onClick(_ctx.rows[index]),
                onMouseover: ($event) => $options.onMouseOver(_ctx.rows[index]),
                onMouseleave: ($event) => $options.onMouseLeave(_ctx.rows[index])
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(item, (val, prop) => {
                  var _a2;
                  return openBlock(), createElementBlock("td", {
                    key: prop,
                    class: normalizeClass(prop),
                    style: normalizeStyle((_a2 = $options.colForProp(prop)) == null ? void 0 : _a2.style)
                  }, toDisplayString(val), 7);
                }), 128)),
                $props.actionsCol ? (openBlock(), createElementBlock("td", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    renderSlot(_ctx.$slots, "actions", {
                      item: $options.itemWithId(__id)
                    }, void 0, true)
                  ])
                ])) : createCommentVNode("", true)
              ], 42, _hoisted_14),
              $props.expandable && expanded ? (openBlock(), createElementBlock("tr", _hoisted_17, [
                createBaseVNode("td", {
                  colspan: Object.keys(item).length
                }, [
                  renderSlot(_ctx.$slots, "expanded", {
                    item: $options.itemWithId(__id)
                  }, void 0, true)
                ], 8, _hoisted_18)
              ])) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ])
      ])
    ]);
  }
  var List = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-e7da9f49"]]);
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
  var getDistance$1 = function getDistance2(from, to) {
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
  var getDistance = function getDistance2(start, end) {
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
  var _default$7 = getDistance;
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
  var Geo = /* @__PURE__ */ getDefaultExportFromCjs(es);
  const isIn = (polygon) => (point) => Geo.isPointInPolygon(point, polygon);
  const areaCoordsToPolygon = (area) => {
    return [
      { latitude: area.north, longitude: area.west },
      { latitude: area.north, longitude: area.east },
      { latitude: area.south, longitude: area.east },
      { latitude: area.south, longitude: area.west }
    ];
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
  class ServiceError extends Error {
    constructor(msg, service) {
      super(msg);
      __publicField(this, "service");
      this.service = service;
    }
  }
  const yieldPerMonth = (hourlyYield) => hourlyYield * 24 * DAYS_IN_MONTH;
  let Error$1 = class Error extends ServiceError {
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
    var _a2, _b;
    const boundaries = areaCoordsToPolygon(area);
    if (!((_a2 = hood.center) == null ? void 0 : _a2.coordinates))
      return;
    const coords = {
      latitude: hood.center.coordinates[1],
      longitude: hood.center.coordinates[0]
    };
    if (!isIn(boundaries)(coords))
      return;
    return toXY((_b = hood.center) == null ? void 0 : _b.coordinates, area, screenDimensions);
  };
  var _sfc_main$c = {
    components: { List },
    data() {
      return {
        state: State,
        loading: false,
        hoods: [],
        cols: [
          { prop: "name", header: "Neighbourhood" },
          {
            prop: "monthlyYield",
            header: "UPX / ft. / Mo.",
            style: "text-align: right",
            sortFn: compareNumeric
          }
        ]
      };
    },
    watch: {
      "state.viewableNeighbourhoods"(newHoods) {
        this.updateHoods(newHoods);
      }
    },
    created() {
      this.updateHoods(this.state.viewableNeighbourhoods);
    },
    methods: {
      async onHoodHoverIn(hood) {
      },
      async onHoodHoverOut() {
      },
      async updateHoods(hoods2) {
        return await time({ root: "ui", label: "CurrentHoods - updateHoods" }, async (timerOpts) => {
          var _a2, _b;
          if (!State.currentCoordinates || !hoods2)
            return;
          this.loading = true;
          this.hoods = await decorate(
            hoods2,
            State,
            new UplandApi((_a2 = State.session) == null ? void 0 : _a2.auth_token),
            { timerOpts }
          );
          (_b = this.$refs.list) == null ? void 0 : _b.sort();
          this.loading = false;
        });
      }
    }
  };
  var CurrentHoods_vue_vue_type_style_index_0_scoped_50a5c01a_lang = "";
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_List = resolveComponent("List");
    return $data.loading || $data.hoods && $data.hoods.length > 0 ? (openBlock(), createBlock(_component_List, {
      key: 0,
      title: "Neighbourhoods",
      items: $data.hoods,
      cols: $data.cols,
      loading: $data.loading,
      sorting: { prop: "monthlyYield", dir: "desc" },
      onItemHoverOn: $options.onHoodHoverIn,
      onItemHoverOff: $options.onHoodHoverOut,
      ref: "list"
    }, null, 8, ["items", "cols", "loading", "onItemHoverOn", "onItemHoverOff"])) : createCommentVNode("", true);
  }
  var Neighbourhoods = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-50a5c01a"]]);
  var _sfc_main$b = {
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        required: false,
        default: () => ""
      }
    },
    watch: {
      value() {
      }
    }
  };
  var LabelAndField_vue_vue_type_style_index_0_scoped_c0530f4a_lang = "";
  const _hoisted_1$a = { class: "LabelAndField" };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("div", _hoisted_1$a, [
      createBaseVNode("label", null, toDisplayString($props.label), 1),
      createBaseVNode("div", null, toDisplayString($props.value), 1)
    ]);
  }
  var Field = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-c0530f4a"]]);
  var _sfc_main$a = {
    components: { Field },
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        state: State,
        property: null,
        keys: []
      };
    },
    watch: {
      "state.session"(session) {
        this.state.session = session;
        this.loadProperty();
      }
    },
    created() {
      this.loadProperty();
    },
    methods: {
      async loadProperty() {
        const { auth_token } = this.state.session || {};
        if (!auth_token)
          return;
        this.state.loading = true;
        this.property = await new UplandApi(auth_token).property(this.id);
        this.keys = Object.keys(this.property).sort();
        this.state.loading = false;
      }
    }
  };
  var PropertyDetails_vue_vue_type_style_index_0_scoped_42f95ba9_lang = "";
  const _withScopeId$1 = (n) => (pushScopeId("data-v-42f95ba9"), n = n(), popScopeId(), n);
  const _hoisted_1$9 = {
    key: 0,
    class: "PropertyDetails"
  };
  const _hoisted_2$8 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", { class: "Green" }, "Property Details", -1));
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Field = resolveComponent("Field");
    return $data.property ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
      _hoisted_2$8,
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.keys, (prop, index) => {
        return openBlock(), createBlock(_component_Field, {
          key: index,
          class: "Prop",
          label: prop,
          value: $data.property[prop]
        }, null, 8, ["label", "value"]);
      }), 128))
    ])) : createCommentVNode("", true);
  }
  var PropertyDetails = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-42f95ba9"]]);
  var _sfc_main$9 = {
    props: {
      color: {
        type: String,
        required: false,
        default: () => "hsl(160, 100%, 37%)"
      }
    }
  };
  const _hoisted_1$8 = {
    viewBox: "0 0 512 512",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  };
  const _hoisted_2$7 = {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  };
  const _hoisted_3$3 = ["fill"];
  const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("path", {
    d: "M128,63.999444 L128,106.666444 L42.6666667,106.666667 L42.6666667,320 L256,320 L256,234.666444 L298.666,234.666444 L298.666667,362.666667 L4.26325641e-14,362.666667 L4.26325641e-14,64 L128,63.999444 Z M362.666667,1.42108547e-14 L362.666667,170.666667 L320,170.666667 L320,72.835 L143.084945,249.751611 L112.915055,219.581722 L289.83,42.666 L192,42.6666667 L192,1.42108547e-14 L362.666667,1.42108547e-14 Z",
    id: "Combined-Shape"
  }, null, -1);
  const _hoisted_5$4 = [
    _hoisted_4$3
  ];
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("svg", _hoisted_1$8, [
      createBaseVNode("g", _hoisted_2$7, [
        createBaseVNode("g", {
          id: "icon",
          fill: $props.color,
          transform: "translate(85.333333, 64.000000)"
        }, _hoisted_5$4, 8, _hoisted_3$3)
      ])
    ]);
  }
  var OpenIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8]]);
  var _sfc_main$8 = {
    components: { List, PropertyDetails, OpenIcon },
    props: {
      title: {
        type: String,
        required: false
      },
      properties: {
        type: Array,
        required: true
      },
      actionsCol: {
        type: Boolean,
        required: false,
        default: () => false
      },
      loading: {
        type: Boolean,
        required: false,
        default: () => false
      },
      sorting: {
        type: Object,
        required: false,
        default: () => null
      }
    },
    data() {
      return {
        cols: [
          { prop: "full_address", header: "Address" },
          { prop: "roi", header: "ROI", sortFn: compareNumeric },
          { prop: "monthlyRentUPX", header: "UPX / Mo", sortFn: compareNumeric },
          { prop: "priceUPX", header: "UPX Price", sortFn: compareNumeric },
          { prop: "currency", header: "Pay in" }
        ]
      };
    },
    methods: {
      sort(...args) {
        var _a2;
        return (_a2 = this.$refs.list) == null ? void 0 : _a2.sort(...args);
      },
      onOpenClicked(property) {
        chrome.tabs.update(void 0, {
          url: `${APP_URL}?prop_id=${property.prop_id}`
        });
      }
    }
  };
  const _hoisted_1$7 = { class: "PropertiesList" };
  const _hoisted_2$6 = { class: "Icon" };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_OpenIcon = resolveComponent("OpenIcon");
    const _component_PropertyDetails = resolveComponent("PropertyDetails");
    const _component_List = resolveComponent("List");
    return openBlock(), createElementBlock("div", _hoisted_1$7, [
      $props.loading || $props.properties && $props.properties.length > 0 ? (openBlock(), createBlock(_component_List, {
        key: 0,
        title: $props.title,
        items: $props.properties,
        cols: $data.cols,
        loading: $props.loading,
        actionsCol: true,
        sorting: { prop: "priceUPX", dir: "asc" },
        expandable: true,
        idKey: "prop_id",
        ref: "list"
      }, {
        actions: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_2$6, [
            createVNode(_component_OpenIcon, {
              onClick: withModifiers(($event) => $options.onOpenClicked(item), ["stop"])
            }, null, 8, ["onClick"])
          ]),
          renderSlot(_ctx.$slots, "actions", { property: item })
        ]),
        expanded: withCtx(({ item }) => [
          createVNode(_component_PropertyDetails, {
            id: item.prop_id
          }, null, 8, ["id"])
        ]),
        _: 3
      }, 8, ["title", "items", "cols", "loading"])) : createCommentVNode("", true)
    ]);
  }
  var PropertiesList = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7]]);
  var _sfc_main$7 = {
    props: {
      color: {
        type: String,
        required: false,
        default: () => "hsl(160, 100%, 37%)"
      }
    }
  };
  const _hoisted_1$6 = ["fill"];
  const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("g", {
    id: "SVGRepo_bgCarrier",
    "stroke-width": "0"
  }, null, -1);
  const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("g", {
    id: "SVGRepo_tracerCarrier",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1);
  const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("g", { id: "SVGRepo_iconCarrier" }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M12 17H10V12H5V10H10V5H12V10H17V12H12Z" })
  ], -1);
  const _hoisted_5$3 = [
    _hoisted_2$5,
    _hoisted_3$2,
    _hoisted_4$2
  ];
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("svg", {
      fill: $props.color,
      viewBox: "0 0 22 22",
      xmlns: "http://www.w3.org/2000/svg",
      id: "memory-plus"
    }, _hoisted_5$3, 8, _hoisted_1$6);
  }
  var PlusIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
  var _sfc_main$6 = {
    props: {
      color: {
        type: String,
        required: false,
        default: () => "hsl(160, 100%, 37%)"
      }
    }
  };
  const _hoisted_1$5 = ["fill"];
  const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="0" fill="none" width="20" height="20"></rect><g><path d="M15.3 5.3l-6.8 6.8-2.8-2.8-1.4 1.4 4.2 4.2 8.2-8.2"></path></g></g>', 3);
  const _hoisted_5$2 = [
    _hoisted_2$4
  ];
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("svg", {
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      fill: $props.color
    }, _hoisted_5$2, 8, _hoisted_1$5);
  }
  var TickIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
  var _sfc_main$5 = {
    components: { List: PropertiesList, PlusIcon, TickIcon },
    props: {
      hood: {
        required: true,
        type: Object
      }
    },
    data() {
      return {
        state: State,
        loading: false,
        properties: []
      };
    },
    watch: {
      "state.viewableProperties"(properties) {
        this.state.viewableProperties = properties;
        this.loadProperties();
      }
    },
    created() {
      this.loadProperties();
    },
    methods: {
      title() {
        return `${(State.viewableNeighbourhoods || []).map(({ name }) => name).join(", ")} properties`;
      },
      async loadProperties() {
        var _a2;
        if (!this.state.viewableProperties)
          return;
        this.loading = true;
        const stash = await getStashedProperties();
        for (const prop of this.state.viewableProperties) {
          if (this.properties.findIndex((p2) => p2.prop_id == prop.prop_id) > -1) {
            continue;
          }
          this.properties.push({
            ...prop,
            stashed: stash.find(({ id }) => id === prop.prop_id)
          });
        }
        (_a2 = this.$refs.list) == null ? void 0 : _a2.sort();
        this.loading = false;
      },
      async stash(property) {
        const stash = await getStashedProperties();
        await setStashedProperties(
          stash.concat({ id: property.prop_id, hoodId: this.hood.id })
        );
        property.stashed = true;
      },
      async unstash(property) {
        const properties = await getStashedProperties();
        setStashedProperties(
          properties.filter(({ id }) => id !== property.prop_id)
        );
        property.stashed = false;
      }
    }
  };
  const _hoisted_1$4 = {
    key: 0,
    class: "Icon"
  };
  const _hoisted_2$3 = {
    key: 1,
    class: "Icon"
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TickIcon = resolveComponent("TickIcon");
    const _component_PlusIcon = resolveComponent("PlusIcon");
    const _component_List = resolveComponent("List");
    return $data.loading || $data.properties && $data.properties.length > 0 ? (openBlock(), createBlock(_component_List, {
      key: 0,
      title: $options.title(),
      properties: $data.properties,
      loading: $data.loading,
      actionsCol: true,
      sorting: { prop: "priceUPX", dir: "asc" },
      ref: "list"
    }, {
      actions: withCtx(({ property }) => [
        property.stashed ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
          createVNode(_component_TickIcon, {
            onClick: withModifiers(($event) => $options.unstash(property), ["stop"])
          }, null, 8, ["onClick"])
        ])) : (openBlock(), createElementBlock("div", _hoisted_2$3, [
          createVNode(_component_PlusIcon, {
            onClick: withModifiers(($event) => $options.stash(property), ["stop"])
          }, null, 8, ["onClick"])
        ]))
      ]),
      _: 1
    }, 8, ["title", "properties", "loading"])) : createCommentVNode("", true);
  }
  var Properties = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
  var _sfc_main$4 = {
    components: { PageStats, Neighbourhoods, Properties },
    data() {
      return {
        state: State
      };
    }
  };
  var LiveView_vue_vue_type_style_index_0_scoped_b4a4f271_lang = "";
  const _withScopeId = (n) => (pushScopeId("data-v-b4a4f271"), n = n(), popScopeId(), n);
  const _hoisted_1$3 = {
    key: 2,
    class: "Info"
  };
  const _hoisted_2$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Move the viewscreen to an area with properties on the map...", -1));
  const _hoisted_3$1 = [
    _hoisted_2$2
  ];
  const _hoisted_4$1 = {
    key: 3,
    class: "Info"
  };
  const _hoisted_5$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Loading...", -1));
  const _hoisted_6$1 = [
    _hoisted_5$1
  ];
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    var _a2, _b;
    const _component_PageStats = resolveComponent("PageStats");
    const _component_Neighbourhoods = resolveComponent("Neighbourhoods");
    const _component_Properties = resolveComponent("Properties");
    return openBlock(), createElementBlock("main", null, [
      createVNode(_component_PageStats),
      ((_a2 = $data.state.viewableNeighbourhoods) == null ? void 0 : _a2.length) > 1 ? (openBlock(), createBlock(_component_Neighbourhoods, { key: 0 })) : ((_b = $data.state.viewableNeighbourhoods) == null ? void 0 : _b.length) === 1 ? (openBlock(), createBlock(_component_Properties, {
        key: 1,
        hood: $data.state.viewableNeighbourhoods[0]
      }, null, 8, ["hood"])) : !$data.state.loading ? (openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$1)) : (openBlock(), createElementBlock("div", _hoisted_4$1, _hoisted_6$1))
    ]);
  }
  var Live = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-b4a4f271"]]);
  var _sfc_main$3 = {
    props: {
      color: {
        type: String,
        required: false,
        default: () => "hsl(160, 100%, 37%)"
      }
    }
  };
  const _hoisted_1$2 = ["fill"];
  const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("g", {
    id: "SVGRepo_bgCarrier",
    "stroke-width": "0"
  }, null, -1);
  const _hoisted_3 = /* @__PURE__ */ createBaseVNode("g", {
    id: "SVGRepo_tracerCarrier",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1);
  const _hoisted_4 = { id: "SVGRepo_iconCarrier" };
  const _hoisted_5 = /* @__PURE__ */ createBaseVNode("title", null, "Trash", -1);
  const _hoisted_6 = {
    id: "Page-1",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  };
  const _hoisted_7 = { id: "Trash" };
  const _hoisted_8 = /* @__PURE__ */ createBaseVNode("rect", {
    id: "Rectangle",
    "fill-rule": "nonzero",
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }, null, -1);
  const _hoisted_9 = ["stroke"];
  const _hoisted_10 = ["stroke"];
  const _hoisted_11 = ["stroke"];
  const _hoisted_12 = ["stroke"];
  const _hoisted_13 = ["stroke"];
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("svg", {
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      fill: $props.color
    }, [
      _hoisted_2$1,
      _hoisted_3,
      createBaseVNode("g", _hoisted_4, [
        _hoisted_5,
        createBaseVNode("g", _hoisted_6, [
          createBaseVNode("g", _hoisted_7, [
            _hoisted_8,
            createBaseVNode("path", {
              d: "M6,6 L6.96683,19.5356 C6.98552,19.7973 7.20324,20 7.46556,20 L16.5344,20 C16.7968,20 17.0145,19.7973 17.0332,19.5356 L18,6",
              id: "Path",
              stroke: $props.color,
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, 8, _hoisted_9),
            createBaseVNode("line", {
              x1: "4",
              y1: "6",
              x2: "20",
              y2: "6",
              id: "Path",
              stroke: $props.color,
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, 8, _hoisted_10),
            createBaseVNode("line", {
              x1: "10",
              y1: "10",
              x2: "10",
              y2: "16",
              id: "Path",
              stroke: $props.color,
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, 8, _hoisted_11),
            createBaseVNode("line", {
              x1: "14",
              y1: "10",
              x2: "14",
              y2: "16",
              id: "Path",
              stroke: $props.color,
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, 8, _hoisted_12),
            createBaseVNode("path", {
              d: "M15,6 C15,4.34315 13.6569,3 12,3 C10.3431,3 9,4.34315 9,6",
              id: "Path",
              stroke: $props.color,
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, 8, _hoisted_13)
          ])
        ])
      ])
    ], 8, _hoisted_1$2);
  }
  var TrashIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
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
  var _sfc_main$2 = {
    components: { List: PropertiesList, TrashIcon },
    data() {
      return {
        state: State,
        loading: false,
        properties: []
      };
    },
    watch: {
      "state.session"(session) {
        this.state.session = session;
        this.loadProperties();
      }
    },
    created() {
      this.loadProperties();
    },
    methods: {
      async loadProperties() {
        var _a2, _b;
        if (!((_a2 = this.state.session) == null ? void 0 : _a2.auth_token) || !this.state.currentCoordinates)
          return;
        this.loading = true;
        const properties = await stashedProperties(
          new UplandApi(this.state.session.auth_token)
        );
        this.properties = properties.map((p2) => p2.toJSON());
        (_b = this.$refs.list) == null ? void 0 : _b.sort();
        this.loading = false;
      },
      async unstash({ prop_id }) {
        const props = await getStashedProperties();
        const idx = props.findIndex(({ id }) => id === prop_id);
        props.splice(idx, 1);
        this.properties.splice(idx, 1);
        setStashedProperties(props);
      }
    }
  };
  var StashedProperties_vue_vue_type_style_index_0_scoped_d0d9bc81_lang = "";
  const _hoisted_1$1 = { class: "Icon" };
  const _hoisted_2 = {
    key: 1,
    class: "EmptyMsg"
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TrashIcon = resolveComponent("TrashIcon");
    const _component_List = resolveComponent("List");
    return openBlock(), createElementBlock(Fragment, null, [
      $data.loading || $data.properties && $data.properties.length > 0 ? (openBlock(), createBlock(_component_List, {
        key: 0,
        properties: $data.properties,
        loading: $data.loading,
        actionsCol: true,
        sorting: { prop: "priceUPX", dir: "asc" },
        title: "Stashed Properties",
        ref: "list"
      }, {
        actions: withCtx(({ property }) => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(_component_TrashIcon, {
              onClick: withModifiers(($event) => $options.unstash(property), ["stop"])
            }, null, 8, ["onClick"])
          ])
        ]),
        _: 1
      }, 8, ["properties", "loading"])) : createCommentVNode("", true),
      !$data.loading && $data.properties && $data.properties.length === 0 ? (openBlock(), createElementBlock("p", _hoisted_2, " You have no stashed properties. ")) : createCommentVNode("", true)
    ], 64);
  }
  var StashedProperties = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-d0d9bc81"]]);
  var _sfc_main$1 = /* @__PURE__ */ defineComponent({
    __name: "StashView",
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("main", null, [
          createVNode(StashedProperties)
        ]);
      };
    }
  });
  const fetch$1 = async (api, opts) => {
    const [dashboard, properties, yields, collections] = await Promise.all([
      api.myDashboard(opts),
      api.myProperties(opts),
      api.myYield(opts),
      api.myCollections(opts)
    ]);
    const props = properties.map((attrs) => Model(attrs).toJSON());
    return { dashboard, properties: props, yields, collections };
  };
  var _sfc_main = {
    components: { Field, PropertiesList },
    data() {
      return {
        state: State,
        profile: null
      };
    },
    watch: {
      "state.session"() {
      }
    },
    async created() {
      var _a2;
      State.loading = true;
      const api = new UplandApi((_a2 = State.session) == null ? void 0 : _a2.auth_token);
      this.profile = await fetch$1(api);
      State.loading = false;
    }
  };
  var ProfileView_vue_vue_type_style_index_0_scoped_421c4931_lang = "";
  const _hoisted_1 = { key: 0 };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a2;
    const _component_Field = resolveComponent("Field");
    const _component_PropertiesList = resolveComponent("PropertiesList");
    return $data.profile && ((_a2 = $data.state.session) == null ? void 0 : _a2.auth_token) ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createVNode(_component_Field, {
        label: "Collections",
        value: $data.profile.dashboard.collections
      }, null, 8, ["value"]),
      createVNode(_component_Field, {
        label: "Earning (UPX)",
        value: $data.profile.dashboard.earning
      }, null, 8, ["value"]),
      createVNode(_component_Field, {
        label: "Net Worth (UPX)",
        value: $data.profile.dashboard.networth
      }, null, 8, ["value"]),
      createVNode(_component_Field, {
        label: "Properties (UPX)",
        value: $data.profile.dashboard.property
      }, null, 8, ["value"]),
      createVNode(_component_Field, {
        label: "Wallet (UPX)",
        value: $data.profile.dashboard.upx
      }, null, 8, ["value"]),
      createVNode(_component_PropertiesList, {
        class: "MyProperties",
        properties: $data.profile.properties,
        title: "My Properties"
      }, null, 8, ["properties"])
    ])) : createCommentVNode("", true);
  }
  var Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-421c4931"]]);
  const router = createRouter({
    history: createWebHistory("/"),
    routes: [
      {
        path: "/",
        name: "home",
        component: Live
      },
      {
        path: "/stash",
        name: "stash",
        component: _sfc_main$1
      },
      {
        path: "/me",
        name: "me",
        component: Profile
      },
      {
        path: "/:pathMatch(.*)*",
        redirect: "/"
      }
    ]
  });
  var main = "";
  const app = createApp(App);
  app.use(router);
  syncWithWorker().catch((err) => console.error(err));
  const findOrAddEl = (id, generateHtml) => {
    const el = document.getElementById(id);
    if (el)
      return el;
    document.body.insertAdjacentHTML("beforeend", generateHtml());
    return document.getElementById(id);
  };
  findOrAddEl("control-panel", () => "<div id='control-panel' style='height: 100vh; width: 250px; background: black; opacity: 0.8; position: absolute;' />");
  app.mount("#control-panel");
})();