// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Dm0o":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "437b06dc2b5ab0f7";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"attJj":[function(require,module,exports) {
"use strict";
(function() {
    "use strict";
    try {
        if (typeof window === "undefined") return;
        if (!("SVGPathSeg" in window)) {
            window.SVGPathSeg = function(type, typeAsLetter, owningPathSegList) {
                this.pathSegType = type;
                this.pathSegTypeAsLetter = typeAsLetter;
                this._owningPathSegList = owningPathSegList;
            };
            window.SVGPathSeg.prototype.classname = "SVGPathSeg";
            window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
            window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
            window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
            window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
            window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
            window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
            window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
            window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
            window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
            window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
            window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
            window.SVGPathSeg.PATHSEG_ARC_REL = 11;
            window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
            window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
            window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
            window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
            window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
            window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
            window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
            window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
            window.SVGPathSeg.prototype._segmentChanged = function() {
                if (this._owningPathSegList) this._owningPathSegList.segmentChanged(this);
            };
            window.SVGPathSegClosePath = function(owningPathSegList) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
            };
            window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegClosePath.prototype.toString = function() {
                return "[object SVGPathSegClosePath]";
            };
            window.SVGPathSegClosePath.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter;
            };
            window.SVGPathSegClosePath.prototype.clone = function() {
                return new window.SVGPathSegClosePath(undefined);
            };
            window.SVGPathSegMovetoAbs = function(owningPathSegList, x, y) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
                this._x = x;
                this._y = y;
            };
            window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegMovetoAbs.prototype.toString = function() {
                return "[object SVGPathSegMovetoAbs]";
            };
            window.SVGPathSegMovetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            };
            window.SVGPathSegMovetoAbs.prototype.clone = function() {
                return new window.SVGPathSegMovetoAbs(undefined, this._x, this._y);
            };
            Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegMovetoRel = function(owningPathSegList, x, y) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
                this._x = x;
                this._y = y;
            };
            window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegMovetoRel.prototype.toString = function() {
                return "[object SVGPathSegMovetoRel]";
            };
            window.SVGPathSegMovetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            };
            window.SVGPathSegMovetoRel.prototype.clone = function() {
                return new window.SVGPathSegMovetoRel(undefined, this._x, this._y);
            };
            Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegLinetoAbs = function(owningPathSegList, x, y) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
                this._x = x;
                this._y = y;
            };
            window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegLinetoAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoAbs]";
            };
            window.SVGPathSegLinetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            };
            window.SVGPathSegLinetoAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoAbs(undefined, this._x, this._y);
            };
            Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegLinetoRel = function(owningPathSegList, x, y) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
                this._x = x;
                this._y = y;
            };
            window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegLinetoRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoRel]";
            };
            window.SVGPathSegLinetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            };
            window.SVGPathSegLinetoRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoRel(undefined, this._x, this._y);
            };
            Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegCurvetoCubicAbs = function(owningPathSegList, x, y, x1, y1, x2, y2) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
                this._x = x;
                this._y = y;
                this._x1 = x1;
                this._y1 = y1;
                this._x2 = x2;
                this._y2 = y2;
            };
            window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicAbs]";
            };
            window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
            };
            window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
            };
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
                get: function() {
                    return this._x1;
                },
                set: function(x1) {
                    this._x1 = x1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
                get: function() {
                    return this._y1;
                },
                set: function(y1) {
                    this._y1 = y1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
                get: function() {
                    return this._x2;
                },
                set: function(x2) {
                    this._x2 = x2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
                get: function() {
                    return this._y2;
                },
                set: function(y2) {
                    this._y2 = y2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegCurvetoCubicRel = function(owningPathSegList, x, y, x1, y1, x2, y2) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
                this._x = x;
                this._y = y;
                this._x1 = x1;
                this._y1 = y1;
                this._x2 = x2;
                this._y2 = y2;
            };
            window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicRel]";
            };
            window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
            };
            window.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
            };
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
                get: function() {
                    return this._x1;
                },
                set: function(x1) {
                    this._x1 = x1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
                get: function() {
                    return this._y1;
                },
                set: function(y1) {
                    this._y1 = y1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
                get: function() {
                    return this._x2;
                },
                set: function(x2) {
                    this._x2 = x2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
                get: function() {
                    return this._y2;
                },
                set: function(y2) {
                    this._y2 = y2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegCurvetoQuadraticAbs = function(owningPathSegList, x, y, x1, y1) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
                this._x = x;
                this._y = y;
                this._x1 = x1;
                this._y1 = y1;
            };
            window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticAbs]";
            };
            window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
            };
            window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1);
            };
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
                get: function() {
                    return this._x1;
                },
                set: function(x1) {
                    this._x1 = x1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
                get: function() {
                    return this._y1;
                },
                set: function(y1) {
                    this._y1 = y1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegCurvetoQuadraticRel = function(owningPathSegList, x, y, x1, y1) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
                this._x = x;
                this._y = y;
                this._x1 = x1;
                this._y1 = y1;
            };
            window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticRel]";
            };
            window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
            };
            window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1);
            };
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
                get: function() {
                    return this._x1;
                },
                set: function(x1) {
                    this._x1 = x1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
                get: function() {
                    return this._y1;
                },
                set: function(y1) {
                    this._y1 = y1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegArcAbs = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
                this._x = x;
                this._y = y;
                this._r1 = r1;
                this._r2 = r2;
                this._angle = angle;
                this._largeArcFlag = largeArcFlag;
                this._sweepFlag = sweepFlag;
            };
            window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegArcAbs.prototype.toString = function() {
                return "[object SVGPathSegArcAbs]";
            };
            window.SVGPathSegArcAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
            };
            window.SVGPathSegArcAbs.prototype.clone = function() {
                return new window.SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
            };
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
                get: function() {
                    return this._r1;
                },
                set: function(r1) {
                    this._r1 = r1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
                get: function() {
                    return this._r2;
                },
                set: function(r2) {
                    this._r2 = r2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
                get: function() {
                    return this._angle;
                },
                set: function(angle) {
                    this._angle = angle;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
                get: function() {
                    return this._largeArcFlag;
                },
                set: function(largeArcFlag) {
                    this._largeArcFlag = largeArcFlag;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
                get: function() {
                    return this._sweepFlag;
                },
                set: function(sweepFlag) {
                    this._sweepFlag = sweepFlag;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegArcRel = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
                this._x = x;
                this._y = y;
                this._r1 = r1;
                this._r2 = r2;
                this._angle = angle;
                this._largeArcFlag = largeArcFlag;
                this._sweepFlag = sweepFlag;
            };
            window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegArcRel.prototype.toString = function() {
                return "[object SVGPathSegArcRel]";
            };
            window.SVGPathSegArcRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
            };
            window.SVGPathSegArcRel.prototype.clone = function() {
                return new window.SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
            };
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
                get: function() {
                    return this._r1;
                },
                set: function(r1) {
                    this._r1 = r1;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
                get: function() {
                    return this._r2;
                },
                set: function(r2) {
                    this._r2 = r2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
                get: function() {
                    return this._angle;
                },
                set: function(angle) {
                    this._angle = angle;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
                get: function() {
                    return this._largeArcFlag;
                },
                set: function(largeArcFlag) {
                    this._largeArcFlag = largeArcFlag;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
                get: function() {
                    return this._sweepFlag;
                },
                set: function(sweepFlag) {
                    this._sweepFlag = sweepFlag;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegLinetoHorizontalAbs = function(owningPathSegList, x) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
                this._x = x;
            };
            window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoHorizontalAbs]";
            };
            window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x;
            };
            window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoHorizontalAbs(undefined, this._x);
            };
            Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegLinetoHorizontalRel = function(owningPathSegList, x) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
                this._x = x;
            };
            window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoHorizontalRel]";
            };
            window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x;
            };
            window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoHorizontalRel(undefined, this._x);
            };
            Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegLinetoVerticalAbs = function(owningPathSegList, y) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
                this._y = y;
            };
            window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoVerticalAbs]";
            };
            window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._y;
            };
            window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoVerticalAbs(undefined, this._y);
            };
            Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegLinetoVerticalRel = function(owningPathSegList, y) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
                this._y = y;
            };
            window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoVerticalRel]";
            };
            window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._y;
            };
            window.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoVerticalRel(undefined, this._y);
            };
            Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegCurvetoCubicSmoothAbs = function(owningPathSegList, x, y, x2, y2) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
                this._x = x;
                this._y = y;
                this._x2 = x2;
                this._y2 = y2;
            };
            window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicSmoothAbs]";
            };
            window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
            };
            window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2);
            };
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
                get: function() {
                    return this._x2;
                },
                set: function(x2) {
                    this._x2 = x2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
                get: function() {
                    return this._y2;
                },
                set: function(y2) {
                    this._y2 = y2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegCurvetoCubicSmoothRel = function(owningPathSegList, x, y, x2, y2) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
                this._x = x;
                this._y = y;
                this._x2 = x2;
                this._y2 = y2;
            };
            window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicSmoothRel]";
            };
            window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
            };
            window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2);
            };
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
                get: function() {
                    return this._x2;
                },
                set: function(x2) {
                    this._x2 = x2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
                get: function() {
                    return this._y2;
                },
                set: function(y2) {
                    this._y2 = y2;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegCurvetoQuadraticSmoothAbs = function(owningPathSegList, x, y) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
                this._x = x;
                this._y = y;
            };
            window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
            };
            window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            };
            window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y);
            };
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathSegCurvetoQuadraticSmoothRel = function(owningPathSegList, x, y) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
                this._x = x;
                this._y = y;
            };
            window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
            window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
            };
            window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
            };
            window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y);
            };
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
                get: function() {
                    return this._x;
                },
                set: function(x) {
                    this._x = x;
                    this._segmentChanged();
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
                get: function() {
                    return this._y;
                },
                set: function(y) {
                    this._y = y;
                    this._segmentChanged();
                },
                enumerable: true
            });
            window.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
                return new window.SVGPathSegClosePath(undefined);
            };
            window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(x, y) {
                return new window.SVGPathSegMovetoAbs(undefined, x, y);
            };
            window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(x, y) {
                return new window.SVGPathSegMovetoRel(undefined, x, y);
            };
            window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(x, y) {
                return new window.SVGPathSegLinetoAbs(undefined, x, y);
            };
            window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(x, y) {
                return new window.SVGPathSegLinetoRel(undefined, x, y);
            };
            window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) {
                return new window.SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2);
            };
            window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) {
                return new window.SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2);
            };
            window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) {
                return new window.SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1);
            };
            window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) {
                return new window.SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1);
            };
            window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
                return new window.SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
            };
            window.SVGPathElement.prototype.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
                return new window.SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
            };
            window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(x) {
                return new window.SVGPathSegLinetoHorizontalAbs(undefined, x);
            };
            window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(x) {
                return new window.SVGPathSegLinetoHorizontalRel(undefined, x);
            };
            window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(y) {
                return new window.SVGPathSegLinetoVerticalAbs(undefined, y);
            };
            window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(y) {
                return new window.SVGPathSegLinetoVerticalRel(undefined, y);
            };
            window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2);
            };
            window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) {
                return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2);
            };
            window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y);
            };
            window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y);
            };
            if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) window.SVGPathElement.prototype.getPathSegAtLength = function(distance) {
                if (distance === undefined || !isFinite(distance)) throw "Invalid arguments.";
                const measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                measurementElement.setAttribute("d", this.getAttribute("d"));
                let lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;
                if (lastPathSegment <= 0) return 0;
                do {
                    measurementElement.pathSegList.removeItem(lastPathSegment);
                    if (distance > measurementElement.getTotalLength()) break;
                    lastPathSegment--;
                }while (lastPathSegment > 0);
                return lastPathSegment;
            };
        }
        if (!("SVGPathSegList" in window) || !("appendItem" in window.SVGPathSegList.prototype)) {
            window.SVGPathSegList = function(pathElement) {
                this._pathElement = pathElement;
                this._list = this._parsePath(this._pathElement.getAttribute("d"));
                this._mutationObserverConfig = {
                    attributes: true,
                    attributeFilter: [
                        "d"
                    ]
                };
                this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
                this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
            };
            window.SVGPathSegList.prototype.classname = "SVGPathSegList";
            Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
                get: function() {
                    this._checkPathSynchronizedToList();
                    return this._list.length;
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathSegList.prototype, "length", {
                get: function() {
                    this._checkPathSynchronizedToList();
                    return this._list.length;
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
                get: function() {
                    if (!this._pathSegList) this._pathSegList = new window.SVGPathSegList(this);
                    return this._pathSegList;
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
                get: function() {
                    return this.pathSegList;
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
                get: function() {
                    return this.pathSegList;
                },
                enumerable: true
            });
            Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
                get: function() {
                    return this.pathSegList;
                },
                enumerable: true
            });
            window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
                this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
            };
            window.SVGPathSegList.prototype._updateListFromPathMutations = function(mutationRecords) {
                if (!this._pathElement) return;
                let hasPathMutations = false;
                mutationRecords.forEach(function(record) {
                    if (record.attributeName == "d") hasPathMutations = true;
                });
                if (hasPathMutations) this._list = this._parsePath(this._pathElement.getAttribute("d"));
            };
            window.SVGPathSegList.prototype._writeListToPath = function() {
                this._pathElementMutationObserver.disconnect();
                this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
                this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
            };
            window.SVGPathSegList.prototype.segmentChanged = function(pathSeg) {
                this._writeListToPath();
            };
            window.SVGPathSegList.prototype.clear = function() {
                this._checkPathSynchronizedToList();
                this._list.forEach(function(pathSeg) {
                    pathSeg._owningPathSegList = null;
                });
                this._list = [];
                this._writeListToPath();
            };
            window.SVGPathSegList.prototype.initialize = function(newItem) {
                this._checkPathSynchronizedToList();
                this._list = [
                    newItem
                ];
                newItem._owningPathSegList = this;
                this._writeListToPath();
                return newItem;
            };
            window.SVGPathSegList.prototype._checkValidIndex = function(index) {
                if (isNaN(index) || index < 0 || index >= this.numberOfItems) throw "INDEX_SIZE_ERR";
            };
            window.SVGPathSegList.prototype.getItem = function(index) {
                this._checkPathSynchronizedToList();
                this._checkValidIndex(index);
                return this._list[index];
            };
            window.SVGPathSegList.prototype.insertItemBefore = function(newItem, index) {
                this._checkPathSynchronizedToList();
                if (index > this.numberOfItems) index = this.numberOfItems;
                if (newItem._owningPathSegList) newItem = newItem.clone();
                this._list.splice(index, 0, newItem);
                newItem._owningPathSegList = this;
                this._writeListToPath();
                return newItem;
            };
            window.SVGPathSegList.prototype.replaceItem = function(newItem, index) {
                this._checkPathSynchronizedToList();
                if (newItem._owningPathSegList) newItem = newItem.clone();
                this._checkValidIndex(index);
                this._list[index] = newItem;
                newItem._owningPathSegList = this;
                this._writeListToPath();
                return newItem;
            };
            window.SVGPathSegList.prototype.removeItem = function(index) {
                this._checkPathSynchronizedToList();
                this._checkValidIndex(index);
                const item = this._list[index];
                this._list.splice(index, 1);
                this._writeListToPath();
                return item;
            };
            window.SVGPathSegList.prototype.appendItem = function(newItem) {
                this._checkPathSynchronizedToList();
                if (newItem._owningPathSegList) newItem = newItem.clone();
                this._list.push(newItem);
                newItem._owningPathSegList = this;
                this._writeListToPath();
                return newItem;
            };
            window.SVGPathSegList._pathSegArrayAsString = function(pathSegArray) {
                let string = "";
                let first = true;
                pathSegArray.forEach(function(pathSeg) {
                    if (first) {
                        first = false;
                        string += pathSeg._asPathString();
                    } else string += " " + pathSeg._asPathString();
                });
                return string;
            };
            window.SVGPathSegList.prototype._parsePath = function(string1) {
                if (!string1 || string1.length == 0) return [];
                const owningPathSegList = this;
                const Builder = function() {
                    this.pathSegList = [];
                };
                Builder.prototype.appendSegment = function(pathSeg) {
                    this.pathSegList.push(pathSeg);
                };
                const Source = function(string) {
                    this._string = string;
                    this._currentIndex = 0;
                    this._endIndex = this._string.length;
                    this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;
                    this._skipOptionalSpaces();
                };
                Source.prototype._isCurrentSpace = function() {
                    const character = this._string[this._currentIndex];
                    return character <= " " && (character == " " || character == "\n" || character == "	" || character == "\r" || character == "\f");
                };
                Source.prototype._skipOptionalSpaces = function() {
                    while(this._currentIndex < this._endIndex && this._isCurrentSpace())this._currentIndex++;
                    return this._currentIndex < this._endIndex;
                };
                Source.prototype._skipOptionalSpacesOrDelimiter = function() {
                    if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",") return false;
                    if (this._skipOptionalSpaces()) {
                        if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                            this._currentIndex++;
                            this._skipOptionalSpaces();
                        }
                    }
                    return this._currentIndex < this._endIndex;
                };
                Source.prototype.hasMoreData = function() {
                    return this._currentIndex < this._endIndex;
                };
                Source.prototype.peekSegmentType = function() {
                    const lookahead = this._string[this._currentIndex];
                    return this._pathSegTypeFromChar(lookahead);
                };
                Source.prototype._pathSegTypeFromChar = function(lookahead) {
                    switch(lookahead){
                        case "Z":
                        case "z":
                            return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                        case "M":
                            return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                        case "m":
                            return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                        case "L":
                            return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                        case "l":
                            return window.SVGPathSeg.PATHSEG_LINETO_REL;
                        case "C":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                        case "c":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                        case "Q":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                        case "q":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                        case "A":
                            return window.SVGPathSeg.PATHSEG_ARC_ABS;
                        case "a":
                            return window.SVGPathSeg.PATHSEG_ARC_REL;
                        case "H":
                            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                        case "h":
                            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                        case "V":
                            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                        case "v":
                            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                        case "S":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                        case "s":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                        case "T":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                        case "t":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                        default:
                            return window.SVGPathSeg.PATHSEG_UNKNOWN;
                    }
                };
                Source.prototype._nextCommandHelper = function(lookahead, previousCommand) {
                    if ((lookahead == "+" || lookahead == "-" || lookahead == "." || lookahead >= "0" && lookahead <= "9") && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                        if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS) return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                        if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL) return window.SVGPathSeg.PATHSEG_LINETO_REL;
                        return previousCommand;
                    }
                    return window.SVGPathSeg.PATHSEG_UNKNOWN;
                };
                Source.prototype.initialCommandIsMoveTo = function() {
                    if (!this.hasMoreData()) return true;
                    const command = this.peekSegmentType();
                    return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
                };
                Source.prototype._parseNumber = function() {
                    let exponent = 0;
                    let integer = 0;
                    let frac = 1;
                    let decimal = 0;
                    let sign = 1;
                    let expsign = 1;
                    const startIndex = this._currentIndex;
                    this._skipOptionalSpaces();
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+") this._currentIndex++;
                    else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                        this._currentIndex++;
                        sign = -1;
                    }
                    if (this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != ".") return undefined;
                    const startIntPartIndex = this._currentIndex;
                    while(this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")this._currentIndex++;
                    if (this._currentIndex != startIntPartIndex) {
                        let scanIntPartIndex = this._currentIndex - 1;
                        let multiplier = 1;
                        while(scanIntPartIndex >= startIntPartIndex){
                            integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                            multiplier *= 10;
                        }
                    }
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                        this._currentIndex++;
                        if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;
                        while(this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9"){
                            frac *= 10;
                            decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                            this._currentIndex += 1;
                        }
                    }
                    if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m") {
                        this._currentIndex++;
                        if (this._string.charAt(this._currentIndex) == "+") this._currentIndex++;
                        else if (this._string.charAt(this._currentIndex) == "-") {
                            this._currentIndex++;
                            expsign = -1;
                        }
                        if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;
                        while(this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9"){
                            exponent *= 10;
                            exponent += this._string.charAt(this._currentIndex) - "0";
                            this._currentIndex++;
                        }
                    }
                    let number = integer + decimal;
                    number *= sign;
                    if (exponent) number *= Math.pow(10, expsign * exponent);
                    if (startIndex == this._currentIndex) return undefined;
                    this._skipOptionalSpacesOrDelimiter();
                    return number;
                };
                Source.prototype._parseArcFlag = function() {
                    if (this._currentIndex >= this._endIndex) return undefined;
                    let flag = false;
                    const flagChar = this._string.charAt(this._currentIndex++);
                    if (flagChar == "0") flag = false;
                    else if (flagChar == "1") flag = true;
                    else return undefined;
                    this._skipOptionalSpacesOrDelimiter();
                    return flag;
                };
                Source.prototype.parseSegment = function() {
                    const lookahead = this._string[this._currentIndex];
                    let command = this._pathSegTypeFromChar(lookahead);
                    if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                        if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                        command = this._nextCommandHelper(lookahead, this._previousCommand);
                        if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                    } else this._currentIndex++;
                    this._previousCommand = command;
                    let points;
                    switch(command){
                        case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                            return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                            return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_REL:
                            return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                            return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                            return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                            return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                            return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                            return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                            this._skipOptionalSpaces();
                            return new window.SVGPathSegClosePath(owningPathSegList);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                            points = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                            points = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                            points = {
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                            points = {
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                            points = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                            points = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                            return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_ARC_REL:
                            points = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                arcAngle: this._parseNumber(),
                                arcLarge: this._parseArcFlag(),
                                arcSweep: this._parseArcFlag(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                        case window.SVGPathSeg.PATHSEG_ARC_ABS:
                            points = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                arcAngle: this._parseNumber(),
                                arcLarge: this._parseArcFlag(),
                                arcSweep: this._parseArcFlag(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                        default:
                            throw "Unknown path seg type.";
                    }
                };
                const builder = new Builder();
                const source = new Source(string1);
                if (!source.initialCommandIsMoveTo()) return [];
                while(source.hasMoreData()){
                    const pathSeg = source.parseSegment();
                    if (!pathSeg) return [];
                    builder.appendSegment(pathSeg);
                }
                return builder.pathSegList;
            };
        }
    } catch (e) {
        console.warn("An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles", e);
    }
})();

},{}]},["7Dm0o"], null, "parcelRequireb9d1")

//# sourceMappingURL=pathseg.2b5ab0f7.js.map
