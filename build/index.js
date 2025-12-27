var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { isbot } from "isbot";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 40,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 82,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// node_modules/@shopify/polaris/build/esm/types.js
var Key;
(function(Key2) {
  Key2[Key2.Backspace = 8] = "Backspace", Key2[Key2.Tab = 9] = "Tab", Key2[Key2.Enter = 13] = "Enter", Key2[Key2.Shift = 16] = "Shift", Key2[Key2.Ctrl = 17] = "Ctrl", Key2[Key2.Alt = 18] = "Alt", Key2[Key2.Pause = 19] = "Pause", Key2[Key2.CapsLock = 20] = "CapsLock", Key2[Key2.Escape = 27] = "Escape", Key2[Key2.Space = 32] = "Space", Key2[Key2.PageUp = 33] = "PageUp", Key2[Key2.PageDown = 34] = "PageDown", Key2[Key2.End = 35] = "End", Key2[Key2.Home = 36] = "Home", Key2[Key2.LeftArrow = 37] = "LeftArrow", Key2[Key2.UpArrow = 38] = "UpArrow", Key2[Key2.RightArrow = 39] = "RightArrow", Key2[Key2.DownArrow = 40] = "DownArrow", Key2[Key2.Insert = 45] = "Insert", Key2[Key2.Delete = 46] = "Delete", Key2[Key2.Key0 = 48] = "Key0", Key2[Key2.Key1 = 49] = "Key1", Key2[Key2.Key2 = 50] = "Key2", Key2[Key2.Key3 = 51] = "Key3", Key2[Key2.Key4 = 52] = "Key4", Key2[Key2.Key5 = 53] = "Key5", Key2[Key2.Key6 = 54] = "Key6", Key2[Key2.Key7 = 55] = "Key7", Key2[Key2.Key8 = 56] = "Key8", Key2[Key2.Key9 = 57] = "Key9", Key2[Key2.KeyA = 65] = "KeyA", Key2[Key2.KeyB = 66] = "KeyB", Key2[Key2.KeyC = 67] = "KeyC", Key2[Key2.KeyD = 68] = "KeyD", Key2[Key2.KeyE = 69] = "KeyE", Key2[Key2.KeyF = 70] = "KeyF", Key2[Key2.KeyG = 71] = "KeyG", Key2[Key2.KeyH = 72] = "KeyH", Key2[Key2.KeyI = 73] = "KeyI", Key2[Key2.KeyJ = 74] = "KeyJ", Key2[Key2.KeyK = 75] = "KeyK", Key2[Key2.KeyL = 76] = "KeyL", Key2[Key2.KeyM = 77] = "KeyM", Key2[Key2.KeyN = 78] = "KeyN", Key2[Key2.KeyO = 79] = "KeyO", Key2[Key2.KeyP = 80] = "KeyP", Key2[Key2.KeyQ = 81] = "KeyQ", Key2[Key2.KeyR = 82] = "KeyR", Key2[Key2.KeyS = 83] = "KeyS", Key2[Key2.KeyT = 84] = "KeyT", Key2[Key2.KeyU = 85] = "KeyU", Key2[Key2.KeyV = 86] = "KeyV", Key2[Key2.KeyW = 87] = "KeyW", Key2[Key2.KeyX = 88] = "KeyX", Key2[Key2.KeyY = 89] = "KeyY", Key2[Key2.KeyZ = 90] = "KeyZ", Key2[Key2.LeftMeta = 91] = "LeftMeta", Key2[Key2.RightMeta = 92] = "RightMeta", Key2[Key2.Select = 93] = "Select", Key2[Key2.Numpad0 = 96] = "Numpad0", Key2[Key2.Numpad1 = 97] = "Numpad1", Key2[Key2.Numpad2 = 98] = "Numpad2", Key2[Key2.Numpad3 = 99] = "Numpad3", Key2[Key2.Numpad4 = 100] = "Numpad4", Key2[Key2.Numpad5 = 101] = "Numpad5", Key2[Key2.Numpad6 = 102] = "Numpad6", Key2[Key2.Numpad7 = 103] = "Numpad7", Key2[Key2.Numpad8 = 104] = "Numpad8", Key2[Key2.Numpad9 = 105] = "Numpad9", Key2[Key2.Multiply = 106] = "Multiply", Key2[Key2.Add = 107] = "Add", Key2[Key2.Subtract = 109] = "Subtract", Key2[Key2.Decimal = 110] = "Decimal", Key2[Key2.Divide = 111] = "Divide", Key2[Key2.F1 = 112] = "F1", Key2[Key2.F2 = 113] = "F2", Key2[Key2.F3 = 114] = "F3", Key2[Key2.F4 = 115] = "F4", Key2[Key2.F5 = 116] = "F5", Key2[Key2.F6 = 117] = "F6", Key2[Key2.F7 = 118] = "F7", Key2[Key2.F8 = 119] = "F8", Key2[Key2.F9 = 120] = "F9", Key2[Key2.F10 = 121] = "F10", Key2[Key2.F11 = 122] = "F11", Key2[Key2.F12 = 123] = "F12", Key2[Key2.NumLock = 144] = "NumLock", Key2[Key2.ScrollLock = 145] = "ScrollLock", Key2[Key2.Semicolon = 186] = "Semicolon", Key2[Key2.Equals = 187] = "Equals", Key2[Key2.Comma = 188] = "Comma", Key2[Key2.Dash = 189] = "Dash", Key2[Key2.Period = 190] = "Period", Key2[Key2.ForwardSlash = 191] = "ForwardSlash", Key2[Key2.GraveAccent = 192] = "GraveAccent", Key2[Key2.OpenBracket = 219] = "OpenBracket", Key2[Key2.BackSlash = 220] = "BackSlash", Key2[Key2.CloseBracket = 221] = "CloseBracket", Key2[Key2.SingleQuote = 222] = "SingleQuote";
})(Key || (Key = {}));

// node_modules/@shopify/polaris/build/esm/components/shared.js
var scrollable = {
  props: {
    "data-polaris-scrollable": !0
  },
  selector: "[data-polaris-scrollable]"
}, overlay = {
  props: {
    "data-polaris-overlay": !0
  },
  selector: "[data-polaris-overlay]"
}, layer = {
  props: {
    "data-polaris-layer": !0
  },
  selector: "[data-polaris-layer]"
}, unstyled = {
  props: {
    "data-polaris-unstyled": !0
  },
  selector: "[data-polaris-unstyled]"
}, dataPolarisTopBar = {
  props: {
    "data-polaris-top-bar": !0
  },
  selector: "[data-polaris-top-bar]"
}, headerCell = {
  props: {
    "data-polaris-header-cell": !0
  },
  selector: "[data-polaris-header-cell]"
}, portal = {
  props: ["data-portal-id"],
  selector: "[data-portal-id]"
};

// node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.js
import React from "react";

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/breakpoints.mjs
var breakpointsAliases = ["xs", "sm", "md", "lg", "xl"], breakpoints = {
  "breakpoints-xs": {
    value: "0px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-sm": {
    value: "490px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-md": {
    value: "768px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-lg": {
    value: "1040px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-xl": {
    value: "1440px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/_virtual/_rollupPluginBabelHelpers.mjs
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _taggedTemplateLiteralLoose(strings, raw) {
  return raw || (raw = strings.slice(0)), strings.raw = raw, strings;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/utils.mjs
var _templateObject, BASE_FONT_SIZE = 16, UNIT_PX = "px", UNIT_EM = "em", UNIT_REM = "rem", DIGIT_REGEX = new RegExp(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["-?d+(?:.d+|d*)"], ["-?\\d+(?:\\.\\d+|\\d*)"])))), UNIT_REGEX = new RegExp(UNIT_PX + "|" + UNIT_EM + "|" + UNIT_REM);
function getUnit(value) {
  value === void 0 && (value = "");
  var unit = value.match(new RegExp(DIGIT_REGEX.source + "(" + UNIT_REGEX.source + ")"));
  return unit && unit[1];
}
function toPx(value) {
  value === void 0 && (value = "");
  var unit = getUnit(value);
  if (!unit || unit === UNIT_PX)
    return value;
  if (unit === UNIT_EM || unit === UNIT_REM)
    return "" + parseFloat(value) * BASE_FONT_SIZE + UNIT_PX;
}
function toEm(value, fontSize) {
  value === void 0 && (value = ""), fontSize === void 0 && (fontSize = BASE_FONT_SIZE);
  var unit = getUnit(value);
  if (!unit || unit === UNIT_EM)
    return value;
  if (unit === UNIT_PX)
    return "" + parseFloat(value) / fontSize + UNIT_EM;
  if (unit === UNIT_REM)
    return "" + parseFloat(value) * BASE_FONT_SIZE / fontSize + UNIT_EM;
}
function toRem(value) {
  value === void 0 && (value = "");
  var unit = getUnit(value);
  if (!unit || unit === UNIT_REM)
    return value;
  if (unit === UNIT_EM)
    return "" + parseFloat(value) + UNIT_REM;
  if (unit === UNIT_PX)
    return "" + parseFloat(value) / BASE_FONT_SIZE + UNIT_REM;
}
function rem(value) {
  return value.replace(new RegExp(DIGIT_REGEX.source + "(" + UNIT_PX + ")", "g"), function(px) {
    var _toRem;
    return (_toRem = toRem(px)) != null ? _toRem : px;
  });
}
function tokenGroupToRems(metaTokenGroup) {
  return Object.fromEntries(
    Object.entries(metaTokenGroup).map(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), tokenName = _ref2[0], tokenProperties = _ref2[1];
      return [tokenName, Object.assign(Object.assign({}, tokenProperties), {}, {
        value: rem(tokenProperties.value)
      })];
    })
    // We loose the `metaTokenGroup` inference after transforming the object with
    // `Object.fromEntries()` and `Object.entries()`. Thus, we cast the result
    // back to `T` since we are simply converting the `value` from px to rem.
  );
}
function createVarName(tokenName) {
  return "--p-" + tokenName;
}
function createVar(tokenName) {
  return "var(" + createVarName(tokenName) + ")";
}
function getTokenNames(theme) {
  return Object.values(theme).flatMap(function(tokenGroup) {
    return Object.keys(tokenGroup);
  });
}
function getMediaConditions(breakpoints2) {
  var breakpointEntries = Object.entries(breakpoints2), lastBreakpointIndex = breakpointEntries.length - 1;
  return Object.fromEntries(breakpointEntries.map(function(entry2, index) {
    var _ref3 = entry2, _ref4 = _slicedToArray(_ref3, 2), breakpointsTokenName = _ref4[0], breakpoint = _ref4[1], upMediaCondition = getUpMediaCondition(breakpoint), downMediaCondition = getDownMediaCondition(breakpoint), onlyMediaCondition = index === lastBreakpointIndex ? upMediaCondition : upMediaCondition + " and " + getDownMediaCondition(breakpointEntries[index + 1][1]);
    return [breakpointsTokenName, {
      // Media condition for the current breakpoint and up
      up: upMediaCondition,
      // Media condition for current breakpoint and down
      down: downMediaCondition,
      // Media condition for only the current breakpoint
      only: onlyMediaCondition
    }];
  }));
}
function getUpMediaCondition(breakpoint) {
  return "(min-width: " + toEm(breakpoint) + ")";
}
function getDownMediaCondition(breakpoint) {
  var _toPx2, offsetBreakpoint = parseFloat((_toPx2 = toPx(breakpoint)) != null ? _toPx2 : "") - 0.04;
  return "(max-width: " + toEm(offsetBreakpoint + "px") + ")";
}
var tokenGroupNamesToRems = ["border", "breakpoints", "font", "height", "shadow", "space", "text", "width"];
function createMetaThemeBase(metaTheme) {
  return Object.fromEntries(Object.entries(metaTheme).map(function(_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2), tokenGroupName = _ref6[0], tokenGroup = _ref6[1];
    return [tokenGroupName, tokenGroupNamesToRems.includes(tokenGroupName) ? tokenGroupToRems(tokenGroup) : tokenGroup];
  }));
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs
import deepmerge from "deepmerge";

// node_modules/@shopify/polaris-tokens/dist/esm/src/size.mjs
var size = {
  0: "0px",
  "0165": "0.66px",
  "025": "1px",
  "050": "2px",
  100: "4px",
  150: "6px",
  200: "8px",
  275: "11px",
  300: "12px",
  325: "13px",
  350: "14px",
  400: "16px",
  450: "18px",
  500: "20px",
  550: "22px",
  600: "24px",
  700: "28px",
  750: "30px",
  800: "32px",
  900: "36px",
  1e3: "40px",
  1200: "48px",
  1600: "64px",
  2e3: "80px",
  2400: "96px",
  2800: "112px",
  3200: "128px"
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/border.mjs
var border = {
  "border-radius-0": {
    value: size[0]
  },
  "border-radius-050": {
    value: size["050"]
  },
  "border-radius-100": {
    value: size[100]
  },
  "border-radius-150": {
    value: size[150]
  },
  "border-radius-200": {
    value: size[200]
  },
  "border-radius-300": {
    value: size[300]
  },
  "border-radius-400": {
    value: size[400]
  },
  "border-radius-500": {
    value: size[500]
  },
  "border-radius-750": {
    value: size[750]
  },
  "border-radius-full": {
    value: "9999px"
  },
  "border-width-0": {
    value: size[0]
  },
  "border-width-0165": {
    value: size["0165"]
  },
  "border-width-025": {
    value: size["025"]
  },
  "border-width-050": {
    value: size["050"]
  },
  "border-width-100": {
    value: size[100]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/colors.mjs
var gray = {
  1: "rgba(255, 255, 255, 1)",
  2: "rgba(253, 253, 253, 1)",
  3: "rgba(250, 250, 250, 1)",
  4: "rgba(247, 247, 247, 1)",
  5: "rgba(243, 243, 243, 1)",
  6: "rgba(241, 241, 241, 1)",
  7: "rgba(235, 235, 235, 1)",
  8: "rgba(227, 227, 227, 1)",
  9: "rgba(212, 212, 212, 1)",
  10: "rgba(204, 204, 204, 1)",
  11: "rgba(181, 181, 181, 1)",
  12: "rgba(138, 138, 138, 1)",
  13: "rgba(97, 97, 97, 1)",
  14: "rgba(74, 74, 74, 1)",
  15: "rgba(48, 48, 48, 1)",
  16: "rgba(26, 26, 26, 1)"
}, azure = {
  1: "rgba(251, 253, 255, 1)",
  2: "rgba(242, 249, 255, 1)",
  3: "rgba(234, 244, 255, 1)",
  4: "rgba(224, 240, 255, 1)",
  5: "rgba(213, 235, 255, 1)",
  6: "rgba(202, 230, 255, 1)",
  7: "rgba(192, 225, 255, 1)",
  8: "rgba(168, 216, 255, 1)",
  9: "rgba(145, 208, 255, 1)",
  10: "rgba(81, 192, 255, 1)",
  11: "rgba(0, 148, 213, 1)",
  12: "rgba(0, 124, 180, 1)",
  13: "rgba(0, 103, 155, 1)",
  14: "rgba(0, 82, 124, 1)",
  15: "rgba(0, 58, 90, 1)",
  16: "rgba(0, 33, 51, 1)"
}, blue = {
  1: "rgba(252, 253, 255, 1)",
  2: "rgba(246, 248, 255, 1)",
  3: "rgba(240, 242, 255, 1)",
  4: "rgba(234, 237, 255, 1)",
  5: "rgba(226, 231, 255, 1)",
  6: "rgba(219, 225, 255, 1)",
  7: "rgba(213, 220, 255, 1)",
  8: "rgba(197, 208, 255, 1)",
  9: "rgba(186, 199, 255, 1)",
  10: "rgba(151, 173, 255, 1)",
  11: "rgba(65, 136, 255, 1)",
  12: "rgba(0, 113, 233, 1)",
  13: "rgba(0, 91, 211, 1)",
  14: "rgba(0, 66, 153, 1)",
  15: "rgba(0, 46, 106, 1)",
  16: "rgba(0, 22, 51, 1)"
}, green = {
  1: "rgba(248, 255, 251, 1)",
  2: "rgba(227, 255, 237, 1)",
  3: "rgba(205, 254, 225, 1)",
  4: "rgba(180, 254, 210, 1)",
  5: "rgba(146, 254, 194, 1)",
  6: "rgba(99, 253, 176, 1)",
  7: "rgba(56, 250, 163, 1)",
  8: "rgba(53, 238, 155, 1)",
  9: "rgba(50, 225, 147, 1)",
  10: "rgba(46, 211, 137, 1)",
  11: "rgba(50, 160, 110, 1)",
  12: "rgba(41, 132, 90, 1)",
  13: "rgba(19, 111, 69, 1)",
  14: "rgba(12, 81, 50, 1)",
  15: "rgba(8, 61, 37, 1)",
  16: "rgba(9, 42, 27, 1)"
}, lime = {
  1: "rgba(250, 255, 250, 1)",
  2: "rgba(228, 255, 229, 1)",
  3: "rgba(208, 255, 209, 1)",
  4: "rgba(187, 254, 190, 1)",
  5: "rgba(157, 254, 160, 1)",
  6: "rgba(119, 254, 122, 1)",
  7: "rgba(56, 254, 62, 1)",
  8: "rgba(40, 242, 47, 1)",
  9: "rgba(37, 232, 43, 1)",
  10: "rgba(32, 207, 39, 1)",
  11: "rgba(24, 168, 29, 1)",
  12: "rgba(17, 135, 21, 1)",
  13: "rgba(12, 113, 15, 1)",
  14: "rgba(11, 85, 13, 1)",
  15: "rgba(3, 61, 5, 1)",
  16: "rgba(3, 33, 4, 1)"
}, magenta = {
  1: "rgba(255, 253, 255, 1)",
  2: "rgba(255, 245, 255, 1)",
  3: "rgba(253, 239, 253, 1)",
  4: "rgba(254, 231, 254, 1)",
  5: "rgba(252, 223, 252, 1)",
  6: "rgba(251, 215, 251, 1)",
  7: "rgba(251, 207, 251, 1)",
  8: "rgba(249, 190, 249, 1)",
  9: "rgba(248, 177, 248, 1)",
  10: "rgba(246, 141, 246, 1)",
  11: "rgba(225, 86, 225, 1)",
  12: "rgba(197, 48, 197, 1)",
  13: "rgba(159, 38, 159, 1)",
  14: "rgba(121, 26, 121, 1)",
  15: "rgba(86, 16, 86, 1)",
  16: "rgba(52, 6, 52, 1)"
}, orange = {
  1: "rgba(255, 253, 250, 1)",
  2: "rgba(255, 247, 238, 1)",
  3: "rgba(255, 241, 227, 1)",
  4: "rgba(255, 235, 213, 1)",
  5: "rgba(255, 228, 198, 1)",
  6: "rgba(255, 221, 182, 1)",
  7: "rgba(255, 214, 164, 1)",
  8: "rgba(255, 200, 121, 1)",
  9: "rgba(255, 184, 0, 1)",
  10: "rgba(229, 165, 0, 1)",
  11: "rgba(178, 132, 0, 1)",
  12: "rgba(149, 111, 0, 1)",
  13: "rgba(124, 88, 0, 1)",
  14: "rgba(94, 66, 0, 1)",
  15: "rgba(65, 45, 0, 1)",
  16: "rgba(37, 26, 0, 1)"
}, purple = {
  1: "rgba(253, 253, 255, 1)",
  2: "rgba(248, 247, 255, 1)",
  3: "rgba(243, 241, 255, 1)",
  4: "rgba(239, 236, 255, 1)",
  5: "rgba(233, 229, 255, 1)",
  6: "rgba(228, 222, 255, 1)",
  7: "rgba(223, 217, 255, 1)",
  8: "rgba(212, 204, 255, 1)",
  9: "rgba(199, 188, 255, 1)",
  10: "rgba(170, 149, 255, 1)",
  11: "rgba(148, 116, 255, 1)",
  12: "rgba(128, 81, 255, 1)",
  13: "rgba(113, 38, 255, 1)",
  14: "rgba(87, 0, 209, 1)",
  15: "rgba(59, 0, 147, 1)",
  16: "rgba(28, 0, 79, 1)"
}, red = {
  1: "rgba(255, 251, 251, 1)",
  2: "rgba(255, 246, 246, 1)",
  3: "rgba(255, 237, 236, 1)",
  4: "rgba(254, 233, 232, 1)",
  5: "rgba(254, 226, 225, 1)",
  6: "rgba(254, 218, 217, 1)",
  7: "rgba(254, 211, 209, 1)",
  8: "rgba(254, 195, 193, 1)",
  9: "rgba(253, 176, 172, 1)",
  10: "rgba(253, 129, 122, 1)",
  11: "rgba(239, 77, 47, 1)",
  12: "rgba(229, 28, 0, 1)",
  13: "rgba(181, 38, 11, 1)",
  14: "rgba(142, 31, 11, 1)",
  15: "rgba(95, 21, 7, 1)",
  16: "rgba(47, 10, 4, 1)"
}, rose = {
  1: "rgba(255, 253, 253, 1)",
  2: "rgba(255, 246, 248, 1)",
  3: "rgba(255, 239, 243, 1)",
  4: "rgba(255, 232, 238, 1)",
  5: "rgba(255, 225, 232, 1)",
  6: "rgba(255, 217, 227, 1)",
  7: "rgba(254, 209, 221, 1)",
  8: "rgba(254, 193, 210, 1)",
  9: "rgba(254, 181, 202, 1)",
  10: "rgba(254, 142, 177, 1)",
  11: "rgba(253, 75, 146, 1)",
  12: "rgba(227, 12, 118, 1)",
  13: "rgba(185, 7, 95, 1)",
  14: "rgba(141, 4, 72, 1)",
  15: "rgba(100, 2, 49, 1)",
  16: "rgba(62, 1, 28, 1)"
}, teal = {
  1: "rgba(248, 255, 254, 1)",
  2: "rgba(232, 252, 250, 1)",
  3: "rgba(215, 250, 247, 1)",
  4: "rgba(195, 247, 242, 1)",
  5: "rgba(170, 246, 239, 1)",
  6: "rgba(137, 245, 236, 1)",
  7: "rgba(112, 240, 229, 1)",
  8: "rgba(90, 230, 219, 1)",
  9: "rgba(44, 224, 212, 1)",
  10: "rgba(30, 199, 188, 1)",
  11: "rgba(0, 161, 152, 1)",
  12: "rgba(18, 131, 124, 1)",
  13: "rgba(12, 106, 100, 1)",
  14: "rgba(12, 83, 79, 1)",
  15: "rgba(3, 60, 57, 1)",
  16: "rgba(6, 44, 41, 1)"
}, yellow = {
  1: "rgba(255, 253, 246, 1)",
  2: "rgba(255, 248, 219, 1)",
  3: "rgba(255, 244, 191, 1)",
  4: "rgba(255, 239, 157, 1)",
  5: "rgba(255, 235, 120, 1)",
  6: "rgba(255, 230, 0, 1)",
  7: "rgba(247, 223, 0, 1)",
  8: "rgba(234, 211, 0, 1)",
  9: "rgba(225, 203, 0, 1)",
  10: "rgba(197, 178, 0, 1)",
  11: "rgba(153, 138, 0, 1)",
  12: "rgba(130, 117, 0, 1)",
  13: "rgba(105, 95, 0, 1)",
  14: "rgba(79, 71, 0, 1)",
  15: "rgba(51, 46, 0, 1)",
  16: "rgba(31, 28, 0, 1)"
}, blackAlpha = {
  1: "rgba(0, 0, 0, 0)",
  2: "rgba(0, 0, 0, 0.01)",
  3: "rgba(0, 0, 0, 0.02)",
  4: "rgba(0, 0, 0, 0.03)",
  5: "rgba(0, 0, 0, 0.05)",
  6: "rgba(0, 0, 0, 0.06)",
  7: "rgba(0, 0, 0, 0.08)",
  8: "rgba(0, 0, 0, 0.11)",
  9: "rgba(0, 0, 0, 0.17)",
  10: "rgba(0, 0, 0, 0.20)",
  11: "rgba(0, 0, 0, 0.29)",
  12: "rgba(0, 0, 0, 0.46)",
  13: "rgba(0, 0, 0, 0.62)",
  14: "rgba(0, 0, 0, 0.71)",
  15: "rgba(0, 0, 0, 0.81)",
  16: "rgba(0, 0, 0, 0.90)"
}, whiteAlpha = {
  1: "rgba(255, 255, 255, 0)",
  2: "rgba(255, 255, 255, 0.01)",
  3: "rgba(255, 255, 255, 0.02)",
  4: "rgba(255, 255, 255, 0.03)",
  5: "rgba(255, 255, 255, 0.05)",
  6: "rgba(255, 255, 255, 0.06)",
  7: "rgba(255, 255, 255, 0.08)",
  8: "rgba(255, 255, 255, 0.11)",
  9: "rgba(255, 255, 255, 0.17)",
  10: "rgba(255, 255, 255, 0.20)",
  11: "rgba(255, 255, 255, 0.28)",
  12: "rgba(255, 255, 255, 0.46)",
  13: "rgba(255, 255, 255, 0.62)",
  14: "rgba(255, 255, 255, 0.71)",
  15: "rgba(255, 255, 255, 0.81)",
  16: "rgba(255, 255, 255, 0.90)"
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/color.mjs
var color = {
  "color-scheme": {
    value: "light"
  },
  "color-bg": {
    value: gray[6],
    description: "The default background color of the admin."
  },
  "color-bg-inverse": {
    value: gray[16],
    description: "Use for high contrast page or component backgrounds."
  },
  "color-bg-surface": {
    value: gray[1],
    description: "The background color for elements with the highest level of prominence, like a card."
  },
  "color-bg-surface-hover": {
    value: gray[4],
    description: "The hover state color for elements with the highest level of prominence."
  },
  "color-bg-surface-active": {
    value: gray[5],
    description: "The active state (on press) color for elements with the highest level of prominence."
  },
  "color-bg-surface-selected": {
    value: gray[6],
    description: "The selected state color for elements with the highest level of prominence."
  },
  "color-bg-surface-disabled": {
    value: blackAlpha[5],
    description: "The disabled state color for elements."
  },
  "color-bg-surface-secondary": {
    value: gray[4],
    description: "The background color for elements with a secondary level of prominence."
  },
  "color-bg-surface-secondary-hover": {
    value: gray[6],
    description: "The hover state color for elements with a secondary level of prominence."
  },
  "color-bg-surface-secondary-active": {
    value: gray[7],
    description: "The active state (on press) color for elements with a secondary level of prominence."
  },
  "color-bg-surface-secondary-selected": {
    value: gray[7],
    description: "The selected state color for elements with a secondary level of prominence."
  },
  "color-bg-surface-tertiary": {
    value: gray[5],
    description: "The background color for elements with a third level of prominence."
  },
  "color-bg-surface-tertiary-hover": {
    value: gray[7],
    description: "The hover state color for elements with a third level of prominence."
  },
  "color-bg-surface-tertiary-active": {
    value: gray[8],
    description: "The active state (on press) color for elements with a third level of prominence."
  },
  "color-bg-surface-brand": {
    value: gray[8],
    description: "Use to apply the key color to elements."
  },
  "color-bg-surface-brand-hover": {
    value: gray[7],
    description: "The hover state color for key elements."
  },
  "color-bg-surface-brand-active": {
    value: gray[6],
    description: "The active state (on press) color for key elements."
  },
  "color-bg-surface-brand-selected": {
    value: gray[6],
    description: "The selected state color for key elements."
  },
  "color-bg-surface-info": {
    value: azure[3],
    description: "Use for backgrounds communicating important information, like banners."
  },
  "color-bg-surface-info-hover": {
    value: azure[4],
    description: "The hover state color for communicating important information."
  },
  "color-bg-surface-info-active": {
    value: azure[6],
    description: "The active state (on press) color for communicating important information."
  },
  "color-bg-surface-success": {
    value: green[3],
    description: "Use for backgrounds communicating success, like banners."
  },
  "color-bg-surface-success-hover": {
    value: green[4],
    description: "The hover state color for communicating success."
  },
  "color-bg-surface-success-active": {
    value: green[5],
    description: "The active state (on press) color for communicating success."
  },
  "color-bg-surface-caution": {
    value: yellow[2],
    description: "Use for backgrounds communicating caution, like banners."
  },
  "color-bg-surface-caution-hover": {
    value: yellow[3],
    description: "The hover state for communicating caution."
  },
  "color-bg-surface-caution-active": {
    value: yellow[4],
    description: "The active state (on press) color for communicating caution."
  },
  "color-bg-surface-warning": {
    value: orange[3],
    description: "Use for backgrounds communicating warning, like banners."
  },
  "color-bg-surface-warning-hover": {
    value: orange[4],
    description: "The hover state color for communicating warning."
  },
  "color-bg-surface-warning-active": {
    value: orange[5],
    description: "The active state (on press) color for communicating warning."
  },
  "color-bg-surface-critical": {
    value: red[4],
    description: "Use for backgrounds communicating critical information, like banners or input errors."
  },
  "color-bg-surface-critical-hover": {
    value: red[5],
    description: "The hover state color for communicating critical information."
  },
  "color-bg-surface-critical-active": {
    value: red[6],
    description: "The active state (on press) color for communicating critical information."
  },
  "color-bg-surface-emphasis": {
    value: blue[3],
    description: "Use for backgrounds indicating areas of focus in editors, such as the theme editor."
  },
  "color-bg-surface-emphasis-hover": {
    value: blue[4],
    description: "The hover state color for elements indicating areas of focus in editors."
  },
  "color-bg-surface-emphasis-active": {
    value: blue[5],
    description: "The active state (on press) color for elements indicating areas of focus in editors."
  },
  "color-bg-surface-magic": {
    value: purple[2],
    description: "Use for backgrounds of elements suggested by magic AI."
  },
  "color-bg-surface-magic-hover": {
    value: purple[3],
    description: "The hover state color for elements suggested by magic AI."
  },
  "color-bg-surface-magic-active": {
    value: purple[5],
    description: "The active state (on press) color for elements suggested by magic AI."
  },
  "color-bg-surface-inverse": {
    value: gray[15],
    description: "Use for elements on bg-inverse."
  },
  "color-bg-surface-transparent": {
    value: blackAlpha[1],
    description: "Use for elements that need a fully transparent background."
  },
  "color-bg-fill": {
    value: gray[1],
    description: "The background color of contained elements with a smaller surface area, like a button."
  },
  "color-bg-fill-hover": {
    value: gray[3],
    description: "The hover state color of contained elements with a smaller surface area, like a button."
  },
  "color-bg-fill-active": {
    value: gray[4],
    description: "The active state (on press) color of contained elements with a smaller surface area, like a button."
  },
  "color-bg-fill-selected": {
    value: gray[10],
    description: "The selected state color of contained elements with a smaller surface area, like a button or checkbox."
  },
  "color-bg-fill-disabled": {
    value: blackAlpha[5],
    description: "The disabled state color of contained elements with a smaller surface area, like a button."
  },
  "color-bg-fill-secondary": {
    value: gray[6],
    description: "The background color of elements with a smaller surface area and a secondary level of prominence."
  },
  "color-bg-fill-secondary-hover": {
    value: gray[7],
    description: "The hover state color of elements with a smaller surface area and a secondary level of prominence."
  },
  "color-bg-fill-secondary-active": {
    value: gray[8],
    description: "The active state (on press) color of elements with a smaller surface area and a secondary level of prominence."
  },
  "color-bg-fill-tertiary": {
    value: gray[8],
    description: "The background color of elements with a smaller surface area and a third level of prominence."
  },
  "color-bg-fill-tertiary-hover": {
    value: gray[9],
    description: "The hover state color of elements with a smaller surface area and a third level of prominence."
  },
  "color-bg-fill-tertiary-active": {
    value: gray[10],
    description: "The active state (on press) color of elements with a smaller surface area and a third level of prominence."
  },
  "color-bg-fill-brand": {
    value: gray[15],
    description: "The background color of main actions, like primary buttons."
  },
  "color-bg-fill-brand-hover": {
    value: gray[16],
    description: "The hover state color of main actions, like primary buttons."
  },
  "color-bg-fill-brand-active": {
    value: gray[16],
    description: "The active state (on press) color of main actions, like primary buttons."
  },
  "color-bg-fill-brand-selected": {
    value: gray[15],
    description: "The selected state color of main actions, like primary buttons."
  },
  "color-bg-fill-brand-disabled": {
    value: blackAlpha[9],
    description: "The disabled state color of main actions, like primary buttons."
  },
  "color-bg-fill-info": {
    value: azure[9],
    description: "Use for backgrounds communicating important information on elements with a smaller surface area, like a badge or button."
  },
  "color-bg-fill-info-hover": {
    value: azure[10],
    description: "The hover state color for communicating important information on elements with a smaller surface area."
  },
  "color-bg-fill-info-active": {
    value: azure[11],
    description: "The active state (on press) color for communicating important information on elements with a smaller surface area."
  },
  "color-bg-fill-info-secondary": {
    value: azure[5],
    description: "Use for backgrounds communicating important information on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-success": {
    value: green[12],
    description: "Use for backgrounds communicating success on elements with a smaller surface area, like a badge or a banner."
  },
  "color-bg-fill-success-hover": {
    value: green[13],
    description: "The hover state color for communicating success on elements with a smaller surface area."
  },
  "color-bg-fill-success-active": {
    value: green[14],
    description: "The active state (on press) color for communicating success on elements with a smaller surface area."
  },
  "color-bg-fill-success-secondary": {
    value: green[4],
    description: "Use for backgrounds communicating success on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-warning": {
    value: orange[9],
    description: "Use for backgrounds communicating warning on elements with a smaller surface area, like a badge or a banner."
  },
  "color-bg-fill-warning-hover": {
    value: orange[10],
    description: "The hover state color for communicating warning on elements with a smaller surface area."
  },
  "color-bg-fill-warning-active": {
    value: orange[11],
    description: "The active state (on press) color for communicating warning on elements with a smaller surface area."
  },
  "color-bg-fill-warning-secondary": {
    value: orange[7],
    description: "Use for backgrounds communicating warning on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-caution": {
    value: yellow[6],
    description: "Use for backgrounds communicating caution on elements with a smaller surface area, like a badge or a banner."
  },
  "color-bg-fill-caution-hover": {
    value: yellow[8],
    description: "The hover state color for communicating caution on elements with a smaller surface area."
  },
  "color-bg-fill-caution-active": {
    value: yellow[9],
    description: "The active state (on press) color for communicating caution on elements with a smaller surface area."
  },
  "color-bg-fill-caution-secondary": {
    value: yellow[5],
    description: "Use for backgrounds communicating caution on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-critical": {
    value: red[12],
    description: "Use for backgrounds communicating critical information on elements with a smaller surface area, like a badge or a banner."
  },
  "color-bg-fill-critical-hover": {
    value: red[13],
    description: "The hover state color for communicating critical information on elements with a smaller surface area."
  },
  "color-bg-fill-critical-active": {
    value: red[14],
    description: "The active state (on press) color for communicating critical information on elements with a smaller surface area."
  },
  "color-bg-fill-critical-selected": {
    value: red[14],
    description: "The selected state color for communicating critical information on elements with a smaller surface area."
  },
  "color-bg-fill-critical-secondary": {
    value: red[7],
    description: "Use for backgrounds communicating critical information on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-emphasis": {
    value: blue[13],
    description: "Use for backgrounds indicating areas of focus in editors on elements with a smaller surface area, like a button or a badge."
  },
  "color-bg-fill-emphasis-hover": {
    value: blue[14],
    description: "The hover state color for indicating areas of focus in editors on elements with a smaller surface area."
  },
  "color-bg-fill-emphasis-active": {
    value: blue[15],
    description: "The active state (on press) color for indicating areas of focus in editors on elements with a smaller surface area."
  },
  "color-bg-fill-magic": {
    value: purple[12],
    description: "The background color of elements suggested by magic AI, like a badge or a banner."
  },
  "color-bg-fill-magic-secondary": {
    value: purple[5],
    description: "The background color of elements suggested by magic AI, with a secondary level of prominence."
  },
  "color-bg-fill-magic-secondary-hover": {
    value: purple[6],
    description: "The hover state color of elements suggested by magic AI, with a secondary level of prominence."
  },
  "color-bg-fill-magic-secondary-active": {
    value: purple[7],
    description: "The active state (on press) color of elements suggested by magic AI, with a secondary level of prominence."
  },
  "color-bg-fill-inverse": {
    value: gray[15],
    description: "The background color of elements with a smaller surface area on an inverse background."
  },
  "color-bg-fill-inverse-hover": {
    value: gray[14],
    description: "The hover state color of elements with a smaller surface area on an inverse background."
  },
  "color-bg-fill-inverse-active": {
    value: gray[13],
    description: "The active state (on press) color of elements with a smaller surface area on an inverse background."
  },
  "color-bg-fill-transparent": {
    value: blackAlpha[3],
    description: "The background color of elements that need to sit on different background colors, like tabs."
  },
  "color-bg-fill-transparent-hover": {
    value: blackAlpha[5],
    description: "The hover state color of elements that need to sit on different background colors, like tabs."
  },
  "color-bg-fill-transparent-active": {
    value: blackAlpha[7],
    description: "The active state (on press) color of elements that need to sit on different background colors, like tabs."
  },
  "color-bg-fill-transparent-selected": {
    value: blackAlpha[7],
    description: "The selected state color of elements that need to sit on different background colors, like tabs."
  },
  "color-bg-fill-transparent-secondary": {
    value: blackAlpha[6],
    description: "The background color of elements that need to sit on different background colors, with a secondary level of prominence."
  },
  "color-bg-fill-transparent-secondary-hover": {
    value: blackAlpha[7],
    description: "The hover state color of elements that need to sit on different background colors, with a secondary level of prominence."
  },
  "color-bg-fill-transparent-secondary-active": {
    value: blackAlpha[8],
    description: "The active state (on press) color of elements that need to sit on different background colors, with a secondary level of prominence."
  },
  "color-text": {
    value: gray[15],
    description: "The default text color."
  },
  "color-text-secondary": {
    value: gray[13],
    description: "Use for text with a secondary level of prominence."
  },
  "color-text-disabled": {
    value: gray[11],
    description: "Use for text in a disabled state."
  },
  "color-text-link": {
    value: blue[13],
    description: "Use for text links."
  },
  "color-text-link-hover": {
    value: blue[14],
    description: "The hover state color for text links."
  },
  "color-text-link-active": {
    value: blue[15],
    description: "The active state (on press) color for text links."
  },
  "color-text-brand": {
    value: gray[14],
    description: "Use for text that needs to pull attention."
  },
  "color-text-brand-hover": {
    value: gray[15],
    description: "The hover state color for text that needs to pull attention."
  },
  "color-text-brand-on-bg-fill": {
    value: gray[1],
    description: "Use for text on bg-fill-brand, like primary buttons."
  },
  "color-text-brand-on-bg-fill-hover": {
    value: gray[8],
    description: "The hover state color for text on bg-fill-brand-hover."
  },
  "color-text-brand-on-bg-fill-active": {
    value: gray[10],
    description: "The active state (on press) color for text on bg-fill-brand."
  },
  "color-text-brand-on-bg-fill-disabled": {
    value: gray[1],
    description: "The disabled state color for text on bg-fill-brand-disabled."
  },
  "color-text-info": {
    value: azure[15],
    description: "Use for text communicating important information."
  },
  "color-text-info-hover": {
    value: azure[15],
    description: "The hover state color for text communicating important information."
  },
  "color-text-info-active": {
    value: azure[16],
    description: "The active state (on press) color for text communicating important information."
  },
  "color-text-info-secondary": {
    value: azure[12],
    description: "Use for text communicating important information with a secondary level of prominence."
  },
  "color-text-info-on-bg-fill": {
    value: azure[16],
    description: "Use for text and icons on bg-fill-info."
  },
  "color-text-success": {
    value: green[14],
    description: "Use for text communicating success."
  },
  "color-text-success-hover": {
    value: green[15],
    description: "The hover state color for text communicating success."
  },
  "color-text-success-active": {
    value: green[16],
    description: "The active state (on press) color for text communicating success."
  },
  "color-text-success-secondary": {
    value: green[12],
    description: "Use for text communicating success with a secondary level of prominence."
  },
  "color-text-success-on-bg-fill": {
    value: green[1],
    description: "Use for text and icons on bg-fill-success."
  },
  "color-text-caution": {
    value: yellow[14],
    description: "Use for text communicating caution."
  },
  "color-text-caution-hover": {
    value: yellow[15],
    description: "The hover state color for text communicating caution."
  },
  "color-text-caution-active": {
    value: yellow[16],
    description: "The active state (on press) color for text communicating caution."
  },
  "color-text-caution-secondary": {
    value: yellow[12],
    description: "Use for text communicating caution with a secondary level of prominence."
  },
  "color-text-caution-on-bg-fill": {
    value: yellow[15],
    description: "Use for text and icons on bg-fill-caution."
  },
  "color-text-warning": {
    value: orange[14],
    description: "Use for text communicating warning."
  },
  "color-text-warning-hover": {
    value: orange[15],
    description: "The hover state color for text communicating warning."
  },
  "color-text-warning-active": {
    value: orange[16],
    description: "The active state (on press) color for text communicating warning."
  },
  "color-text-warning-secondary": {
    value: orange[12],
    description: "Use for text communicating warning with a secondary level of prominence."
  },
  "color-text-warning-on-bg-fill": {
    value: orange[16],
    description: "Use for text and icons on bg-fill-warning."
  },
  "color-text-critical": {
    value: red[14],
    description: "Use for text communicating critical information."
  },
  "color-text-critical-hover": {
    value: red[15],
    description: "The hover state color for text communicating critical information."
  },
  "color-text-critical-active": {
    value: red[16],
    description: "The active state (on press) color for text communicating critical information."
  },
  "color-text-critical-secondary": {
    value: red[12],
    description: "Use for text communicating critical information with a secondary level of prominence."
  },
  "color-text-critical-on-bg-fill": {
    value: red[1],
    description: "Use for text and icons on bg-fill-critical."
  },
  "color-text-emphasis": {
    value: blue[13],
    description: "Use for text indicating areas of focus in editors, like the theme editor."
  },
  "color-text-emphasis-hover": {
    value: blue[14],
    description: "The hover state color for text indicating areas of focus."
  },
  "color-text-emphasis-active": {
    value: blue[15],
    description: "The active state (on press) color for text indicating areas of focus."
  },
  "color-text-emphasis-on-bg-fill": {
    value: blue[1],
    description: "Use for text and icons on bg-fill-emphasis."
  },
  "color-text-emphasis-on-bg-fill-hover": {
    value: blue[5],
    description: "Use for text and icons on bg-fill-emphasis-hover."
  },
  "color-text-emphasis-on-bg-fill-active": {
    value: blue[7],
    description: "Use for text and icons on bg-fill-emphasis-active."
  },
  "color-text-magic": {
    value: purple[14],
    description: "Use for text suggested by magic AI."
  },
  "color-text-magic-secondary": {
    value: purple[13],
    description: "Use for text suggested by magic AI with a secondary level of prominence."
  },
  "color-text-magic-on-bg-fill": {
    value: purple[1],
    description: "Use for text and icons on bg-fill-magic."
  },
  "color-text-inverse": {
    value: gray[8],
    description: "Use for text on an inverse background."
  },
  "color-text-inverse-secondary": {
    value: gray[11],
    description: "Use for secondary text on an inverse background."
  },
  "color-text-link-inverse": {
    value: blue[8],
    description: "Use for text links on an inverse background."
  },
  "color-border": {
    value: gray[8],
    description: "The default color for borders on any element."
  },
  "color-border-hover": {
    value: gray[10],
    description: "The hover color for borders on any element."
  },
  "color-border-disabled": {
    value: gray[7],
    description: "The disabled color for borders on any element."
  },
  "color-border-secondary": {
    value: gray[7],
    description: "The color for hr elements or any visual dividers."
  },
  "color-border-tertiary": {
    value: gray[10],
    description: "The border color on any element. Pair with bg-surface-tertiary or bg-fill-tertiary."
  },
  "color-border-focus": {
    value: blue[13],
    description: "The focus ring for any interactive element in a focused state."
  },
  "color-border-brand": {
    value: gray[8],
    description: "Use for borders paired with brand colors."
  },
  "color-border-info": {
    value: azure[8],
    description: "Use for borders communicating information."
  },
  "color-border-success": {
    value: green[5],
    description: "Use for borders communicating success."
  },
  "color-border-caution": {
    value: yellow[5],
    description: "Use for borders communicating caution."
  },
  "color-border-warning": {
    value: orange[8],
    description: "Use for borders communicating warning."
  },
  "color-border-critical": {
    value: red[8],
    description: "Use for borders communicating critical information."
  },
  "color-border-critical-secondary": {
    value: red[14],
    description: "Use for borders communicating critical information, such as borders on invalid text fields."
  },
  "color-border-emphasis": {
    value: blue[13],
    description: "Use for borders indicating areas of focus."
  },
  "color-border-emphasis-hover": {
    value: blue[14],
    description: "The hover state color for borders indicating areas of focus."
  },
  "color-border-emphasis-active": {
    value: blue[15],
    description: "The active state (on press) color for borders indicating areas of focus."
  },
  "color-border-magic": {
    value: purple[6],
    description: "Use for borders suggested by magic AI."
  },
  "color-border-magic-secondary": {
    value: purple[11],
    description: "Use for borders suggested by magic AI, such as borders on text fields."
  },
  "color-border-magic-secondary-hover": {
    value: purple[12],
    description: "Use for borders suggested by magic AI, such as borders on text fields."
  },
  "color-border-inverse": {
    value: gray[13],
    description: "Use for borders on an inverse background, such as borders on the global search."
  },
  "color-border-inverse-hover": {
    value: gray[10],
    description: "The hover state color for borders on an inverse background."
  },
  "color-border-inverse-active": {
    value: gray[8],
    description: "The active state (on press) color for borders on an inverse background."
  },
  "color-tooltip-tail-down-border-experimental": {
    value: gray[9],
    description: "The border color for tooltip tails pointing down."
  },
  "color-tooltip-tail-up-border-experimental": {
    value: gray[8],
    description: "The border color for tooltip tails pointing up."
  },
  "color-border-gradient-experimental": {
    value: "linear-gradient(to bottom, " + gray[7] + ", " + gray[10] + " 78%, " + gray[11] + ")"
  },
  "color-border-gradient-hover-experimental": {
    value: "linear-gradient(to bottom, " + gray[7] + ", " + gray[10] + " 78%, " + gray[11] + ")"
  },
  "color-border-gradient-selected-experimental": {
    value: "linear-gradient(to bottom, " + gray[7] + ", " + gray[10] + " 78%, " + gray[11] + ")"
  },
  "color-border-gradient-active-experimental": {
    value: "linear-gradient(to bottom, " + gray[7] + ", " + gray[10] + " 78%, " + gray[11] + ")"
  },
  "color-icon": {
    value: gray[14],
    description: "The default color for icons."
  },
  "color-icon-hover": {
    value: gray[15],
    description: "The hover state color for icons."
  },
  "color-icon-active": {
    value: gray[16],
    description: "The active state (on press) color for icons."
  },
  "color-icon-disabled": {
    value: gray[10],
    description: "The disabled state color for icons."
  },
  "color-icon-secondary": {
    value: gray[12],
    description: "Use for secondary icons."
  },
  "color-icon-secondary-hover": {
    value: gray[13],
    description: "The hover state color for secondary icons."
  },
  "color-icon-secondary-active": {
    value: gray[14],
    description: "The active state (on press) color for secondary icons."
  },
  "color-icon-brand": {
    value: gray[16],
    description: "Use for icons that need to pull more focus."
  },
  "color-icon-info": {
    value: azure[11],
    description: "Use for icons communicating information."
  },
  "color-icon-success": {
    value: green[12],
    description: "Use for icons communicating success."
  },
  "color-icon-caution": {
    value: yellow[11],
    description: "Use for icons communicating caution."
  },
  "color-icon-warning": {
    value: orange[11],
    description: "Use for icons communicating warning."
  },
  "color-icon-critical": {
    value: red[11],
    description: "Use for icons communicating critical information."
  },
  "color-icon-emphasis": {
    value: blue[13],
    description: "Use for icons indicating areas of focus in editors, like the theme editor."
  },
  "color-icon-emphasis-hover": {
    value: blue[14],
    description: "The hover color for icons indicating areas of focus in editors."
  },
  "color-icon-emphasis-active": {
    value: blue[15],
    description: "The active state (on press) color for icons indicating areas of focus in editors."
  },
  "color-icon-magic": {
    value: purple[12],
    description: "Use for icons suggested by magic AI."
  },
  "color-icon-inverse": {
    value: gray[8],
    description: "Use for icons on an inverse background."
  },
  "color-avatar-bg-fill": {
    value: gray[11]
  },
  "color-avatar-five-bg-fill": {
    value: rose[11]
  },
  "color-avatar-five-text-on-bg-fill": {
    value: rose[2]
  },
  "color-avatar-four-bg-fill": {
    value: azure[10]
  },
  "color-avatar-four-text-on-bg-fill": {
    value: azure[16]
  },
  "color-avatar-one-bg-fill": {
    value: magenta[12]
  },
  "color-avatar-one-text-on-bg-fill": {
    value: magenta[3]
  },
  "color-avatar-seven-bg-fill": {
    value: purple[11]
  },
  "color-avatar-seven-text-on-bg-fill": {
    value: purple[2]
  },
  "color-avatar-six-bg-fill": {
    value: lime[9]
  },
  "color-avatar-six-text-on-bg-fill": {
    value: lime[15]
  },
  "color-avatar-text-on-bg-fill": {
    value: gray[1]
  },
  "color-avatar-three-bg-fill": {
    value: teal[9]
  },
  "color-avatar-three-text-on-bg-fill": {
    value: teal[15]
  },
  "color-avatar-two-bg-fill": {
    value: green[7]
  },
  "color-avatar-two-text-on-bg-fill": {
    value: green[14]
  },
  "color-backdrop-bg": {
    value: blackAlpha[14]
  },
  "color-button-gradient-bg-fill": {
    value: "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)"
  },
  "color-checkbox-bg-surface-disabled": {
    value: blackAlpha[7]
  },
  "color-checkbox-icon-disabled": {
    value: gray[1]
  },
  "color-input-bg-surface": {
    value: gray[2]
  },
  "color-input-bg-surface-hover": {
    value: gray[3]
  },
  "color-input-bg-surface-active": {
    value: gray[4]
  },
  "color-input-border": {
    value: gray[12]
  },
  "color-input-border-hover": {
    value: gray[13]
  },
  "color-input-border-active": {
    value: gray[16]
  },
  "color-nav-bg": {
    value: gray[7]
  },
  "color-nav-bg-surface": {
    value: blackAlpha[3]
  },
  "color-nav-bg-surface-hover": {
    value: gray[6]
  },
  "color-nav-bg-surface-active": {
    value: gray[3]
  },
  "color-nav-bg-surface-selected": {
    value: gray[3]
  },
  "color-radio-button-bg-surface-disabled": {
    value: blackAlpha[7]
  },
  "color-radio-button-icon-disabled": {
    value: gray[1]
  },
  "color-video-thumbnail-play-button-bg-fill-hover": {
    value: blackAlpha[15]
  },
  "color-video-thumbnail-play-button-bg-fill": {
    value: blackAlpha[14]
  },
  "color-video-thumbnail-play-button-text-on-bg-fill": {
    value: gray[1]
  },
  "color-scrollbar-thumb-bg-hover": {
    value: gray[12]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/font.mjs
var font = {
  "font-family-sans": {
    value: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
  },
  "font-family-mono": {
    value: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
  },
  "font-size-275": {
    value: size[275]
  },
  "font-size-300": {
    value: size[300]
  },
  "font-size-325": {
    value: size[325]
  },
  "font-size-350": {
    value: size[350]
  },
  "font-size-400": {
    value: size[400]
  },
  "font-size-450": {
    value: size[450]
  },
  "font-size-500": {
    value: size[500]
  },
  "font-size-550": {
    value: size[550]
  },
  "font-size-600": {
    value: size[600]
  },
  "font-size-750": {
    value: size[750]
  },
  "font-size-800": {
    value: size[800]
  },
  "font-size-900": {
    value: size[900]
  },
  "font-size-1000": {
    value: size[1e3]
  },
  "font-weight-regular": {
    value: "450"
  },
  "font-weight-medium": {
    value: "550"
  },
  "font-weight-semibold": {
    value: "650"
  },
  "font-weight-bold": {
    value: "700"
  },
  "font-letter-spacing-densest": {
    value: "-0.54px"
  },
  "font-letter-spacing-denser": {
    value: "-0.3px"
  },
  "font-letter-spacing-dense": {
    value: "-0.2px"
  },
  "font-letter-spacing-normal": {
    value: "0px"
  },
  "font-line-height-300": {
    value: size[300]
  },
  "font-line-height-400": {
    value: size[400]
  },
  "font-line-height-500": {
    value: size[500]
  },
  "font-line-height-600": {
    value: size[600]
  },
  "font-line-height-700": {
    value: size[700]
  },
  "font-line-height-800": {
    value: size[800]
  },
  "font-line-height-1000": {
    value: size[1e3]
  },
  "font-line-height-1200": {
    value: size[1200]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/height.mjs
var height = {
  "height-0": {
    value: size[0]
  },
  "height-025": {
    value: size["025"]
  },
  "height-050": {
    value: size["050"]
  },
  "height-100": {
    value: size[100]
  },
  "height-150": {
    value: size[150]
  },
  "height-200": {
    value: size[200]
  },
  "height-300": {
    value: size[300]
  },
  "height-400": {
    value: size[400]
  },
  "height-500": {
    value: size[500]
  },
  "height-600": {
    value: size[600]
  },
  "height-700": {
    value: size[700]
  },
  "height-800": {
    value: size[800]
  },
  "height-900": {
    value: size[900]
  },
  "height-1000": {
    value: size[1e3]
  },
  "height-1200": {
    value: size[1200]
  },
  "height-1600": {
    value: size[1600]
  },
  "height-2000": {
    value: size[2e3]
  },
  "height-2400": {
    value: size[2400]
  },
  "height-2800": {
    value: size[2800]
  },
  "height-3200": {
    value: size[3200]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/motion.mjs
var motion = {
  "motion-duration-0": {
    value: "0ms"
  },
  "motion-duration-50": {
    value: "50ms"
  },
  "motion-duration-100": {
    value: "100ms"
  },
  "motion-duration-150": {
    value: "150ms"
  },
  "motion-duration-200": {
    value: "200ms"
  },
  "motion-duration-250": {
    value: "250ms"
  },
  "motion-duration-300": {
    value: "300ms"
  },
  "motion-duration-350": {
    value: "350ms"
  },
  "motion-duration-400": {
    value: "400ms"
  },
  "motion-duration-450": {
    value: "450ms"
  },
  "motion-duration-500": {
    value: "500ms"
  },
  "motion-duration-5000": {
    value: "5000ms"
  },
  "motion-ease": {
    value: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    description: "Responds quickly and finishes with control. A great default for any user interaction."
  },
  "motion-ease-in": {
    value: "cubic-bezier(0.42, 0, 1, 1)",
    description: "Starts slowly and finishes at top speed. Use sparingly."
  },
  "motion-ease-out": {
    value: "cubic-bezier(0.19, 0.91, 0.38, 1)",
    description: "Starts at top speed and finishes slowly. Use sparingly."
  },
  "motion-ease-in-out": {
    value: "cubic-bezier(0.42, 0, 0.58, 1)",
    description: "Starts and finishes with equal speed. A good default for transitions triggered by the system."
  },
  "motion-linear": {
    value: "cubic-bezier(0, 0, 1, 1)",
    description: "Moves with constant speed. Use for continuous and mechanical animations, such as rotating spinners."
  },
  "motion-keyframes-bounce": {
    value: "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }"
  },
  "motion-keyframes-fade-in": {
    value: "{ to { opacity: 1 } }"
  },
  "motion-keyframes-pulse": {
    value: "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }"
  },
  "motion-keyframes-spin": {
    value: "{ to { transform: rotate(1turn) } }"
  },
  "motion-keyframes-appear-above": {
    value: "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }"
  },
  "motion-keyframes-appear-below": {
    value: "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/shadow.mjs
var shadow = {
  "shadow-0": {
    value: "none"
  },
  "shadow-100": {
    value: "0px 1px 0px 0px rgba(26, 26, 26, 0.07)"
  },
  "shadow-200": {
    value: "0px 3px 1px -1px rgba(26, 26, 26, 0.07)"
  },
  "shadow-300": {
    value: "0px 4px 6px -2px rgba(26, 26, 26, 0.20)"
  },
  "shadow-400": {
    value: "0px 8px 16px -4px rgba(26, 26, 26, 0.22)"
  },
  "shadow-500": {
    value: "0px 12px 20px -8px rgba(26, 26, 26, 0.24)"
  },
  "shadow-600": {
    value: "0px 20px 20px -8px rgba(26, 26, 26, 0.28)"
  },
  "shadow-bevel-100": {
    value: "1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.5) inset"
  },
  "shadow-inset-100": {
    value: "0px 1px 2px 0px rgba(26, 26, 26, 0.15) inset, 0px 1px 1px 0px rgba(26, 26, 26, 0.15) inset"
  },
  "shadow-inset-200": {
    value: "0px 2px 1px 0px rgba(26, 26, 26, 0.20) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset, -1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset"
  },
  "shadow-button": {
    value: "0px -1px 0px 0px #b5b5b5 inset, 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset, 0px 0.5px 0px 1.5px #FFF inset"
  },
  "shadow-button-hover": {
    value: "0px 1px 0px 0px #EBEBEB inset, -1px 0px 0px 0px #EBEBEB inset, 1px 0px 0px 0px #EBEBEB inset, 0px -1px 0px 0px #CCC inset"
  },
  "shadow-button-inset": {
    value: "-1px 0px 1px 0px rgba(26, 26, 26, 0.122) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.122) inset, 0px 2px 1px 0px rgba(26, 26, 26, 0.2) inset"
  },
  "shadow-button-primary": {
    value: "0px -1px 0px 1px rgba(0, 0, 0, 0.8) inset, 0px 0px 0px 1px rgba(48, 48, 48, 1) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.25) inset;"
  },
  "shadow-button-primary-hover": {
    value: "0px 1px 0px 0px rgba(255, 255, 255, 0.24) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1px 0px 0px #000 inset, 0px -1px 0px 1px #1A1A1A"
  },
  "shadow-button-primary-inset": {
    value: "0px 3px 0px 0px rgb(0, 0, 0) inset"
  },
  "shadow-button-primary-critical": {
    value: "0px -1px 0px 1px rgba(142, 31, 11, 0.8) inset, 0px 0px 0px 1px rgba(181, 38, 11, 0.8) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.349) inset"
  },
  "shadow-button-primary-critical-hover": {
    value: "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset"
  },
  "shadow-button-primary-critical-inset": {
    value: "-1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset"
  },
  "shadow-button-primary-success": {
    value: "0px -1px 0px 1px rgba(12, 81, 50, 0.8) inset, 0px 0px 0px 1px rgba(19, 111, 69, 0.8) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.251) inset"
  },
  "shadow-button-primary-success-hover": {
    value: "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset"
  },
  "shadow-button-primary-success-inset": {
    value: "-1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset"
  },
  "shadow-border-inset": {
    value: "0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/space.mjs
var space = {
  "space-0": {
    value: size[0]
  },
  "space-025": {
    value: size["025"]
  },
  "space-050": {
    value: size["050"]
  },
  "space-100": {
    value: size[100]
  },
  "space-150": {
    value: size[150]
  },
  "space-200": {
    value: size[200]
  },
  "space-300": {
    value: size[300]
  },
  "space-400": {
    value: size[400]
  },
  "space-500": {
    value: size[500]
  },
  "space-600": {
    value: size[600]
  },
  "space-800": {
    value: size[800]
  },
  "space-1000": {
    value: size[1e3]
  },
  "space-1200": {
    value: size[1200]
  },
  "space-1600": {
    value: size[1600]
  },
  "space-2000": {
    value: size[2e3]
  },
  "space-2400": {
    value: size[2400]
  },
  "space-2800": {
    value: size[2800]
  },
  "space-3200": {
    value: size[3200]
  },
  "space-button-group-gap": {
    value: createVar2("space-200")
  },
  "space-card-gap": {
    value: createVar2("space-400")
  },
  "space-card-padding": {
    value: createVar2("space-400")
  },
  "space-table-cell-padding": {
    value: createVar2("space-150")
  }
};
function createVar2(spaceTokenName) {
  return "var(" + createVarName(spaceTokenName) + ")";
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/text.mjs
var text = {
  // heading-3xl
  "text-heading-3xl-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-3xl-font-size": {
    value: createVar("font-size-900")
  },
  "text-heading-3xl-font-weight": {
    value: createVar("font-weight-bold")
  },
  "text-heading-3xl-font-letter-spacing": {
    value: createVar("font-letter-spacing-densest")
  },
  "text-heading-3xl-font-line-height": {
    value: createVar("font-line-height-1200")
  },
  // heading-2xl
  "text-heading-2xl-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-2xl-font-size": {
    value: createVar("font-size-750")
  },
  "text-heading-2xl-font-weight": {
    value: createVar("font-weight-bold")
  },
  "text-heading-2xl-font-letter-spacing": {
    value: createVar("font-letter-spacing-denser")
  },
  "text-heading-2xl-font-line-height": {
    value: createVar("font-line-height-1000")
  },
  // heading-xl
  "text-heading-xl-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-xl-font-size": {
    value: createVar("font-size-600")
  },
  "text-heading-xl-font-weight": {
    value: createVar("font-weight-bold")
  },
  "text-heading-xl-font-letter-spacing": {
    value: createVar("font-letter-spacing-dense")
  },
  "text-heading-xl-font-line-height": {
    value: createVar("font-line-height-800")
  },
  // heading-lg
  "text-heading-lg-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-lg-font-size": {
    value: createVar("font-size-500")
  },
  "text-heading-lg-font-weight": {
    value: createVar("font-weight-semibold")
  },
  "text-heading-lg-font-letter-spacing": {
    value: createVar("font-letter-spacing-dense")
  },
  "text-heading-lg-font-line-height": {
    value: createVar("font-line-height-600")
  },
  // heading-md
  "text-heading-md-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-md-font-size": {
    value: createVar("font-size-350")
  },
  "text-heading-md-font-weight": {
    value: createVar("font-weight-semibold")
  },
  "text-heading-md-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-heading-md-font-line-height": {
    value: createVar("font-line-height-500")
  },
  // heading-sm
  "text-heading-sm-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-sm-font-size": {
    value: createVar("font-size-325")
  },
  "text-heading-sm-font-weight": {
    value: createVar("font-weight-semibold")
  },
  "text-heading-sm-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-heading-sm-font-line-height": {
    value: createVar("font-line-height-500")
  },
  // heading-xs
  "text-heading-xs-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-xs-font-size": {
    value: createVar("font-size-300")
  },
  "text-heading-xs-font-weight": {
    value: createVar("font-weight-semibold")
  },
  "text-heading-xs-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-heading-xs-font-line-height": {
    value: createVar("font-line-height-400")
  },
  // body-lg
  "text-body-lg-font-family": {
    value: createVar("font-family-sans")
  },
  "text-body-lg-font-size": {
    value: createVar("font-size-350")
  },
  "text-body-lg-font-weight": {
    value: createVar("font-weight-regular")
  },
  "text-body-lg-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-body-lg-font-line-height": {
    value: createVar("font-line-height-500")
  },
  // body-md
  "text-body-md-font-family": {
    value: createVar("font-family-sans")
  },
  "text-body-md-font-size": {
    value: createVar("font-size-325")
  },
  "text-body-md-font-weight": {
    value: createVar("font-weight-regular")
  },
  "text-body-md-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-body-md-font-line-height": {
    value: createVar("font-line-height-500")
  },
  // body-sm
  "text-body-sm-font-family": {
    value: createVar("font-family-sans")
  },
  "text-body-sm-font-size": {
    value: createVar("font-size-300")
  },
  "text-body-sm-font-weight": {
    value: createVar("font-weight-regular")
  },
  "text-body-sm-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-body-sm-font-line-height": {
    value: createVar("font-line-height-400")
  },
  // body-xs
  "text-body-xs-font-family": {
    value: createVar("font-family-sans")
  },
  "text-body-xs-font-size": {
    value: createVar("font-size-275")
  },
  "text-body-xs-font-weight": {
    value: createVar("font-weight-regular")
  },
  "text-body-xs-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-body-xs-font-line-height": {
    value: createVar("font-line-height-300")
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/width.mjs
var width = {
  "width-0": {
    value: size[0]
  },
  "width-025": {
    value: size["025"]
  },
  "width-050": {
    value: size["050"]
  },
  "width-100": {
    value: size[100]
  },
  "width-150": {
    value: size[150]
  },
  "width-200": {
    value: size[200]
  },
  "width-300": {
    value: size[300]
  },
  "width-400": {
    value: size[400]
  },
  "width-500": {
    value: size[500]
  },
  "width-600": {
    value: size[600]
  },
  "width-700": {
    value: size[700]
  },
  "width-800": {
    value: size[800]
  },
  "width-900": {
    value: size[900]
  },
  "width-1000": {
    value: size[1e3]
  },
  "width-1200": {
    value: size[1200]
  },
  "width-1600": {
    value: size[1600]
  },
  "width-2000": {
    value: size[2e3]
  },
  "width-2400": {
    value: size[2400]
  },
  "width-2800": {
    value: size[2800]
  },
  "width-3200": {
    value: size[3200]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/zIndex.mjs
var zIndex = {
  "z-index-0": {
    value: "auto"
  },
  "z-index-1": {
    value: "100"
  },
  "z-index-2": {
    value: "400"
  },
  "z-index-3": {
    value: "510"
  },
  "z-index-4": {
    value: "512"
  },
  "z-index-5": {
    value: "513"
  },
  "z-index-6": {
    value: "514"
  },
  "z-index-7": {
    value: "515"
  },
  "z-index-8": {
    value: "516"
  },
  "z-index-9": {
    value: "517"
  },
  "z-index-10": {
    value: "518"
  },
  "z-index-11": {
    value: "519"
  },
  "z-index-12": {
    value: "520"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/index.mjs
var metaThemeBase = createMetaThemeBase({
  border,
  breakpoints,
  color,
  font,
  height,
  motion,
  shadow,
  space,
  text,
  width,
  zIndex
});

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs
function createMetaThemePartial(metaThemePartial) {
  return Object.fromEntries(Object.entries(metaThemePartial).map(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), tokenGroupName = _ref2[0], tokenGroup = _ref2[1];
    return [tokenGroupName, tokenGroup && tokenGroupNamesToRems.includes(tokenGroupName) ? tokenGroupToRems(tokenGroup) : tokenGroup];
  }));
}
function createMetaTheme(metaThemePartial) {
  return deepmerge(metaThemeBase, metaThemePartial);
}
function createThemeClassName(themeName) {
  return "p-theme-" + themeName;
}
function createIsTokenName(theme) {
  var tokenNames = new Set(getTokenNames(theme));
  return function(tokenName) {
    return tokenNames.has(tokenName);
  };
}
createIsTokenName(metaThemeBase);

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/constants.mjs
var themeNameLight = "light", themeNameDefault = themeNameLight, themeNames = [themeNameLight, "light-mobile", "light-high-contrast-experimental", "dark-experimental"];

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/light.mjs
var metaThemeLightPartial = createMetaThemePartial({}), metaThemeLight = createMetaTheme(metaThemeLightPartial);

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/light-high-contrast.mjs
var metaThemeLightHighContrastPartial = createMetaThemePartial({
  color: {
    "color-text": {
      value: gray[16]
    },
    "color-text-secondary": {
      value: gray[16]
    },
    "color-text-brand": {
      value: gray[16]
    },
    "color-icon-secondary": {
      value: gray[14]
    },
    "color-border": {
      value: gray[12]
    },
    "color-input-border": {
      value: gray[14]
    },
    "color-border-secondary": {
      value: gray[12]
    },
    "color-bg-surface-secondary": {
      value: gray[6]
    }
  },
  shadow: {
    "shadow-bevel-100": {
      value: "0px 1px 0px 0px rgba(26, 26, 26, 0.07), 0px 1px 0px 0px rgba(208, 208, 208, 0.40) inset, 1px 0px 0px 0px #CCC inset, -1px 0px 0px 0px #CCC inset, 0px -1px 0px 0px #999 inset"
    }
  }
}), metaThemeLightHighContrast = createMetaTheme(metaThemeLightHighContrastPartial);

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/light-mobile.mjs
var buttonShadow = "0 0 0 " + createVar("border-width-025") + " " + createVar("color-border") + " inset", metaThemeLightMobilePartial = createMetaThemePartial({
  color: {
    "color-button-gradient-bg-fill": {
      value: "none"
    }
  },
  shadow: {
    "shadow-100": {
      value: "none"
    },
    "shadow-bevel-100": {
      value: "none"
    },
    "shadow-button": {
      value: buttonShadow
    },
    "shadow-button-hover": {
      value: buttonShadow
    },
    "shadow-button-inset": {
      value: buttonShadow
    },
    "shadow-button-primary": {
      value: "none"
    },
    "shadow-button-primary-hover": {
      value: "none"
    },
    "shadow-button-primary-inset": {
      value: "none"
    },
    "shadow-button-primary-critical": {
      value: "none"
    },
    "shadow-button-primary-critical-hover": {
      value: "none"
    },
    "shadow-button-primary-critical-inset": {
      value: "none"
    },
    "shadow-button-primary-success": {
      value: "none"
    },
    "shadow-button-primary-success-hover": {
      value: "none"
    },
    "shadow-button-primary-success-inset": {
      value: "none"
    }
  },
  space: {
    "space-card-gap": {
      value: createVar("space-200")
    }
  },
  text: {
    // heading-2xl
    "text-heading-2xl-font-size": {
      value: createVar("font-size-800")
    },
    // heading-xl
    "text-heading-xl-font-size": {
      value: createVar("font-size-550")
    },
    "text-heading-xl-font-line-height": {
      value: createVar("font-line-height-700")
    },
    // heading-lg
    "text-heading-lg-font-size": {
      value: createVar("font-size-450")
    },
    // heading-md
    "text-heading-md-font-size": {
      value: createVar("font-size-400")
    },
    // heading-sm
    "text-heading-sm-font-size": {
      value: createVar("font-size-350")
    },
    // body-lg
    "text-body-lg-font-size": {
      value: createVar("font-size-450")
    },
    "text-body-lg-font-line-height": {
      value: createVar("font-line-height-700")
    },
    // body-md
    "text-body-md-font-size": {
      value: createVar("font-size-400")
    },
    "text-body-md-font-line-height": {
      value: createVar("font-line-height-600")
    },
    // body-sm
    "text-body-sm-font-size": {
      value: createVar("font-size-350")
    },
    "text-body-sm-font-line-height": {
      value: createVar("font-line-height-500")
    },
    // body-xs
    "text-body-xs-font-size": {
      value: createVar("font-size-300")
    },
    "text-body-xs-font-line-height": {
      value: createVar("font-line-height-400")
    }
  }
}), metaThemeLightMobile = createMetaTheme(metaThemeLightMobilePartial);

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/dark.mjs
var metaThemeDarkPartial = createMetaThemePartial({
  color: {
    "color-scheme": {
      value: "dark"
    },
    "color-bg": {
      value: gray[16]
    },
    "color-bg-surface": {
      value: gray[15]
    },
    "color-bg-fill": {
      value: gray[15]
    },
    "color-icon": {
      value: gray[8]
    },
    "color-icon-secondary": {
      value: gray[12]
    },
    "color-text": {
      value: gray[8]
    },
    "color-text-secondary": {
      value: gray[11]
    },
    "color-bg-surface-secondary-active": {
      value: gray[13]
    },
    "color-bg-surface-secondary-hover": {
      value: gray[14]
    },
    "color-bg-fill-transparent": {
      value: whiteAlpha[8]
    },
    "color-bg-fill-brand": {
      value: gray[1]
    },
    "color-text-brand-on-bg-fill": {
      value: gray[15]
    },
    "color-bg-surface-hover": {
      value: gray[14]
    },
    "color-bg-fill-hover": {
      value: gray[14]
    },
    "color-bg-fill-transparent-hover": {
      value: whiteAlpha[9]
    },
    "color-bg-fill-brand-hover": {
      value: gray[5]
    },
    "color-bg-surface-selected": {
      value: gray[13]
    },
    "color-bg-fill-selected": {
      value: gray[13]
    },
    "color-bg-fill-transparent-selected": {
      value: whiteAlpha[11]
    },
    "color-bg-fill-brand-selected": {
      value: gray[9]
    },
    "color-bg-surface-active": {
      value: gray[13]
    },
    "color-bg-fill-active": {
      value: gray[13]
    },
    "color-bg-fill-transparent-active": {
      value: whiteAlpha[10]
    },
    "color-bg-fill-brand-active": {
      value: gray[4]
    },
    "color-bg-surface-brand-selected": {
      value: gray[14]
    },
    "color-border-secondary": {
      value: gray[13]
    },
    "color-tooltip-tail-down-border-experimental": {
      value: "rgba(60, 60, 60, 1)"
    },
    "color-tooltip-tail-up-border-experimental": {
      value: "rgba(71, 71, 71, 1)"
    },
    "color-border-gradient-experimental": {
      value: "linear-gradient(to bottom, " + whiteAlpha[9] + ", " + whiteAlpha[4] + ")"
    },
    "color-border-gradient-hover-experimental": {
      value: "linear-gradient(to bottom, " + whiteAlpha[9] + ", " + whiteAlpha[4] + ")"
    },
    "color-border-gradient-selected-experimental": {
      value: "linear-gradient(to bottom, " + blackAlpha[10] + ", " + whiteAlpha[10] + ")"
    },
    "color-border-gradient-active-experimental": {
      value: "linear-gradient(to bottom, " + whiteAlpha[10] + ", " + whiteAlpha[4] + ")"
    }
  },
  shadow: {
    "shadow-bevel-100": {
      value: "1px 0px 0px 0px rgba(204, 204, 204, 0.08) inset, -1px 0px 0px 0px rgba(204, 204, 204, 0.08) inset, 0px -1px 0px 0px rgba(204, 204, 204, 0.08) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.16) inset"
    }
  }
}), metaThemeDark = createMetaTheme(metaThemeDarkPartial);

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/index.mjs
var metaThemePartials = {
  light: metaThemeLightPartial,
  "light-mobile": metaThemeLightMobilePartial,
  "light-high-contrast-experimental": metaThemeLightHighContrastPartial,
  "dark-experimental": metaThemeDarkPartial
}, metaThemeDefaultPartial = metaThemePartials[themeNameDefault], metaThemeDefault = createMetaTheme(metaThemeDefaultPartial);

// node_modules/@shopify/polaris-tokens/dist/esm/build/index.mjs
var themes = {
  light: {
    border: {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0": "0rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    breakpoints: {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    color: {
      "color-scheme": "light",
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 225, 1)",
      "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
      "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
      "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
      "color-bg-fill-success": "rgba(41, 132, 90, 1)",
      "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
      "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
      "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
      "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
      "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
      "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(48, 48, 48, 1)",
      "color-text-secondary": "rgba(97, 97, 97, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(74, 74, 74, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 58, 90, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-secondary": "rgba(0, 124, 180, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(12, 81, 50, 1)",
      "color-text-success-hover": "rgba(8, 61, 37, 1)",
      "color-text-success-active": "rgba(9, 42, 27, 1)",
      "color-text-success-secondary": "rgba(41, 132, 90, 1)",
      "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 31, 11, 1)",
      "color-text-critical-hover": "rgba(95, 21, 7, 1)",
      "color-text-critical-active": "rgba(47, 10, 4, 1)",
      "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(227, 227, 227, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(235, 235, 235, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 254, 194, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 195, 193, 1)",
      "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-tooltip-tail-down-border-experimental": "rgba(212, 212, 212, 1)",
      "color-tooltip-tail-up-border-experimental": "rgba(227, 227, 227, 1)",
      "color-border-gradient-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-border-gradient-hover-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-border-gradient-selected-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-border-gradient-active-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(138, 138, 138, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(41, 132, 90, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(239, 77, 47, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
      "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
      "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
      "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
      "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
      "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
      "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(138, 138, 138, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)"
    },
    font: {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-450": "1.125rem",
      "font-size-500": "1.25rem",
      "font-size-550": "1.375rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-800": "2rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    height: {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    motion: {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    shadow: {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, -0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, 0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.17) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.5) inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
      "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
      "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    space: {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    text: {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xs-font-size": "0.75rem",
      "text-heading-xs-font-weight": "650",
      "text-heading-xs-font-letter-spacing": "0rem",
      "text-heading-xs-font-line-height": "1rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    width: {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    zIndex: {
      "z-index-0": "auto",
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  },
  "light-mobile": {
    border: {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0": "0rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    breakpoints: {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    color: {
      "color-scheme": "light",
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 225, 1)",
      "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
      "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
      "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
      "color-bg-fill-success": "rgba(41, 132, 90, 1)",
      "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
      "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
      "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
      "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
      "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
      "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(48, 48, 48, 1)",
      "color-text-secondary": "rgba(97, 97, 97, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(74, 74, 74, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 58, 90, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-secondary": "rgba(0, 124, 180, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(12, 81, 50, 1)",
      "color-text-success-hover": "rgba(8, 61, 37, 1)",
      "color-text-success-active": "rgba(9, 42, 27, 1)",
      "color-text-success-secondary": "rgba(41, 132, 90, 1)",
      "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 31, 11, 1)",
      "color-text-critical-hover": "rgba(95, 21, 7, 1)",
      "color-text-critical-active": "rgba(47, 10, 4, 1)",
      "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(227, 227, 227, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(235, 235, 235, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 254, 194, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 195, 193, 1)",
      "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-tooltip-tail-down-border-experimental": "rgba(212, 212, 212, 1)",
      "color-tooltip-tail-up-border-experimental": "rgba(227, 227, 227, 1)",
      "color-border-gradient-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-border-gradient-hover-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-border-gradient-selected-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-border-gradient-active-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(138, 138, 138, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(41, 132, 90, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(239, 77, 47, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
      "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
      "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
      "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
      "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
      "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
      "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-button-gradient-bg-fill": "none",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(138, 138, 138, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)"
    },
    font: {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-450": "1.125rem",
      "font-size-500": "1.25rem",
      "font-size-550": "1.375rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-800": "2rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    height: {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    motion: {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    shadow: {
      "shadow-0": "none",
      "shadow-100": "none",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "none",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
      "shadow-button-hover": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
      "shadow-button-inset": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
      "shadow-button-primary": "none",
      "shadow-button-primary-hover": "none",
      "shadow-button-primary-inset": "none",
      "shadow-button-primary-critical": "none",
      "shadow-button-primary-critical-hover": "none",
      "shadow-button-primary-critical-inset": "none",
      "shadow-button-primary-success": "none",
      "shadow-button-primary-success-hover": "none",
      "shadow-button-primary-success-inset": "none",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    space: {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "0.5rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    text: {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "2rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.375rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "1.75rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.125rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "1rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.875rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xs-font-size": "0.75rem",
      "text-heading-xs-font-weight": "650",
      "text-heading-xs-font-letter-spacing": "0rem",
      "text-heading-xs-font-line-height": "1rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "1.125rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.75rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "1rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.5rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.875rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1.25rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.75rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "1rem"
    },
    width: {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    zIndex: {
      "z-index-0": "auto",
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  },
  "light-high-contrast-experimental": {
    border: {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0": "0rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    breakpoints: {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    color: {
      "color-scheme": "light",
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 225, 1)",
      "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
      "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
      "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
      "color-bg-fill-success": "rgba(41, 132, 90, 1)",
      "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
      "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
      "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
      "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
      "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
      "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(26, 26, 26, 1)",
      "color-text-secondary": "rgba(26, 26, 26, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(26, 26, 26, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 58, 90, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-secondary": "rgba(0, 124, 180, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(12, 81, 50, 1)",
      "color-text-success-hover": "rgba(8, 61, 37, 1)",
      "color-text-success-active": "rgba(9, 42, 27, 1)",
      "color-text-success-secondary": "rgba(41, 132, 90, 1)",
      "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 31, 11, 1)",
      "color-text-critical-hover": "rgba(95, 21, 7, 1)",
      "color-text-critical-active": "rgba(47, 10, 4, 1)",
      "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(138, 138, 138, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(138, 138, 138, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 254, 194, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 195, 193, 1)",
      "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-tooltip-tail-down-border-experimental": "rgba(212, 212, 212, 1)",
      "color-tooltip-tail-up-border-experimental": "rgba(227, 227, 227, 1)",
      "color-border-gradient-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-border-gradient-hover-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-border-gradient-selected-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-border-gradient-active-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(74, 74, 74, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(41, 132, 90, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(239, 77, 47, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
      "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
      "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
      "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
      "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
      "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
      "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(74, 74, 74, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)"
    },
    font: {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-450": "1.125rem",
      "font-size-500": "1.25rem",
      "font-size-550": "1.375rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-800": "2rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    height: {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    motion: {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    shadow: {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07), 0rem 0.0625rem 0rem 0rem rgba(208, 208, 208, 0.40) inset, 0.0625rem 0rem 0rem 0rem #CCC inset, -0.0625rem 0rem 0rem 0rem #CCC inset, 0rem -0.0625rem 0rem 0rem #999 inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
      "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
      "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    space: {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    text: {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xs-font-size": "0.75rem",
      "text-heading-xs-font-weight": "650",
      "text-heading-xs-font-letter-spacing": "0rem",
      "text-heading-xs-font-line-height": "1rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    width: {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    zIndex: {
      "z-index-0": "auto",
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  },
  "dark-experimental": {
    border: {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0": "0rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    breakpoints: {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    color: {
      "color-scheme": "dark",
      "color-bg": "rgba(26, 26, 26, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(48, 48, 48, 1)",
      "color-bg-surface-hover": "rgba(74, 74, 74, 1)",
      "color-bg-surface-active": "rgba(97, 97, 97, 1)",
      "color-bg-surface-selected": "rgba(97, 97, 97, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
      "color-bg-surface-secondary-hover": "rgba(74, 74, 74, 1)",
      "color-bg-surface-secondary-active": "rgba(97, 97, 97, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(74, 74, 74, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 225, 1)",
      "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
      "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
      "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(48, 48, 48, 1)",
      "color-bg-fill-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-selected": "rgba(97, 97, 97, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(255, 255, 255, 1)",
      "color-bg-fill-brand-hover": "rgba(243, 243, 243, 1)",
      "color-bg-fill-brand-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-brand-selected": "rgba(212, 212, 212, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
      "color-bg-fill-success": "rgba(41, 132, 90, 1)",
      "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
      "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
      "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
      "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
      "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
      "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(255, 255, 255, 0.11)",
      "color-bg-fill-transparent-hover": "rgba(255, 255, 255, 0.17)",
      "color-bg-fill-transparent-active": "rgba(255, 255, 255, 0.20)",
      "color-bg-fill-transparent-selected": "rgba(255, 255, 255, 0.28)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(227, 227, 227, 1)",
      "color-text-secondary": "rgba(181, 181, 181, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(74, 74, 74, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 58, 90, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-secondary": "rgba(0, 124, 180, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(12, 81, 50, 1)",
      "color-text-success-hover": "rgba(8, 61, 37, 1)",
      "color-text-success-active": "rgba(9, 42, 27, 1)",
      "color-text-success-secondary": "rgba(41, 132, 90, 1)",
      "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 31, 11, 1)",
      "color-text-critical-hover": "rgba(95, 21, 7, 1)",
      "color-text-critical-active": "rgba(47, 10, 4, 1)",
      "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(227, 227, 227, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(97, 97, 97, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 254, 194, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 195, 193, 1)",
      "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-tooltip-tail-down-border-experimental": "rgba(60, 60, 60, 1)",
      "color-tooltip-tail-up-border-experimental": "rgba(71, 71, 71, 1)",
      "color-border-gradient-experimental": "linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.03))",
      "color-border-gradient-hover-experimental": "linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.03))",
      "color-border-gradient-selected-experimental": "linear-gradient(to bottom, rgba(0, 0, 0, 0.20), rgba(255, 255, 255, 0.20))",
      "color-border-gradient-active-experimental": "linear-gradient(to bottom, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.03))",
      "color-icon": "rgba(227, 227, 227, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(138, 138, 138, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(41, 132, 90, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(239, 77, 47, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
      "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
      "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
      "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
      "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
      "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
      "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(138, 138, 138, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)"
    },
    font: {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-450": "1.125rem",
      "font-size-500": "1.25rem",
      "font-size-550": "1.375rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-800": "2rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    height: {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    motion: {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    shadow: {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, -0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem -0.0625rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.16) inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
      "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
      "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    space: {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    text: {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xs-font-size": "0.75rem",
      "text-heading-xs-font-weight": "650",
      "text-heading-xs-font-letter-spacing": "0rem",
      "text-heading-xs-font-line-height": "1rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    width: {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    zIndex: {
      "z-index-0": "auto",
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  }
}, themeDefault = themes[themeNameDefault], isTokenName = createIsTokenName(themes[themeNameDefault]);

// node_modules/@shopify/polaris/build/esm/utilities/use-theme.js
import { useContext, createContext } from "react";
var ThemeContext = /* @__PURE__ */ createContext(null), ThemeNameContext = /* @__PURE__ */ createContext(null);
function getTheme(themeName) {
  return themes[themeName];
}
function useTheme() {
  let theme = useContext(ThemeContext);
  if (!theme)
    throw new Error("No theme was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  return theme;
}
function useThemeName() {
  let themeName = useContext(ThemeNameContext);
  if (!themeName)
    throw new Error("No themeName was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  return themeName;
}
function UseTheme(props) {
  let theme = useTheme();
  return props.children(theme);
}

// node_modules/@shopify/polaris/build/esm/utilities/is-object.js
function isObject(value) {
  let type = typeof value;
  return value != null && (type === "object" || type === "function");
}

// node_modules/@shopify/polaris/build/esm/utilities/css.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function variationName(name, value) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
function sanitizeCustomProperties(styles73) {
  let nonNullValues = Object.entries(styles73).filter(([_, value]) => value != null);
  return nonNullValues.length ? Object.fromEntries(nonNullValues) : void 0;
}
function getResponsiveProps(componentName, componentProp, tokenSubgroup, responsiveProp) {
  if (!responsiveProp)
    return {};
  let result;
  return isObject(responsiveProp) ? result = Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, aliasOrScale]) => [breakpointAlias, `var(--p-${tokenSubgroup}-${aliasOrScale})`])) : result = {
    [breakpointsAliases[0]]: `var(--p-${tokenSubgroup}-${responsiveProp})`
  }, Object.fromEntries(Object.entries(result).map(([breakpointAlias, value]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, value]));
}
function getResponsiveValue(componentName, componentProp, responsiveProp) {
  return responsiveProp ? isObject(responsiveProp) ? Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, responsiveValue]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, responsiveValue])) : {
    [`--pc-${componentName}-${componentProp}-${breakpointsAliases[0]}`]: responsiveProp
  } : {};
}

// node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.css.js
var styles = {
  themeContainer: "Polaris-ThemeProvider--themeContainer"
};

// node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.js
var themeNamesLocal = ["light", "dark-experimental"], isThemeNameLocal = (name) => themeNamesLocal.includes(name);
function ThemeProvider(props) {
  let {
    as: ThemeContainer = "div",
    children,
    className,
    theme: themeName = themeNameDefault
  } = props;
  return /* @__PURE__ */ React.createElement(ThemeNameContext.Provider, {
    value: themeName
  }, /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: getTheme(themeName)
  }, /* @__PURE__ */ React.createElement(ThemeContainer, {
    "data-portal-id": props["data-portal-id"],
    className: classNames(createThemeClassName(themeName), styles.themeContainer, className)
  }, children)));
}

// node_modules/@shopify/polaris/build/esm/utilities/within-content-context.js
import { createContext as createContext2 } from "react";
var WithinContentContext = /* @__PURE__ */ createContext2(!1);

// node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js
import { useRef, useEffect as useEffect2 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js
import { useEffect, useLayoutEffect } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/target.js
var isServer = typeof window > "u" || typeof document > "u";

// node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js
var useIsomorphicLayoutEffect = isServer ? useEffect : useLayoutEffect;

// node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js
function useEventListener(eventName, handler, target, options) {
  let handlerRef = useRef(handler), optionsRef = useRef(options);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  }, [handler]), useIsomorphicLayoutEffect(() => {
    optionsRef.current = options;
  }, [options]), useEffect2(() => {
    if (!(typeof eventName == "string" && target !== null))
      return;
    let targetElement;
    if (typeof target > "u")
      targetElement = window;
    else if ("current" in target) {
      if (target.current === null)
        return;
      targetElement = target.current;
    } else
      targetElement = target;
    let eventOptions = optionsRef.current, eventListener = (event) => handlerRef.current(event);
    return targetElement.addEventListener(eventName, eventListener, eventOptions), () => {
      targetElement.removeEventListener(eventName, eventListener, eventOptions);
    };
  }, [eventName, target]);
}

// node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js
import { useState } from "react";
var Breakpoints = {
  // TODO: Update to smDown
  navigationBarCollapsed: "767.95px",
  // TODO: Update to lgDown
  stackedContent: "1039.95px"
}, noWindowMatches = {
  media: "",
  addListener: noop,
  removeListener: noop,
  matches: !1,
  onchange: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: (_) => !0
};
function noop() {
}
function navigationBarCollapsed() {
  return typeof window > "u" ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.navigationBarCollapsed})`);
}
function stackedContent() {
  return typeof window > "u" ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.stackedContent})`);
}
var breakpointsQueryEntries = getBreakpointsQueryEntries(themeDefault.breakpoints);
function getMatches(defaults, forceDefaults) {
  return Object.fromEntries(!isServer && !forceDefaults ? breakpointsQueryEntries.map(([directionAlias, query]) => [directionAlias, window.matchMedia(query).matches]) : typeof defaults == "object" && defaults !== null ? breakpointsQueryEntries.map(([directionAlias]) => [directionAlias, defaults[directionAlias] ?? !1]) : breakpointsQueryEntries.map(([directionAlias]) => [directionAlias, defaults ?? !1]));
}
function useBreakpoints(options) {
  let [breakpoints2, setBreakpoints] = useState(getMatches(options?.defaults, !0));
  return useIsomorphicLayoutEffect(() => {
    let mediaQueryLists = breakpointsQueryEntries.map(([_, query]) => window.matchMedia(query)), handler = () => setBreakpoints(getMatches());
    return mediaQueryLists.forEach((mql) => {
      mql.addListener ? mql.addListener(handler) : mql.addEventListener("change", handler);
    }), handler(), () => {
      mediaQueryLists.forEach((mql) => {
        mql.removeListener ? mql.removeListener(handler) : mql.removeEventListener("change", handler);
      });
    };
  }, []), breakpoints2;
}
function getBreakpointsQueryEntries(breakpoints2) {
  return Object.entries(getMediaConditions(breakpoints2)).map(([breakpointsToken, mediaConditions]) => Object.entries(mediaConditions).map(([direction, mediaCondition]) => [`${breakpointsToken.split("-")[1]}${capitalize(direction)}`, mediaCondition])).flat();
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js
import React7, { Component } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/debounce.js
function debounce(func, waitArg, options) {
  let lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = !1, maxing = !1, trailing = !0, useRAF = !waitArg && waitArg !== 0;
  if (typeof func != "function")
    throw new TypeError("Expected a function");
  let wait = waitArg || 0;
  typeof options == "object" && (leading = Boolean(options.leading), maxing = "maxWait" in options, maxWait = maxing ? Math.max(Number(options.maxWait) || 0, wait) : void 0, trailing = "trailing" in options ? Boolean(options.trailing) : trailing);
  function invokeFunc(time) {
    let args = lastArgs, thisArg = lastThis;
    return lastArgs = void 0, lastThis = void 0, lastInvokeTime = time, result = func.apply(thisArg, args), result;
  }
  function startTimer(pendingFunc, wait2) {
    return useRAF ? (cancelAnimationFrame(timerId), requestAnimationFrame(pendingFunc)) : setTimeout(pendingFunc, wait2);
  }
  function cancelTimer(id) {
    if (useRAF)
      return cancelAnimationFrame(id);
    clearTimeout(id);
  }
  function leadingEdge(time) {
    return lastInvokeTime = time, timerId = startTimer(timerExpired, wait), leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    let timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing && maxWait ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    let timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && maxWait && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    let time = Date.now();
    if (shouldInvoke(time))
      return trailingEdge(time);
    timerId = startTimer(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    return timerId = void 0, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = void 0, result);
  }
  function cancel() {
    timerId !== void 0 && cancelTimer(timerId), lastInvokeTime = 0, lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(Date.now());
  }
  function pending() {
    return timerId !== void 0;
  }
  function debounced(...args) {
    let time = Date.now(), isInvoking = shouldInvoke(time);
    if (lastArgs = args, lastThis = this, lastCallTime = time, isInvoking) {
      if (timerId === void 0)
        return leadingEdge(lastCallTime);
      if (maxing)
        return timerId = startTimer(timerExpired, wait), invokeFunc(lastCallTime);
    }
    return timerId === void 0 && (timerId = startTimer(timerExpired, wait)), result;
  }
  return debounced.cancel = cancel, debounced.flush = flush, debounced.pending = pending, debounced;
}

// node_modules/@shopify/polaris/build/esm/utilities/geometry.js
var Rect = class {
  static get zero() {
    return new Rect();
  }
  constructor({
    top = 0,
    left = 0,
    width: width2 = 0,
    height: height2 = 0
  } = {}) {
    this.top = top, this.left = left, this.width = width2, this.height = height2;
  }
  get center() {
    return {
      x: this.left + this.width / 2,
      y: this.top + this.height / 2
    };
  }
};
function getRectForNode(node) {
  if (!(node instanceof Element))
    return new Rect({
      width: window.innerWidth,
      height: window.innerHeight
    });
  let rect = node.getBoundingClientRect();
  return new Rect({
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height
  });
}

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/sticky-manager.js
var SIXTY_FPS = 1e3 / 60, StickyManager = class {
  constructor(container) {
    this.stickyItems = [], this.stuckItems = [], this.container = null, this.topBarOffset = 0, this.handleResize = debounce(() => {
      this.manageStickyItems();
    }, SIXTY_FPS, {
      leading: !0,
      trailing: !0,
      maxWait: SIXTY_FPS
    }), this.handleScroll = debounce(() => {
      this.manageStickyItems();
    }, SIXTY_FPS, {
      leading: !0,
      trailing: !0,
      maxWait: SIXTY_FPS
    }), container && this.setContainer(container);
  }
  registerStickyItem(stickyItem) {
    this.stickyItems.push(stickyItem);
  }
  unregisterStickyItem(nodeToRemove) {
    let nodeIndex = this.stickyItems.findIndex(({
      stickyNode
    }) => nodeToRemove === stickyNode);
    this.stickyItems.splice(nodeIndex, 1);
  }
  setContainer(el) {
    this.container = el, isDocument(el) && this.setTopBarOffset(el), this.container.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), this.manageStickyItems();
  }
  removeScrollListener() {
    this.container && (this.container.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize));
  }
  manageStickyItems() {
    if (this.stickyItems.length <= 0)
      return;
    let scrollTop = this.container ? scrollTopFor(this.container) : 0, containerTop = getRectForNode(this.container).top + this.topBarOffset;
    this.stickyItems.forEach((stickyItem) => {
      let {
        handlePositioning
      } = stickyItem, {
        sticky,
        top,
        left,
        width: width2
      } = this.evaluateStickyItem(stickyItem, scrollTop, containerTop);
      this.updateStuckItems(stickyItem, sticky), handlePositioning(sticky, top, left, width2);
    });
  }
  evaluateStickyItem(stickyItem, scrollTop, containerTop) {
    let {
      stickyNode,
      placeHolderNode,
      boundingElement,
      offset,
      disableWhenStacked
    } = stickyItem;
    if (disableWhenStacked && stackedContent().matches)
      return {
        sticky: !1,
        top: 0,
        left: 0,
        width: "auto"
      };
    let stickyOffset = offset ? this.getOffset(stickyNode) + parseInt(
      // Important: This will not update when the active theme changes.
      // Update this to `useTheme` once converted to a function component.
      themeDefault.space["space-500"],
      10
    ) : this.getOffset(stickyNode), scrollPosition2 = scrollTop + stickyOffset, placeHolderNodeCurrentTop = placeHolderNode.getBoundingClientRect().top - containerTop + scrollTop, top = containerTop + stickyOffset, width2 = placeHolderNode.getBoundingClientRect().width, left = placeHolderNode.getBoundingClientRect().left, sticky;
    if (boundingElement == null)
      sticky = scrollPosition2 >= placeHolderNodeCurrentTop;
    else {
      let stickyItemHeight = stickyNode.getBoundingClientRect().height || stickyNode.firstElementChild?.getBoundingClientRect().height || 0, stickyItemBottomPosition = boundingElement.getBoundingClientRect().bottom - stickyItemHeight + scrollTop - containerTop;
      sticky = scrollPosition2 >= placeHolderNodeCurrentTop && scrollPosition2 < stickyItemBottomPosition;
    }
    return {
      sticky,
      top,
      left,
      width: width2
    };
  }
  updateStuckItems(item, sticky) {
    let {
      stickyNode
    } = item;
    sticky && !this.isNodeStuck(stickyNode) ? this.addStuckItem(item) : !sticky && this.isNodeStuck(stickyNode) && this.removeStuckItem(item);
  }
  addStuckItem(stickyItem) {
    this.stuckItems.push(stickyItem);
  }
  removeStuckItem(stickyItem) {
    let {
      stickyNode: nodeToRemove
    } = stickyItem, nodeIndex = this.stuckItems.findIndex(({
      stickyNode
    }) => nodeToRemove === stickyNode);
    this.stuckItems.splice(nodeIndex, 1);
  }
  getOffset(node) {
    if (this.stuckItems.length === 0)
      return 0;
    let offset = 0, count = 0, stuckNodesLength = this.stuckItems.length, nodeRect = getRectForNode(node);
    for (; count < stuckNodesLength; ) {
      let stuckNode = this.stuckItems[count].stickyNode;
      if (stuckNode !== node) {
        let stuckNodeRect = getRectForNode(stuckNode);
        horizontallyOverlaps(nodeRect, stuckNodeRect) || (offset += getRectForNode(stuckNode).height);
      } else
        break;
      count++;
    }
    return offset;
  }
  isNodeStuck(node) {
    return this.stuckItems.findIndex(({
      stickyNode
    }) => node === stickyNode) >= 0;
  }
  setTopBarOffset(container) {
    let topbarElement = container.querySelector(`:not(${scrollable.selector}) ${dataPolarisTopBar.selector}`);
    this.topBarOffset = topbarElement ? topbarElement.clientHeight : 0;
  }
};
function isDocument(node) {
  return node === document;
}
function scrollTopFor(container) {
  return isDocument(container) ? document.body.scrollTop || document.documentElement.scrollTop : container.scrollTop;
}
function horizontallyOverlaps(rect1, rect2) {
  let rect1Left = rect1.left, rect1Right = rect1.left + rect1.width, rect2Left = rect2.left;
  return rect2.left + rect2.width < rect1Left || rect1Right < rect2Left;
}

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/scroll-lock-manager.js
var SCROLL_LOCKING_ATTRIBUTE = "data-lock-scrolling", SCROLL_LOCKING_HIDDEN_ATTRIBUTE = "data-lock-scrolling-hidden", SCROLL_LOCKING_WRAPPER_ATTRIBUTE = "data-lock-scrolling-wrapper", scrollPosition = 0;
function isScrollBarVisible() {
  let {
    body
  } = document;
  return body.scrollHeight > body.clientHeight;
}
var ScrollLockManager = class {
  constructor() {
    this.scrollLocks = 0, this.locked = !1;
  }
  registerScrollLock() {
    this.scrollLocks += 1, this.handleScrollLocking();
  }
  unregisterScrollLock() {
    this.scrollLocks -= 1, this.handleScrollLocking();
  }
  handleScrollLocking() {
    if (isServer)
      return;
    let {
      scrollLocks
    } = this, {
      body
    } = document, wrapper = body.firstElementChild;
    scrollLocks === 0 ? (body.removeAttribute(SCROLL_LOCKING_ATTRIBUTE), body.removeAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE), wrapper && wrapper.removeAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE), window.scroll(0, scrollPosition), this.locked = !1) : scrollLocks > 0 && !this.locked && (scrollPosition = window.pageYOffset, body.setAttribute(SCROLL_LOCKING_ATTRIBUTE, ""), isScrollBarVisible() || body.setAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE, ""), wrapper && (wrapper.setAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE, ""), wrapper.scrollTop = scrollPosition), this.locked = !0);
  }
  resetScrollPosition() {
    scrollPosition = 0;
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/get.js
var OBJECT_NOTATION_MATCHER = /\[(.*?)\]|(\w+)/g;
function get(obj, keypath, defaultValue) {
  if (obj == null)
    return;
  let keys = Array.isArray(keypath) ? keypath : getKeypath(keypath), acc = obj;
  for (let i = 0; i < keys.length; i++) {
    let val = acc[keys[i]];
    if (val === void 0)
      return defaultValue;
    acc = val;
  }
  return acc;
}
function getKeypath(str) {
  let path = [], result;
  for (; result = OBJECT_NOTATION_MATCHER.exec(str); ) {
    let [, first, second] = result;
    path.push(first || second);
  }
  return path;
}

// node_modules/@shopify/polaris/build/esm/utilities/merge.js
function merge(...objs) {
  let final = {};
  for (let obj of objs)
    final = mergeRecursively(final, obj);
  return final;
}
function mergeRecursively(inputObjA, objB) {
  let objA = Array.isArray(inputObjA) ? [...inputObjA] : {
    ...inputObjA
  };
  for (let key in objB)
    if (Object.prototype.hasOwnProperty.call(objB, key))
      isMergeableValue(objB[key]) && isMergeableValue(objA[key]) ? objA[key] = mergeRecursively(objA[key], objB[key]) : objA[key] = objB[key];
    else
      continue;
  return objA;
}
function isMergeableValue(value) {
  return value !== null && typeof value == "object";
}

// node_modules/@shopify/polaris/build/esm/utilities/i18n/I18n.js
var REPLACE_REGEX = /{([^}]*)}/g, I18n = class {
  /**
   * @param translation A locale object or array of locale objects that overrides default translations. If specifying an array then your desired language dictionary should come first, followed by your fallback language dictionaries
   */
  constructor(translation) {
    this.translation = {}, this.translation = Array.isArray(translation) ? merge(...translation.slice().reverse()) : translation;
  }
  translate(id, replacements) {
    let text2 = get(this.translation, id, "");
    return text2 ? replacements ? text2.replace(REPLACE_REGEX, (match) => {
      let replacement = match.substring(1, match.length - 1);
      if (replacements[replacement] === void 0) {
        let replacementData = JSON.stringify(replacements);
        throw new Error(`Error in translation for key '${id}'. No replacement found for key '${replacement}'. The following replacements were passed: '${replacementData}'`);
      }
      return replacements[replacement];
    }) : text2 : "";
  }
  translationKeyExists(path) {
    return Boolean(get(this.translation, path));
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/features/context.js
import { createContext as createContext3 } from "react";
var FeaturesContext = /* @__PURE__ */ createContext3(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/i18n/context.js
import { createContext as createContext4 } from "react";
var I18nContext = /* @__PURE__ */ createContext4(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/context.js
import { createContext as createContext5 } from "react";
var ScrollLockManagerContext = /* @__PURE__ */ createContext5(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/context.js
import { createContext as createContext6 } from "react";
var StickyManagerContext = /* @__PURE__ */ createContext6(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/link/context.js
import { createContext as createContext7 } from "react";
var LinkContext = /* @__PURE__ */ createContext7(void 0);

// node_modules/@shopify/polaris/build/esm/components/MediaQueryProvider/MediaQueryProvider.js
import React2, { useState as useState2, useCallback, useEffect as useEffect3, useMemo } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/media-query/context.js
import { createContext as createContext8 } from "react";
var MediaQueryContext = /* @__PURE__ */ createContext8(void 0);

// node_modules/@shopify/polaris/build/esm/components/EventListener/EventListener.js
import { PureComponent } from "react";
var EventListener = class extends PureComponent {
  componentDidMount() {
    this.attachListener();
  }
  componentDidUpdate({
    passive,
    ...detachProps
  }) {
    this.detachListener(detachProps), this.attachListener();
  }
  componentWillUnmount() {
    this.detachListener();
  }
  render() {
    return null;
  }
  attachListener() {
    let {
      event,
      handler,
      capture,
      passive
    } = this.props;
    window.addEventListener(event, handler, {
      capture,
      passive
    });
  }
  detachListener(prevProps) {
    let {
      event,
      handler,
      capture
    } = prevProps || this.props;
    window.removeEventListener(event, handler, capture);
  }
};

// node_modules/@shopify/polaris/build/esm/components/MediaQueryProvider/MediaQueryProvider.js
var MediaQueryProvider = function({
  children
}) {
  let [isNavigationCollapsed, setIsNavigationCollapsed] = useState2(navigationBarCollapsed().matches), handleResize = useCallback(debounce(() => {
    isNavigationCollapsed !== navigationBarCollapsed().matches && setIsNavigationCollapsed(!isNavigationCollapsed);
  }, 40, {
    trailing: !0,
    leading: !0,
    maxWait: 40
  }), [isNavigationCollapsed]);
  useEffect3(() => {
    setIsNavigationCollapsed(navigationBarCollapsed().matches);
  }, []);
  let context = useMemo(() => ({
    isNavigationCollapsed
  }), [isNavigationCollapsed]);
  return /* @__PURE__ */ React2.createElement(MediaQueryContext.Provider, {
    value: context
  }, /* @__PURE__ */ React2.createElement(EventListener, {
    event: "resize",
    handler: handleResize
  }), children);
};

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js
import React4, { useRef as useRef2, useMemo as useMemo2 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/use-is-after-initial-mount.js
import { useState as useState3, useEffect as useEffect4 } from "react";
function useIsAfterInitialMount() {
  let [isAfterInitialMount, setIsAfterInitialMount] = useState3(!1);
  return useEffect4(() => {
    setIsAfterInitialMount(!0);
  }, []), isAfterInitialMount;
}

// node_modules/@shopify/polaris/build/esm/utilities/portals/context.js
import { createContext as createContext9 } from "react";
var PortalsManagerContext = /* @__PURE__ */ createContext9(void 0);

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/components/PortalsContainer/PortalsContainer.js
import React3, { forwardRef } from "react";
function PortalsContainerComponent(_props, ref) {
  return /* @__PURE__ */ React3.createElement("div", {
    id: "PolarisPortalsContainer",
    ref
  });
}
var PortalsContainer = /* @__PURE__ */ forwardRef(PortalsContainerComponent);

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js
function PortalsManager({
  children,
  container
}) {
  let isMounted = useIsAfterInitialMount(), ref = useRef2(null), contextValue = useMemo2(() => container ? {
    container
  } : isMounted ? {
    container: ref.current
  } : {
    container: null
  }, [container, isMounted]);
  return /* @__PURE__ */ React4.createElement(PortalsManagerContext.Provider, {
    value: contextValue
  }, children, container ? null : /* @__PURE__ */ React4.createElement(PortalsContainer, {
    ref
  }));
}

// node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js
import React5, { useState as useState4, useCallback as useCallback2, useMemo as useMemo3 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/focus-manager/context.js
import { createContext as createContext10 } from "react";
var FocusManagerContext = /* @__PURE__ */ createContext10(void 0);

// node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js
function FocusManager({
  children
}) {
  let [trapFocusList, setTrapFocusList] = useState4([]), add = useCallback2((id) => {
    setTrapFocusList((list) => [...list, id]);
  }, []), remove = useCallback2((id) => {
    let removed = !0;
    return setTrapFocusList((list) => {
      let clone = [...list], index = clone.indexOf(id);
      return index === -1 ? removed = !1 : clone.splice(index, 1), clone;
    }), removed;
  }, []), value = useMemo3(() => ({
    trapFocusList,
    add,
    remove
  }), [add, trapFocusList, remove]);
  return /* @__PURE__ */ React5.createElement(FocusManagerContext.Provider, {
    value
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/EphemeralPresenceManager/EphemeralPresenceManager.js
import React6, { useState as useState5, useCallback as useCallback3, useMemo as useMemo4 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/context.js
import { createContext as createContext11 } from "react";
var EphemeralPresenceManagerContext = /* @__PURE__ */ createContext11(void 0);

// node_modules/@shopify/polaris/build/esm/components/EphemeralPresenceManager/EphemeralPresenceManager.js
var defaultState = {
  tooltip: 0,
  hovercard: 0
};
function EphemeralPresenceManager({
  children
}) {
  let [presenceCounter, setPresenceCounter] = useState5(defaultState), addPresence = useCallback3((key) => {
    setPresenceCounter((prevList) => ({
      ...prevList,
      [key]: prevList[key] + 1
    }));
  }, []), removePresence = useCallback3((key) => {
    setPresenceCounter((prevList) => ({
      ...prevList,
      [key]: prevList[key] - 1
    }));
  }, []), value = useMemo4(() => ({
    presenceList: Object.entries(presenceCounter).reduce((previousValue, currentValue) => {
      let [key, value2] = currentValue;
      return {
        ...previousValue,
        [key]: value2 >= 1
      };
    }, {}),
    presenceCounter,
    addPresence,
    removePresence
  }), [addPresence, removePresence, presenceCounter]);
  return /* @__PURE__ */ React6.createElement(EphemeralPresenceManagerContext.Provider, {
    value
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js
var MAX_SCROLLBAR_WIDTH = 20, SCROLLBAR_TEST_ELEMENT_PARENT_SIZE = 30, SCROLLBAR_TEST_ELEMENT_CHILD_SIZE = SCROLLBAR_TEST_ELEMENT_PARENT_SIZE + 10;
function measureScrollbars() {
  let parentEl = document.createElement("div");
  parentEl.setAttribute("style", `position: absolute; opacity: 0; transform: translate3d(-9999px, -9999px, 0); pointer-events: none; width:${SCROLLBAR_TEST_ELEMENT_PARENT_SIZE}px; height:${SCROLLBAR_TEST_ELEMENT_PARENT_SIZE}px;`);
  let child = document.createElement("div");
  child.setAttribute("style", `width:100%; height: ${SCROLLBAR_TEST_ELEMENT_CHILD_SIZE}; overflow:scroll; scrollbar-width: thin;`), parentEl.appendChild(child), document.body.appendChild(parentEl);
  let scrollbarWidth = SCROLLBAR_TEST_ELEMENT_PARENT_SIZE - (parentEl.firstElementChild?.clientWidth ?? 0), scrollbarWidthWithSafetyHatch = Math.min(scrollbarWidth, MAX_SCROLLBAR_WIDTH);
  document.documentElement.style.setProperty("--pc-app-provider-scrollbar-width", `${scrollbarWidthWithSafetyHatch}px`), document.body.removeChild(parentEl);
}
var AppProvider = class extends Component {
  constructor(props) {
    super(props), this.setBodyStyles = () => {
      document.body.style.backgroundColor = "var(--p-color-bg)", document.body.style.color = "var(--p-color-text)";
    }, this.setRootAttributes = () => {
      let activeThemeName = this.getThemeName();
      themeNames.forEach((themeName) => {
        document.documentElement.classList.toggle(createThemeClassName(themeName), themeName === activeThemeName);
      });
    }, this.getThemeName = () => this.props.theme ?? themeNameDefault, this.stickyManager = new StickyManager(), this.scrollLockManager = new ScrollLockManager();
    let {
      i18n,
      linkComponent
    } = this.props;
    this.state = {
      link: linkComponent,
      intl: new I18n(i18n)
    };
  }
  componentDidMount() {
    if (document != null) {
      this.stickyManager.setContainer(document), this.setBodyStyles(), this.setRootAttributes();
      let isSafari16 = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome") && (navigator.userAgent.includes("Version/16.1") || navigator.userAgent.includes("Version/16.2") || navigator.userAgent.includes("Version/16.3")), isMobileApp16 = navigator.userAgent.includes("Shopify Mobile/iOS") && (navigator.userAgent.includes("OS 16_1") || navigator.userAgent.includes("OS 16_2") || navigator.userAgent.includes("OS 16_3"));
      (isSafari16 || isMobileApp16) && document.documentElement.classList.add("Polaris-Safari-16-Font-Optical-Sizing-Patch");
    }
    measureScrollbars();
  }
  componentDidUpdate({
    i18n: prevI18n,
    linkComponent: prevLinkComponent
  }) {
    let {
      i18n,
      linkComponent
    } = this.props;
    this.setRootAttributes(), !(i18n === prevI18n && linkComponent === prevLinkComponent) && this.setState({
      link: linkComponent,
      intl: new I18n(i18n)
    });
  }
  render() {
    let {
      children,
      features
    } = this.props, themeName = this.getThemeName(), {
      intl,
      link
    } = this.state;
    return /* @__PURE__ */ React7.createElement(ThemeNameContext.Provider, {
      value: themeName
    }, /* @__PURE__ */ React7.createElement(ThemeContext.Provider, {
      value: getTheme(themeName)
    }, /* @__PURE__ */ React7.createElement(FeaturesContext.Provider, {
      value: features
    }, /* @__PURE__ */ React7.createElement(I18nContext.Provider, {
      value: intl
    }, /* @__PURE__ */ React7.createElement(ScrollLockManagerContext.Provider, {
      value: this.scrollLockManager
    }, /* @__PURE__ */ React7.createElement(StickyManagerContext.Provider, {
      value: this.stickyManager
    }, /* @__PURE__ */ React7.createElement(LinkContext.Provider, {
      value: link
    }, /* @__PURE__ */ React7.createElement(MediaQueryProvider, null, /* @__PURE__ */ React7.createElement(PortalsManager, null, /* @__PURE__ */ React7.createElement(FocusManager, null, /* @__PURE__ */ React7.createElement(EphemeralPresenceManager, null, children)))))))))));
  }
};

// node_modules/@shopify/polaris/build/esm/components/Button/utils.js
import React38 from "react";

// node_modules/@shopify/polaris/build/esm/components/Button/Button.js
import React37 from "react";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/AlertCircleIcon.svg.mjs
import React8 from "react";
var SvgAlertCircleIcon = function(props) {
  return /* @__PURE__ */ React8.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React8.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ React8.createElement("path", {
    d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ React8.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgAlertCircleIcon.displayName = "AlertCircleIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/AlertTriangleIcon.svg.mjs
import React9 from "react";
var SvgAlertTriangleIcon = function(props) {
  return /* @__PURE__ */ React9.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React9.createElement("path", {
    d: "M10 6.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ React9.createElement("path", {
    d: "M11 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ React9.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3.5c-1.045 0-1.784.702-2.152 1.447a449.26 449.26 0 0 1-2.005 3.847l-.028.052a403.426 403.426 0 0 0-2.008 3.856c-.372.752-.478 1.75.093 2.614.57.863 1.542 1.184 2.464 1.184h7.272c.922 0 1.895-.32 2.464-1.184.57-.864.465-1.862.093-2.614-.21-.424-1.113-2.147-2.004-3.847l-.032-.061a429.497 429.497 0 0 1-2.005-3.847c-.368-.745-1.107-1.447-2.152-1.447Zm-.808 2.112c.404-.816 1.212-.816 1.616 0 .202.409 1.112 2.145 2.022 3.88a418.904 418.904 0 0 1 2.018 3.875c.404.817 0 1.633-1.212 1.633h-7.272c-1.212 0-1.617-.816-1.212-1.633.202-.408 1.113-2.147 2.023-3.883a421.932 421.932 0 0 0 2.017-3.872Z"
  }));
};
SvgAlertTriangleIcon.displayName = "AlertTriangleIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/ArrowLeftIcon.svg.mjs
import React10 from "react";
var SvgArrowLeftIcon = function(props) {
  return /* @__PURE__ */ React10.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React10.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"
  }));
};
SvgArrowLeftIcon.displayName = "ArrowLeftIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/CheckboxIcon.svg.mjs
import React11 from "react";
var SvgCheckboxIcon = function(props) {
  return /* @__PURE__ */ React11.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React11.createElement("path", {
    d: "M13.28 8.78a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /* @__PURE__ */ React11.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 3.5a2.75 2.75 0 0 0-2.75 2.75v7.5a2.75 2.75 0 0 0 2.75 2.75h7.5a2.75 2.75 0 0 0 2.75-2.75v-7.5a2.75 2.75 0 0 0-2.75-2.75h-7.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-7.5c-.69 0-1.25-.56-1.25-1.25v-7.5Z"
  }));
};
SvgCheckboxIcon.displayName = "CheckboxIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/ChevronDownIcon.svg.mjs
import React12 from "react";
var SvgChevronDownIcon = function(props) {
  return /* @__PURE__ */ React12.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React12.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
SvgChevronDownIcon.displayName = "ChevronDownIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/ChevronLeftIcon.svg.mjs
import React13 from "react";
var SvgChevronLeftIcon = function(props) {
  return /* @__PURE__ */ React13.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React13.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
SvgChevronLeftIcon.displayName = "ChevronLeftIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/ChevronRightIcon.svg.mjs
import React14 from "react";
var SvgChevronRightIcon = function(props) {
  return /* @__PURE__ */ React14.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React14.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
SvgChevronRightIcon.displayName = "ChevronRightIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/ChevronUpIcon.svg.mjs
import React15 from "react";
var SvgChevronUpIcon = function(props) {
  return /* @__PURE__ */ React15.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React15.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
SvgChevronUpIcon.displayName = "ChevronUpIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/DeleteIcon.svg.mjs
import React16 from "react";
var SvgDeleteIcon = function(props) {
  return /* @__PURE__ */ React16.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React16.createElement("path", {
    d: "M11.5 8.25a.75.75 0 0 1 .75.75v4.25a.75.75 0 0 1-1.5 0v-4.25a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ React16.createElement("path", {
    d: "M9.25 9a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0v-4.25Z"
  }), /* @__PURE__ */ React16.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 5.25a2.75 2.75 0 0 1 5.5 0h3a.75.75 0 0 1 0 1.5h-.75v5.45c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162v-5.45h-.75a.75.75 0 0 1 0-1.5h3Zm1.5 0a1.25 1.25 0 1 1 2.5 0h-2.5Zm-2.25 1.5h7v5.45c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036h-.4c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848v-5.45Z"
  }));
};
SvgDeleteIcon.displayName = "DeleteIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/DuplicateIcon.svg.mjs
import React17 from "react";
var SvgDuplicateIcon = function(props) {
  return /* @__PURE__ */ React17.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React17.createElement("path", {
    d: "M11.25 8.5c-.414 0-.75.336-.75.75v1.25h-1.25c-.414 0-.75.336-.75.75s.336.75.75.75h1.25v1.25c0 .414.336.75.75.75s.75-.336.75-.75v-1.25h1.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.25v-1.25c0-.414-.336-.75-.75-.75Z"
  }), /* @__PURE__ */ React17.createElement("path", {
    fillRule: "evenodd",
    d: "M8.75 16.5c-1.438 0-2.618-1.104-2.74-2.51-1.406-.122-2.51-1.302-2.51-2.74v-5c0-1.519 1.231-2.75 2.75-2.75h5c1.438 0 2.618 1.104 2.74 2.51 1.406.122 2.51 1.302 2.51 2.74v5c0 1.519-1.231 2.75-2.75 2.75h-5Zm0-10.5c-1.519 0-2.75 1.231-2.75 2.75v3.725c-.57-.116-1-.62-1-1.225v-5c0-.69.56-1.25 1.25-1.25h5c.605 0 1.11.43 1.225 1h-3.725Zm0 1.5c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25h-5Z"
  }));
};
SvgDuplicateIcon.displayName = "DuplicateIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/EditIcon.svg.mjs
import React18 from "react";
var SvgEditIcon = function(props) {
  return /* @__PURE__ */ React18.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React18.createElement("path", {
    fillRule: "evenodd",
    d: "M15.655 4.344a2.695 2.695 0 0 0-3.81 0l-.599.599-.009-.009-1.06 1.06.008.01-5.88 5.88a2.75 2.75 0 0 0-.805 1.944v1.922a.75.75 0 0 0 .75.75h1.922a2.75 2.75 0 0 0 1.944-.806l7.54-7.539a2.695 2.695 0 0 0 0-3.81Zm-4.409 2.72-5.88 5.88a1.25 1.25 0 0 0-.366.884v1.172h1.172c.331 0 .65-.132.883-.366l5.88-5.88-1.689-1.69Zm2.75.629.599-.599a1.195 1.195 0 1 0-1.69-1.689l-.598.599 1.69 1.689Z"
  }));
};
SvgEditIcon.displayName = "EditIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/InfoIcon.svg.mjs
import React19 from "react";
var SvgInfoIcon = function(props) {
  return /* @__PURE__ */ React19.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React19.createElement("path", {
    d: "M10 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75Z"
  }), /* @__PURE__ */ React19.createElement("path", {
    d: "M9 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
  }), /* @__PURE__ */ React19.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgInfoIcon.displayName = "InfoIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/LayoutColumns3Icon.svg.mjs
import React20 from "react";
var SvgLayoutColumns3Icon = function(props) {
  return /* @__PURE__ */ React20.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React20.createElement("path", {
    fillRule: "evenodd",
    d: "M3 6.75c0-2.071 1.679-3.75 3.75-3.75h6.5c2.071 0 3.75 1.679 3.75 3.75v6.5c0 2.071-1.679 3.75-3.75 3.75h-6.5c-2.071 0-3.75-1.679-3.75-3.75v-6.5Zm3.75-2.25c-1.243 0-2.25 1.007-2.25 2.25v6.5c0 1.243 1.007 2.25 2.25 2.25h.5v-11h-.5Zm4.5 11h-2.5v-11h2.5v11Zm1.5 0h.5c1.243 0 2.25-1.007 2.25-2.25v-6.5c0-1.243-1.007-2.25-2.25-2.25h-.5v11Z"
  }));
};
SvgLayoutColumns3Icon.displayName = "LayoutColumns3Icon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/MenuHorizontalIcon.svg.mjs
import React21 from "react";
var SvgMenuHorizontalIcon = function(props) {
  return /* @__PURE__ */ React21.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React21.createElement("path", {
    d: "M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /* @__PURE__ */ React21.createElement("path", {
    d: "M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /* @__PURE__ */ React21.createElement("path", {
    d: "M17 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));
};
SvgMenuHorizontalIcon.displayName = "MenuHorizontalIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/MenuIcon.svg.mjs
import React22 from "react";
var SvgMenuIcon = function(props) {
  return /* @__PURE__ */ React22.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React22.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ React22.createElement("path", {
    fillRule: "evenodd",
    d: "M3 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ React22.createElement("path", {
    fillRule: "evenodd",
    d: "M3 15.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgMenuIcon.displayName = "MenuIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/MinusIcon.svg.mjs
import React23 from "react";
var SvgMinusIcon = function(props) {
  return /* @__PURE__ */ React23.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React23.createElement("path", {
    fillRule: "evenodd",
    d: "M5 10c0-.414.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75Z"
  }));
};
SvgMinusIcon.displayName = "MinusIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/PlusIcon.svg.mjs
import React24 from "react";
var SvgPlusIcon = function(props) {
  return /* @__PURE__ */ React24.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React24.createElement("path", {
    d: "M10.75 5.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.5h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5Z"
  }));
};
SvgPlusIcon.displayName = "PlusIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/SearchIcon.svg.mjs
import React25 from "react";
var SvgSearchIcon = function(props) {
  return /* @__PURE__ */ React25.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React25.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
SvgSearchIcon.displayName = "SearchIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/SelectIcon.svg.mjs
import React26 from "react";
var SvgSelectIcon = function(props) {
  return /* @__PURE__ */ React26.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React26.createElement("path", {
    d: "M10.884 4.323a1.25 1.25 0 0 0-1.768 0l-2.646 2.647a.75.75 0 0 0 1.06 1.06l2.47-2.47 2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.646-2.647Z"
  }), /* @__PURE__ */ React26.createElement("path", {
    d: "m13.53 13.03-2.646 2.647a1.25 1.25 0 0 1-1.768 0l-2.646-2.647a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06Z"
  }));
};
SvgSelectIcon.displayName = "SelectIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/SortAscendingIcon.svg.mjs
import React27 from "react";
var SvgSortAscendingIcon = function(props) {
  return /* @__PURE__ */ React27.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React27.createElement("path", {
    fillRule: "evenodd",
    d: "M9.116 4.323a1.25 1.25 0 0 1 1.768 0l2.646 2.647a.75.75 0 0 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.646-2.647Z"
  }), /* @__PURE__ */ React27.createElement("path", {
    fillOpacity: 0.33,
    fillRule: "evenodd",
    d: "M9.116 15.677a1.25 1.25 0 0 0 1.768 0l2.646-2.647a.75.75 0 0 0-1.06-1.06l-2.47 2.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l2.646 2.647Z"
  }));
};
SvgSortAscendingIcon.displayName = "SortAscendingIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/SortDescendingIcon.svg.mjs
import React28 from "react";
var SvgSortDescendingIcon = function(props) {
  return /* @__PURE__ */ React28.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React28.createElement("path", {
    fillOpacity: 0.33,
    fillRule: "evenodd",
    d: "M9.116 4.823a1.25 1.25 0 0 1 1.768 0l2.646 2.647a.75.75 0 0 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.646-2.647Z"
  }), /* @__PURE__ */ React28.createElement("path", {
    fillRule: "evenodd",
    d: "M9.116 15.177a1.25 1.25 0 0 0 1.768 0l2.646-2.647a.75.75 0 0 0-1.06-1.06l-2.47 2.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l2.646 2.647Z"
  }));
};
SvgSortDescendingIcon.displayName = "SortDescendingIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/XCircleIcon.svg.mjs
import React29 from "react";
var SvgXCircleIcon = function(props) {
  return /* @__PURE__ */ React29.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React29.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ React29.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgXCircleIcon.displayName = "XCircleIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/XIcon.svg.mjs
import React30 from "react";
var SvgXIcon = function(props) {
  return /* @__PURE__ */ React30.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React30.createElement("path", {
    d: "M12.72 13.78a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z"
  }));
};
SvgXIcon.displayName = "XIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/XSmallIcon.svg.mjs
import React31 from "react";
var SvgXSmallIcon = function(props) {
  return /* @__PURE__ */ React31.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ React31.createElement("path", {
    d: "M12.72 13.78a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z"
  }));
};
SvgXSmallIcon.displayName = "XSmallIcon";

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/index.mjs
import "react";

// node_modules/@shopify/polaris/build/esm/utilities/is-element-in-viewport.js
function isElementInViewport(element) {
  let {
    top,
    left,
    bottom,
    right
  } = element.getBoundingClientRect();
  return top >= 0 && right <= window.innerWidth && bottom <= window.innerHeight && left >= 0;
}

// node_modules/@shopify/polaris/build/esm/utilities/focus.js
var FOCUSABLE_SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]', KEYBOARD_FOCUSABLE_SELECTORS = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]:not([tabindex="-1"])', MENUITEM_FOCUSABLE_SELECTORS = 'a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])', handleMouseUpByBlurring = ({
  currentTarget
}) => currentTarget.blur();
function nextFocusableNode(node, filter) {
  let allFocusableElements = [...document.querySelectorAll(FOCUSABLE_SELECTOR)], sliceLocation = allFocusableElements.indexOf(node) + 1, focusableElementsAfterNode = allFocusableElements.slice(sliceLocation);
  for (let focusableElement of focusableElementsAfterNode)
    if (isElementInViewport(focusableElement) && (!filter || filter && filter(focusableElement)))
      return focusableElement;
  return null;
}
function findFirstFocusableNode(element, onlyDescendants = !0) {
  return !onlyDescendants && matches(element, FOCUSABLE_SELECTOR) ? element : element.querySelector(FOCUSABLE_SELECTOR);
}
function findFirstFocusableNodeIncludingDisabled(element) {
  let focusableSelector = "a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";
  return matches(element, focusableSelector) ? element : element.querySelector(focusableSelector);
}
function focusFirstFocusableNode(element, onlyDescendants = !0) {
  findFirstFocusableNode(element, onlyDescendants)?.focus();
}
function focusNextFocusableNode(node, filter) {
  let nextFocusable = nextFocusableNode(node, filter);
  return nextFocusable && nextFocusable instanceof HTMLElement ? (nextFocusable.focus(), !0) : !1;
}
function findFirstKeyboardFocusableNode(element, onlyDescendants = !0) {
  return !onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS) ? element : element.querySelector(KEYBOARD_FOCUSABLE_SELECTORS);
}
function focusFirstKeyboardFocusableNode(element, onlyDescendants = !0) {
  let firstFocusable = findFirstKeyboardFocusableNode(element, onlyDescendants);
  return firstFocusable ? (firstFocusable.focus(), !0) : !1;
}
function findLastKeyboardFocusableNode(element, onlyDescendants = !0) {
  if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS))
    return element;
  let allFocusable = element.querySelectorAll(KEYBOARD_FOCUSABLE_SELECTORS);
  return allFocusable[allFocusable.length - 1];
}
function focusLastKeyboardFocusableNode(element, onlyDescendants = !0) {
  let lastFocusable = findLastKeyboardFocusableNode(element, onlyDescendants);
  return lastFocusable ? (lastFocusable.focus(), !0) : !1;
}
function wrapFocusPreviousFocusableMenuItem(parentElement, currentFocusedElement) {
  let allFocusableChildren = getMenuFocusableDescendants(parentElement), currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
  currentItemIdx === -1 ? allFocusableChildren[0].focus() : allFocusableChildren[(currentItemIdx - 1 + allFocusableChildren.length) % allFocusableChildren.length].focus();
}
function wrapFocusNextFocusableMenuItem(parentElement, currentFocusedElement) {
  let allFocusableChildren = getMenuFocusableDescendants(parentElement), currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
  currentItemIdx === -1 ? allFocusableChildren[0].focus() : allFocusableChildren[(currentItemIdx + 1) % allFocusableChildren.length].focus();
}
function getMenuFocusableDescendants(element) {
  return element.querySelectorAll(MENUITEM_FOCUSABLE_SELECTORS);
}
function getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement) {
  let currentItemIdx = 0;
  for (let focusableChild of allFocusableChildren) {
    if (focusableChild === currentFocusedElement)
      break;
    currentItemIdx++;
  }
  return currentItemIdx === allFocusableChildren.length ? -1 : currentItemIdx;
}
function matches(node, selector) {
  if (node.matches)
    return node.matches(selector);
  let matches2 = (node.ownerDocument || document).querySelectorAll(selector), i = matches2.length;
  for (; --i >= 0 && matches2.item(i) !== node; )
    return i > -1;
}

// node_modules/@shopify/polaris/build/esm/components/Button/Button.css.js
var styles2 = {
  Button: "Polaris-Button",
  disabled: "Polaris-Button--disabled",
  pressed: "Polaris-Button--pressed",
  variantPrimary: "Polaris-Button--variantPrimary",
  variantSecondary: "Polaris-Button--variantSecondary",
  variantTertiary: "Polaris-Button--variantTertiary",
  variantPlain: "Polaris-Button--variantPlain",
  removeUnderline: "Polaris-Button--removeUnderline",
  variantMonochromePlain: "Polaris-Button--variantMonochromePlain",
  toneSuccess: "Polaris-Button--toneSuccess",
  toneCritical: "Polaris-Button--toneCritical",
  sizeMicro: "Polaris-Button--sizeMicro",
  sizeSlim: "Polaris-Button--sizeSlim",
  sizeMedium: "Polaris-Button--sizeMedium",
  sizeLarge: "Polaris-Button--sizeLarge",
  textAlignCenter: "Polaris-Button--textAlignCenter",
  textAlignStart: "Polaris-Button--textAlignStart",
  textAlignLeft: "Polaris-Button--textAlignLeft",
  textAlignEnd: "Polaris-Button--textAlignEnd",
  textAlignRight: "Polaris-Button--textAlignRight",
  fullWidth: "Polaris-Button--fullWidth",
  iconOnly: "Polaris-Button--iconOnly",
  iconWithText: "Polaris-Button--iconWithText",
  disclosure: "Polaris-Button--disclosure",
  loading: "Polaris-Button--loading",
  pressable: "Polaris-Button--pressable",
  hidden: "Polaris-Button--hidden",
  Icon: "Polaris-Button__Icon",
  Spinner: "Polaris-Button__Spinner"
};

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js
import React33 from "react";

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.css.js
var styles3 = {
  Icon: "Polaris-Icon",
  toneInherit: "Polaris-Icon--toneInherit",
  toneBase: "Polaris-Icon--toneBase",
  toneSubdued: "Polaris-Icon--toneSubdued",
  toneCaution: "Polaris-Icon--toneCaution",
  toneWarning: "Polaris-Icon--toneWarning",
  toneCritical: "Polaris-Icon--toneCritical",
  toneInteractive: "Polaris-Icon--toneInteractive",
  toneInfo: "Polaris-Icon--toneInfo",
  toneSuccess: "Polaris-Icon--toneSuccess",
  tonePrimary: "Polaris-Icon--tonePrimary",
  toneEmphasis: "Polaris-Icon--toneEmphasis",
  toneMagic: "Polaris-Icon--toneMagic",
  toneTextCaution: "Polaris-Icon--toneTextCaution",
  toneTextWarning: "Polaris-Icon--toneTextWarning",
  toneTextCritical: "Polaris-Icon--toneTextCritical",
  toneTextInfo: "Polaris-Icon--toneTextInfo",
  toneTextPrimary: "Polaris-Icon--toneTextPrimary",
  toneTextSuccess: "Polaris-Icon--toneTextSuccess",
  toneTextMagic: "Polaris-Icon--toneTextMagic",
  Svg: "Polaris-Icon__Svg",
  Img: "Polaris-Icon__Img",
  Placeholder: "Polaris-Icon__Placeholder"
};

// node_modules/@shopify/polaris/build/esm/components/Text/Text.js
import React32 from "react";

// node_modules/@shopify/polaris/build/esm/components/Text/Text.css.js
var styles4 = {
  root: "Polaris-Text--root",
  block: "Polaris-Text--block",
  truncate: "Polaris-Text--truncate",
  visuallyHidden: "Polaris-Text--visuallyHidden",
  start: "Polaris-Text--start",
  center: "Polaris-Text--center",
  end: "Polaris-Text--end",
  justify: "Polaris-Text--justify",
  base: "Polaris-Text--base",
  inherit: "Polaris-Text--inherit",
  disabled: "Polaris-Text--disabled",
  success: "Polaris-Text--success",
  critical: "Polaris-Text--critical",
  caution: "Polaris-Text--caution",
  subdued: "Polaris-Text--subdued",
  magic: "Polaris-Text--magic",
  "magic-subdued": "Polaris-Text__magic--subdued",
  "text-inverse": "Polaris-Text__text--inverse",
  "text-inverse-secondary": "Polaris-Text--textInverseSecondary",
  headingXs: "Polaris-Text--headingXs",
  headingSm: "Polaris-Text--headingSm",
  headingMd: "Polaris-Text--headingMd",
  headingLg: "Polaris-Text--headingLg",
  headingXl: "Polaris-Text--headingXl",
  heading2xl: "Polaris-Text--heading2xl",
  heading3xl: "Polaris-Text--heading3xl",
  bodyXs: "Polaris-Text--bodyXs",
  bodySm: "Polaris-Text--bodySm",
  bodyMd: "Polaris-Text--bodyMd",
  bodyLg: "Polaris-Text--bodyLg",
  regular: "Polaris-Text--regular",
  medium: "Polaris-Text--medium",
  semibold: "Polaris-Text--semibold",
  bold: "Polaris-Text--bold",
  break: "Polaris-Text--break",
  numeric: "Polaris-Text--numeric",
  "line-through": "Polaris-Text__line--through"
};

// node_modules/@shopify/polaris/build/esm/components/Text/Text.js
var deprecatedVariants = {
  heading3xl: "heading2xl"
}, Text = ({
  alignment,
  as,
  breakWord,
  children,
  tone,
  fontWeight,
  id,
  numeric = !1,
  truncate = !1,
  variant,
  visuallyHidden = !1,
  textDecorationLine
}) => {
  variant && Object.prototype.hasOwnProperty.call(deprecatedVariants, variant) && console.warn(`Deprecation: <Text variant="${variant}" />. The value "${variant}" will be removed in a future major version of Polaris. Use "${deprecatedVariants[variant]}" instead.`);
  let Component4 = as || (visuallyHidden ? "span" : "p"), className = classNames(styles4.root, variant && styles4[variant], fontWeight && styles4[fontWeight], (alignment || truncate) && styles4.block, alignment && styles4[alignment], breakWord && styles4.break, tone && styles4[tone], numeric && styles4.numeric, truncate && styles4.truncate, visuallyHidden && styles4.visuallyHidden, textDecorationLine && styles4[textDecorationLine]);
  return /* @__PURE__ */ React32.createElement(Component4, Object.assign({
    className
  }, id && {
    id
  }), children);
};

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js
function Icon({
  source,
  tone,
  accessibilityLabel
}) {
  let sourceType;
  typeof source == "function" ? sourceType = "function" : source === "placeholder" ? sourceType = "placeholder" : sourceType = "external", tone && sourceType === "external" && console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.");
  let className = classNames(styles3.Icon, tone && styles3[variationName("tone", tone)]), {
    mdDown
  } = useBreakpoints(), SourceComponent = source, contentMarkup = {
    function: /* @__PURE__ */ React33.createElement(SourceComponent, Object.assign({
      className: styles3.Svg,
      focusable: "false",
      "aria-hidden": "true"
      // On Mobile we're scaling the viewBox to 18x18 to make the icons bigger
      // Also, we're setting the viewport origin to 1x1 to center the icon
      // We use this syntax so we don't override the existing viewBox value if we don't need to.
    }, mdDown ? {
      viewBox: "1 1 18 18"
    } : {})),
    placeholder: /* @__PURE__ */ React33.createElement("div", {
      className: styles3.Placeholder
    }),
    external: /* @__PURE__ */ React33.createElement("img", {
      className: styles3.Img,
      src: `data:image/svg+xml;utf8,${source}`,
      alt: "",
      "aria-hidden": "true"
    })
  };
  return /* @__PURE__ */ React33.createElement("span", {
    className
  }, accessibilityLabel && /* @__PURE__ */ React33.createElement(Text, {
    as: "span",
    visuallyHidden: !0
  }, accessibilityLabel), contentMarkup[sourceType]);
}

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js
import React34 from "react";

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.css.js
var styles5 = {
  Spinner: "Polaris-Spinner",
  sizeSmall: "Polaris-Spinner--sizeSmall",
  sizeLarge: "Polaris-Spinner--sizeLarge"
};

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js
function Spinner({
  size: size2 = "large",
  accessibilityLabel,
  hasFocusableParent
}) {
  let isAfterInitialMount = useIsAfterInitialMount(), className = classNames(styles5.Spinner, size2 && styles5[variationName("size", size2)]), spinnerSVGMarkup = size2 === "large" ? /* @__PURE__ */ React34.createElement("svg", {
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React34.createElement("path", {
    d: "M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"
  })) : /* @__PURE__ */ React34.createElement("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React34.createElement("path", {
    d: "M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
  })), spanAttributes = {
    ...!hasFocusableParent && {
      role: "status"
    }
  }, accessibilityLabelMarkup = (isAfterInitialMount || !hasFocusableParent) && /* @__PURE__ */ React34.createElement(Text, {
    as: "span",
    visuallyHidden: !0
  }, accessibilityLabel);
  return /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("span", {
    className
  }, spinnerSVGMarkup), /* @__PURE__ */ React34.createElement("span", spanAttributes, accessibilityLabelMarkup));
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js
import React36 from "react";

// node_modules/@shopify/polaris/build/esm/utilities/use-disable-interaction.js
import { useCallback as useCallback4 } from "react";
function useDisableClick(disabled, handleClick) {
  let handleClickWrapper = useCallback4((event) => {
    disabled && (event.preventDefault(), event.stopPropagation());
  }, [disabled]);
  return disabled ? handleClickWrapper : handleClick;
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js
import React35, { memo, forwardRef as forwardRef2 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/link/hooks.js
import { useContext as useContext2 } from "react";
function useLink() {
  return useContext2(LinkContext);
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js
var UnstyledLink = /* @__PURE__ */ memo(/* @__PURE__ */ forwardRef2(function(props, _ref) {
  let LinkComponent = useLink();
  if (LinkComponent)
    return /* @__PURE__ */ React35.createElement(LinkComponent, Object.assign({}, unstyled.props, props, {
      ref: _ref
    }));
  let {
    external,
    url,
    target: targetProp,
    ...rest
  } = props, target;
  external ? target = "_blank" : target = targetProp ?? void 0;
  let rel = target === "_blank" ? "noopener noreferrer" : void 0;
  return /* @__PURE__ */ React35.createElement("a", Object.assign({
    target
  }, rest, {
    href: url,
    rel
  }, unstyled.props, {
    ref: _ref
  }));
}));

// node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js
function UnstyledButton({
  id,
  children,
  className,
  url,
  external,
  target,
  download,
  submit,
  disabled,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  ...rest
}) {
  let buttonMarkup, commonProps = {
    id,
    className,
    "aria-label": accessibilityLabel
  }, interactiveProps = {
    ...commonProps,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart
  }, handleClick = useDisableClick(disabled, onClick);
  return url ? buttonMarkup = disabled ? (
    // Render an `<a>` so toggling disabled/enabled state changes only the
    // `href` attribute instead of replacing the whole element.
    /* @__PURE__ */ React36.createElement("a", commonProps, children)
  ) : /* @__PURE__ */ React36.createElement(UnstyledLink, Object.assign({}, interactiveProps, {
    url,
    external,
    target,
    download
  }, rest), children) : buttonMarkup = /* @__PURE__ */ React36.createElement("button", Object.assign({}, interactiveProps, {
    "aria-disabled": disabled,
    type: submit ? "submit" : "button",
    "aria-busy": loading ? !0 : void 0,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-describedby": ariaDescribedBy,
    "aria-checked": ariaChecked,
    "aria-pressed": pressed,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onClick: handleClick,
    tabIndex: disabled ? -1 : void 0
  }, rest), children), buttonMarkup;
}

// node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js
import { useContext as useContext3 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/errors.js
var MissingAppProviderError = class extends Error {
  constructor(message = "") {
    super(`${message && `${message} `}Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.`), this.name = "MissingAppProviderError";
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js
function useI18n() {
  let i18n = useContext3(I18nContext);
  if (!i18n)
    throw new MissingAppProviderError("No i18n was provided.");
  return i18n;
}

// node_modules/@shopify/polaris/build/esm/components/Button/Button.js
function Button({
  id,
  children,
  url,
  disabled,
  external,
  download,
  target,
  submit,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  onPointerDown,
  icon,
  disclosure,
  removeUnderline,
  size: size2 = "medium",
  textAlign = "center",
  fullWidth,
  dataPrimaryLink,
  tone,
  variant = "secondary"
}) {
  let i18n = useI18n(), isDisabled = disabled || loading, {
    mdUp
  } = useBreakpoints(), className = classNames(styles2.Button, styles2.pressable, styles2[variationName("variant", variant)], styles2[variationName("size", size2)], styles2[variationName("textAlign", textAlign)], fullWidth && styles2.fullWidth, disclosure && styles2.disclosure, icon && children && styles2.iconWithText, icon && children == null && styles2.iconOnly, isDisabled && styles2.disabled, loading && styles2.loading, pressed && !disabled && !url && styles2.pressed, removeUnderline && styles2.removeUnderline, tone && styles2[variationName("tone", tone)]), disclosureMarkup = disclosure ? /* @__PURE__ */ React37.createElement("span", {
    className: loading ? styles2.hidden : styles2.Icon
  }, /* @__PURE__ */ React37.createElement(Icon, {
    source: loading ? "placeholder" : getDisclosureIconSource(disclosure, SvgChevronUpIcon, SvgChevronDownIcon)
  })) : null, iconSource = isIconSource(icon) ? /* @__PURE__ */ React37.createElement(Icon, {
    source: loading ? "placeholder" : icon
  }) : icon, iconMarkup = iconSource ? /* @__PURE__ */ React37.createElement("span", {
    className: loading ? styles2.hidden : styles2.Icon
  }, iconSource) : null, hasPlainText = ["plain", "monochromePlain"].includes(variant), textFontWeight = "medium";
  hasPlainText ? textFontWeight = "regular" : variant === "primary" && (textFontWeight = mdUp ? "medium" : "semibold");
  let textVariant = "bodySm";
  (size2 === "large" || hasPlainText && size2 !== "micro") && (textVariant = "bodyMd");
  let childMarkup = children ? /* @__PURE__ */ React37.createElement(Text, {
    as: "span",
    variant: textVariant,
    fontWeight: textFontWeight,
    key: disabled ? "text-disabled" : "text"
  }, children) : null, spinnerSVGMarkup = loading ? /* @__PURE__ */ React37.createElement("span", {
    className: styles2.Spinner
  }, /* @__PURE__ */ React37.createElement(Spinner, {
    size: "small",
    accessibilityLabel: i18n.translate("Polaris.Button.spinnerAccessibilityLabel")
  })) : null, commonProps = {
    id,
    className,
    accessibilityLabel,
    ariaDescribedBy,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
    "data-primary-link": dataPrimaryLink
  }, linkProps = {
    url,
    external,
    download,
    target
  }, actionProps = {
    submit,
    disabled: isDisabled,
    loading,
    ariaControls,
    ariaExpanded,
    ariaChecked,
    pressed,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onPointerDown
  };
  return /* @__PURE__ */ React37.createElement(UnstyledButton, Object.assign({}, commonProps, linkProps, actionProps), spinnerSVGMarkup, iconMarkup, childMarkup, disclosureMarkup);
}
function isIconSource(x) {
  return typeof x == "string" || typeof x == "object" && x.body || typeof x == "function";
}
function getDisclosureIconSource(disclosure, upIcon, downIcon) {
  return disclosure === "select" ? SvgSelectIcon : disclosure === "up" ? upIcon : downIcon;
}

// node_modules/@shopify/polaris/build/esm/components/Button/utils.js
function buttonsFrom(actions, overrides = {}) {
  return Array.isArray(actions) ? actions.map((action, index) => buttonFrom(action, overrides, index)) : buttonFrom(actions, overrides);
}
function buttonFrom({
  content,
  onAction,
  plain,
  destructive,
  ...action
}, overrides, key) {
  let plainVariant = plain ? "plain" : void 0, destructiveVariant = destructive ? "primary" : void 0, tone = !overrides?.tone && destructive ? "critical" : overrides?.tone;
  return /* @__PURE__ */ React38.createElement(Button, Object.assign({
    key,
    onClick: onAction,
    tone,
    variant: plainVariant || destructiveVariant
  }, action, overrides), content);
}

// node_modules/@shopify/polaris/build/esm/components/Card/Card.js
import React41 from "react";

// node_modules/@shopify/polaris/build/esm/components/ShadowBevel/ShadowBevel.js
import React39 from "react";

// node_modules/@shopify/polaris/build/esm/components/ShadowBevel/ShadowBevel.css.js
var styles6 = {
  ShadowBevel: "Polaris-ShadowBevel"
};

// node_modules/@shopify/polaris/build/esm/components/ShadowBevel/ShadowBevel.js
function ShadowBevel(props) {
  let {
    as = "div",
    bevel = !0,
    borderRadius,
    boxShadow,
    children,
    zIndex: zIndex2 = "0"
  } = props, Component4 = as;
  return /* @__PURE__ */ React39.createElement(Component4, {
    className: styles6.ShadowBevel,
    style: {
      "--pc-shadow-bevel-z-index": zIndex2,
      ...getResponsiveValue("shadow-bevel", "content", mapResponsiveProp(bevel, (bevel2) => bevel2 ? '""' : "none")),
      ...getResponsiveValue("shadow-bevel", "box-shadow", mapResponsiveProp(bevel, (bevel2) => bevel2 ? `var(--p-shadow-${boxShadow})` : "none")),
      ...getResponsiveValue("shadow-bevel", "border-radius", mapResponsiveProp(bevel, (bevel2) => bevel2 ? `var(--p-border-radius-${borderRadius})` : "var(--p-border-radius-0)"))
    }
  }, children);
}
function mapResponsiveProp(responsiveProp, callback) {
  return typeof responsiveProp == "boolean" ? callback(responsiveProp) : Object.fromEntries(Object.entries(responsiveProp).map(([breakpointsAlias, value]) => [breakpointsAlias, callback(value)]));
}

// node_modules/@shopify/polaris/build/esm/components/Box/Box.js
import React40, { forwardRef as forwardRef3 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Box/Box.css.js
var styles7 = {
  listReset: "Polaris-Box--listReset",
  Box: "Polaris-Box",
  visuallyHidden: "Polaris-Box--visuallyHidden",
  printHidden: "Polaris-Box--printHidden"
};

// node_modules/@shopify/polaris/build/esm/components/Box/Box.js
var Box = /* @__PURE__ */ forwardRef3(({
  as = "div",
  background,
  borderColor,
  borderStyle,
  borderWidth,
  borderBlockStartWidth,
  borderBlockEndWidth,
  borderInlineStartWidth,
  borderInlineEndWidth,
  borderRadius,
  borderEndStartRadius,
  borderEndEndRadius,
  borderStartStartRadius,
  borderStartEndRadius,
  children,
  color: color2,
  id,
  minHeight,
  minWidth,
  maxWidth,
  overflowX,
  overflowY,
  outlineColor,
  outlineStyle,
  outlineWidth,
  padding,
  paddingBlock,
  paddingBlockStart,
  paddingBlockEnd,
  paddingInline,
  paddingInlineStart,
  paddingInlineEnd,
  role,
  shadow: shadow2,
  tabIndex,
  width: width2,
  printHidden,
  visuallyHidden,
  position,
  insetBlockStart,
  insetBlockEnd,
  insetInlineStart,
  insetInlineEnd,
  zIndex: zIndex2,
  opacity,
  ...restProps
}, ref) => {
  let borderStyleValue = borderStyle || (borderColor || borderWidth || borderBlockStartWidth || borderBlockEndWidth || borderInlineStartWidth || borderInlineEndWidth ? "solid" : void 0), outlineStyleValue = outlineStyle || (outlineColor || outlineWidth ? "solid" : void 0), style = {
    "--pc-box-color": color2 ? `var(--p-color-${color2})` : void 0,
    "--pc-box-background": background ? `var(--p-color-${background})` : void 0,
    // eslint-disable-next-line no-nested-ternary
    "--pc-box-border-color": borderColor ? borderColor === "transparent" ? "transparent" : `var(--p-color-${borderColor})` : void 0,
    "--pc-box-border-style": borderStyleValue,
    "--pc-box-border-radius": borderRadius ? `var(--p-border-radius-${borderRadius})` : void 0,
    "--pc-box-border-end-start-radius": borderEndStartRadius ? `var(--p-border-radius-${borderEndStartRadius})` : void 0,
    "--pc-box-border-end-end-radius": borderEndEndRadius ? `var(--p-border-radius-${borderEndEndRadius})` : void 0,
    "--pc-box-border-start-start-radius": borderStartStartRadius ? `var(--p-border-radius-${borderStartStartRadius})` : void 0,
    "--pc-box-border-start-end-radius": borderStartEndRadius ? `var(--p-border-radius-${borderStartEndRadius})` : void 0,
    "--pc-box-border-width": borderWidth ? `var(--p-border-width-${borderWidth})` : void 0,
    "--pc-box-border-block-start-width": borderBlockStartWidth ? `var(--p-border-width-${borderBlockStartWidth})` : void 0,
    "--pc-box-border-block-end-width": borderBlockEndWidth ? `var(--p-border-width-${borderBlockEndWidth})` : void 0,
    "--pc-box-border-inline-start-width": borderInlineStartWidth ? `var(--p-border-width-${borderInlineStartWidth})` : void 0,
    "--pc-box-border-inline-end-width": borderInlineEndWidth ? `var(--p-border-width-${borderInlineEndWidth})` : void 0,
    "--pc-box-min-height": minHeight,
    "--pc-box-min-width": minWidth,
    "--pc-box-max-width": maxWidth,
    "--pc-box-outline-color": outlineColor ? `var(--p-color-${outlineColor})` : void 0,
    "--pc-box-outline-style": outlineStyleValue,
    "--pc-box-outline-width": outlineWidth ? `var(--p-border-width-${outlineWidth})` : void 0,
    "--pc-box-overflow-x": overflowX,
    "--pc-box-overflow-y": overflowY,
    ...getResponsiveProps("box", "padding-block-start", "space", paddingBlockStart || paddingBlock || padding),
    ...getResponsiveProps("box", "padding-block-end", "space", paddingBlockEnd || paddingBlock || padding),
    ...getResponsiveProps("box", "padding-inline-start", "space", paddingInlineStart || paddingInline || padding),
    ...getResponsiveProps("box", "padding-inline-end", "space", paddingInlineEnd || paddingInline || padding),
    "--pc-box-shadow": shadow2 ? `var(--p-shadow-${shadow2})` : void 0,
    "--pc-box-width": width2,
    position,
    "--pc-box-inset-block-start": insetBlockStart ? `var(--p-space-${insetBlockStart})` : void 0,
    "--pc-box-inset-block-end": insetBlockEnd ? `var(--p-space-${insetBlockEnd})` : void 0,
    "--pc-box-inset-inline-start": insetInlineStart ? `var(--p-space-${insetInlineStart})` : void 0,
    "--pc-box-inset-inline-end": insetInlineEnd ? `var(--p-space-${insetInlineEnd})` : void 0,
    zIndex: zIndex2,
    opacity
  }, className = classNames(styles7.Box, visuallyHidden && styles7.visuallyHidden, printHidden && styles7.printHidden, as === "ul" && styles7.listReset);
  return /* @__PURE__ */ React40.createElement(as, {
    className,
    id,
    ref,
    style: sanitizeCustomProperties(style),
    role,
    tabIndex,
    ...restProps
  }, children);
});
Box.displayName = "Box";

// node_modules/@shopify/polaris/build/esm/components/Card/Card.js
var Card = ({
  children,
  background = "bg-surface",
  padding = {
    xs: "400"
  },
  roundedAbove = "sm"
}) => {
  let breakpoints2 = useBreakpoints(), defaultBorderRadius = "300", hasBorderRadius = Boolean(breakpoints2[`${roundedAbove}Up`]);
  return /* @__PURE__ */ React41.createElement(WithinContentContext.Provider, {
    value: !0
  }, /* @__PURE__ */ React41.createElement(ShadowBevel, {
    boxShadow: "100",
    borderRadius: hasBorderRadius ? defaultBorderRadius : "0",
    zIndex: "32"
  }, /* @__PURE__ */ React41.createElement(Box, {
    background,
    padding,
    overflowX: "clip",
    overflowY: "clip",
    minHeight: "100%"
  }, children)));
};

// node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js
import React42 from "react";

// node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.css.js
var styles8 = {
  InlineStack: "Polaris-InlineStack"
};

// node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js
var InlineStack = function({
  as: Element2 = "div",
  align,
  direction = "row",
  blockAlign,
  gap,
  wrap = !0,
  children
}) {
  let style = {
    "--pc-inline-stack-align": align,
    "--pc-inline-stack-block-align": blockAlign,
    "--pc-inline-stack-wrap": wrap ? "wrap" : "nowrap",
    ...getResponsiveProps("inline-stack", "gap", "space", gap),
    ...getResponsiveValue("inline-stack", "flex-direction", direction)
  };
  return /* @__PURE__ */ React42.createElement(Element2, {
    className: styles8.InlineStack,
    style
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/BlockStack/BlockStack.js
import React43 from "react";

// node_modules/@shopify/polaris/build/esm/components/BlockStack/BlockStack.css.js
var styles9 = {
  BlockStack: "Polaris-BlockStack",
  listReset: "Polaris-BlockStack--listReset",
  fieldsetReset: "Polaris-BlockStack--fieldsetReset"
};

// node_modules/@shopify/polaris/build/esm/components/BlockStack/BlockStack.js
var BlockStack = ({
  as = "div",
  children,
  align,
  inlineAlign,
  gap,
  id,
  reverseOrder = !1,
  ...restProps
}) => {
  let className = classNames(styles9.BlockStack, (as === "ul" || as === "ol") && styles9.listReset, as === "fieldset" && styles9.fieldsetReset), style = {
    "--pc-block-stack-align": align ? `${align}` : null,
    "--pc-block-stack-inline-align": inlineAlign ? `${inlineAlign}` : null,
    "--pc-block-stack-order": reverseOrder ? "column-reverse" : "column",
    ...getResponsiveProps("block-stack", "gap", "space", gap)
  };
  return /* @__PURE__ */ React43.createElement(as, {
    className,
    id,
    style: sanitizeCustomProperties(style),
    ...restProps
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/Avatar/Avatar.js
import React45, { useState as useState6, useEffect as useEffect5, useCallback as useCallback6 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Avatar/Avatar.css.js
var styles10 = {
  Avatar: "Polaris-Avatar",
  imageHasLoaded: "Polaris-Avatar--imageHasLoaded",
  Text: "Polaris-Avatar__Text",
  long: "Polaris-Avatar--long",
  hidden: "Polaris-Avatar--hidden",
  sizeXs: "Polaris-Avatar--sizeXs",
  sizeSm: "Polaris-Avatar--sizeSm",
  sizeMd: "Polaris-Avatar--sizeMd",
  sizeLg: "Polaris-Avatar--sizeLg",
  sizeXl: "Polaris-Avatar--sizeXl",
  styleOne: "Polaris-Avatar--styleOne",
  styleTwo: "Polaris-Avatar--styleTwo",
  styleThree: "Polaris-Avatar--styleThree",
  styleFour: "Polaris-Avatar--styleFour",
  styleFive: "Polaris-Avatar--styleFive",
  styleSix: "Polaris-Avatar--styleSix",
  styleSeven: "Polaris-Avatar--styleSeven",
  Image: "Polaris-Avatar__Image",
  Initials: "Polaris-Avatar__Initials",
  Svg: "Polaris-Avatar__Svg"
};

// node_modules/@shopify/polaris/build/esm/components/Image/Image.js
import React44, { useCallback as useCallback5 } from "react";
function Image({
  alt,
  sourceSet,
  source,
  crossOrigin,
  onLoad,
  className,
  ...rest
}) {
  let finalSourceSet = sourceSet ? sourceSet.map(({
    source: subSource,
    descriptor
  }) => `${subSource} ${descriptor}`).join(",") : null, handleLoad = useCallback5(() => {
    onLoad && onLoad();
  }, [onLoad]);
  return /* @__PURE__ */ React44.createElement("img", Object.assign({
    alt,
    src: source,
    crossOrigin,
    className,
    onLoad: handleLoad
  }, finalSourceSet ? {
    srcSet: finalSourceSet
  } : {}, rest));
}

// node_modules/@shopify/polaris/build/esm/components/Avatar/Avatar.js
var Status;
(function(Status2) {
  Status2.Pending = "PENDING", Status2.Loaded = "LOADED", Status2.Errored = "ERRORED";
})(Status || (Status = {}));
var STYLE_CLASSES = ["one", "two", "three", "four", "five", "six", "seven"], avatarStrokeWidth = {
  xs: "3",
  sm: "2.5",
  md: "2.5",
  lg: "2.5",
  xl: "2"
};
function xorHash(str) {
  let hash = 0;
  for (let char of str)
    hash ^= char.charCodeAt(0);
  return hash;
}
function styleClass(name) {
  return name ? STYLE_CLASSES[xorHash(name) % STYLE_CLASSES.length] : STYLE_CLASSES[0];
}
function Avatar({
  name,
  source,
  onError,
  initials,
  customer,
  size: size2 = "md",
  accessibilityLabel
}) {
  let i18n = useI18n(), isAfterInitialMount = useIsAfterInitialMount(), [status, setStatus] = useState6(Status.Pending);
  useEffect5(() => {
    setStatus(Status.Pending);
  }, [source]);
  let handleError = useCallback6(() => {
    setStatus(Status.Errored), onError && onError();
  }, [onError]), handleLoad = useCallback6(() => {
    setStatus(Status.Loaded);
  }, []), hasImage = source && status !== Status.Errored, nameString = name || initials, label;
  if (accessibilityLabel)
    label = accessibilityLabel;
  else if (name)
    label = name;
  else if (initials) {
    let splitInitials = initials.split("").join(" ");
    label = i18n.translate("Polaris.Avatar.labelWithInitials", {
      initials: splitInitials
    });
  }
  let className = classNames(styles10.Avatar, size2 && styles10[variationName("size", size2)], hasImage && status === Status.Loaded && styles10.imageHasLoaded, !customer && !hasImage && styles10[variationName("style", styleClass(nameString))]), textClassName = classNames(styles10.Text, (initials?.length || 0) > 2 && styles10.long), imageClassName = classNames(styles10.Image, status !== Status.Loaded && styles10.hidden), imageMarkUp = source && isAfterInitialMount && status !== Status.Errored ? /* @__PURE__ */ React45.createElement(Image, {
    className: imageClassName,
    source,
    alt: "",
    role: "presentation",
    onLoad: handleLoad,
    onError: handleError
  }) : null, verticalOffset = "0.35em", avatarPath = /* @__PURE__ */ React45.createElement(React45.Fragment, null, /* @__PURE__ */ React45.createElement("path", {
    fill: "none",
    d: "M25.5 13.5C25.5 16.5376 23.0376 19 20 19C16.9624 19 14.5 16.5376 14.5 13.5C14.5 10.4624 16.9624 8 20 8C23.0376 8 25.5 10.4624 25.5 13.5Z",
    stroke: "currentColor",
    strokeWidth: avatarStrokeWidth[size2]
  }), /* @__PURE__ */ React45.createElement("path", {
    fill: "none",
    d: "M10.3433 29.682L9.47 31.254C9.03481 32.0373 9.60125 33 10.4974 33H29.5026C30.3988 33 30.9652 32.0373 30.53 31.254L29.6567 29.682C27.7084 26.175 24.0119 24 20 24C15.9882 24 12.2916 26.175 10.3433 29.682Z",
    stroke: "currentColor",
    strokeWidth: avatarStrokeWidth[size2],
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), avatarBody = customer || !initials ? avatarPath : /* @__PURE__ */ React45.createElement("text", {
    className: textClassName,
    x: "50%",
    y: "50%",
    dy: verticalOffset,
    fill: "currentColor",
    textAnchor: "middle"
  }, initials), svgMarkup = hasImage ? null : /* @__PURE__ */ React45.createElement("span", {
    className: styles10.Initials
  }, /* @__PURE__ */ React45.createElement("svg", {
    className: styles10.Svg,
    viewBox: "0 0 40 40"
  }, avatarBody));
  return /* @__PURE__ */ React45.createElement("span", {
    "aria-label": label,
    role: label ? "img" : "presentation",
    className
  }, svgMarkup, imageMarkUp);
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.js
import React65, { useContext as useContext8, useRef as useRef12, useState as useState12, useMemo as useMemo5 } from "react";

// node_modules/@shopify/polaris/build/esm/components/FilterActionsProvider/FilterActionsProvider.js
import React46, { createContext as createContext12 } from "react";
var FilterActionsContext = /* @__PURE__ */ createContext12(!1);
function FilterActionsProvider({
  children,
  filterActions
}) {
  return /* @__PURE__ */ React46.createElement(FilterActionsContext.Provider, {
    value: filterActions
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Section/Section.js
import React56 from "react";

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Item/Item.js
import React55, { useRef as useRef8, useState as useState10 } from "react";

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.css.js
var styles11 = {
  Item: "Polaris-ActionList__Item",
  default: "Polaris-ActionList--default",
  active: "Polaris-ActionList--active",
  destructive: "Polaris-ActionList--destructive",
  disabled: "Polaris-ActionList--disabled",
  Prefix: "Polaris-ActionList__Prefix",
  Suffix: "Polaris-ActionList__Suffix",
  indented: "Polaris-ActionList--indented",
  menu: "Polaris-ActionList--menu",
  Text: "Polaris-ActionList__Text"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.js
import React48, { useContext as useContext4 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/within-filter-context.js
import { createContext as createContext13 } from "react";
var WithinFilterContext = /* @__PURE__ */ createContext13(!1);

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.css.js
var styles12 = {
  Badge: "Polaris-Badge",
  toneSuccess: "Polaris-Badge--toneSuccess",
  "toneSuccess-strong": "Polaris-Badge__toneSuccess--strong",
  toneInfo: "Polaris-Badge--toneInfo",
  "toneInfo-strong": "Polaris-Badge__toneInfo--strong",
  toneAttention: "Polaris-Badge--toneAttention",
  "toneAttention-strong": "Polaris-Badge__toneAttention--strong",
  toneWarning: "Polaris-Badge--toneWarning",
  "toneWarning-strong": "Polaris-Badge__toneWarning--strong",
  toneCritical: "Polaris-Badge--toneCritical",
  "toneCritical-strong": "Polaris-Badge__toneCritical--strong",
  toneNew: "Polaris-Badge--toneNew",
  toneMagic: "Polaris-Badge--toneMagic",
  "toneRead-only": "Polaris-Badge__toneRead--only",
  toneEnabled: "Polaris-Badge--toneEnabled",
  sizeLarge: "Polaris-Badge--sizeLarge",
  withinFilter: "Polaris-Badge--withinFilter",
  Icon: "Polaris-Badge__Icon",
  PipContainer: "Polaris-Badge__PipContainer"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/types.js
var ToneValue;
(function(ToneValue2) {
  ToneValue2.Info = "info", ToneValue2.Success = "success", ToneValue2.Warning = "warning", ToneValue2.Critical = "critical", ToneValue2.Attention = "attention", ToneValue2.New = "new", ToneValue2.Magic = "magic", ToneValue2.InfoStrong = "info-strong", ToneValue2.SuccessStrong = "success-strong", ToneValue2.WarningStrong = "warning-strong", ToneValue2.CriticalStrong = "critical-strong", ToneValue2.AttentionStrong = "attention-strong", ToneValue2.ReadOnly = "read-only", ToneValue2.Enabled = "enabled";
})(ToneValue || (ToneValue = {}));
var ProgressValue;
(function(ProgressValue2) {
  ProgressValue2.Incomplete = "incomplete", ProgressValue2.PartiallyComplete = "partiallyComplete", ProgressValue2.Complete = "complete";
})(ProgressValue || (ProgressValue = {}));

// node_modules/@shopify/polaris/build/esm/components/Badge/utils.js
function getDefaultAccessibilityLabel(i18n, progress, tone) {
  let progressLabel = "", toneLabel = "";
  if (!progress && !tone)
    return "";
  switch (progress) {
    case ProgressValue.Incomplete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.incomplete");
      break;
    case ProgressValue.PartiallyComplete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.partiallyComplete");
      break;
    case ProgressValue.Complete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.complete");
      break;
  }
  switch (tone) {
    case ToneValue.Info:
    case ToneValue.InfoStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.info");
      break;
    case ToneValue.Success:
    case ToneValue.SuccessStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.success");
      break;
    case ToneValue.Warning:
    case ToneValue.WarningStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.warning");
      break;
    case ToneValue.Critical:
    case ToneValue.CriticalStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.critical");
      break;
    case ToneValue.Attention:
    case ToneValue.AttentionStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.attention");
      break;
    case ToneValue.New:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.new");
      break;
    case ToneValue.ReadOnly:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.readOnly");
      break;
    case ToneValue.Enabled:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.enabled");
      break;
  }
  return !tone && progress ? progressLabel : tone && !progress ? toneLabel : i18n.translate("Polaris.Badge.progressAndTone", {
    progressLabel,
    toneLabel
  });
}

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.js
import React47 from "react";

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.css.js
var styles13 = {
  Pip: "Polaris-Badge-Pip",
  toneInfo: "Polaris-Badge-Pip--toneInfo",
  toneSuccess: "Polaris-Badge-Pip--toneSuccess",
  toneNew: "Polaris-Badge-Pip--toneNew",
  toneAttention: "Polaris-Badge-Pip--toneAttention",
  toneWarning: "Polaris-Badge-Pip--toneWarning",
  toneCritical: "Polaris-Badge-Pip--toneCritical",
  progressIncomplete: "Polaris-Badge-Pip--progressIncomplete",
  progressPartiallyComplete: "Polaris-Badge-Pip--progressPartiallyComplete",
  progressComplete: "Polaris-Badge-Pip--progressComplete"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.js
function Pip({
  tone,
  progress = "complete",
  accessibilityLabelOverride
}) {
  let i18n = useI18n(), className = classNames(styles13.Pip, tone && styles13[variationName("tone", tone)], progress && styles13[variationName("progress", progress)]), accessibilityLabel = accessibilityLabelOverride || getDefaultAccessibilityLabel(i18n, progress, tone);
  return /* @__PURE__ */ React47.createElement("span", {
    className
  }, /* @__PURE__ */ React47.createElement(Text, {
    as: "span",
    visuallyHidden: !0
  }, accessibilityLabel));
}

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.js
var DEFAULT_SIZE = "medium", progressIconMap = {
  complete: () => /* @__PURE__ */ React48.createElement("svg", {
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ React48.createElement("path", {
    d: "M6 10c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C8.605 6 9.07 6 10 6c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C14 8.605 14 9.07 14 10s0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C11.395 14 10.93 14 10 14s-1.395 0-1.777-.102a3 3 0 0 1-2.12-2.121C6 11.395 6 10.93 6 10Z"
  })),
  partiallyComplete: () => /* @__PURE__ */ React48.createElement("svg", {
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ React48.createElement("path", {
    fillRule: "evenodd",
    d: "m8.888 6.014-.017-.018-.02.02c-.253.013-.45.038-.628.086a3 3 0 0 0-2.12 2.122C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.121 2.12C8.605 14 9.07 14 10 14c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C11.395 6 10.93 6 10 6c-.475 0-.829 0-1.112.014ZM8.446 7.34a1.75 1.75 0 0 0-1.041.94l4.314 4.315c.443-.2.786-.576.941-1.042L8.446 7.34Zm4.304 2.536L10.124 7.25c.908.001 1.154.013 1.329.06a1.75 1.75 0 0 1 1.237 1.237c.047.175.059.42.06 1.329ZM8.547 12.69c.182.05.442.06 1.453.06h.106L7.25 9.894V10c0 1.01.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237Z"
  })),
  incomplete: () => /* @__PURE__ */ React48.createElement("svg", {
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ React48.createElement("path", {
    fillRule: "evenodd",
    d: "M8.547 12.69c.183.05.443.06 1.453.06s1.27-.01 1.453-.06a1.75 1.75 0 0 0 1.237-1.237c.05-.182.06-.443.06-1.453s-.01-1.27-.06-1.453a1.75 1.75 0 0 0-1.237-1.237c-.182-.05-.443-.06-1.453-.06s-1.27.01-1.453.06A1.75 1.75 0 0 0 7.31 8.547c-.05.183-.06.443-.06 1.453s.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237ZM6.102 8.224C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C8.605 14 9.07 14 10 14s1.395 0 1.777-.102a3 3 0 0 0 2.12-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C11.395 6 10.93 6 10 6c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122Z"
  }))
};
function Badge({
  children,
  tone,
  progress,
  icon,
  size: size2 = DEFAULT_SIZE,
  toneAndProgressLabelOverride
}) {
  let i18n = useI18n(), withinFilter = useContext4(WithinFilterContext), className = classNames(styles12.Badge, tone && styles12[variationName("tone", tone)], size2 && size2 !== DEFAULT_SIZE && styles12[variationName("size", size2)], withinFilter && styles12.withinFilter), accessibilityLabel = toneAndProgressLabelOverride || getDefaultAccessibilityLabel(i18n, progress, tone), accessibilityMarkup = Boolean(accessibilityLabel) && /* @__PURE__ */ React48.createElement(Text, {
    as: "span",
    visuallyHidden: !0
  }, accessibilityLabel);
  return progress && !icon && (accessibilityMarkup = /* @__PURE__ */ React48.createElement("span", {
    className: styles12.Icon
  }, /* @__PURE__ */ React48.createElement(Icon, {
    accessibilityLabel,
    source: progressIconMap[progress]
  }))), /* @__PURE__ */ React48.createElement("span", {
    className
  }, accessibilityMarkup, icon && /* @__PURE__ */ React48.createElement("span", {
    className: styles12.Icon
  }, /* @__PURE__ */ React48.createElement(Icon, {
    source: icon
  })), children && /* @__PURE__ */ React48.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: tone === "new" ? "medium" : void 0
  }, children));
}
Badge.Pip = Pip;

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.js
import React54, { useState as useState9, useId as useId3, useRef as useRef7, useCallback as useCallback9, useEffect as useEffect9 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/use-toggle.js
import { useState as useState7, useCallback as useCallback7 } from "react";
function useToggle(initialState) {
  let [value, setState] = useState7(initialState);
  return {
    value,
    toggle: useCallback7(() => setState((state) => !state), []),
    setTrue: useCallback7(() => setState(!0), []),
    setFalse: useCallback7(() => setState(!1), [])
  };
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.css.js
var styles14 = {
  TooltipContainer: "Polaris-Tooltip__TooltipContainer",
  HasUnderline: "Polaris-Tooltip__HasUnderline"
};

// node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/hooks.js
import { useContext as useContext5 } from "react";
function useEphemeralPresenceManager() {
  let ephemeralPresenceManager = useContext5(EphemeralPresenceManagerContext);
  if (!ephemeralPresenceManager)
    throw new Error("No ephemeral presence manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  return ephemeralPresenceManager;
}

// node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js
import React49, { useId, useEffect as useEffect6 } from "react";
import { createPortal } from "react-dom";

// node_modules/@shopify/polaris/build/esm/utilities/portals/hooks.js
import { useContext as useContext6 } from "react";
function usePortalsManager() {
  let portalsManager = useContext6(PortalsManagerContext);
  if (!portalsManager)
    throw new Error("No portals manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  return portalsManager;
}

// node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js
function Portal({
  children,
  idPrefix = "",
  onPortalCreated = noop2
}) {
  let themeName = useThemeName(), {
    container
  } = usePortalsManager(), uniqueId = useId(), portalId = idPrefix !== "" ? `${idPrefix}-${uniqueId}` : uniqueId;
  return useEffect6(() => {
    onPortalCreated();
  }, [onPortalCreated]), container ? /* @__PURE__ */ createPortal(/* @__PURE__ */ React49.createElement(ThemeProvider, {
    theme: isThemeNameLocal(themeName) ? themeName : themeNameDefault,
    "data-portal-id": portalId
  }, children), container) : null;
}
function noop2() {
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.js
import React53 from "react";

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.css.js
var styles15 = {
  TooltipOverlay: "Polaris-Tooltip-TooltipOverlay",
  Tail: "Polaris-Tooltip-TooltipOverlay__Tail",
  positionedAbove: "Polaris-Tooltip-TooltipOverlay--positionedAbove",
  measuring: "Polaris-Tooltip-TooltipOverlay--measuring",
  measured: "Polaris-Tooltip-TooltipOverlay--measured",
  instant: "Polaris-Tooltip-TooltipOverlay--instant",
  Content: "Polaris-Tooltip-TooltipOverlay__Content",
  default: "Polaris-Tooltip-TooltipOverlay--default",
  wide: "Polaris-Tooltip-TooltipOverlay--wide"
};

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.js
import React52, { PureComponent as PureComponent2 } from "react";

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/utilities/math.js
function calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed, topBarOffset = 0) {
  let activatorTop = activatorRect.top, activatorBottom = activatorTop + activatorRect.height, spaceAbove = activatorRect.top - topBarOffset, spaceBelow = containerRect.height - activatorRect.top - activatorRect.height, desiredHeight = overlayRect.height, verticalMargins = overlayMargins.activator + overlayMargins.container, minimumSpaceToScroll = overlayMargins.container, distanceToTopScroll = activatorRect.top - Math.max(scrollableContainerRect.top, 0), distanceToBottomScroll = containerRect.top + Math.min(containerRect.height, scrollableContainerRect.top + scrollableContainerRect.height) - (activatorRect.top + activatorRect.height), enoughSpaceFromTopScroll = distanceToTopScroll >= minimumSpaceToScroll, enoughSpaceFromBottomScroll = distanceToBottomScroll >= minimumSpaceToScroll, heightIfAbove = Math.min(spaceAbove, desiredHeight), heightIfBelow = Math.min(spaceBelow, desiredHeight), heightIfAboveCover = Math.min(spaceAbove + activatorRect.height, desiredHeight), heightIfBelowCover = Math.min(spaceBelow + activatorRect.height, desiredHeight), containerRectTop = fixed ? 0 : containerRect.top, positionIfAbove = {
    height: heightIfAbove - verticalMargins,
    top: activatorTop + containerRectTop - heightIfAbove,
    positioning: "above"
  }, positionIfBelow = {
    height: heightIfBelow - verticalMargins,
    top: activatorBottom + containerRectTop,
    positioning: "below"
  }, positionIfCoverBelow = {
    height: heightIfBelowCover - verticalMargins,
    top: activatorTop + containerRectTop,
    positioning: "cover"
  }, positionIfCoverAbove = {
    height: heightIfAboveCover - verticalMargins,
    top: activatorTop + containerRectTop - heightIfAbove + activatorRect.height + verticalMargins,
    positioning: "cover"
  };
  return preferredPosition === "above" ? (enoughSpaceFromTopScroll || distanceToTopScroll >= distanceToBottomScroll && !enoughSpaceFromBottomScroll) && (spaceAbove > desiredHeight || spaceAbove > spaceBelow) ? positionIfAbove : positionIfBelow : preferredPosition === "below" ? (enoughSpaceFromBottomScroll || distanceToBottomScroll >= distanceToTopScroll && !enoughSpaceFromTopScroll) && (spaceBelow > desiredHeight || spaceBelow > spaceAbove) ? positionIfBelow : positionIfAbove : preferredPosition === "cover" ? (enoughSpaceFromBottomScroll || distanceToBottomScroll >= distanceToTopScroll && !enoughSpaceFromTopScroll) && (spaceBelow + activatorRect.height > desiredHeight || spaceBelow > spaceAbove) ? positionIfCoverBelow : positionIfCoverAbove : enoughSpaceFromTopScroll && enoughSpaceFromBottomScroll ? spaceAbove > spaceBelow ? positionIfAbove : positionIfBelow : distanceToTopScroll > minimumSpaceToScroll ? positionIfAbove : positionIfBelow;
}
function calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment) {
  let maximum = containerRect.width - overlayRect.width;
  if (preferredAlignment === "left")
    return Math.min(maximum, Math.max(0, activatorRect.left - overlayMargins.horizontal));
  if (preferredAlignment === "right") {
    let activatorRight = containerRect.width - (activatorRect.left + activatorRect.width);
    return Math.min(maximum, Math.max(0, activatorRight - overlayMargins.horizontal));
  }
  return Math.min(maximum, Math.max(0, activatorRect.center.x - overlayRect.width / 2));
}
function rectIsOutsideOfRect(inner, outer) {
  let {
    center
  } = inner;
  return center.y < outer.top || center.y > outer.top + outer.height;
}
function intersectionWithViewport(rect, viewport = windowRect()) {
  let top = Math.max(rect.top, 0), left = Math.max(rect.left, 0), bottom = Math.min(rect.top + rect.height, viewport.height), right = Math.min(rect.left + rect.width, viewport.width);
  return new Rect({
    top,
    left,
    height: bottom - top,
    width: right - left
  });
}
function windowRect() {
  return new Rect({
    top: window.scrollY,
    left: window.scrollX,
    height: window.innerHeight,
    width: document.body.clientWidth
  });
}

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.css.js
var styles16 = {
  PositionedOverlay: "Polaris-PositionedOverlay",
  fixed: "Polaris-PositionedOverlay--fixed",
  calculating: "Polaris-PositionedOverlay--calculating",
  preventInteraction: "Polaris-PositionedOverlay--preventInteraction"
};

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js
import React51, { forwardRef as forwardRef4, useState as useState8, useRef as useRef6, useCallback as useCallback8, useImperativeHandle, useEffect as useEffect8 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/use-lazy-ref.js
import { useRef as useRef3 } from "react";
var UNIQUE_IDENTIFIER = Symbol("unique_identifier");
function useLazyRef(initialValue) {
  let lazyRef = useRef3(UNIQUE_IDENTIFIER);
  return lazyRef.current === UNIQUE_IDENTIFIER && (lazyRef.current = initialValue()), lazyRef;
}

// node_modules/@shopify/polaris/build/esm/utilities/use-component-did-mount.js
import { useRef as useRef4 } from "react";
function useComponentDidMount(callback) {
  let isAfterInitialMount = useIsAfterInitialMount(), hasInvokedLifeCycle = useRef4(!1);
  if (isAfterInitialMount && !hasInvokedLifeCycle.current)
    return hasInvokedLifeCycle.current = !0, callback();
}

// node_modules/@shopify/polaris/build/esm/components/Scrollable/context.js
import { createContext as createContext14 } from "react";
var ScrollableContext = /* @__PURE__ */ createContext14(void 0);

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.css.js
var styles17 = {
  Scrollable: "Polaris-Scrollable",
  hasTopShadow: "Polaris-Scrollable--hasTopShadow",
  hasBottomShadow: "Polaris-Scrollable--hasBottomShadow",
  horizontal: "Polaris-Scrollable--horizontal",
  vertical: "Polaris-Scrollable--vertical",
  scrollbarWidthThin: "Polaris-Scrollable--scrollbarWidthThin",
  scrollbarWidthNone: "Polaris-Scrollable--scrollbarWidthNone",
  scrollbarWidthAuto: "Polaris-Scrollable--scrollbarWidthAuto",
  scrollbarGutterStable: "Polaris-Scrollable--scrollbarGutterStable",
  "scrollbarGutterStableboth-edges": "Polaris-Scrollable__scrollbarGutterStableboth--edges"
};

// node_modules/@shopify/polaris/build/esm/components/Scrollable/components/ScrollTo/ScrollTo.js
import React50, { useRef as useRef5, useContext as useContext7, useEffect as useEffect7, useId as useId2 } from "react";
function ScrollTo() {
  let anchorNode = useRef5(null), scrollToPosition = useContext7(ScrollableContext);
  useEffect7(() => {
    !scrollToPosition || !anchorNode.current || scrollToPosition(anchorNode.current.offsetTop);
  }, [scrollToPosition]);
  let id = useId2();
  return /* @__PURE__ */ React50.createElement("a", {
    id,
    ref: anchorNode
  });
}

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js
var MAX_SCROLL_HINT_DISTANCE = 100, LOW_RES_BUFFER = 2, ScrollableComponent = /* @__PURE__ */ forwardRef4(({
  children,
  className,
  horizontal = !0,
  vertical = !0,
  shadow: shadow2,
  hint,
  focusable,
  scrollbarWidth = "thin",
  scrollbarGutter,
  onScrolledToBottom,
  ...rest
}, forwardedRef) => {
  let [topShadow, setTopShadow] = useState8(!1), [bottomShadow, setBottomShadow] = useState8(!1), stickyManager = useLazyRef(() => new StickyManager()), scrollArea = useRef6(null), scrollTo = useCallback8((scrollY, options = {}) => {
    let optionsBehavior = options.behavior || "smooth", behavior = prefersReducedMotion() ? "auto" : optionsBehavior;
    scrollArea.current?.scrollTo({
      top: scrollY,
      behavior
    });
  }, []), defaultRef = useRef6();
  useImperativeHandle(forwardedRef || defaultRef, () => ({
    scrollTo
  }));
  let handleScroll = useCallback8(() => {
    let currentScrollArea = scrollArea.current;
    currentScrollArea && requestAnimationFrame(() => {
      let {
        scrollTop,
        clientHeight,
        scrollHeight
      } = currentScrollArea, canScroll = Boolean(scrollHeight > clientHeight), isBelowTopOfScroll = Boolean(scrollTop > 0), isAtBottomOfScroll = Boolean(scrollTop + clientHeight >= scrollHeight - LOW_RES_BUFFER);
      setTopShadow(isBelowTopOfScroll), setBottomShadow(!isAtBottomOfScroll), canScroll && isAtBottomOfScroll && onScrolledToBottom && onScrolledToBottom();
    });
  }, [onScrolledToBottom]);
  useComponentDidMount(() => {
    handleScroll(), hint && requestAnimationFrame(() => performScrollHint(scrollArea.current));
  }), useEffect8(() => {
    let currentScrollArea = scrollArea.current;
    if (!currentScrollArea)
      return;
    let handleResize = debounce(handleScroll, 50, {
      trailing: !0
    });
    return stickyManager.current?.setContainer(currentScrollArea), currentScrollArea.addEventListener("scroll", handleScroll), globalThis.addEventListener("resize", handleResize), () => {
      currentScrollArea.removeEventListener("scroll", handleScroll), globalThis.removeEventListener("resize", handleResize);
    };
  }, [stickyManager, handleScroll]);
  let finalClassName = classNames(className, styles17.Scrollable, vertical && styles17.vertical, horizontal && styles17.horizontal, shadow2 && topShadow && styles17.hasTopShadow, shadow2 && bottomShadow && styles17.hasBottomShadow, scrollbarWidth && styles17[variationName("scrollbarWidth", scrollbarWidth)], scrollbarGutter && styles17[variationName("scrollbarGutter", scrollbarGutter.replace(" ", ""))]);
  return /* @__PURE__ */ React51.createElement(ScrollableContext.Provider, {
    value: scrollTo
  }, /* @__PURE__ */ React51.createElement(StickyManagerContext.Provider, {
    value: stickyManager.current
  }, /* @__PURE__ */ React51.createElement("div", Object.assign({
    className: finalClassName
  }, scrollable.props, rest, {
    ref: scrollArea,
    tabIndex: focusable ? 0 : void 0
  }), children)));
});
ScrollableComponent.displayName = "Scrollable";
function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return !1;
  }
}
function performScrollHint(elem) {
  if (!elem || prefersReducedMotion())
    return;
  let scrollableDistance = elem.scrollHeight - elem.clientHeight, distanceToPeek = Math.min(MAX_SCROLL_HINT_DISTANCE, scrollableDistance) - LOW_RES_BUFFER, goBackToTop = () => {
    requestAnimationFrame(() => {
      elem.scrollTop >= distanceToPeek && (elem.removeEventListener("scroll", goBackToTop), elem.scrollTo({
        top: 0,
        behavior: "smooth"
      }));
    });
  };
  elem.addEventListener("scroll", goBackToTop), elem.scrollTo({
    top: MAX_SCROLL_HINT_DISTANCE,
    behavior: "smooth"
  });
}
var forNode = (node) => {
  let closestElement = node.closest(scrollable.selector);
  return closestElement instanceof HTMLElement ? closestElement : document;
}, Scrollable = ScrollableComponent;
Scrollable.ScrollTo = ScrollTo;
Scrollable.forNode = forNode;

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.js
var OBSERVER_CONFIG = {
  childList: !0,
  subtree: !0,
  characterData: !0,
  attributeFilter: ["style"]
}, PositionedOverlay = class extends PureComponent2 {
  constructor(props) {
    super(props), this.state = {
      measuring: !0,
      activatorRect: getRectForNode(this.props.activator),
      right: void 0,
      left: void 0,
      top: 0,
      height: 0,
      width: null,
      positioning: "below",
      zIndex: null,
      outsideScrollableContainer: !1,
      lockPosition: !1,
      chevronOffset: 0
    }, this.overlay = null, this.scrollableContainers = [], this.overlayDetails = () => {
      let {
        measuring,
        left,
        right,
        positioning,
        height: height2,
        activatorRect,
        chevronOffset
      } = this.state;
      return {
        measuring,
        left,
        right,
        desiredHeight: height2,
        positioning,
        activatorRect,
        chevronOffset
      };
    }, this.setOverlay = (node) => {
      this.overlay = node;
    }, this.setScrollableContainers = () => {
      let containers = [], scrollableContainer = Scrollable.forNode(this.props.activator);
      if (scrollableContainer)
        for (containers.push(scrollableContainer); scrollableContainer?.parentElement; )
          scrollableContainer = Scrollable.forNode(scrollableContainer.parentElement), containers.push(scrollableContainer);
      this.scrollableContainers = containers;
    }, this.registerScrollHandlers = () => {
      this.scrollableContainers.forEach((node) => {
        node.addEventListener("scroll", this.handleMeasurement);
      });
    }, this.unregisterScrollHandlers = () => {
      this.scrollableContainers.forEach((node) => {
        node.removeEventListener("scroll", this.handleMeasurement);
      });
    }, this.handleMeasurement = () => {
      let {
        lockPosition,
        top
      } = this.state;
      this.observer.disconnect(), this.setState(({
        left,
        top: top2,
        right
      }) => ({
        left,
        right,
        top: top2,
        height: 0,
        positioning: "below",
        measuring: !0
      }), () => {
        if (this.overlay == null || this.firstScrollableContainer == null)
          return;
        let {
          activator,
          preferredPosition = "below",
          preferredAlignment = "center",
          onScrollOut,
          fullWidth,
          fixed,
          preferInputActivator = !0
        } = this.props, preferredActivator = preferInputActivator && activator.querySelector("input") || activator, activatorRect = getRectForNode(preferredActivator), currentOverlayRect = getRectForNode(this.overlay), scrollableElement = isDocument2(this.firstScrollableContainer) ? document.body : this.firstScrollableContainer, scrollableContainerRect = getRectForNode(scrollableElement), overlayRect = fullWidth || preferredPosition === "cover" ? new Rect({
          ...currentOverlayRect,
          width: activatorRect.width
        }) : currentOverlayRect;
        scrollableElement === document.body && (scrollableContainerRect.height = document.body.scrollHeight);
        let topBarOffset = 0, topBarElement = scrollableElement.querySelector(`${dataPolarisTopBar.selector}`);
        topBarElement && (topBarOffset = topBarElement.clientHeight);
        let overlayMargins = this.overlay.firstElementChild && this.overlay.firstChild instanceof HTMLElement ? getMarginsForNode(this.overlay.firstElementChild) : {
          activator: 0,
          container: 0,
          horizontal: 0
        }, containerRect = windowRect(), zIndexForLayer = getZIndexForLayerFromNode(activator), zIndex2 = zIndexForLayer == null ? zIndexForLayer : zIndexForLayer + 1, verticalPosition = calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed, topBarOffset), horizontalPosition = calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment), chevronOffset = activatorRect.center.x - horizontalPosition + overlayMargins.horizontal * 2;
        this.setState({
          measuring: !1,
          activatorRect: getRectForNode(activator),
          left: preferredAlignment !== "right" ? horizontalPosition : void 0,
          right: preferredAlignment === "right" ? horizontalPosition : void 0,
          top: lockPosition ? top : verticalPosition.top,
          lockPosition: Boolean(fixed),
          height: verticalPosition.height || 0,
          width: fullWidth || preferredPosition === "cover" ? overlayRect.width : null,
          positioning: verticalPosition.positioning,
          outsideScrollableContainer: onScrollOut != null && rectIsOutsideOfRect(activatorRect, intersectionWithViewport(scrollableContainerRect)),
          zIndex: zIndex2,
          chevronOffset
        }, () => {
          this.overlay && (this.observer.observe(this.overlay, OBSERVER_CONFIG), this.observer.observe(activator, OBSERVER_CONFIG));
        });
      });
    }, this.observer = new MutationObserver(this.handleMeasurement);
  }
  componentDidMount() {
    this.setScrollableContainers(), this.scrollableContainers.length && !this.props.fixed && this.registerScrollHandlers(), this.handleMeasurement();
  }
  componentWillUnmount() {
    this.observer.disconnect(), this.scrollableContainers.length && !this.props.fixed && this.unregisterScrollHandlers();
  }
  componentDidUpdate() {
    let {
      outsideScrollableContainer,
      top
    } = this.state, {
      onScrollOut,
      active
    } = this.props;
    active && onScrollOut != null && top !== 0 && outsideScrollableContainer && onScrollOut();
  }
  render() {
    let {
      left,
      right,
      top,
      zIndex: zIndex2,
      width: width2
    } = this.state, {
      render,
      fixed,
      preventInteraction,
      classNames: propClassNames,
      zIndexOverride
    } = this.props, style = {
      top: top == null || isNaN(top) ? void 0 : top,
      left: left == null || isNaN(left) ? void 0 : left,
      right: right == null || isNaN(right) ? void 0 : right,
      width: width2 == null || isNaN(width2) ? void 0 : width2,
      zIndex: zIndexOverride || zIndex2 || void 0
    }, className = classNames(styles16.PositionedOverlay, fixed && styles16.fixed, preventInteraction && styles16.preventInteraction, propClassNames);
    return /* @__PURE__ */ React52.createElement("div", {
      className,
      style,
      ref: this.setOverlay
    }, /* @__PURE__ */ React52.createElement(EventListener, {
      event: "resize",
      handler: this.handleMeasurement
    }), render(this.overlayDetails()));
  }
  get firstScrollableContainer() {
    return this.scrollableContainers[0] ?? null;
  }
  forceUpdatePosition() {
    requestAnimationFrame(this.handleMeasurement);
  }
};
function getMarginsForNode(node) {
  let nodeStyles = window.getComputedStyle(node);
  return {
    activator: parseFloat(nodeStyles.marginTop || "0"),
    container: parseFloat(nodeStyles.marginBottom || "0"),
    horizontal: parseFloat(nodeStyles.marginLeft || "0")
  };
}
function getZIndexForLayerFromNode(node) {
  let layerNode = node.closest(layer.selector) || document.body, zIndex2 = layerNode === document.body ? "auto" : parseInt(window.getComputedStyle(layerNode).zIndex || "0", 10);
  return zIndex2 === "auto" || isNaN(zIndex2) ? null : zIndex2;
}
function isDocument2(node) {
  return node === document;
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.js
var tailUpPaths = /* @__PURE__ */ React53.createElement(React53.Fragment, null, /* @__PURE__ */ React53.createElement("path", {
  d: "M18.829 8.171 11.862.921A3 3 0 0 0 7.619.838L0 8.171h1.442l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557h1.387Z",
  fill: "var(--p-color-tooltip-tail-up-border-experimental)"
}), /* @__PURE__ */ React53.createElement("path", {
  d: "M17.442 10.171h-16v-2l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557v2Z",
  fill: "var(--p-color-bg-surface)"
})), tailDownPaths = /* @__PURE__ */ React53.createElement(React53.Fragment, null, /* @__PURE__ */ React53.createElement("path", {
  d: "m0 2 6.967 7.25a3 3 0 0 0 4.243.083L18.829 2h-1.442l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2H0Z",
  fill: "var(--p-color-tooltip-tail-down-border-experimental)"
}), /* @__PURE__ */ React53.createElement("path", {
  d: "M1.387 0h16v2l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2V0Z",
  fill: "var(--p-color-bg-surface)"
}));
function TooltipOverlay({
  active,
  activator,
  preferredPosition = "above",
  preventInteraction,
  id,
  children,
  accessibilityLabel,
  width: width2,
  padding,
  borderRadius,
  zIndexOverride,
  instant
}) {
  let i18n = useI18n();
  return active ? /* @__PURE__ */ React53.createElement(PositionedOverlay, {
    active,
    activator,
    preferredPosition,
    preventInteraction,
    render: renderTooltip,
    zIndexOverride
  }) : null;
  function renderTooltip(overlayDetails) {
    let {
      measuring,
      desiredHeight,
      positioning,
      chevronOffset
    } = overlayDetails, containerClassName = classNames(styles15.TooltipOverlay, measuring && styles15.measuring, !measuring && styles15.measured, instant && styles15.instant, positioning === "above" && styles15.positionedAbove), contentClassName = classNames(styles15.Content, width2 && styles15[width2]), contentStyles = measuring ? void 0 : {
      minHeight: desiredHeight
    }, style = {
      "--pc-tooltip-chevron-x-pos": `${chevronOffset}px`,
      "--pc-tooltip-border-radius": borderRadius ? `var(--p-border-radius-${borderRadius})` : void 0,
      "--pc-tooltip-padding": padding && padding === "default" ? "var(--p-space-100) var(--p-space-200)" : `var(--p-space-${padding})`
    };
    return /* @__PURE__ */ React53.createElement("div", Object.assign({
      style,
      className: containerClassName
    }, layer.props), /* @__PURE__ */ React53.createElement("svg", {
      className: styles15.Tail,
      width: "19",
      height: "11",
      fill: "none"
    }, positioning === "above" ? tailDownPaths : tailUpPaths), /* @__PURE__ */ React53.createElement("div", {
      id,
      role: "tooltip",
      className: contentClassName,
      style: {
        ...contentStyles,
        ...style
      },
      "aria-label": accessibilityLabel ? i18n.translate("Polaris.TooltipOverlay.accessibilityLabel", {
        label: accessibilityLabel
      }) : void 0
    }, children));
  }
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.js
var HOVER_OUT_TIMEOUT = 150;
function Tooltip({
  children,
  content,
  dismissOnMouseOut,
  active: originalActive,
  hoverDelay,
  preferredPosition = "above",
  activatorWrapper = "span",
  accessibilityLabel,
  width: width2 = "default",
  padding = "default",
  borderRadius: borderRadiusProp,
  zIndexOverride,
  hasUnderline,
  persistOnClick,
  onOpen,
  onClose
}) {
  let borderRadius = borderRadiusProp || "200", WrapperComponent = activatorWrapper, {
    value: active,
    setTrue: setActiveTrue,
    setFalse: handleBlur
  } = useToggle(Boolean(originalActive)), {
    value: persist,
    toggle: togglePersisting
  } = useToggle(Boolean(originalActive) && Boolean(persistOnClick)), [activatorNode, setActivatorNode] = useState9(null), {
    presenceList,
    addPresence,
    removePresence
  } = useEphemeralPresenceManager(), id = useId3(), activatorContainer = useRef7(null), mouseEntered = useRef7(!1), [shouldAnimate, setShouldAnimate] = useState9(Boolean(!originalActive)), hoverDelayTimeout = useRef7(null), hoverOutTimeout = useRef7(null), handleFocus = useCallback9(() => {
    originalActive !== !1 && setActiveTrue();
  }, [originalActive, setActiveTrue]);
  useEffect9(() => {
    let accessibilityNode = (activatorContainer.current ? findFirstFocusableNode(activatorContainer.current) : null) || activatorContainer.current;
    accessibilityNode && (accessibilityNode.tabIndex = 0, accessibilityNode.setAttribute("aria-describedby", id), accessibilityNode.setAttribute("data-polaris-tooltip-activator", "true"));
  }, [id, children]), useEffect9(() => () => {
    hoverDelayTimeout.current && clearTimeout(hoverDelayTimeout.current), hoverOutTimeout.current && clearTimeout(hoverOutTimeout.current);
  }, []);
  let handleOpen = useCallback9(() => {
    setShouldAnimate(!presenceList.tooltip && !active), onOpen?.(), addPresence("tooltip");
  }, [addPresence, presenceList.tooltip, onOpen, active]), handleClose = useCallback9(() => {
    onClose?.(), setShouldAnimate(!1), hoverOutTimeout.current = setTimeout(() => {
      removePresence("tooltip");
    }, HOVER_OUT_TIMEOUT);
  }, [removePresence, onClose]), handleKeyUp = useCallback9((event) => {
    event.key === "Escape" && (handleClose?.(), handleBlur(), persistOnClick && togglePersisting());
  }, [handleBlur, handleClose, persistOnClick, togglePersisting]);
  useEffect9(() => {
    originalActive === !1 && active && (handleClose(), handleBlur());
  }, [originalActive, active, handleClose, handleBlur]);
  let portal2 = activatorNode ? /* @__PURE__ */ React54.createElement(Portal, {
    idPrefix: "tooltip"
  }, /* @__PURE__ */ React54.createElement(TooltipOverlay, {
    id,
    preferredPosition,
    activator: activatorNode,
    active,
    accessibilityLabel,
    onClose: noop3,
    preventInteraction: dismissOnMouseOut,
    width: width2,
    padding,
    borderRadius,
    zIndexOverride,
    instant: !shouldAnimate
  }, /* @__PURE__ */ React54.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, content))) : null, wrapperClassNames = classNames(activatorWrapper === "div" && styles14.TooltipContainer, hasUnderline && styles14.HasUnderline);
  return /* @__PURE__ */ React54.createElement(WrapperComponent, {
    onFocus: () => {
      handleOpen(), handleFocus();
    },
    onBlur: () => {
      handleClose(), handleBlur(), persistOnClick && togglePersisting();
    },
    onMouseLeave: handleMouseLeave,
    onMouseOver: handleMouseEnterFix,
    onMouseDown: persistOnClick ? togglePersisting : void 0,
    ref: setActivator,
    onKeyUp: handleKeyUp,
    className: wrapperClassNames
  }, children, portal2);
  function setActivator(node) {
    let activatorContainerRef = activatorContainer;
    if (node == null) {
      activatorContainerRef.current = null, setActivatorNode(null);
      return;
    }
    node.firstElementChild instanceof HTMLElement && setActivatorNode(node.firstElementChild), activatorContainerRef.current = node;
  }
  function handleMouseEnter() {
    mouseEntered.current = !0, hoverDelay && !presenceList.tooltip ? hoverDelayTimeout.current = setTimeout(() => {
      handleOpen(), handleFocus();
    }, hoverDelay) : (handleOpen(), handleFocus());
  }
  function handleMouseLeave() {
    hoverDelayTimeout.current && (clearTimeout(hoverDelayTimeout.current), hoverDelayTimeout.current = null), mouseEntered.current = !1, handleClose(), persist || handleBlur();
  }
  function handleMouseEnterFix() {
    !mouseEntered.current && handleMouseEnter();
  }
}
function noop3() {
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Item/Item.js
function Item({
  id,
  badge,
  content,
  accessibilityLabel,
  helpText,
  url,
  onAction,
  onMouseEnter,
  icon,
  image,
  prefix,
  suffix,
  disabled,
  external,
  destructive,
  ellipsis,
  truncate,
  active,
  role,
  variant = "default"
}) {
  let className = classNames(styles11.Item, disabled && styles11.disabled, destructive && styles11.destructive, active && styles11.active, variant === "default" && styles11.default, variant === "indented" && styles11.indented, variant === "menu" && styles11.menu), prefixMarkup = null;
  prefix ? prefixMarkup = /* @__PURE__ */ React55.createElement("span", {
    className: styles11.Prefix
  }, prefix) : icon ? prefixMarkup = /* @__PURE__ */ React55.createElement("span", {
    className: styles11.Prefix
  }, /* @__PURE__ */ React55.createElement(Icon, {
    source: icon
  })) : image && (prefixMarkup = /* @__PURE__ */ React55.createElement("span", {
    role: "presentation",
    className: styles11.Prefix,
    style: {
      backgroundImage: `url(${image}`
    }
  }));
  let contentText = content || "";
  truncate && content ? contentText = /* @__PURE__ */ React55.createElement(TruncateText, null, content) : ellipsis && (contentText = `${content}\u2026`);
  let contentMarkup = helpText ? /* @__PURE__ */ React55.createElement(React55.Fragment, null, /* @__PURE__ */ React55.createElement(Box, null, contentText), /* @__PURE__ */ React55.createElement(Text, {
    as: "span",
    variant: "bodySm",
    tone: active || disabled ? void 0 : "subdued"
  }, helpText)) : /* @__PURE__ */ React55.createElement(Text, {
    as: "span",
    variant: "bodyMd",
    fontWeight: active ? "semibold" : "regular"
  }, contentText), badgeMarkup = badge && /* @__PURE__ */ React55.createElement("span", {
    className: styles11.Suffix
  }, /* @__PURE__ */ React55.createElement(Badge, {
    tone: badge.tone
  }, badge.content)), suffixMarkup = suffix && /* @__PURE__ */ React55.createElement(Box, null, /* @__PURE__ */ React55.createElement("span", {
    className: styles11.Suffix
  }, suffix)), textMarkup = /* @__PURE__ */ React55.createElement("span", {
    className: styles11.Text
  }, /* @__PURE__ */ React55.createElement(Text, {
    as: "span",
    variant: "bodyMd",
    fontWeight: active ? "semibold" : "regular"
  }, contentMarkup)), contentElement = /* @__PURE__ */ React55.createElement(InlineStack, {
    blockAlign: "center",
    gap: "150",
    wrap: !1
  }, prefixMarkup, textMarkup, badgeMarkup, suffixMarkup), contentWrapper = /* @__PURE__ */ React55.createElement(Box, {
    width: "100%"
  }, contentElement), scrollMarkup = active ? /* @__PURE__ */ React55.createElement(Scrollable.ScrollTo, null) : null, control = url ? /* @__PURE__ */ React55.createElement(UnstyledLink, {
    id,
    url: disabled ? null : url,
    className,
    external,
    "aria-label": accessibilityLabel,
    onClick: disabled ? null : onAction,
    role
  }, contentWrapper) : /* @__PURE__ */ React55.createElement("button", {
    id,
    type: "button",
    className,
    disabled,
    "aria-label": accessibilityLabel,
    onClick: onAction,
    onMouseUp: handleMouseUpByBlurring,
    role,
    onMouseEnter
  }, contentWrapper);
  return /* @__PURE__ */ React55.createElement(React55.Fragment, null, scrollMarkup, control);
}
var TruncateText = ({
  children
}) => {
  let theme = useTheme(), textRef = useRef8(null), [isOverflowing, setIsOverflowing] = useState10(!1);
  return useIsomorphicLayoutEffect(() => {
    textRef.current && setIsOverflowing(textRef.current.scrollWidth > textRef.current.offsetWidth);
  }, [children]), isOverflowing ? /* @__PURE__ */ React55.createElement(Tooltip, {
    zIndexOverride: Number(theme.zIndex["z-index-11"]),
    preferredPosition: "above",
    hoverDelay: 1e3,
    content: children,
    dismissOnMouseOut: !0
  }, /* @__PURE__ */ React55.createElement(Text, {
    as: "span",
    truncate: !0
  }, children)) : /* @__PURE__ */ React55.createElement(Text, {
    as: "span",
    truncate: !0
  }, /* @__PURE__ */ React55.createElement(Box, {
    width: "100%",
    ref: textRef
  }, children));
};

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Section/Section.js
function Section({
  section,
  hasMultipleSections,
  isFirst,
  actionRole,
  onActionAnyItem
}) {
  let handleAction = (itemOnAction) => () => {
    itemOnAction && itemOnAction(), onActionAnyItem && onActionAnyItem();
  }, actionMarkup = section.items.map(({
    content,
    helpText,
    onAction,
    ...item
  }, index) => {
    let itemMarkup = /* @__PURE__ */ React56.createElement(Item, Object.assign({
      content,
      helpText,
      role: actionRole,
      onAction: handleAction(onAction)
    }, item));
    return /* @__PURE__ */ React56.createElement(Box, {
      as: "li",
      key: `${content}-${index}`,
      role: actionRole === "menuitem" ? "presentation" : void 0
    }, /* @__PURE__ */ React56.createElement(InlineStack, {
      wrap: !1
    }, itemMarkup));
  }), titleMarkup = null;
  section.title && (titleMarkup = typeof section.title == "string" ? /* @__PURE__ */ React56.createElement(Box, {
    paddingBlockStart: "300",
    paddingBlockEnd: "100",
    paddingInlineStart: "300",
    paddingInlineEnd: "300"
  }, /* @__PURE__ */ React56.createElement(Text, {
    as: "p",
    variant: "headingSm"
  }, section.title)) : /* @__PURE__ */ React56.createElement(Box, {
    padding: "200",
    paddingInlineEnd: "150"
  }, section.title));
  let sectionRole;
  switch (actionRole) {
    case "option":
      sectionRole = "presentation";
      break;
    case "menuitem":
      sectionRole = hasMultipleSections ? "presentation" : "menu";
      break;
    default:
      sectionRole = void 0;
      break;
  }
  let sectionMarkup = /* @__PURE__ */ React56.createElement(React56.Fragment, null, titleMarkup, /* @__PURE__ */ React56.createElement(Box, Object.assign({
    as: "div",
    padding: "150"
  }, hasMultipleSections && {
    paddingBlockStart: "0"
  }, {
    tabIndex: hasMultipleSections ? void 0 : -1
  }), /* @__PURE__ */ React56.createElement(BlockStack, Object.assign({
    gap: "050",
    as: "ul"
  }, sectionRole && {
    role: sectionRole
  }), actionMarkup)));
  return hasMultipleSections ? /* @__PURE__ */ React56.createElement(Box, Object.assign({
    as: "li",
    role: "presentation",
    borderColor: "border-secondary"
  }, !isFirst && {
    borderBlockStartWidth: "025"
  }, !section.title && {
    paddingBlockStart: "150"
  }), sectionMarkup) : sectionMarkup;
}

// node_modules/@shopify/polaris/build/esm/components/KeypressListener/KeypressListener.js
import { useRef as useRef9, useCallback as useCallback10, useEffect as useEffect10 } from "react";
function KeypressListener({
  keyCode,
  handler,
  keyEvent = "keyup",
  options,
  useCapture
}) {
  let tracked = useRef9({
    handler,
    keyCode
  });
  useIsomorphicLayoutEffect(() => {
    tracked.current = {
      handler,
      keyCode
    };
  }, [handler, keyCode]);
  let handleKeyEvent = useCallback10((event) => {
    let {
      handler: handler2,
      keyCode: keyCode2
    } = tracked.current;
    event.keyCode === keyCode2 && handler2(event);
  }, []);
  return useEffect10(() => (document.addEventListener(keyEvent, handleKeyEvent, useCapture || options), () => {
    document.removeEventListener(keyEvent, handleKeyEvent, useCapture || options);
  }), [keyEvent, handleKeyEvent, useCapture, options]), null;
}

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js
import React64, { useState as useState11, useId as useId4, useRef as useRef11, useCallback as useCallback12, useEffect as useEffect12, createElement } from "react";

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.css.js
var styles18 = {
  TextField: "Polaris-TextField",
  ClearButton: "Polaris-TextField__ClearButton",
  Loading: "Polaris-TextField__Loading",
  disabled: "Polaris-TextField--disabled",
  error: "Polaris-TextField--error",
  readOnly: "Polaris-TextField--readOnly",
  Input: "Polaris-TextField__Input",
  Backdrop: "Polaris-TextField__Backdrop",
  multiline: "Polaris-TextField--multiline",
  hasValue: "Polaris-TextField--hasValue",
  focus: "Polaris-TextField--focus",
  VerticalContent: "Polaris-TextField__VerticalContent",
  InputAndSuffixWrapper: "Polaris-TextField__InputAndSuffixWrapper",
  toneMagic: "Polaris-TextField--toneMagic",
  Prefix: "Polaris-TextField__Prefix",
  Suffix: "Polaris-TextField__Suffix",
  AutoSizeWrapper: "Polaris-TextField__AutoSizeWrapper",
  AutoSizeWrapperWithSuffix: "Polaris-TextField__AutoSizeWrapperWithSuffix",
  suggestion: "Polaris-TextField--suggestion",
  borderless: "Polaris-TextField--borderless",
  slim: "Polaris-TextField--slim",
  "Input-hasClearButton": "Polaris-TextField__Input--hasClearButton",
  "Input-suffixed": "Polaris-TextField__Input--suffixed",
  "Input-alignRight": "Polaris-TextField__Input--alignRight",
  "Input-alignLeft": "Polaris-TextField__Input--alignLeft",
  "Input-alignCenter": "Polaris-TextField__Input--alignCenter",
  "Input-autoSize": "Polaris-TextField__Input--autoSize",
  PrefixIcon: "Polaris-TextField__PrefixIcon",
  CharacterCount: "Polaris-TextField__CharacterCount",
  AlignFieldBottom: "Polaris-TextField__AlignFieldBottom",
  Spinner: "Polaris-TextField__Spinner",
  SpinnerIcon: "Polaris-TextField__SpinnerIcon",
  Resizer: "Polaris-TextField__Resizer",
  DummyInput: "Polaris-TextField__DummyInput",
  Segment: "Polaris-TextField__Segment",
  monospaced: "Polaris-TextField--monospaced"
};

// node_modules/@shopify/polaris/build/esm/components/TextField/components/Spinner/Spinner.js
import React57 from "react";
var Spinner2 = /* @__PURE__ */ React57.forwardRef(function({
  onChange,
  onClick,
  onMouseDown,
  onMouseUp,
  onBlur
}, ref) {
  function handleStep(step) {
    return () => onChange(step);
  }
  function handleMouseDown(onChange2) {
    return (event) => {
      event.button === 0 && onMouseDown?.(onChange2);
    };
  }
  return /* @__PURE__ */ React57.createElement("div", {
    className: styles18.Spinner,
    onClick,
    "aria-hidden": !0,
    ref
  }, /* @__PURE__ */ React57.createElement("div", {
    role: "button",
    className: styles18.Segment,
    tabIndex: -1,
    onClick: handleStep(1),
    onMouseDown: handleMouseDown(handleStep(1)),
    onMouseUp,
    onBlur
  }, /* @__PURE__ */ React57.createElement("div", {
    className: styles18.SpinnerIcon
  }, /* @__PURE__ */ React57.createElement(Icon, {
    source: SvgChevronUpIcon
  }))), /* @__PURE__ */ React57.createElement("div", {
    role: "button",
    className: styles18.Segment,
    tabIndex: -1,
    onClick: handleStep(-1),
    onMouseDown: handleMouseDown(handleStep(-1)),
    onMouseUp,
    onBlur
  }, /* @__PURE__ */ React57.createElement("div", {
    className: styles18.SpinnerIcon
  }, /* @__PURE__ */ React57.createElement(Icon, {
    source: SvgChevronDownIcon
  }))));
});

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js
import React60 from "react";

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.css.js
var styles19 = {
  hidden: "Polaris-Labelled--hidden",
  LabelWrapper: "Polaris-Labelled__LabelWrapper",
  disabled: "Polaris-Labelled--disabled",
  HelpText: "Polaris-Labelled__HelpText",
  readOnly: "Polaris-Labelled--readOnly",
  Error: "Polaris-Labelled__Error",
  Action: "Polaris-Labelled__Action"
};

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js
import React58 from "react";

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.css.js
var styles20 = {
  InlineError: "Polaris-InlineError",
  Icon: "Polaris-InlineError__Icon"
};

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js
function InlineError({
  message,
  fieldID
}) {
  return message ? /* @__PURE__ */ React58.createElement("div", {
    id: errorTextID(fieldID),
    className: styles20.InlineError
  }, /* @__PURE__ */ React58.createElement("div", {
    className: styles20.Icon
  }, /* @__PURE__ */ React58.createElement(Icon, {
    source: SvgAlertCircleIcon
  })), /* @__PURE__ */ React58.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, message)) : null;
}
function errorTextID(id) {
  return `${id}Error`;
}

// node_modules/@shopify/polaris/build/esm/components/Label/Label.js
import React59 from "react";

// node_modules/@shopify/polaris/build/esm/components/Label/Label.css.js
var styles21 = {
  Label: "Polaris-Label",
  hidden: "Polaris-Label--hidden",
  Text: "Polaris-Label__Text",
  RequiredIndicator: "Polaris-Label__RequiredIndicator"
};

// node_modules/@shopify/polaris/build/esm/components/Label/Label.js
function labelID(id) {
  return `${id}Label`;
}
function Label({
  children,
  id,
  hidden,
  requiredIndicator
}) {
  let className = classNames(styles21.Label, hidden && styles21.hidden);
  return /* @__PURE__ */ React59.createElement("div", {
    className
  }, /* @__PURE__ */ React59.createElement("label", {
    id: labelID(id),
    htmlFor: id,
    className: classNames(styles21.Text, requiredIndicator && styles21.RequiredIndicator)
  }, /* @__PURE__ */ React59.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, children)));
}

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js
function Labelled({
  id,
  label,
  error,
  action,
  helpText,
  children,
  labelHidden,
  requiredIndicator,
  disabled,
  readOnly,
  ...rest
}) {
  let className = classNames(labelHidden && styles19.hidden, disabled && styles19.disabled, readOnly && styles19.readOnly), actionMarkup = action ? /* @__PURE__ */ React60.createElement("div", {
    className: styles19.Action
  }, buttonFrom(action, {
    variant: "plain"
  })) : null, helpTextMarkup = helpText ? /* @__PURE__ */ React60.createElement("div", {
    className: styles19.HelpText,
    id: helpTextID(id),
    "aria-disabled": disabled
  }, /* @__PURE__ */ React60.createElement(Text, {
    as: "span",
    tone: "subdued",
    variant: "bodyMd",
    breakWord: !0
  }, helpText)) : null, errorMarkup = error && typeof error != "boolean" && /* @__PURE__ */ React60.createElement("div", {
    className: styles19.Error
  }, /* @__PURE__ */ React60.createElement(InlineError, {
    message: error,
    fieldID: id
  })), labelMarkup = label ? /* @__PURE__ */ React60.createElement("div", {
    className: styles19.LabelWrapper
  }, /* @__PURE__ */ React60.createElement(Label, Object.assign({
    id,
    requiredIndicator
  }, rest, {
    hidden: !1
  }), label), actionMarkup) : null;
  return /* @__PURE__ */ React60.createElement("div", {
    className
  }, labelMarkup, children, errorMarkup, helpTextMarkup);
}
function helpTextID(id) {
  return `${id}HelpText`;
}

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js
import React62 from "react";

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.css.js
var styles22 = {
  Connected: "Polaris-Connected",
  Item: "Polaris-Connected__Item",
  "Item-primary": "Polaris-Connected__Item--primary",
  "Item-focused": "Polaris-Connected__Item--focused"
};

// node_modules/@shopify/polaris/build/esm/components/Connected/components/Item/Item.js
import React61 from "react";
function Item2({
  children,
  position
}) {
  let {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(!1), className = classNames(styles22.Item, focused && styles22["Item-focused"], position === "primary" ? styles22["Item-primary"] : styles22["Item-connection"]);
  return /* @__PURE__ */ React61.createElement("div", {
    onBlur: forceFalseFocused,
    onFocus: forceTrueFocused,
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js
function Connected({
  children,
  left,
  right
}) {
  let leftConnectionMarkup = left ? /* @__PURE__ */ React62.createElement(Item2, {
    position: "left"
  }, left) : null, rightConnectionMarkup = right ? /* @__PURE__ */ React62.createElement(Item2, {
    position: "right"
  }, right) : null;
  return /* @__PURE__ */ React62.createElement("div", {
    className: styles22.Connected
  }, leftConnectionMarkup, /* @__PURE__ */ React62.createElement(Item2, {
    position: "primary"
  }, children), rightConnectionMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/TextField/components/Resizer/Resizer.js
import React63, { useRef as useRef10, useEffect as useEffect11, useCallback as useCallback11 } from "react";
function Resizer({
  contents,
  currentHeight: currentHeightProp = null,
  minimumLines,
  onHeightChange
}) {
  let contentNode = useRef10(null), minimumLinesNode = useRef10(null), animationFrame = useRef10(), currentHeight = useRef10(currentHeightProp);
  currentHeightProp !== currentHeight.current && (currentHeight.current = currentHeightProp), useEffect11(() => () => {
    animationFrame.current && cancelAnimationFrame(animationFrame.current);
  }, []);
  let minimumLinesMarkup = minimumLines ? /* @__PURE__ */ React63.createElement("div", {
    ref: minimumLinesNode,
    className: styles18.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getContentsForMinimumLines(minimumLines)
    }
  }) : null, handleHeightCheck = useCallback11(() => {
    animationFrame.current && cancelAnimationFrame(animationFrame.current), animationFrame.current = requestAnimationFrame(() => {
      if (!contentNode.current || !minimumLinesNode.current)
        return;
      let newHeight = Math.max(contentNode.current.offsetHeight, minimumLinesNode.current.offsetHeight);
      newHeight !== currentHeight.current && onHeightChange(newHeight);
    });
  }, [onHeightChange]);
  return useIsomorphicLayoutEffect(() => {
    handleHeightCheck();
  }), /* @__PURE__ */ React63.createElement("div", {
    "aria-hidden": !0,
    className: styles18.Resizer
  }, /* @__PURE__ */ React63.createElement(EventListener, {
    event: "resize",
    handler: handleHeightCheck
  }), /* @__PURE__ */ React63.createElement("div", {
    ref: contentNode,
    className: styles18.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getFinalContents(contents)
    }
  }), minimumLinesMarkup);
}
var ENTITIES_TO_REPLACE = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\n": "<br>",
  "\r": ""
}, REPLACE_REGEX2 = new RegExp(`[${Object.keys(ENTITIES_TO_REPLACE).join()}]`, "g");
function replaceEntity(entity) {
  return ENTITIES_TO_REPLACE[entity];
}
function getContentsForMinimumLines(minimumLines) {
  let content = "";
  for (let line = 0; line < minimumLines; line++)
    content += "<br>";
  return content;
}
function getFinalContents(contents) {
  return contents ? `${contents.replace(REPLACE_REGEX2, replaceEntity)}<br>` : "<br>";
}

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js
function TextField({
  prefix,
  suffix,
  verticalContent,
  placeholder,
  value = "",
  helpText,
  label,
  labelAction,
  labelHidden,
  disabled,
  clearButton,
  readOnly,
  autoFocus,
  focused,
  multiline,
  error,
  connectedRight,
  connectedLeft,
  type = "text",
  name,
  id: idProp,
  role,
  step,
  largeStep,
  autoComplete,
  max,
  maxLength,
  maxHeight,
  min,
  minLength,
  pattern,
  inputMode,
  spellCheck,
  ariaOwns,
  ariaControls,
  ariaExpanded,
  ariaActiveDescendant,
  ariaAutocomplete,
  showCharacterCount,
  align,
  requiredIndicator,
  monospaced,
  selectTextOnFocus,
  suggestion,
  variant = "inherit",
  size: size2 = "medium",
  onClearButtonClick,
  onChange,
  onSpinnerChange,
  onFocus,
  onBlur,
  tone,
  autoSize,
  loading
}) {
  let i18n = useI18n(), [height2, setHeight] = useState11(null), [focus, setFocus] = useState11(Boolean(focused)), isAfterInitial = useIsAfterInitialMount(), uniqId = useId4(), id = idProp ?? uniqId, textFieldRef = useRef11(null), inputRef = useRef11(null), textAreaRef = useRef11(null), prefixRef = useRef11(null), suffixRef = useRef11(null), loadingRef = useRef11(null), verticalContentRef = useRef11(null), buttonPressTimer = useRef11(), spinnerRef = useRef11(null), getInputRef = useCallback12(() => multiline ? textAreaRef.current : inputRef.current, [multiline]);
  useEffect12(() => {
    let input2 = getInputRef();
    !input2 || focused === void 0 || (focused ? input2.focus() : input2.blur());
  }, [focused, verticalContent, getInputRef]), useEffect12(() => {
    let input2 = inputRef.current;
    !input2 || !(type === "text" || type === "tel" || type === "search" || type === "url" || type === "password") || !suggestion || input2.setSelectionRange(value.length, suggestion.length);
  }, [focus, value, type, suggestion]);
  let normalizedValue = suggestion || value, normalizedStep = step ?? 1, normalizedMax = max ?? 1 / 0, normalizedMin = min ?? -1 / 0, className = classNames(styles18.TextField, Boolean(normalizedValue) && styles18.hasValue, disabled && styles18.disabled, readOnly && styles18.readOnly, error && styles18.error, tone && styles18[variationName("tone", tone)], multiline && styles18.multiline, focus && !disabled && styles18.focus, variant !== "inherit" && styles18[variant], size2 === "slim" && styles18.slim), inputType = type === "currency" ? "text" : type, isNumericType = type === "number" || type === "integer", iconPrefix = /* @__PURE__ */ React64.isValidElement(prefix) && prefix.type === Icon, prefixMarkup = prefix ? /* @__PURE__ */ React64.createElement("div", {
    className: classNames(styles18.Prefix, iconPrefix && styles18.PrefixIcon),
    id: `${id}-Prefix`,
    ref: prefixRef
  }, /* @__PURE__ */ React64.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, prefix)) : null, suffixMarkup = suffix ? /* @__PURE__ */ React64.createElement("div", {
    className: styles18.Suffix,
    id: `${id}-Suffix`,
    ref: suffixRef
  }, /* @__PURE__ */ React64.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, suffix)) : null, loadingMarkup = loading ? /* @__PURE__ */ React64.createElement("div", {
    className: styles18.Loading,
    id: `${id}-Loading`,
    ref: loadingRef
  }, /* @__PURE__ */ React64.createElement(Spinner, {
    size: "small"
  })) : null, characterCountMarkup = null;
  if (showCharacterCount) {
    let characterCount = normalizedValue.length, characterCountLabel = maxLength ? i18n.translate("Polaris.TextField.characterCountWithMaxLength", {
      count: characterCount,
      limit: maxLength
    }) : i18n.translate("Polaris.TextField.characterCount", {
      count: characterCount
    }), characterCountClassName = classNames(styles18.CharacterCount, multiline && styles18.AlignFieldBottom), characterCountText = maxLength ? `${characterCount}/${maxLength}` : characterCount;
    characterCountMarkup = /* @__PURE__ */ React64.createElement("div", {
      id: `${id}-CharacterCounter`,
      className: characterCountClassName,
      "aria-label": characterCountLabel,
      "aria-live": focus ? "polite" : "off",
      "aria-atomic": "true",
      onClick: handleClickChild
    }, /* @__PURE__ */ React64.createElement(Text, {
      as: "span",
      variant: "bodyMd"
    }, characterCountText));
  }
  let clearButtonMarkup = clearButton && normalizedValue !== "" ? /* @__PURE__ */ React64.createElement("button", {
    type: "button",
    className: styles18.ClearButton,
    onClick: handleClearButtonPress,
    disabled
  }, /* @__PURE__ */ React64.createElement(Text, {
    as: "span",
    visuallyHidden: !0
  }, i18n.translate("Polaris.Common.clear")), /* @__PURE__ */ React64.createElement(Icon, {
    source: SvgXCircleIcon,
    tone: "base"
  })) : null, handleNumberChange = useCallback12((steps, stepAmount = normalizedStep) => {
    if (onChange == null && onSpinnerChange == null)
      return;
    let dpl = (num) => (num.toString().split(".")[1] || []).length, numericValue = value ? parseFloat(value) : 0;
    if (isNaN(numericValue))
      return;
    let decimalPlaces = type === "integer" ? 0 : Math.max(dpl(numericValue), dpl(stepAmount)), newValue = Math.min(Number(normalizedMax), Math.max(numericValue + steps * stepAmount, Number(normalizedMin)));
    onSpinnerChange != null ? onSpinnerChange(String(newValue.toFixed(decimalPlaces)), id) : onChange?.(String(newValue.toFixed(decimalPlaces)), id);
  }, [id, normalizedMax, normalizedMin, onChange, onSpinnerChange, normalizedStep, type, value]), handleSpinnerButtonRelease = useCallback12(() => {
    clearTimeout(buttonPressTimer.current);
  }, []), handleSpinnerButtonPress = useCallback12((onChange2) => {
    let interval = 200, onChangeInterval = () => {
      interval > 50 && (interval -= 10), onChange2(0), buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
    };
    buttonPressTimer.current = window.setTimeout(onChangeInterval, interval), document.addEventListener("mouseup", handleSpinnerButtonRelease, {
      once: !0
    });
  }, [handleSpinnerButtonRelease]), spinnerMarkup = isNumericType && step !== 0 && !disabled && !readOnly ? /* @__PURE__ */ React64.createElement(Spinner2, {
    onClick: handleClickChild,
    onChange: handleNumberChange,
    onMouseDown: handleSpinnerButtonPress,
    onMouseUp: handleSpinnerButtonRelease,
    ref: spinnerRef,
    onBlur: handleOnBlur
  }) : null, style = multiline && height2 ? {
    height: height2,
    maxHeight
  } : null, handleExpandingResize = useCallback12((height3) => {
    setHeight(height3);
  }, []), resizer = multiline && isAfterInitial ? /* @__PURE__ */ React64.createElement(Resizer, {
    contents: normalizedValue || placeholder,
    currentHeight: height2,
    minimumLines: typeof multiline == "number" ? multiline : 1,
    onHeightChange: handleExpandingResize
  }) : null, describedBy = [];
  error && describedBy.push(`${id}Error`), helpText && describedBy.push(helpTextID(id)), showCharacterCount && describedBy.push(`${id}-CharacterCounter`);
  let labelledBy = [];
  prefix && labelledBy.push(`${id}-Prefix`), suffix && labelledBy.push(`${id}-Suffix`), verticalContent && labelledBy.push(`${id}-VerticalContent`), labelledBy.unshift(labelID(id));
  let inputClassName = classNames(styles18.Input, align && styles18[variationName("Input-align", align)], suffix && styles18["Input-suffixed"], clearButton && styles18["Input-hasClearButton"], monospaced && styles18.monospaced, suggestion && styles18.suggestion, autoSize && styles18["Input-autoSize"]), handleOnFocus = (event) => {
    setFocus(!0), selectTextOnFocus && !suggestion && getInputRef()?.select(), onFocus && onFocus(event);
  };
  useEventListener("wheel", handleOnWheel, inputRef);
  function handleOnWheel(event) {
    document.activeElement === event.target && isNumericType && event.stopPropagation();
  }
  let input = /* @__PURE__ */ createElement(multiline ? "textarea" : "input", {
    name,
    id,
    disabled,
    readOnly,
    role,
    autoFocus,
    value: normalizedValue,
    placeholder,
    style,
    autoComplete,
    className: inputClassName,
    ref: multiline ? textAreaRef : inputRef,
    min,
    max,
    step,
    minLength,
    maxLength,
    spellCheck,
    pattern,
    inputMode,
    type: inputType,
    rows: getRows(multiline),
    size: autoSize ? 1 : void 0,
    "aria-describedby": describedBy.length ? describedBy.join(" ") : void 0,
    "aria-labelledby": labelledBy.join(" "),
    "aria-invalid": Boolean(error),
    "aria-owns": ariaOwns,
    "aria-activedescendant": ariaActiveDescendant,
    "aria-autocomplete": ariaAutocomplete,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-required": requiredIndicator,
    ...normalizeAriaMultiline(multiline),
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    onClick: handleClickChild,
    onKeyPress: handleKeyPress,
    onKeyDown: handleKeyDown2,
    onChange: suggestion ? void 0 : handleChange,
    onInput: suggestion ? handleChange : void 0,
    // 1Password disable data attribute
    "data-1p-ignore": autoComplete === "off" || void 0,
    // LastPass disable data attribute
    "data-lpignore": autoComplete === "off" || void 0,
    // Dashlane disable data attribute
    "data-form-type": autoComplete === "off" ? "other" : void 0
  }), inputWithVerticalContentMarkup = verticalContent ? /* @__PURE__ */ React64.createElement("div", {
    className: styles18.VerticalContent,
    id: `${id}-VerticalContent`,
    ref: verticalContentRef,
    onClick: handleClickChild
  }, verticalContent, input) : null, inputMarkup = verticalContent ? inputWithVerticalContentMarkup : input, backdropMarkup = /* @__PURE__ */ React64.createElement("div", {
    className: classNames(styles18.Backdrop, connectedLeft && styles18["Backdrop-connectedLeft"], connectedRight && styles18["Backdrop-connectedRight"])
  }), inputAndSuffixMarkup = autoSize ? /* @__PURE__ */ React64.createElement("div", {
    className: styles18.InputAndSuffixWrapper
  }, /* @__PURE__ */ React64.createElement("div", {
    className: classNames(styles18.AutoSizeWrapper, suffix && styles18.AutoSizeWrapperWithSuffix),
    "data-auto-size-value": value || placeholder
  }, inputMarkup), suffixMarkup) : /* @__PURE__ */ React64.createElement(React64.Fragment, null, inputMarkup, suffixMarkup);
  return /* @__PURE__ */ React64.createElement(Labelled, {
    label,
    id,
    error,
    action: labelAction,
    labelHidden,
    helpText,
    requiredIndicator,
    disabled,
    readOnly
  }, /* @__PURE__ */ React64.createElement(Connected, {
    left: connectedLeft,
    right: connectedRight
  }, /* @__PURE__ */ React64.createElement("div", {
    className,
    onClick: handleClick,
    ref: textFieldRef
  }, prefixMarkup, inputAndSuffixMarkup, characterCountMarkup, loadingMarkup, clearButtonMarkup, spinnerMarkup, backdropMarkup, resizer)));
  function handleChange(event) {
    onChange && onChange(event.currentTarget.value, id);
  }
  function handleClick(event) {
    let {
      target
    } = event, inputRefRole = inputRef?.current?.getAttribute("role");
    if (target === inputRef.current && inputRefRole === "combobox") {
      inputRef.current?.focus(), handleOnFocus(event);
      return;
    }
    isPrefixOrSuffix(target) || isVerticalContent(target) || isInput(target) || isSpinner(target) || isLoadingSpinner(target) || focus || getInputRef()?.focus();
  }
  function handleClickChild(event) {
    !isSpinner(event.target) && !isInput(event.target) && event.stopPropagation(), !(isPrefixOrSuffix(event.target) || isVerticalContent(event.target) || isInput(event.target) || isLoadingSpinner(event.target) || focus) && (setFocus(!0), getInputRef()?.focus());
  }
  function handleClearButtonPress() {
    onClearButtonClick && onClearButtonClick(id);
  }
  function handleKeyPress(event) {
    let {
      key,
      which
    } = event, numbersSpec = /[\d.,eE+-]$/, integerSpec = /[\deE+-]$/;
    !isNumericType || which === Key.Enter || type === "number" && numbersSpec.test(key) || type === "integer" && integerSpec.test(key) || event.preventDefault();
  }
  function handleKeyDown2(event) {
    if (!isNumericType)
      return;
    let {
      key,
      which
    } = event;
    type === "integer" && (key === "ArrowUp" || which === Key.UpArrow) && (handleNumberChange(1), event.preventDefault()), type === "integer" && (key === "ArrowDown" || which === Key.DownArrow) && (handleNumberChange(-1), event.preventDefault()), (which === Key.Home || key === "Home") && min !== void 0 && (onSpinnerChange != null ? onSpinnerChange(String(min), id) : onChange?.(String(min), id)), (which === Key.End || key === "End") && max !== void 0 && (onSpinnerChange != null ? onSpinnerChange(String(max), id) : onChange?.(String(max), id)), (which === Key.PageUp || key === "PageUp") && largeStep !== void 0 && handleNumberChange(1, largeStep), (which === Key.PageDown || key === "PageDown") && largeStep !== void 0 && handleNumberChange(-1, largeStep);
  }
  function handleOnBlur(event) {
    setFocus(!1), !textFieldRef.current?.contains(event?.relatedTarget) && onBlur && onBlur(event);
  }
  function isInput(target) {
    let input2 = getInputRef();
    return target instanceof HTMLElement && input2 && (input2.contains(target) || input2.contains(document.activeElement));
  }
  function isPrefixOrSuffix(target) {
    return target instanceof Element && (prefixRef.current && prefixRef.current.contains(target) || suffixRef.current && suffixRef.current.contains(target));
  }
  function isSpinner(target) {
    return target instanceof Element && spinnerRef.current && spinnerRef.current.contains(target);
  }
  function isLoadingSpinner(target) {
    return target instanceof Element && loadingRef.current && loadingRef.current.contains(target);
  }
  function isVerticalContent(target) {
    return target instanceof Element && verticalContentRef.current && (verticalContentRef.current.contains(target) || verticalContentRef.current.contains(document.activeElement));
  }
}
function getRows(multiline) {
  if (multiline)
    return typeof multiline == "number" ? multiline : 1;
}
function normalizeAriaMultiline(multiline) {
  if (multiline)
    return Boolean(multiline) || typeof multiline == "number" && multiline > 0 ? {
      "aria-multiline": !0
    } : void 0;
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.js
var FILTER_ACTIONS_THRESHOLD = 8;
function ActionList({
  items,
  sections = [],
  actionRole,
  allowFiltering,
  onActionAnyItem
}) {
  let i18n = useI18n(), filterActions = useContext8(FilterActionsContext), finalSections = [], actionListRef = useRef12(null), [searchText, setSearchText] = useState12("");
  items ? finalSections = [{
    items
  }, ...sections] : sections && (finalSections = sections);
  let isFilterable = finalSections?.some((section) => section.items.some((item) => typeof item.content == "string")), hasMultipleSections = finalSections.length > 1, elementRole = hasMultipleSections && actionRole === "menuitem" ? "menu" : void 0, elementTabIndex = hasMultipleSections && actionRole === "menuitem" ? -1 : void 0, filteredSections = finalSections?.map((section) => ({
    ...section,
    items: section.items.filter(({
      content
    }) => typeof content == "string" ? content?.toLowerCase().includes(searchText.toLowerCase()) : content)
  })), sectionMarkup = filteredSections.map((section, index) => section.items.length > 0 ? /* @__PURE__ */ React65.createElement(Section, {
    key: typeof section.title == "string" ? section.title : index,
    section,
    hasMultipleSections,
    actionRole,
    onActionAnyItem,
    isFirst: index === 0
  }) : null), handleFocusPreviousItem = (evt) => {
    evt.preventDefault(), actionListRef.current && evt.target && actionListRef.current.contains(evt.target) && wrapFocusPreviousFocusableMenuItem(actionListRef.current, evt.target);
  }, handleFocusNextItem = (evt) => {
    evt.preventDefault(), actionListRef.current && evt.target && actionListRef.current.contains(evt.target) && wrapFocusNextFocusableMenuItem(actionListRef.current, evt.target);
  }, listeners = actionRole === "menuitem" ? /* @__PURE__ */ React65.createElement(React65.Fragment, null, /* @__PURE__ */ React65.createElement(KeypressListener, {
    keyEvent: "keydown",
    keyCode: Key.DownArrow,
    handler: handleFocusNextItem
  }), /* @__PURE__ */ React65.createElement(KeypressListener, {
    keyEvent: "keydown",
    keyCode: Key.UpArrow,
    handler: handleFocusPreviousItem
  })) : null, totalFilteredActions = useMemo5(() => filteredSections?.reduce((acc, section) => acc + section.items.length, 0) || 0, [filteredSections]), hasManyActions = (finalSections?.reduce((acc, section) => acc + section.items.length, 0) || 0) >= FILTER_ACTIONS_THRESHOLD;
  return /* @__PURE__ */ React65.createElement(React65.Fragment, null, (allowFiltering || filterActions) && hasManyActions && isFilterable && /* @__PURE__ */ React65.createElement(Box, {
    padding: "200",
    paddingBlockEnd: totalFilteredActions > 0 ? "0" : "200"
  }, /* @__PURE__ */ React65.createElement(TextField, {
    clearButton: !0,
    labelHidden: !0,
    label: i18n.translate("Polaris.ActionList.SearchField.placeholder"),
    placeholder: i18n.translate("Polaris.ActionList.SearchField.placeholder"),
    autoComplete: "off",
    value: searchText,
    onChange: (value) => setSearchText(value),
    prefix: /* @__PURE__ */ React65.createElement(Icon, {
      source: SvgSearchIcon
    }),
    onClearButtonClick: () => setSearchText("")
  })), /* @__PURE__ */ React65.createElement(Box, {
    as: hasMultipleSections ? "ul" : "div",
    ref: actionListRef,
    role: elementRole,
    tabIndex: elementTabIndex
  }, listeners, sectionMarkup));
}
ActionList.Item = Item;

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.js
import React76 from "react";

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.css.js
var styles23 = {
  ActionMenu: "Polaris-ActionMenu"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.js
import React71 from "react";

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.css.js
var styles24 = {
  RollupActivator: "Polaris-ActionMenu-RollupActions__RollupActivator"
};

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js
import React70, { forwardRef as forwardRef5, useState as useState13, useRef as useRef13, useId as useId5, useImperativeHandle as useImperativeHandle2, useCallback as useCallback13, useEffect as useEffect13, Children as Children3 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Popover/set-activator-attributes.js
function setActivatorAttributes(activator, {
  id,
  active = !1,
  ariaHaspopup,
  activatorDisabled = !1
}) {
  activatorDisabled || (activator.tabIndex = activator.tabIndex || 0), activator.setAttribute("aria-controls", id), activator.setAttribute("aria-owns", id), activator.setAttribute("aria-expanded", String(active)), activator.setAttribute("data-state", active ? "open" : "closed"), ariaHaspopup != null && activator.setAttribute("aria-haspopup", String(ariaHaspopup));
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/PopoverOverlay/PopoverOverlay.js
import React69, { PureComponent as PureComponent3, createRef, Children as Children2 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/components.js
import React66, { isValidElement, Children } from "react";
function wrapWithComponent(element, Component4, props) {
  return element == null ? null : isElementOfType(element, Component4) ? element : /* @__PURE__ */ React66.createElement(Component4, props, element);
}
var isComponent = hotReloadComponentCheck;
function isElementOfType(element, Component4) {
  if (element == null || !/* @__PURE__ */ isValidElement(element) || typeof element.type == "string")
    return !1;
  let {
    type: defaultType
  } = element, type = element.props?.__type__ || defaultType;
  return (Array.isArray(Component4) ? Component4 : [Component4]).some((AComponent) => typeof type != "string" && isComponent(AComponent, type));
}
function elementChildren(children, predicate = () => !0) {
  return Children.toArray(children).filter((child) => /* @__PURE__ */ isValidElement(child) && predicate(child));
}
function ConditionalWrapper({
  condition,
  wrapper,
  children
}) {
  return condition ? wrapper(children) : children;
}
function ConditionalRender({
  condition,
  children
}) {
  return condition ? children : null;
}
function hotReloadComponentCheck(AComponent, AnotherComponent) {
  let componentName = AComponent.name, anotherComponentName = AnotherComponent.displayName;
  return AComponent === AnotherComponent || Boolean(componentName) && componentName === anotherComponentName;
}

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.css.js
var styles25 = {
  Popover: "Polaris-Popover",
  PopoverOverlay: "Polaris-Popover__PopoverOverlay",
  "PopoverOverlay-noAnimation": "Polaris-Popover__PopoverOverlay--noAnimation",
  "PopoverOverlay-entering": "Polaris-Popover__PopoverOverlay--entering",
  "PopoverOverlay-open": "Polaris-Popover__PopoverOverlay--open",
  measuring: "Polaris-Popover--measuring",
  "PopoverOverlay-exiting": "Polaris-Popover__PopoverOverlay--exiting",
  fullWidth: "Polaris-Popover--fullWidth",
  Content: "Polaris-Popover__Content",
  positionedAbove: "Polaris-Popover--positionedAbove",
  positionedCover: "Polaris-Popover--positionedCover",
  ContentContainer: "Polaris-Popover__ContentContainer",
  "Content-fullHeight": "Polaris-Popover__Content--fullHeight",
  "Content-fluidContent": "Polaris-Popover__Content--fluidContent",
  Pane: "Polaris-Popover__Pane",
  "Pane-fixed": "Polaris-Popover__Pane--fixed",
  "Pane-subdued": "Polaris-Popover__Pane--subdued",
  "Pane-captureOverscroll": "Polaris-Popover__Pane--captureOverscroll",
  Section: "Polaris-Popover__Section",
  FocusTracker: "Polaris-Popover__FocusTracker",
  "PopoverOverlay-hideOnPrint": "Polaris-Popover__PopoverOverlay--hideOnPrint"
};

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Pane/Pane.js
import React68 from "react";

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Section/Section.js
import React67 from "react";
function Section2({
  children
}) {
  return /* @__PURE__ */ React67.createElement("div", {
    className: styles25.Section
  }, /* @__PURE__ */ React67.createElement(Box, {
    paddingInlineStart: "300",
    paddingInlineEnd: "300",
    paddingBlockStart: "200",
    paddingBlockEnd: "150"
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Pane/Pane.js
function Pane({
  captureOverscroll = !1,
  fixed,
  sectioned,
  children,
  height: height2,
  subdued,
  onScrolledToBottom
}) {
  let className = classNames(styles25.Pane, fixed && styles25["Pane-fixed"], subdued && styles25["Pane-subdued"], captureOverscroll && styles25["Pane-captureOverscroll"]), content = sectioned ? wrapWithComponent(children, Section2, {}) : children, style = height2 ? {
    height: height2,
    maxHeight: height2,
    minHeight: height2
  } : void 0;
  return fixed ? /* @__PURE__ */ React68.createElement("div", {
    style,
    className
  }, content) : /* @__PURE__ */ React68.createElement(Scrollable, {
    shadow: !0,
    className,
    style,
    onScrolledToBottom,
    scrollbarWidth: "thin"
  }, content);
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/PopoverOverlay/PopoverOverlay.js
var PopoverCloseSource;
(function(PopoverCloseSource2) {
  PopoverCloseSource2[PopoverCloseSource2.Click = 0] = "Click", PopoverCloseSource2[PopoverCloseSource2.EscapeKeypress = 1] = "EscapeKeypress", PopoverCloseSource2[PopoverCloseSource2.FocusOut = 2] = "FocusOut", PopoverCloseSource2[PopoverCloseSource2.ScrollOut = 3] = "ScrollOut";
})(PopoverCloseSource || (PopoverCloseSource = {}));
var TransitionStatus;
(function(TransitionStatus3) {
  TransitionStatus3.Entering = "entering", TransitionStatus3.Entered = "entered", TransitionStatus3.Exiting = "exiting", TransitionStatus3.Exited = "exited";
})(TransitionStatus || (TransitionStatus = {}));
var PopoverOverlay = class extends PureComponent3 {
  constructor(props) {
    super(props), this.state = {
      transitionStatus: this.props.active ? TransitionStatus.Entering : TransitionStatus.Exited
    }, this.contentNode = /* @__PURE__ */ createRef(), this.renderPopover = (overlayDetails) => {
      let {
        measuring,
        desiredHeight,
        positioning
      } = overlayDetails, {
        id,
        children,
        sectioned,
        fullWidth,
        fullHeight,
        fluidContent,
        hideOnPrint,
        autofocusTarget,
        captureOverscroll
      } = this.props, isCovering = positioning === "cover", className = classNames(styles25.Popover, measuring && styles25.measuring, (fullWidth || isCovering) && styles25.fullWidth, hideOnPrint && styles25["PopoverOverlay-hideOnPrint"], positioning && styles25[variationName("positioned", positioning)]), contentStyles = measuring ? void 0 : {
        height: desiredHeight
      }, contentClassNames = classNames(styles25.Content, fullHeight && styles25["Content-fullHeight"], fluidContent && styles25["Content-fluidContent"]);
      return /* @__PURE__ */ React69.createElement("div", Object.assign({
        className
      }, overlay.props), /* @__PURE__ */ React69.createElement(EventListener, {
        event: "click",
        handler: this.handleClick
      }), /* @__PURE__ */ React69.createElement(EventListener, {
        event: "touchstart",
        handler: this.handleClick
      }), /* @__PURE__ */ React69.createElement(KeypressListener, {
        keyCode: Key.Escape,
        handler: this.handleEscape
      }), /* @__PURE__ */ React69.createElement("div", {
        className: styles25.FocusTracker,
        tabIndex: 0,
        onFocus: this.handleFocusFirstItem
      }), /* @__PURE__ */ React69.createElement("div", {
        className: styles25.ContentContainer
      }, /* @__PURE__ */ React69.createElement("div", {
        id,
        tabIndex: autofocusTarget === "none" ? void 0 : -1,
        className: contentClassNames,
        style: contentStyles,
        ref: this.contentNode
      }, renderPopoverContent(children, {
        captureOverscroll,
        sectioned
      }))), /* @__PURE__ */ React69.createElement("div", {
        className: styles25.FocusTracker,
        tabIndex: 0,
        onFocus: this.handleFocusLastItem
      }));
    }, this.handleClick = (event) => {
      let target = event.target, {
        contentNode,
        props: {
          activator,
          onClose,
          preventCloseOnChildOverlayClick
        }
      } = this, composedPath = event.composedPath(), wasDescendant = preventCloseOnChildOverlayClick ? wasPolarisPortalDescendant(composedPath, this.context.container) : wasContentNodeDescendant(composedPath, contentNode), isActivatorDescendant = nodeContainsDescendant(activator, target);
      wasDescendant || isActivatorDescendant || this.state.transitionStatus !== TransitionStatus.Entered || onClose(PopoverCloseSource.Click);
    }, this.handleScrollOut = () => {
      this.props.onClose(PopoverCloseSource.ScrollOut);
    }, this.handleEscape = (event) => {
      let target = event.target, {
        contentNode,
        props: {
          activator
        }
      } = this, composedPath = event.composedPath(), wasDescendant = wasContentNodeDescendant(composedPath, contentNode), isActivatorDescendant = nodeContainsDescendant(activator, target);
      (wasDescendant || isActivatorDescendant) && this.props.onClose(PopoverCloseSource.EscapeKeypress);
    }, this.handleFocusFirstItem = () => {
      this.props.onClose(PopoverCloseSource.FocusOut);
    }, this.handleFocusLastItem = () => {
      this.props.onClose(PopoverCloseSource.FocusOut);
    }, this.overlayRef = /* @__PURE__ */ createRef();
  }
  forceUpdatePosition() {
    this.overlayRef.current?.forceUpdatePosition();
  }
  changeTransitionStatus(transitionStatus, cb) {
    this.setState({
      transitionStatus
    }, cb), this.contentNode.current && this.contentNode.current.getBoundingClientRect();
  }
  componentDidMount() {
    this.props.active && (this.focusContent(), this.changeTransitionStatus(TransitionStatus.Entered));
  }
  componentDidUpdate(oldProps) {
    this.props.active && !oldProps.active && (this.focusContent(), this.changeTransitionStatus(TransitionStatus.Entering, () => {
      this.clearTransitionTimeout(), this.enteringTimer = window.setTimeout(() => {
        this.setState({
          transitionStatus: TransitionStatus.Entered
        });
      }, parseInt(themeDefault.motion["motion-duration-100"], 10));
    })), !this.props.active && oldProps.active && (this.clearTransitionTimeout(), this.setState({
      transitionStatus: TransitionStatus.Exited
    }));
  }
  componentWillUnmount() {
    this.clearTransitionTimeout();
  }
  render() {
    let {
      active,
      activator,
      fullWidth,
      preferredPosition = "below",
      preferredAlignment = "center",
      preferInputActivator = !0,
      fixed,
      zIndexOverride
    } = this.props, {
      transitionStatus
    } = this.state;
    if (transitionStatus === TransitionStatus.Exited && !active)
      return null;
    let className = classNames(styles25.PopoverOverlay, transitionStatus === TransitionStatus.Entering && styles25["PopoverOverlay-entering"], transitionStatus === TransitionStatus.Entered && styles25["PopoverOverlay-open"], transitionStatus === TransitionStatus.Exiting && styles25["PopoverOverlay-exiting"], preferredPosition === "cover" && styles25["PopoverOverlay-noAnimation"]);
    return /* @__PURE__ */ React69.createElement(PositionedOverlay, {
      ref: this.overlayRef,
      fullWidth,
      active,
      activator,
      preferInputActivator,
      preferredPosition,
      preferredAlignment,
      render: this.renderPopover.bind(this),
      fixed,
      onScrollOut: this.handleScrollOut,
      classNames: className,
      zIndexOverride
    });
  }
  clearTransitionTimeout() {
    this.enteringTimer && window.clearTimeout(this.enteringTimer);
  }
  focusContent() {
    let {
      autofocusTarget = "container"
    } = this.props;
    autofocusTarget === "none" || this.contentNode == null || requestAnimationFrame(() => {
      if (this.contentNode.current == null)
        return;
      let focusableChild = findFirstKeyboardFocusableNode(this.contentNode.current);
      focusableChild && autofocusTarget === "first-node" ? focusableChild.focus({
        preventScroll: !0
      }) : this.contentNode.current.focus({
        preventScroll: !0
      });
    });
  }
  // eslint-disable-next-line @shopify/react-no-multiple-render-methods
};
PopoverOverlay.contextType = PortalsManagerContext;
function renderPopoverContent(children, props) {
  let childrenArray = Children2.toArray(children);
  return isElementOfType(childrenArray[0], Pane) ? childrenArray : wrapWithComponent(childrenArray, Pane, props);
}
function nodeContainsDescendant(rootNode, descendant) {
  if (rootNode === descendant)
    return !0;
  let parent = descendant.parentNode;
  for (; parent != null; ) {
    if (parent === rootNode)
      return !0;
    parent = parent.parentNode;
  }
  return !1;
}
function wasContentNodeDescendant(composedPath, contentNode) {
  return contentNode.current != null && composedPath.includes(contentNode.current);
}
function wasPolarisPortalDescendant(composedPath, portalsContainerElement) {
  return composedPath.some((eventTarget) => eventTarget instanceof Node && portalsContainerElement?.contains(eventTarget));
}

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js
var PopoverComponent = /* @__PURE__ */ forwardRef5(function({
  activatorWrapper = "div",
  children,
  onClose,
  activator,
  preventFocusOnClose,
  active,
  fixed,
  ariaHaspopup,
  preferInputActivator = !0,
  zIndexOverride,
  ...rest
}, ref) {
  let [activatorNode, setActivatorNode] = useState13(), overlayRef = useRef13(null), activatorContainer = useRef13(null), WrapperComponent = activatorWrapper, id = useId5();
  function forceUpdatePosition() {
    overlayRef.current?.forceUpdatePosition();
  }
  useImperativeHandle2(ref, () => ({
    forceUpdatePosition
  }));
  let setAccessibilityAttributes = useCallback13(() => {
    if (activatorContainer.current == null)
      return;
    let focusableActivator = findFirstFocusableNodeIncludingDisabled(activatorContainer.current) || activatorContainer.current, activatorDisabled = "disabled" in focusableActivator && Boolean(focusableActivator.disabled);
    setActivatorAttributes(focusableActivator, {
      id,
      active,
      ariaHaspopup,
      activatorDisabled
    });
  }, [id, active, ariaHaspopup]), handleClose = (source) => {
    if (onClose(source), !(activatorContainer.current == null || preventFocusOnClose)) {
      if (source === PopoverCloseSource.FocusOut && activatorNode) {
        let focusableActivator = findFirstFocusableNodeIncludingDisabled(activatorNode) || findFirstFocusableNodeIncludingDisabled(activatorContainer.current) || activatorContainer.current;
        focusNextFocusableNode(focusableActivator, isInPortal) || focusableActivator.focus();
      } else if (source === PopoverCloseSource.EscapeKeypress && activatorNode) {
        let focusableActivator = findFirstFocusableNodeIncludingDisabled(activatorNode) || findFirstFocusableNodeIncludingDisabled(activatorContainer.current) || activatorContainer.current;
        focusableActivator ? focusableActivator.focus() : focusNextFocusableNode(focusableActivator, isInPortal);
      }
    }
  };
  useEffect13(() => {
    (!activatorNode && activatorContainer.current || activatorNode && activatorContainer.current && !activatorContainer.current.contains(activatorNode)) && setActivatorNode(activatorContainer.current.firstElementChild), setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]), useEffect13(() => {
    activatorNode && activatorContainer.current && setActivatorNode(activatorContainer.current.firstElementChild), setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]);
  let portal2 = activatorNode ? /* @__PURE__ */ React70.createElement(Portal, {
    idPrefix: "popover"
  }, /* @__PURE__ */ React70.createElement(PopoverOverlay, Object.assign({
    ref: overlayRef,
    id,
    activator: activatorNode,
    preferInputActivator,
    onClose: handleClose,
    active,
    fixed,
    zIndexOverride
  }, rest), children)) : null;
  return /* @__PURE__ */ React70.createElement(WrapperComponent, {
    ref: activatorContainer
  }, Children3.only(activator), portal2);
});
function isInPortal(element) {
  let parentElement = element.parentElement;
  for (; parentElement; ) {
    if (parentElement.matches(portal.selector))
      return !1;
    parentElement = parentElement.parentElement;
  }
  return !0;
}
var Popover2 = Object.assign(PopoverComponent, {
  Pane,
  Section: Section2
});

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.js
function RollupActions({
  accessibilityLabel,
  items = [],
  sections = []
}) {
  let i18n = useI18n(), {
    value: rollupOpen,
    toggle: toggleRollupOpen
  } = useToggle(!1);
  if (items.length === 0 && sections.length === 0)
    return null;
  let activatorMarkup = /* @__PURE__ */ React71.createElement("div", {
    className: styles24.RollupActivator
  }, /* @__PURE__ */ React71.createElement(Button, {
    icon: SvgMenuHorizontalIcon,
    accessibilityLabel: accessibilityLabel || i18n.translate("Polaris.ActionMenu.RollupActions.rollupButton"),
    onClick: toggleRollupOpen
  }));
  return /* @__PURE__ */ React71.createElement(Popover2, {
    active: rollupOpen,
    activator: activatorMarkup,
    preferredAlignment: "right",
    onClose: toggleRollupOpen,
    hideOnPrint: !0
  }, /* @__PURE__ */ React71.createElement(ActionList, {
    items,
    sections,
    onActionAnyItem: toggleRollupOpen
  }));
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.js
import React75, { useRef as useRef15, useState as useState14, useReducer, useCallback as useCallback16, useEffect as useEffect15, useMemo as useMemo6 } from "react";

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.css.js
var styles26 = {
  ActionsLayoutOuter: "Polaris-ActionMenu-Actions__ActionsLayoutOuter",
  ActionsLayout: "Polaris-ActionMenu-Actions__ActionsLayout",
  "ActionsLayout--measuring": "Polaris-ActionMenu-Actions--actionsLayoutMeasuring",
  ActionsLayoutMeasurer: "Polaris-ActionMenu-Actions__ActionsLayoutMeasurer"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/utilities.js
function getVisibleAndHiddenActionsIndices(actions = [], groups = [], disclosureWidth, actionsWidths, containerWidth) {
  let sumTabWidths = actionsWidths.reduce((sum, width2) => sum + width2, 0), arrayOfActionsIndices = actions.map((_, index) => index), arrayOfGroupsIndices = groups.map((_, index) => index), visibleActions = [], hiddenActions = [], visibleGroups = [], hiddenGroups = [];
  if (containerWidth > sumTabWidths)
    visibleActions.push(...arrayOfActionsIndices), visibleGroups.push(...arrayOfGroupsIndices);
  else {
    let accumulatedWidth = 0;
    arrayOfActionsIndices.forEach((currentActionsIndex) => {
      let currentActionsWidth = actionsWidths[currentActionsIndex];
      if (accumulatedWidth + currentActionsWidth >= containerWidth - disclosureWidth) {
        hiddenActions.push(currentActionsIndex);
        return;
      }
      visibleActions.push(currentActionsIndex), accumulatedWidth += currentActionsWidth;
    }), arrayOfGroupsIndices.forEach((currentGroupsIndex) => {
      let currentActionsWidth = actionsWidths[currentGroupsIndex + actions.length];
      if (accumulatedWidth + currentActionsWidth >= containerWidth - disclosureWidth) {
        hiddenGroups.push(currentGroupsIndex);
        return;
      }
      visibleGroups.push(currentGroupsIndex), accumulatedWidth += currentActionsWidth;
    });
  }
  return {
    visibleActions,
    hiddenActions,
    visibleGroups,
    hiddenGroups
  };
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.js
import React73, { useCallback as useCallback14 } from "react";

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.css.js
var styles27 = {
  Details: "Polaris-ActionMenu-MenuGroup__Details"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.js
import React72 from "react";

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.css.js
var styles28 = {
  SecondaryAction: "Polaris-ActionMenu-SecondaryAction",
  critical: "Polaris-ActionMenu-SecondaryAction--critical"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.js
function SecondaryAction({
  children,
  tone,
  helpText,
  onAction,
  destructive,
  ...rest
}) {
  let buttonMarkup = /* @__PURE__ */ React72.createElement(Button, Object.assign({
    onClick: onAction,
    tone: destructive ? "critical" : void 0
  }, rest), children), actionMarkup = helpText ? /* @__PURE__ */ React72.createElement(Tooltip, {
    preferredPosition: "below",
    content: helpText
  }, buttonMarkup) : buttonMarkup;
  return /* @__PURE__ */ React72.createElement("div", {
    className: classNames(styles28.SecondaryAction, tone === "critical" && styles28.critical)
  }, actionMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.js
function MenuGroup({
  accessibilityLabel,
  active,
  actions,
  details,
  title,
  icon,
  disabled,
  onClick,
  onClose,
  onOpen,
  sections
}) {
  let handleClose = useCallback14(() => {
    onClose(title);
  }, [onClose, title]), handleOpen = useCallback14(() => {
    onOpen(title);
  }, [onOpen, title]), handleClick = useCallback14(() => {
    onClick ? onClick(handleOpen) : handleOpen();
  }, [onClick, handleOpen]), popoverActivator = /* @__PURE__ */ React73.createElement(SecondaryAction, {
    disclosure: !0,
    disabled,
    icon,
    accessibilityLabel,
    onClick: handleClick
  }, title);
  return /* @__PURE__ */ React73.createElement(Popover2, {
    active: Boolean(active),
    activator: popoverActivator,
    preferredAlignment: "left",
    onClose: handleClose,
    hideOnPrint: !0
  }, /* @__PURE__ */ React73.createElement(ActionList, {
    items: actions,
    sections,
    onActionAnyItem: handleClose
  }), details && /* @__PURE__ */ React73.createElement("div", {
    className: styles27.Details
  }, details));
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/components/ActionsMeasurer/ActionsMeasurer.js
import React74, { useRef as useRef14, useCallback as useCallback15, useEffect as useEffect14 } from "react";
var ACTION_SPACING = 8;
function ActionsMeasurer({
  actions = [],
  groups = [],
  handleMeasurement: handleMeasurementProp
}) {
  let i18n = useI18n(), containerNode = useRef14(null), defaultRollupGroup = {
    title: i18n.translate("Polaris.ActionMenu.Actions.moreActions"),
    actions: []
  }, activator = /* @__PURE__ */ React74.createElement(SecondaryAction, {
    disclosure: !0
  }, defaultRollupGroup.title), handleMeasurement = useCallback15(() => {
    if (!containerNode.current)
      return;
    let containerWidth = containerNode.current.offsetWidth, hiddenActionNodes = containerNode.current.children, hiddenActionsWidths = Array.from(hiddenActionNodes).map((node) => Math.ceil(node.getBoundingClientRect().width) + ACTION_SPACING), disclosureWidth = hiddenActionsWidths.pop() || 0;
    handleMeasurementProp({
      containerWidth,
      disclosureWidth,
      hiddenActionsWidths
    });
  }, [handleMeasurementProp]);
  useEffect14(() => {
    handleMeasurement();
  }, [handleMeasurement, actions, groups]);
  let actionsMarkup = actions.map((action) => {
    let {
      content,
      onAction,
      ...rest
    } = action;
    return /* @__PURE__ */ React74.createElement(SecondaryAction, Object.assign({
      key: content,
      onClick: onAction
    }, rest), content);
  }), groupsMarkup = groups.map((group) => {
    let {
      title,
      icon
    } = group;
    return /* @__PURE__ */ React74.createElement(SecondaryAction, {
      key: title,
      disclosure: !0,
      icon
    }, title);
  });
  return useEventListener("resize", handleMeasurement), /* @__PURE__ */ React74.createElement("div", {
    className: styles26.ActionsLayoutMeasurer,
    ref: containerNode
  }, actionsMarkup, groupsMarkup, activator);
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.js
function Actions({
  actions,
  groups,
  onActionRollup
}) {
  let i18n = useI18n(), rollupActiveRef = useRef15(null), [activeMenuGroup, setActiveMenuGroup] = useState14(void 0), [state, setState] = useReducer((data, partialData) => ({
    ...data,
    ...partialData
  }), {
    disclosureWidth: 0,
    containerWidth: 1 / 0,
    actionsWidths: [],
    visibleActions: [],
    hiddenActions: [],
    visibleGroups: [],
    hiddenGroups: [],
    hasMeasured: !1
  }), {
    visibleActions,
    hiddenActions,
    visibleGroups,
    hiddenGroups,
    containerWidth,
    disclosureWidth,
    actionsWidths,
    hasMeasured
  } = state, defaultRollupGroup = {
    title: i18n.translate("Polaris.ActionMenu.Actions.moreActions"),
    actions: []
  }, handleMenuGroupToggle = useCallback16((group) => setActiveMenuGroup(activeMenuGroup ? void 0 : group), [activeMenuGroup]), handleMenuGroupClose = useCallback16(() => setActiveMenuGroup(void 0), []);
  useEffect15(() => {
    if (containerWidth === 0)
      return;
    let {
      visibleActions: visibleActions2,
      visibleGroups: visibleGroups2,
      hiddenActions: hiddenActions2,
      hiddenGroups: hiddenGroups2
    } = getVisibleAndHiddenActionsIndices(actions, groups, disclosureWidth, actionsWidths, containerWidth);
    setState({
      visibleActions: visibleActions2,
      visibleGroups: visibleGroups2,
      hiddenActions: hiddenActions2,
      hiddenGroups: hiddenGroups2,
      hasMeasured: containerWidth !== 1 / 0
    });
  }, [containerWidth, disclosureWidth, actions, groups, actionsWidths, setState]);
  let actionsOrDefault = useMemo6(() => actions ?? [], [actions]), groupsOrDefault = useMemo6(() => groups ?? [], [groups]), actionsMarkup = actionsOrDefault.filter((_, index) => !!visibleActions.includes(index)).map((action) => {
    let {
      content,
      onAction,
      ...rest
    } = action;
    return /* @__PURE__ */ React75.createElement(SecondaryAction, Object.assign({
      key: content,
      onClick: onAction
    }, rest), content);
  }), filteredGroups = (hiddenGroups.length > 0 || hiddenActions.length > 0 ? [...groupsOrDefault, defaultRollupGroup] : [...groupsOrDefault]).filter((group, index) => {
    let hasNoGroupsProp = groupsOrDefault.length === 0, isVisibleGroup = visibleGroups.includes(index), isDefaultGroup = group === defaultRollupGroup;
    return hasNoGroupsProp ? hiddenActions.length > 0 : isDefaultGroup ? !0 : isVisibleGroup;
  }), hiddenActionObjects = hiddenActions.map((index) => actionsOrDefault[index]).filter((action) => action != null), hiddenGroupObjects = hiddenGroups.map((index) => groupsOrDefault[index]).filter((group) => group != null), groupsMarkup = filteredGroups.map((group) => {
    let {
      title,
      actions: groupActions,
      ...rest
    } = group, isDefaultGroup = group === defaultRollupGroup, allHiddenItems = [...hiddenActionObjects, ...hiddenGroupObjects], [finalRolledUpActions, finalRolledUpSectionGroups] = allHiddenItems.reduce(([actions2, sections], action) => (isMenuGroup(action) ? sections.push({
      title: action.title,
      items: action.actions.map((sectionAction) => ({
        ...sectionAction,
        disabled: action.disabled || sectionAction.disabled
      }))
    }) : actions2.push(action), [actions2, sections]), [[], []]);
    return isDefaultGroup ? /* @__PURE__ */ React75.createElement(MenuGroup, Object.assign({
      key: title,
      title,
      active: title === activeMenuGroup,
      actions: [...finalRolledUpActions, ...groupActions],
      sections: finalRolledUpSectionGroups
    }, rest, {
      onOpen: handleMenuGroupToggle,
      onClose: handleMenuGroupClose
    })) : /* @__PURE__ */ React75.createElement(MenuGroup, Object.assign({
      key: title,
      title,
      active: title === activeMenuGroup,
      actions: groupActions
    }, rest, {
      onOpen: handleMenuGroupToggle,
      onClose: handleMenuGroupClose
    }));
  }), handleMeasurement = useCallback16((measurements) => {
    let {
      hiddenActionsWidths: actionsWidths2,
      containerWidth: containerWidth2,
      disclosureWidth: disclosureWidth2
    } = measurements, {
      visibleActions: visibleActions2,
      hiddenActions: hiddenActions2,
      visibleGroups: visibleGroups2,
      hiddenGroups: hiddenGroups2
    } = getVisibleAndHiddenActionsIndices(actionsOrDefault, groupsOrDefault, disclosureWidth2, actionsWidths2, containerWidth2);
    if (onActionRollup) {
      let isRollupActive = hiddenActions2.length > 0 || hiddenGroups2.length > 0;
      rollupActiveRef.current !== isRollupActive && (onActionRollup(isRollupActive), rollupActiveRef.current = isRollupActive);
    }
    setState({
      visibleActions: visibleActions2,
      hiddenActions: hiddenActions2,
      visibleGroups: visibleGroups2,
      hiddenGroups: hiddenGroups2,
      actionsWidths: actionsWidths2,
      containerWidth: containerWidth2,
      disclosureWidth: disclosureWidth2,
      hasMeasured: !0
    });
  }, [actionsOrDefault, groupsOrDefault, onActionRollup]), actionsMeasurer = /* @__PURE__ */ React75.createElement(ActionsMeasurer, {
    actions,
    groups,
    handleMeasurement
  });
  return /* @__PURE__ */ React75.createElement("div", {
    className: styles26.ActionsLayoutOuter
  }, actionsMeasurer, /* @__PURE__ */ React75.createElement("div", {
    className: classNames(styles26.ActionsLayout, !hasMeasured && styles26["ActionsLayout--measuring"])
  }, actionsMarkup, groupsMarkup));
}
function isMenuGroup(actionOrMenuGroup) {
  return "title" in actionOrMenuGroup;
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.js
function ActionMenu({
  actions = [],
  groups = [],
  rollup,
  rollupActionsLabel,
  onActionRollup
}) {
  if (actions.length === 0 && groups.length === 0)
    return null;
  let actionMenuClassNames = classNames(styles23.ActionMenu, rollup && styles23.rollup), rollupSections = groups.map((group) => convertGroupToSection(group));
  return /* @__PURE__ */ React76.createElement("div", {
    className: actionMenuClassNames
  }, rollup ? /* @__PURE__ */ React76.createElement(RollupActions, {
    accessibilityLabel: rollupActionsLabel,
    items: actions,
    sections: rollupSections
  }) : /* @__PURE__ */ React76.createElement(Actions, {
    actions,
    groups,
    onActionRollup
  }));
}
function hasGroupsWithActions(groups = []) {
  return groups.length === 0 ? !1 : groups.some((group) => group.actions.length > 0);
}
function convertGroupToSection({
  title,
  actions,
  disabled
}) {
  return {
    title,
    items: actions.map((action) => ({
      ...action,
      disabled: disabled || action.disabled
    }))
  };
}

// node_modules/@shopify/polaris/build/esm/utilities/listbox/context.js
import { createContext as createContext15 } from "react";
var WithinListboxContext = /* @__PURE__ */ createContext15(!1);

// node_modules/@shopify/polaris/build/esm/components/Checkbox/Checkbox.js
import React78, { forwardRef as forwardRef6, useRef as useRef16, useId as useId6, useContext as useContext9, useImperativeHandle as useImperativeHandle3 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Checkbox/Checkbox.css.js
var styles29 = {
  Checkbox: "Polaris-Checkbox",
  ChoiceLabel: "Polaris-Checkbox__ChoiceLabel",
  Backdrop: "Polaris-Checkbox__Backdrop",
  Input: "Polaris-Checkbox__Input",
  "Input-indeterminate": "Polaris-Checkbox__Input--indeterminate",
  Icon: "Polaris-Checkbox__Icon",
  animated: "Polaris-Checkbox--animated",
  toneMagic: "Polaris-Checkbox--toneMagic",
  hover: "Polaris-Checkbox--hover",
  error: "Polaris-Checkbox--error",
  checked: "Polaris-Checkbox--checked",
  pathAnimation: "Polaris-Checkbox--pathAnimation"
};

// node_modules/@shopify/polaris/build/esm/components/Choice/Choice.js
import React77 from "react";

// node_modules/@shopify/polaris/build/esm/components/Choice/Choice.css.js
var styles30 = {
  Choice: "Polaris-Choice",
  labelHidden: "Polaris-Choice--labelHidden",
  Label: "Polaris-Choice__Label",
  Control: "Polaris-Choice__Control",
  disabled: "Polaris-Choice--disabled",
  toneMagic: "Polaris-Choice--toneMagic",
  Descriptions: "Polaris-Choice__Descriptions",
  HelpText: "Polaris-Choice__HelpText"
};

// node_modules/@shopify/polaris/build/esm/components/Choice/Choice.js
function Choice({
  id,
  label,
  disabled,
  error,
  children,
  labelHidden,
  helpText,
  onClick,
  labelClassName,
  fill,
  bleed,
  bleedBlockStart,
  bleedBlockEnd,
  bleedInlineStart,
  bleedInlineEnd,
  tone
}) {
  let className = classNames(styles30.Choice, labelHidden && styles30.labelHidden, disabled && styles30.disabled, tone && styles30[variationName("tone", tone)], labelClassName), labelStyle = {
    // Pass through overrides for bleed values if they're set by the prop
    ...getResponsiveProps("choice", "bleed-block-end", "space", bleedBlockEnd || bleed),
    ...getResponsiveProps("choice", "bleed-block-start", "space", bleedBlockStart || bleed),
    ...getResponsiveProps("choice", "bleed-inline-start", "space", bleedInlineStart || bleed),
    ...getResponsiveProps("choice", "bleed-inline-end", "space", bleedInlineEnd || bleed),
    ...Object.fromEntries(Object.entries(getResponsiveValue("choice", "fill", fill)).map(
      // Map "true" => "100%" and "false" => "auto" for use in
      // inline/block-size calc()
      ([key, value]) => [key, value ? "100%" : "auto"]
    ))
  }, labelMarkup = (
    // NOTE: Can't use a Box here for a few reasons:
    // - as="label" fails `Element` typecheck (even though the JS works)
    // - Can't pass hard coded values to padding (forced to tokens)
    // - Can't pass negative values to padding
    // - Can't pass margins at all
    /* @__PURE__ */ React77.createElement("label", {
      className,
      htmlFor: id,
      onClick,
      style: sanitizeCustomProperties(labelStyle)
    }, /* @__PURE__ */ React77.createElement("span", {
      className: styles30.Control
    }, children), /* @__PURE__ */ React77.createElement("span", {
      className: styles30.Label
    }, /* @__PURE__ */ React77.createElement(Text, {
      as: "span",
      variant: "bodyMd"
    }, label)))
  ), helpTextMarkup = helpText ? /* @__PURE__ */ React77.createElement("div", {
    className: styles30.HelpText,
    id: helpTextID2(id)
  }, /* @__PURE__ */ React77.createElement(Text, {
    as: "span",
    tone: disabled ? void 0 : "subdued"
  }, helpText)) : null, errorMarkup = error && typeof error != "boolean" && /* @__PURE__ */ React77.createElement("div", {
    className: styles30.Error
  }, /* @__PURE__ */ React77.createElement(InlineError, {
    message: error,
    fieldID: id
  })), descriptionMarkup = helpTextMarkup || errorMarkup ? /* @__PURE__ */ React77.createElement("div", {
    className: styles30.Descriptions
  }, errorMarkup, helpTextMarkup) : null;
  return descriptionMarkup ? /* @__PURE__ */ React77.createElement("div", null, labelMarkup, descriptionMarkup) : labelMarkup;
}
function helpTextID2(id) {
  return `${id}HelpText`;
}

// node_modules/@shopify/polaris/build/esm/components/Checkbox/Checkbox.js
var Checkbox = /* @__PURE__ */ forwardRef6(function({
  ariaControls,
  ariaDescribedBy: ariaDescribedByProp,
  label,
  labelHidden,
  checked = !1,
  helpText,
  disabled,
  id: idProp,
  name,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
  labelClassName,
  fill,
  bleed,
  bleedBlockStart,
  bleedBlockEnd,
  bleedInlineStart,
  bleedInlineEnd,
  tone
}, ref) {
  let inputNode = useRef16(null), uniqId = useId6(), id = idProp ?? uniqId, isWithinListbox = useContext9(WithinListboxContext);
  useImperativeHandle3(ref, () => ({
    focus: () => {
      inputNode.current && inputNode.current.focus();
    }
  }));
  let handleBlur = () => {
    onBlur && onBlur();
  }, handleOnClick = () => {
    onChange == null || inputNode.current == null || disabled || (onChange(inputNode.current.checked, id), inputNode.current.focus());
  }, describedBy = [];
  error && typeof error != "boolean" && describedBy.push(errorTextID(id)), helpText && describedBy.push(helpTextID2(id)), ariaDescribedByProp && describedBy.push(ariaDescribedByProp);
  let ariaDescribedBy = describedBy.length ? describedBy.join(" ") : void 0, wrapperClassName = classNames(styles29.Checkbox, error && styles29.error), isIndeterminate = checked === "indeterminate", isChecked = !isIndeterminate && Boolean(checked), indeterminateAttributes = isIndeterminate ? {
    indeterminate: "true",
    "aria-checked": "mixed"
  } : {
    "aria-checked": isChecked
  }, iconSource = /* @__PURE__ */ React78.createElement("svg", {
    viewBox: "0 0 16 16",
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision"
  }, /* @__PURE__ */ React78.createElement("path", {
    className: classNames(checked && styles29.checked),
    d: "M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5",
    transform: "translate(2 2.980376)",
    opacity: "0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    pathLength: "1"
  })), inputClassName = classNames(styles29.Input, isIndeterminate && styles29["Input-indeterminate"], tone && styles29[variationName("tone", tone)]), extraChoiceProps = {
    helpText,
    error,
    bleed,
    bleedBlockStart,
    bleedBlockEnd,
    bleedInlineStart,
    bleedInlineEnd
  };
  return /* @__PURE__ */ React78.createElement(Choice, Object.assign({
    id,
    label,
    labelHidden,
    disabled,
    labelClassName: classNames(styles29.ChoiceLabel, labelClassName),
    fill,
    tone
  }, extraChoiceProps), /* @__PURE__ */ React78.createElement("span", {
    className: wrapperClassName
  }, /* @__PURE__ */ React78.createElement("input", Object.assign({
    ref: inputNode,
    id,
    name,
    value,
    type: "checkbox",
    checked: isChecked,
    disabled,
    className: inputClassName,
    onBlur: handleBlur,
    onChange: noop4,
    onClick: handleOnClick,
    onFocus,
    "aria-invalid": error != null,
    "aria-controls": ariaControls,
    "aria-describedby": ariaDescribedBy,
    role: isWithinListbox ? "presentation" : "checkbox"
  }, indeterminateAttributes)), /* @__PURE__ */ React78.createElement("span", {
    className: styles29.Backdrop,
    onClick: stopPropagation,
    onKeyUp: stopPropagation
  }), /* @__PURE__ */ React78.createElement("span", {
    className: classNames(styles29.Icon, !isIndeterminate && styles29.animated)
  }, isIndeterminate ? /* @__PURE__ */ React78.createElement(Icon, {
    source: SvgMinusIcon
  }) : iconSource)));
});
function noop4() {
}
function stopPropagation(event) {
  event.stopPropagation();
}

// node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.js
import React79 from "react";

// node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.css.js
var styles31 = {
  Backdrop: "Polaris-Backdrop",
  transparent: "Polaris-Backdrop--transparent",
  belowNavigation: "Polaris-Backdrop--belowNavigation"
};

// node_modules/@shopify/polaris/build/esm/components/ScrollLock/ScrollLock.js
import { useEffect as useEffect16 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/hooks.js
import { useContext as useContext10 } from "react";
function useScrollLockManager() {
  let scrollLockManager = useContext10(ScrollLockManagerContext);
  if (!scrollLockManager)
    throw new MissingAppProviderError("No ScrollLockManager was provided.");
  return scrollLockManager;
}

// node_modules/@shopify/polaris/build/esm/components/ScrollLock/ScrollLock.js
function ScrollLock(_) {
  let scrollLockManager = useScrollLockManager();
  return useEffect16(() => (scrollLockManager.registerScrollLock(), () => {
    scrollLockManager.unregisterScrollLock();
  }), [scrollLockManager]), null;
}

// node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.js
function Backdrop(props) {
  let {
    onClick,
    onTouchStart,
    belowNavigation,
    transparent,
    setClosing
  } = props, className = classNames(styles31.Backdrop, belowNavigation && styles31.belowNavigation, transparent && styles31.transparent), handleMouseDown = () => {
    setClosing && setClosing(!0);
  }, handleClick = () => {
    setClosing && setClosing(!1), onClick && onClick();
  };
  return /* @__PURE__ */ React79.createElement(React79.Fragment, null, /* @__PURE__ */ React79.createElement(ScrollLock, null), /* @__PURE__ */ React79.createElement("div", {
    className,
    onClick: handleClick,
    onTouchStart,
    onMouseDown: handleMouseDown
  }));
}

// node_modules/@shopify/polaris/build/esm/utilities/banner-context.js
import { createContext as createContext16 } from "react";
var BannerContext = /* @__PURE__ */ createContext16(!1);

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.js
import React81 from "react";

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.css.js
var styles32 = {
  ButtonGroup: "Polaris-ButtonGroup",
  Item: "Polaris-ButtonGroup__Item",
  "Item-plain": "Polaris-ButtonGroup__Item--plain",
  variantSegmented: "Polaris-ButtonGroup--variantSegmented",
  "Item-focused": "Polaris-ButtonGroup__Item--focused",
  fullWidth: "Polaris-ButtonGroup--fullWidth",
  extraTight: "Polaris-ButtonGroup--extraTight",
  tight: "Polaris-ButtonGroup--tight",
  loose: "Polaris-ButtonGroup--loose",
  noWrap: "Polaris-ButtonGroup--noWrap"
};

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/components/Item/Item.js
import React80 from "react";
function Item3({
  button
}) {
  let {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(!1), className = classNames(styles32.Item, focused && styles32["Item-focused"], button.props.variant === "plain" && styles32["Item-plain"]);
  return /* @__PURE__ */ React80.createElement("div", {
    className,
    onFocus: forceTrueFocused,
    onBlur: forceFalseFocused
  }, button);
}

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.js
function ButtonGroup({
  children,
  gap,
  variant,
  fullWidth,
  connectedTop,
  noWrap
}) {
  let className = classNames(styles32.ButtonGroup, gap && styles32[gap], variant && styles32[variationName("variant", variant)], fullWidth && styles32.fullWidth, noWrap && styles32.noWrap), contents = elementChildren(children).map((child, index) => /* @__PURE__ */ React81.createElement(Item3, {
    button: child,
    key: index
  }));
  return /* @__PURE__ */ React81.createElement("div", {
    className,
    "data-buttongroup-variant": variant,
    "data-buttongroup-connected-top": connectedTop,
    "data-buttongroup-full-width": fullWidth,
    "data-buttongroup-no-wrap": noWrap
  }, contents);
}

// node_modules/@shopify/polaris/build/esm/components/Bleed/Bleed.js
import React82 from "react";

// node_modules/@shopify/polaris/build/esm/components/Bleed/Bleed.css.js
var styles33 = {
  Bleed: "Polaris-Bleed"
};

// node_modules/@shopify/polaris/build/esm/components/Bleed/Bleed.js
var Bleed = ({
  marginInline,
  marginBlock,
  marginBlockStart,
  marginBlockEnd,
  marginInlineStart,
  marginInlineEnd,
  children
}) => {
  let getNegativeMargins = (direction) => {
    let xAxis = ["marginInlineStart", "marginInlineEnd"], yAxis = ["marginBlockStart", "marginBlockEnd"], directionValues = {
      marginBlockStart,
      marginBlockEnd,
      marginInlineStart,
      marginInlineEnd,
      marginInline,
      marginBlock
    };
    if (directionValues[direction])
      return directionValues[direction];
    if (xAxis.includes(direction) && marginInline)
      return directionValues.marginInline;
    if (yAxis.includes(direction) && marginBlock)
      return directionValues.marginBlock;
  }, negativeMarginBlockStart = getNegativeMargins("marginBlockStart"), negativeMarginBlockEnd = getNegativeMargins("marginBlockEnd"), negativeMarginInlineStart = getNegativeMargins("marginInlineStart"), negativeMarginInlineEnd = getNegativeMargins("marginInlineEnd"), style = {
    ...getResponsiveProps("bleed", "margin-block-start", "space", negativeMarginBlockStart),
    ...getResponsiveProps("bleed", "margin-block-end", "space", negativeMarginBlockEnd),
    ...getResponsiveProps("bleed", "margin-inline-start", "space", negativeMarginInlineStart),
    ...getResponsiveProps("bleed", "margin-inline-end", "space", negativeMarginInlineEnd)
  };
  return /* @__PURE__ */ React82.createElement("div", {
    className: styles33.Bleed,
    style: sanitizeCustomProperties(style)
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/Breadcrumbs/Breadcrumbs.js
import React83 from "react";
function Breadcrumbs({
  backAction
}) {
  let {
    content
  } = backAction;
  return /* @__PURE__ */ React83.createElement(Button, {
    key: content,
    url: "url" in backAction ? backAction.url : void 0,
    onClick: "onAction" in backAction ? backAction.onAction : void 0,
    onPointerDown: handleMouseUpByBlurring,
    icon: SvgArrowLeftIcon,
    accessibilityLabel: backAction.accessibilityLabel ?? content
  });
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/BulkActions.js
import React89, { forwardRef as forwardRef8, useState as useState15, useReducer as useReducer2, useEffect as useEffect18, useCallback as useCallback18, useMemo as useMemo7 } from "react";

// node_modules/@shopify/polaris/build/esm/components/BulkActions/utilities.js
function getVisibleAndHiddenActionsIndices2(promotedActions = [], disclosureWidth, actionsWidths, containerWidth) {
  let sumTabWidths = actionsWidths.reduce((sum, width2) => sum + width2, 0), arrayOfPromotedActionsIndices = promotedActions.map((_, index) => index), visiblePromotedActions = [], hiddenPromotedActions = [];
  if (containerWidth > sumTabWidths)
    visiblePromotedActions.push(...arrayOfPromotedActionsIndices);
  else {
    let accumulatedWidth = 0, hasReturned = !1;
    arrayOfPromotedActionsIndices.forEach((currentPromotedActionsIndex) => {
      let currentActionsWidth = actionsWidths[currentPromotedActionsIndex];
      if (accumulatedWidth + currentActionsWidth >= containerWidth - disclosureWidth || hasReturned) {
        hiddenPromotedActions.push(currentPromotedActionsIndex), hasReturned = !0;
        return;
      }
      visiblePromotedActions.push(currentPromotedActionsIndex), accumulatedWidth += currentActionsWidth;
    });
  }
  return {
    visiblePromotedActions,
    hiddenPromotedActions
  };
}
function instanceOfBulkActionListSectionArray(actions) {
  let validList = actions.filter((action) => action.items);
  return actions.length === validList.length;
}
function instanceOfBulkActionArray(actions) {
  let validList = actions.filter((action) => !action.items);
  return actions.length === validList.length;
}
function instanceOfMenuGroupDescriptor(action) {
  return "title" in action && "actions" in action;
}
function instanceOfBulkActionListSection(action) {
  return "items" in action;
}
function getActionSections(actions) {
  if (!(!actions || actions.length === 0)) {
    if (instanceOfBulkActionListSectionArray(actions))
      return actions;
    if (instanceOfBulkActionArray(actions))
      return [{
        items: actions
      }];
  }
}
function isNewBadgeInBadgeActions(actionSections) {
  if (!actionSections)
    return !1;
  for (let action of actionSections)
    for (let item of action.items)
      if (item.badge?.tone === "new")
        return !0;
  return !1;
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/BulkActions.css.js
var styles34 = {
  BulkActionsOuterLayout: "Polaris-BulkActions__BulkActionsOuterLayout",
  BulkActionsSelectAllWrapper: "Polaris-BulkActions__BulkActionsSelectAllWrapper",
  BulkActionsPromotedActionsWrapper: "Polaris-BulkActions__BulkActionsPromotedActionsWrapper",
  BulkActionsLayout: "Polaris-BulkActions__BulkActionsLayout",
  "BulkActionsLayout--measuring": "Polaris-BulkActions--bulkActionsLayoutMeasuring",
  BulkActionsMeasurerLayout: "Polaris-BulkActions__BulkActionsMeasurerLayout",
  BulkActionButton: "Polaris-BulkActions__BulkActionButton",
  disabled: "Polaris-BulkActions--disabled",
  AllAction: "Polaris-BulkActions__AllAction"
};

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionMenu/BulkActionMenu.js
import React86 from "react";

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionButton/BulkActionButton.js
import React85, { useRef as useRef17 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Indicator/Indicator.js
import React84 from "react";

// node_modules/@shopify/polaris/build/esm/components/Indicator/Indicator.css.js
var styles35 = {
  Indicator: "Polaris-Indicator",
  pulseIndicator: "Polaris-Indicator--pulseIndicator"
};

// node_modules/@shopify/polaris/build/esm/components/Indicator/Indicator.js
function Indicator({
  pulse = !0
}) {
  let className = classNames(styles35.Indicator, pulse && styles35.pulseIndicator);
  return /* @__PURE__ */ React84.createElement("span", {
    className
  });
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionButton/BulkActionButton.js
function BulkActionButton({
  handleMeasurement,
  url,
  external,
  onAction,
  content,
  disclosure,
  accessibilityLabel,
  disabled,
  destructive,
  indicator,
  showContentInButton,
  size: size2
}) {
  let bulkActionButton = useRef17(null);
  useComponentDidMount(() => {
    if (handleMeasurement && bulkActionButton.current) {
      let width2 = bulkActionButton.current.getBoundingClientRect().width;
      handleMeasurement(width2);
    }
  });
  let isActivatorForMoreActionsPopover = disclosure && !showContentInButton, buttonContent = isActivatorForMoreActionsPopover ? void 0 : content, buttonMarkup = /* @__PURE__ */ React85.createElement(Button, {
    external,
    url,
    accessibilityLabel: isActivatorForMoreActionsPopover ? content : accessibilityLabel,
    tone: destructive ? "critical" : void 0,
    disclosure: disclosure && showContentInButton,
    onClick: onAction,
    disabled,
    size: size2,
    icon: isActivatorForMoreActionsPopover ? /* @__PURE__ */ React85.createElement(Icon, {
      source: SvgMenuHorizontalIcon,
      tone: "base"
    }) : void 0
  }, buttonContent);
  return /* @__PURE__ */ React85.createElement("div", {
    className: styles34.BulkActionButton,
    ref: bulkActionButton
  }, isActivatorForMoreActionsPopover ? /* @__PURE__ */ React85.createElement(Tooltip, {
    content,
    preferredPosition: "below"
  }, buttonMarkup) : buttonMarkup, indicator && /* @__PURE__ */ React85.createElement(Indicator, null));
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionMenu/BulkActionMenu.js
function BulkActionMenu({
  title,
  actions,
  isNewBadgeInBadgeActions: isNewBadgeInBadgeActions2,
  size: size2
}) {
  let {
    value: isVisible,
    toggle: toggleMenuVisibility
  } = useToggle(!1);
  return /* @__PURE__ */ React86.createElement(React86.Fragment, null, /* @__PURE__ */ React86.createElement(Popover2, {
    active: isVisible,
    activator: /* @__PURE__ */ React86.createElement(BulkActionButton, {
      disclosure: !0,
      showContentInButton: !0,
      onAction: toggleMenuVisibility,
      content: title,
      indicator: isNewBadgeInBadgeActions2,
      size: size2
    }),
    onClose: toggleMenuVisibility,
    preferInputActivator: !0
  }, /* @__PURE__ */ React86.createElement(ActionList, {
    items: actions,
    onActionAnyItem: toggleMenuVisibility
  })));
}

// node_modules/@shopify/polaris/build/esm/components/CheckableButton/CheckableButton.js
import React87, { forwardRef as forwardRef7, useRef as useRef18, useImperativeHandle as useImperativeHandle4 } from "react";

// node_modules/@shopify/polaris/build/esm/components/CheckableButton/CheckableButton.css.js
var styles36 = {
  CheckableButton: "Polaris-CheckableButton",
  Checkbox: "Polaris-CheckableButton__Checkbox",
  Label: "Polaris-CheckableButton__Label"
};

// node_modules/@shopify/polaris/build/esm/components/CheckableButton/CheckableButton.js
var CheckableButton = /* @__PURE__ */ forwardRef7(function({
  accessibilityLabel,
  label = "",
  onToggleAll,
  selected,
  disabled,
  ariaLive
}, ref) {
  let checkBoxRef = useRef18(null);
  function focus() {
    checkBoxRef?.current?.focus();
  }
  return useImperativeHandle4(ref, () => ({
    focus
  })), /* @__PURE__ */ React87.createElement("div", {
    className: styles36.CheckableButton,
    onClick: onToggleAll
  }, /* @__PURE__ */ React87.createElement("div", {
    className: styles36.Checkbox
  }, /* @__PURE__ */ React87.createElement(Checkbox, {
    label: accessibilityLabel,
    labelHidden: !0,
    checked: selected,
    disabled,
    onChange: onToggleAll,
    ref: checkBoxRef
  })), label ? /* @__PURE__ */ React87.createElement("span", {
    className: styles36.Label,
    "aria-live": ariaLive
  }, /* @__PURE__ */ React87.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: "medium"
  }, label)) : null);
});

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionsMeasurer/BulkActionsMeasurer.js
import React88, { useRef as useRef19, useCallback as useCallback17, useEffect as useEffect17 } from "react";
var ACTION_SPACING2 = 4;
function BulkActionsMeasurer({
  promotedActions = [],
  disabled,
  buttonSize,
  handleMeasurement: handleMeasurementProp
}) {
  let i18n = useI18n(), containerNode = useRef19(null), activatorLabel = i18n.translate("Polaris.ResourceList.BulkActions.moreActionsActivatorLabel"), activator = /* @__PURE__ */ React88.createElement(BulkActionButton, {
    disclosure: !0,
    content: activatorLabel
  }), handleMeasurement = useCallback17(() => {
    if (!containerNode.current)
      return;
    let containerWidth = containerNode.current.offsetWidth, hiddenActionNodes = containerNode.current.children, hiddenActionsWidths = Array.from(hiddenActionNodes).map((node) => Math.ceil(node.getBoundingClientRect().width) + ACTION_SPACING2), disclosureWidth = hiddenActionsWidths.pop() || 0;
    handleMeasurementProp({
      containerWidth,
      disclosureWidth,
      hiddenActionsWidths
    });
  }, [handleMeasurementProp]);
  useEffect17(() => {
    handleMeasurement();
  }, [handleMeasurement, promotedActions]);
  let promotedActionsMarkup = promotedActions.map((action, index) => instanceOfMenuGroupDescriptor(action) ? /* @__PURE__ */ React88.createElement(BulkActionButton, {
    key: index,
    disclosure: !0,
    showContentInButton: !0,
    content: action.title,
    size: buttonSize
  }) : /* @__PURE__ */ React88.createElement(BulkActionButton, Object.assign({
    key: index,
    disabled
  }, action, {
    size: buttonSize
  })));
  return useEventListener("resize", handleMeasurement), /* @__PURE__ */ React88.createElement("div", {
    className: styles34.BulkActionsMeasurerLayout,
    ref: containerNode
  }, promotedActionsMarkup, activator);
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/BulkActions.js
var BulkActions = /* @__PURE__ */ forwardRef8(function({
  promotedActions,
  actions,
  disabled,
  buttonSize,
  paginatedSelectAllAction,
  paginatedSelectAllText,
  label,
  accessibilityLabel,
  selected,
  onToggleAll,
  onMoreActionPopoverToggle,
  width: width2,
  selectMode
}, ref) {
  let i18n = useI18n(), [popoverActive, setPopoverActive] = useState15(!1), [state, setState] = useReducer2((data, partialData) => ({
    ...data,
    ...partialData
  }), {
    disclosureWidth: 0,
    containerWidth: 1 / 0,
    actionsWidths: [],
    visiblePromotedActions: [],
    hiddenPromotedActions: [],
    hasMeasured: !1
  }), {
    visiblePromotedActions,
    hiddenPromotedActions,
    containerWidth,
    disclosureWidth,
    actionsWidths,
    hasMeasured
  } = state;
  useEffect18(() => {
    if (containerWidth === 0 || !promotedActions || promotedActions.length === 0)
      return;
    let {
      visiblePromotedActions: visiblePromotedActions2,
      hiddenPromotedActions: hiddenPromotedActions2
    } = getVisibleAndHiddenActionsIndices2(promotedActions, disclosureWidth, actionsWidths, containerWidth);
    setState({
      visiblePromotedActions: visiblePromotedActions2,
      hiddenPromotedActions: hiddenPromotedActions2,
      hasMeasured: containerWidth !== 1 / 0
    });
  }, [containerWidth, disclosureWidth, promotedActions, actionsWidths]);
  let activatorLabel = !promotedActions || promotedActions && visiblePromotedActions.length === 0 ? i18n.translate("Polaris.ResourceList.BulkActions.actionsActivatorLabel") : i18n.translate("Polaris.ResourceList.BulkActions.moreActionsActivatorLabel"), paginatedSelectAllMarkup = paginatedSelectAllAction ? /* @__PURE__ */ React89.createElement(UnstyledButton, {
    className: styles34.AllAction,
    onClick: paginatedSelectAllAction.onAction,
    size: "slim",
    disabled
  }, /* @__PURE__ */ React89.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: "medium"
  }, paginatedSelectAllAction.content)) : null, hasTextAndAction = paginatedSelectAllText && paginatedSelectAllAction, checkableButtonProps = {
    accessibilityLabel,
    label: hasTextAndAction ? paginatedSelectAllText : label,
    selected,
    onToggleAll,
    disabled,
    ariaLive: hasTextAndAction ? "polite" : void 0,
    ref
  }, togglePopover = useCallback18(() => {
    onMoreActionPopoverToggle?.(popoverActive), setPopoverActive((popoverActive2) => !popoverActive2);
  }, [onMoreActionPopoverToggle, popoverActive]), handleMeasurement = useCallback18((measurements) => {
    let {
      hiddenActionsWidths: actionsWidths2,
      containerWidth: containerWidth2,
      disclosureWidth: disclosureWidth2
    } = measurements;
    if (!promotedActions || promotedActions.length === 0)
      return;
    let {
      visiblePromotedActions: visiblePromotedActions2,
      hiddenPromotedActions: hiddenPromotedActions2
    } = getVisibleAndHiddenActionsIndices2(promotedActions, disclosureWidth2, actionsWidths2, containerWidth2);
    setState({
      visiblePromotedActions: visiblePromotedActions2,
      hiddenPromotedActions: hiddenPromotedActions2,
      actionsWidths: actionsWidths2,
      containerWidth: containerWidth2,
      disclosureWidth: disclosureWidth2,
      hasMeasured: !0
    });
  }, [promotedActions]), actionSections = getActionSections(actions), promotedActionsMarkup = promotedActions ? promotedActions.filter((_, index) => !!visiblePromotedActions.includes(index)).map((action, index) => instanceOfMenuGroupDescriptor(action) ? /* @__PURE__ */ React89.createElement(BulkActionMenu, Object.assign({
    key: index
  }, action, {
    isNewBadgeInBadgeActions: isNewBadgeInBadgeActions(actionSections),
    size: buttonSize
  })) : /* @__PURE__ */ React89.createElement(BulkActionButton, Object.assign({
    key: index,
    disabled
  }, action, {
    size: buttonSize
  }))) : null, hiddenPromotedSection = {
    items: hiddenPromotedActions.map((index) => promotedActions?.[index]).reduce((memo9, action) => action ? instanceOfMenuGroupDescriptor(action) ? memo9.concat(action.actions) : memo9.concat(action) : memo9, [])
  }, allHiddenActions = useMemo7(() => {
    if (actionSections)
      return actionSections;
    if (!actions)
      return [];
    let isAFlatArray = !0;
    return actions.filter((action) => action).reduce((memo9, action) => {
      if (instanceOfBulkActionListSection(action))
        return isAFlatArray = !1, memo9.concat(action);
      if (isAFlatArray) {
        if (memo9.length === 0)
          return [{
            items: [action]
          }];
        let lastItem = memo9[memo9.length - 1];
        return memo9.splice(memo9.length - 1, 1, {
          items: [...lastItem.items, action]
        }), memo9;
      }
      return isAFlatArray = !0, memo9.concat({
        items: [action]
      });
    }, []);
  }, [actions, actionSections]), activator = /* @__PURE__ */ React89.createElement(BulkActionButton, {
    disclosure: !0,
    showContentInButton: !promotedActionsMarkup,
    onAction: togglePopover,
    content: activatorLabel,
    disabled,
    indicator: isNewBadgeInBadgeActions(actionSections),
    size: buttonSize
  }), actionsMarkup = allHiddenActions.length > 0 ? /* @__PURE__ */ React89.createElement(Popover2, {
    active: popoverActive,
    activator,
    preferredAlignment: "right",
    onClose: togglePopover
  }, /* @__PURE__ */ React89.createElement(ActionList, {
    sections: hiddenPromotedSection.items.length > 0 ? [hiddenPromotedSection, ...allHiddenActions] : allHiddenActions,
    onActionAnyItem: togglePopover
  })) : null, measurerMarkup = /* @__PURE__ */ React89.createElement(BulkActionsMeasurer, {
    promotedActions,
    disabled,
    buttonSize,
    handleMeasurement
  });
  return /* @__PURE__ */ React89.createElement("div", {
    className: styles34.BulkActions,
    style: width2 ? {
      width: width2
    } : void 0
  }, /* @__PURE__ */ React89.createElement(InlineStack, {
    gap: "400",
    blockAlign: "center"
  }, /* @__PURE__ */ React89.createElement("div", {
    className: styles34.BulkActionsSelectAllWrapper
  }, /* @__PURE__ */ React89.createElement(CheckableButton, checkableButtonProps), paginatedSelectAllMarkup), selectMode ? /* @__PURE__ */ React89.createElement("div", {
    className: styles34.BulkActionsPromotedActionsWrapper
  }, /* @__PURE__ */ React89.createElement(InlineStack, {
    gap: "100",
    blockAlign: "center"
  }, /* @__PURE__ */ React89.createElement("div", {
    className: styles34.BulkActionsOuterLayout
  }, measurerMarkup, /* @__PURE__ */ React89.createElement("div", {
    className: classNames(styles34.BulkActionsLayout, !hasMeasured && styles34["BulkActionsLayout--measuring"])
  }, promotedActionsMarkup)), actionsMarkup)) : null));
});

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.js
import React91, { memo as memo2 } from "react";

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.css.js
var styles37 = {
  LegacyStack: "Polaris-LegacyStack",
  Item: "Polaris-LegacyStack__Item",
  noWrap: "Polaris-LegacyStack--noWrap",
  spacingNone: "Polaris-LegacyStack--spacingNone",
  spacingExtraTight: "Polaris-LegacyStack--spacingExtraTight",
  spacingTight: "Polaris-LegacyStack--spacingTight",
  spacingBaseTight: "Polaris-LegacyStack--spacingBaseTight",
  spacingLoose: "Polaris-LegacyStack--spacingLoose",
  spacingExtraLoose: "Polaris-LegacyStack--spacingExtraLoose",
  distributionLeading: "Polaris-LegacyStack--distributionLeading",
  distributionTrailing: "Polaris-LegacyStack--distributionTrailing",
  distributionCenter: "Polaris-LegacyStack--distributionCenter",
  distributionEqualSpacing: "Polaris-LegacyStack--distributionEqualSpacing",
  distributionFill: "Polaris-LegacyStack--distributionFill",
  distributionFillEvenly: "Polaris-LegacyStack--distributionFillEvenly",
  alignmentLeading: "Polaris-LegacyStack--alignmentLeading",
  alignmentTrailing: "Polaris-LegacyStack--alignmentTrailing",
  alignmentCenter: "Polaris-LegacyStack--alignmentCenter",
  alignmentFill: "Polaris-LegacyStack--alignmentFill",
  alignmentBaseline: "Polaris-LegacyStack--alignmentBaseline",
  vertical: "Polaris-LegacyStack--vertical",
  "Item-fill": "Polaris-LegacyStack__Item--fill"
};

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/components/Item/Item.js
import React90 from "react";
function Item4({
  children,
  fill
}) {
  let className = classNames(styles37.Item, fill && styles37["Item-fill"]);
  return /* @__PURE__ */ React90.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.js
var LegacyStack = /* @__PURE__ */ memo2(function({
  children,
  vertical,
  spacing,
  distribution,
  alignment,
  wrap
}) {
  let className = classNames(styles37.LegacyStack, vertical && styles37.vertical, spacing && styles37[variationName("spacing", spacing)], distribution && styles37[variationName("distribution", distribution)], alignment && styles37[variationName("alignment", alignment)], wrap === !1 && styles37.noWrap), itemMarkup = elementChildren(children).map((child, index) => wrapWithComponent(child, Item4, {
    key: index
  }));
  return /* @__PURE__ */ React91.createElement("div", {
    className
  }, itemMarkup);
});
LegacyStack.Item = Item4;

// node_modules/@shopify/polaris/build/esm/components/Collapsible/Collapsible.js
import React92, { useState as useState16, useRef as useRef20, useCallback as useCallback19, useEffect as useEffect19 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Collapsible/Collapsible.css.js
var styles38 = {
  Collapsible: "Polaris-Collapsible",
  isFullyClosed: "Polaris-Collapsible--isFullyClosed",
  expandOnPrint: "Polaris-Collapsible--expandOnPrint"
};

// node_modules/@shopify/polaris/build/esm/components/Collapsible/Collapsible.js
function Collapsible({
  id,
  expandOnPrint,
  open,
  transition = !0,
  children,
  onAnimationEnd
}) {
  let [height2, setHeight] = useState16(0), [isOpen, setIsOpen] = useState16(open), [animationState, setAnimationState] = useState16("idle"), collapsibleContainer = useRef20(null), isFullyOpen = animationState === "idle" && open && isOpen, isFullyClosed = animationState === "idle" && !open && !isOpen, content = expandOnPrint || !isFullyClosed ? children : null, wrapperClassName = classNames(styles38.Collapsible, isFullyClosed && styles38.isFullyClosed, expandOnPrint && styles38.expandOnPrint), transitionDisabled = isTransitionDisabled(transition), collapsibleStyles = {
    ...typeof transition == "object" && {
      transitionDuration: transition.duration,
      transitionTimingFunction: transition.timingFunction
    },
    maxHeight: isFullyOpen ? "none" : `${height2}px`,
    overflow: isFullyOpen ? "visible" : "hidden"
  }, handleCompleteAnimation = useCallback19(({
    target
  }) => {
    target === collapsibleContainer.current && (setAnimationState("idle"), setIsOpen(open), onAnimationEnd && onAnimationEnd());
  }, [onAnimationEnd, open]), startAnimation = useCallback19(() => {
    transitionDisabled ? (setIsOpen(open), setAnimationState("idle"), open && collapsibleContainer.current ? setHeight(collapsibleContainer.current.scrollHeight) : setHeight(0)) : setAnimationState("measuring");
  }, [open, transitionDisabled]);
  return useEffect19(() => {
    open !== isOpen && startAnimation();
  }, [open, isOpen]), useEffect19(() => {
    !open || !collapsibleContainer.current || setHeight(collapsibleContainer.current.scrollHeight);
  }, []), useEffect19(() => {
    if (collapsibleContainer.current)
      switch (animationState) {
        case "idle":
          break;
        case "measuring":
          setHeight(collapsibleContainer.current.scrollHeight), setAnimationState("animating");
          break;
        case "animating":
          setHeight(open ? collapsibleContainer.current.scrollHeight : 0);
      }
  }, [animationState, open, isOpen]), /* @__PURE__ */ React92.createElement("div", {
    id,
    style: collapsibleStyles,
    ref: collapsibleContainer,
    className: wrapperClassName,
    onTransitionEnd: handleCompleteAnimation,
    "aria-hidden": !open
  }, content);
}
var zeroDurationRegex = /^0(ms|s)$/;
function isTransitionDisabled(transitionProp) {
  if (typeof transitionProp == "boolean")
    return !transitionProp;
  let {
    duration
  } = transitionProp;
  return !!(duration && zeroDurationRegex.test(duration.trim()));
}

// node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.js
import React93 from "react";

// node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.css.js
var styles39 = {
  InlineGrid: "Polaris-InlineGrid"
};

// node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.js
function InlineGrid({
  children,
  columns,
  gap,
  alignItems
}) {
  let style = {
    ...getResponsiveValue("inline-grid", "grid-template-columns", formatInlineGrid(columns)),
    ...getResponsiveProps("inline-grid", "gap", "space", gap),
    "--pc-inline-grid-align-items": alignItems
  };
  return /* @__PURE__ */ React93.createElement("div", {
    className: styles39.InlineGrid,
    style: sanitizeCustomProperties(style)
  }, children);
}
function formatInlineGrid(columns) {
  return typeof columns == "object" && columns !== null && !Array.isArray(columns) ? Object.fromEntries(Object.entries(columns).map(([breakpointAlias, breakpointInlineGrid]) => [breakpointAlias, getColumnValue(breakpointInlineGrid)])) : getColumnValue(columns);
}
function getColumnValue(columns) {
  if (columns)
    return typeof columns == "number" || !isNaN(Number(columns)) ? `repeat(${Number(columns)}, minmax(0, 1fr))` : typeof columns == "string" ? columns : columns.map((column) => {
      switch (column) {
        case "oneThird":
          return "minmax(0, 1fr)";
        case "oneHalf":
          return "minmax(0, 1fr)";
        case "twoThirds":
          return "minmax(0, 2fr)";
      }
    }).join(" ");
}

// node_modules/@shopify/polaris/build/esm/utilities/frame/hooks.js
import { useContext as useContext11 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/frame/context.js
import { createContext as createContext17 } from "react";
var FrameContext = /* @__PURE__ */ createContext17(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/frame/hooks.js
function useFrame() {
  let frame = useContext11(FrameContext);
  if (!frame)
    throw new Error("No Frame context was provided. Your component must be wrapped in a <Frame> component. See https://polaris.shopify.com/components/internal-only/frame for implementation instructions.");
  return frame;
}

// node_modules/@shopify/polaris/build/esm/components/DataTable/DataTable.js
import React99, { PureComponent as PureComponent4, createRef as createRef3 } from "react";
import isEqual from "react-fast-compare";

// node_modules/@shopify/polaris/build/esm/components/DataTable/utilities.js
function measureColumn(tableData) {
  return function(column, index) {
    let {
      firstVisibleColumnIndex,
      tableLeftVisibleEdge: tableStart,
      tableRightVisibleEdge: tableEnd
    } = tableData, leftEdge = column.offsetLeft, rightEdge = leftEdge + column.offsetWidth, isVisibleLeft = isEdgeVisible(leftEdge, tableStart, tableEnd, "left"), isVisibleRight = isEdgeVisible(rightEdge, tableStart, tableEnd, "right"), isVisible = isVisibleLeft || isVisibleRight, width2 = column.offsetWidth;
    return isVisible && (tableData.firstVisibleColumnIndex = Math.min(firstVisibleColumnIndex, index)), {
      leftEdge,
      rightEdge,
      isVisible,
      width: width2,
      index
    };
  };
}
function isEdgeVisible(position, start, end, edgeType) {
  return position >= start + (edgeType === "left" ? 0 : 30) && position <= end - 30;
}
function getPrevAndCurrentColumns(tableData, columnData) {
  let {
    firstVisibleColumnIndex
  } = tableData, previousColumnIndex = Math.max(firstVisibleColumnIndex - 1, 0), previousColumn = columnData[previousColumnIndex], currentColumn = columnData[firstVisibleColumnIndex];
  return {
    previousColumn,
    currentColumn
  };
}

// node_modules/@shopify/polaris/build/esm/components/DataTable/DataTable.css.js
var styles40 = {
  DataTable: "Polaris-DataTable",
  condensed: "Polaris-DataTable--condensed",
  Navigation: "Polaris-DataTable__Navigation",
  Pip: "Polaris-DataTable__Pip",
  "Pip-visible": "Polaris-DataTable__Pip--visible",
  ScrollContainer: "Polaris-DataTable__ScrollContainer",
  Table: "Polaris-DataTable__Table",
  TableRow: "Polaris-DataTable__TableRow",
  Cell: "Polaris-DataTable__Cell",
  IncreasedTableDensity: "Polaris-DataTable__IncreasedTableDensity",
  ZebraStripingOnData: "Polaris-DataTable__ZebraStripingOnData",
  RowCountIsEven: "Polaris-DataTable__RowCountIsEven",
  ShowTotalsInFooter: "Polaris-DataTable__ShowTotalsInFooter",
  "Cell-separate": "Polaris-DataTable__Cell--separate",
  "Cell-firstColumn": "Polaris-DataTable__Cell--firstColumn",
  "Cell-numeric": "Polaris-DataTable__Cell--numeric",
  "Cell-truncated": "Polaris-DataTable__Cell--truncated",
  "Cell-header": "Polaris-DataTable__Cell--header",
  "Cell-sortable": "Polaris-DataTable__Cell--sortable",
  "Heading-left": "Polaris-DataTable__Heading--left",
  "Cell-verticalAlignTop": "Polaris-DataTable__Cell--verticalAlignTop",
  "Cell-verticalAlignBottom": "Polaris-DataTable__Cell--verticalAlignBottom",
  "Cell-verticalAlignMiddle": "Polaris-DataTable__Cell--verticalAlignMiddle",
  "Cell-verticalAlignBaseline": "Polaris-DataTable__Cell--verticalAlignBaseline",
  hoverable: "Polaris-DataTable--hoverable",
  "Cell-hovered": "Polaris-DataTable__Cell--hovered",
  Icon: "Polaris-DataTable__Icon",
  Heading: "Polaris-DataTable__Heading",
  StickyHeaderEnabled: "Polaris-DataTable__StickyHeaderEnabled",
  StickyHeaderWrapper: "Polaris-DataTable__StickyHeaderWrapper",
  "Cell-sorted": "Polaris-DataTable__Cell--sorted",
  "Cell-total": "Polaris-DataTable__Cell--total",
  ShowTotals: "Polaris-DataTable__ShowTotals",
  "Cell-total-footer": "Polaris-DataTable--cellTotalFooter",
  Footer: "Polaris-DataTable__Footer",
  StickyHeaderInner: "Polaris-DataTable__StickyHeaderInner",
  "StickyHeaderInner-isSticky": "Polaris-DataTable__StickyHeaderInner--isSticky",
  StickyHeaderTable: "Polaris-DataTable__StickyHeaderTable",
  FixedFirstColumn: "Polaris-DataTable__FixedFirstColumn",
  StickyTableHeadingsRow: "Polaris-DataTable__StickyTableHeadingsRow",
  TooltipContent: "Polaris-DataTable__TooltipContent"
};

// node_modules/@shopify/polaris/build/esm/components/DataTable/components/Cell/Cell.js
import React94, { useRef as useRef21 } from "react";
function Cell({
  content,
  contentType,
  nthColumn,
  firstColumn,
  truncate,
  header,
  total,
  totalInFooter,
  sorted,
  sortable,
  sortDirection,
  inFixedNthColumn,
  verticalAlign = "top",
  defaultSortDirection = "ascending",
  onSort,
  colSpan,
  setRef = () => {
  },
  stickyHeadingCell = !1,
  stickyCellWidth,
  hovered = !1,
  handleFocus = () => {
  },
  hasFixedNthColumn = !1,
  fixedCellVisible = !1,
  firstColumnMinWidth,
  style,
  lastFixedFirstColumn
}) {
  let i18n = useI18n(), numeric = contentType === "numeric", className = classNames(styles40.Cell, styles40[`Cell-${variationName("verticalAlign", verticalAlign)}`], firstColumn && styles40["Cell-firstColumn"], truncate && styles40["Cell-truncated"], header && styles40["Cell-header"], total && styles40["Cell-total"], totalInFooter && styles40["Cell-total-footer"], numeric && styles40["Cell-numeric"], sortable && styles40["Cell-sortable"], sorted && styles40["Cell-sorted"], stickyHeadingCell && styles40.StickyHeaderCell, hovered && styles40["Cell-hovered"], lastFixedFirstColumn && inFixedNthColumn && fixedCellVisible && styles40["Cell-separate"], nthColumn && inFixedNthColumn && stickyHeadingCell && styles40.FixedFirstColumn), headerClassName = classNames(header && styles40.Heading, header && contentType === "text" && styles40["Heading-left"]), iconClassName = classNames(sortable && styles40.Icon), direction = sorted && sortDirection ? sortDirection : defaultSortDirection, source = direction === "descending" ? SvgSortDescendingIcon : SvgSortAscendingIcon, oppositeDirection = sortDirection === "ascending" ? "descending" : "ascending", sortAccessibilityLabel = i18n.translate("Polaris.DataTable.sortAccessibilityLabel", {
    direction: sorted ? oppositeDirection : direction
  }), iconMarkup = /* @__PURE__ */ React94.createElement("span", {
    className: iconClassName
  }, /* @__PURE__ */ React94.createElement(Icon, {
    source,
    accessibilityLabel: sortAccessibilityLabel
  })), focusable = !(stickyHeadingCell && hasFixedNthColumn && nthColumn && !inFixedNthColumn), columnHeadingContent = sortable ? /* @__PURE__ */ React94.createElement("button", {
    className: headerClassName,
    onClick: onSort,
    onFocus: handleFocus,
    tabIndex: focusable ? 0 : -1
  }, iconMarkup, content) : content, colSpanProp = colSpan && colSpan > 1 ? {
    colSpan
  } : {}, minWidthStyles = nthColumn && firstColumnMinWidth ? {
    minWidth: firstColumnMinWidth
  } : {
    minWidth: stickyCellWidth
  }, stickyHeading = /* @__PURE__ */ React94.createElement("th", Object.assign({
    ref: setRef
  }, headerCell.props, colSpanProp, {
    className,
    "aria-sort": sortDirection,
    style: {
      ...style,
      ...minWidthStyles
    },
    "data-index-table-sticky-heading": !0
  }), columnHeadingContent), headingMarkup = header ? /* @__PURE__ */ React94.createElement("th", Object.assign({}, headerCell.props, {
    "aria-sort": sortDirection
  }, colSpanProp, {
    ref: setRef,
    className,
    scope: "col",
    style: {
      ...minWidthStyles
    }
  }), columnHeadingContent) : /* @__PURE__ */ React94.createElement("th", Object.assign({}, colSpanProp, {
    ref: setRef,
    className,
    scope: "row",
    style: {
      ...minWidthStyles
    }
  }), truncate ? /* @__PURE__ */ React94.createElement(TruncatedText, {
    className: styles40.TooltipContent
  }, content) : content), cellMarkup = header || firstColumn || nthColumn ? headingMarkup : /* @__PURE__ */ React94.createElement("td", Object.assign({
    className
  }, colSpanProp), content);
  return stickyHeadingCell ? stickyHeading : cellMarkup;
}
var TruncatedText = ({
  children,
  className = ""
}) => {
  let textRef = useRef21(null), {
    current
  } = textRef, text2 = /* @__PURE__ */ React94.createElement("span", {
    ref: textRef,
    className
  }, children);
  return current?.scrollWidth > current?.offsetWidth ? /* @__PURE__ */ React94.createElement(Tooltip, {
    content: textRef.current.innerText
  }, text2) : text2;
};

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.js
import React95, { createRef as createRef2 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/is-input-focused.js
var EditableTarget;
(function(EditableTarget2) {
  EditableTarget2.Input = "INPUT", EditableTarget2.Textarea = "TEXTAREA", EditableTarget2.Select = "SELECT", EditableTarget2.ContentEditable = "contenteditable";
})(EditableTarget || (EditableTarget = {}));
function isInputFocused() {
  if (document == null || document.activeElement == null)
    return !1;
  let {
    tagName
  } = document.activeElement;
  return tagName === EditableTarget.Input || tagName === EditableTarget.Textarea || tagName === EditableTarget.Select || document.activeElement.hasAttribute(EditableTarget.ContentEditable);
}

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.css.js
var styles41 = {
  Pagination: "Polaris-Pagination",
  table: "Polaris-Pagination--table",
  TablePaginationActions: "Polaris-Pagination__TablePaginationActions"
};

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.js
function Pagination({
  hasNext,
  hasPrevious,
  nextURL,
  previousURL,
  onNext,
  onPrevious,
  nextTooltip,
  previousTooltip,
  nextKeys,
  previousKeys,
  accessibilityLabel,
  accessibilityLabels,
  label,
  type = "page"
}) {
  let i18n = useI18n(), node = /* @__PURE__ */ createRef2(), navLabel = accessibilityLabel || i18n.translate("Polaris.Pagination.pagination"), previousLabel = accessibilityLabels?.previous || i18n.translate("Polaris.Pagination.previous"), nextLabel = accessibilityLabels?.next || i18n.translate("Polaris.Pagination.next"), prev = /* @__PURE__ */ React95.createElement(Button, {
    icon: SvgChevronLeftIcon,
    accessibilityLabel: previousLabel,
    url: previousURL,
    onClick: onPrevious,
    disabled: !hasPrevious,
    id: "previousURL"
  }), constructedPrevious = previousTooltip && hasPrevious ? /* @__PURE__ */ React95.createElement(Tooltip, {
    activatorWrapper: "span",
    content: previousTooltip,
    preferredPosition: "below"
  }, prev) : prev, next = /* @__PURE__ */ React95.createElement(Button, {
    icon: SvgChevronRightIcon,
    accessibilityLabel: nextLabel,
    url: nextURL,
    onClick: onNext,
    disabled: !hasNext,
    id: "nextURL"
  }), constructedNext = nextTooltip && hasNext ? /* @__PURE__ */ React95.createElement(Tooltip, {
    activatorWrapper: "span",
    content: nextTooltip,
    preferredPosition: "below"
  }, next) : next, previousHandler = onPrevious || noop5, previousButtonEvents = previousKeys && (previousURL || onPrevious) && hasPrevious && previousKeys.map((key) => /* @__PURE__ */ React95.createElement(KeypressListener, {
    key,
    keyCode: key,
    handler: handleCallback(previousURL ? clickPaginationLink("previousURL", node) : previousHandler)
  })), nextHandler = onNext || noop5, nextButtonEvents = nextKeys && (nextURL || onNext) && hasNext && nextKeys.map((key) => /* @__PURE__ */ React95.createElement(KeypressListener, {
    key,
    keyCode: key,
    handler: handleCallback(nextURL ? clickPaginationLink("nextURL", node) : nextHandler)
  }));
  if (type === "table") {
    let labelMarkup2 = label ? /* @__PURE__ */ React95.createElement(Box, {
      padding: "300",
      paddingBlockStart: "0",
      paddingBlockEnd: "0"
    }, /* @__PURE__ */ React95.createElement(Text, {
      as: "span",
      variant: "bodySm",
      fontWeight: "medium"
    }, label)) : null;
    return /* @__PURE__ */ React95.createElement("nav", {
      "aria-label": navLabel,
      ref: node,
      className: classNames(styles41.Pagination, styles41.table)
    }, previousButtonEvents, nextButtonEvents, /* @__PURE__ */ React95.createElement(Box, {
      background: "bg-surface-secondary",
      paddingBlockStart: "150",
      paddingBlockEnd: "150",
      paddingInlineStart: "300",
      paddingInlineEnd: "200"
    }, /* @__PURE__ */ React95.createElement(InlineStack, {
      align: "center",
      blockAlign: "center"
    }, /* @__PURE__ */ React95.createElement("div", {
      className: styles41.TablePaginationActions,
      "data-buttongroup-variant": "segmented"
    }, /* @__PURE__ */ React95.createElement("div", null, constructedPrevious), labelMarkup2, /* @__PURE__ */ React95.createElement("div", null, constructedNext)))));
  }
  let labelTextMarkup = hasNext && hasPrevious ? /* @__PURE__ */ React95.createElement("span", null, label) : /* @__PURE__ */ React95.createElement(Text, {
    tone: "subdued",
    as: "span"
  }, label), labelMarkup = label ? /* @__PURE__ */ React95.createElement(Box, {
    padding: "300",
    paddingBlockStart: "0",
    paddingBlockEnd: "0"
  }, /* @__PURE__ */ React95.createElement("div", {
    "aria-live": "polite"
  }, labelTextMarkup)) : null;
  return /* @__PURE__ */ React95.createElement("nav", {
    "aria-label": navLabel,
    ref: node,
    className: styles41.Pagination
  }, previousButtonEvents, nextButtonEvents, /* @__PURE__ */ React95.createElement(ButtonGroup, {
    variant: "segmented"
  }, constructedPrevious, labelMarkup, constructedNext));
}
function clickPaginationLink(id, node) {
  return () => {
    if (node.current == null)
      return;
    let link = node.current.querySelector(`#${id}`);
    link && link.click();
  };
}
function handleCallback(fn) {
  return () => {
    isInputFocused() || fn();
  };
}
function noop5() {
}

// node_modules/@shopify/polaris/build/esm/components/AfterInitialMount/AfterInitialMount.js
import React96, { useEffect as useEffect20 } from "react";
function AfterInitialMount({
  children,
  onMount,
  fallback = null
}) {
  let isMounted = useIsAfterInitialMount(), content = isMounted ? children : fallback;
  return useEffect20(() => {
    isMounted && onMount && onMount();
  }, [isMounted, onMount]), /* @__PURE__ */ React96.createElement(React96.Fragment, null, content);
}

// node_modules/@shopify/polaris/build/esm/components/Sticky/Sticky.js
import React97, { Component as Component2 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/hooks.js
import { useContext as useContext12 } from "react";
function useStickyManager() {
  let stickyManager = useContext12(StickyManagerContext);
  if (!stickyManager)
    throw new MissingAppProviderError("No StickyManager was provided.");
  return stickyManager;
}

// node_modules/@shopify/polaris/build/esm/components/Sticky/Sticky.js
var StickyInner = class extends Component2 {
  constructor(...args) {
    super(...args), this.state = {
      isSticky: !1,
      style: {}
    }, this.placeHolderNode = null, this.stickyNode = null, this.setPlaceHolderNode = (node) => {
      this.placeHolderNode = node;
    }, this.setStickyNode = (node) => {
      this.stickyNode = node;
    }, this.handlePositioning = (stick, top = 0, left = 0, width2 = 0) => {
      let {
        isSticky
      } = this.state;
      (stick && !isSticky || !stick && isSticky) && (this.adjustPlaceHolderNode(stick), this.setState({
        isSticky: !isSticky
      }, () => {
        if (this.props.onStickyChange == null || (this.props.onStickyChange(!isSticky), this.props.boundingElement == null))
          return null;
        this.props.boundingElement.toggleAttribute("data-sticky-active");
      }));
      let style = stick ? {
        position: "fixed",
        top,
        left,
        width: width2
      } : {};
      this.setState({
        style
      });
    }, this.adjustPlaceHolderNode = (add) => {
      this.placeHolderNode && this.stickyNode && (this.placeHolderNode.style.paddingBottom = add ? `${getRectForNode(this.stickyNode).height}px` : "0px");
    };
  }
  componentDidMount() {
    let {
      boundingElement,
      offset = !1,
      disableWhenStacked = !1,
      stickyManager
    } = this.props;
    !this.stickyNode || !this.placeHolderNode || stickyManager.registerStickyItem({
      stickyNode: this.stickyNode,
      placeHolderNode: this.placeHolderNode,
      handlePositioning: this.handlePositioning,
      offset,
      boundingElement,
      disableWhenStacked
    });
  }
  componentWillUnmount() {
    let {
      stickyManager
    } = this.props;
    this.stickyNode && stickyManager.unregisterStickyItem(this.stickyNode);
  }
  render() {
    let {
      style,
      isSticky
    } = this.state, {
      children
    } = this.props, childrenContent = isFunction(children) ? children(isSticky) : children;
    return /* @__PURE__ */ React97.createElement("div", null, /* @__PURE__ */ React97.createElement("div", {
      ref: this.setPlaceHolderNode
    }), /* @__PURE__ */ React97.createElement("div", {
      ref: this.setStickyNode,
      style
    }, childrenContent));
  }
};
function isFunction(arg) {
  return typeof arg == "function";
}
function Sticky(props) {
  let stickyManager = useStickyManager();
  return /* @__PURE__ */ React97.createElement(StickyInner, Object.assign({}, props, {
    stickyManager
  }));
}

// node_modules/@shopify/polaris/build/esm/components/DataTable/components/Navigation/Navigation.js
import React98 from "react";
function Navigation({
  columnVisibilityData,
  isScrolledFarthestLeft,
  isScrolledFarthestRight,
  navigateTableLeft,
  navigateTableRight,
  fixedFirstColumns,
  setRef = () => {
  }
}) {
  let i18n = useI18n(), pipMarkup = columnVisibilityData.map((column, index) => {
    if (index < fixedFirstColumns)
      return;
    let className = classNames(styles40.Pip, column.isVisible && styles40["Pip-visible"]);
    return /* @__PURE__ */ React98.createElement("div", {
      className,
      key: `pip-${index}`
    });
  }), leftA11yLabel = i18n.translate("Polaris.DataTable.navAccessibilityLabel", {
    direction: "left"
  }), rightA11yLabel = i18n.translate("Polaris.DataTable.navAccessibilityLabel", {
    direction: "right"
  });
  return /* @__PURE__ */ React98.createElement("div", {
    className: styles40.Navigation,
    ref: setRef
  }, /* @__PURE__ */ React98.createElement(Button, {
    variant: "tertiary",
    icon: SvgChevronLeftIcon,
    disabled: isScrolledFarthestLeft,
    accessibilityLabel: leftA11yLabel,
    onClick: navigateTableLeft
  }), pipMarkup, /* @__PURE__ */ React98.createElement(Button, {
    variant: "tertiary",
    icon: SvgChevronRightIcon,
    disabled: isScrolledFarthestRight,
    accessibilityLabel: rightA11yLabel,
    onClick: navigateTableRight
  }));
}

// node_modules/@shopify/polaris/build/esm/components/DataTable/DataTable.js
var getRowClientHeights = (rows) => {
  let heights = [];
  return rows && rows.forEach((row) => {
    heights.push(row.clientHeight);
  }), heights;
}, DataTableInner = class extends PureComponent4 {
  constructor(...args) {
    super(...args), this.state = {
      condensed: !1,
      columnVisibilityData: [],
      isScrolledFarthestLeft: !0,
      isScrolledFarthestRight: !1,
      rowHovered: void 0
    }, this.dataTable = /* @__PURE__ */ createRef3(), this.scrollContainer = /* @__PURE__ */ createRef3(), this.table = /* @__PURE__ */ createRef3(), this.stickyTable = /* @__PURE__ */ createRef3(), this.stickyNav = null, this.headerNav = null, this.tableHeadings = [], this.stickyHeadings = [], this.tableHeadingWidths = [], this.stickyHeaderActive = !1, this.scrollStopTimer = null, this.handleResize = debounce(() => {
      let {
        table: {
          current: table
        },
        scrollContainer: {
          current: scrollContainer
        }
      } = this, condensed = !1;
      table && scrollContainer && (condensed = table.scrollWidth > scrollContainer.clientWidth + 1), this.setState({
        condensed,
        ...this.calculateColumnVisibilityData(condensed)
      });
    }), this.setCellRef = ({
      ref,
      index,
      inStickyHeader
    }) => {
      if (ref != null)
        if (inStickyHeader) {
          this.stickyHeadings[index] = ref;
          let button = ref.querySelector("button");
          if (button == null)
            return;
          button.addEventListener("focus", this.handleHeaderButtonFocus);
        } else
          this.tableHeadings[index] = ref, this.tableHeadingWidths[index] = ref.clientWidth;
    }, this.changeHeadingFocus = () => {
      let {
        tableHeadings,
        stickyHeadings,
        stickyNav,
        headerNav
      } = this, stickyFocusedItemIndex = stickyHeadings.findIndex((item) => item === document.activeElement?.parentElement), tableFocusedItemIndex = tableHeadings.findIndex((item) => item === document.activeElement?.parentElement), arrowsInStickyNav = stickyNav?.querySelectorAll("button"), arrowsInHeaderNav = headerNav?.querySelectorAll("button"), stickyFocusedNavIndex = -1;
      arrowsInStickyNav?.forEach((item, index) => {
        item === document.activeElement && (stickyFocusedNavIndex = index);
      });
      let headerFocusedNavIndex = -1;
      if (arrowsInHeaderNav?.forEach((item, index) => {
        item === document.activeElement && (headerFocusedNavIndex = index);
      }), stickyFocusedItemIndex < 0 && tableFocusedItemIndex < 0 && stickyFocusedNavIndex < 0 && headerFocusedNavIndex < 0)
        return null;
      let button;
      if (stickyFocusedItemIndex >= 0 ? button = tableHeadings[stickyFocusedItemIndex].querySelector("button") : tableFocusedItemIndex >= 0 && (button = stickyHeadings[tableFocusedItemIndex].querySelector("button")), stickyFocusedNavIndex >= 0 ? button = arrowsInHeaderNav?.[stickyFocusedNavIndex] : headerFocusedNavIndex >= 0 && (button = arrowsInStickyNav?.[headerFocusedNavIndex]), button == null)
        return null;
      button.style.visibility = "visible", button.focus(), button.style.removeProperty("visibility");
    }, this.calculateColumnVisibilityData = (condensed) => {
      let fixedFirstColumns = this.fixedFirstColumns(), {
        table: {
          current: table
        },
        scrollContainer: {
          current: scrollContainer
        },
        dataTable: {
          current: dataTable
        }
      } = this, {
        stickyHeader
      } = this.props;
      if ((stickyHeader || condensed) && table && scrollContainer && dataTable) {
        let headerCells = table.querySelectorAll(headerCell.selector), rightMostHeader = headerCells[fixedFirstColumns - 1], nthColumnWidth = fixedFirstColumns ? rightMostHeader.offsetLeft + rightMostHeader.offsetWidth : 0;
        if (headerCells.length > 0) {
          let firstVisibleColumnIndex = headerCells.length - 1, tableLeftVisibleEdge = scrollContainer.scrollLeft + nthColumnWidth, tableRightVisibleEdge = scrollContainer.scrollLeft + dataTable.offsetWidth, tableData = {
            firstVisibleColumnIndex,
            tableLeftVisibleEdge,
            tableRightVisibleEdge
          }, columnVisibilityData = [...headerCells].map(measureColumn(tableData)), lastColumn = columnVisibilityData[columnVisibilityData.length - 1], isScrolledFarthestLeft = fixedFirstColumns ? tableLeftVisibleEdge === nthColumnWidth : tableLeftVisibleEdge === 0;
          return {
            columnVisibilityData,
            ...getPrevAndCurrentColumns(tableData, columnVisibilityData),
            isScrolledFarthestLeft,
            isScrolledFarthestRight: lastColumn.rightEdge <= tableRightVisibleEdge
          };
        }
      }
      return {
        columnVisibilityData: [],
        previousColumn: void 0,
        currentColumn: void 0
      };
    }, this.handleHeaderButtonFocus = (event) => {
      let fixedFirstColumns = this.fixedFirstColumns();
      if (this.scrollContainer.current == null || event.target == null || this.state.columnVisibilityData.length === 0)
        return;
      let currentCell = event.target.parentNode, tableScrollLeft = this.scrollContainer.current.scrollLeft, tableViewableWidth = this.scrollContainer.current.offsetWidth, tableRightEdge = tableScrollLeft + tableViewableWidth, nthColumnWidth = this.state.columnVisibilityData.length > 0 ? this.state.columnVisibilityData[fixedFirstColumns]?.rightEdge : 0, currentColumnLeftEdge = currentCell.offsetLeft, currentColumnRightEdge = currentCell.offsetLeft + currentCell.offsetWidth;
      tableScrollLeft > currentColumnLeftEdge - nthColumnWidth && (this.scrollContainer.current.scrollLeft = currentColumnLeftEdge - nthColumnWidth), currentColumnRightEdge > tableRightEdge && (this.scrollContainer.current.scrollLeft = currentColumnRightEdge - tableViewableWidth);
    }, this.stickyHeaderScrolling = () => {
      let {
        current: stickyTable
      } = this.stickyTable, {
        current: scrollContainer
      } = this.scrollContainer;
      stickyTable == null || scrollContainer == null || (stickyTable.scrollLeft = scrollContainer.scrollLeft);
    }, this.scrollListener = () => {
      this.scrollStopTimer && clearTimeout(this.scrollStopTimer), this.scrollStopTimer = setTimeout(() => {
        this.setState((prevState) => ({
          ...this.calculateColumnVisibilityData(prevState.condensed)
        }));
      }, 100), this.setState({
        isScrolledFarthestLeft: this.scrollContainer.current?.scrollLeft === 0
      }), this.props.stickyHeader && this.stickyHeaderActive && this.stickyHeaderScrolling();
    }, this.handleHover = (row) => () => {
      this.setState({
        rowHovered: row
      });
    }, this.handleFocus = (event) => {
      let fixedFirstColumns = this.fixedFirstColumns();
      if (this.scrollContainer.current == null || event.target == null)
        return;
      let currentCell = event.target.parentNode, nthColumnWidth = this.props ? this.state.columnVisibilityData[fixedFirstColumns]?.rightEdge : 0, desiredScrollLeft = currentCell.offsetLeft - nthColumnWidth;
      this.scrollContainer.current.scrollLeft > desiredScrollLeft && (this.scrollContainer.current.scrollLeft = desiredScrollLeft);
    }, this.navigateTable = (direction) => {
      let fixedFirstColumns = this.fixedFirstColumns(), {
        currentColumn,
        previousColumn
      } = this.state, nthColumnWidth = this.state.columnVisibilityData[fixedFirstColumns - 1]?.rightEdge;
      if (!currentColumn || !previousColumn)
        return;
      let prevWidths = 0;
      for (let index = 0; index < currentColumn.index; index++)
        prevWidths += this.state.columnVisibilityData[index].width;
      let {
        current: scrollContainer
      } = this.scrollContainer;
      return () => {
        let newScrollLeft = 0;
        fixedFirstColumns ? newScrollLeft = direction === "right" ? prevWidths - nthColumnWidth + currentColumn.width : prevWidths - previousColumn.width - nthColumnWidth : newScrollLeft = direction === "right" ? currentColumn.rightEdge : previousColumn.leftEdge, scrollContainer && (scrollContainer.scrollLeft = newScrollLeft, requestAnimationFrame(() => {
          this.setState((prevState) => ({
            ...this.calculateColumnVisibilityData(prevState.condensed)
          }));
        }));
      };
    }, this.renderHeading = ({
      heading,
      headingIndex,
      inFixedNthColumn,
      inStickyHeader
    }) => {
      let {
        sortable,
        truncate = !1,
        columnContentTypes,
        defaultSortDirection,
        initialSortColumnIndex = 0,
        verticalAlign,
        firstColumnMinWidth
      } = this.props, fixedFirstColumns = this.fixedFirstColumns(), {
        sortDirection = defaultSortDirection,
        sortedColumnIndex = initialSortColumnIndex,
        isScrolledFarthestLeft
      } = this.state, sortableHeadingProps, headingCellId = `heading-cell-${headingIndex}`, stickyHeaderId = `stickyheader-${headingIndex}`, id = inStickyHeader ? stickyHeaderId : headingCellId;
      if (sortable) {
        let isSortable = sortable[headingIndex], isSorted = isSortable && sortedColumnIndex === headingIndex;
        sortableHeadingProps = {
          defaultSortDirection,
          sorted: isSorted,
          sortable: isSortable,
          sortDirection: isSorted ? sortDirection : "none",
          onSort: this.defaultOnSort(headingIndex),
          fixedNthColumn: fixedFirstColumns,
          inFixedNthColumn: fixedFirstColumns
        };
      }
      let stickyCellWidth = inStickyHeader ? this.tableHeadingWidths[headingIndex] : void 0, fixedCellVisible = !isScrolledFarthestLeft, cellProps = {
        header: !0,
        stickyHeadingCell: inStickyHeader,
        content: heading,
        contentType: columnContentTypes[headingIndex],
        nthColumn: headingIndex < fixedFirstColumns,
        fixedFirstColumns,
        truncate,
        headingIndex,
        ...sortableHeadingProps,
        verticalAlign,
        handleFocus: this.handleFocus,
        stickyCellWidth,
        fixedCellVisible,
        firstColumnMinWidth
      };
      return inFixedNthColumn && inStickyHeader ? [/* @__PURE__ */ React99.createElement(Cell, Object.assign({
        key: id
      }, cellProps, {
        setRef: (ref) => {
          this.setCellRef({
            ref,
            index: headingIndex,
            inStickyHeader
          });
        },
        inFixedNthColumn: !1
      })), /* @__PURE__ */ React99.createElement(Cell, Object.assign({
        key: `${id}-sticky`
      }, cellProps, {
        setRef: (ref) => {
          this.setCellRef({
            ref,
            index: headingIndex,
            inStickyHeader
          });
        },
        inFixedNthColumn: Boolean(fixedFirstColumns),
        lastFixedFirstColumn: headingIndex === fixedFirstColumns - 1,
        style: {
          left: this.state.columnVisibilityData[headingIndex]?.leftEdge
        }
      }))] : /* @__PURE__ */ React99.createElement(Cell, Object.assign({
        key: id
      }, cellProps, {
        setRef: (ref) => {
          this.setCellRef({
            ref,
            index: headingIndex,
            inStickyHeader
          });
        },
        lastFixedFirstColumn: headingIndex === fixedFirstColumns - 1,
        inFixedNthColumn
      }));
    }, this.totalsRowHeading = () => {
      let {
        i18n,
        totals,
        totalsName
      } = this.props, totalsLabel = totalsName || {
        singular: i18n.translate("Polaris.DataTable.totalRowHeading"),
        plural: i18n.translate("Polaris.DataTable.totalsRowHeading")
      };
      return totals && totals.filter((total) => total !== "").length > 1 ? totalsLabel.plural : totalsLabel.singular;
    }, this.renderTotals = ({
      total,
      index
    }) => {
      let fixedFirstColumns = this.fixedFirstColumns(), id = `totals-cell-${index}`, {
        truncate = !1,
        verticalAlign,
        columnContentTypes
      } = this.props, content, contentType;
      index === 0 && (content = this.totalsRowHeading()), total !== "" && index > 0 && (contentType = columnContentTypes[index], content = total);
      let totalInFooter = this.props.showTotalsInFooter;
      return /* @__PURE__ */ React99.createElement(Cell, {
        total: !0,
        totalInFooter,
        nthColumn: index <= fixedFirstColumns - 1,
        firstColumn: index === 0,
        key: id,
        content,
        contentType,
        truncate,
        verticalAlign
      });
    }, this.getColSpan = (rowLength, headingsLength, contentTypesLength, cellIndex) => {
      if (this.fixedFirstColumns())
        return 1;
      let rowLen = rowLength || 1, colLen = headingsLength || contentTypesLength, colSpan = Math.floor(colLen / rowLen), remainder = colLen % rowLen;
      return cellIndex === 0 ? colSpan + remainder : colSpan;
    }, this.defaultRenderRow = ({
      row,
      index,
      inFixedNthColumn,
      rowHeights
    }) => {
      let {
        columnContentTypes,
        truncate = !1,
        verticalAlign,
        hoverable = !0,
        headings
      } = this.props, {
        condensed
      } = this.state, fixedFirstColumns = this.fixedFirstColumns(), className = classNames(styles40.TableRow, hoverable && styles40.hoverable);
      return /* @__PURE__ */ React99.createElement("tr", {
        key: `row-${index}`,
        className,
        onMouseEnter: this.handleHover(index),
        onMouseLeave: this.handleHover()
      }, row.map((content, cellIndex) => {
        let hovered = index === this.state.rowHovered, id = `cell-${cellIndex}-row-${index}`, colSpan = this.getColSpan(row.length, headings.length, columnContentTypes.length, cellIndex);
        return /* @__PURE__ */ React99.createElement(Cell, {
          key: id,
          content,
          contentType: columnContentTypes[cellIndex],
          nthColumn: cellIndex <= fixedFirstColumns - 1,
          firstColumn: cellIndex === 0,
          truncate,
          verticalAlign,
          colSpan,
          hovered,
          style: rowHeights ? {
            height: `${rowHeights[index]}px`
          } : {},
          inFixedNthColumn: condensed && inFixedNthColumn
        });
      }));
    }, this.defaultOnSort = (headingIndex) => {
      let {
        onSort,
        defaultSortDirection = "ascending",
        initialSortColumnIndex
      } = this.props, {
        sortDirection = defaultSortDirection,
        sortedColumnIndex = initialSortColumnIndex
      } = this.state, newSortDirection = defaultSortDirection;
      return sortedColumnIndex === headingIndex && (newSortDirection = sortDirection === "ascending" ? "descending" : "ascending"), () => {
        this.setState({
          sortDirection: newSortDirection,
          sortedColumnIndex: headingIndex
        }, () => {
          onSort && onSort(headingIndex, newSortDirection);
        });
      };
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.handleResize();
    }, 10);
  }
  componentDidUpdate(prevProps) {
    isEqual(prevProps, this.props) || this.handleResize();
  }
  componentWillUnmount() {
    this.handleResize.cancel();
  }
  render() {
    let {
      headings,
      totals,
      showTotalsInFooter,
      rows,
      footerContent,
      hideScrollIndicator = !1,
      increasedTableDensity = !1,
      hasZebraStripingOnData = !1,
      stickyHeader = !1,
      hasFixedFirstColumn: fixedFirstColumn = !1,
      pagination
    } = this.props, {
      condensed,
      columnVisibilityData,
      isScrolledFarthestLeft,
      isScrolledFarthestRight
    } = this.state;
    fixedFirstColumn && console.warn("Deprecation: The `hasFixedFirstColumn` prop on the `DataTable` has been deprecated. Use fixedFirstColumns={n} instead.");
    let fixedFirstColumns = this.fixedFirstColumns(), rowCountIsEven = rows.length % 2 === 0, className = classNames(styles40.DataTable, condensed && styles40.condensed, totals && styles40.ShowTotals, showTotalsInFooter && styles40.ShowTotalsInFooter, hasZebraStripingOnData && styles40.ZebraStripingOnData, hasZebraStripingOnData && rowCountIsEven && styles40.RowCountIsEven), wrapperClassName = classNames(styles40.TableWrapper, condensed && styles40.condensed, increasedTableDensity && styles40.IncreasedTableDensity, stickyHeader && styles40.StickyHeaderEnabled), headingMarkup = /* @__PURE__ */ React99.createElement("tr", null, headings.map((heading, index) => this.renderHeading({
      heading,
      headingIndex: index,
      inFixedNthColumn: !1,
      inStickyHeader: !1
    }))), totalsMarkup = totals ? /* @__PURE__ */ React99.createElement("tr", null, totals.map((total, index) => this.renderTotals({
      total,
      index
    }))) : null, nthColumns = rows.map((row) => row.slice(0, fixedFirstColumns)), nthHeadings = headings.slice(0, fixedFirstColumns), nthTotals = totals?.slice(0, fixedFirstColumns), tableHeaderRows = this.table.current?.children[0].childNodes, tableBodyRows = this.table.current?.children[1].childNodes, headerRowHeights = getRowClientHeights(tableHeaderRows), bodyRowHeights = getRowClientHeights(tableBodyRows), fixedNthColumnMarkup = condensed && fixedFirstColumns !== 0 && /* @__PURE__ */ React99.createElement("table", {
      className: classNames(styles40.FixedFirstColumn, !isScrolledFarthestLeft && styles40.separate),
      style: {
        width: `${columnVisibilityData[fixedFirstColumns - 1]?.rightEdge}px`
      }
    }, /* @__PURE__ */ React99.createElement("thead", null, /* @__PURE__ */ React99.createElement("tr", {
      style: {
        height: `${headerRowHeights[0]}px`
      }
    }, nthHeadings.map((heading, index) => this.renderHeading({
      heading,
      headingIndex: index,
      inFixedNthColumn: !0,
      inStickyHeader: !1
    }))), totals && !showTotalsInFooter && /* @__PURE__ */ React99.createElement("tr", {
      style: {
        height: `${headerRowHeights[1]}px`
      }
    }, nthTotals?.map((total, index) => this.renderTotals({
      total,
      index
    })))), /* @__PURE__ */ React99.createElement("tbody", null, nthColumns.map((row, index) => this.defaultRenderRow({
      row,
      index,
      inFixedNthColumn: !0,
      rowHeights: bodyRowHeights
    }))), totals && showTotalsInFooter && /* @__PURE__ */ React99.createElement("tfoot", null, /* @__PURE__ */ React99.createElement("tr", null, nthTotals?.map((total, index) => this.renderTotals({
      total,
      index
    }))))), bodyMarkup = rows.map((row, index) => this.defaultRenderRow({
      row,
      index,
      inFixedNthColumn: !1
    })), footerMarkup = footerContent ? /* @__PURE__ */ React99.createElement("div", {
      className: styles40.Footer
    }, footerContent) : null, paginationMarkup = pagination ? /* @__PURE__ */ React99.createElement(Pagination, Object.assign({
      type: "table"
    }, pagination)) : null, headerTotalsMarkup = showTotalsInFooter ? null : totalsMarkup, footerTotalsMarkup = showTotalsInFooter ? /* @__PURE__ */ React99.createElement("tfoot", null, totalsMarkup) : null, navigationMarkup = (location2) => hideScrollIndicator ? null : /* @__PURE__ */ React99.createElement(Navigation, {
      columnVisibilityData,
      isScrolledFarthestLeft,
      isScrolledFarthestRight,
      navigateTableLeft: this.navigateTable("left"),
      navigateTableRight: this.navigateTable("right"),
      fixedFirstColumns,
      setRef: (ref) => {
        location2 === "header" ? this.headerNav = ref : location2 === "sticky" && (this.stickyNav = ref);
      }
    }), stickyHeaderMarkup = stickyHeader ? /* @__PURE__ */ React99.createElement(AfterInitialMount, null, /* @__PURE__ */ React99.createElement("div", {
      className: styles40.StickyHeaderWrapper,
      role: "presentation"
    }, /* @__PURE__ */ React99.createElement(Sticky, {
      boundingElement: this.dataTable.current,
      onStickyChange: (isSticky) => {
        this.changeHeadingFocus(), this.stickyHeaderActive = isSticky;
      }
    }, (isSticky) => {
      let stickyHeaderInnerClassNames = classNames(styles40.StickyHeaderInner, isSticky && styles40["StickyHeaderInner-isSticky"]), stickyHeaderTableClassNames = classNames(styles40.StickyHeaderTable, !isScrolledFarthestLeft && styles40.separate);
      return /* @__PURE__ */ React99.createElement("div", {
        className: stickyHeaderInnerClassNames
      }, /* @__PURE__ */ React99.createElement("div", null, navigationMarkup("sticky")), /* @__PURE__ */ React99.createElement("table", {
        className: stickyHeaderTableClassNames,
        ref: this.stickyTable
      }, /* @__PURE__ */ React99.createElement("thead", null, /* @__PURE__ */ React99.createElement("tr", {
        className: styles40.StickyTableHeadingsRow
      }, headings.map((heading, index) => this.renderHeading({
        heading,
        headingIndex: index,
        inFixedNthColumn: Boolean(index <= fixedFirstColumns - 1 && fixedFirstColumns),
        inStickyHeader: !0
      }))))));
    }))) : null;
    return /* @__PURE__ */ React99.createElement("div", {
      className: wrapperClassName,
      ref: this.dataTable
    }, stickyHeaderMarkup, navigationMarkup("header"), /* @__PURE__ */ React99.createElement("div", {
      className
    }, /* @__PURE__ */ React99.createElement("div", {
      className: styles40.ScrollContainer,
      ref: this.scrollContainer
    }, /* @__PURE__ */ React99.createElement(EventListener, {
      event: "resize",
      handler: this.handleResize
    }), /* @__PURE__ */ React99.createElement(EventListener, {
      capture: !0,
      passive: !0,
      event: "scroll",
      handler: this.scrollListener
    }), fixedNthColumnMarkup, /* @__PURE__ */ React99.createElement("table", {
      className: styles40.Table,
      ref: this.table
    }, /* @__PURE__ */ React99.createElement("thead", null, headingMarkup, headerTotalsMarkup), /* @__PURE__ */ React99.createElement("tbody", null, bodyMarkup), footerTotalsMarkup)), paginationMarkup, footerMarkup));
  }
  fixedFirstColumns() {
    let {
      hasFixedFirstColumn,
      fixedFirstColumns = 0,
      headings
    } = this.props, numberOfFixedFirstColumns = hasFixedFirstColumn && !fixedFirstColumns ? 1 : fixedFirstColumns;
    return numberOfFixedFirstColumns >= headings.length ? 0 : numberOfFixedFirstColumns;
  }
  // eslint-disable-next-line @shopify/react-no-multiple-render-methods
  // eslint-disable-next-line @shopify/react-no-multiple-render-methods
};
function DataTable(props) {
  let i18n = useI18n();
  return /* @__PURE__ */ React99.createElement(DataTableInner, Object.assign({}, props, {
    i18n
  }));
}

// node_modules/@shopify/polaris/build/esm/components/EmptySearchResult/EmptySearchResult.js
import React100 from "react";

// node_modules/@shopify/polaris/build/esm/components/EmptySearchResult/illustrations/empty-search.svg.js
var img = "data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M41.87 24a17.87 17.87 0 11-35.74 0 17.87 17.87 0 0135.74 0zm-3.15 18.96a24 24 0 114.24-4.24L59.04 54.8a3 3 0 11-4.24 4.24L38.72 42.96z' fill='%238C9196'/%3e%3c/svg%3e", emptySearch = img;

// node_modules/@shopify/polaris/build/esm/components/EmptySearchResult/EmptySearchResult.js
function EmptySearchResult({
  title,
  description,
  withIllustration
}) {
  let altText = useI18n().translate("Polaris.EmptySearchResult.altText"), descriptionMarkup = description ? /* @__PURE__ */ React100.createElement("p", null, description) : null, illustrationMarkup = withIllustration ? /* @__PURE__ */ React100.createElement(Image, {
    alt: altText,
    source: emptySearch,
    draggable: !1
  }) : null;
  return /* @__PURE__ */ React100.createElement(LegacyStack, {
    alignment: "center",
    vertical: !0
  }, illustrationMarkup, /* @__PURE__ */ React100.createElement(Text, {
    variant: "headingLg",
    as: "p"
  }, title), /* @__PURE__ */ React100.createElement(Text, {
    tone: "subdued",
    as: "span"
  }, descriptionMarkup));
}

// node_modules/@shopify/polaris/build/esm/components/Filters/Filters.js
import React105 from "react";

// node_modules/@shopify/polaris/build/esm/components/Filters/Filters.css.js
var styles42 = {
  Container: "Polaris-Filters__Container",
  SearchField: "Polaris-Filters__SearchField",
  FiltersWrapper: "Polaris-Filters__FiltersWrapper",
  hideQueryField: "Polaris-Filters--hideQueryField",
  FiltersInner: "Polaris-Filters__FiltersInner",
  AddFilter: "Polaris-Filters__AddFilter",
  FiltersWrapperWithAddButton: "Polaris-Filters__FiltersWrapperWithAddButton",
  AddFilterActivatorMultiple: "Polaris-Filters__AddFilterActivatorMultiple",
  FiltersStickyArea: "Polaris-Filters__FiltersStickyArea",
  ClearAll: "Polaris-Filters__ClearAll",
  MultiplePinnedFilterClearAll: "Polaris-Filters__MultiplePinnedFilterClearAll"
};

// node_modules/@shopify/polaris/build/esm/components/Filters/components/SearchField/SearchField.js
import React101, { useId as useId7 } from "react";
function SearchField({
  onChange,
  onClear,
  onFocus,
  onBlur,
  focused,
  value,
  placeholder,
  disabled,
  borderlessQueryField,
  loading,
  selectedViewName
}) {
  let i18n = useI18n(), id = useId7(), {
    mdUp
  } = useBreakpoints(), suffix = value && selectedViewName && mdUp ? /* @__PURE__ */ React101.createElement(Text, {
    as: "span",
    variant: "bodyMd",
    tone: "subdued"
  }, i18n.translate("Polaris.Filters.searchInView", {
    viewName: selectedViewName
  })) : null;
  function handleChange(eventValue) {
    onChange(eventValue ?? value);
  }
  function handleClear() {
    onClear ? onClear() : onChange("");
  }
  return /* @__PURE__ */ React101.createElement(TextField, {
    id,
    value,
    onChange: handleChange,
    onFocus,
    onBlur,
    onClearButtonClick: handleClear,
    autoComplete: "off",
    placeholder,
    disabled,
    variant: borderlessQueryField ? "borderless" : "inherit",
    size: "slim",
    prefix: mdUp ? /* @__PURE__ */ React101.createElement(Icon, {
      source: SvgSearchIcon
    }) : void 0,
    suffix,
    focused,
    label: placeholder,
    labelHidden: !0,
    clearButton: !0,
    autoSize: Boolean(suffix),
    loading
  });
}

// node_modules/@shopify/polaris/build/esm/components/Filters/components/FiltersBar/FiltersBar.js
import React104, { useState as useState18, useRef as useRef23, useEffect as useEffect23 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/use-on-value-change.js
import React102, { useEffect as useEffect21 } from "react";
function useOnValueChange(value, onChange) {
  let tracked = React102.useRef(value);
  useEffect21(() => {
    let oldValue = tracked.current;
    value !== tracked.current && (tracked.current = value, onChange(value, oldValue));
  }, [value, onChange]);
}

// node_modules/@shopify/polaris/build/esm/components/Filters/components/FilterPill/FilterPill.js
import React103, { useRef as useRef22, useState as useState17, useEffect as useEffect22, useCallback as useCallback20 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Filters/components/FilterPill/FilterPill.css.js
var styles43 = {
  FilterButton: "Polaris-Filters-FilterPill__FilterButton",
  focusedFilterButton: "Polaris-Filters-FilterPill--focusedFilterButton",
  ActiveFilterButton: "Polaris-Filters-FilterPill__ActiveFilterButton",
  PlainButton: "Polaris-Filters-FilterPill__PlainButton",
  ToggleButton: "Polaris-Filters-FilterPill__ToggleButton",
  clearButton: "Polaris-Filters-FilterPill--clearButton",
  IconWrapper: "Polaris-Filters-FilterPill__IconWrapper",
  PopoverWrapper: "Polaris-Filters-FilterPill__PopoverWrapper",
  ClearButtonWrapper: "Polaris-Filters-FilterPill__ClearButtonWrapper"
};

// node_modules/@shopify/polaris/build/esm/components/Filters/components/FilterPill/FilterPill.js
function FilterPill({
  unsavedChanges = !1,
  filterKey,
  label,
  filter,
  disabled,
  hideClearButton,
  selected,
  initialActive,
  closeOnChildOverlayClick,
  onRemove,
  onClick
}) {
  let i18n = useI18n(), elementRef = useRef22(null), {
    value: focused,
    setTrue: setFocusedTrue,
    setFalse: setFocusedFalse
  } = useToggle(!1), [popoverActive, setPopoverActive] = useState17(initialActive);
  useEffect22(() => {
    let node = elementRef.current;
    if (!node || !popoverActive)
      return;
    let parent = node.parentElement?.parentElement;
    parent && parent.scroll?.({
      left: node.offsetLeft
    });
  }, [elementRef, popoverActive]);
  let togglePopoverActive = useCallback20(() => {
    filter && setPopoverActive((popoverActive2) => !popoverActive2), onClick && onClick(filterKey);
  }, [filter, filterKey, onClick]), handlePopoverClose = useCallback20(() => {
    togglePopoverActive(), selected || onRemove?.(filterKey);
  }, [onRemove, selected, filterKey, togglePopoverActive]), handleClear = () => {
    onRemove && onRemove(filterKey), setPopoverActive(!1);
  }, buttonClasses = classNames(styles43.FilterButton, selected && styles43.ActiveFilterButton, popoverActive && styles43.FocusFilterButton, focused && styles43.focusedFilterButton), clearButtonClassNames = classNames(styles43.PlainButton, styles43.clearButton), toggleButtonClassNames = classNames(styles43.PlainButton, styles43.ToggleButton), disclosureMarkup = selected ? null : /* @__PURE__ */ React103.createElement("div", {
    className: styles43.IconWrapper
  }, /* @__PURE__ */ React103.createElement(Icon, {
    source: SvgChevronDownIcon,
    tone: "base"
  })), labelMarkup = /* @__PURE__ */ React103.createElement(Box, {
    paddingInlineStart: unsavedChanges ? "0" : "050"
  }, /* @__PURE__ */ React103.createElement(InlineStack, null, /* @__PURE__ */ React103.createElement(Text, {
    variant: "bodySm",
    as: "span"
  }, label))), unsavedPip = unsavedChanges ? /* @__PURE__ */ React103.createElement(Box, {
    paddingInlineEnd: "150"
  }, /* @__PURE__ */ React103.createElement(Box, {
    background: "bg-fill-emphasis",
    borderRadius: "050",
    width: "6px",
    minHeight: "6px"
  })) : null, removeFilterButtonMarkup = selected ? /* @__PURE__ */ React103.createElement(UnstyledButton, {
    onClick: handleClear,
    className: clearButtonClassNames,
    type: "button",
    "aria-label": i18n.translate("Polaris.FilterPill.clear")
  }, /* @__PURE__ */ React103.createElement("div", {
    className: styles43.IconWrapper
  }, /* @__PURE__ */ React103.createElement(Icon, {
    source: SvgXSmallIcon,
    tone: "base"
  }))) : null, activator = /* @__PURE__ */ React103.createElement("div", {
    className: buttonClasses
  }, /* @__PURE__ */ React103.createElement(InlineStack, {
    gap: "0",
    wrap: !1
  }, /* @__PURE__ */ React103.createElement(UnstyledButton, {
    onFocus: setFocusedTrue,
    onBlur: setFocusedFalse,
    onClick: togglePopoverActive,
    className: toggleButtonClassNames,
    type: "button",
    accessibilityLabel: unsavedChanges ? i18n.translate("Polaris.FilterPill.unsavedChanges", {
      label
    }) : label
  }, /* @__PURE__ */ React103.createElement(InlineStack, {
    wrap: !1,
    align: "center",
    blockAlign: "center",
    gap: "0"
  }, unsavedPip, labelMarkup, disclosureMarkup)), removeFilterButtonMarkup)), clearButtonMarkup = !hideClearButton && /* @__PURE__ */ React103.createElement("div", {
    className: styles43.ClearButtonWrapper
  }, /* @__PURE__ */ React103.createElement(Button, {
    onClick: handleClear,
    variant: "plain",
    disabled: !selected,
    textAlign: "left"
  }, i18n.translate("Polaris.FilterPill.clear")));
  return disabled ? null : /* @__PURE__ */ React103.createElement("div", {
    ref: elementRef
  }, /* @__PURE__ */ React103.createElement(Popover2, {
    active: popoverActive,
    activator,
    key: filterKey,
    onClose: handlePopoverClose,
    preferredAlignment: "left",
    preventCloseOnChildOverlayClick: !closeOnChildOverlayClick
  }, /* @__PURE__ */ React103.createElement("div", {
    className: styles43.PopoverWrapper
  }, /* @__PURE__ */ React103.createElement(Popover2.Section, null, /* @__PURE__ */ React103.createElement(BlockStack, {
    gap: "100"
  }, filter, clearButtonMarkup)))));
}

// node_modules/@shopify/polaris/build/esm/components/Filters/components/FiltersBar/FiltersBar.js
function FiltersBar({
  filters,
  appliedFilters,
  onClearAll,
  disabled,
  hideQueryField,
  disableFilters,
  mountedStateStyles,
  onAddFilterClick,
  closeOnChildOverlayClick,
  children
}) {
  let i18n = useI18n(), [popoverActive, setPopoverActive] = useState18(!1), hasMounted = useRef23(!1);
  useEffect23(() => {
    hasMounted.current = !0;
  });
  let togglePopoverActive = () => setPopoverActive((popoverActive2) => !popoverActive2), handleAddFilterClick = () => {
    onAddFilterClick?.(), togglePopoverActive();
  }, appliedFilterKeys = appliedFilters?.map(({
    key
  }) => key), pinnedFromPropsKeys = filters.filter(({
    pinned
  }) => pinned).map(({
    key
  }) => key), pinnedFiltersFromPropsAndAppliedFilters = filters.filter(({
    pinned,
    key
  }) => Boolean(pinned) || appliedFilterKeys?.includes(key)), [localPinnedFilters, setLocalPinnedFilters] = useState18(pinnedFiltersFromPropsAndAppliedFilters.map(({
    key
  }) => key));
  useOnValueChange(filters.length, () => {
    setLocalPinnedFilters(pinnedFiltersFromPropsAndAppliedFilters.map(({
      key
    }) => key));
  });
  let pinnedFilters = localPinnedFilters.map((key) => filters.find((filter) => filter.key === key)).reduce((acc, filter) => filter ? [...acc, filter] : acc, []), onFilterClick = ({
    key,
    onAction
  }) => () => {
    setTimeout(() => {
      setLocalPinnedFilters((currentLocalPinnedFilters) => [.../* @__PURE__ */ new Set([...currentLocalPinnedFilters, key])]), onAction?.(), togglePopoverActive();
    }, 0);
  }, filterToActionItem = (filter) => ({
    ...filter,
    content: filter.label,
    onAction: onFilterClick(filter)
  }), unpinnedFilters = filters.filter((filter) => !pinnedFilters.some(({
    key
  }) => key === filter.key)), unsectionedFilters = unpinnedFilters.filter((filter) => !filter.section && !filter.hidden).map(filterToActionItem), sectionedFilters = unpinnedFilters.filter((filter) => filter.section).reduce((acc, filter) => {
    let filterActionItem = filterToActionItem(filter), sectionIndex = acc.findIndex((section) => section.title === filter.section);
    return sectionIndex === -1 ? acc.push({
      title: filter.section,
      items: [filterActionItem]
    }) : acc[sectionIndex].items.push(filterActionItem), acc;
  }, []), hasOneOrMorePinnedFilters = pinnedFilters.length >= 1, addFilterActivator = /* @__PURE__ */ React104.createElement("div", null, /* @__PURE__ */ React104.createElement(UnstyledButton, {
    type: "button",
    className: styles42.AddFilter,
    onClick: handleAddFilterClick,
    "aria-label": i18n.translate("Polaris.Filters.addFilter"),
    disabled: disabled || unsectionedFilters.length === 0 && sectionedFilters.length === 0 || disableFilters
  }, /* @__PURE__ */ React104.createElement(Text, {
    as: "span",
    variant: "bodySm",
    tone: disabled ? "disabled" : "base"
  }, i18n.translate("Polaris.Filters.addFilter"), " "), /* @__PURE__ */ React104.createElement(SvgPlusIcon, null))), handleClearAllFilters = () => {
    setLocalPinnedFilters(pinnedFromPropsKeys), onClearAll?.();
  }, shouldShowAddButton = filters.some((filter) => !filter.pinned) || filters.length !== localPinnedFilters.length, pinnedFiltersMarkup = pinnedFilters.map(({
    key: filterKey,
    ...pinnedFilter
  }) => {
    let appliedFilter = appliedFilters?.find(({
      key
    }) => key === filterKey), handleFilterPillRemove = () => {
      setLocalPinnedFilters((currentLocalPinnedFilters) => currentLocalPinnedFilters.filter((key) => {
        let isMatchedFilters = key === filterKey, isPinnedFilterFromProps = pinnedFromPropsKeys.includes(key);
        return !isMatchedFilters || isPinnedFilterFromProps;
      })), appliedFilter?.onRemove(filterKey);
    };
    return /* @__PURE__ */ React104.createElement(FilterPill, Object.assign({
      key: filterKey
    }, pinnedFilter, {
      initialActive: hasMounted.current && !pinnedFilter.pinned && !appliedFilter,
      unsavedChanges: appliedFilter?.unsavedChanges,
      label: appliedFilter?.label || pinnedFilter.label,
      filterKey,
      selected: appliedFilterKeys?.includes(filterKey),
      onRemove: handleFilterPillRemove,
      disabled: pinnedFilter.disabled || disableFilters,
      closeOnChildOverlayClick
    }));
  }), addButton = shouldShowAddButton ? /* @__PURE__ */ React104.createElement("div", {
    className: classNames(styles42.AddFilterActivator, hasOneOrMorePinnedFilters && styles42.AddFilterActivatorMultiple)
  }, /* @__PURE__ */ React104.createElement(Popover2, {
    active: popoverActive && !disabled,
    activator: addFilterActivator,
    onClose: togglePopoverActive
  }, /* @__PURE__ */ React104.createElement(ActionList, {
    actionRole: "menuitem",
    items: unsectionedFilters,
    sections: sectionedFilters
  }))) : null, clearAllMarkup = appliedFilters?.length ? /* @__PURE__ */ React104.createElement("div", {
    className: classNames(styles42.ClearAll, hasOneOrMorePinnedFilters && shouldShowAddButton && styles42.MultiplePinnedFilterClearAll)
  }, /* @__PURE__ */ React104.createElement(Button, {
    size: "micro",
    onClick: handleClearAllFilters,
    variant: "monochromePlain"
  }, i18n.translate("Polaris.Filters.clearFilters"))) : null;
  return /* @__PURE__ */ React104.createElement("div", {
    className: classNames(styles42.FiltersWrapper, shouldShowAddButton && hasOneOrMorePinnedFilters && styles42.FiltersWrapperWithAddButton),
    "aria-live": "polite",
    style: mountedStateStyles
  }, /* @__PURE__ */ React104.createElement("div", {
    className: classNames(styles42.FiltersInner)
  }, /* @__PURE__ */ React104.createElement("div", {
    className: classNames(styles42.FiltersStickyArea)
  }, pinnedFiltersMarkup, addButton, clearAllMarkup)), hideQueryField ? /* @__PURE__ */ React104.createElement(Box, {
    paddingInlineEnd: "300",
    paddingBlockStart: "200",
    paddingBlockEnd: "200"
  }, /* @__PURE__ */ React104.createElement(InlineStack, {
    align: "start",
    blockAlign: "center",
    gap: {
      xs: "400",
      md: "300"
    }
  }, children)) : null);
}

// node_modules/@shopify/polaris/build/esm/components/Filters/Filters.js
var TRANSITION_DURATION = "var(--p-motion-duration-150)", TRANSITION_MARGIN = "-36px", defaultStyle = {
  transition: `opacity ${TRANSITION_DURATION} var(--p-motion-ease)`,
  opacity: 0
}, transitionStyles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  },
  unmounted: {
    opacity: 0
  }
}, defaultFilterStyles = {
  transition: `opacity ${TRANSITION_DURATION} var(--p-motion-ease), margin ${TRANSITION_DURATION} var(--p-motion-ease)`,
  opacity: 0,
  marginTop: TRANSITION_MARGIN
}, transitionFilterStyles = {
  entering: {
    opacity: 1,
    marginTop: 0
  },
  entered: {
    opacity: 1,
    marginTop: 0
  },
  exiting: {
    opacity: 0,
    marginTop: TRANSITION_MARGIN
  },
  exited: {
    opacity: 0,
    marginTop: TRANSITION_MARGIN
  },
  unmounted: {
    opacity: 0,
    marginTop: TRANSITION_MARGIN
  }
};
function Filters({
  queryValue,
  queryPlaceholder,
  focused,
  filters,
  appliedFilters,
  onQueryChange,
  onQueryClear,
  onQueryBlur,
  onQueryFocus,
  onClearAll,
  children,
  disabled,
  hideFilters,
  hideQueryField,
  disableQueryField,
  borderlessQueryField,
  loading,
  disableFilters,
  mountedState,
  onAddFilterClick,
  closeOnChildOverlayClick,
  selectedViewName
}) {
  let hideFilterBar = hideFilters || filters.length === 0, queryFieldMarkup = hideQueryField ? null : /* @__PURE__ */ React105.createElement("div", {
    className: styles42.Container
  }, /* @__PURE__ */ React105.createElement(Box, {
    padding: "200"
  }, /* @__PURE__ */ React105.createElement(InlineStack, {
    align: "start",
    blockAlign: "center",
    gap: {
      xs: "400",
      md: "300"
    }
  }, /* @__PURE__ */ React105.createElement("div", {
    className: styles42.SearchField,
    style: mountedState ? {
      ...defaultStyle,
      ...transitionStyles[mountedState]
    } : void 0
  }, /* @__PURE__ */ React105.createElement(SearchField, {
    onChange: onQueryChange,
    onFocus: onQueryFocus,
    onBlur: onQueryBlur,
    onClear: onQueryClear,
    value: queryValue,
    placeholder: queryPlaceholder,
    focused,
    disabled: disabled || disableQueryField,
    borderlessQueryField,
    loading,
    selectedViewName
  })), children))), mountedStateStyles = mountedState && !hideQueryField ? {
    ...defaultFilterStyles,
    ...transitionFilterStyles[mountedState]
  } : void 0, filtersMarkup = hideFilterBar ? null : /* @__PURE__ */ React105.createElement(FiltersBar, {
    filters,
    appliedFilters,
    onClearAll,
    disabled,
    hideQueryField,
    disableFilters,
    onAddFilterClick,
    closeOnChildOverlayClick,
    mountedStateStyles
  }, children);
  return /* @__PURE__ */ React105.createElement("div", {
    className: classNames(styles42.Filters, hideQueryField && styles42.hideQueryField)
  }, queryFieldMarkup, filtersMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Focus/Focus.js
import React106, { memo as memo3, useEffect as useEffect24 } from "react";
var Focus = /* @__PURE__ */ memo3(function({
  children,
  disabled,
  root
}) {
  return useEffect24(() => {
    if (disabled || !root)
      return;
    let node = isRef(root) ? root.current : root;
    !node || node.querySelector("[autofocus]") || focusFirstFocusableNode(node, !1);
  }, [disabled, root]), /* @__PURE__ */ React106.createElement(React106.Fragment, null, children);
});
function isRef(ref) {
  return ref.current !== void 0;
}

// node_modules/@shopify/polaris/build/esm/components/Form/Form.js
import React107, { useCallback as useCallback21 } from "react";
function Form({
  acceptCharset,
  action,
  autoComplete,
  children,
  encType,
  implicitSubmit = !0,
  method = "post",
  name,
  noValidate,
  preventDefault: preventDefault2 = !0,
  target,
  onSubmit
}) {
  let i18n = useI18n(), handleSubmit = useCallback21((event) => {
    preventDefault2 && (event.preventDefault(), onSubmit(event));
  }, [onSubmit, preventDefault2]), autoCompleteInputs = normalizeAutoComplete(autoComplete), submitMarkup = implicitSubmit ? /* @__PURE__ */ React107.createElement(Text, {
    as: "span",
    visuallyHidden: !0
  }, /* @__PURE__ */ React107.createElement("button", {
    type: "submit",
    "aria-hidden": "true",
    tabIndex: -1
  }, i18n.translate("Polaris.Common.submit"))) : null;
  return /* @__PURE__ */ React107.createElement("form", {
    acceptCharset,
    action,
    autoComplete: autoCompleteInputs,
    encType,
    method,
    name,
    noValidate,
    target,
    onSubmit: handleSubmit
  }, submitMarkup, children);
}
function normalizeAutoComplete(autoComplete) {
  return autoComplete == null ? autoComplete : autoComplete ? "on" : "off";
}

// node_modules/@shopify/polaris/build/esm/components/FormLayout/FormLayout.js
import React110, { memo as memo4, Children as Children5 } from "react";

// node_modules/@shopify/polaris/build/esm/components/FormLayout/components/Group/Group.js
import React109, { useId as useId8, Children as Children4 } from "react";

// node_modules/@shopify/polaris/build/esm/components/FormLayout/components/Item/Item.js
import React108 from "react";

// node_modules/@shopify/polaris/build/esm/components/FormLayout/FormLayout.css.js
var styles44 = {
  Item: "Polaris-FormLayout__Item",
  grouped: "Polaris-FormLayout--grouped",
  condensed: "Polaris-FormLayout--condensed"
};

// node_modules/@shopify/polaris/build/esm/components/FormLayout/components/Item/Item.js
function Item5({
  children,
  condensed = !1
}) {
  let className = classNames(styles44.Item, condensed ? styles44.condensed : styles44.grouped);
  return children ? /* @__PURE__ */ React108.createElement("div", {
    className
  }, children) : null;
}

// node_modules/@shopify/polaris/build/esm/components/FormLayout/components/Group/Group.js
function Group({
  children,
  condensed,
  title,
  helpText
}) {
  let id = useId8(), helpTextElement = null, helpTextId, titleElement = null, titleId;
  helpText && (helpTextId = `${id}HelpText`, helpTextElement = /* @__PURE__ */ React109.createElement(Box, {
    id: helpTextId,
    color: "text-secondary"
  }, helpText)), title && (titleId = `${id}Title`, titleElement = /* @__PURE__ */ React109.createElement(Text, {
    id: titleId,
    as: "p"
  }, title));
  let itemsMarkup = Children4.map(children, (child) => wrapWithComponent(child, Item5, {
    condensed
  }));
  return /* @__PURE__ */ React109.createElement(BlockStack, {
    role: "group",
    gap: "200",
    "aria-labelledby": titleId,
    "aria-describedby": helpTextId
  }, titleElement, /* @__PURE__ */ React109.createElement(InlineStack, {
    gap: "300"
  }, itemsMarkup), helpTextElement);
}

// node_modules/@shopify/polaris/build/esm/components/FormLayout/FormLayout.js
var FormLayout = /* @__PURE__ */ memo4(function({
  children
}) {
  return /* @__PURE__ */ React110.createElement(BlockStack, {
    gap: "400"
  }, Children5.map(children, wrapChildren));
});
FormLayout.Group = Group;
function wrapChildren(child, index) {
  return isElementOfType(child, Group) ? child : wrapWithComponent(child, Item5, {
    key: index
  });
}

// node_modules/@shopify/polaris/build/esm/components/Frame/Frame.js
import React124, { PureComponent as PureComponent5, createRef as createRef5 } from "react";
import { CSSTransition as CSSTransition3 } from "react-transition-group";

// node_modules/@shopify/polaris/build/esm/utilities/set-root-property.js
function setRootProperty(name, value, node) {
  if (!document)
    return;
  (node || document.documentElement).style.setProperty(name, value);
}

// node_modules/@shopify/polaris/build/esm/components/Frame/Frame.css.js
var styles45 = {
  Frame: "Polaris-Frame",
  Navigation: "Polaris-Frame__Navigation",
  hasTopBar: "Polaris-Frame--hasTopBar",
  "Navigation-enter": "Polaris-Frame__Navigation--enter",
  "Navigation-enterActive": "Polaris-Frame__Navigation--enterActive",
  "Navigation-exit": "Polaris-Frame__Navigation--exit",
  "Navigation-exitActive": "Polaris-Frame__Navigation--exitActive",
  NavigationDismiss: "Polaris-Frame__NavigationDismiss",
  "Navigation-visible": "Polaris-Frame__Navigation--visible",
  TopBar: "Polaris-Frame__TopBar",
  ContextualSaveBar: "Polaris-Frame__ContextualSaveBar",
  Main: "Polaris-Frame__Main",
  hasNav: "Polaris-Frame--hasNav",
  Content: "Polaris-Frame__Content",
  hasSidebar: "Polaris-Frame--hasSidebar",
  GlobalRibbonContainer: "Polaris-Frame__GlobalRibbonContainer",
  LoadingBar: "Polaris-Frame__LoadingBar",
  Skip: "Polaris-Frame__Skip",
  focused: "Polaris-Frame--focused",
  pressed: "Polaris-Frame--pressed"
};

// node_modules/@shopify/polaris/build/esm/utilities/media-query/hooks.js
import { useContext as useContext13 } from "react";
function useMediaQuery() {
  let mediaQuery = useContext13(MediaQueryContext);
  if (!mediaQuery)
    throw new Error("No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  return mediaQuery;
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Loading/Loading.js
import React111, { useState as useState19, useEffect as useEffect26 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/use-is-mounted-ref.js
import { useRef as useRef24, useEffect as useEffect25 } from "react";
function useIsMountedRef() {
  let isMounted = useRef24(!1);
  return useEffect25(() => (isMounted.current = !0, () => {
    isMounted.current = !1;
  }), []), isMounted;
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Loading/Loading.css.js
var styles46 = {
  Loading: "Polaris-Frame-Loading",
  Level: "Polaris-Frame-Loading__Level"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Loading/Loading.js
var STUCK_THRESHOLD = 99;
function Loading() {
  let i18n = useI18n(), isMountedRef = useIsMountedRef(), [progress, setProgress] = useState19(0), [animating, setAnimating] = useState19(!1);
  useEffect26(() => {
    progress >= STUCK_THRESHOLD || animating || requestAnimationFrame(() => {
      if (!isMountedRef.current)
        return;
      let step = Math.max((STUCK_THRESHOLD - progress) / 10, 1);
      setAnimating(!0), setProgress(progress + step);
    });
  }, [progress, animating, isMountedRef]);
  let customStyles = {
    transform: `scaleX(${Math.floor(progress) / 100})`
  };
  return /* @__PURE__ */ React111.createElement("div", {
    className: styles46.Loading,
    "aria-valuenow": progress,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    role: "progressbar",
    "aria-label": i18n.translate("Polaris.Loading.label")
  }, /* @__PURE__ */ React111.createElement("div", {
    className: styles46.Level,
    style: customStyles,
    onTransitionEnd: () => setAnimating(!1)
  }));
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/CSSAnimation/CSSAnimation.js
import React112, { useState as useState20, useRef as useRef25, useEffect as useEffect27 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Frame/components/CSSAnimation/CSSAnimation.css.js
var styles47 = {
  startFade: "Polaris-Frame-CSSAnimation--startFade",
  endFade: "Polaris-Frame-CSSAnimation--endFade"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/CSSAnimation/CSSAnimation.js
var TransitionStatus2;
(function(TransitionStatus3) {
  TransitionStatus3.Entering = "entering", TransitionStatus3.Entered = "entered", TransitionStatus3.Exiting = "exiting", TransitionStatus3.Exited = "exited";
})(TransitionStatus2 || (TransitionStatus2 = {}));
function CSSAnimation({
  in: inProp,
  className,
  type,
  children
}) {
  let [transitionStatus, setTransitionStatus] = useState20(inProp ? TransitionStatus2.Entering : TransitionStatus2.Exited), isMounted = useRef25(!1), node = useRef25(null);
  useEffect27(() => {
    isMounted.current && transitionStatus === TransitionStatus2.Entering && changeTransitionStatus(TransitionStatus2.Entered);
  }, [transitionStatus]), useEffect27(() => {
    isMounted.current && (inProp && changeTransitionStatus(TransitionStatus2.Entering), !inProp && changeTransitionStatus(TransitionStatus2.Exiting));
  }, [inProp]), useEffect27(() => {
    isMounted.current = !0;
  }, []);
  let wrapperClassName = classNames(className, styles47[variationName("start", type)], inProp && styles47[variationName("end", type)]), content = transitionStatus === TransitionStatus2.Exited && !inProp ? null : children;
  return /* @__PURE__ */ React112.createElement("div", {
    className: wrapperClassName,
    ref: node,
    onTransitionEnd: handleTransitionEnd
  }, content);
  function handleTransitionEnd() {
    transitionStatus === TransitionStatus2.Exiting && changeTransitionStatus(TransitionStatus2.Exited);
  }
  function changeTransitionStatus(transitionStatus2) {
    setTransitionStatus(transitionStatus2), transitionStatus2 === TransitionStatus2.Entering && node.current && node.current.getBoundingClientRect();
  }
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ContextualSaveBar/ContextualSaveBar.js
import React121, { useCallback as useCallback23 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/pluck-deep.js
function pluckDeep(obj, key) {
  if (!obj)
    return null;
  let keys = Object.keys(obj);
  for (let currKey of keys) {
    if (currKey === key)
      return obj[key];
    if (isObject(obj[currKey])) {
      let plucked = pluckDeep(obj[currKey], key);
      if (plucked)
        return plucked;
    }
  }
  return null;
}

// node_modules/@shopify/polaris/build/esm/utilities/get-width.js
function getWidth(value = {}, defaultWidth = 0, key = "width") {
  let width2 = typeof value == "number" ? value : pluckDeep(value, key);
  return width2 ? `${width2}px` : `${defaultWidth}px`;
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ContextualSaveBar/ContextualSaveBar.css.js
var styles48 = {
  ContextualSaveBar: "Polaris-Frame-ContextualSaveBar",
  LogoContainer: "Polaris-Frame-ContextualSaveBar__LogoContainer",
  ContextControl: "Polaris-Frame-ContextualSaveBar__ContextControl",
  Contents: "Polaris-Frame-ContextualSaveBar__Contents",
  fullWidth: "Polaris-Frame-ContextualSaveBar--fullWidth",
  MessageContainer: "Polaris-Frame-ContextualSaveBar__MessageContainer",
  ActionContainer: "Polaris-Frame-ContextualSaveBar__ActionContainer",
  Action: "Polaris-Frame-ContextualSaveBar__Action"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ContextualSaveBar/components/DiscardConfirmationModal/DiscardConfirmationModal.js
import React120 from "react";

// node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js
import React119, { useState as useState22, useId as useId10, useRef as useRef28, useCallback as useCallback22 } from "react";
import { TransitionGroup } from "react-transition-group";

// node_modules/@shopify/polaris/build/esm/components/Modal/Modal.css.js
var styles49 = {
  Body: "Polaris-Modal__Body",
  NoScrollBody: "Polaris-Modal__NoScrollBody",
  IFrame: "Polaris-Modal__IFrame"
};

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.js
import React113 from "react";

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.css.js
var styles50 = {
  Section: "Polaris-Modal-Section",
  titleHidden: "Polaris-Modal-Section--titleHidden"
};

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.js
function Section3({
  children,
  flush = !1,
  subdued = !1,
  titleHidden = !1
}) {
  let className = classNames(styles50.Section, titleHidden && styles50.titleHidden);
  return /* @__PURE__ */ React113.createElement("div", {
    className
  }, /* @__PURE__ */ React113.createElement(Box, Object.assign({
    as: "section",
    padding: flush ? "0" : "400"
  }, titleHidden && {
    paddingInlineEnd: "0"
  }, subdued && {
    background: "bg-surface-tertiary"
  }), children));
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.js
import React115, { useRef as useRef27, useContext as useContext15, useEffect as useEffect30 } from "react";
import { Transition, CSSTransition } from "react-transition-group";

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.css.js
var styles51 = {
  Container: "Polaris-Modal-Dialog__Container",
  Dialog: "Polaris-Modal-Dialog",
  Modal: "Polaris-Modal-Dialog__Modal",
  limitHeight: "Polaris-Modal-Dialog--limitHeight",
  sizeSmall: "Polaris-Modal-Dialog--sizeSmall",
  sizeLarge: "Polaris-Modal-Dialog--sizeLarge",
  sizeFullScreen: "Polaris-Modal-Dialog--sizeFullScreen",
  animateFadeUp: "Polaris-Modal-Dialog--animateFadeUp",
  entering: "Polaris-Modal-Dialog--entering",
  exiting: "Polaris-Modal-Dialog--exiting",
  exited: "Polaris-Modal-Dialog--exited",
  entered: "Polaris-Modal-Dialog--entered"
};

// node_modules/@shopify/polaris/build/esm/components/TrapFocus/TrapFocus.js
import React114, { useRef as useRef26, useState as useState21, useEffect as useEffect29 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/focus-manager/hooks.js
import { useContext as useContext14, useId as useId9, useMemo as useMemo8, useEffect as useEffect28 } from "react";
function useFocusManager({
  trapping
}) {
  let focusManager = useContext14(FocusManagerContext), id = useId9();
  if (!focusManager)
    throw new MissingAppProviderError("No FocusManager was provided.");
  let {
    trapFocusList,
    add: addFocusItem,
    remove: removeFocusItem
  } = focusManager, canSafelyFocus = trapFocusList[0] === id, value = useMemo8(() => ({
    canSafelyFocus
  }), [canSafelyFocus]);
  return useEffect28(() => {
    if (trapping)
      return addFocusItem(id), () => {
        removeFocusItem(id);
      };
  }, [addFocusItem, id, removeFocusItem, trapping]), value;
}

// node_modules/@shopify/polaris/build/esm/components/TrapFocus/TrapFocus.js
function TrapFocus({
  trapping = !0,
  children
}) {
  let {
    canSafelyFocus
  } = useFocusManager({
    trapping
  }), focusTrapWrapper = useRef26(null), [disableFocus, setDisableFocus] = useState21(!0);
  useEffect29(() => {
    let disable = canSafelyFocus && !(focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement)) ? !trapping : !0;
    setDisableFocus(disable);
  }, [canSafelyFocus, trapping]);
  let handleFocusIn = (event) => {
    let containerContentsHaveFocus = focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement);
    trapping === !1 || !focusTrapWrapper.current || containerContentsHaveFocus || event.target instanceof Element && event.target.matches(`${portal.selector} *`) || canSafelyFocus && event.target instanceof HTMLElement && focusTrapWrapper.current !== event.target && !focusTrapWrapper.current.contains(event.target) && focusFirstFocusableNode(focusTrapWrapper.current);
  }, handleTab = (event) => {
    if (trapping === !1 || !focusTrapWrapper.current)
      return;
    let firstFocusableNode = findFirstKeyboardFocusableNode(focusTrapWrapper.current), lastFocusableNode = findLastKeyboardFocusableNode(focusTrapWrapper.current);
    event.target === lastFocusableNode && !event.shiftKey && (event.preventDefault(), focusFirstKeyboardFocusableNode(focusTrapWrapper.current)), event.target === firstFocusableNode && event.shiftKey && (event.preventDefault(), focusLastKeyboardFocusableNode(focusTrapWrapper.current));
  };
  return /* @__PURE__ */ React114.createElement(Focus, {
    disabled: disableFocus,
    root: focusTrapWrapper.current
  }, /* @__PURE__ */ React114.createElement("div", {
    ref: focusTrapWrapper
  }, /* @__PURE__ */ React114.createElement(EventListener, {
    event: "focusin",
    handler: handleFocusIn
  }), /* @__PURE__ */ React114.createElement(KeypressListener, {
    keyCode: Key.Tab,
    keyEvent: "keydown",
    handler: handleTab
  }), children));
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.js
function Dialog({
  instant,
  labelledBy,
  children,
  limitHeight,
  size: size2,
  onClose,
  onExited,
  onEntered,
  setClosing,
  hasToasts,
  ...props
}) {
  let theme = useTheme(), containerNode = useRef27(null), frameContext = useContext15(FrameContext), toastMessages;
  frameContext && (toastMessages = frameContext.toastMessages);
  let classes = classNames(styles51.Modal, size2 && styles51[variationName("size", size2)], limitHeight && styles51.limitHeight), TransitionChild = instant ? Transition : FadeUp;
  useEffect30(() => {
    containerNode.current && !containerNode.current.contains(document.activeElement) && focusFirstFocusableNode(containerNode.current);
  }, []);
  let handleKeyDown2 = () => {
    setClosing && setClosing(!0);
  }, handleKeyUp = () => {
    setClosing && setClosing(!1), onClose();
  }, ariaLiveAnnouncements = /* @__PURE__ */ React115.createElement("div", {
    "aria-live": "assertive"
  }, toastMessages ? toastMessages.map((toastMessage) => /* @__PURE__ */ React115.createElement(Text, {
    visuallyHidden: !0,
    as: "p",
    key: toastMessage.id
  }, toastMessage.content)) : null);
  return /* @__PURE__ */ React115.createElement(TransitionChild, Object.assign({}, props, {
    nodeRef: containerNode,
    mountOnEnter: !0,
    unmountOnExit: !0,
    timeout: parseInt(theme.motion["motion-duration-200"], 10),
    onEntered,
    onExited
  }), /* @__PURE__ */ React115.createElement("div", {
    className: styles51.Container,
    "data-polaris-layer": !0,
    "data-polaris-overlay": !0,
    ref: containerNode
  }, /* @__PURE__ */ React115.createElement(TrapFocus, null, /* @__PURE__ */ React115.createElement("div", {
    role: "dialog",
    "aria-modal": !0,
    "aria-label": labelledBy,
    "aria-labelledby": labelledBy,
    tabIndex: -1,
    className: styles51.Dialog
  }, /* @__PURE__ */ React115.createElement("div", {
    className: classes
  }, /* @__PURE__ */ React115.createElement(KeypressListener, {
    keyCode: Key.Escape,
    keyEvent: "keydown",
    handler: handleKeyDown2
  }), /* @__PURE__ */ React115.createElement(KeypressListener, {
    keyCode: Key.Escape,
    handler: handleKeyUp
  }), children), ariaLiveAnnouncements))));
}
var fadeUpClasses = {
  appear: classNames(styles51.animateFadeUp, styles51.entering),
  appearActive: classNames(styles51.animateFadeUp, styles51.entered),
  enter: classNames(styles51.animateFadeUp, styles51.entering),
  enterActive: classNames(styles51.animateFadeUp, styles51.entered),
  exit: classNames(styles51.animateFadeUp, styles51.exiting),
  exitActive: classNames(styles51.animateFadeUp, styles51.exited)
};
function FadeUp({
  children,
  ...props
}) {
  return /* @__PURE__ */ React115.createElement(CSSTransition, Object.assign({}, props, {
    classNames: fadeUpClasses
  }), children);
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Header/Header.js
import React117 from "react";

// node_modules/@shopify/polaris/build/esm/components/Modal/components/CloseButton/CloseButton.js
import React116 from "react";
function CloseButton({
  pressed,
  onClick
}) {
  let i18n = useI18n();
  return /* @__PURE__ */ React116.createElement(Button, {
    variant: "tertiary",
    pressed,
    icon: SvgXIcon,
    onClick,
    accessibilityLabel: i18n.translate("Polaris.Common.close")
  });
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Header/Header.js
function Header({
  id,
  children,
  closing,
  titleHidden,
  onClose
}) {
  let headerPaddingInline = "400", headerPaddingBlock = "400";
  return titleHidden || !children ? /* @__PURE__ */ React117.createElement(Box, {
    position: "absolute",
    insetInlineEnd: headerPaddingInline,
    insetBlockStart: headerPaddingBlock,
    zIndex: "1"
  }, /* @__PURE__ */ React117.createElement(CloseButton, {
    onClick: onClose
  })) : /* @__PURE__ */ React117.createElement(Box, {
    paddingBlockStart: "400",
    paddingBlockEnd: "400",
    paddingInlineStart: headerPaddingInline,
    paddingInlineEnd: headerPaddingInline,
    borderBlockEndWidth: "025",
    borderColor: "border",
    background: "bg-surface-tertiary"
  }, /* @__PURE__ */ React117.createElement(InlineGrid, {
    columns: {
      xs: "1fr auto"
    },
    gap: "400"
  }, /* @__PURE__ */ React117.createElement(InlineStack, {
    gap: "400",
    blockAlign: "center"
  }, /* @__PURE__ */ React117.createElement(Text, {
    id,
    as: "h2",
    variant: "headingMd",
    breakWord: !0
  }, children)), /* @__PURE__ */ React117.createElement(CloseButton, {
    pressed: closing,
    onClick: onClose
  })));
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Footer/Footer.js
import React118 from "react";
function Footer({
  primaryAction,
  secondaryActions,
  children
}) {
  let primaryActionButton = primaryAction && buttonsFrom(primaryAction, {
    variant: "primary"
  }) || null, secondaryActionButtons = secondaryActions && buttonsFrom(secondaryActions) || null, actions = primaryActionButton || secondaryActionButtons ? /* @__PURE__ */ React118.createElement(InlineStack, {
    gap: "200"
  }, secondaryActionButtons, primaryActionButton) : null;
  return /* @__PURE__ */ React118.createElement(InlineStack, {
    gap: "400",
    blockAlign: "center"
  }, /* @__PURE__ */ React118.createElement(Box, {
    borderColor: "border",
    borderBlockStartWidth: "025",
    padding: "400",
    width: "100%"
  }, /* @__PURE__ */ React118.createElement(InlineStack, {
    gap: "400",
    blockAlign: "center",
    align: "space-between"
  }, /* @__PURE__ */ React118.createElement(Box, null, children), actions)));
}

// node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js
var IFRAME_LOADING_HEIGHT = 200, DEFAULT_IFRAME_CONTENT_HEIGHT = 400, Modal = function({
  children,
  title,
  titleHidden = !1,
  src,
  iFrameName,
  open,
  instant,
  sectioned,
  loading,
  size: size2,
  limitHeight,
  footer,
  primaryAction,
  secondaryActions,
  onScrolledToBottom,
  activator,
  activatorWrapper = "div",
  onClose,
  onIFrameLoad,
  onTransitionEnd,
  noScroll
}) {
  let [iframeHeight, setIframeHeight] = useState22(IFRAME_LOADING_HEIGHT), [closing, setClosing] = useState22(!1), headerId = useId10(), activatorRef = useRef28(null), iframeTitle = useI18n().translate("Polaris.Modal.iFrameTitle"), dialog, backdrop, handleEntered = useCallback22(() => {
    onTransitionEnd && onTransitionEnd();
  }, [onTransitionEnd]), handleExited = useCallback22(() => {
    setIframeHeight(IFRAME_LOADING_HEIGHT);
    let activatorElement = activator && isRef2(activator) ? activator && activator.current : activatorRef.current;
    activatorElement && requestAnimationFrame(() => focusFirstFocusableNode(activatorElement));
  }, [activator]), handleIFrameLoad = useCallback22((evt) => {
    let iframe = evt.target;
    if (iframe && iframe.contentWindow)
      try {
        setIframeHeight(iframe.contentWindow.document.body.scrollHeight);
      } catch {
        setIframeHeight(DEFAULT_IFRAME_CONTENT_HEIGHT);
      }
    onIFrameLoad?.(evt);
  }, [onIFrameLoad]);
  if (open) {
    let footerMarkup = !footer && !primaryAction && !secondaryActions ? null : /* @__PURE__ */ React119.createElement(Footer, {
      primaryAction,
      secondaryActions
    }, footer), content = sectioned ? wrapWithComponent(children, Section3, {
      titleHidden
    }) : children, body = loading ? /* @__PURE__ */ React119.createElement(Box, {
      padding: "400"
    }, /* @__PURE__ */ React119.createElement(InlineStack, {
      gap: "400",
      align: "center",
      blockAlign: "center"
    }, /* @__PURE__ */ React119.createElement(Spinner, null))) : content, scrollContainerMarkup = noScroll ? /* @__PURE__ */ React119.createElement("div", {
      className: styles49.NoScrollBody
    }, /* @__PURE__ */ React119.createElement(Box, {
      width: "100%",
      overflowX: "hidden",
      overflowY: "hidden"
    }, body)) : /* @__PURE__ */ React119.createElement(Scrollable, {
      shadow: !0,
      className: styles49.Body,
      onScrolledToBottom
    }, body), bodyMarkup = src ? /* @__PURE__ */ React119.createElement("iframe", {
      name: iFrameName,
      title: iframeTitle,
      src,
      className: styles49.IFrame,
      onLoad: handleIFrameLoad,
      style: {
        height: `${iframeHeight}px`
      }
    }) : scrollContainerMarkup;
    dialog = /* @__PURE__ */ React119.createElement(Dialog, {
      instant,
      labelledBy: headerId,
      onClose,
      onEntered: handleEntered,
      onExited: handleExited,
      size: size2,
      limitHeight,
      setClosing
    }, /* @__PURE__ */ React119.createElement(Header, {
      titleHidden,
      id: headerId,
      closing,
      onClose
    }, title), bodyMarkup, footerMarkup), backdrop = /* @__PURE__ */ React119.createElement(Backdrop, {
      setClosing,
      onClick: onClose
    });
  }
  let animated = !instant, activatorMarkup = activator && !isRef2(activator) ? /* @__PURE__ */ React119.createElement(Box, {
    ref: activatorRef,
    as: activatorWrapper
  }, activator) : null;
  return /* @__PURE__ */ React119.createElement(WithinContentContext.Provider, {
    value: !0
  }, activatorMarkup, /* @__PURE__ */ React119.createElement(Portal, {
    idPrefix: "modal"
  }, /* @__PURE__ */ React119.createElement(TransitionGroup, {
    appear: animated,
    enter: animated,
    exit: animated
  }, dialog), backdrop));
};
function isRef2(ref) {
  return Object.prototype.hasOwnProperty.call(ref, "current");
}
Modal.Section = Section3;

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ContextualSaveBar/components/DiscardConfirmationModal/DiscardConfirmationModal.js
function DiscardConfirmationModal({
  open,
  onDiscard,
  onCancel
}) {
  let i18n = useI18n();
  return /* @__PURE__ */ React120.createElement(Modal, {
    title: i18n.translate("Polaris.DiscardConfirmationModal.title"),
    open,
    onClose: onCancel,
    primaryAction: {
      content: i18n.translate("Polaris.DiscardConfirmationModal.primaryAction"),
      destructive: !0,
      onAction: onDiscard
    },
    secondaryActions: [{
      content: i18n.translate("Polaris.DiscardConfirmationModal.secondaryAction"),
      onAction: onCancel
    }],
    sectioned: !0
  }, i18n.translate("Polaris.DiscardConfirmationModal.message"));
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ContextualSaveBar/ContextualSaveBar.js
function ContextualSaveBar({
  alignContentFlush,
  message,
  saveAction,
  discardAction,
  fullWidth,
  contextControl,
  secondaryMenu
}) {
  let i18n = useI18n(), {
    logo
  } = useFrame(), {
    value: discardConfirmationModalVisible,
    toggle: toggleDiscardConfirmationModal,
    setFalse: closeDiscardConfirmationModal
  } = useToggle(!1), handleDiscardAction = useCallback23(() => {
    discardAction && discardAction.onAction && discardAction.onAction(), closeDiscardConfirmationModal();
  }, [closeDiscardConfirmationModal, discardAction]), discardActionContent = discardAction && discardAction.content ? discardAction.content : i18n.translate("Polaris.ContextualSaveBar.discard"), discardActionHandler;
  discardAction && discardAction.discardConfirmationModal ? discardActionHandler = toggleDiscardConfirmationModal : discardAction && (discardActionHandler = discardAction.onAction);
  let discardConfirmationModalMarkup = discardAction && discardAction.onAction && discardAction.discardConfirmationModal && /* @__PURE__ */ React121.createElement(DiscardConfirmationModal, {
    open: discardConfirmationModalVisible,
    onCancel: toggleDiscardConfirmationModal,
    onDiscard: handleDiscardAction
  }), discardActionMarkup = discardAction && /* @__PURE__ */ React121.createElement(Button, {
    variant: "tertiary",
    size: "large",
    url: discardAction.url,
    onClick: discardActionHandler,
    loading: discardAction.loading,
    disabled: discardAction.disabled,
    accessibilityLabel: discardAction.content
  }, discardActionContent), saveActionContent = saveAction && saveAction.content ? saveAction.content : i18n.translate("Polaris.ContextualSaveBar.save"), saveActionMarkup = saveAction && /* @__PURE__ */ React121.createElement(Button, {
    variant: "primary",
    tone: "success",
    size: "large",
    url: saveAction.url,
    onClick: saveAction.onAction,
    loading: saveAction.loading,
    disabled: saveAction.disabled,
    accessibilityLabel: saveAction.content
  }, saveActionContent), width2 = getWidth(logo, 104), imageMarkup = logo && /* @__PURE__ */ React121.createElement(Image, {
    style: {
      width: width2
    },
    source: logo.contextualSaveBarSource || "",
    alt: ""
  }), logoMarkup = alignContentFlush || contextControl ? null : /* @__PURE__ */ React121.createElement("div", {
    className: styles48.LogoContainer,
    style: {
      width: width2
    }
  }, imageMarkup), contextControlMarkup = contextControl ? /* @__PURE__ */ React121.createElement("div", {
    className: styles48.ContextControl
  }, contextControl) : null, contentsClassName = classNames(styles48.Contents, fullWidth && styles48.fullWidth);
  return /* @__PURE__ */ React121.createElement(React121.Fragment, null, /* @__PURE__ */ React121.createElement("div", {
    className: styles48.ContextualSaveBar
  }, contextControlMarkup, logoMarkup, /* @__PURE__ */ React121.createElement("div", {
    className: contentsClassName
  }, /* @__PURE__ */ React121.createElement("div", {
    className: styles48.MessageContainer
  }, /* @__PURE__ */ React121.createElement(Icon, {
    source: SvgAlertTriangleIcon
  }), message && /* @__PURE__ */ React121.createElement(Text, {
    as: "h2",
    variant: "headingMd",
    tone: "text-inverse",
    truncate: !0
  }, message)), /* @__PURE__ */ React121.createElement("div", {
    className: styles48.ActionContainer
  }, /* @__PURE__ */ React121.createElement(LegacyStack, {
    spacing: "tight",
    wrap: !1
  }, secondaryMenu, discardActionMarkup, saveActionMarkup)))), discardConfirmationModalMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ToastManager/ToastManager.js
import React123, { memo as memo5, useState as useState23, useRef as useRef31, createRef as createRef4 } from "react";
import { CSSTransition as CSSTransition2, TransitionGroup as TransitionGroup2 } from "react-transition-group";

// node_modules/@shopify/polaris/build/esm/utilities/use-deep-effect.js
import { useEffect as useEffect31 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/use-deep-compare-ref.js
import { useRef as useRef29 } from "react";
import isEqual2 from "react-fast-compare";
function useDeepCompareRef(dependencies, comparator = isEqual2) {
  let dependencyList = useRef29(dependencies);
  return comparator(dependencyList.current, dependencies) || (dependencyList.current = dependencies), dependencyList.current;
}

// node_modules/@shopify/polaris/build/esm/utilities/use-deep-effect.js
function useDeepEffect(callback, dependencies, customCompare) {
  useEffect31(callback, useDeepCompareRef(dependencies, customCompare));
}

// node_modules/@shopify/polaris/build/esm/utilities/use-deep-callback.js
import { useCallback as useCallback24 } from "react";
function useDeepCallback(callback, dependencies, customCompare) {
  return useCallback24(callback, useDeepCompareRef(dependencies, customCompare));
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ToastManager/ToastManager.css.js
var styles52 = {
  ToastManager: "Polaris-Frame-ToastManager",
  ToastWrapper: "Polaris-Frame-ToastManager__ToastWrapper",
  "ToastWrapper-enter": "Polaris-Frame-ToastManager__ToastWrapper--enter",
  "ToastWrapper-exit": "Polaris-Frame-ToastManager__ToastWrapper--exit",
  "ToastWrapper-enter-done": "Polaris-Frame-ToastManager--toastWrapperEnterDone",
  "ToastWrapper--hoverable": "Polaris-Frame-ToastManager--toastWrapperHoverable"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Toast/Toast.js
import React122, { useRef as useRef30, useEffect as useEffect32 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Toast/Toast.css.js
var styles53 = {
  Toast: "Polaris-Frame-Toast",
  Action: "Polaris-Frame-Toast__Action",
  error: "Polaris-Frame-Toast--error",
  CloseButton: "Polaris-Frame-Toast__CloseButton",
  LeadingIcon: "Polaris-Frame-Toast__LeadingIcon",
  toneMagic: "Polaris-Frame-Toast--toneMagic",
  WithActionOnComponent: "Polaris-Frame-Toast__WithActionOnComponent"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Toast/Toast.js
var DEFAULT_TOAST_DURATION = 5e3, DEFAULT_TOAST_DURATION_WITH_ACTION = 1e4;
function Toast({
  content,
  onDismiss,
  duration,
  error,
  action,
  tone,
  onClick,
  icon,
  isHovered
}) {
  let durationRemaining = useRef30(action && !duration ? DEFAULT_TOAST_DURATION_WITH_ACTION : duration || DEFAULT_TOAST_DURATION), timeoutStart = useRef30(null), timer = useRef30(null);
  useEffect32(() => {
    function resume() {
      timeoutStart.current = Date.now(), timer.current = setTimeout(() => {
        onDismiss();
      }, durationRemaining.current);
    }
    function pause() {
      timeoutStart.current && (durationRemaining.current -= Date.now() - timeoutStart.current), timer.current && clearTimeout(timer.current), timer.current = null;
    }
    return isHovered ? pause() : resume(), () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [isHovered, onDismiss]), useEffect32(() => {
    action && duration && duration < DEFAULT_TOAST_DURATION_WITH_ACTION && console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it.");
  }, [action, duration]);
  let dismissMarkup = /* @__PURE__ */ React122.createElement("button", {
    type: "button",
    className: styles53.CloseButton,
    onClick: onDismiss
  }, /* @__PURE__ */ React122.createElement(Icon, {
    source: SvgXSmallIcon,
    tone: "inherit"
  })), actionMarkup = action ? /* @__PURE__ */ React122.createElement("div", {
    className: styles53.Action
  }, /* @__PURE__ */ React122.createElement(Button, {
    variant: "monochromePlain",
    removeUnderline: !0,
    size: "slim",
    onClick: action.onAction
  }, action.content)) : null, leadingIconMarkup = null;
  error ? leadingIconMarkup = /* @__PURE__ */ React122.createElement("div", {
    className: styles53.LeadingIcon
  }, /* @__PURE__ */ React122.createElement(Icon, {
    source: SvgAlertCircleIcon,
    tone: "inherit"
  })) : icon && (leadingIconMarkup = /* @__PURE__ */ React122.createElement("div", {
    className: styles53.LeadingIcon
  }, /* @__PURE__ */ React122.createElement(Icon, {
    source: icon,
    tone: "inherit"
  })));
  let className = classNames(styles53.Toast, error && styles53.error, tone && styles53[variationName("tone", tone)]);
  return !action && onClick ? /* @__PURE__ */ React122.createElement("button", {
    "aria-live": "assertive",
    className: classNames(className, styles53.WithActionOnComponent),
    type: "button",
    onClick
  }, /* @__PURE__ */ React122.createElement(KeypressListener, {
    keyCode: Key.Escape,
    handler: onDismiss
  }), leadingIconMarkup, /* @__PURE__ */ React122.createElement(InlineStack, {
    gap: "400",
    blockAlign: "center"
  }, /* @__PURE__ */ React122.createElement(Text, Object.assign({
    as: "span",
    variant: "bodyMd",
    fontWeight: "medium"
  }, tone === "magic" && {
    tone: "magic"
  }), content))) : /* @__PURE__ */ React122.createElement("div", {
    className,
    "aria-live": "assertive"
  }, /* @__PURE__ */ React122.createElement(KeypressListener, {
    keyCode: Key.Escape,
    handler: onDismiss
  }), leadingIconMarkup, /* @__PURE__ */ React122.createElement(InlineStack, {
    gap: "400",
    blockAlign: "center"
  }, /* @__PURE__ */ React122.createElement(Text, Object.assign({
    as: "span",
    variant: "bodyMd",
    fontWeight: "medium"
  }, tone === "magic" && {
    tone: "magic"
  }), content)), actionMarkup, dismissMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ToastManager/ToastManager.js
var ADDITIONAL_TOAST_BASE_MOVEMENT = 10, TOAST_TRANSITION_DELAY = 30;
function generateAdditionalVerticalMovement(index) {
  let getAmountToRemove = (idx) => (idx - 1) * idx / 2;
  return index * ADDITIONAL_TOAST_BASE_MOVEMENT - getAmountToRemove(index);
}
var ToastManager = /* @__PURE__ */ memo5(function({
  toastMessages
}) {
  let toastNodes = [], [shouldExpand, setShouldExpand] = useState23(!1), isFullyExpanded = useRef31(!1), fullyExpandedTimeout = useRef31(null), firstToast = useRef31(null), updateToasts = useDeepCallback(() => {
    let zeroIndexTotalMessages = toastMessages.length - 1;
    toastMessages.forEach((_, index) => {
      let reversedOrder = zeroIndexTotalMessages - index, currentToast = toastNodes[index];
      if (!currentToast.current)
        return;
      let toastHeight = currentToast.current.clientHeight, scale = shouldExpand ? 1 : 0.9 ** reversedOrder, additionalVerticalMovement = generateAdditionalVerticalMovement(reversedOrder), targetInPos = shouldExpand ? toastHeight + (toastHeight - 8) * reversedOrder : toastHeight + additionalVerticalMovement;
      currentToast.current.style.setProperty("--pc-toast-manager-translate-y-in", `-${targetInPos}px`), currentToast.current.style.setProperty("--pc-toast-manager-scale-in", `${scale}`), currentToast.current.style.setProperty("--pc-toast-manager-blur-in", shouldExpand ? "0" : `${reversedOrder * 0.5}px`), currentToast.current.style.setProperty("--pc-toast-manager-transition-delay-in", `${shouldExpand ? reversedOrder * TOAST_TRANSITION_DELAY : 0}ms`), currentToast.current.style.setProperty("--pc-toast-manager-scale-out", `${reversedOrder === 0 ? 0.85 : scale ** 2}`), currentToast.current.style.setProperty("--pc-toast-manager-translate-y-out", `${-targetInPos}px`);
    });
  }, [toastMessages, toastNodes, shouldExpand]);
  useDeepEffect(() => {
    updateToasts(), toastMessages.length === 0 && setShouldExpand(!1), shouldExpand ? fullyExpandedTimeout.current = setTimeout(() => {
      isFullyExpanded.current = !0;
    }, toastMessages.length * TOAST_TRANSITION_DELAY + 400) : fullyExpandedTimeout.current && (clearTimeout(fullyExpandedTimeout.current), isFullyExpanded.current = !1);
  }, [toastMessages, shouldExpand]);
  let toastsMarkup = toastMessages.map((toast, index) => {
    let reverseOrderIndex = toastMessages.length - index - 1, toastNode = /* @__PURE__ */ createRef4();
    toastNodes[index] = toastNode;
    function handleMouseEnter() {
      setShouldExpand(!0);
    }
    function handleMouseEnterFirstToast() {
      isFullyExpanded.current && setShouldExpand(!1);
    }
    return /* @__PURE__ */ React123.createElement(CSSTransition2, {
      nodeRef: toastNodes[index],
      key: toast.id,
      timeout: {
        enter: 0,
        exit: 200
      },
      classNames: toastClasses
    }, /* @__PURE__ */ React123.createElement("div", {
      ref: toastNode,
      onMouseEnter: reverseOrderIndex > 0 ? handleMouseEnter : handleMouseEnterFirstToast
    }, /* @__PURE__ */ React123.createElement("div", {
      ref: (node) => reverseOrderIndex === 0 ? firstToast.current = node : null
    }, /* @__PURE__ */ React123.createElement(Toast, Object.assign({}, toast, {
      isHovered: shouldExpand
    })))));
  });
  return /* @__PURE__ */ React123.createElement(Portal, {
    idPrefix: "toast"
  }, /* @__PURE__ */ React123.createElement(EventListener, {
    event: "resize",
    handler: updateToasts
  }), /* @__PURE__ */ React123.createElement("div", {
    className: styles52.ToastManager,
    "aria-live": "assertive",
    onMouseEnter: function(event) {
      let target = event.target, isInFirstToast = firstToast.current?.contains(target);
      setShouldExpand(!isInFirstToast);
    },
    onMouseLeave: function() {
      setShouldExpand(!1);
    }
  }, /* @__PURE__ */ React123.createElement(TransitionGroup2, {
    component: null
  }, toastsMarkup)));
}), toastClasses = {
  enter: classNames(styles52.ToastWrapper, styles52["ToastWrapper-enter"]),
  enterDone: classNames(styles52.ToastWrapper, styles52["ToastWrapper-enter-done"]),
  exit: classNames(styles52.ToastWrapper, styles52["ToastWrapper-exit"])
};

// node_modules/@shopify/polaris/build/esm/components/Frame/Frame.js
var APP_FRAME_MAIN = "AppFrameMain", APP_FRAME_NAV = "AppFrameNav", APP_FRAME_TOP_BAR = "AppFrameTopBar", APP_FRAME_LOADING_BAR = "AppFrameLoadingBar", FrameInner = class extends PureComponent5 {
  constructor(...args) {
    super(...args), this.state = {
      skipFocused: !1,
      globalRibbonHeight: 0,
      loadingStack: 0,
      toastMessages: [],
      showContextualSaveBar: !1
    }, this.contextualSaveBar = null, this.globalRibbonContainer = null, this.navigationNode = /* @__PURE__ */ createRef5(), this.setGlobalRibbonHeight = () => {
      let {
        globalRibbonContainer
      } = this;
      globalRibbonContainer && this.setState({
        globalRibbonHeight: globalRibbonContainer.offsetHeight
      }, this.setGlobalRibbonRootProperty);
    }, this.setOffset = () => {
      let {
        offset = "0px"
      } = this.props;
      setRootProperty("--pc-frame-offset", offset);
    }, this.setGlobalRibbonRootProperty = () => {
      let {
        globalRibbonHeight
      } = this.state;
      setRootProperty("--pc-frame-global-ribbon-height", `${globalRibbonHeight}px`);
    }, this.showToast = (toast) => {
      this.setState(({
        toastMessages
      }) => ({
        toastMessages: toastMessages.find(({
          id
        }) => id === toast.id) != null ? toastMessages : [...toastMessages, toast]
      }));
    }, this.hideToast = ({
      id
    }) => {
      this.setState(({
        toastMessages
      }) => ({
        toastMessages: toastMessages.filter(({
          id: toastId
        }) => id !== toastId)
      }));
    }, this.setContextualSaveBar = (props) => {
      let {
        showContextualSaveBar
      } = this.state;
      this.contextualSaveBar = {
        ...props
      }, showContextualSaveBar === !0 ? this.forceUpdate() : this.setState({
        showContextualSaveBar: !0
      });
    }, this.removeContextualSaveBar = () => {
      this.contextualSaveBar = null, this.setState({
        showContextualSaveBar: !1
      });
    }, this.startLoading = () => {
      this.setState(({
        loadingStack
      }) => ({
        loadingStack: loadingStack + 1
      }));
    }, this.stopLoading = () => {
      this.setState(({
        loadingStack
      }) => ({
        loadingStack: Math.max(0, loadingStack - 1)
      }));
    }, this.handleResize = () => {
      this.props.globalRibbon && this.setGlobalRibbonHeight();
    }, this.handleFocus = () => {
      this.setState({
        skipFocused: !0
      });
    }, this.handleBlur = () => {
      this.setState({
        skipFocused: !1
      });
    }, this.handleClick = (event) => {
      let {
        skipToContentTarget
      } = this.props;
      skipToContentTarget && skipToContentTarget.current && (skipToContentTarget.current.focus(), event?.preventDefault());
    }, this.handleNavigationDismiss = () => {
      let {
        onNavigationDismiss
      } = this.props;
      onNavigationDismiss?.();
    }, this.setGlobalRibbonContainer = (node) => {
      this.globalRibbonContainer = node;
    }, this.handleNavKeydown = (event) => {
      let {
        key
      } = event, {
        mediaQuery: {
          isNavigationCollapsed
        },
        showMobileNavigation
      } = this.props;
      isNavigationCollapsed && showMobileNavigation && key === "Escape" && this.handleNavigationDismiss();
    };
  }
  componentDidMount() {
    this.handleResize(), !this.props.globalRibbon && (this.setGlobalRibbonRootProperty(), this.setOffset());
  }
  componentDidUpdate(prevProps) {
    this.props.globalRibbon !== prevProps.globalRibbon && this.setGlobalRibbonHeight(), this.setOffset();
  }
  render() {
    let {
      skipFocused,
      loadingStack,
      toastMessages,
      showContextualSaveBar
    } = this.state, {
      logo,
      children,
      navigation,
      topBar,
      globalRibbon,
      showMobileNavigation = !1,
      skipToContentTarget,
      i18n,
      sidebar,
      mediaQuery: {
        isNavigationCollapsed
      }
    } = this.props, navClassName = classNames(styles45.Navigation, showMobileNavigation && styles45["Navigation-visible"]), mobileNavHidden = isNavigationCollapsed && !showMobileNavigation, mobileNavShowing = isNavigationCollapsed && showMobileNavigation, tabIndex = mobileNavShowing ? 0 : -1, mobileNavAttributes = {
      ...mobileNavShowing && {
        "aria-modal": !0,
        role: "dialog"
      }
    }, navigationMarkup = navigation ? /* @__PURE__ */ React124.createElement(UseTheme, null, (theme) => /* @__PURE__ */ React124.createElement(TrapFocus, {
      trapping: mobileNavShowing
    }, /* @__PURE__ */ React124.createElement(CSSTransition3, {
      nodeRef: this.navigationNode,
      appear: isNavigationCollapsed,
      exit: isNavigationCollapsed,
      in: showMobileNavigation,
      timeout: parseInt(theme.motion["motion-duration-300"], 10),
      classNames: navTransitionClasses
    }, /* @__PURE__ */ React124.createElement("div", Object.assign({
      key: "NavContent"
    }, mobileNavAttributes, {
      "aria-label": i18n.translate("Polaris.Frame.navigationLabel"),
      ref: this.navigationNode,
      className: navClassName,
      onKeyDown: this.handleNavKeydown,
      id: APP_FRAME_NAV,
      hidden: mobileNavHidden
    }), navigation, /* @__PURE__ */ React124.createElement("button", {
      type: "button",
      className: styles45.NavigationDismiss,
      onClick: this.handleNavigationDismiss,
      "aria-hidden": mobileNavHidden || !isNavigationCollapsed && !showMobileNavigation,
      "aria-label": i18n.translate("Polaris.Frame.Navigation.closeMobileNavigationLabel"),
      tabIndex
    }, /* @__PURE__ */ React124.createElement(Icon, {
      source: SvgXIcon
    })))))) : null, loadingMarkup = loadingStack > 0 ? /* @__PURE__ */ React124.createElement("div", {
      className: styles45.LoadingBar,
      id: APP_FRAME_LOADING_BAR
    }, /* @__PURE__ */ React124.createElement(Loading, null)) : null, topBarMarkup = topBar ? /* @__PURE__ */ React124.createElement("div", Object.assign({
      className: styles45.TopBar
    }, layer.props, dataPolarisTopBar.props, {
      id: APP_FRAME_TOP_BAR
    }), topBar) : null, globalRibbonMarkup = globalRibbon ? /* @__PURE__ */ React124.createElement("div", {
      className: styles45.GlobalRibbonContainer,
      ref: this.setGlobalRibbonContainer
    }, globalRibbon) : null, skipClassName = classNames(styles45.Skip, skipFocused && styles45.focused), skipTarget = skipToContentTarget?.current ? skipToContentTarget.current.id : APP_FRAME_MAIN, skipMarkup = /* @__PURE__ */ React124.createElement("div", {
      className: skipClassName
    }, /* @__PURE__ */ React124.createElement("a", {
      href: `#${skipTarget}`,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onClick: this.handleClick
    }, /* @__PURE__ */ React124.createElement(Text, {
      as: "span",
      variant: "bodyLg",
      fontWeight: "medium"
    }, i18n.translate("Polaris.Frame.skipToContent")))), navigationAttributes = navigation ? {
      "data-has-navigation": !0
    } : {}, frameClassName = classNames(styles45.Frame, navigation && styles45.hasNav, topBar && styles45.hasTopBar, sidebar && styles45.hasSidebar), contextualSaveBarMarkup = /* @__PURE__ */ React124.createElement(CSSAnimation, {
      in: showContextualSaveBar,
      className: styles45.ContextualSaveBar,
      type: "fade"
    }, /* @__PURE__ */ React124.createElement(ContextualSaveBar, this.contextualSaveBar)), navigationOverlayMarkup = showMobileNavigation && isNavigationCollapsed ? /* @__PURE__ */ React124.createElement(Backdrop, {
      belowNavigation: !0,
      onClick: this.handleNavigationDismiss,
      onTouchStart: this.handleNavigationDismiss
    }) : null, context = {
      logo,
      showToast: this.showToast,
      hideToast: this.hideToast,
      toastMessages,
      startLoading: this.startLoading,
      stopLoading: this.stopLoading,
      setContextualSaveBar: this.setContextualSaveBar,
      removeContextualSaveBar: this.removeContextualSaveBar
    };
    return /* @__PURE__ */ React124.createElement(FrameContext.Provider, {
      value: context
    }, /* @__PURE__ */ React124.createElement("div", Object.assign({
      className: frameClassName
    }, layer.props, navigationAttributes), skipMarkup, topBarMarkup, navigationMarkup, contextualSaveBarMarkup, loadingMarkup, navigationOverlayMarkup, /* @__PURE__ */ React124.createElement("main", {
      className: styles45.Main,
      id: APP_FRAME_MAIN,
      "data-has-global-ribbon": Boolean(globalRibbon)
    }, /* @__PURE__ */ React124.createElement("div", {
      className: styles45.Content
    }, children)), /* @__PURE__ */ React124.createElement(ToastManager, {
      toastMessages
    }), globalRibbonMarkup, /* @__PURE__ */ React124.createElement(EventListener, {
      event: "resize",
      handler: this.handleResize
    })));
  }
}, navTransitionClasses = {
  enter: classNames(styles45["Navigation-enter"]),
  enterActive: classNames(styles45["Navigation-enterActive"]),
  enterDone: classNames(styles45["Navigation-enterActive"]),
  exit: classNames(styles45["Navigation-exit"]),
  exitActive: classNames(styles45["Navigation-exitActive"])
};
function Frame(props) {
  let i18n = useI18n(), mediaQuery = useMediaQuery();
  return /* @__PURE__ */ React124.createElement(FrameInner, Object.assign({}, props, {
    i18n,
    mediaQuery
  }));
}

// node_modules/@shopify/polaris/build/esm/utilities/use-is-touch-device.js
import { useState as useState24, useCallback as useCallback25 } from "react";
function useIsTouchDevice() {
  let [isTouchDevice, setIsTouchDevice] = useState24(!1), handleTouchStart = useCallback25(() => setIsTouchDevice(!0), []);
  return useEventListener("touchstart", handleTouchStart), isTouchDevice;
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.js
import React133, { useRef as useRef39, useReducer as useReducer3, useEffect as useEffect40, useCallback as useCallback31 } from "react";

// node_modules/@shopify/polaris/build/esm/utilities/use-previous.js
import { useRef as useRef32, useEffect as useEffect33 } from "react";
function usePrevious(value) {
  let ref = useRef32();
  return useEffect33(() => {
    ref.current = value;
  }, [value]), ref.current;
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/utilities.js
function getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth, tabWidths, containerWidth) {
  let sumTabWidths = tabWidths.reduce((sum, width2) => sum + width2, 0), arrayOfTabIndices = tabs.map((_, index) => index), visibleTabs = [], hiddenTabs = [];
  if (containerWidth > sumTabWidths)
    visibleTabs.push(...arrayOfTabIndices);
  else {
    visibleTabs.push(selected);
    let tabListWidth = tabWidths[selected];
    arrayOfTabIndices.forEach((currentTabIndex) => {
      if (currentTabIndex !== selected) {
        let currentTabWidth = tabWidths[currentTabIndex];
        if (tabListWidth + currentTabWidth >= containerWidth - disclosureWidth) {
          hiddenTabs.push(currentTabIndex);
          return;
        }
        visibleTabs.push(currentTabIndex), tabListWidth += currentTabWidth;
      }
    });
  }
  return {
    visibleTabs,
    hiddenTabs
  };
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.css.js
var styles54 = {
  Outer: "Polaris-Tabs__Outer",
  Wrapper: "Polaris-Tabs__Wrapper",
  WrapperWithNewButton: "Polaris-Tabs__WrapperWithNewButton",
  ButtonWrapper: "Polaris-Tabs__ButtonWrapper",
  Tabs: "Polaris-Tabs",
  Tab: "Polaris-Tabs__Tab",
  "Tab-active": "Polaris-Tabs__Tab--active",
  "Tab-hasActions": "Polaris-Tabs__Tab--hasActions",
  "Tab-iconOnly": "Polaris-Tabs__Tab--iconOnly",
  fillSpace: "Polaris-Tabs--fillSpace",
  TabContainer: "Polaris-Tabs__TabContainer",
  fitted: "Polaris-Tabs--fitted",
  titleWithIcon: "Polaris-Tabs--titleWithIcon",
  List: "Polaris-Tabs__List",
  Item: "Polaris-Tabs__Item",
  DisclosureTab: "Polaris-Tabs__DisclosureTab",
  "DisclosureTab-visible": "Polaris-Tabs__DisclosureTab--visible",
  DisclosureActivator: "Polaris-Tabs__DisclosureActivator",
  TabsMeasurer: "Polaris-Tabs__TabsMeasurer",
  NewTab: "Polaris-Tabs__NewTab",
  ActionListWrap: "Polaris-Tabs__ActionListWrap",
  Panel: "Polaris-Tabs__Panel",
  "Panel-hidden": "Polaris-Tabs__Panel--hidden"
};

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/Tab.js
import React127, { forwardRef as forwardRef9, useState as useState27, useRef as useRef35, useEffect as useEffect36, useCallback as useCallback28 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/components/DuplicateModal/DuplicateModal.js
import React125, { useState as useState25, useRef as useRef33, useEffect as useEffect34, useCallback as useCallback26 } from "react";
var MAX_VIEW_NAME_LENGTH = 40;
function DuplicateModal({
  open,
  isModalLoading,
  name,
  onClose,
  onClickPrimaryAction,
  onClickSecondaryAction,
  helpText,
  viewNames
}) {
  let i18n = useI18n(), [value, setValue] = useState25(name), container = useRef33(null), hasSameNameError = viewNames?.some((viewName) => viewName.trim().toLowerCase() === value.trim().toLowerCase()), isPrimaryActionDisabled = isModalLoading || hasSameNameError || !value || value.length > MAX_VIEW_NAME_LENGTH;
  useEffect34(() => {
    container.current && open && focusFirstFocusableNode(container.current);
  }, [open]), useEffect34(() => {
    open && setValue(name.slice(0, MAX_VIEW_NAME_LENGTH));
  }, [name, open]);
  let handleChange = useCallback26((newValue) => {
    setValue(newValue);
  }, []);
  async function handlePrimaryAction() {
    isPrimaryActionDisabled || (await onClickPrimaryAction(value), setValue(""), onClose());
  }
  function handleSecondaryAction() {
    onClickSecondaryAction?.(), setValue(name), onClose();
  }
  return /* @__PURE__ */ React125.createElement(Modal, {
    open,
    onClose,
    title: i18n.translate("Polaris.Tabs.DuplicateModal.title"),
    primaryAction: {
      content: i18n.translate("Polaris.Tabs.DuplicateModal.create"),
      onAction: handlePrimaryAction,
      disabled: isPrimaryActionDisabled
    },
    secondaryActions: [{
      content: i18n.translate("Polaris.Tabs.DuplicateModal.cancel"),
      onAction: handleSecondaryAction
    }],
    instant: !0
  }, /* @__PURE__ */ React125.createElement(Modal.Section, null, /* @__PURE__ */ React125.createElement(Form, {
    onSubmit: handlePrimaryAction
  }, /* @__PURE__ */ React125.createElement(FormLayout, null, /* @__PURE__ */ React125.createElement("div", {
    ref: container
  }, /* @__PURE__ */ React125.createElement(TextField, {
    label: i18n.translate("Polaris.Tabs.DuplicateModal.label"),
    value,
    onChange: handleChange,
    autoComplete: "off",
    helpText,
    maxLength: MAX_VIEW_NAME_LENGTH,
    showCharacterCount: !0,
    error: hasSameNameError ? i18n.translate("Polaris.Tabs.DuplicateModal.errors.sameName", {
      name: value
    }) : void 0
  }))))));
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/components/RenameModal/RenameModal.js
import React126, { useState as useState26, useRef as useRef34, useEffect as useEffect35, useCallback as useCallback27 } from "react";
function RenameModal({
  open,
  isModalLoading,
  name,
  onClose,
  onClickPrimaryAction,
  onClickSecondaryAction,
  helpText,
  viewNames
}) {
  let i18n = useI18n(), [value, setValue] = useState26(name), container = useRef34(null), hasSameNameError = viewNames?.filter((viewName) => viewName !== name).some((viewName) => viewName.trim().toLowerCase() === value.trim().toLowerCase()), isPrimaryActionDisabled = isModalLoading || hasSameNameError || value === name || !value;
  useEffect35(() => {
    container.current && open && focusFirstFocusableNode(container.current);
  }, [open]), useEffect35(() => {
    open && setValue(name);
  }, [name, open]);
  let handleChange = useCallback27((newValue) => {
    setValue(newValue);
  }, []);
  async function handlePrimaryAction() {
    isPrimaryActionDisabled || (await onClickPrimaryAction(value), setValue(""), onClose());
  }
  function handleSecondaryAction() {
    onClickSecondaryAction?.(), setValue(name), onClose();
  }
  return /* @__PURE__ */ React126.createElement(Modal, {
    open,
    onClose,
    title: i18n.translate("Polaris.Tabs.RenameModal.title"),
    primaryAction: {
      content: i18n.translate("Polaris.Tabs.RenameModal.create"),
      onAction: handlePrimaryAction,
      disabled: isPrimaryActionDisabled
    },
    secondaryActions: [{
      content: i18n.translate("Polaris.Tabs.RenameModal.cancel"),
      onAction: handleSecondaryAction
    }],
    instant: !0
  }, /* @__PURE__ */ React126.createElement(Modal.Section, null, /* @__PURE__ */ React126.createElement(Form, {
    onSubmit: handlePrimaryAction
  }, /* @__PURE__ */ React126.createElement(FormLayout, null, /* @__PURE__ */ React126.createElement("div", {
    ref: container
  }, /* @__PURE__ */ React126.createElement(TextField, {
    label: i18n.translate("Polaris.Tabs.RenameModal.label"),
    value,
    onChange: handleChange,
    autoComplete: "off",
    helpText,
    maxLength: 40,
    showCharacterCount: !0,
    error: hasSameNameError ? i18n.translate("Polaris.Tabs.RenameModal.errors.sameName", {
      name: value
    }) : void 0
  }))))));
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/Tab.js
var Tab = /* @__PURE__ */ forwardRef9(({
  content,
  accessibilityLabel,
  badge,
  id,
  panelID,
  url,
  onAction,
  actions,
  disabled,
  isModalLoading,
  icon,
  siblingTabHasFocus,
  measuring,
  focused,
  selected,
  onToggleModal,
  onTogglePopover,
  viewNames,
  tabIndexOverride,
  onFocus
}, ref) => {
  let i18n = useI18n(), [popoverActive, setPopoverActive] = useState27(!1), [activeModalType, setActiveModalType] = useState27(null), wasSelected = useRef35(selected), panelFocused = useRef35(!1), node = useRef35(null);
  useEffect36(() => {
    onTogglePopover(popoverActive);
  }, [popoverActive, onTogglePopover]), useEffect36(() => {
    onToggleModal(Boolean(activeModalType));
  }, [activeModalType, onToggleModal]), useEffect36(() => () => {
    onToggleModal(!1), onTogglePopover(!1);
  }, [onToggleModal, onTogglePopover]), useEffect36(() => {
    if (measuring)
      return;
    (focused || document.activeElement && document.activeElement.id === id) && selected && panelID != null && !panelFocused.current && (focusPanelID(panelID), panelFocused.current = !0), selected && !wasSelected.current && panelID != null ? focusPanelID(panelID) : focused && node.current != null && activeModalType == null && !disabled && focusFirstFocusableNode(node.current), wasSelected.current = selected;
  }, [focused, id, content, measuring, panelID, selected, activeModalType, disabled]);
  let tabIndex;
  selected && !siblingTabHasFocus && !measuring || focused && !measuring ? tabIndex = 0 : tabIndex = -1, tabIndexOverride != null && (tabIndex = tabIndexOverride);
  let renameAction = actions?.find((action) => action.type === "rename"), duplicateAction = actions?.find((action) => action.type === "duplicate"), deleteAction = actions?.find((action) => action.type === "delete"), togglePopoverActive = useCallback28(() => {
    actions?.length && setPopoverActive((popoverActive2) => !popoverActive2);
  }, [actions]), handleClick = useCallback28(() => {
    disabled || (selected ? togglePopoverActive() : onAction?.());
  }, [selected, onAction, togglePopoverActive, disabled]), handleModalOpen = (type) => {
    setActiveModalType(type);
  }, handleModalClose = () => {
    setActiveModalType(null);
  }, handleSaveRenameModal = useCallback28(async (value) => {
    await renameAction?.onPrimaryAction?.(value), setTimeout(() => {
      node.current && focusFirstFocusableNode(node.current);
    }, 250);
  }, [renameAction]), handleConfirmDeleteView = useCallback28(async () => {
    await deleteAction?.onPrimaryAction?.(content), handleModalClose();
  }, [deleteAction, content]), handleSaveDuplicateModal = useCallback28(async (duplicateName) => {
    await duplicateAction?.onPrimaryAction?.(duplicateName);
  }, [duplicateAction]), actionContent = {
    rename: {
      icon: SvgInfoIcon,
      content: i18n.translate("Polaris.Tabs.Tab.rename")
    },
    duplicate: {
      icon: SvgDuplicateIcon,
      content: i18n.translate("Polaris.Tabs.Tab.duplicate")
    },
    edit: {
      icon: SvgEditIcon,
      content: i18n.translate("Polaris.Tabs.Tab.edit")
    },
    "edit-columns": {
      icon: SvgLayoutColumns3Icon,
      content: i18n.translate("Polaris.Tabs.Tab.editColumns")
    },
    delete: {
      icon: SvgDeleteIcon,
      content: i18n.translate("Polaris.Tabs.Tab.delete"),
      destructive: !0
    }
  }, formattedActions = actions?.map(({
    type,
    onAction: onAction2,
    onPrimaryAction,
    ...additionalOptions
  }) => {
    let isModalActivator = !type.includes("edit");
    return {
      ...actionContent[type],
      ...additionalOptions,
      onAction: () => {
        onAction2?.(content), togglePopoverActive(), isModalActivator && handleModalOpen(type);
      }
    };
  }), handleKeyDown2 = useCallback28((event) => {
    event.key === " " && (event.preventDefault(), handleClick());
  }, [handleClick]), tabContainerClassNames = classNames(styles54.TabContainer, selected && styles54.Underline), urlIfNotDisabledOrSelected = disabled || selected ? void 0 : url, BaseComponent = urlIfNotDisabledOrSelected ? UnstyledLink : UnstyledButton, tabClassName = classNames(styles54.Tab, icon && styles54["Tab-iconOnly"], popoverActive && styles54["Tab-popoverActive"], selected && styles54["Tab-active"], selected && actions?.length && styles54["Tab-hasActions"]), badgeMarkup = badge ? /* @__PURE__ */ React127.createElement(Badge, {
    tone: selected ? void 0 : "new"
  }, badge) : null, disclosureMarkup = selected && actions?.length ? /* @__PURE__ */ React127.createElement("div", {
    className: classNames(styles54.IconWrap)
  }, /* @__PURE__ */ React127.createElement(Icon, {
    source: SvgChevronDownIcon
  })) : null, activator = /* @__PURE__ */ React127.createElement(BaseComponent, {
    id,
    className: tabClassName,
    tabIndex,
    "aria-selected": selected,
    "aria-controls": panelID,
    "aria-label": accessibilityLabel,
    role: tabIndexOverride == null ? "tab" : void 0,
    disabled,
    url: urlIfNotDisabledOrSelected,
    onFocus,
    onMouseUp: handleMouseUpByBlurring,
    onClick: handleClick,
    onKeyDown: handleKeyDown2
  }, /* @__PURE__ */ React127.createElement(InlineStack, {
    gap: "200",
    align: "center",
    blockAlign: "center",
    wrap: !1
  }, /* @__PURE__ */ React127.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: "medium"
  }, icon ?? content), badgeMarkup), disclosureMarkup), isPlainButton = !selected || !actions?.length, renameModal = renameAction ? /* @__PURE__ */ React127.createElement(RenameModal, {
    name: content,
    open: activeModalType === "rename",
    onClose: handleModalClose,
    onClickPrimaryAction: handleSaveRenameModal,
    isModalLoading,
    viewNames
  }) : null, duplicateModal = duplicateAction ? /* @__PURE__ */ React127.createElement(DuplicateModal, {
    open: activeModalType === "duplicate",
    name: i18n.translate("Polaris.Tabs.Tab.copy", {
      name: content
    }),
    onClose: handleModalClose,
    onClickPrimaryAction: handleSaveDuplicateModal,
    isModalLoading,
    viewNames: viewNames || []
  }) : null, deleteModal = deleteAction ? /* @__PURE__ */ React127.createElement(Modal, {
    open: activeModalType === "delete",
    onClose: handleModalClose,
    primaryAction: {
      content: i18n.translate("Polaris.Tabs.Tab.deleteModal.delete"),
      onAction: handleConfirmDeleteView,
      destructive: !0,
      disabled: isModalLoading
    },
    secondaryActions: [{
      content: i18n.translate("Polaris.Tabs.Tab.deleteModal.cancel"),
      onAction: handleModalClose
    }],
    title: i18n.translate("Polaris.Tabs.Tab.deleteModal.title"),
    instant: !0
  }, /* @__PURE__ */ React127.createElement(Modal.Section, null, i18n.translate("Polaris.Tabs.Tab.deleteModal.description", {
    viewName: content
  }))) : null, markup = isPlainButton || disabled ? activator : /* @__PURE__ */ React127.createElement(React127.Fragment, null, /* @__PURE__ */ React127.createElement(Popover2, {
    active: popoverActive,
    activator,
    autofocusTarget: "first-node",
    onClose: togglePopoverActive
  }, /* @__PURE__ */ React127.createElement("div", {
    className: styles54.ActionListWrap
  }, /* @__PURE__ */ React127.createElement(ActionList, {
    actionRole: "menuitem",
    items: formattedActions
  }))), renameModal, duplicateModal, deleteModal);
  return icon ? markup : /* @__PURE__ */ React127.createElement("li", {
    className: tabContainerClassNames,
    ref: mergeRefs([node, ref]),
    role: "presentation"
  }, markup);
});
Tab.displayName = "Tab";
function focusPanelID(panelID) {
  let panel = document.getElementById(panelID);
  panel && panel.focus({
    preventScroll: !0
  });
}
function mergeRefs(refs) {
  return (node) => {
    for (let ref of refs)
      ref != null && (ref.current = node);
  };
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/TabMeasurer/TabMeasurer.js
import React128, { memo as memo6, useRef as useRef36, useCallback as useCallback29, useEffect as useEffect37 } from "react";
var TabMeasurer = /* @__PURE__ */ memo6(function({
  selected,
  tabs,
  activator,
  tabToFocus,
  siblingTabHasFocus,
  handleMeasurement: handleMeasurementProp
}) {
  let containerNode = useRef36(null), animationFrame = useRef36(null), handleMeasurement = useCallback29(() => {
    animationFrame.current && cancelAnimationFrame(animationFrame.current), animationFrame.current = requestAnimationFrame(() => {
      if (!containerNode.current)
        return;
      let containerWidth = containerNode.current.offsetWidth - 20 - 28, hiddenTabNodes = containerNode.current.children, hiddenTabWidths = Array.from(hiddenTabNodes).map((node) => Math.ceil(node.getBoundingClientRect().width) + 4), disclosureWidth = hiddenTabWidths.pop() || 0;
      handleMeasurementProp({
        containerWidth,
        disclosureWidth,
        hiddenTabWidths
      });
    });
  }, [handleMeasurementProp]);
  useEffect37(() => {
    handleMeasurement();
  }, [handleMeasurement, tabs]), useComponentDidMount(() => {
    setTimeout(handleMeasurement, 0);
  });
  let tabsMarkup = tabs.map((tab, index) => /* @__PURE__ */ React128.createElement(Tab, {
    measuring: !0,
    key: `$${tab.id}Hidden`,
    id: `${tab.id}Measurer`,
    siblingTabHasFocus,
    focused: index === tabToFocus,
    selected: index === selected,
    url: tab.url,
    content: tab.content,
    onTogglePopover: noop6,
    onToggleModal: noop6
  })), classname = classNames(styles54.Tabs, styles54.TabsMeasurer);
  return useEventListener("resize", handleMeasurement), /* @__PURE__ */ React128.createElement("div", {
    className: classname,
    ref: containerNode
  }, tabsMarkup, activator);
});
function noop6() {
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/Panel/Panel.js
import React129 from "react";
function Panel({
  hidden,
  id,
  tabID,
  children
}) {
  let className = classNames(styles54.Panel, hidden && styles54["Panel-hidden"]);
  return /* @__PURE__ */ React129.createElement("div", {
    className,
    id,
    role: "tabpanel",
    "aria-labelledby": tabID,
    tabIndex: -1
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/List/List.js
import React131 from "react";

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/Item/Item.js
import React130, { memo as memo7, useRef as useRef37, useEffect as useEffect38 } from "react";
var Item6 = /* @__PURE__ */ memo7(function({
  id,
  focused,
  children,
  url,
  accessibilityLabel,
  onClick = noop7
}) {
  let focusedNode = useRef37(null);
  useEffect38(() => {
    focusedNode.current && focusedNode.current instanceof HTMLElement && focused && focusedNode.current.focus();
  }, [focusedNode, focused]);
  let classname = classNames(styles54.Item), sharedProps = {
    id,
    ref: focusedNode,
    onClick,
    className: classname,
    "aria-selected": !1,
    "aria-label": accessibilityLabel
  }, markup = url ? /* @__PURE__ */ React130.createElement(UnstyledLink, Object.assign({}, sharedProps, {
    url
  }), children) : /* @__PURE__ */ React130.createElement("button", Object.assign({}, sharedProps, {
    ref: focusedNode,
    type: "button"
  }), children);
  return /* @__PURE__ */ React130.createElement("li", null, markup);
});
function noop7() {
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/List/List.js
function List({
  focusIndex,
  disclosureTabs,
  onClick = noop8,
  onKeyPress = noop8
}) {
  let tabs = disclosureTabs.map(({
    id,
    content,
    ...tabProps
  }, index) => /* @__PURE__ */ React131.createElement(Item6, Object.assign({
    key: id
  }, tabProps, {
    id,
    focused: index === focusIndex,
    onClick: onClick.bind(null, id)
  }), content));
  return /* @__PURE__ */ React131.createElement("ul", {
    className: styles54.List,
    onKeyDown: handleKeyDown,
    onKeyUp: onKeyPress
  }, tabs);
}
function noop8() {
}
function handleKeyDown(event) {
  let {
    key
  } = event;
  (key === "ArrowLeft" || key === "ArrowRight") && (event.preventDefault(), event.stopPropagation());
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/CreateViewModal/CreateViewModal.js
import React132, { useState as useState28, useRef as useRef38, useEffect as useEffect39, useCallback as useCallback30 } from "react";
var MAX_VIEW_NAME_LENGTH2 = 40;
function CreateViewModal({
  activator,
  open,
  onClose,
  onClickPrimaryAction,
  onClickSecondaryAction,
  viewNames
}) {
  let i18n = useI18n(), [value, setValue] = useState28(""), [loading, setLoading] = useState28(!1), container = useRef38(null), isTouchDevice = useIsTouchDevice(), hasSameNameError = viewNames.some((viewName) => viewName.trim().toLowerCase() === value.trim().toLowerCase()), isPrimaryActionDisabled = !value || hasSameNameError || loading || value.length > MAX_VIEW_NAME_LENGTH2;
  useEffect39(() => {
    if (!(!container.current || isTouchDevice) && open) {
      focusFirstFocusableNode(container.current);
      let timeout = setTimeout(() => {
        container.current && focusFirstFocusableNode(container.current);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [open, isTouchDevice]);
  let handleChange = useCallback30((newValue) => {
    setValue(newValue);
  }, []);
  async function handlePrimaryAction() {
    hasSameNameError || isPrimaryActionDisabled || (setLoading(!0), await onClickPrimaryAction(value), setLoading(!1), setValue(""), onClose());
  }
  function handleSecondaryAction() {
    onClickSecondaryAction?.(), setValue(""), onClose();
  }
  return /* @__PURE__ */ React132.createElement(Modal, {
    activator,
    open,
    onClose,
    title: i18n.translate("Polaris.Tabs.CreateViewModal.title"),
    primaryAction: {
      content: i18n.translate("Polaris.Tabs.CreateViewModal.create"),
      onAction: handlePrimaryAction,
      disabled: isPrimaryActionDisabled
    },
    secondaryActions: [{
      content: i18n.translate("Polaris.Tabs.CreateViewModal.cancel"),
      onAction: handleSecondaryAction
    }]
  }, /* @__PURE__ */ React132.createElement(Modal.Section, null, /* @__PURE__ */ React132.createElement(Form, {
    onSubmit: handlePrimaryAction
  }, /* @__PURE__ */ React132.createElement(FormLayout, null, /* @__PURE__ */ React132.createElement("div", {
    ref: container
  }, /* @__PURE__ */ React132.createElement(TextField, {
    label: i18n.translate("Polaris.Tabs.CreateViewModal.label"),
    value,
    onChange: handleChange,
    autoComplete: "off",
    maxLength: MAX_VIEW_NAME_LENGTH2,
    showCharacterCount: !0,
    error: hasSameNameError ? i18n.translate("Polaris.Tabs.CreateViewModal.errors.sameName", {
      name: value
    }) : void 0
  }))))));
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.js
var CREATE_NEW_VIEW_ID = "create-new-view", Tabs = ({
  tabs,
  children,
  selected,
  newViewAccessibilityLabel,
  canCreateNewView,
  disabled,
  onCreateNewView,
  onSelect,
  fitted,
  disclosureText
}) => {
  let i18n = useI18n(), {
    mdDown
  } = useBreakpoints(), scrollRef = useRef39(null), wrapRef = useRef39(null), selectedTabRef = useRef39(null), [state, setState] = useReducer3((data, partialData) => ({
    ...data,
    ...partialData
  }), {
    disclosureWidth: 0,
    containerWidth: 1 / 0,
    tabWidths: [],
    visibleTabs: [],
    hiddenTabs: [],
    showDisclosure: !1,
    tabToFocus: -1,
    isNewViewModalActive: !1,
    modalSubmitted: !1,
    isTabsFocused: !1,
    isTabPopoverOpen: !1,
    isTabModalOpen: !1
  }), {
    tabToFocus,
    visibleTabs,
    hiddenTabs,
    showDisclosure,
    isNewViewModalActive,
    modalSubmitted,
    disclosureWidth,
    tabWidths,
    containerWidth,
    isTabsFocused,
    isTabModalOpen,
    isTabPopoverOpen
  } = state, prevModalOpen = usePrevious(isTabModalOpen), prevPopoverOpen = usePrevious(isTabPopoverOpen);
  useEffect40(() => {
    prevModalOpen && !isTabModalOpen ? setState({
      isTabsFocused: !0,
      tabToFocus: selected
    }) : prevPopoverOpen && !isTabPopoverOpen && !isTabModalOpen && setState({
      isTabsFocused: !0,
      tabToFocus: selected
    });
  }, [prevPopoverOpen, isTabPopoverOpen, prevModalOpen, isTabModalOpen, selected, tabToFocus]);
  let handleTogglePopover = useCallback31((isOpen) => setState({
    isTabPopoverOpen: isOpen
  }), []), handleToggleModal = useCallback31((isOpen) => setState({
    isTabModalOpen: isOpen
  }), []), handleCloseNewViewModal = () => {
    setState({
      isNewViewModalActive: !1
    });
  }, handleSaveNewViewModal = async (value) => {
    if (!onCreateNewView)
      return !1;
    let hasExecuted = await onCreateNewView?.(value);
    return hasExecuted && setState({
      modalSubmitted: !0
    }), hasExecuted;
  }, handleClickNewTab = () => {
    setState({
      isNewViewModalActive: !0
    });
  }, handleTabClick = useCallback31((id) => {
    let tab = tabs.find((aTab) => aTab.id === id);
    if (tab == null)
      return null;
    let selectedIndex = tabs.indexOf(tab);
    onSelect?.(selectedIndex);
  }, [tabs, onSelect]), renderTabMarkup = useCallback31((tab, index) => {
    let handleClick = () => {
      handleTabClick(tab.id), tab.onAction?.();
    }, viewNames2 = tabs.map(({
      content
    }) => content), tabPanelID = tab.panelID || `${tab.id}-panel`;
    return /* @__PURE__ */ React133.createElement(Tab, Object.assign({}, tab, {
      key: `${index}-${tab.id}`,
      id: tab.id,
      panelID: children ? tabPanelID : void 0,
      disabled: disabled || tab.disabled,
      siblingTabHasFocus: tabToFocus > -1,
      focused: index === tabToFocus,
      selected: index === selected,
      onAction: handleClick,
      accessibilityLabel: tab.accessibilityLabel,
      url: tab.url,
      content: tab.content,
      onToggleModal: handleToggleModal,
      onTogglePopover: handleTogglePopover,
      viewNames: viewNames2,
      ref: index === selected ? selectedTabRef : null
    }));
  }, [disabled, handleTabClick, tabs, children, selected, tabToFocus, handleToggleModal, handleTogglePopover]), handleFocus = useCallback31((event) => {
    let target = event.target, isItem = target.classList.contains(styles54.Item), isInNaturalDOMOrder = target.closest("[data-tabs-focus-catchment]") || isItem;
    target.classList.contains(styles54.DisclosureActivator) || !isInNaturalDOMOrder || setState({
      isTabsFocused: !0
    });
  }, []), handleBlur = useCallback31((event) => {
    let target = event.target, relatedTarget = event.relatedTarget, isInNaturalDOMOrder = relatedTarget?.closest?.(`.${styles54.Tabs}`), targetIsATab = target?.classList?.contains?.(styles54.Tab), focusReceiverIsAnItem = relatedTarget?.classList.contains(styles54.Item);
    if (!relatedTarget && !isTabModalOpen && !targetIsATab && !focusReceiverIsAnItem) {
      setState({
        tabToFocus: -1
      });
      return;
    }
    if (!isInNaturalDOMOrder && !isTabModalOpen && !targetIsATab && !focusReceiverIsAnItem) {
      setState({
        tabToFocus: -1
      });
      return;
    }
    setState({
      isTabsFocused: !1
    });
  }, [isTabModalOpen]), handleKeyDown2 = (event) => {
    if (isTabPopoverOpen || isTabModalOpen || isNewViewModalActive)
      return;
    let {
      key
    } = event;
    (key === "ArrowLeft" || key === "ArrowRight") && (event.preventDefault(), event.stopPropagation());
  };
  useEffect40(() => {
    let {
      visibleTabs: visibleTabs2,
      hiddenTabs: hiddenTabs2
    } = getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth, tabWidths, containerWidth);
    setState({
      visibleTabs: visibleTabs2,
      hiddenTabs: hiddenTabs2
    });
  }, [containerWidth, disclosureWidth, tabs, selected, tabWidths, setState]);
  let moveToSelectedTab = useCallback31(() => {
    let activeButton = selectedTabRef.current?.querySelector(`.${styles54["Tab-active"]}`);
    activeButton && moveToActiveTab(activeButton.offsetLeft);
  }, []);
  useEffect40(() => {
    mdDown && moveToSelectedTab();
  }, [moveToSelectedTab, selected, mdDown]), useEffect40(() => {
    isTabsFocused && !showDisclosure && setState({
      tabToFocus: selected
    });
  }, [isTabsFocused, selected, setState, showDisclosure]);
  let handleKeyPress = (event) => {
    let {
      showDisclosure: showDisclosure2,
      visibleTabs: visibleTabs2,
      hiddenTabs: hiddenTabs2,
      tabToFocus: tabToFocus2,
      isNewViewModalActive: isNewViewModalActive2
    } = state;
    if (isTabModalOpen || isTabPopoverOpen || isNewViewModalActive2)
      return;
    let key = event.key, tabsArrayInOrder = showDisclosure2 || mdDown ? visibleTabs2.concat(hiddenTabs2) : [...visibleTabs2], newFocus = tabsArrayInOrder.indexOf(tabToFocus2);
    key === "ArrowRight" && (newFocus += 1, newFocus === tabsArrayInOrder.length && (newFocus = 0)), key === "ArrowLeft" && (newFocus === -1 || newFocus === 0 ? newFocus = tabsArrayInOrder.length - 1 : newFocus -= 1);
    let buttonToFocus = tabsArrayInOrder[newFocus];
    buttonToFocus != null && setState({
      tabToFocus: buttonToFocus
    });
  }, handleDisclosureActivatorClick = () => {
    setState({
      showDisclosure: !showDisclosure,
      tabToFocus: hiddenTabs[0]
    });
  }, handleClose = () => {
    setState({
      showDisclosure: !1
    });
  }, handleMeasurement = useCallback31((measurements) => {
    let {
      hiddenTabWidths: tabWidths2,
      containerWidth: containerWidth2,
      disclosureWidth: disclosureWidth2
    } = measurements, {
      visibleTabs: visibleTabs2,
      hiddenTabs: hiddenTabs2
    } = getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth2, tabWidths2, containerWidth2);
    setState({
      visibleTabs: visibleTabs2,
      hiddenTabs: hiddenTabs2,
      disclosureWidth: disclosureWidth2,
      containerWidth: containerWidth2,
      tabWidths: tabWidths2
    });
  }, [tabs, selected, setState]), handleListTabClick = (id) => {
    handleTabClick(id), handleClose(), setState({
      isTabsFocused: !0
    });
  }, moveToActiveTab = (offsetLeft) => {
    setTimeout(() => {
      if (scrollRef.current && typeof scrollRef.current.scroll == "function") {
        let scrollRefOffset = wrapRef?.current?.offsetLeft || 0;
        scrollRef?.current?.scroll({
          left: offsetLeft - scrollRefOffset
        });
      }
    }, 0);
  }, createViewA11yLabel = newViewAccessibilityLabel || i18n.translate("Polaris.Tabs.newViewAccessibilityLabel"), tabsToShow = mdDown ? [...visibleTabs, ...hiddenTabs] : visibleTabs, tabsMarkup = tabsToShow.sort((tabA, tabB) => tabA - tabB).filter((tabIndex) => tabs[tabIndex]).map((tabIndex) => renderTabMarkup(tabs[tabIndex], tabIndex)), disclosureActivatorVisible = visibleTabs.length < tabs.length && !mdDown, classname = classNames(styles54.Tabs, fitted && styles54.fitted, disclosureActivatorVisible && styles54.fillSpace), wrapperClassNames = classNames(styles54.Wrapper, canCreateNewView && styles54.WrapperWithNewButton), disclosureTabClassName = classNames(styles54.DisclosureTab, disclosureActivatorVisible && styles54["DisclosureTab-visible"]), disclosureButtonClassName = classNames(styles54.DisclosureActivator), disclosureButtonContent = /* @__PURE__ */ React133.createElement(React133.Fragment, null, /* @__PURE__ */ React133.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: "medium"
  }, disclosureText ?? i18n.translate("Polaris.Tabs.toggleTabsLabel")), /* @__PURE__ */ React133.createElement("div", {
    className: classNames(styles54.IconWrap, disclosureActivatorVisible && showDisclosure && styles54["IconWrap-open"])
  }, /* @__PURE__ */ React133.createElement(Icon, {
    source: SvgChevronDownIcon,
    tone: "subdued"
  }))), activator = /* @__PURE__ */ React133.createElement(UnstyledButton, {
    type: "button",
    className: disclosureButtonClassName,
    onClick: handleDisclosureActivatorClick,
    "aria-label": disclosureText ?? i18n.translate("Polaris.Tabs.toggleTabsLabel"),
    disabled
  }, disclosureButtonContent), disclosureTabs = hiddenTabs.map((tabIndex) => tabs[tabIndex]), viewNames = tabs.map(({
    content
  }) => content), tabMeasurer = /* @__PURE__ */ React133.createElement(TabMeasurer, {
    tabToFocus,
    activator,
    selected,
    tabs,
    siblingTabHasFocus: tabToFocus > -1,
    handleMeasurement
  }), newTab = /* @__PURE__ */ React133.createElement(Tab, {
    id: CREATE_NEW_VIEW_ID,
    content: createViewA11yLabel,
    actions: [],
    onAction: handleClickNewTab,
    onFocus: () => {
      modalSubmitted && setState({
        tabToFocus: selected,
        modalSubmitted: !1
      });
    },
    icon: /* @__PURE__ */ React133.createElement(Icon, {
      source: SvgPlusIcon,
      accessibilityLabel: createViewA11yLabel
    }),
    disabled,
    onTogglePopover: handleTogglePopover,
    onToggleModal: handleToggleModal,
    tabIndexOverride: 0
  }), panelMarkup = children ? tabs.map((_tab, index) => selected === index ? /* @__PURE__ */ React133.createElement(Panel, {
    id: tabs[index].panelID || `${tabs[index].id}-panel`,
    tabID: tabs[index].id,
    key: tabs[index].id
  }, children) : /* @__PURE__ */ React133.createElement(Panel, {
    id: tabs[index].panelID || `${tabs[index].id}-panel`,
    tabID: tabs[index].id,
    key: tabs[index].id,
    hidden: !0
  })) : null;
  return /* @__PURE__ */ React133.createElement("div", {
    className: styles54.Outer
  }, /* @__PURE__ */ React133.createElement(Box, {
    padding: {
      md: "200"
    }
  }, tabMeasurer, /* @__PURE__ */ React133.createElement("div", {
    className: wrapperClassNames,
    ref: scrollRef
  }, /* @__PURE__ */ React133.createElement("div", {
    className: styles54.ButtonWrapper,
    ref: wrapRef
  }, /* @__PURE__ */ React133.createElement("ul", {
    role: tabsMarkup.length > 0 ? "tablist" : void 0,
    className: classname,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyPress,
    "data-tabs-focus-catchment": !0
  }, tabsMarkup, mdDown || tabsToShow.length === 0 ? null : /* @__PURE__ */ React133.createElement("li", {
    className: disclosureTabClassName,
    role: "presentation"
  }, /* @__PURE__ */ React133.createElement(Popover2, {
    preferredPosition: "below",
    preferredAlignment: "left",
    activator,
    active: disclosureActivatorVisible && showDisclosure,
    onClose: handleClose,
    autofocusTarget: "first-node"
  }, /* @__PURE__ */ React133.createElement(List, {
    focusIndex: hiddenTabs.indexOf(tabToFocus),
    disclosureTabs,
    onClick: handleListTabClick,
    onKeyPress: handleKeyPress
  })))), canCreateNewView && tabsToShow.length > 0 ? /* @__PURE__ */ React133.createElement("div", {
    className: styles54.NewTab
  }, /* @__PURE__ */ React133.createElement(CreateViewModal, {
    open: isNewViewModalActive,
    onClose: handleCloseNewViewModal,
    onClickPrimaryAction: handleSaveNewViewModal,
    viewNames,
    activator: disabled ? newTab : /* @__PURE__ */ React133.createElement("div", null, /* @__PURE__ */ React133.createElement(Tooltip, {
      content: i18n.translate("Polaris.Tabs.newViewTooltip"),
      preferredPosition: "above",
      hoverDelay: 400
    }, newTab))
  })) : null))), panelMarkup);
};

// node_modules/@shopify/polaris/build/esm/components/Layout/Layout.js
import React137 from "react";

// node_modules/@shopify/polaris/build/esm/components/Layout/Layout.css.js
var styles55 = {
  Layout: "Polaris-Layout",
  Section: "Polaris-Layout__Section",
  "Section-fullWidth": "Polaris-Layout__Section--fullWidth",
  "Section-oneHalf": "Polaris-Layout__Section--oneHalf",
  "Section-oneThird": "Polaris-Layout__Section--oneThird",
  AnnotatedSection: "Polaris-Layout__AnnotatedSection",
  AnnotationWrapper: "Polaris-Layout__AnnotationWrapper",
  AnnotationContent: "Polaris-Layout__AnnotationContent",
  Annotation: "Polaris-Layout__Annotation"
};

// node_modules/@shopify/polaris/build/esm/components/Layout/components/AnnotatedSection/AnnotatedSection.js
import React135 from "react";

// node_modules/@shopify/polaris/build/esm/components/TextContainer/TextContainer.js
import React134 from "react";

// node_modules/@shopify/polaris/build/esm/components/TextContainer/TextContainer.css.js
var styles56 = {
  TextContainer: "Polaris-TextContainer",
  spacingTight: "Polaris-TextContainer--spacingTight",
  spacingLoose: "Polaris-TextContainer--spacingLoose"
};

// node_modules/@shopify/polaris/build/esm/components/TextContainer/TextContainer.js
function TextContainer({
  spacing,
  children
}) {
  let className = classNames(styles56.TextContainer, spacing && styles56[variationName("spacing", spacing)]);
  return /* @__PURE__ */ React134.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Layout/components/AnnotatedSection/AnnotatedSection.js
function AnnotatedSection({
  children,
  title,
  description,
  id
}) {
  let descriptionMarkup = typeof description == "string" ? /* @__PURE__ */ React135.createElement(Text, {
    as: "p",
    variant: "bodyMd"
  }, description) : description;
  return /* @__PURE__ */ React135.createElement("div", {
    className: styles55.AnnotatedSection
  }, /* @__PURE__ */ React135.createElement("div", {
    className: styles55.AnnotationWrapper
  }, /* @__PURE__ */ React135.createElement("div", {
    className: styles55.Annotation
  }, /* @__PURE__ */ React135.createElement(TextContainer, {
    spacing: "tight"
  }, /* @__PURE__ */ React135.createElement(Text, {
    id,
    variant: "headingMd",
    as: "h2"
  }, title), descriptionMarkup && /* @__PURE__ */ React135.createElement(Box, {
    color: "text-secondary"
  }, descriptionMarkup))), /* @__PURE__ */ React135.createElement("div", {
    className: styles55.AnnotationContent
  }, children)));
}

// node_modules/@shopify/polaris/build/esm/components/Layout/components/Section/Section.js
import React136 from "react";
function Section4({
  children,
  variant
}) {
  let className = classNames(styles55.Section, styles55[`Section-${variant}`]);
  return /* @__PURE__ */ React136.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Layout/Layout.js
var Layout = function({
  sectioned,
  children
}) {
  let content = sectioned ? /* @__PURE__ */ React137.createElement(Section4, null, children) : children;
  return /* @__PURE__ */ React137.createElement("div", {
    className: styles55.Layout
  }, content);
};
Layout.AnnotatedSection = AnnotatedSection;
Layout.Section = Section4;

// node_modules/@shopify/polaris/build/esm/utilities/resource-list/context.js
import { createContext as createContext18 } from "react";
var ResourceListContext = /* @__PURE__ */ createContext18({});

// node_modules/@shopify/polaris/build/esm/components/Link/Link.js
import React138 from "react";

// node_modules/@shopify/polaris/build/esm/components/Link/Link.css.js
var styles57 = {
  Link: "Polaris-Link",
  monochrome: "Polaris-Link--monochrome",
  removeUnderline: "Polaris-Link--removeUnderline"
};

// node_modules/@shopify/polaris/build/esm/components/Link/Link.js
function Link({
  url,
  children,
  onClick,
  external,
  target,
  id,
  monochrome,
  removeUnderline,
  accessibilityLabel,
  dataPrimaryLink
}) {
  return /* @__PURE__ */ React138.createElement(BannerContext.Consumer, null, (BannerContext2) => {
    let shouldBeMonochrome = monochrome || BannerContext2, className = classNames(styles57.Link, shouldBeMonochrome && styles57.monochrome, removeUnderline && styles57.removeUnderline);
    return url ? /* @__PURE__ */ React138.createElement(UnstyledLink, {
      onClick,
      className,
      url,
      external,
      target,
      id,
      "aria-label": accessibilityLabel,
      "data-primary-link": dataPrimaryLink
    }, children) : /* @__PURE__ */ React138.createElement("button", {
      type: "button",
      onClick,
      className,
      id,
      "aria-label": accessibilityLabel,
      "data-primary-link": dataPrimaryLink
    }, children);
  });
}

// node_modules/@shopify/polaris/build/esm/components/Navigation/Navigation.js
import React142, { useMemo as useMemo9 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Navigation/context.js
import { createContext as createContext19 } from "react";
var NavigationContext = /* @__PURE__ */ createContext19({
  location: ""
});

// node_modules/@shopify/polaris/build/esm/components/Navigation/Navigation.css.js
var styles58 = {
  Navigation: "Polaris-Navigation",
  UserMenu: "Polaris-Navigation__UserMenu",
  ContextControl: "Polaris-Navigation__ContextControl",
  PrimaryNavigation: "Polaris-Navigation__PrimaryNavigation",
  LogoContainer: "Polaris-Navigation__LogoContainer",
  hasLogoSuffix: "Polaris-Navigation--hasLogoSuffix",
  Logo: "Polaris-Navigation__Logo",
  LogoLink: "Polaris-Navigation__LogoLink",
  Item: "Polaris-Navigation__Item",
  "Icon-resized": "Polaris-Navigation__Icon--resized",
  Badge: "Polaris-Navigation__Badge",
  ItemInnerWrapper: "Polaris-Navigation__ItemInnerWrapper",
  ItemWrapper: "Polaris-Navigation__ItemWrapper",
  ItemInnerDisabled: "Polaris-Navigation__ItemInnerDisabled",
  "ItemInnerWrapper-display-actions-on-hover": "Polaris-Navigation--itemInnerWrapperDisplayActionsOnHover",
  SecondaryActions: "Polaris-Navigation__SecondaryActions",
  "ItemInnerWrapper-selected": "Polaris-Navigation__ItemInnerWrapper--selected",
  Text: "Polaris-Navigation__Text",
  "ItemInnerWrapper-open": "Polaris-Navigation__ItemInnerWrapper--open",
  "Item-selected": "Polaris-Navigation__Item--selected",
  "Item-child-active": "Polaris-Navigation--itemChildActive",
  "Item-disabled": "Polaris-Navigation__Item--disabled",
  Icon: "Polaris-Navigation__Icon",
  "ListItem-hasAction": "Polaris-Navigation__ListItem--hasAction",
  subNavigationActive: "Polaris-Navigation--subNavigationActive",
  ListItem: "Polaris-Navigation__ListItem",
  RollupSection: "Polaris-Navigation__RollupSection",
  SecondaryNavigation: "Polaris-Navigation__SecondaryNavigation",
  "Text-truncated": "Polaris-Navigation__Text--truncated",
  ItemWithFloatingActions: "Polaris-Navigation__ItemWithFloatingActions",
  SecondaryAction: "Polaris-Navigation__SecondaryAction",
  List: "Polaris-Navigation__List",
  "Item-line": "Polaris-Navigation__Item--line",
  "Item-hover-line": "Polaris-Navigation--itemHoverLine",
  "Item-line-pointer": "Polaris-Navigation--itemLinePointer",
  "Item-hover-pointer": "Polaris-Navigation--itemHoverPointer",
  "SecondaryNavigation-noIcon": "Polaris-Navigation__SecondaryNavigation--noIcon",
  Section: "Polaris-Navigation__Section",
  "Section-fill": "Polaris-Navigation__Section--fill",
  "Section-withSeparator": "Polaris-Navigation__Section--withSeparator",
  SectionHeading: "Polaris-Navigation__SectionHeading",
  Action: "Polaris-Navigation__Action",
  RollupToggle: "Polaris-Navigation__RollupToggle",
  Indicator: "Polaris-Navigation__Indicator",
  SecondaryNavigationOpen: "Polaris-Navigation__SecondaryNavigationOpen",
  "snappy-grow": "Polaris-Navigation__snappy--grow"
};

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Section/Section.js
import React141, { useRef as useRef41, useState as useState31, useEffect as useEffect42, useId as useId13 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Item/Item.js
import React140, { useId as useId12, useContext as useContext17, useRef as useRef40, useState as useState30, useEffect as useEffect41 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Navigation/types.js
var MatchState;
(function(MatchState2) {
  MatchState2[MatchState2.MatchForced = 0] = "MatchForced", MatchState2[MatchState2.MatchUrl = 1] = "MatchUrl", MatchState2[MatchState2.MatchPaths = 2] = "MatchPaths", MatchState2[MatchState2.Excluded = 3] = "Excluded", MatchState2[MatchState2.NoMatch = 4] = "NoMatch";
})(MatchState || (MatchState = {}));

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Item/components/SecondaryNavigation/SecondaryNavigation.js
import React139, { useId as useId11, useContext as useContext16, useState as useState29 } from "react";
import isEqual3 from "react-fast-compare";
function SecondaryNavigation({
  ItemComponent,
  icon,
  longestMatch,
  subNavigationItems,
  showExpanded,
  truncateText,
  secondaryNavigationId
}) {
  let uid = useId11(), {
    onNavigationDismiss
  } = useContext16(NavigationContext), [hoveredItem, setHoveredItem] = useState29(), matchedItemPosition = subNavigationItems.findIndex((item) => isEqual3(item, longestMatch)), hoveredItemPosition = subNavigationItems.findIndex((item) => isEqual3(item, hoveredItem));
  return /* @__PURE__ */ React139.createElement("div", {
    className: classNames(styles58.SecondaryNavigation, showExpanded && styles58.SecondaryNavigationOpen, !icon && styles58["SecondaryNavigation-noIcon"])
  }, /* @__PURE__ */ React139.createElement(Collapsible, {
    id: secondaryNavigationId || uid,
    open: showExpanded,
    transition: !1
  }, /* @__PURE__ */ React139.createElement("ul", {
    className: styles58.List
  }, subNavigationItems.map((item, index) => {
    let {
      label,
      ...rest
    } = item, onClick = () => {
      onNavigationDismiss?.(), item.onClick && item.onClick !== onNavigationDismiss && item.onClick();
    }, shouldShowVerticalLine = index < matchedItemPosition;
    return /* @__PURE__ */ React139.createElement(ItemComponent, Object.assign({
      key: label
    }, rest, {
      label,
      showVerticalLine: shouldShowVerticalLine,
      showVerticalHoverPointer: index === hoveredItemPosition,
      level: 1,
      onMouseEnter: item.disabled ? void 0 : () => setHoveredItem(item),
      onMouseLeave: item.disabled ? void 0 : () => setHoveredItem(void 0),
      matches: isEqual3(item, longestMatch),
      onClick,
      truncateText
    }));
  }))));
}

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Item/Item.js
var MAX_SECONDARY_ACTIONS = 2, TOOLTIP_HOVER_DELAY = 1e3;
function Item8({
  url,
  icon: baseIcon,
  matchedItemIcon,
  label,
  subNavigationItems = [],
  secondaryAction,
  secondaryActions,
  displayActionsOnHover,
  disabled,
  onClick,
  accessibilityLabel,
  selected: selectedOverride,
  badge,
  new: isNew,
  matches: matches2,
  exactMatch,
  matchPaths,
  excludePaths,
  external,
  onToggleExpandedState,
  expanded,
  shouldResizeIcon,
  truncateText,
  showVerticalLine,
  showVerticalHoverPointer,
  level = 0,
  onMouseEnter,
  onMouseLeave
}) {
  let i18n = useI18n(), {
    isNavigationCollapsed
  } = useMediaQuery(), secondaryNavigationId = useId12(), {
    location: location2,
    onNavigationDismiss
  } = useContext17(NavigationContext), navTextRef = useRef40(null), [isTruncated, setIsTruncated] = useState30(!1);
  useEffect41(() => {
    !isNavigationCollapsed && expanded && onToggleExpandedState?.();
  }, [expanded, isNavigationCollapsed, onToggleExpandedState]), useIsomorphicLayoutEffect(() => {
    let navTextNode = navTextRef.current;
    truncateText && navTextNode && setIsTruncated(navTextNode.scrollHeight > navTextNode.clientHeight);
  }, [truncateText]);
  let tabIndex = disabled ? -1 : 0, indicatorMarkup = subNavigationItems.filter((subNavigationItem) => subNavigationItem.new).length > 0 ? /* @__PURE__ */ React140.createElement("span", {
    className: styles58.Indicator
  }, /* @__PURE__ */ React140.createElement(Indicator, {
    pulse: !0
  })) : null, matchState = matchStateForItem({
    url,
    matches: matches2,
    exactMatch,
    matchPaths,
    excludePaths
  }, location2), matchingSubNavigationItems = subNavigationItems.filter((item) => {
    let subMatchState = matchStateForItem(item, location2);
    return subMatchState === MatchState.MatchForced || subMatchState === MatchState.MatchUrl || subMatchState === MatchState.MatchPaths;
  }), childIsActive = matchingSubNavigationItems.length > 0, selected = selectedOverride ?? (matchState === MatchState.MatchForced || matchState === MatchState.MatchUrl || matchState === MatchState.MatchPaths), icon = selected || childIsActive ? matchedItemIcon ?? baseIcon : baseIcon, iconMarkup = icon ? /* @__PURE__ */ React140.createElement("div", {
    className: classNames(styles58.Icon, shouldResizeIcon && styles58["Icon-resized"])
  }, /* @__PURE__ */ React140.createElement(Icon, {
    source: icon
  })) : null, badgeMarkup = null;
  isNew ? badgeMarkup = /* @__PURE__ */ React140.createElement(Badge, {
    tone: "new"
  }, i18n.translate("Polaris.Badge.TONE_LABELS.new")) : typeof badge == "string" ? badgeMarkup = /* @__PURE__ */ React140.createElement(Badge, {
    tone: "new"
  }, badge) : badgeMarkup = badge;
  let wrappedBadgeMarkup = badgeMarkup == null ? null : /* @__PURE__ */ React140.createElement("div", {
    className: styles58.Badge
  }, badgeMarkup), tone = !showVerticalHoverPointer && !matches2 && level !== 0 ? "subdued" : void 0, fontWeight = "regular";
  (matches2 || selected) && !childIsActive ? fontWeight = "semibold" : (level === 0 || showVerticalHoverPointer) && (fontWeight = "medium");
  let itemLabelMarkup = /* @__PURE__ */ React140.createElement("span", {
    className: classNames(styles58.Text, truncateText && styles58["Text-truncated"]),
    ref: navTextRef
  }, /* @__PURE__ */ React140.createElement(Text, {
    as: "span",
    variant: "bodyMd",
    tone,
    fontWeight
  }, label), indicatorMarkup);
  if (url == null) {
    let className2 = classNames(styles58.Item, disabled && styles58["Item-disabled"], selectedOverride && styles58["Item-selected"]);
    return /* @__PURE__ */ React140.createElement("li", {
      className: styles58.ListItem
    }, /* @__PURE__ */ React140.createElement("div", {
      className: styles58.ItemWrapper
    }, /* @__PURE__ */ React140.createElement("div", {
      className: classNames(styles58.ItemInnerWrapper, disabled && styles58.ItemInnerDisabled, selectedOverride && styles58["ItemInnerWrapper-selected"])
    }, /* @__PURE__ */ React140.createElement("button", {
      type: "button",
      className: className2,
      disabled,
      "aria-disabled": disabled,
      "aria-label": accessibilityLabel,
      onClick: getClickHandler(onClick)
    }, iconMarkup, itemLabelMarkup, wrappedBadgeMarkup))));
  }
  secondaryAction && console.warn("Deprecation: The `secondaryAction` prop on the `Navigation.Item` has been deprecated. Use `secondaryActions` instead.");
  let actions = secondaryActions || secondaryAction && [secondaryAction];
  actions && actions.length > MAX_SECONDARY_ACTIONS && (actions.length = MAX_SECONDARY_ACTIONS, console.warn(`secondaryActions must have a maximum of ${MAX_SECONDARY_ACTIONS} actions. Only the first ${MAX_SECONDARY_ACTIONS} actions will be rendered.`));
  let secondaryActionMarkup = actions?.length ? /* @__PURE__ */ React140.createElement("span", {
    className: styles58.SecondaryActions
  }, actions.map((action) => /* @__PURE__ */ React140.createElement(ItemSecondaryAction, Object.assign({
    key: action.accessibilityLabel
  }, action, {
    tabIndex,
    disabled
  })))) : null, itemContentMarkup = /* @__PURE__ */ React140.createElement(React140.Fragment, null, iconMarkup, itemLabelMarkup, secondaryActionMarkup ? null : wrappedBadgeMarkup), outerContentMarkup = /* @__PURE__ */ React140.createElement(React140.Fragment, null, secondaryActionMarkup ? wrappedBadgeMarkup : null), showExpanded = selected || expanded || childIsActive, itemClassName = classNames(styles58.Item, disabled && styles58["Item-disabled"], (selected || childIsActive) && styles58["Item-selected"], showExpanded && styles58.subNavigationActive, childIsActive && styles58["Item-child-active"], showVerticalLine && styles58["Item-line"], matches2 && styles58["Item-line-pointer"], showVerticalHoverPointer && styles58["Item-hover-pointer"]), secondaryNavigationMarkup = null;
  if (subNavigationItems.length > 0) {
    let longestMatch = matchingSubNavigationItems.sort(({
      url: firstUrl
    }, {
      url: secondUrl
    }) => secondUrl.length - firstUrl.length)[0];
    secondaryNavigationMarkup = /* @__PURE__ */ React140.createElement(SecondaryNavigation, {
      ItemComponent: Item8,
      icon,
      longestMatch,
      subNavigationItems,
      showExpanded,
      truncateText,
      secondaryNavigationId
    });
  }
  let className = classNames(styles58.ListItem, Boolean(actions && actions.length) && styles58["ListItem-hasAction"]), itemLinkMarkup = () => {
    let linkMarkup = /* @__PURE__ */ React140.createElement(UnstyledLink, Object.assign({
      url,
      className: itemClassName,
      external,
      tabIndex,
      "aria-disabled": disabled,
      "aria-label": accessibilityLabel,
      onClick: getClickHandler(onClick)
    }, normalizeAriaAttributes(secondaryNavigationId, subNavigationItems.length > 0, showExpanded)), itemContentMarkup);
    return isTruncated ? /* @__PURE__ */ React140.createElement(Tooltip, {
      hoverDelay: TOOLTIP_HOVER_DELAY,
      content: label,
      preferredPosition: "above"
    }, linkMarkup) : linkMarkup;
  };
  return /* @__PURE__ */ React140.createElement("li", {
    className,
    onMouseEnter: () => {
      onMouseEnter?.(label);
    },
    onMouseLeave
  }, /* @__PURE__ */ React140.createElement("div", {
    className: styles58.ItemWrapper
  }, /* @__PURE__ */ React140.createElement("div", {
    className: classNames(styles58.ItemInnerWrapper, selected && childIsActive && styles58["ItemInnerWrapper-open"] || selected && !childIsActive && styles58["ItemInnerWrapper-selected"], displayActionsOnHover && styles58["ItemInnerWrapper-display-actions-on-hover"], disabled && styles58.ItemInnerDisabled)
  }, displayActionsOnHover && secondaryActionMarkup && wrappedBadgeMarkup ? /* @__PURE__ */ React140.createElement("span", {
    className: styles58.ItemWithFloatingActions
  }, itemLinkMarkup(), secondaryActionMarkup) : /* @__PURE__ */ React140.createElement(React140.Fragment, null, itemLinkMarkup(), secondaryActionMarkup), outerContentMarkup)), secondaryNavigationMarkup);
  function getClickHandler(onClick2) {
    return (event) => {
      let {
        currentTarget
      } = event;
      if (currentTarget.getAttribute("href") === location2 && event.preventDefault(), subNavigationItems && subNavigationItems.length > 0 && isNavigationCollapsed)
        event.preventDefault(), onToggleExpandedState?.();
      else if (onNavigationDismiss) {
        onNavigationDismiss(), onClick2 && onClick2 !== onNavigationDismiss && onClick2();
        return;
      }
      onClick2 && onClick2();
    };
  }
}
function ItemSecondaryAction({
  url,
  icon,
  accessibilityLabel,
  tooltip,
  onClick,
  disabled,
  tabIndex
}) {
  let markup = url ? /* @__PURE__ */ React140.createElement(UnstyledLink, {
    external: !0,
    url,
    className: styles58.SecondaryAction,
    tabIndex,
    "aria-disabled": disabled,
    "aria-label": accessibilityLabel,
    onClick
  }, /* @__PURE__ */ React140.createElement(Icon, {
    source: icon
  })) : /* @__PURE__ */ React140.createElement(UnstyledButton, {
    className: styles58.SecondaryAction,
    tabIndex,
    disabled,
    accessibilityLabel,
    onClick
  }, /* @__PURE__ */ React140.createElement(Icon, {
    source: icon
  }));
  return tooltip ? /* @__PURE__ */ React140.createElement(Tooltip, tooltip, " ", markup, " ") : markup;
}
function normalizePathname(pathname) {
  let barePathname = pathname.split("?")[0].split("#")[0];
  return barePathname.endsWith("/") ? barePathname : `${barePathname}/`;
}
function safeEqual(location2, path) {
  return normalizePathname(location2) === normalizePathname(path);
}
function safeStartsWith(location2, path) {
  return normalizePathname(location2).startsWith(normalizePathname(path));
}
function matchStateForItem({
  url,
  matches: matches2,
  exactMatch,
  matchPaths,
  excludePaths
}, location2) {
  return url == null ? MatchState.NoMatch : matches2 ? MatchState.MatchForced : matches2 === !1 || excludePaths && excludePaths.some((path) => safeStartsWith(location2, path)) ? MatchState.Excluded : matchPaths && matchPaths.some((path) => safeStartsWith(location2, path)) ? MatchState.MatchPaths : (exactMatch ? safeEqual(location2, url) : safeStartsWith(location2, url)) ? MatchState.MatchUrl : MatchState.NoMatch;
}
function normalizeAriaAttributes(controlId, hasSubMenu, expanded) {
  return hasSubMenu ? {
    "aria-expanded": expanded,
    "aria-controls": controlId
  } : void 0;
}

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Section/Section.js
function Section5({
  title,
  fill,
  action,
  items,
  rollup,
  separator
}) {
  let {
    value: expanded,
    toggle: toggleExpanded,
    setFalse: setExpandedFalse
  } = useToggle(!1), animationFrame = useRef41(null), {
    isNavigationCollapsed
  } = useMediaQuery(), [expandedIndex, setExpandedIndex] = useState31(), handleClick = (onClick, hasSubNavItems) => () => {
    onClick && onClick(), animationFrame.current && cancelAnimationFrame(animationFrame.current), (!hasSubNavItems || !isNavigationCollapsed) && (animationFrame.current = requestAnimationFrame(setExpandedFalse));
  };
  useEffect42(() => () => {
    animationFrame.current && cancelAnimationFrame(animationFrame.current);
  });
  let className = classNames(styles58.Section, separator && styles58["Section-withSeparator"], fill && styles58["Section-fill"]), buttonMarkup = action && /* @__PURE__ */ React141.createElement("button", {
    type: "button",
    className: styles58.Action,
    "aria-label": action.accessibilityLabel,
    onClick: action.onClick
  }, /* @__PURE__ */ React141.createElement(Icon, {
    source: action.icon
  })), actionMarkup = action && (action.tooltip ? /* @__PURE__ */ React141.createElement(Tooltip, action.tooltip, buttonMarkup) : buttonMarkup), sectionHeadingMarkup = title && /* @__PURE__ */ React141.createElement("li", {
    className: styles58.SectionHeading
  }, /* @__PURE__ */ React141.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: "medium",
    tone: "subdued"
  }, title), actionMarkup), itemsMarkup = items.map((item, index) => {
    let {
      onClick,
      label,
      subNavigationItems,
      ...rest
    } = item, hasSubNavItems = subNavigationItems != null && subNavigationItems.length > 0, handleToggleExpandedState = () => {
      setExpandedIndex(expandedIndex === index ? -1 : index);
    };
    return /* @__PURE__ */ React141.createElement(Item8, Object.assign({
      key: label
    }, rest, {
      label,
      subNavigationItems,
      onClick: handleClick(onClick, hasSubNavItems),
      onToggleExpandedState: handleToggleExpandedState,
      expanded: expandedIndex === index
    }));
  }), toggleClassName = classNames(styles58.Item, styles58.RollupToggle), ariaLabel = rollup && (expanded ? rollup.hide : rollup.view), toggleRollup = rollup && items.length > rollup.after && /* @__PURE__ */ React141.createElement("div", {
    className: styles58.ListItem,
    key: "List Item"
  }, /* @__PURE__ */ React141.createElement("div", {
    className: styles58.ItemWrapper
  }, /* @__PURE__ */ React141.createElement("div", {
    className: styles58.ItemInnerWrapper
  }, /* @__PURE__ */ React141.createElement("button", {
    type: "button",
    className: toggleClassName,
    onClick: toggleExpanded,
    "aria-label": ariaLabel
  }, /* @__PURE__ */ React141.createElement("span", {
    className: styles58.Icon
  }, /* @__PURE__ */ React141.createElement(Icon, {
    source: SvgMenuHorizontalIcon
  })))))), activeItemIndex = items.findIndex((item) => rollup ? rollup.activePath === item.url || item.url && rollup.activePath.startsWith(item.url) || (item.subNavigationItems ? item.subNavigationItems.some(({
    url: itemUrl
  }) => rollup.activePath.startsWith(itemUrl)) : !1) : !1), sectionItems = rollup ? itemsMarkup.slice(0, rollup.after) : itemsMarkup, additionalItems = rollup ? itemsMarkup.slice(rollup.after) : [];
  rollup && activeItemIndex !== -1 && activeItemIndex > rollup.after - 1 && sectionItems.push(...additionalItems.splice(activeItemIndex - rollup.after, 1));
  let additionalItemsId = useId13(), activeItemsMarkup = rollup && additionalItems.length > 0 && /* @__PURE__ */ React141.createElement("li", {
    className: styles58.RollupSection
  }, /* @__PURE__ */ React141.createElement(Collapsible, {
    id: additionalItemsId,
    open: expanded
  }, /* @__PURE__ */ React141.createElement("ul", {
    className: styles58.List
  }, additionalItems)), toggleRollup);
  return /* @__PURE__ */ React141.createElement("ul", {
    className
  }, sectionHeadingMarkup, sectionItems, activeItemsMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Navigation/Navigation.js
var Navigation2 = function({
  children,
  contextControl,
  location: location2,
  onDismiss,
  ariaLabelledBy,
  logoSuffix
}) {
  let {
    logo
  } = useFrame(), width2 = getWidth(logo, 104), logoMarkup = logo ? /* @__PURE__ */ React142.createElement("div", {
    className: classNames(styles58.LogoContainer, logoSuffix && styles58.hasLogoSuffix)
  }, /* @__PURE__ */ React142.createElement(UnstyledLink, {
    url: logo.url || "",
    className: styles58.LogoLink,
    style: {
      width: width2
    }
  }, /* @__PURE__ */ React142.createElement(Image, {
    source: logo.topBarSource || "",
    alt: logo.accessibilityLabel || "",
    className: styles58.Logo,
    style: {
      width: width2
    }
  })), logoSuffix) : null, mediaMarkup = contextControl ? /* @__PURE__ */ React142.createElement("div", {
    className: styles58.ContextControl
  }, contextControl) : logoMarkup, context = useMemo9(() => ({
    location: location2,
    onNavigationDismiss: onDismiss
  }), [location2, onDismiss]);
  return /* @__PURE__ */ React142.createElement(NavigationContext.Provider, {
    value: context
  }, /* @__PURE__ */ React142.createElement(WithinContentContext.Provider, {
    value: !0
  }, /* @__PURE__ */ React142.createElement("nav", {
    className: styles58.Navigation,
    "aria-labelledby": ariaLabelledBy
  }, mediaMarkup, /* @__PURE__ */ React142.createElement(Scrollable, {
    className: styles58.PrimaryNavigation
  }, children))));
};
Navigation2.Item = Item8;
Navigation2.Section = Section5;

// node_modules/@shopify/polaris/build/esm/components/Page/Page.js
import React145 from "react";

// node_modules/@shopify/polaris/build/esm/utilities/is-interface.js
import { isValidElement as isValidElement2 } from "react";
function isInterface(x) {
  return !/* @__PURE__ */ isValidElement2(x) && x !== void 0;
}

// node_modules/@shopify/polaris/build/esm/utilities/is-react-element.js
import { isValidElement as isValidElement3 } from "react";
function isReactElement(x) {
  return /* @__PURE__ */ isValidElement3(x) && x !== void 0;
}

// node_modules/@shopify/polaris/build/esm/components/Page/Page.css.js
var styles59 = {
  Page: "Polaris-Page",
  fullWidth: "Polaris-Page--fullWidth",
  narrowWidth: "Polaris-Page--narrowWidth",
  Content: "Polaris-Page__Content"
};

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.js
import React144 from "react";

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.css.js
var styles60 = {
  TitleWrapper: "Polaris-Page-Header__TitleWrapper",
  TitleWrapperExpand: "Polaris-Page-Header__TitleWrapperExpand",
  BreadcrumbWrapper: "Polaris-Page-Header__BreadcrumbWrapper",
  PaginationWrapper: "Polaris-Page-Header__PaginationWrapper",
  PrimaryActionWrapper: "Polaris-Page-Header__PrimaryActionWrapper",
  Row: "Polaris-Page-Header__Row",
  mobileView: "Polaris-Page-Header--mobileView",
  RightAlign: "Polaris-Page-Header__RightAlign",
  noBreadcrumbs: "Polaris-Page-Header--noBreadcrumbs",
  AdditionalMetaData: "Polaris-Page-Header__AdditionalMetaData",
  Actions: "Polaris-Page-Header__Actions",
  longTitle: "Polaris-Page-Header--longTitle",
  mediumTitle: "Polaris-Page-Header--mediumTitle",
  isSingleRow: "Polaris-Page-Header--isSingleRow"
};

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.js
import React143 from "react";

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.css.js
var styles61 = {
  Title: "Polaris-Header-Title",
  TitleWithSubtitle: "Polaris-Header-Title__TitleWithSubtitle",
  TitleWrapper: "Polaris-Header-Title__TitleWrapper",
  SubTitle: "Polaris-Header-Title__SubTitle",
  SubtitleCompact: "Polaris-Header-Title__SubtitleCompact",
  SubtitleMaxWidth: "Polaris-Header-Title__SubtitleMaxWidth"
};

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.js
function Title({
  title,
  subtitle,
  titleMetadata,
  compactTitle,
  hasSubtitleMaxWidth
}) {
  let className = classNames(styles61.Title, subtitle && styles61.TitleWithSubtitle), titleMarkup = title ? /* @__PURE__ */ React143.createElement("h1", {
    className
  }, /* @__PURE__ */ React143.createElement(Text, {
    as: "span",
    variant: "headingLg",
    fontWeight: "bold"
  }, title)) : null, titleMetadataMarkup = titleMetadata ? /* @__PURE__ */ React143.createElement(Bleed, {
    marginBlock: "100"
  }, titleMetadata) : null, wrappedTitleMarkup = /* @__PURE__ */ React143.createElement("div", {
    className: styles61.TitleWrapper
  }, titleMarkup, titleMetadataMarkup), subtitleMarkup = subtitle ? /* @__PURE__ */ React143.createElement("div", {
    className: classNames(styles61.SubTitle, compactTitle && styles61.SubtitleCompact, hasSubtitleMaxWidth && styles61.SubtitleMaxWidth)
  }, /* @__PURE__ */ React143.createElement(Text, {
    as: "p",
    variant: "bodySm",
    tone: "subdued"
  }, subtitle)) : null;
  return /* @__PURE__ */ React143.createElement(React143.Fragment, null, wrappedTitleMarkup, subtitleMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.js
var SHORT_TITLE = 20, REALLY_SHORT_TITLE = 8, LONG_TITLE = 34;
function Header2({
  title,
  subtitle,
  pageReadyAccessibilityLabel,
  titleMetadata,
  additionalMetadata,
  titleHidden = !1,
  primaryAction,
  pagination,
  filterActions,
  backAction,
  secondaryActions = [],
  actionGroups = [],
  compactTitle = !1,
  onActionRollup
}) {
  let i18n = useI18n(), {
    isNavigationCollapsed
  } = useMediaQuery(), isSingleRow = !primaryAction && !pagination && (isInterface(secondaryActions) && !secondaryActions.length || isReactElement(secondaryActions)) && !actionGroups.length, hasActionGroupsOrSecondaryActions = actionGroups.length > 0 || isInterface(secondaryActions) && secondaryActions.length > 0 || isReactElement(secondaryActions), breadcrumbMarkup = backAction ? /* @__PURE__ */ React144.createElement("div", {
    className: styles60.BreadcrumbWrapper
  }, /* @__PURE__ */ React144.createElement(Box, {
    maxWidth: "100%",
    paddingInlineEnd: "100",
    printHidden: !0
  }, /* @__PURE__ */ React144.createElement(Breadcrumbs, {
    backAction
  }))) : null, paginationMarkup = pagination && !isNavigationCollapsed ? /* @__PURE__ */ React144.createElement("div", {
    className: styles60.PaginationWrapper
  }, /* @__PURE__ */ React144.createElement(Box, {
    printHidden: !0
  }, /* @__PURE__ */ React144.createElement(Pagination, Object.assign({}, pagination, {
    hasPrevious: pagination.hasPrevious,
    hasNext: pagination.hasNext
  })))) : null, pageTitleMarkup = /* @__PURE__ */ React144.createElement("div", {
    className: classNames(styles60.TitleWrapper, !hasActionGroupsOrSecondaryActions && styles60.TitleWrapperExpand)
  }, /* @__PURE__ */ React144.createElement(Title, {
    title,
    subtitle,
    titleMetadata,
    compactTitle,
    hasSubtitleMaxWidth: hasActionGroupsOrSecondaryActions
  })), labelForPageReadyAccessibilityLabel = pageReadyAccessibilityLabel || title, pageReadyAccessibilityLabelMarkup = labelForPageReadyAccessibilityLabel ? /* @__PURE__ */ React144.createElement("div", {
    role: "status"
  }, /* @__PURE__ */ React144.createElement(Text, {
    visuallyHidden: !0,
    as: "p"
  }, i18n.translate("Polaris.Page.Header.pageReadyAccessibilityLabel", {
    title: labelForPageReadyAccessibilityLabel
  }))) : void 0, primaryActionMarkup = primaryAction ? /* @__PURE__ */ React144.createElement(PrimaryActionMarkup, {
    primaryAction
  }) : null, actionMenuMarkup = null;
  isInterface(secondaryActions) && (secondaryActions.length > 0 || hasGroupsWithActions(actionGroups)) ? actionMenuMarkup = /* @__PURE__ */ React144.createElement(ActionMenu, {
    actions: secondaryActions,
    groups: actionGroups,
    rollup: isNavigationCollapsed,
    rollupActionsLabel: title ? i18n.translate("Polaris.Page.Header.rollupActionsLabel", {
      title
    }) : void 0,
    onActionRollup
  }) : isReactElement(secondaryActions) && (actionMenuMarkup = /* @__PURE__ */ React144.createElement(React144.Fragment, null, secondaryActions));
  let navigationMarkup = breadcrumbMarkup || paginationMarkup ? /* @__PURE__ */ React144.createElement(Box, {
    printHidden: !0,
    paddingBlockEnd: "100",
    paddingInlineEnd: actionMenuMarkup && isNavigationCollapsed ? "1000" : void 0
  }, /* @__PURE__ */ React144.createElement(InlineStack, {
    gap: "400",
    align: "space-between",
    blockAlign: "center"
  }, breadcrumbMarkup, paginationMarkup)) : null, additionalMetadataMarkup = additionalMetadata ? /* @__PURE__ */ React144.createElement("div", {
    className: styles60.AdditionalMetaData
  }, /* @__PURE__ */ React144.createElement(Text, {
    tone: "subdued",
    as: "span",
    variant: "bodySm"
  }, additionalMetadata)) : null, headerClassNames = classNames(isSingleRow && styles60.isSingleRow, navigationMarkup && styles60.hasNavigation, actionMenuMarkup && styles60.hasActionMenu, isNavigationCollapsed && styles60.mobileView, !backAction && styles60.noBreadcrumbs, title && title.length < LONG_TITLE && styles60.mediumTitle, title && title.length > LONG_TITLE && styles60.longTitle), {
    slot1,
    slot2,
    slot3,
    slot4,
    slot5
  } = determineLayout({
    actionMenuMarkup,
    additionalMetadataMarkup,
    breadcrumbMarkup,
    isNavigationCollapsed,
    pageTitleMarkup,
    paginationMarkup,
    primaryActionMarkup,
    title
  });
  return /* @__PURE__ */ React144.createElement(Box, {
    position: "relative",
    paddingBlockStart: {
      xs: "400",
      md: "600"
    },
    paddingBlockEnd: {
      xs: "400",
      md: "600"
    },
    paddingInlineStart: {
      xs: "400",
      sm: "0"
    },
    paddingInlineEnd: {
      xs: "400",
      sm: "0"
    },
    visuallyHidden: titleHidden
  }, pageReadyAccessibilityLabelMarkup, /* @__PURE__ */ React144.createElement("div", {
    className: headerClassNames
  }, /* @__PURE__ */ React144.createElement(FilterActionsProvider, {
    filterActions: Boolean(filterActions)
  }, /* @__PURE__ */ React144.createElement(ConditionalRender, {
    condition: [slot1, slot2, slot3, slot4].some(notNull)
  }, /* @__PURE__ */ React144.createElement("div", {
    className: styles60.Row
  }, slot1, slot2, /* @__PURE__ */ React144.createElement(ConditionalRender, {
    condition: [slot3, slot4].some(notNull)
  }, /* @__PURE__ */ React144.createElement("div", {
    className: styles60.RightAlign
  }, /* @__PURE__ */ React144.createElement(ConditionalWrapper, {
    condition: [slot3, slot4].every(notNull),
    wrapper: (children) => /* @__PURE__ */ React144.createElement("div", {
      className: styles60.Actions
    }, children)
  }, slot3, slot4))))), /* @__PURE__ */ React144.createElement(ConditionalRender, {
    condition: [slot5].some(notNull)
  }, /* @__PURE__ */ React144.createElement("div", {
    className: styles60.Row
  }, /* @__PURE__ */ React144.createElement(InlineStack, {
    gap: "400"
  }, slot5))))));
}
function PrimaryActionMarkup({
  primaryAction
}) {
  let {
    isNavigationCollapsed
  } = useMediaQuery(), actionMarkup;
  if (isInterface(primaryAction)) {
    let {
      primary: isPrimary,
      helpText
    } = primaryAction, primary = isPrimary === void 0 ? !0 : isPrimary, content = buttonFrom(shouldShowIconOnly(isNavigationCollapsed, primaryAction), {
      variant: primary ? "primary" : void 0
    });
    actionMarkup = helpText ? /* @__PURE__ */ React144.createElement(Tooltip, {
      content: helpText
    }, content) : content;
  } else
    actionMarkup = primaryAction;
  return /* @__PURE__ */ React144.createElement("div", {
    className: styles60.PrimaryActionWrapper
  }, /* @__PURE__ */ React144.createElement(Box, {
    printHidden: !0
  }, actionMarkup));
}
function shouldShowIconOnly(isMobile, action) {
  let {
    content,
    accessibilityLabel
  } = action, {
    icon
  } = action;
  return icon == null ? {
    ...action,
    icon: void 0
  } : (isMobile && (accessibilityLabel = accessibilityLabel || content, content = void 0), {
    ...action,
    content,
    accessibilityLabel,
    icon
  });
}
function notNull(value) {
  return value != null;
}
function determineLayout({
  actionMenuMarkup,
  additionalMetadataMarkup,
  breadcrumbMarkup,
  isNavigationCollapsed,
  pageTitleMarkup,
  paginationMarkup,
  primaryActionMarkup,
  title
}) {
  let layouts = {
    mobileCompact: {
      slots: {
        slot1: null,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: isNavigationCollapsed && breadcrumbMarkup == null && title != null && title.length <= REALLY_SHORT_TITLE
    },
    mobileDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: isNavigationCollapsed
    },
    desktopCompact: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: !isNavigationCollapsed && paginationMarkup == null && actionMenuMarkup == null && title != null && title.length <= SHORT_TITLE
    },
    desktopDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: /* @__PURE__ */ React144.createElement(React144.Fragment, null, actionMenuMarkup, primaryActionMarkup),
        slot4: paginationMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: !isNavigationCollapsed
    }
  };
  return (Object.values(layouts).find((layout2) => layout2.condition) || layouts.desktopDefault).slots;
}

// node_modules/@shopify/polaris/build/esm/components/Page/Page.js
function Page({
  children,
  fullWidth,
  narrowWidth,
  ...rest
}) {
  let pageClassName = classNames(styles59.Page, fullWidth && styles59.fullWidth, narrowWidth && styles59.narrowWidth), hasHeaderContent = rest.title != null && rest.title !== "" || rest.subtitle != null && rest.subtitle !== "" || rest.primaryAction != null || rest.secondaryActions != null && (isInterface(rest.secondaryActions) && rest.secondaryActions.length > 0 || isReactElement(rest.secondaryActions)) || rest.actionGroups != null && rest.actionGroups.length > 0 || rest.backAction != null, contentClassName = classNames(!hasHeaderContent && styles59.Content), headerMarkup = hasHeaderContent ? /* @__PURE__ */ React145.createElement(Header2, Object.assign({
    filterActions: !0
  }, rest)) : null;
  return /* @__PURE__ */ React145.createElement("div", {
    className: pageClassName
  }, headerMarkup, /* @__PURE__ */ React145.createElement("div", {
    className: contentClassName
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/ResourceItem/ResourceItem.js
import React146, { useContext as useContext18, Component as Component3, createRef as createRef6, useId as useId14 } from "react";
import isEqual4 from "react-fast-compare";

// node_modules/@shopify/polaris/build/esm/components/ResourceItem/ResourceItem.css.js
var styles62 = {
  ResourceItem: "Polaris-ResourceItem",
  Actions: "Polaris-ResourceItem__Actions",
  ItemWrapper: "Polaris-ResourceItem__ItemWrapper",
  CheckboxWrapper: "Polaris-ResourceItem__CheckboxWrapper",
  focusedInner: "Polaris-ResourceItem--focusedInner",
  focused: "Polaris-ResourceItem--focused",
  selected: "Polaris-ResourceItem--selected",
  Link: "Polaris-ResourceItem__Link",
  Button: "Polaris-ResourceItem__Button",
  selectable: "Polaris-ResourceItem--selectable",
  disabled: "Polaris-ResourceItem--disabled",
  ListItem: "Polaris-ResourceItem__ListItem",
  hasBulkActions: "Polaris-ResourceItem--hasBulkActions"
};

// node_modules/@shopify/polaris/build/esm/utilities/resource-list/types.js
var SELECT_ALL_ITEMS = "All";

// node_modules/@shopify/polaris/build/esm/components/ResourceItem/ResourceItem.js
var BaseResourceItem = class extends Component3 {
  constructor(...args) {
    super(...args), this.state = {
      actionsMenuVisible: !1,
      focused: !1,
      focusedInner: !1,
      selected: isSelected(this.props.id, this.props.context.selectedItems)
    }, this.node = null, this.overlayRef = /* @__PURE__ */ createRef6(), this.buttonOverlay = /* @__PURE__ */ createRef6(), this.setNode = (node) => {
      this.node = node;
    }, this.handleFocus = (event) => {
      event.target === this.buttonOverlay.current || this.node && event.target === this.overlayRef.current ? this.setState({
        focused: !0,
        focusedInner: !1
      }) : this.node && this.node.contains(event.target) && this.setState({
        focused: !0,
        focusedInner: !0
      });
    }, this.handleBlur = ({
      relatedTarget
    }) => {
      this.node && relatedTarget instanceof Element && this.node.contains(relatedTarget) || this.setState({
        focused: !1,
        focusedInner: !1
      });
    }, this.handleMouseOut = () => {
      this.state.focused && this.setState({
        focused: !1,
        focusedInner: !1
      }), this.props.onMouseOut && this.props.onMouseOut();
    }, this.handleLargerSelectionArea = (event) => {
      stopPropagation2(event), this.handleSelection(!this.state.selected, event.nativeEvent.shiftKey);
    }, this.handleSelection = (value, shiftKey) => {
      let {
        id,
        sortOrder,
        context: {
          onSelectionChange
        }
      } = this.props;
      id == null || onSelectionChange == null || (this.setState({
        focused: value,
        focusedInner: value
      }), onSelectionChange(value, id, sortOrder, shiftKey));
    }, this.handleClick = (event) => {
      stopPropagation2(event);
      let {
        id,
        onClick,
        url,
        context: {
          selectMode
        }
      } = this.props, {
        ctrlKey,
        metaKey
      } = event.nativeEvent, anchor = this.node && this.node.querySelector("a");
      if (selectMode) {
        this.handleLargerSelectionArea(event);
        return;
      }
      if (anchor !== event.target) {
        if (onClick && onClick(id), url && (ctrlKey || metaKey)) {
          window.open(url, "_blank");
          return;
        }
        url && anchor && anchor.click();
      }
    }, this.handleKeyUp = (event) => {
      let {
        disabled,
        onClick = noop9,
        context: {
          selectMode
        }
      } = this.props, {
        key
      } = event;
      key === "Enter" && this.props.url && !selectMode && !disabled && onClick();
    }, this.handleActionsClick = () => {
      this.setState(({
        actionsMenuVisible
      }) => ({
        actionsMenuVisible: !actionsMenuVisible
      }));
    }, this.handleCloseRequest = () => {
      this.setState({
        actionsMenuVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let selected = isSelected(nextProps.id, nextProps.context.selectedItems);
    return prevState.selected === selected ? null : {
      selected
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    let {
      children: nextChildren,
      context: {
        selectedItems: nextSelectedItems,
        ...restNextContext
      },
      ...restNextProps
    } = nextProps, {
      children,
      context: {
        selectedItems,
        ...restContext
      },
      ...restProps
    } = this.props, nextSelectMode = nextProps.context.selectMode;
    return !isEqual4(this.state, nextState) || this.props.context.selectMode !== nextSelectMode || !nextProps.context.selectMode && (!isEqual4(restProps, restNextProps) || !isEqual4(restContext, restNextContext));
  }
  render() {
    let {
      children,
      url,
      external,
      media,
      shortcutActions,
      ariaControls,
      ariaExpanded,
      persistActions = !1,
      accessibilityLabel,
      name,
      context: {
        selectable,
        selectMode,
        hasBulkActions,
        loading,
        resourceName
      },
      i18n,
      verticalAlignment,
      dataHref,
      breakpoints: breakpoints2,
      onMouseOver,
      disabled
    } = this.props, {
      actionsMenuVisible,
      focused,
      focusedInner,
      selected
    } = this.state, ownedMarkup = null, handleMarkup = null;
    if (selectable) {
      let checkboxAccessibilityLabel = name || accessibilityLabel || i18n.translate("Polaris.Common.checkbox");
      handleMarkup = /* @__PURE__ */ React146.createElement("div", {
        className: styles62.CheckboxWrapper,
        onClick: stopPropagation2,
        onChange: this.handleLargerSelectionArea
      }, /* @__PURE__ */ React146.createElement(UseId, null, (id) => /* @__PURE__ */ React146.createElement(Checkbox, {
        id,
        label: checkboxAccessibilityLabel,
        labelHidden: !0,
        checked: selected,
        disabled: loading || disabled,
        bleedInlineStart: "300",
        bleedInlineEnd: "300",
        bleedBlockStart: "300",
        bleedBlockEnd: "300",
        fill: !0,
        labelClassName: styles62.CheckboxLabel
      })));
    }
    (media || selectable) && (ownedMarkup = /* @__PURE__ */ React146.createElement(InlineStack, {
      gap: "300",
      blockAlign: media && selectable ? "center" : getAlignment(verticalAlignment)
    }, handleMarkup, media));
    let className = classNames(styles62.ResourceItem, focused && styles62.focused, selectable && styles62.selectable, selected && styles62.selected, selectMode && styles62.selectMode, persistActions && styles62.persistActions, focusedInner && styles62.focusedInner, disabled && styles62.disabled), listItemClassName = classNames(styles62.ListItem, focused && !focusedInner && styles62.focused, hasBulkActions && styles62.hasBulkActions, selected && styles62.selected, selectable && styles62.selectable), actionsMarkup = null, disclosureMarkup = null;
    if (shortcutActions && !loading)
      if (persistActions) {
        actionsMarkup = breakpoints2?.lgUp ? /* @__PURE__ */ React146.createElement("div", {
          className: styles62.Actions,
          onClick: stopPropagation2
        }, /* @__PURE__ */ React146.createElement(ButtonGroup, null, buttonsFrom(shortcutActions, {
          variant: "tertiary"
        }))) : null;
        let disclosureAccessibilityLabel = name ? i18n.translate("Polaris.ResourceList.Item.actionsDropdownLabel", {
          accessibilityLabel: name
        }) : i18n.translate("Polaris.ResourceList.Item.actionsDropdown");
        disclosureMarkup = !selectMode && breakpoints2?.lgDown ? /* @__PURE__ */ React146.createElement("div", {
          onClick: stopPropagation2
        }, /* @__PURE__ */ React146.createElement(Popover2, {
          activator: /* @__PURE__ */ React146.createElement(Button, {
            accessibilityLabel: disclosureAccessibilityLabel,
            onClick: this.handleActionsClick,
            variant: "tertiary",
            icon: SvgMenuHorizontalIcon
          }),
          onClose: this.handleCloseRequest,
          active: actionsMenuVisible
        }, /* @__PURE__ */ React146.createElement(ActionList, {
          items: shortcutActions
        }))) : null;
      } else
        breakpoints2?.lgUp && (actionsMarkup = /* @__PURE__ */ React146.createElement("div", {
          className: styles62.Actions,
          onClick: stopPropagation2
        }, /* @__PURE__ */ React146.createElement(Box, {
          position: "absolute",
          insetBlockStart: "400",
          insetInlineEnd: "500"
        }, /* @__PURE__ */ React146.createElement(ButtonGroup, {
          variant: "segmented"
        }, buttonsFrom(shortcutActions, {
          size: "slim"
        })))));
    let containerMarkup = /* @__PURE__ */ React146.createElement(Box, {
      id: this.props.id,
      position: "relative",
      paddingInlineStart: "300",
      paddingInlineEnd: "300",
      paddingBlockStart: "300",
      paddingBlockEnd: "300",
      zIndex: "var(--pc-resource-item-content-stacking-order)"
    }, /* @__PURE__ */ React146.createElement(InlineGrid, {
      columns: {
        xs: "1fr auto"
      }
    }, /* @__PURE__ */ React146.createElement(InlineGrid, {
      columns: {
        xs: media || selectable ? "auto 1fr" : "1fr"
      },
      gap: "300"
    }, ownedMarkup, /* @__PURE__ */ React146.createElement(InlineStack, {
      blockAlign: getAlignment(verticalAlignment)
    }, /* @__PURE__ */ React146.createElement(Box, {
      width: "100%",
      padding: "0"
    }, children))), actionsMarkup, disclosureMarkup)), tabIndex = loading ? -1 : 0, ariaLabel = accessibilityLabel || i18n.translate("Polaris.ResourceList.Item.viewItem", {
      itemName: name || resourceName && resourceName.singular || ""
    }), accessibleMarkup = url ? /* @__PURE__ */ React146.createElement(UseId, null, (id) => /* @__PURE__ */ React146.createElement(UnstyledLink, {
      "aria-describedby": this.props.id,
      "aria-label": ariaLabel,
      className: styles62.Link,
      url,
      external,
      tabIndex,
      id,
      ref: this.overlayRef
    })) : /* @__PURE__ */ React146.createElement("button", {
      className: styles62.Button,
      "aria-label": ariaLabel,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      onClick: this.handleClick,
      tabIndex,
      ref: this.buttonOverlay
    });
    return /* @__PURE__ */ React146.createElement("li", {
      className: listItemClassName,
      "data-href": dataHref
    }, /* @__PURE__ */ React146.createElement("div", {
      className: styles62.ItemWrapper
    }, /* @__PURE__ */ React146.createElement("div", {
      ref: this.setNode,
      className,
      onClick: disabled ? () => {
      } : this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyUp: this.handleKeyUp,
      onMouseOver,
      onMouseOut: this.handleMouseOut,
      "data-href": url
    }, disabled ? null : accessibleMarkup, containerMarkup)));
  }
  // This fires onClick when there is a URL on the item
};
function noop9() {
}
function stopPropagation2(event) {
  event.stopPropagation();
}
function isSelected(id, selectedItems) {
  return Boolean(selectedItems && (Array.isArray(selectedItems) && selectedItems.includes(id) || selectedItems === SELECT_ALL_ITEMS));
}
function ResourceItem(props) {
  let breakpoints2 = useBreakpoints();
  return /* @__PURE__ */ React146.createElement(BaseResourceItem, Object.assign({}, props, {
    breakpoints: breakpoints2,
    context: useContext18(ResourceListContext),
    i18n: useI18n()
  }));
}
function getAlignment(alignment) {
  switch (alignment) {
    case "leading":
      return "start";
    case "trailing":
      return "end";
    case "center":
      return "center";
    case "fill":
      return "stretch";
    case "baseline":
      return "baseline";
    default:
      return "start";
  }
}
function UseId(props) {
  let id = useId14();
  return props.children(id);
}

// node_modules/@shopify/polaris/build/esm/components/ResourceList/ResourceList.js
import React148, { useState as useState32, useReducer as useReducer4, useRef as useRef42, useMemo as useMemo10, useEffect as useEffect43, useCallback as useCallback33, Children as Children6 } from "react";

// node_modules/@shopify/polaris/build/esm/components/ResourceList/ResourceList.css.js
var styles63 = {
  FiltersWrapper: "Polaris-ResourceList__FiltersWrapper",
  ResourceListWrapper: "Polaris-ResourceList__ResourceListWrapper",
  ResourceList: "Polaris-ResourceList",
  HeaderOuterWrapper: "Polaris-ResourceList__HeaderOuterWrapper",
  BulkActionsWrapper: "Polaris-ResourceList__BulkActionsWrapper",
  "HeaderWrapper-disabled": "Polaris-ResourceList__HeaderWrapper--disabled",
  "HeaderWrapper-overlay": "Polaris-ResourceList__HeaderWrapper--overlay",
  HeaderWrapper: "Polaris-ResourceList__HeaderWrapper",
  "HeaderWrapper-isSticky": "Polaris-ResourceList__HeaderWrapper--isSticky",
  HeaderContentWrapper: "Polaris-ResourceList__HeaderContentWrapper",
  "HeaderWrapper-inSelectMode": "Polaris-ResourceList__HeaderWrapper--inSelectMode",
  SortWrapper: "Polaris-ResourceList__SortWrapper",
  AlternateToolWrapper: "Polaris-ResourceList__AlternateToolWrapper",
  "HeaderWrapper-hasSelect": "Polaris-ResourceList__HeaderWrapper--hasSelect",
  "HeaderWrapper-hasAlternateTool": "Polaris-ResourceList__HeaderWrapper--hasAlternateTool",
  "HeaderWrapper-hasSort": "Polaris-ResourceList__HeaderWrapper--hasSort",
  HeaderTitleWrapper: "Polaris-ResourceList__HeaderTitleWrapper",
  SelectAllActionsWrapper: "Polaris-ResourceList__SelectAllActionsWrapper",
  SelectAllActionsWrapperSticky: "Polaris-ResourceList__SelectAllActionsWrapperSticky",
  SelectAllActionsWrapperAtEnd: "Polaris-ResourceList__SelectAllActionsWrapperAtEnd",
  SelectAllActionsWrapperAtEndAppear: "Polaris-ResourceList__SelectAllActionsWrapperAtEndAppear",
  BulkActionsWrapperVisible: "Polaris-ResourceList__BulkActionsWrapperVisible",
  PaginationWrapper: "Polaris-ResourceList__PaginationWrapper",
  CheckableButtonWrapper: "Polaris-ResourceList__CheckableButtonWrapper",
  SelectButtonWrapper: "Polaris-ResourceList__SelectButtonWrapper",
  EmptySearchResultWrapper: "Polaris-ResourceList__EmptySearchResultWrapper",
  ItemWrapper: "Polaris-ResourceList__ItemWrapper",
  "ItemWrapper-isLoading": "Polaris-ResourceList__ItemWrapper--isLoading",
  SpinnerContainer: "Polaris-ResourceList__SpinnerContainer",
  LoadingOverlay: "Polaris-ResourceList__LoadingOverlay",
  DisabledPointerEvents: "Polaris-ResourceList__DisabledPointerEvents",
  disableTextSelection: "Polaris-ResourceList--disableTextSelection"
};

// node_modules/@shopify/polaris/build/esm/components/Select/Select.js
import React147, { useId as useId15, useCallback as useCallback32 } from "react";

// node_modules/@shopify/polaris/build/esm/components/Select/Select.css.js
var styles64 = {
  Select: "Polaris-Select",
  disabled: "Polaris-Select--disabled",
  error: "Polaris-Select--error",
  Backdrop: "Polaris-Select__Backdrop",
  Input: "Polaris-Select__Input",
  Content: "Polaris-Select__Content",
  InlineLabel: "Polaris-Select__InlineLabel",
  Icon: "Polaris-Select__Icon",
  SelectedOption: "Polaris-Select__SelectedOption",
  Prefix: "Polaris-Select__Prefix",
  hover: "Polaris-Select--hover",
  toneMagic: "Polaris-Select--toneMagic"
};

// node_modules/@shopify/polaris/build/esm/components/Select/Select.js
var PLACEHOLDER_VALUE = "";
function Select({
  options: optionsProp,
  label,
  labelAction,
  labelHidden: labelHiddenProp,
  labelInline,
  disabled,
  helpText,
  placeholder,
  id: idProp,
  name,
  value = PLACEHOLDER_VALUE,
  error,
  onChange,
  onFocus,
  onBlur,
  requiredIndicator,
  tone
}) {
  let {
    value: focused,
    toggle: toggleFocused
  } = useToggle(!1), uniqId = useId15(), id = idProp ?? uniqId, labelHidden = labelInline ? !0 : labelHiddenProp, className = classNames(styles64.Select, error && styles64.error, tone && styles64[variationName("tone", tone)], disabled && styles64.disabled), handleFocus = useCallback32((event) => {
    toggleFocused(), onFocus?.(event);
  }, [onFocus, toggleFocused]), handleBlur = useCallback32((event) => {
    toggleFocused(), onBlur?.(event);
  }, [onBlur, toggleFocused]), handleChange = onChange ? (event) => onChange(event.currentTarget.value, id) : void 0, describedBy = [];
  helpText && describedBy.push(helpTextID(id)), error && describedBy.push(`${id}Error`);
  let normalizedOptions = (optionsProp || []).map(normalizeOption);
  placeholder && (normalizedOptions = [{
    label: placeholder,
    value: PLACEHOLDER_VALUE,
    disabled: !0
  }, ...normalizedOptions]);
  let inlineLabelMarkup = labelInline && /* @__PURE__ */ React147.createElement(Box, {
    paddingInlineEnd: "100"
  }, /* @__PURE__ */ React147.createElement(Text, {
    as: "span",
    variant: "bodyMd",
    tone: tone && tone === "magic" && !focused ? "magic-subdued" : "subdued",
    truncate: !0
  }, label)), selectedOption = getSelectedOption(normalizedOptions, value), prefixMarkup = selectedOption.prefix && /* @__PURE__ */ React147.createElement("div", {
    className: styles64.Prefix
  }, selectedOption.prefix), contentMarkup = /* @__PURE__ */ React147.createElement("div", {
    className: styles64.Content,
    "aria-hidden": !0,
    "aria-disabled": disabled
  }, inlineLabelMarkup, prefixMarkup, /* @__PURE__ */ React147.createElement("span", {
    className: styles64.SelectedOption
  }, selectedOption.label), /* @__PURE__ */ React147.createElement("span", {
    className: styles64.Icon
  }, /* @__PURE__ */ React147.createElement(Icon, {
    source: SvgSelectIcon
  }))), optionsMarkup = normalizedOptions.map(renderOption);
  return /* @__PURE__ */ React147.createElement(Labelled, {
    id,
    label,
    error,
    action: labelAction,
    labelHidden,
    helpText,
    requiredIndicator,
    disabled
  }, /* @__PURE__ */ React147.createElement("div", {
    className
  }, /* @__PURE__ */ React147.createElement("select", {
    id,
    name,
    value,
    className: styles64.Input,
    disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy.length ? describedBy.join(" ") : void 0,
    "aria-required": requiredIndicator
  }, optionsMarkup), contentMarkup, /* @__PURE__ */ React147.createElement("div", {
    className: styles64.Backdrop
  })));
}
function isString(option) {
  return typeof option == "string";
}
function isGroup(option) {
  return typeof option == "object" && "options" in option && option.options != null;
}
function normalizeStringOption(option) {
  return {
    label: option,
    value: option
  };
}
function normalizeOption(option) {
  if (isString(option))
    return normalizeStringOption(option);
  if (isGroup(option)) {
    let {
      title,
      options
    } = option;
    return {
      title,
      options: options.map((option2) => isString(option2) ? normalizeStringOption(option2) : option2)
    };
  }
  return option;
}
function getSelectedOption(options, value) {
  let flatOptions = flattenOptions(options), selectedOption = flatOptions.find((option) => value === option.value);
  return selectedOption === void 0 && (selectedOption = flatOptions.find((option) => !option.hidden)), selectedOption || {
    value: "",
    label: ""
  };
}
function flattenOptions(options) {
  let flatOptions = [];
  return options.forEach((optionOrGroup) => {
    isGroup(optionOrGroup) ? flatOptions = flatOptions.concat(optionOrGroup.options) : flatOptions.push(optionOrGroup);
  }), flatOptions;
}
function renderSingleOption(option) {
  let {
    value,
    label,
    prefix: _prefix,
    key,
    ...rest
  } = option;
  return /* @__PURE__ */ React147.createElement("option", Object.assign({
    key: key ?? value,
    value
  }, rest), label);
}
function renderOption(optionOrGroup) {
  if (isGroup(optionOrGroup)) {
    let {
      title,
      options
    } = optionOrGroup;
    return /* @__PURE__ */ React147.createElement("optgroup", {
      label: title,
      key: title
    }, options.map(renderSingleOption));
  }
  return renderSingleOption(optionOrGroup);
}

// node_modules/@shopify/polaris/build/esm/components/ResourceList/ResourceList.js
var SMALL_SPINNER_HEIGHT = 28, LARGE_SPINNER_HEIGHT = 45;
function getAllItemsOnPage(items, idForItem) {
  return items.map((item, index) => idForItem(item, index));
}
var isBreakpointsXS = () => typeof window > "u" ? !1 : window.innerWidth < parseFloat(toPx(themeDefault.breakpoints["breakpoints-sm"]) ?? "");
function defaultIdForItem(item, index) {
  return Object.prototype.hasOwnProperty.call(item, "id") ? item.id : index.toString();
}
function ResourceList({
  items,
  filterControl,
  flushFilters,
  emptyState,
  emptySearchState,
  resourceName: resourceNameProp,
  promotedBulkActions,
  bulkActions,
  selectedItems = [],
  isFiltered,
  selectable,
  hasMoreItems,
  loading,
  headerContent,
  showHeader,
  totalItemsCount,
  sortValue,
  sortOptions,
  alternateTool,
  onSortChange,
  onSelectionChange,
  renderItem,
  idForItem = defaultIdForItem,
  resolveItemId,
  pagination
}) {
  let i18n = useI18n(), [selectMode, setSelectMode] = useState32(Boolean(selectedItems && selectedItems.length > 0)), [loadingPosition, setLoadingPositionState] = useState32(0), [lastSelected, setLastSelected] = useState32(), [smallScreen, setSmallScreen] = useState32(isBreakpointsXS()), forceUpdate = useReducer4((x = 0) => x + 1, 0)[1], checkableButtonRef = useRef42(null), defaultResourceName = useLazyRef(() => ({
    singular: i18n.translate("Polaris.ResourceList.defaultItemSingular"),
    plural: i18n.translate("Polaris.ResourceList.defaultItemPlural")
  })), listRef = useRef42(null), handleSelectMode = (selectMode2) => {
    setSelectMode(selectMode2), !selectMode2 && onSelectionChange && onSelectionChange([]);
  }, handleResize = debounce(() => {
    let newSmallScreen = isBreakpointsXS();
    selectedItems && selectedItems.length === 0 && selectMode && !newSmallScreen && handleSelectMode(!1), smallScreen !== newSmallScreen && setSmallScreen(newSmallScreen);
  }, 50, {
    leading: !0,
    trailing: !0,
    maxWait: 50
  });
  useEventListener("resize", handleResize);
  let isSelectable = Boolean(promotedBulkActions && promotedBulkActions.length > 0 || bulkActions && bulkActions.length > 0 || selectable) && !smallScreen, selectAllSelectState = useMemo10(() => {
    let selectState = "indeterminate";
    return !selectedItems || Array.isArray(selectedItems) && selectedItems.length === 0 ? selectState = !1 : (selectedItems === SELECT_ALL_ITEMS || Array.isArray(selectedItems) && selectedItems.length === items.length) && (selectState = !0), selectState;
  }, [items.length, selectedItems]), resourceName = resourceNameProp || defaultResourceName.current, headerTitle = () => {
    let itemsCount = items.length, resource = !loading && (!totalItemsCount && itemsCount === 1 || totalItemsCount === 1) ? resourceName.singular : resourceName.plural;
    return loading ? i18n.translate("Polaris.ResourceList.loading", {
      resource
    }) : totalItemsCount ? i18n.translate("Polaris.ResourceList.showingTotalCount", {
      itemsCount,
      totalItemsCount,
      resource
    }) : headerContent || i18n.translate("Polaris.ResourceList.showing", {
      itemsCount,
      resource
    });
  }, [selectedItemsCount, setSelectedItemsCount] = useState32(selectedItems === SELECT_ALL_ITEMS ? `${items.length}+` : selectedItems.length);
  useEffect43(() => {
    (selectedItems === SELECT_ALL_ITEMS || selectedItems.length > 0) && setSelectedItemsCount(selectedItems === SELECT_ALL_ITEMS ? `${items.length}+` : selectedItems.length);
  }, [selectedItems, items.length]);
  let selectAllActionsLabel = i18n.translate("Polaris.ResourceList.selected", {
    selectedItemsCount
  }), bulkActionsAccessibilityLabel = useMemo10(() => {
    let selectedItemsCount2 = selectedItems.length, totalItemsCount2 = items.length, allSelected = selectedItemsCount2 === totalItemsCount2;
    return totalItemsCount2 === 1 && allSelected ? i18n.translate("Polaris.ResourceList.a11yCheckboxDeselectAllSingle", {
      resourceNameSingular: resourceName.singular
    }) : totalItemsCount2 === 1 ? i18n.translate("Polaris.ResourceList.a11yCheckboxSelectAllSingle", {
      resourceNameSingular: resourceName.singular
    }) : allSelected ? i18n.translate("Polaris.ResourceList.a11yCheckboxDeselectAllMultiple", {
      itemsLength: items.length,
      resourceNamePlural: resourceName.plural
    }) : i18n.translate("Polaris.ResourceList.a11yCheckboxSelectAllMultiple", {
      itemsLength: items.length,
      resourceNamePlural: resourceName.plural
    });
  }, [i18n, items.length, resourceName.singular, resourceName.plural, selectedItems.length]), paginatedSelectAllText = useMemo10(() => {
    if (!(!isSelectable || !hasMoreItems) && selectedItems === SELECT_ALL_ITEMS)
      return i18n.translate(isFiltered ? "Polaris.ResourceList.allFilteredItemsSelected" : "Polaris.ResourceList.allItemsSelected", {
        itemsLength: items.length,
        resourceNamePlural: resourceName.plural
      });
  }, [hasMoreItems, i18n, isFiltered, isSelectable, items, resourceName.plural, selectedItems]), handleSelectAllItemsInStore = useCallback33(() => {
    let newlySelectedItems = selectedItems === SELECT_ALL_ITEMS ? getAllItemsOnPage(items, idForItem) : SELECT_ALL_ITEMS;
    onSelectionChange && onSelectionChange(newlySelectedItems);
  }, [idForItem, items, onSelectionChange, selectedItems]), paginatedSelectAllAction = useMemo10(() => !isSelectable || !hasMoreItems ? void 0 : {
    content: selectedItems === SELECT_ALL_ITEMS ? i18n.translate("Polaris.Common.undo") : i18n.translate(isFiltered ? "Polaris.ResourceList.selectAllFilteredItems" : "Polaris.ResourceList.selectAllItems", {
      itemsLength: items.length,
      resourceNamePlural: resourceName.plural
    }),
    onAction: handleSelectAllItemsInStore
  }, [handleSelectAllItemsInStore, hasMoreItems, i18n, isFiltered, isSelectable, items.length, resourceName.plural, selectedItems]), emptySearchResultText = {
    title: i18n.translate("Polaris.ResourceList.emptySearchResultTitle", {
      resourceNamePlural: resourceName.plural
    }),
    description: i18n.translate("Polaris.ResourceList.emptySearchResultDescription")
  }, setLoadingPosition = useCallback33(() => {
    if (listRef.current != null) {
      if (typeof window > "u")
        return;
      let overlay2 = listRef.current.getBoundingClientRect(), viewportHeight = Math.max(document.documentElement ? document.documentElement.clientHeight : 0, window.innerHeight || 0), overflow = viewportHeight - overlay2.height, spinnerHeight = items.length === 1 ? SMALL_SPINNER_HEIGHT : LARGE_SPINNER_HEIGHT, spinnerPosition = overflow > 0 ? (overlay2.height - spinnerHeight) / 2 : (viewportHeight - overlay2.top - spinnerHeight) / 2;
      setLoadingPositionState(spinnerPosition);
    }
  }, [listRef, items.length]), itemsExist = items.length > 0;
  useEffect43(() => {
    loading && setLoadingPosition();
  }, [loading, setLoadingPosition]), useEffect43(() => {
    selectedItems && selectedItems.length > 0 && !selectMode && setSelectMode(!0), (!selectedItems || selectedItems.length === 0) && !isBreakpointsXS() && setSelectMode(!1);
  }, [selectedItems, selectMode]), useEffect43(() => {
    forceUpdate();
  }, [forceUpdate, items]);
  let renderItemWithId = (item, index) => {
    let id = idForItem(item, index), itemContent = renderItem(item, id, index);
    return isElementOfType(itemContent, ResourceItem) || console.warn("<ResourceList /> renderItem function should return a <ResourceItem />."), itemContent;
  }, handleMultiSelectionChange = (lastSelected2, currentSelected, resolveItemId2) => {
    let min = Math.min(lastSelected2, currentSelected), max = Math.max(lastSelected2, currentSelected);
    return items.slice(min, max + 1).map(resolveItemId2);
  }, handleSelectionChange = (selected, id, sortOrder, shiftKey) => {
    if (selectedItems == null || onSelectionChange == null)
      return;
    let newlySelectedItems = selectedItems === SELECT_ALL_ITEMS ? getAllItemsOnPage(items, idForItem) : [...selectedItems];
    sortOrder !== void 0 && setLastSelected(sortOrder);
    let lastSelectedFromState = lastSelected, selectedIds = [id];
    if (shiftKey && lastSelectedFromState != null && sortOrder !== void 0 && resolveItemId && (selectedIds = handleMultiSelectionChange(lastSelectedFromState, sortOrder, resolveItemId)), newlySelectedItems = [.../* @__PURE__ */ new Set([...newlySelectedItems, ...selectedIds])], !selected)
      for (let selectedId of selectedIds)
        newlySelectedItems.splice(newlySelectedItems.indexOf(selectedId), 1);
    newlySelectedItems.length === 0 && !isBreakpointsXS() ? handleSelectMode(!1) : newlySelectedItems.length > 0 && handleSelectMode(!0), onSelectionChange && onSelectionChange(newlySelectedItems);
  }, handleToggleAll = () => {
    let newlySelectedItems;
    Array.isArray(selectedItems) && selectedItems.length === items.length || selectedItems === SELECT_ALL_ITEMS ? newlySelectedItems = [] : newlySelectedItems = items.map((item, index) => idForItem(item, index)), newlySelectedItems.length === 0 && !isBreakpointsXS() ? handleSelectMode(!1) : newlySelectedItems.length > 0 && handleSelectMode(!0), onSelectionChange && onSelectionChange(newlySelectedItems), setTimeout(() => {
      checkableButtonRef?.current?.focus();
    }, 0);
  }, bulkActionClassNames = classNames(styles63.BulkActionsWrapper, selectMode && styles63.BulkActionsWrapperVisible), bulkActionsMarkup = isSelectable ? /* @__PURE__ */ React148.createElement("div", {
    className: bulkActionClassNames
  }, /* @__PURE__ */ React148.createElement(BulkActions, {
    selectMode,
    onSelectModeToggle: handleSelectMode,
    label: selectAllActionsLabel,
    paginatedSelectAllAction,
    paginatedSelectAllText,
    promotedActions: promotedBulkActions,
    actions: bulkActions,
    disabled: loading,
    accessibilityLabel: bulkActionsAccessibilityLabel,
    selected: selectAllSelectState,
    onToggleAll: handleToggleAll,
    ref: checkableButtonRef,
    buttonSize: "medium"
  })) : null, filterControlMarkup = filterControl ? /* @__PURE__ */ React148.createElement("div", {
    className: classNames(!flushFilters && styles63.FiltersWrapper)
  }, filterControl) : null, sortingSelectMarkup = sortOptions && sortOptions.length > 0 && !alternateTool ? /* @__PURE__ */ React148.createElement("div", {
    className: styles63.SortWrapper
  }, /* @__PURE__ */ React148.createElement(Select, {
    label: i18n.translate("Polaris.ResourceList.sortingLabel"),
    labelInline: !smallScreen,
    labelHidden: smallScreen,
    options: sortOptions,
    onChange: onSortChange,
    value: sortValue,
    disabled: selectMode
  })) : null, alternateToolMarkup = alternateTool && !sortingSelectMarkup ? /* @__PURE__ */ React148.createElement("div", {
    className: styles63.AlternateToolWrapper
  }, alternateTool) : null, headerTitleMarkup = /* @__PURE__ */ React148.createElement("div", {
    className: styles63.HeaderTitleWrapper
  }, /* @__PURE__ */ React148.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, headerTitle())), selectButtonMarkup = isSelectable ? /* @__PURE__ */ React148.createElement("div", {
    className: styles63.SelectButtonWrapper
  }, /* @__PURE__ */ React148.createElement(Button, {
    disabled: selectMode,
    icon: SvgCheckboxIcon,
    onClick: () => handleSelectMode(!0)
  }, i18n.translate("Polaris.ResourceList.selectButtonText"))) : null, checkableButtonMarkup = isSelectable ? /* @__PURE__ */ React148.createElement("div", {
    className: styles63.CheckableButtonWrapper
  }, /* @__PURE__ */ React148.createElement(CheckableButton, {
    accessibilityLabel: bulkActionsAccessibilityLabel,
    label: headerTitle(),
    onToggleAll: handleToggleAll,
    disabled: loading,
    ref: checkableButtonRef,
    selected: selectAllSelectState
  })) : null, needsHeader = isSelectable || sortOptions && sortOptions.length > 0 || alternateTool, headerWrapperOverlay = loading ? /* @__PURE__ */ React148.createElement("div", {
    className: styles63["HeaderWrapper-overlay"]
  }) : null, showEmptyState = emptyState && !itemsExist && !loading, showEmptySearchState = !showEmptyState && filterControl && !itemsExist && !loading, headerMarkup = !showEmptyState && showHeader !== !1 && !showEmptySearchState && (showHeader || needsHeader) && listRef.current && /* @__PURE__ */ React148.createElement("div", {
    className: styles63.HeaderOuterWrapper
  }, /* @__PURE__ */ React148.createElement(Sticky, {
    boundingElement: listRef.current
  }, (isSticky) => {
    let headerClassName = classNames(styles63.HeaderWrapper, sortOptions && sortOptions.length > 0 && !alternateTool && styles63["HeaderWrapper-hasSort"], alternateTool && styles63["HeaderWrapper-hasAlternateTool"], isSelectable && styles63["HeaderWrapper-hasSelect"], loading && styles63["HeaderWrapper-disabled"], isSelectable && selectMode && bulkActionsMarkup && styles63["HeaderWrapper-inSelectMode"], isSticky && styles63["HeaderWrapper-isSticky"]);
    return /* @__PURE__ */ React148.createElement("div", {
      className: headerClassName
    }, headerWrapperOverlay, /* @__PURE__ */ React148.createElement("div", {
      className: styles63.HeaderContentWrapper
    }, headerTitleMarkup, checkableButtonMarkup, alternateToolMarkup, sortingSelectMarkup, selectButtonMarkup), bulkActionsMarkup);
  })), emptySearchStateMarkup = showEmptySearchState ? emptySearchState || /* @__PURE__ */ React148.createElement("div", {
    className: styles63.EmptySearchResultWrapper
  }, /* @__PURE__ */ React148.createElement(EmptySearchResult, Object.assign({}, emptySearchResultText, {
    withIllustration: !0
  }))) : null, emptyStateMarkup = showEmptyState ? emptyState : null, defaultTopPadding = 8, spinnerStyle = {
    paddingTop: `${loadingPosition > 0 ? loadingPosition : defaultTopPadding}px`
  }, spinnerSize = items.length < 2 ? "small" : "large", loadingOverlay = loading ? /* @__PURE__ */ React148.createElement(React148.Fragment, null, /* @__PURE__ */ React148.createElement("li", {
    className: styles63.SpinnerContainer,
    style: spinnerStyle
  }, /* @__PURE__ */ React148.createElement(Spinner, {
    size: spinnerSize,
    accessibilityLabel: "Items are loading"
  })), /* @__PURE__ */ React148.createElement("li", {
    className: styles63.LoadingOverlay
  })) : null, className = classNames(styles63.ItemWrapper, loading && styles63["ItemWrapper-isLoading"]), loadingWithoutItemsMarkup = loading && !itemsExist ? /* @__PURE__ */ React148.createElement("div", {
    className,
    tabIndex: -1
  }, loadingOverlay) : null, resourceListClassName = classNames(styles63.ResourceList, loading && styles63.disabledPointerEvents, selectMode && styles63.disableTextSelection), listMarkup = itemsExist ? /* @__PURE__ */ React148.createElement("ul", {
    className: resourceListClassName,
    ref: listRef,
    "aria-live": "polite",
    "aria-busy": loading
  }, loadingOverlay, Children6.toArray(items.map(renderItemWithId))) : null, paginationMarkup = pagination ? /* @__PURE__ */ React148.createElement("div", {
    className: styles63.PaginationWrapper
  }, /* @__PURE__ */ React148.createElement(Pagination, Object.assign({
    type: "table"
  }, pagination))) : null, context = {
    selectable: isSelectable,
    selectedItems,
    selectMode,
    hasBulkActions: Boolean(bulkActions),
    resourceName,
    loading,
    onSelectionChange: handleSelectionChange
  };
  return /* @__PURE__ */ React148.createElement(ResourceListContext.Provider, {
    value: context
  }, filterControlMarkup, /* @__PURE__ */ React148.createElement("div", {
    className: styles63.ResourceListWrapper
  }, headerMarkup, listMarkup, emptySearchStateMarkup, emptyStateMarkup, loadingWithoutItemsMarkup, paginationMarkup));
}
ResourceList.Item = ResourceItem;

// node_modules/@shopify/polaris/build/esm/components/Toast/Toast.js
import { memo as memo8, useId as useId16 } from "react";
var Toast2 = /* @__PURE__ */ memo8(function(props) {
  let id = useId16(), {
    showToast,
    hideToast
  } = useFrame();
  return useDeepEffect(() => (showToast({
    id,
    ...props
  }), () => {
    hideToast({
      id
    });
  }), [props]), null;
});

// node_modules/@shopify/polaris/build/esm/components/TopBar/TopBar.js
import React156 from "react";

// node_modules/@shopify/polaris/build/esm/components/TopBar/TopBar.css.js
var styles65 = {
  TopBar: "Polaris-TopBar",
  Container: "Polaris-TopBar__Container",
  LogoDisplayControl: "Polaris-TopBar__LogoDisplayControl",
  LogoDisplayContainer: "Polaris-TopBar__LogoDisplayContainer",
  LogoContainer: "Polaris-TopBar__LogoContainer",
  hasLogoSuffix: "Polaris-TopBar--hasLogoSuffix",
  Logo: "Polaris-TopBar__Logo",
  LogoLink: "Polaris-TopBar__LogoLink",
  ContextControl: "Polaris-TopBar__ContextControl",
  NavigationIcon: "Polaris-TopBar__NavigationIcon",
  focused: "Polaris-TopBar--focused",
  IconWrapper: "Polaris-TopBar__IconWrapper",
  LeftContent: "Polaris-TopBar__LeftContent",
  Search: "Polaris-TopBar__Search",
  RightContent: "Polaris-TopBar__RightContent",
  SecondaryMenu: "Polaris-TopBar__SecondaryMenu"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Search/Search.js
import React150 from "react";

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Search/Search.css.js
var styles66 = {
  Search: "Polaris-TopBar-Search",
  SearchContent: "Polaris-TopBar-Search__SearchContent",
  visible: "Polaris-TopBar-Search--visible",
  Results: "Polaris-TopBar-Search__Results"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchDismissOverlay/SearchDismissOverlay.js
import React149, { useRef as useRef43, useCallback as useCallback34 } from "react";

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchDismissOverlay/SearchDismissOverlay.css.js
var styles67 = {
  SearchDismissOverlay: "Polaris-TopBar-SearchDismissOverlay",
  visible: "Polaris-TopBar-SearchDismissOverlay--visible"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchDismissOverlay/SearchDismissOverlay.js
function SearchDismissOverlay({
  onDismiss,
  visible
}) {
  let node = useRef43(null), handleDismiss = useCallback34(({
    target
  }) => {
    target === node.current && onDismiss != null && onDismiss();
  }, [onDismiss]);
  return /* @__PURE__ */ React149.createElement(React149.Fragment, null, visible ? /* @__PURE__ */ React149.createElement(ScrollLock, null) : null, /* @__PURE__ */ React149.createElement("div", {
    ref: node,
    className: classNames(styles67.SearchDismissOverlay, visible && styles67.visible),
    onClick: handleDismiss
  }));
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Search/Search.js
function Search({
  visible,
  children,
  onDismiss,
  overlayVisible = !1
}) {
  if (children == null)
    return null;
  let overlayMarkup = visible ? /* @__PURE__ */ React150.createElement(SearchDismissOverlay, {
    onDismiss,
    visible: overlayVisible
  }) : null;
  return /* @__PURE__ */ React150.createElement(React150.Fragment, null, overlayMarkup, /* @__PURE__ */ React150.createElement("div", {
    className: classNames(styles66.Search, visible && styles66.visible)
  }, /* @__PURE__ */ React150.createElement("div", {
    className: styles66.SearchContent
  }, /* @__PURE__ */ React150.createElement("div", {
    className: styles66.Results
  }, children))));
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchField/SearchField.js
import React151, { useState as useState33, useRef as useRef44, useId as useId17, useCallback as useCallback35, useEffect as useEffect44 } from "react";

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchField/SearchField.css.js
var styles68 = {
  SearchField: "Polaris-TopBar-SearchField",
  focused: "Polaris-TopBar-SearchField--focused",
  Input: "Polaris-TopBar-SearchField__Input",
  Backdrop: "Polaris-TopBar-SearchField__Backdrop",
  BackdropShowFocusBorder: "Polaris-TopBar-SearchField__BackdropShowFocusBorder",
  Icon: "Polaris-TopBar-SearchField__Icon",
  Clear: "Polaris-TopBar-SearchField__Clear"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchField/SearchField.js
function SearchField2({
  value,
  focused,
  active,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onCancel,
  showFocusBorder
}) {
  let i18n = useI18n(), [forceActive, setForceActive] = useState33(!1), input = useRef44(null), searchId = useId17(), handleChange = useCallback35(({
    currentTarget
  }) => {
    onChange(currentTarget.value);
  }, [onChange]), handleFocus = useCallback35(() => onFocus && onFocus(), [onFocus]), handleBlur = useCallback35(() => onBlur && onBlur(), [onBlur]), handleClear = useCallback35(() => {
    onCancel && onCancel(), input.current && (input.current.value = "", onChange(""), input.current.focus());
  }, [onCancel, onChange]);
  useEffect44(() => {
    input.current && (focused ? input.current.focus() : input.current.blur());
  }, [focused]);
  let clearMarkup = value !== "" && /* @__PURE__ */ React151.createElement("button", {
    type: "button",
    "aria-label": i18n.translate("Polaris.TopBar.SearchField.clearButtonLabel"),
    className: styles68.Clear,
    onClick: handleClear,
    onBlur: () => {
      setForceActive(!1), handleClear();
    },
    onFocus: () => {
      handleFocus(), setForceActive(!0);
    }
  }, /* @__PURE__ */ React151.createElement(Icon, {
    source: SvgXCircleIcon
  })), className = classNames(styles68.SearchField, (focused || active || forceActive) && styles68.focused);
  return /* @__PURE__ */ React151.createElement("div", {
    className,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, /* @__PURE__ */ React151.createElement(Text, {
    as: "span",
    visuallyHidden: !0
  }, /* @__PURE__ */ React151.createElement("label", {
    htmlFor: searchId
  }, i18n.translate("Polaris.TopBar.SearchField.search"))), /* @__PURE__ */ React151.createElement("input", {
    id: searchId,
    className: styles68.Input,
    placeholder,
    type: "search",
    autoCapitalize: "off",
    autoComplete: "off",
    autoCorrect: "off",
    ref: input,
    value,
    onChange: handleChange,
    onKeyDown: preventDefault
  }), /* @__PURE__ */ React151.createElement("span", {
    className: styles68.Icon
  }, /* @__PURE__ */ React151.createElement(Icon, {
    source: SvgSearchIcon
  })), clearMarkup, /* @__PURE__ */ React151.createElement("div", {
    className: classNames(styles68.Backdrop, showFocusBorder && styles68.BackdropShowFocusBorder)
  }));
}
function preventDefault(event) {
  event.key === "Enter" && event.preventDefault();
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/UserMenu/UserMenu.js
import React155 from "react";

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/UserMenu/UserMenu.css.js
var styles69 = {
  Details: "Polaris-TopBar-UserMenu__Details"
};

// node_modules/@shopify/polaris/build/esm/components/MessageIndicator/MessageIndicator.js
import React152 from "react";

// node_modules/@shopify/polaris/build/esm/components/MessageIndicator/MessageIndicator.css.js
var styles70 = {
  MessageIndicatorWrapper: "Polaris-MessageIndicator__MessageIndicatorWrapper",
  MessageIndicator: "Polaris-MessageIndicator"
};

// node_modules/@shopify/polaris/build/esm/components/MessageIndicator/MessageIndicator.js
function MessageIndicator({
  children,
  active
}) {
  let indicatorMarkup = active && /* @__PURE__ */ React152.createElement("div", {
    className: styles70.MessageIndicator
  });
  return /* @__PURE__ */ React152.createElement("div", {
    className: styles70.MessageIndicatorWrapper
  }, indicatorMarkup, children);
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/Menu.js
import React154 from "react";

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/Menu.css.js
var styles71 = {
  ActivatorWrapper: "Polaris-TopBar-Menu__ActivatorWrapper",
  Activator: "Polaris-TopBar-Menu__Activator",
  "Activator-userMenu": "Polaris-TopBar-Menu__Activator--userMenu",
  Section: "Polaris-TopBar-Menu__Section"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/components/Message/Message.js
import React153 from "react";

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/components/Message/Message.css.js
var styles72 = {
  Section: "Polaris-Menu-Message__Section"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/components/Message/Message.js
function Message({
  title,
  description,
  action,
  link,
  badge
}) {
  let badgeMarkup = badge && /* @__PURE__ */ React153.createElement(Badge, {
    tone: badge.tone
  }, badge.content), {
    to,
    content: linkContent
  } = link, {
    onClick,
    content: actionContent
  } = action;
  return /* @__PURE__ */ React153.createElement("div", {
    className: styles72.Section
  }, /* @__PURE__ */ React153.createElement(Popover2.Section, null, /* @__PURE__ */ React153.createElement(LegacyStack, {
    vertical: !0,
    spacing: "tight"
  }, /* @__PURE__ */ React153.createElement(TextContainer, null, /* @__PURE__ */ React153.createElement(Text, {
    variant: "headingMd",
    as: "h2"
  }, title, badgeMarkup), /* @__PURE__ */ React153.createElement("p", null, description)), /* @__PURE__ */ React153.createElement(Link, {
    url: to
  }, linkContent), /* @__PURE__ */ React153.createElement(Button, {
    variant: "plain",
    onClick
  }, actionContent))));
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/Menu.js
function Menu(props) {
  let {
    actions,
    onOpen,
    onClose,
    open,
    activatorContent,
    message,
    accessibilityLabel,
    customWidth,
    userMenu
  } = props, badgeProps = message && message.badge && {
    content: message.badge.content,
    tone: message.badge.tone
  }, messageMarkup = message && /* @__PURE__ */ React154.createElement(Message, {
    title: message.title,
    description: message.description,
    action: {
      onClick: message.action.onClick,
      content: message.action.content
    },
    link: {
      to: message.link.to,
      content: message.link.content
    },
    badge: badgeProps
  });
  return /* @__PURE__ */ React154.createElement(Popover2, {
    activator: /* @__PURE__ */ React154.createElement("div", {
      className: styles71.ActivatorWrapper
    }, /* @__PURE__ */ React154.createElement("button", {
      type: "button",
      className: classNames(styles71.Activator, userMenu && styles71["Activator-userMenu"]),
      onClick: onOpen,
      "aria-label": accessibilityLabel
    }, activatorContent)),
    active: open,
    onClose,
    fixed: !0,
    fullHeight: !0,
    preferredAlignment: "right"
  }, /* @__PURE__ */ React154.createElement("div", {
    className: styles71.MenuItems
  }, /* @__PURE__ */ React154.createElement(Box, {
    width: customWidth
  }, /* @__PURE__ */ React154.createElement(ActionList, {
    actionRole: "menuitem",
    onActionAnyItem: onClose,
    sections: actions
  }), messageMarkup)));
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/UserMenu/UserMenu.js
function UserMenu({
  name,
  detail,
  avatar,
  initials,
  actions,
  message,
  onToggle,
  open,
  accessibilityLabel,
  customActivator,
  customWidth
}) {
  let showIndicator = Boolean(message), activatorContentMarkup = customActivator || /* @__PURE__ */ React155.createElement(React155.Fragment, null, /* @__PURE__ */ React155.createElement("span", {
    className: styles69.Details
  }, /* @__PURE__ */ React155.createElement(Text, {
    as: "p",
    variant: "bodySm",
    alignment: "start",
    fontWeight: "medium",
    truncate: !0
  }, name), /* @__PURE__ */ React155.createElement("span", {
    className: styles69.Message
  }, /* @__PURE__ */ React155.createElement(Text, {
    as: "p",
    variant: "bodyXs",
    alignment: "start",
    tone: "text-inverse-secondary",
    truncate: !0
  }, detail))), /* @__PURE__ */ React155.createElement(MessageIndicator, {
    active: showIndicator
  }, /* @__PURE__ */ React155.createElement(Avatar, {
    size: "md",
    initials: initials && initials.replace(" ", ""),
    source: avatar,
    name
  })));
  return /* @__PURE__ */ React155.createElement(Menu, {
    activatorContent: activatorContentMarkup,
    open,
    onOpen: onToggle,
    onClose: onToggle,
    actions,
    message,
    accessibilityLabel,
    customWidth,
    userMenu: !0
  });
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/TopBar.js
var TopBar = function({
  showNavigationToggle,
  userMenu,
  searchResults,
  searchField,
  secondaryMenu,
  searchResultsVisible,
  searchResultsOverlayVisible = !1,
  onNavigationToggle,
  onSearchResultsDismiss,
  contextControl,
  logoSuffix
}) {
  let i18n = useI18n(), {
    logo
  } = useFrame(), {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(!1), iconClassName = classNames(styles65.NavigationIcon, focused && styles65.focused), navigationButtonMarkup = showNavigationToggle ? /* @__PURE__ */ React156.createElement("button", {
    type: "button",
    className: iconClassName,
    onClick: onNavigationToggle,
    onFocus: forceTrueFocused,
    onBlur: forceFalseFocused,
    "aria-label": i18n.translate("Polaris.TopBar.toggleMenuLabel")
  }, /* @__PURE__ */ React156.createElement("div", {
    className: styles65.IconWrapper
  }, /* @__PURE__ */ React156.createElement(Icon, {
    source: SvgMenuIcon
  }))) : null, width2 = getWidth(logo, 104), contextMarkup;
  if (contextControl)
    contextMarkup = /* @__PURE__ */ React156.createElement("div", {
      className: styles65.ContextControl
    }, contextControl);
  else if (logo) {
    let className = classNames(styles65.LogoContainer, showNavigationToggle || searchField ? styles65.LogoDisplayControl : styles65.LogoDisplayContainer, logoSuffix && styles65.hasLogoSuffix);
    contextMarkup = /* @__PURE__ */ React156.createElement("div", {
      className
    }, /* @__PURE__ */ React156.createElement(UnstyledLink, {
      url: logo.url || "",
      className: styles65.LogoLink,
      style: {
        width: width2
      }
    }, /* @__PURE__ */ React156.createElement(Image, {
      source: logo.topBarSource || "",
      alt: logo.accessibilityLabel || "",
      className: styles65.Logo,
      style: {
        width: width2
      }
    })), logoSuffix);
  }
  let searchMarkup = searchField ? /* @__PURE__ */ React156.createElement(React156.Fragment, null, searchField, /* @__PURE__ */ React156.createElement(Search, {
    visible: searchResultsVisible,
    onDismiss: onSearchResultsDismiss,
    overlayVisible: searchResultsOverlayVisible
  }, searchResults)) : null;
  return /* @__PURE__ */ React156.createElement("div", {
    className: styles65.TopBar
  }, /* @__PURE__ */ React156.createElement("div", {
    className: styles65.Container
  }, /* @__PURE__ */ React156.createElement("div", {
    className: styles65.LeftContent
  }, navigationButtonMarkup, contextMarkup), /* @__PURE__ */ React156.createElement("div", {
    className: styles65.Search
  }, searchMarkup), /* @__PURE__ */ React156.createElement("div", {
    className: styles65.RightContent
  }, /* @__PURE__ */ React156.createElement("div", {
    className: styles65.SecondaryMenu
  }, secondaryMenu), userMenu)));
};
TopBar.Menu = Menu;
TopBar.SearchField = SearchField2;
TopBar.UserMenu = UserMenu;

// node_modules/@shopify/polaris/locales/en.json
var en_default = {
  Polaris: {
    ActionMenu: {
      Actions: {
        moreActions: "More actions"
      },
      RollupActions: {
        rollupButton: "View actions"
      }
    },
    ActionList: {
      SearchField: {
        clearButtonLabel: "Clear",
        search: "Search",
        placeholder: "Search actions"
      }
    },
    Avatar: {
      label: "Avatar",
      labelWithInitials: "Avatar with initials {initials}"
    },
    Autocomplete: {
      spinnerAccessibilityLabel: "Loading",
      ellipsis: "{content}\u2026"
    },
    Badge: {
      PROGRESS_LABELS: {
        incomplete: "Incomplete",
        partiallyComplete: "Partially complete",
        complete: "Complete"
      },
      TONE_LABELS: {
        info: "Info",
        success: "Success",
        warning: "Warning",
        critical: "Critical",
        attention: "Attention",
        new: "New",
        readOnly: "Read-only",
        enabled: "Enabled"
      },
      progressAndTone: "{toneLabel} {progressLabel}"
    },
    Banner: {
      dismissButton: "Dismiss notification"
    },
    Button: {
      spinnerAccessibilityLabel: "Loading"
    },
    Common: {
      checkbox: "checkbox",
      undo: "Undo",
      cancel: "Cancel",
      clear: "Clear",
      close: "Close",
      submit: "Submit",
      more: "More"
    },
    ContextualSaveBar: {
      save: "Save",
      discard: "Discard"
    },
    DataTable: {
      sortAccessibilityLabel: "sort {direction} by",
      navAccessibilityLabel: "Scroll table {direction} one column",
      totalsRowHeading: "Totals",
      totalRowHeading: "Total"
    },
    DatePicker: {
      previousMonth: "Show previous month, {previousMonthName} {showPreviousYear}",
      nextMonth: "Show next month, {nextMonth} {nextYear}",
      today: "Today ",
      start: "Start of range",
      end: "End of range",
      months: {
        january: "January",
        february: "February",
        march: "March",
        april: "April",
        may: "May",
        june: "June",
        july: "July",
        august: "August",
        september: "September",
        october: "October",
        november: "November",
        december: "December"
      },
      days: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday"
      },
      daysAbbreviated: {
        monday: "Mo",
        tuesday: "Tu",
        wednesday: "We",
        thursday: "Th",
        friday: "Fr",
        saturday: "Sa",
        sunday: "Su"
      }
    },
    DiscardConfirmationModal: {
      title: "Discard all unsaved changes",
      message: "If you discard changes, you\u2019ll delete any edits you made since you last saved.",
      primaryAction: "Discard changes",
      secondaryAction: "Continue editing"
    },
    DropZone: {
      single: {
        overlayTextFile: "Drop file to upload",
        overlayTextImage: "Drop image to upload",
        overlayTextVideo: "Drop video to upload",
        actionTitleFile: "Add file",
        actionTitleImage: "Add image",
        actionTitleVideo: "Add video",
        actionHintFile: "or drop file to upload",
        actionHintImage: "or drop image to upload",
        actionHintVideo: "or drop video to upload",
        labelFile: "Upload file",
        labelImage: "Upload image",
        labelVideo: "Upload video"
      },
      allowMultiple: {
        overlayTextFile: "Drop files to upload",
        overlayTextImage: "Drop images to upload",
        overlayTextVideo: "Drop videos to upload",
        actionTitleFile: "Add files",
        actionTitleImage: "Add images",
        actionTitleVideo: "Add videos",
        actionHintFile: "or drop files to upload",
        actionHintImage: "or drop images to upload",
        actionHintVideo: "or drop videos to upload",
        labelFile: "Upload files",
        labelImage: "Upload images",
        labelVideo: "Upload videos"
      },
      errorOverlayTextFile: "File type is not valid",
      errorOverlayTextImage: "Image type is not valid",
      errorOverlayTextVideo: "Video type is not valid"
    },
    EmptySearchResult: {
      altText: "Empty search results"
    },
    Frame: {
      skipToContent: "Skip to content",
      navigationLabel: "Navigation",
      Navigation: {
        closeMobileNavigationLabel: "Close navigation"
      }
    },
    FullscreenBar: {
      back: "Back",
      accessibilityLabel: "Exit fullscreen mode"
    },
    Filters: {
      moreFilters: "More filters",
      moreFiltersWithCount: "More filters ({count})",
      filter: "Filter {resourceName}",
      noFiltersApplied: "No filters applied",
      cancel: "Cancel",
      done: "Done",
      clearAllFilters: "Clear all filters",
      clear: "Clear",
      clearLabel: "Clear {filterName}",
      addFilter: "Add filter",
      clearFilters: "Clear all",
      searchInView: "in:{viewName}"
    },
    FilterPill: {
      clear: "Clear",
      unsavedChanges: "Unsaved changes - {label}"
    },
    IndexFilters: {
      searchFilterTooltip: "Search and filter",
      searchFilterTooltipWithShortcut: "Search and filter (F)",
      searchFilterAccessibilityLabel: "Search and filter results",
      sort: "Sort your results",
      addView: "Add a new view",
      newView: "Custom search",
      SortButton: {
        ariaLabel: "Sort the results",
        tooltip: "Sort",
        title: "Sort by",
        sorting: {
          asc: "Ascending",
          desc: "Descending",
          az: "A-Z",
          za: "Z-A"
        }
      },
      EditColumnsButton: {
        tooltip: "Edit columns",
        accessibilityLabel: "Customize table column order and visibility"
      },
      UpdateButtons: {
        cancel: "Cancel",
        update: "Update",
        save: "Save",
        saveAs: "Save as",
        modal: {
          title: "Save view as",
          label: "Name",
          sameName: "A view with this name already exists. Please choose a different name.",
          save: "Save",
          cancel: "Cancel"
        }
      }
    },
    IndexProvider: {
      defaultItemSingular: "Item",
      defaultItemPlural: "Items",
      allItemsSelected: "All {itemsLength}+ {resourceNamePlural} are selected",
      selected: "{selectedItemsCount} selected",
      a11yCheckboxDeselectAllSingle: "Deselect {resourceNameSingular}",
      a11yCheckboxSelectAllSingle: "Select {resourceNameSingular}",
      a11yCheckboxDeselectAllMultiple: "Deselect all {itemsLength} {resourceNamePlural}",
      a11yCheckboxSelectAllMultiple: "Select all {itemsLength} {resourceNamePlural}"
    },
    IndexTable: {
      emptySearchTitle: "No {resourceNamePlural} found",
      emptySearchDescription: "Try changing the filters or search term",
      onboardingBadgeText: "New",
      resourceLoadingAccessibilityLabel: "Loading {resourceNamePlural}\u2026",
      selectAllLabel: "Select all {resourceNamePlural}",
      selected: "{selectedItemsCount} selected",
      undo: "Undo",
      selectAllItems: "Select all {itemsLength}+ {resourceNamePlural}",
      selectItem: "Select {resourceName}",
      selectButtonText: "Select",
      sortAccessibilityLabel: "sort {direction} by"
    },
    Loading: {
      label: "Page loading bar"
    },
    Modal: {
      iFrameTitle: "body markup",
      modalWarning: "These required properties are missing from Modal: {missingProps}"
    },
    Page: {
      Header: {
        rollupActionsLabel: "View actions for {title}",
        pageReadyAccessibilityLabel: "{title}. This page is ready"
      }
    },
    Pagination: {
      previous: "Previous",
      next: "Next",
      pagination: "Pagination"
    },
    ProgressBar: {
      negativeWarningMessage: "Values passed to the progress prop shouldn\u2019t be negative. Resetting {progress} to 0.",
      exceedWarningMessage: "Values passed to the progress prop shouldn\u2019t exceed 100. Setting {progress} to 100."
    },
    ResourceList: {
      sortingLabel: "Sort by",
      defaultItemSingular: "item",
      defaultItemPlural: "items",
      showing: "Showing {itemsCount} {resource}",
      showingTotalCount: "Showing {itemsCount} of {totalItemsCount} {resource}",
      loading: "Loading {resource}",
      selected: "{selectedItemsCount} selected",
      allItemsSelected: "All {itemsLength}+ {resourceNamePlural} in your store are selected",
      allFilteredItemsSelected: "All {itemsLength}+ {resourceNamePlural} in this filter are selected",
      selectAllItems: "Select all {itemsLength}+ {resourceNamePlural} in your store",
      selectAllFilteredItems: "Select all {itemsLength}+ {resourceNamePlural} in this filter",
      emptySearchResultTitle: "No {resourceNamePlural} found",
      emptySearchResultDescription: "Try changing the filters or search term",
      selectButtonText: "Select",
      a11yCheckboxDeselectAllSingle: "Deselect {resourceNameSingular}",
      a11yCheckboxSelectAllSingle: "Select {resourceNameSingular}",
      a11yCheckboxDeselectAllMultiple: "Deselect all {itemsLength} {resourceNamePlural}",
      a11yCheckboxSelectAllMultiple: "Select all {itemsLength} {resourceNamePlural}",
      Item: {
        actionsDropdownLabel: "Actions for {accessibilityLabel}",
        actionsDropdown: "Actions dropdown",
        viewItem: "View details for {itemName}"
      },
      BulkActions: {
        actionsActivatorLabel: "Actions",
        moreActionsActivatorLabel: "More actions"
      }
    },
    SkeletonPage: {
      loadingLabel: "Page loading"
    },
    Tabs: {
      newViewAccessibilityLabel: "Create new view",
      newViewTooltip: "Create view",
      toggleTabsLabel: "More views",
      Tab: {
        rename: "Rename view",
        duplicate: "Duplicate view",
        edit: "Edit view",
        editColumns: "Edit columns",
        delete: "Delete view",
        copy: "Copy of {name}",
        deleteModal: {
          title: "Delete view?",
          description: "This can\u2019t be undone. {viewName} view will no longer be available in your admin.",
          cancel: "Cancel",
          delete: "Delete view"
        }
      },
      RenameModal: {
        title: "Rename view",
        label: "Name",
        cancel: "Cancel",
        create: "Save",
        errors: {
          sameName: "A view with this name already exists. Please choose a different name."
        }
      },
      DuplicateModal: {
        title: "Duplicate view",
        label: "Name",
        cancel: "Cancel",
        create: "Create view",
        errors: {
          sameName: "A view with this name already exists. Please choose a different name."
        }
      },
      CreateViewModal: {
        title: "Create new view",
        label: "Name",
        cancel: "Cancel",
        create: "Create view",
        errors: {
          sameName: "A view with this name already exists. Please choose a different name."
        }
      }
    },
    Tag: {
      ariaLabel: "Remove {children}"
    },
    TextField: {
      characterCount: "{count} characters",
      characterCountWithMaxLength: "{count} of {limit} characters used"
    },
    TooltipOverlay: {
      accessibilityLabel: "Tooltip: {label}"
    },
    TopBar: {
      toggleMenuLabel: "Toggle menu",
      SearchField: {
        clearButtonLabel: "Clear",
        search: "Search"
      }
    },
    MediaCard: {
      dismissButton: "Dismiss",
      popoverButton: "Actions"
    },
    VideoThumbnail: {
      playButtonA11yLabel: {
        default: "Play video",
        defaultWithDuration: "Play video of length {duration}",
        duration: {
          hours: {
            other: {
              only: "{hourCount} hours",
              andMinutes: "{hourCount} hours and {minuteCount} minutes",
              andMinute: "{hourCount} hours and {minuteCount} minute",
              minutesAndSeconds: "{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds",
              minutesAndSecond: "{hourCount} hours, {minuteCount} minutes, and {secondCount} second",
              minuteAndSeconds: "{hourCount} hours, {minuteCount} minute, and {secondCount} seconds",
              minuteAndSecond: "{hourCount} hours, {minuteCount} minute, and {secondCount} second",
              andSeconds: "{hourCount} hours and {secondCount} seconds",
              andSecond: "{hourCount} hours and {secondCount} second"
            },
            one: {
              only: "{hourCount} hour",
              andMinutes: "{hourCount} hour and {minuteCount} minutes",
              andMinute: "{hourCount} hour and {minuteCount} minute",
              minutesAndSeconds: "{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds",
              minutesAndSecond: "{hourCount} hour, {minuteCount} minutes, and {secondCount} second",
              minuteAndSeconds: "{hourCount} hour, {minuteCount} minute, and {secondCount} seconds",
              minuteAndSecond: "{hourCount} hour, {minuteCount} minute, and {secondCount} second",
              andSeconds: "{hourCount} hour and {secondCount} seconds",
              andSecond: "{hourCount} hour and {secondCount} second"
            }
          },
          minutes: {
            other: {
              only: "{minuteCount} minutes",
              andSeconds: "{minuteCount} minutes and {secondCount} seconds",
              andSecond: "{minuteCount} minutes and {secondCount} second"
            },
            one: {
              only: "{minuteCount} minute",
              andSeconds: "{minuteCount} minute and {secondCount} seconds",
              andSecond: "{minuteCount} minute and {secondCount} second"
            }
          },
          seconds: {
            other: "{secondCount} seconds",
            one: "{secondCount} second"
          }
        }
      }
    }
  }
};

// app/root.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// src/components/Layout/index.tsx
import { useLocation } from "react-router-dom";

// node_modules/lucide-react/dist/esm/createLucideIcon.js
import { forwardRef as forwardRef10, createElement as createElement2 } from "react";

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), createLucideIcon = (iconName, iconNode) => {
  let Component4 = forwardRef10(
    ({
      color: color2 = "currentColor",
      size: size2 = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      ...rest
    }, ref) => createElement2(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size2,
        height: size2,
        stroke: color2,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size2) : strokeWidth,
        className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement2(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );
  return Component4.displayName = `${iconName}`, Component4;
};

// node_modules/lucide-react/dist/esm/icons/arrow-up-right.js
var ArrowUpRight = createLucideIcon("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);

// node_modules/lucide-react/dist/esm/icons/bar-chart-3.js
var BarChart3 = createLucideIcon("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);

// node_modules/lucide-react/dist/esm/icons/bar-chart.js
var BarChart = createLucideIcon("BarChart", [
  ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
]);

// node_modules/lucide-react/dist/esm/icons/box.js
var Box2 = createLucideIcon("Box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);

// node_modules/lucide-react/dist/esm/icons/braces.js
var Braces = createLucideIcon("Braces", [
  [
    "path",
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/calendar-range.js
var CalendarRange = createLucideIcon("CalendarRange", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M17 14h-6", key: "bkmgh3" }],
  ["path", { d: "M13 18H7", key: "bb0bb7" }],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 18h.01", key: "1bdyru" }]
]);

// node_modules/lucide-react/dist/esm/icons/code-2.js
var Code2 = createLucideIcon("Code2", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
]);

// node_modules/lucide-react/dist/esm/icons/dollar-sign.js
var DollarSign = createLucideIcon("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);

// node_modules/lucide-react/dist/esm/icons/download.js
var Download = createLucideIcon("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);

// node_modules/lucide-react/dist/esm/icons/file-text.js
var FileText = createLucideIcon("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);

// node_modules/lucide-react/dist/esm/icons/git-branch.js
var GitBranch = createLucideIcon("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);

// node_modules/lucide-react/dist/esm/icons/layout-dashboard.js
var LayoutDashboard = createLucideIcon("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);

// node_modules/lucide-react/dist/esm/icons/network.js
var Network = createLucideIcon("Network", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
]);

// node_modules/lucide-react/dist/esm/icons/play-circle.js
var PlayCircle = createLucideIcon("PlayCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
]);

// node_modules/lucide-react/dist/esm/icons/refresh-cw.js
var RefreshCw = createLucideIcon("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);

// node_modules/lucide-react/dist/esm/icons/search.js
var Search2 = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// node_modules/lucide-react/dist/esm/icons/settings.js
var Settings = createLucideIcon("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

// node_modules/lucide-react/dist/esm/icons/shield-check.js
var ShieldCheck = createLucideIcon("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

// node_modules/lucide-react/dist/esm/icons/shopping-cart.js
var ShoppingCart = createLucideIcon("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/store.js
var Store = createLucideIcon("Store", [
  ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7", key: "ztvudi" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      key: "jon5kx"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/user-plus.js
var UserPlus = createLucideIcon("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);

// node_modules/lucide-react/dist/esm/icons/users.js
var Users = createLucideIcon("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);

// src/components/Layout/TopBar.tsx
import { useState as useState35, useCallback as useCallback36 } from "react";

// src/context/AuthContext.tsx
import { createContext as createContext20, useContext as useContext19, useEffect as useEffect45, useState as useState34 } from "react";

// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";
var supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "", supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
(!supabaseUrl || !supabaseAnonKey) && console.warn("Missing Supabase environment variables. Please check your .env file.");
var supabase = createClient(
  supabaseUrl || "http://localhost:54321",
  // Fallback for development
  supabaseAnonKey || "placeholder-key",
  // Fallback for development
  {
    auth: {
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0
    }
  }
);

// src/context/AuthContext.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var AuthContext = createContext20(void 0);
var useAuth = () => {
  let context = useContext19(AuthContext);
  if (context === void 0)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

// src/components/Layout/TopBar.tsx
import { useNavigate } from "react-router-dom";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function TopBar3() {
  let [isUserMenuOpen, setIsUserMenuOpen] = useState35(!1), [isSearchActive, setIsSearchActive] = useState35(!1), [searchValue, setSearchValue] = useState35(""), { user, signOut: signOut2 } = useAuth(), navigate = useNavigate(), toggleIsUserMenuOpen = useCallback36(
    () => setIsUserMenuOpen((isUserMenuOpen2) => !isUserMenuOpen2),
    []
  ), handleSearchResultsDismiss = useCallback36(() => {
    setIsSearchActive(!1), setSearchValue("");
  }, []), handleSearchChange = useCallback36((value) => {
    setSearchValue(value), setIsSearchActive(value.length > 0);
  }, []), handleSignOut = async () => {
    await signOut2(), navigate("/login");
  }, userMenuMarkup = /* @__PURE__ */ jsxDEV3(
    TopBar.UserMenu,
    {
      actions: [
        {
          items: [
            {
              content: "Profile",
              onAction: () => navigate("/settings")
            },
            {
              content: "Settings",
              onAction: () => navigate("/settings")
            },
            {
              content: "Sign out",
              onAction: handleSignOut
            }
          ]
        }
      ],
      name: user?.display_name || "User",
      detail: user?.role || "Enterprise User",
      initials: (user?.display_name || "U")[0].toUpperCase(),
      open: isUserMenuOpen,
      onToggle: toggleIsUserMenuOpen,
      avatar: user?.avatar_url
    },
    void 0,
    !1,
    {
      fileName: "src/components/Layout/TopBar.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  ), searchResultsMarkup = /* @__PURE__ */ jsxDEV3(
    ActionList,
    {
      items: [
        { content: "Dashboard", onAction: () => navigate("/") },
        { content: "Analytics", onAction: () => navigate("/analytics") },
        { content: "Users", onAction: () => navigate("/users") }
      ]
    },
    void 0,
    !1,
    {
      fileName: "src/components/Layout/TopBar.tsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
  ), searchFieldMarkup = /* @__PURE__ */ jsxDEV3(
    TopBar.SearchField,
    {
      onChange: handleSearchChange,
      value: searchValue,
      placeholder: "Search",
      showFocusBorder: !0
    },
    void 0,
    !1,
    {
      fileName: "src/components/Layout/TopBar.tsx",
      lineNumber: 74,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ jsxDEV3(
    TopBar,
    {
      showNavigationToggle: !0,
      userMenu: userMenuMarkup,
      searchResultsVisible: isSearchActive,
      searchField: searchFieldMarkup,
      searchResults: searchResultsMarkup,
      onSearchResultsDismiss: handleSearchResultsDismiss
    },
    void 0,
    !1,
    {
      fileName: "src/components/Layout/TopBar.tsx",
      lineNumber: 83,
      columnNumber: 5
    },
    this
  );
}

// src/components/Layout/NavigationMenu.tsx
import { useNavigate as useNavigate2 } from "react-router-dom";

// src/context/TestModeContext.tsx
import { createContext as createContext21, useContext as useContext20, useState as useState36 } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var defaultOrganizations = [
  {
    id: "org1",
    name: "North America Division",
    stores: [
      {
        id: "store1",
        name: "NA Fashion Direct",
        domain: "na-fashion.myshopify.com",
        plan: "enterprise",
        status: "active",
        metrics: {
          revenue: 125e4,
          orders: 12500,
          customers: 8500
        },
        lastSync: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "store2",
        name: "NA Sports & Outdoor",
        domain: "na-sports.myshopify.com",
        plan: "enterprise",
        status: "active",
        metrics: {
          revenue: 98e4,
          orders: 8900,
          customers: 6200
        },
        lastSync: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]
  },
  {
    id: "org2",
    name: "European Division",
    stores: [
      {
        id: "store3",
        name: "EU Fashion Collective",
        domain: "eu-fashion.myshopify.com",
        plan: "enterprise",
        status: "active",
        metrics: {
          revenue: 89e4,
          orders: 7800,
          customers: 5600
        },
        lastSync: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "store4",
        name: "EU Lifestyle",
        domain: "eu-lifestyle.myshopify.com",
        plan: "enterprise",
        status: "active",
        metrics: {
          revenue: 67e4,
          orders: 5900,
          customers: 4200
        },
        lastSync: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]
  }
], defaultTestStoreData = {
  name: "Test Store",
  domain: "test-store.myshopify.com",
  plan: "enterprise"
}, TestModeContext = createContext21(void 0), TestModeProvider = ({ children }) => {
  let [isTestMode, setIsTestMode] = useState36(import.meta.env.VITE_TEST_MODE === "true"), [organizations, setOrganizations] = useState36(defaultOrganizations), [testStoreData, setTestStoreData] = useState36(defaultTestStoreData), toggleTestMode = () => {
    setIsTestMode(!isTestMode);
  }, updateOrganizations = (data) => {
    setOrganizations(data);
  }, updateTestStoreData = (data) => {
    setTestStoreData(data);
  };
  return /* @__PURE__ */ jsxDEV4(TestModeContext.Provider, { value: {
    isTestMode,
    toggleTestMode,
    organizations,
    updateOrganizations,
    testStoreData,
    updateTestStoreData
  }, children }, void 0, !1, {
    fileName: "src/context/TestModeContext.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}, useTestMode = () => {
  let context = useContext20(TestModeContext);
  if (context === void 0)
    throw new Error("useTestMode must be used within a TestModeProvider");
  return context;
};

// src/components/Layout/NavigationMenu.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function NavigationMenu({ items }) {
  let navigate = useNavigate2(), { isTestMode } = useTestMode(), mainItems = [
    {
      label: "Overview",
      icon: LayoutDashboard,
      url: "/",
      selected: location.pathname === "/"
    },
    {
      label: "Playground",
      icon: PlayCircle,
      url: "/playground",
      selected: location.pathname === "/playground",
      badge: isTestMode ? "Test Mode" : void 0
    },
    {
      label: "Users",
      icon: Users,
      url: "/users",
      selected: location.pathname.startsWith("/users")
    },
    {
      label: "Roles",
      icon: ShieldCheck,
      url: "/roles",
      selected: location.pathname.startsWith("/roles")
    },
    {
      label: "Analytics",
      icon: BarChart3,
      url: "/analytics",
      selected: location.pathname.startsWith("/analytics")
    },
    {
      label: "Reports",
      icon: FileText,
      url: "/reports",
      selected: location.pathname.startsWith("/reports")
    },
    {
      label: "Settings",
      icon: Settings,
      url: "/settings",
      selected: location.pathname.startsWith("/settings")
    }
  ];
  return /* @__PURE__ */ jsxDEV5(Navigation2, { location: "/", children: [
    /* @__PURE__ */ jsxDEV5(
      Navigation2.Section,
      {
        items: mainItems.map((item) => ({
          label: item.label,
          icon: item.icon,
          url: item.url,
          selected: item.selected,
          badge: item.badge,
          onClick: (e) => {
            e.preventDefault(), navigate(item.url);
          }
        }))
      },
      void 0,
      !1,
      {
        fileName: "src/components/Layout/NavigationMenu.tsx",
        lineNumber: 84,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5(
      Navigation2.Section,
      {
        title: "Infrastructure",
        items: [
          {
            label: "Architectures",
            icon: Box2,
            url: "/architectures",
            selected: location.pathname.startsWith("/architectures"),
            onClick: (e) => {
              e.preventDefault(), navigate("/architectures");
            }
          },
          {
            label: "Networks",
            icon: Network,
            url: "/networks",
            selected: location.pathname.startsWith("/networks"),
            onClick: (e) => {
              e.preventDefault(), navigate("/networks");
            }
          },
          {
            label: "Orchestrations",
            icon: GitBranch,
            url: "/orchestrations",
            selected: location.pathname.startsWith("/orchestrations"),
            onClick: (e) => {
              e.preventDefault(), navigate("/orchestrations");
            }
          }
        ]
      },
      void 0,
      !1,
      {
        fileName: "src/components/Layout/NavigationMenu.tsx",
        lineNumber: 98,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5(
      Navigation2.Section,
      {
        title: "Development",
        items: [
          {
            label: "Mermaid AI",
            icon: Braces,
            url: "/mermaid",
            selected: location.pathname.startsWith("/mermaid"),
            onClick: (e) => {
              e.preventDefault(), navigate("/mermaid");
            }
          },
          {
            label: "Simulations",
            icon: PlayCircle,
            url: "/simulations",
            selected: location.pathname.startsWith("/simulations"),
            onClick: (e) => {
              e.preventDefault(), navigate("/simulations");
            }
          },
          {
            label: "Webcontainers",
            icon: Code2,
            url: "/webcontainers",
            selected: location.pathname.startsWith("/webcontainers"),
            onClick: (e) => {
              e.preventDefault(), navigate("/webcontainers");
            }
          }
        ]
      },
      void 0,
      !1,
      {
        fileName: "src/components/Layout/NavigationMenu.tsx",
        lineNumber: 134,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/components/Layout/NavigationMenu.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// src/components/Layout/index.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Layout3({ children }) {
  let location2 = useLocation(), navigationItems = [
    {
      label: "Overview",
      icon: LayoutDashboard,
      url: "/",
      selected: location2.pathname === "/"
    },
    {
      label: "Users",
      icon: Users,
      url: "/users",
      selected: location2.pathname.startsWith("/users")
    },
    {
      label: "Roles",
      icon: ShieldCheck,
      url: "/roles",
      selected: location2.pathname.startsWith("/roles")
    },
    {
      label: "Analytics",
      icon: BarChart3,
      url: "/analytics",
      selected: location2.pathname.startsWith("/analytics")
    },
    {
      label: "Reports",
      icon: FileText,
      url: "/reports",
      selected: location2.pathname.startsWith("/reports")
    },
    {
      label: "Settings",
      icon: Settings,
      url: "/settings",
      selected: location2.pathname.startsWith("/settings")
    }
  ];
  return /* @__PURE__ */ jsxDEV6(
    Frame,
    {
      topBar: /* @__PURE__ */ jsxDEV6(TopBar3, {}, void 0, !1, {
        fileName: "src/components/Layout/index.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this),
      navigation: /* @__PURE__ */ jsxDEV6(NavigationMenu, { items: navigationItems }, void 0, !1, {
        fileName: "src/components/Layout/index.tsx",
        lineNumber: 60,
        columnNumber: 19
      }, this),
      children: /* @__PURE__ */ jsxDEV6("div", { className: "p-6", children }, void 0, !1, {
        fileName: "src/components/Layout/index.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/components/Layout/index.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}

// app/root.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var queryClient = new QueryClient();
function meta() {
  return [
    { title: "Shopify Enterprise Dashboard" },
    { charset: "utf-8" },
    { viewport: "width=device-width,initial-scale=1" }
  ];
}
function links() {
  return [
    { rel: "icon", href: "/favicon.ico" }
  ];
}
function App() {
  return /* @__PURE__ */ jsxDEV7("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV7("head", { children: [
      /* @__PURE__ */ jsxDEV7(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("body", { children: [
      /* @__PURE__ */ jsxDEV7(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV7(AppProvider, { i18n: en_default, children: /* @__PURE__ */ jsxDEV7(TestModeProvider, { children: /* @__PURE__ */ jsxDEV7(Layout3, { children: /* @__PURE__ */ jsxDEV7(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/analytics.tsx
var analytics_exports = {};
__export(analytics_exports, {
  default: () => Analytics,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState as useState37 } from "react";

// app/components/Analytics/ShopifyAnalytics.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function ShopifyAnalytics({ analyticsData }) {
  let rows = analyticsData.map((item) => [
    item.date,
    `$${item.revenue.toFixed(2)}`,
    item.orders.toString(),
    `$${(item.revenue / Math.max(item.orders, 1)).toFixed(2)}`
  ]);
  return /* @__PURE__ */ jsxDEV8(Card, { title: "Sales Analytics", children: /* @__PURE__ */ jsxDEV8(Card.Section, { children: /* @__PURE__ */ jsxDEV8(
    DataTable,
    {
      columnContentTypes: ["text", "numeric", "numeric", "numeric"],
      headings: ["Date", "Revenue", "Orders", "Average Order Value"],
      rows,
      totals: [
        "",
        `$${analyticsData.reduce((acc, item) => acc + item.revenue, 0).toFixed(2)}`,
        analyticsData.reduce((acc, item) => acc + item.orders, 0).toString(),
        ""
      ]
    },
    void 0,
    !1,
    {
      fileName: "app/components/Analytics/ShopifyAnalytics.tsx",
      lineNumber: 24,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Analytics/ShopifyAnalytics.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Analytics/ShopifyAnalytics.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/lib/shopify.ts
async function getShopInfo() {
  try {
    return {
      name: "Your Shopify Store",
      domain: "example.myshopify.com",
      planName: "Basic",
      status: "active",
      storeOwner: "Store Owner",
      billingAddress: {
        address1: "123 Commerce St",
        city: "Shopify",
        zip: "12345",
        country: "US"
      },
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  } catch (error) {
    return console.error("Error fetching Shopify store info:", error), null;
  }
}
async function getAnalytics(timeframe) {
  try {
    let currentDate = /* @__PURE__ */ new Date(), data = [];
    for (let i = 0; i < 30; i++) {
      let date = /* @__PURE__ */ new Date();
      date.setDate(currentDate.getDate() - (30 - i)), data.push({
        date: date.toISOString(),
        revenue: Math.floor(Math.random() * 2e3) + 500,
        orders: Math.floor(Math.random() * 30) + 5,
        averageOrderValue: Math.floor(Math.random() * 100) + 50
      });
    }
    return data;
  } catch (error) {
    return console.error("Error fetching Shopify analytics:", error), [];
  }
}

// app/routes/analytics.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
async function loader() {
  try {
    let analyticsData = await getAnalytics("MONTH");
    return json({
      analyticsData,
      error: null
    });
  } catch (error) {
    return console.error("Error loading analytics data:", error), json({
      analyticsData: [],
      error: "Failed to load analytics data"
    });
  }
}
function Analytics() {
  let { analyticsData, error } = useLoaderData(), [selected, setSelected] = useState37(0), [dateRange, setDateRange] = useState37({
    start: new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 30)),
    end: /* @__PURE__ */ new Date()
  }), [timeframe, setTimeframe] = useState37("30d"), handleTabChange = (selectedTabIndex) => {
    setSelected(selectedTabIndex);
  }, handleTimeframeChange = (value) => {
    setTimeframe(value);
    let end = /* @__PURE__ */ new Date(), start = /* @__PURE__ */ new Date();
    switch (value) {
      case "7d":
        start = new Date((/* @__PURE__ */ new Date()).setDate(end.getDate() - 7));
        break;
      case "30d":
        start = new Date((/* @__PURE__ */ new Date()).setDate(end.getDate() - 30));
        break;
      case "90d":
        start = new Date((/* @__PURE__ */ new Date()).setDate(end.getDate() - 90));
        break;
      case "ytd":
        start = new Date(end.getFullYear(), 0, 1);
        break;
      case "1y":
        start = new Date((/* @__PURE__ */ new Date()).setFullYear(end.getFullYear() - 1));
        break;
    }
    setDateRange({ start, end });
  }, tabs = [
    {
      id: "sales",
      content: "Sales"
    },
    {
      id: "orders",
      content: "Orders"
    },
    {
      id: "products",
      content: "Products"
    },
    {
      id: "customers",
      content: "Customers"
    },
    {
      id: "traffic",
      content: "Traffic"
    }
  ], formatDate = (date) => date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }), renderPlaceholderTab = (tabName) => /* @__PURE__ */ jsxDEV9("div", { className: "mt-6 py-8 flex items-center justify-center text-gray-500 border border-dashed rounded", children: /* @__PURE__ */ jsxDEV9("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxDEV9("p", { className: "mb-2", children: [
      "This is where your ",
      tabName.toLowerCase(),
      " analytics chart would appear"
    ] }, void 0, !0, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9("p", { children: "Connect to your data source to visualize real metrics" }, void 0, !1, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/analytics.tsx",
    lineNumber: 97,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/analytics.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ jsxDEV9(Page, { title: "Analytics Dashboard", children: /* @__PURE__ */ jsxDEV9(Card, { children: /* @__PURE__ */ jsxDEV9("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV9(ButtonGroup, { segmented: !0, children: [
          /* @__PURE__ */ jsxDEV9(
            Button,
            {
              onClick: () => handleTimeframeChange("7d"),
              pressed: timeframe === "7d",
              children: "7D"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 111,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            Button,
            {
              onClick: () => handleTimeframeChange("30d"),
              pressed: timeframe === "30d",
              children: "30D"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 117,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            Button,
            {
              onClick: () => handleTimeframeChange("90d"),
              pressed: timeframe === "90d",
              children: "90D"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 123,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            Button,
            {
              onClick: () => handleTimeframeChange("ytd"),
              pressed: timeframe === "ytd",
              children: "YTD"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 129,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            Button,
            {
              onClick: () => handleTimeframeChange("1y"),
              pressed: timeframe === "1y",
              children: "1Y"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 135,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center border rounded-md p-2", children: [
          /* @__PURE__ */ jsxDEV9(CalendarRange, { className: "w-4 h-4 mr-2" }, void 0, !1, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 144,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("span", { children: [
            formatDate(dateRange.start),
            " - ",
            formatDate(dateRange.end)
          ] }, void 0, !0, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV9(
        Select,
        {
          label: "Compare with",
          labelHidden: !0,
          options: [
            { label: "Previous period", value: "previous" },
            { label: "Previous year", value: "last_year" },
            { label: "No comparison", value: "none" }
          ],
          value: "previous",
          onChange: () => {
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 149,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV9(Tabs, { tabs, selected, onSelect: handleTabChange }, void 0, !1, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this),
    selected === 0 && /* @__PURE__ */ jsxDEV9("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV9(ShopifyAnalytics, { analyticsData }, void 0, !1, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 166,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 165,
      columnNumber: 13
    }, this),
    selected === 1 && renderPlaceholderTab("Orders"),
    selected === 2 && renderPlaceholderTab("Products"),
    selected === 3 && renderPlaceholderTab("Customers"),
    selected === 4 && renderPlaceholderTab("Traffic"),
    /* @__PURE__ */ jsxDEV9("div", { className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      { title: "Revenue", value: "$24,521", change: "+8.1%" },
      { title: "Orders", value: "486", change: "+12.3%" },
      { title: "Conversion Rate", value: "12.3%", change: "+2.4%" }
    ].map((metric, i) => /* @__PURE__ */ jsxDEV9(Card, { children: /* @__PURE__ */ jsxDEV9(Card.Section, { children: /* @__PURE__ */ jsxDEV9("div", { className: "py-4", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "text-sm text-gray-500 mb-1", children: metric.title }, void 0, !1, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 184,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "text-2xl font-semibold", children: metric.value }, void 0, !1, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 185,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center mt-2 text-sm", children: [
        /* @__PURE__ */ jsxDEV9("span", { className: "text-emerald-600", children: metric.change }, void 0, !1, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 187,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV9("span", { className: "ml-1 text-gray-500", children: "vs previous period" }, void 0, !1, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 188,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 186,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 183,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 182,
      columnNumber: 17
    }, this) }, i, !1, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 181,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 175,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/analytics.tsx",
    lineNumber: 107,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/analytics.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/analytics.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Dashboard,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/Dashboard/KPIOverview.tsx
import React160 from "react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function KPIOverview({ stores }) {
  let totalRevenue = stores.reduce((sum, store) => sum + store.revenue, 0), totalOrders = stores.reduce((sum, store) => sum + store.orders, 0), activeStores = stores.filter((store) => store.status === "active").length, avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0, kpiCards = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      change: "+12.3%",
      icon: DollarSign,
      color: "text-emerald-600"
    },
    {
      title: "Total Orders",
      value: totalOrders.toLocaleString(),
      change: "+8.1%",
      icon: ShoppingCart,
      color: "text-blue-600"
    },
    {
      title: "Active Stores",
      value: activeStores.toString(),
      change: "+2",
      icon: Store,
      color: "text-purple-600"
    },
    {
      title: "Avg Order Value",
      value: `$${avgOrderValue.toFixed(2)}`,
      change: "+5.4%",
      icon: BarChart,
      color: "text-amber-600"
    }
  ];
  return /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6", children: kpiCards.map((kpi, index) => /* @__PURE__ */ jsxDEV10(Card, { children: /* @__PURE__ */ jsxDEV10(Card.Section, { children: /* @__PURE__ */ jsxDEV10("div", { className: "flex items-start justify-between", children: [
    /* @__PURE__ */ jsxDEV10("div", { children: [
      /* @__PURE__ */ jsxDEV10(Text, { variant: "bodySm", as: "p", color: "subdued", children: kpi.title }, void 0, !1, {
        fileName: "app/components/Dashboard/KPIOverview.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV10(Text, { variant: "headingMd", as: "h2", children: kpi.value }, void 0, !1, {
        fileName: "app/components/Dashboard/KPIOverview.tsx",
        lineNumber: 52,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/Dashboard/KPIOverview.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center mt-2", children: [
        /* @__PURE__ */ jsxDEV10(ArrowUpRight, { className: `w-4 h-4 ${kpi.color} mr-1` }, void 0, !1, {
          fileName: "app/components/Dashboard/KPIOverview.tsx",
          lineNumber: 55,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV10(Text, { variant: "bodySm", as: "p", color: "success", children: [
          kpi.change,
          " from last month"
        ] }, void 0, !0, {
          fileName: "app/components/Dashboard/KPIOverview.tsx",
          lineNumber: 56,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/KPIOverview.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/KPIOverview.tsx",
      lineNumber: 49,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: `p-3 rounded-full bg-gray-100 ${kpi.color}`, children: React160.createElement(kpi.icon, { className: "w-5 h-5" }) }, void 0, !1, {
      fileName: "app/components/Dashboard/KPIOverview.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/KPIOverview.tsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Dashboard/KPIOverview.tsx",
    lineNumber: 47,
    columnNumber: 11
  }, this) }, index, !1, {
    fileName: "app/components/Dashboard/KPIOverview.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/Dashboard/KPIOverview.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/components/Dashboard/StoreMatrix.tsx
import { useState as useState38 } from "react";
import { Fragment, jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function StoreMatrix({ stores }) {
  let [searchValue, setSearchValue] = useState38(""), [selectedStatus, setSelectedStatus] = useState38(null), filteredStores = stores.filter((store) => {
    let matchesSearch = store.name.toLowerCase().includes(searchValue.toLowerCase()) || store.url.toLowerCase().includes(searchValue.toLowerCase()), matchesStatus = selectedStatus === null || store.status === selectedStatus;
    return matchesSearch && matchesStatus;
  }), handleSearchChange = (value) => {
    setSearchValue(value);
  }, handleStatusChange = (value) => {
    setSelectedStatus(value);
  }, refreshData = () => {
    window.location.reload();
  }, formatDate = (dateString) => new Date(dateString).toLocaleString(), StatusBadge = ({ status }) => {
    let statusProps = {
      status: "new",
      children: "Unknown"
    };
    switch (status) {
      case "active":
        statusProps = { status: "success", children: "Active" };
        break;
      case "inactive":
        statusProps = { status: "critical", children: "Inactive" };
        break;
      case "pending":
        statusProps = { status: "warning", children: "Pending" };
        break;
    }
    return /* @__PURE__ */ jsxDEV11(Badge, { ...statusProps }, void 0, !1, {
      fileName: "app/components/Dashboard/StoreMatrix.tsx",
      lineNumber: 75,
      columnNumber: 12
    }, this);
  }, rows = filteredStores.map((store) => [
    store.name,
    store.url,
    `$${store.revenue.toLocaleString()}`,
    store.orders.toLocaleString(),
    /* @__PURE__ */ jsxDEV11(StatusBadge, { status: store.status }, void 0, !1, {
      fileName: "app/components/Dashboard/StoreMatrix.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this),
    formatDate(store.last_sync)
  ]);
  return /* @__PURE__ */ jsxDEV11(Fragment, { children: [
    /* @__PURE__ */ jsxDEV11(Card.Section, { children: /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "text-xl font-medium", children: "Store Performance" }, void 0, !1, {
        fileName: "app/components/Dashboard/StoreMatrix.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11(ButtonGroup, { children: [
        /* @__PURE__ */ jsxDEV11(Button, { onClick: refreshData, icon: /* @__PURE__ */ jsxDEV11(RefreshCw, { className: "w-4 h-4" }, void 0, !1, {
          fileName: "app/components/Dashboard/StoreMatrix.tsx",
          lineNumber: 94,
          columnNumber: 49
        }, this), children: "Refresh" }, void 0, !1, {
          fileName: "app/components/Dashboard/StoreMatrix.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11(Button, { icon: /* @__PURE__ */ jsxDEV11(Download, { className: "w-4 h-4" }, void 0, !1, {
          fileName: "app/components/Dashboard/StoreMatrix.tsx",
          lineNumber: 97,
          columnNumber: 27
        }, this), children: "Export" }, void 0, !1, {
          fileName: "app/components/Dashboard/StoreMatrix.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/StoreMatrix.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/StoreMatrix.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Dashboard/StoreMatrix.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(Card.Section, { children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "mb-4", children: /* @__PURE__ */ jsxDEV11(
        Filters,
        {
          queryValue: searchValue,
          queryPlaceholder: "Search stores...",
          filters: [
            {
              key: "status",
              label: "Status",
              filter: /* @__PURE__ */ jsxDEV11("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxDEV11(
                  Button,
                  {
                    onClick: () => handleStatusChange(null),
                    pressed: selectedStatus === null,
                    children: "All"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dashboard/StoreMatrix.tsx",
                    lineNumber: 115,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV11(
                  Button,
                  {
                    onClick: () => handleStatusChange("active"),
                    pressed: selectedStatus === "active",
                    children: "Active"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dashboard/StoreMatrix.tsx",
                    lineNumber: 121,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV11(
                  Button,
                  {
                    onClick: () => handleStatusChange("inactive"),
                    pressed: selectedStatus === "inactive",
                    children: "Inactive"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dashboard/StoreMatrix.tsx",
                    lineNumber: 127,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV11(
                  Button,
                  {
                    onClick: () => handleStatusChange("pending"),
                    pressed: selectedStatus === "pending",
                    children: "Pending"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dashboard/StoreMatrix.tsx",
                    lineNumber: 133,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/Dashboard/StoreMatrix.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this),
              shortcut: !0
            }
          ],
          onQueryChange: handleSearchChange,
          onQueryClear: () => setSearchValue("")
        },
        void 0,
        !1,
        {
          fileName: "app/components/Dashboard/StoreMatrix.tsx",
          lineNumber: 106,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Dashboard/StoreMatrix.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      filteredStores.length > 0 ? /* @__PURE__ */ jsxDEV11(
        DataTable,
        {
          columnContentTypes: [
            "text",
            "text",
            "numeric",
            "numeric",
            "text",
            "text"
          ],
          headings: [
            "Store Name",
            "URL",
            "Revenue",
            "Orders",
            "Status",
            "Last Sync"
          ],
          rows
        },
        void 0,
        !1,
        {
          fileName: "app/components/Dashboard/StoreMatrix.tsx",
          lineNumber: 150,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ jsxDEV11(
        EmptySearchResult,
        {
          title: "No stores found",
          description: "Try changing the filters or search term",
          withIllustration: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/Dashboard/StoreMatrix.tsx",
          lineNumber: 170,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/StoreMatrix.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(Card.Section, { children: /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxDEV11(
      Pagination,
      {
        hasPrevious: !0,
        onPrevious: () => {
        },
        hasNext: !0,
        onNext: () => {
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/Dashboard/StoreMatrix.tsx",
        lineNumber: 180,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Dashboard/StoreMatrix.tsx",
      lineNumber: 179,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Dashboard/StoreMatrix.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/StoreMatrix.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

// app/components/Dashboard/ShopifyStoreInfo.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function ShopifyStoreInfo({ shopInfo }) {
  return shopInfo ? /* @__PURE__ */ jsxDEV12(Card, { sectioned: !0, title: "Store Information", children: /* @__PURE__ */ jsxDEV12("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV12("div", { children: [
      /* @__PURE__ */ jsxDEV12("p", { className: "text-sm text-gray-500", children: "Store Name" }, void 0, !1, {
        fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { className: "font-medium", children: shopInfo.name }, void 0, !1, {
        fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { children: [
      /* @__PURE__ */ jsxDEV12("p", { className: "text-sm text-gray-500", children: "URL" }, void 0, !1, {
        fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { className: "font-medium", children: shopInfo.myshopifyDomain }, void 0, !1, {
        fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { children: [
      /* @__PURE__ */ jsxDEV12("p", { className: "text-sm text-gray-500", children: "Email" }, void 0, !1, {
        fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { className: "font-medium", children: shopInfo.email }, void 0, !1, {
        fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { children: [
      /* @__PURE__ */ jsxDEV12("p", { className: "text-sm text-gray-500", children: "Plan" }, void 0, !1, {
        fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { className: "font-medium", children: [
        shopInfo.plan?.displayName,
        shopInfo.plan?.shopifyPlus && " (Shopify Plus)"
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this) : /* @__PURE__ */ jsxDEV12(Card, { sectioned: !0, title: "Store Information", children: /* @__PURE__ */ jsxDEV12(TextContainer, { children: [
    /* @__PURE__ */ jsxDEV12("p", { className: "text-red-500", children: "No store information available" }, void 0, !1, {
      fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV12("p", { className: "text-sm text-gray-500 mt-2", children: "Check your Shopify API credentials or connection" }, void 0, !1, {
      fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Dashboard/ShopifyStoreInfo.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this);
}

// app/components/Dashboard/ShopifySyncButton.tsx
import React162 from "react";
import { Fragment as Fragment2, jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function ShopifySyncButton() {
  let [showToast, setShowToast] = React162.useState(!1), [toastContent, setToastContent] = React162.useState({
    message: "",
    error: !1
  }), [isSyncing, setIsSyncing] = React162.useState(!1), handleSync = () => {
    setIsSyncing(!0), setTimeout(() => {
      setIsSyncing(!1), setToastContent({
        message: "Sync completed successfully",
        error: !1
      }), setShowToast(!0);
    }, 1500);
  }, toggleToast = () => setShowToast((active) => !active);
  return /* @__PURE__ */ jsxDEV13(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV13(
      Button,
      {
        onClick: handleSync,
        disabled: isSyncing,
        icon: /* @__PURE__ */ jsxDEV13(RefreshCw, { className: "w-4 h-4" }, void 0, !1, {
          fileName: "app/components/Dashboard/ShopifySyncButton.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        children: isSyncing ? "Syncing..." : "Sync Shopify Data"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Dashboard/ShopifySyncButton.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    ),
    showToast && /* @__PURE__ */ jsxDEV13(
      Toast2,
      {
        content: toastContent.message,
        error: toastContent.error,
        onDismiss: toggleToast,
        duration: 4500
      },
      void 0,
      !1,
      {
        fileName: "app/components/Dashboard/ShopifySyncButton.tsx",
        lineNumber: 41,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/ShopifySyncButton.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/lib/supabase.ts
async function getStores() {
  try {
    return [
      {
        id: "1",
        name: "Store 1",
        url: "store1.myshopify.com",
        revenue: 12500,
        orders: 125,
        status: "active",
        last_sync: (/* @__PURE__ */ new Date()).toISOString(),
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "2",
        name: "Store 2",
        url: "store2.myshopify.com",
        revenue: 9800,
        orders: 98,
        status: "active",
        last_sync: (/* @__PURE__ */ new Date()).toISOString(),
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ];
  } catch (error) {
    return console.error("Error fetching stores:", error), [];
  }
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
async function loader2() {
  try {
    let stores = await getStores(), shopInfo = await getShopInfo();
    return json2({
      stores,
      shopInfo,
      error: null
    });
  } catch (error) {
    return console.error("Error loading dashboard data:", error), json2({
      stores: [],
      shopInfo: null,
      error: "Failed to load dashboard data"
    });
  }
}
function Dashboard() {
  let { stores, shopInfo, error } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV14(
    Page,
    {
      title: "Enterprise Overview",
      primaryAction: /* @__PURE__ */ jsxDEV14(ShopifySyncButton, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 37,
        columnNumber: 22
      }, this),
      children: /* @__PURE__ */ jsxDEV14(Layout, { children: [
        /* @__PURE__ */ jsxDEV14(Layout.Section, { children: /* @__PURE__ */ jsxDEV14(KPIOverview, { stores }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV14(Layout.Section, { children: /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-cols-3 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxDEV14("div", { className: "col-span-2", children: /* @__PURE__ */ jsxDEV14(Card, { children: /* @__PURE__ */ jsxDEV14(StoreMatrix, { stores }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "col-span-1", children: /* @__PURE__ */ jsxDEV14(ShopifyStoreInfo, { shopInfo }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
}

// app/routes/users.tsx
var users_exports = {};
__export(users_exports, {
  default: () => Users2,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { useState as useState39 } from "react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var mockUsers = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Admin",
    lastActive: "2025-03-28T15:24:32Z",
    status: "active"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Manager",
    lastActive: "2025-03-27T09:15:43Z",
    status: "active"
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "Staff",
    lastActive: "2025-03-25T14:32:11Z",
    status: "inactive"
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Manager",
    lastActive: "2025-03-28T11:45:20Z",
    status: "active"
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "Staff",
    lastActive: "2025-03-26T16:22:33Z",
    status: "pending"
  }
];
async function loader3() {
  return json3({ users: mockUsers });
}
function Users2() {
  let { users } = useLoaderData3(), [selectedItems, setSelectedItems] = useState39([]), [searchValue, setSearchValue] = useState39(""), [modalActive, setModalActive] = useState39(!1), [newUser, setNewUser] = useState39({ name: "", email: "", role: "Staff" }), filteredUsers = users.filter(
    (user) => user.name.toLowerCase().includes(searchValue.toLowerCase()) || user.email.toLowerCase().includes(searchValue.toLowerCase())
  ), handleSearchChange = (value) => {
    setSearchValue(value);
  }, handleSelectionChange = (selectedItems2) => {
    setSelectedItems(selectedItems2);
  }, handleModalChange = (open) => {
    setModalActive(open);
  }, handleUserChange = (field) => (value) => {
    setNewUser((prev) => ({ ...prev, [field]: value }));
  }, handleAddUser = () => {
    console.log("Adding user:", newUser), setModalActive(!1), setNewUser({ name: "", email: "", role: "Staff" });
  }, formatDate = (dateString) => new Date(dateString).toLocaleString();
  return /* @__PURE__ */ jsxDEV15(
    Page,
    {
      title: "User Management",
      primaryAction: {
        content: "Add user",
        icon: UserPlus,
        onAction: () => handleModalChange(!0)
      },
      children: [
        /* @__PURE__ */ jsxDEV15(Card, { children: /* @__PURE__ */ jsxDEV15(
          ResourceList,
          {
            resourceName: {
              singular: "user",
              plural: "users"
            },
            items: filteredUsers,
            renderItem: (item) => {
              let { id, name, email, role, lastActive, status } = item, shortcutActions = [
                {
                  content: "Edit",
                  onAction: () => console.log("Edit", id)
                }
              ], statusBadge;
              switch (status) {
                case "active":
                  statusBadge = /* @__PURE__ */ jsxDEV15(Badge, { status: "success", children: "Active" }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 153,
                    columnNumber: 23
                  }, this);
                  break;
                case "inactive":
                  statusBadge = /* @__PURE__ */ jsxDEV15(Badge, { status: "critical", children: "Inactive" }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 156,
                    columnNumber: 23
                  }, this);
                  break;
                case "pending":
                  statusBadge = /* @__PURE__ */ jsxDEV15(Badge, { status: "warning", children: "Pending" }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 159,
                    columnNumber: 23
                  }, this);
                  break;
              }
              let initialsFromName = name.split(" ").map((part) => part[0]).join("").toUpperCase();
              return /* @__PURE__ */ jsxDEV15(
                ResourceItem,
                {
                  id,
                  accessibilityLabel: `View details for ${name}`,
                  name,
                  shortcutActions,
                  persistActions: !0,
                  children: /* @__PURE__ */ jsxDEV15("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxDEV15("div", { className: "flex-shrink-0 mr-4", children: /* @__PURE__ */ jsxDEV15(Avatar, { customer: !0, size: "medium", name, initials: initialsFromName }, void 0, !1, {
                      fileName: "app/routes/users.tsx",
                      lineNumber: 175,
                      columnNumber: 13
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/users.tsx",
                      lineNumber: 174,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ jsxDEV15("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxDEV15("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsxDEV15("h3", { className: "text-base font-medium", children: name }, void 0, !1, {
                          fileName: "app/routes/users.tsx",
                          lineNumber: 179,
                          columnNumber: 15
                        }, this),
                        statusBadge
                      ] }, void 0, !0, {
                        fileName: "app/routes/users.tsx",
                        lineNumber: 178,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ jsxDEV15("p", { className: "text-sm text-gray-500", children: email }, void 0, !1, {
                        fileName: "app/routes/users.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ jsxDEV15("div", { className: "flex justify-between mt-1", children: [
                        /* @__PURE__ */ jsxDEV15(Text, { as: "span", variant: "bodySm", color: "subdued", children: [
                          "Role: ",
                          role
                        ] }, void 0, !0, {
                          fileName: "app/routes/users.tsx",
                          lineNumber: 184,
                          columnNumber: 15
                        }, this),
                        /* @__PURE__ */ jsxDEV15(Text, { as: "span", variant: "bodySm", color: "subdued", children: [
                          "Last active: ",
                          formatDate(lastActive)
                        ] }, void 0, !0, {
                          fileName: "app/routes/users.tsx",
                          lineNumber: 185,
                          columnNumber: 15
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/users.tsx",
                        lineNumber: 183,
                        columnNumber: 13
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/users.tsx",
                      lineNumber: 177,
                      columnNumber: 11
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 166,
                  columnNumber: 7
                },
                this
              );
            },
            selectedItems,
            onSelectionChange: handleSelectionChange,
            promotedBulkActions: [
              {
                content: "Activate users",
                onAction: () => console.log("Activate users", selectedItems)
              },
              {
                content: "Deactivate users",
                onAction: () => console.log("Deactivate users", selectedItems)
              }
            ],
            bulkActions: [
              {
                content: "Delete users",
                onAction: () => console.log("Delete users", selectedItems)
              }
            ],
            sortValue: "name",
            sortOptions: [
              { label: "Name", value: "name" },
              { label: "Role", value: "role" },
              { label: "Status", value: "status" }
            ],
            filterControl: /* @__PURE__ */ jsxDEV15(
              TextField,
              {
                value: searchValue,
                onChange: handleSearchChange,
                prefix: /* @__PURE__ */ jsxDEV15(Search2, { className: "w-4 h-4" }, void 0, !1, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 221,
                  columnNumber: 23
                }, this),
                placeholder: "Search users...",
                clearButton: !0,
                onClearButtonClick: () => setSearchValue("")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/users.tsx",
                lineNumber: 218,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/users.tsx",
            lineNumber: 203,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/users.tsx",
          lineNumber: 202,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV15(
          Modal,
          {
            open: modalActive,
            onClose: () => handleModalChange(!1),
            title: "Add new user",
            primaryAction: {
              content: "Add user",
              onAction: handleAddUser
            },
            secondaryActions: [
              {
                content: "Cancel",
                onAction: () => handleModalChange(!1)
              }
            ],
            children: /* @__PURE__ */ jsxDEV15(Modal.Section, { children: /* @__PURE__ */ jsxDEV15(Form, { onSubmit: handleAddUser, children: /* @__PURE__ */ jsxDEV15(FormLayout, { children: [
              /* @__PURE__ */ jsxDEV15(
                TextField,
                {
                  value: newUser.name,
                  onChange: handleUserChange("name"),
                  label: "Name",
                  type: "text",
                  autoComplete: "name",
                  requiredIndicator: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 248,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV15(
                TextField,
                {
                  value: newUser.email,
                  onChange: handleUserChange("email"),
                  label: "Email",
                  type: "email",
                  autoComplete: "email",
                  requiredIndicator: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 256,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV15(
                TextField,
                {
                  value: newUser.role,
                  onChange: handleUserChange("role"),
                  label: "Role",
                  type: "text"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 264,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/users.tsx",
              lineNumber: 247,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 246,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 245,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/users.tsx",
            lineNumber: 230,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/users.tsx",
      lineNumber: 194,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RM4GM7I5.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-XXIM3TNJ.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-U5E2PCIK.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VH2B25QX.js", imports: ["/build/_shared/chunk-B43JI2TA.js", "/build/_shared/chunk-PH7FC7E6.js", "/build/_shared/chunk-3C24CP4T.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-5MJFBHKJ.js", imports: ["/build/_shared/chunk-C3OHFWBF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/analytics": { id: "routes/analytics", parentId: "root", path: "analytics", index: void 0, caseSensitive: void 0, module: "/build/routes/analytics-OAMO23H3.js", imports: ["/build/_shared/chunk-C3OHFWBF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/users": { id: "routes/users", parentId: "root", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/users-YD6R3AAO.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b0690c31", hmr: { runtime: "/build/_shared/chunk-U5E2PCIK.js", timestamp: 1752276309798 }, url: "/build/manifest-B0690C31.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/analytics": {
    id: "routes/analytics",
    parentId: "root",
    path: "analytics",
    index: void 0,
    caseSensitive: void 0,
    module: analytics_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/users": {
    id: "routes/users",
    parentId: "root",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: users_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
/*! Bundled license information:

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/arrow-up-right.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/bar-chart-3.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/bar-chart.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/box.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/braces.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/calendar-range.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/code-2.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/dollar-sign.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/download.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/file-text.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/git-branch.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layout-dashboard.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/network.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/play-circle.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/refresh-cw.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/search.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/settings.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/shield-check.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/shopping-cart.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/store.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/user-plus.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/users.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map
