(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-afda5a22"], {
    "0f01": function (t, e, r) {
        "use strict";
        var n = r("e9ac"), o = n("%Object%"), i = n("%TypeError%"), s = n("%String%"), a = r("c46d"), l = r("2057"),
            c = r("c612"), u = r("5975"), h = r("bb53"), p = r("21d0"), d = r("2f17"), f = r("a0d3"), y = {
                ToPrimitive: d, ToBoolean: function (t) {
                    return !!t
                }, ToNumber: function (t) {
                    return +t
                }, ToInteger: function (t) {
                    var e = this.ToNumber(t);
                    return l(e) ? 0 : 0 !== e && c(e) ? u(e) * Math.floor(Math.abs(e)) : e
                }, ToInt32: function (t) {
                    return this.ToNumber(t) >> 0
                }, ToUint32: function (t) {
                    return this.ToNumber(t) >>> 0
                }, ToUint16: function (t) {
                    var e = this.ToNumber(t);
                    if (l(e) || 0 === e || !c(e)) return 0;
                    var r = u(e) * Math.floor(Math.abs(e));
                    return h(r, 65536)
                }, ToString: function (t) {
                    return s(t)
                }, ToObject: function (t) {
                    return this.CheckObjectCoercible(t), o(t)
                }, CheckObjectCoercible: function (t, e) {
                    if (null == t) throw new i(e || "Cannot call method on " + t);
                    return t
                }, IsCallable: p, SameValue: function (t, e) {
                    return t === e ? 0 !== t || 1 / t === 1 / e : l(t) && l(e)
                }, Type: function (t) {
                    return null === t ? "Null" : "undefined" === typeof t ? "Undefined" : "function" === typeof t || "object" === typeof t ? "Object" : "number" === typeof t ? "Number" : "boolean" === typeof t ? "Boolean" : "string" === typeof t ? "String" : void 0
                }, IsPropertyDescriptor: function (t) {
                    if ("Object" !== this.Type(t)) return !1;
                    var e = {
                        "[[Configurable]]": !0,
                        "[[Enumerable]]": !0,
                        "[[Get]]": !0,
                        "[[Set]]": !0,
                        "[[Value]]": !0,
                        "[[Writable]]": !0
                    };
                    for (var r in t) if (f(t, r) && !e[r]) return !1;
                    var n = f(t, "[[Value]]"), o = f(t, "[[Get]]") || f(t, "[[Set]]");
                    if (n && o) throw new i("Property Descriptors may not be both accessor and data descriptors");
                    return !0
                }, IsAccessorDescriptor: function (t) {
                    return "undefined" !== typeof t && (a(this, "Property Descriptor", "Desc", t), !(!f(t, "[[Get]]") && !f(t, "[[Set]]")))
                }, IsDataDescriptor: function (t) {
                    return "undefined" !== typeof t && (a(this, "Property Descriptor", "Desc", t), !(!f(t, "[[Value]]") && !f(t, "[[Writable]]")))
                }, IsGenericDescriptor: function (t) {
                    return "undefined" !== typeof t && (a(this, "Property Descriptor", "Desc", t), !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t))
                }, FromPropertyDescriptor: function (t) {
                    if ("undefined" === typeof t) return t;
                    if (a(this, "Property Descriptor", "Desc", t), this.IsDataDescriptor(t)) return {
                        value: t["[[Value]]"],
                        writable: !!t["[[Writable]]"],
                        enumerable: !!t["[[Enumerable]]"],
                        configurable: !!t["[[Configurable]]"]
                    };
                    if (this.IsAccessorDescriptor(t)) return {
                        get: t["[[Get]]"],
                        set: t["[[Set]]"],
                        enumerable: !!t["[[Enumerable]]"],
                        configurable: !!t["[[Configurable]]"]
                    };
                    throw new i("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
                }, ToPropertyDescriptor: function (t) {
                    if ("Object" !== this.Type(t)) throw new i("ToPropertyDescriptor requires an object");
                    var e = {};
                    if (f(t, "enumerable") && (e["[[Enumerable]]"] = this.ToBoolean(t.enumerable)), f(t, "configurable") && (e["[[Configurable]]"] = this.ToBoolean(t.configurable)), f(t, "value") && (e["[[Value]]"] = t.value), f(t, "writable") && (e["[[Writable]]"] = this.ToBoolean(t.writable)), f(t, "get")) {
                        var r = t.get;
                        if ("undefined" !== typeof r && !this.IsCallable(r)) throw new TypeError("getter must be a function");
                        e["[[Get]]"] = r
                    }
                    if (f(t, "set")) {
                        var n = t.set;
                        if ("undefined" !== typeof n && !this.IsCallable(n)) throw new i("setter must be a function");
                        e["[[Set]]"] = n
                    }
                    if ((f(e, "[[Get]]") || f(e, "[[Set]]")) && (f(e, "[[Value]]") || f(e, "[[Writable]]"))) throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                    return e
                }
            };
        t.exports = y
    }, "0f7c": function (t, e, r) {
        "use strict";
        var n = r("688e");
        t.exports = Function.prototype.bind || n
    }, 1: function (t, e) {
    }, "1b7f": function (t, e, r) {
        "use strict";
        var n = r("562e"), o = "​";
        t.exports = function () {
            return String.prototype.trim && o.trim() === o ? String.prototype.trim : n
        }
    }, "1b8d": function (t, e) {
        function r(t) {
            return t.replace(/\n\r?\s*/g, "")
        }

        t.exports = function (t) {
            for (var e = "", n = 0; n < arguments.length; n++) e += r(t[n]) + (arguments[n + 1] || "");
            return e
        }
    }, 2057: function (t, e) {
        t.exports = Number.isNaN || function (t) {
            return t !== t
        }
    }, "21d0": function (t, e, r) {
        "use strict";
        var n = Function.prototype.toString, o = /^\s*class\b/, i = function (t) {
                try {
                    var e = n.call(t);
                    return o.test(e)
                } catch (r) {
                    return !1
                }
            }, s = function (t) {
                try {
                    return !i(t) && (n.call(t), !0)
                } catch (e) {
                    return !1
                }
            }, a = Object.prototype.toString, l = "[object Function]", c = "[object GeneratorFunction]",
            u = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag;
        t.exports = function (t) {
            if (!t) return !1;
            if ("function" !== typeof t && "object" !== typeof t) return !1;
            if ("function" === typeof t && !t.prototype) return !0;
            if (u) return s(t);
            if (i(t)) return !1;
            var e = a.call(t);
            return e === l || e === c
        }
    }, "2b8c": function (t, e, r) {
        var n = r("be09"), o = t.exports = {WebVTT: r("d02c4"), VTTCue: r("b03c"), VTTRegion: r("f97d")};
        n.vttjs = o, n.WebVTT = o.WebVTT;
        var i = o.VTTCue, s = o.VTTRegion, a = n.VTTCue, l = n.VTTRegion;
        o.shim = function () {
            n.VTTCue = i, n.VTTRegion = s
        }, o.restore = function () {
            n.VTTCue = a, n.VTTRegion = l
        }, n.VTTCue || o.shim()
    }, "2f17": function (t, e, r) {
        "use strict";
        var n = Object.prototype.toString, o = r("4de8"), i = r("21d0"), s = {
            "[[DefaultValue]]": function (t) {
                var e;
                if (e = arguments.length > 1 ? arguments[1] : "[object Date]" === n.call(t) ? String : Number, e === String || e === Number) {
                    var r, s, a = e === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (s = 0; s < a.length; ++s) if (i(t[a[s]]) && (r = t[a[s]](), o(r))) return r;
                    throw new TypeError("No default value")
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied")
            }
        };
        t.exports = function (t) {
            return o(t) ? t : arguments.length > 1 ? s["[[DefaultValue]]"](t, arguments[1]) : s["[[DefaultValue]]"](t)
        }
    }, "3d33": function (t, e, r) {
        /**
         * @license
         * Video.js 6.13.0 <http://videojs.com/>
         * Copyright Brightcove, Inc. <https://www.brightcove.com/>
         * Available under Apache License Version 2.0
         * <https://github.com/videojs/video.js/blob/master/LICENSE>
         *
         * Includes vtt.js <https://github.com/mozilla/vtt.js>
         * Available under Apache License Version 2.0
         * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
         */
        function n(t) {
            return t && "object" === typeof t && "default" in t ? t["default"] : t
        }

        var o = n(r("be09")), i = n(r("ef34")), s = n(r("1b8d")), a = n(r("8c10")), l = n(r("eec7")), c = n(r("2b8c")),
            u = "6.13.0", h = o.navigator && o.navigator.userAgent || "", p = /AppleWebKit\/([\d.]+)/i.exec(h),
            d = p ? parseFloat(p.pop()) : null, f = /iPad/i.test(h), y = /iPhone/i.test(h) && !f, v = /iPod/i.test(h),
            g = y || f || v, m = function () {
                var t = h.match(/OS (\d+)_/i);
                return t && t[1] ? t[1] : null
            }(), _ = /Android/i.test(h), b = function () {
                var t = h.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                if (!t) return null;
                var e = t[1] && parseFloat(t[1]), r = t[2] && parseFloat(t[2]);
                return e && r ? parseFloat(t[1] + "." + t[2]) : e || null
            }(), T = _ && /webkit/i.test(h) && b < 2.3, C = _ && b < 5 && d < 537, k = /Firefox/i.test(h),
            w = /Edge/i.test(h), E = !w && (/Chrome/i.test(h) || /CriOS/i.test(h)), S = function () {
                var t = h.match(/(Chrome|CriOS)\/(\d+)/);
                return t && t[2] ? parseFloat(t[2]) : null
            }(), x = /MSIE\s8\.0/.test(h), j = function () {
                var t = /MSIE\s(\d+)\.\d/.exec(h), e = t && parseFloat(t[1]);
                return !e && /Trident\/7.0/i.test(h) && /rv:11.0/.test(h) && (e = 11), e
            }(), P = /Safari/i.test(h) && !E && !_ && !w, A = (P || g) && !E,
            O = rt() && ("ontouchstart" in o || o.navigator.maxTouchPoints || o.DocumentTouch && o.document instanceof o.DocumentTouch),
            M = rt() && "backgroundSize" in o.document.createElement("video").style, N = (Object.freeze || Object)({
                IS_IPAD: f,
                IS_IPHONE: y,
                IS_IPOD: v,
                IS_IOS: g,
                IOS_VERSION: m,
                IS_ANDROID: _,
                ANDROID_VERSION: b,
                IS_OLD_ANDROID: T,
                IS_NATIVE_ANDROID: C,
                IS_FIREFOX: k,
                IS_EDGE: w,
                IS_CHROME: E,
                CHROME_VERSION: S,
                IS_IE8: x,
                IE_VERSION: j,
                IS_SAFARI: P,
                IS_ANY_SAFARI: A,
                TOUCH_ENABLED: O,
                BACKGROUND_SIZE_SUPPORTED: M
            }), I = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, D = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }, R = function (t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }, L = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }, F = function (t, e) {
                return t.raw = e, t
            }, B = Object.prototype.toString, $ = function (t) {
                return W(t) ? Object.keys(t) : []
            };

        function V(t, e) {
            $(t).forEach(function (r) {
                return e(t[r], r)
            })
        }

        function H(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return $(t).reduce(function (r, n) {
                return e(r, t[n], n)
            }, r)
        }

        function U(t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
            return Object.assign ? Object.assign.apply(Object, [t].concat(r)) : (r.forEach(function (e) {
                e && V(e, function (e, r) {
                    t[r] = e
                })
            }), t)
        }

        function W(t) {
            return !!t && "object" === ("undefined" === typeof t ? "undefined" : I(t))
        }

        function z(t) {
            return W(t) && "[object Object]" === B.call(t) && t.constructor === Object
        }

        var q = [], X = function (t, e) {
            return function (r, n, i, s) {
                var a = e.levels[n], l = new RegExp("^(" + a + ")$");
                if ("log" !== r && i.unshift(r.toUpperCase() + ":"), i.unshift(t + ":"), q && q.push([].concat(i)), o.console) {
                    var c = o.console[r];
                    c || "debug" !== r || (c = o.console.info || o.console.log), c && a && l.test(r) && (s && (i = i.map(function (t) {
                        if (W(t) || Array.isArray(t)) try {
                            return JSON.stringify(t)
                        } catch (e) {
                            return String(t)
                        }
                        return String(t)
                    }).join(" ")), c.apply ? c[Array.isArray(i) ? "apply" : "call"](o.console, i) : c(i))
                }
            }
        };

        function G(t) {
            var e = "info", r = void 0, n = function t() {
                for (var n = t.stringify || j && j < 11, o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
                r("log", e, i, n)
            };
            return r = X(t, n), n.createLogger = function (e) {
                return G(t + ": " + e)
            }, n.levels = {
                all: "debug|log|warn|error",
                off: "",
                debug: "debug|log|warn|error",
                info: "log|warn|error",
                warn: "warn|error",
                error: "error",
                DEFAULT: e
            }, n.level = function (t) {
                if ("string" === typeof t) {
                    if (!n.levels.hasOwnProperty(t)) throw new Error('"' + t + '" in not a valid log level');
                    e = t
                }
                return e
            }, n.history = function () {
                return q ? [].concat(q) : []
            }, n.history.filter = function (t) {
                return (q || []).filter(function (e) {
                    return new RegExp(".*" + t + ".*").test(e[0])
                })
            }, n.history.clear = function () {
                q && (q.length = 0)
            }, n.history.disable = function () {
                null !== q && (q.length = 0, q = null)
            }, n.history.enable = function () {
                null === q && (q = [])
            }, n.error = function () {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                return r("error", e, n)
            }, n.warn = function () {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                return r("warn", e, n)
            }, n.debug = function () {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                return r("debug", e, n)
            }, n
        }

        var Y = G("VIDEOJS"), K = Y.createLogger;

        function J(t, e) {
            if (!t || !e) return "";
            if ("function" === typeof o.getComputedStyle) {
                var r = o.getComputedStyle(t);
                return r ? r[e] : ""
            }
            return t.currentStyle[e] || ""
        }

        var Q = F(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);

        function Z(t) {
            return "string" === typeof t && /\S/.test(t)
        }

        function tt(t) {
            if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
        }

        function et(t) {
            return new RegExp("(^|\\s)" + t + "($|\\s)")
        }

        function rt() {
            return i === o.document && "undefined" !== typeof i.createElement
        }

        function nt(t) {
            return W(t) && 1 === t.nodeType
        }

        function ot() {
            try {
                return o.parent !== o.self
            } catch (t) {
                return !0
            }
        }

        function it(t) {
            return function (e, r) {
                if (!Z(e)) return i[t](null);
                Z(r) && (r = i.querySelector(r));
                var n = nt(r) ? r : i;
                return n[t] && n[t](e)
            }
        }

        function st() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments[3],
                o = i.createElement(t);
            return Object.getOwnPropertyNames(e).forEach(function (t) {
                var r = e[t];
                -1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (Y.warn(s(Q, t, r)), o.setAttribute(t, r)) : "textContent" === t ? at(o, r) : o[t] = r
            }), Object.getOwnPropertyNames(r).forEach(function (t) {
                o.setAttribute(t, r[t])
            }), n && St(o, n), o
        }

        function at(t, e) {
            return "undefined" === typeof t.textContent ? t.innerText = e : t.textContent = e, t
        }

        function lt(t, e) {
            e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
        }

        function ct(t, e) {
            return tt(e), t.classList ? t.classList.contains(e) : et(e).test(t.className)
        }

        function ut(t, e) {
            return t.classList ? t.classList.add(e) : ct(t, e) || (t.className = (t.className + " " + e).trim()), t
        }

        function ht(t, e) {
            return t.classList ? t.classList.remove(e) : (tt(e), t.className = t.className.split(/\s+/).filter(function (t) {
                return t !== e
            }).join(" ")), t
        }

        function pt(t, e, r) {
            var n = ct(t, e);
            if ("function" === typeof r && (r = r(t, e)), "boolean" !== typeof r && (r = !n), r !== n) return r ? ut(t, e) : ht(t, e), t
        }

        function dt(t, e) {
            Object.getOwnPropertyNames(e).forEach(function (r) {
                var n = e[r];
                null === n || "undefined" === typeof n || !1 === n ? t.removeAttribute(r) : t.setAttribute(r, !0 === n ? "" : n)
            })
        }

        function ft(t) {
            var e = {}, r = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
            if (t && t.attributes && t.attributes.length > 0) for (var n = t.attributes, o = n.length - 1; o >= 0; o--) {
                var i = n[o].name, s = n[o].value;
                "boolean" !== typeof t[i] && -1 === r.indexOf("," + i + ",") || (s = null !== s), e[i] = s
            }
            return e
        }

        function yt(t, e) {
            return t.getAttribute(e)
        }

        function vt(t, e, r) {
            t.setAttribute(e, r)
        }

        function gt(t, e) {
            t.removeAttribute(e)
        }

        function mt() {
            i.body.focus(), i.onselectstart = function () {
                return !1
            }
        }

        function _t() {
            i.onselectstart = function () {
                return !0
            }
        }

        function bt(t) {
            if (t && t.getBoundingClientRect && t.parentNode) {
                var e = t.getBoundingClientRect(), r = {};
                return ["bottom", "height", "left", "right", "top", "width"].forEach(function (t) {
                    void 0 !== e[t] && (r[t] = e[t])
                }), r.height || (r.height = parseFloat(J(t, "height"))), r.width || (r.width = parseFloat(J(t, "width"))), r
            }
        }

        function Tt(t) {
            var e = void 0;
            if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
                left: 0,
                top: 0
            };
            var r = i.documentElement, n = i.body, s = r.clientLeft || n.clientLeft || 0,
                a = o.pageXOffset || n.scrollLeft, l = e.left + a - s, c = r.clientTop || n.clientTop || 0,
                u = o.pageYOffset || n.scrollTop, h = e.top + u - c;
            return {left: Math.round(l), top: Math.round(h)}
        }

        function Ct(t, e) {
            var r = {}, n = Tt(t), o = t.offsetWidth, i = t.offsetHeight, s = n.top, a = n.left, l = e.pageY,
                c = e.pageX;
            return e.changedTouches && (c = e.changedTouches[0].pageX, l = e.changedTouches[0].pageY), r.y = Math.max(0, Math.min(1, (s - l + i) / i)), r.x = Math.max(0, Math.min(1, (c - a) / o)), r
        }

        function kt(t) {
            return W(t) && 3 === t.nodeType
        }

        function wt(t) {
            while (t.firstChild) t.removeChild(t.firstChild);
            return t
        }

        function Et(t) {
            return "function" === typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function (t) {
                return "function" === typeof t && (t = t()), nt(t) || kt(t) ? t : "string" === typeof t && /\S/.test(t) ? i.createTextNode(t) : void 0
            }).filter(function (t) {
                return t
            })
        }

        function St(t, e) {
            return Et(e).forEach(function (e) {
                return t.appendChild(e)
            }), t
        }

        function xt(t, e) {
            return St(wt(t), e)
        }

        function jt(t) {
            return void 0 === t.button && void 0 === t.buttons || (0 === t.button && void 0 === t.buttons || (9 === j || 0 === t.button && 1 === t.buttons))
        }

        var Pt = it("querySelector"), At = it("querySelectorAll"), Ot = (Object.freeze || Object)({
            isReal: rt,
            isEl: nt,
            isInFrame: ot,
            createEl: st,
            textContent: at,
            prependTo: lt,
            hasClass: ct,
            addClass: ut,
            removeClass: ht,
            toggleClass: pt,
            setAttributes: dt,
            getAttributes: ft,
            getAttribute: yt,
            setAttribute: vt,
            removeAttribute: gt,
            blockTextSelection: mt,
            unblockTextSelection: _t,
            getBoundingClientRect: bt,
            findPosition: Tt,
            getPointerPosition: Ct,
            isTextNode: kt,
            emptyEl: wt,
            normalizeContent: Et,
            appendContent: St,
            insertContent: xt,
            isSingleLeftClick: jt,
            $: Pt,
            $$: At
        }), Mt = 1;

        function Nt() {
            return Mt++
        }

        var It = {}, Dt = "vdata" + (new Date).getTime();

        function Rt(t) {
            var e = t[Dt];
            return e || (e = t[Dt] = Nt()), It[e] || (It[e] = {}), It[e]
        }

        function Lt(t) {
            var e = t[Dt];
            return !!e && !!Object.getOwnPropertyNames(It[e]).length
        }

        function Ft(t) {
            var e = t[Dt];
            if (e) {
                delete It[e];
                try {
                    delete t[Dt]
                } catch (r) {
                    t.removeAttribute ? t.removeAttribute(Dt) : t[Dt] = null
                }
            }
        }

        function Bt(t, e) {
            var r = Rt(t);
            0 === r.handlers[e].length && (delete r.handlers[e], t.removeEventListener ? t.removeEventListener(e, r.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, r.dispatcher)), Object.getOwnPropertyNames(r.handlers).length <= 0 && (delete r.handlers, delete r.dispatcher, delete r.disabled), 0 === Object.getOwnPropertyNames(r).length && Ft(t)
        }

        function $t(t, e, r, n) {
            r.forEach(function (r) {
                t(e, r, n)
            })
        }

        function Vt(t) {
            function e() {
                return !0
            }

            function r() {
                return !1
            }

            if (!t || !t.isPropagationStopped) {
                var n = t || o.event;
                for (var s in t = {}, n) "layerX" !== s && "layerY" !== s && "keyLocation" !== s && "webkitMovementX" !== s && "webkitMovementY" !== s && ("returnValue" === s && n.preventDefault || (t[s] = n[s]));
                if (t.target || (t.target = t.srcElement || i), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function () {
                    n.preventDefault && n.preventDefault(), t.returnValue = !1, n.returnValue = !1, t.defaultPrevented = !0
                }, t.defaultPrevented = !1, t.stopPropagation = function () {
                    n.stopPropagation && n.stopPropagation(), t.cancelBubble = !0, n.cancelBubble = !0, t.isPropagationStopped = e
                }, t.isPropagationStopped = r, t.stopImmediatePropagation = function () {
                    n.stopImmediatePropagation && n.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                }, t.isImmediatePropagationStopped = r, null !== t.clientX && void 0 !== t.clientX) {
                    var a = i.documentElement, l = i.body;
                    t.pageX = t.clientX + (a && a.scrollLeft || l && l.scrollLeft || 0) - (a && a.clientLeft || l && l.clientLeft || 0), t.pageY = t.clientY + (a && a.scrollTop || l && l.scrollTop || 0) - (a && a.clientTop || l && l.clientTop || 0)
                }
                t.which = t.charCode || t.keyCode, null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
            }
            return t
        }

        var Ht = !1;
        (function () {
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        Ht = !0
                    }
                });
                o.addEventListener("test", null, t), o.removeEventListener("test", null, t)
            } catch (e) {
            }
        })();
        var Ut = ["touchstart", "touchmove"];

        function Wt(t, e, r) {
            if (Array.isArray(e)) return $t(Wt, t, e, r);
            var n = Rt(t);
            if (n.handlers || (n.handlers = {}), n.handlers[e] || (n.handlers[e] = []), r.guid || (r.guid = Nt()), n.handlers[e].push(r), n.dispatcher || (n.disabled = !1, n.dispatcher = function (e, r) {
                if (!n.disabled) {
                    e = Vt(e);
                    var o = n.handlers[e.type];
                    if (o) for (var i = o.slice(0), s = 0, a = i.length; s < a; s++) {
                        if (e.isImmediatePropagationStopped()) break;
                        try {
                            i[s].call(t, e, r)
                        } catch (l) {
                            Y.error(l)
                        }
                    }
                }
            }), 1 === n.handlers[e].length) if (t.addEventListener) {
                var o = !1;
                Ht && Ut.indexOf(e) > -1 && (o = {passive: !0}), t.addEventListener(e, n.dispatcher, o)
            } else t.attachEvent && t.attachEvent("on" + e, n.dispatcher)
        }

        function zt(t, e, r) {
            if (Lt(t)) {
                var n = Rt(t);
                if (n.handlers) {
                    if (Array.isArray(e)) return $t(zt, t, e, r);
                    var o = function (t, e) {
                        n.handlers[e] = [], Bt(t, e)
                    };
                    if (void 0 !== e) {
                        var i = n.handlers[e];
                        if (i) if (r) {
                            if (r.guid) for (var s = 0; s < i.length; s++) i[s].guid === r.guid && i.splice(s--, 1);
                            Bt(t, e)
                        } else o(t, e)
                    } else for (var a in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, a) && o(t, a)
                }
            }
        }

        function qt(t, e, r) {
            var n = Lt(t) ? Rt(t) : {}, o = t.parentNode || t.ownerDocument;
            if ("string" === typeof e ? e = {
                type: e,
                target: t
            } : e.target || (e.target = t), e = Vt(e), n.dispatcher && n.dispatcher.call(t, e, r), o && !e.isPropagationStopped() && !0 === e.bubbles) qt.call(null, o, e, r); else if (!o && !e.defaultPrevented) {
                var i = Rt(e.target);
                e.target[e.type] && (i.disabled = !0, "function" === typeof e.target[e.type] && e.target[e.type](), i.disabled = !1)
            }
            return !e.defaultPrevented
        }

        function Xt(t, e, r) {
            if (Array.isArray(e)) return $t(Xt, t, e, r);
            var n = function n() {
                zt(t, e, n), r.apply(this, arguments)
            };
            n.guid = r.guid = r.guid || Nt(), Wt(t, e, n)
        }

        var Gt = (Object.freeze || Object)({fixEvent: Vt, on: Wt, off: zt, trigger: qt, one: Xt}), Yt = !1, Kt = void 0,
            Jt = function () {
                if (rt() && !1 !== Kt.options.autoSetup) {
                    var t = i.getElementsByTagName("video"), e = i.getElementsByTagName("audio"),
                        r = i.getElementsByTagName("video-js"), n = [];
                    if (t && t.length > 0) for (var o = 0, s = t.length; o < s; o++) n.push(t[o]);
                    if (e && e.length > 0) for (var a = 0, l = e.length; a < l; a++) n.push(e[a]);
                    if (r && r.length > 0) for (var c = 0, u = r.length; c < u; c++) n.push(r[c]);
                    if (n && n.length > 0) for (var h = 0, p = n.length; h < p; h++) {
                        var d = n[h];
                        if (!d || !d.getAttribute) {
                            Qt(1);
                            break
                        }
                        if (void 0 === d.player) {
                            var f = d.getAttribute("data-setup");
                            null !== f && Kt(d)
                        }
                    } else Yt || Qt(1)
                }
            };

        function Qt(t, e) {
            e && (Kt = e), o.setTimeout(Jt, t)
        }

        rt() && "complete" === i.readyState ? Yt = !0 : Xt(o, "load", function () {
            Yt = !0
        });
        var Zt = function (t) {
            var e = i.createElement("style");
            return e.className = t, e
        }, te = function (t, e) {
            t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
        }, ee = function (t, e, r) {
            e.guid || (e.guid = Nt());
            var n = function () {
                return e.apply(t, arguments)
            };
            return n.guid = r ? r + "_" + e.guid : e.guid, n
        }, re = function (t, e) {
            var r = Date.now(), n = function () {
                var n = Date.now();
                n - r >= e && (t.apply(void 0, arguments), r = n)
            };
            return n
        }, ne = function (t, e, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o, i = void 0, s = function () {
                n.clearTimeout(i), i = null
            }, a = function () {
                var o = this, s = arguments, a = function () {
                    i = null, a = null, r || t.apply(o, s)
                };
                !i && r && t.apply(o, s), n.clearTimeout(i), i = n.setTimeout(a, e)
            };
            return a.cancel = s, a
        }, oe = function () {
        };
        oe.prototype.allowedEvents_ = {}, oe.prototype.on = function (t, e) {
            var r = this.addEventListener;
            this.addEventListener = function () {
            }, Wt(this, t, e), this.addEventListener = r
        }, oe.prototype.addEventListener = oe.prototype.on, oe.prototype.off = function (t, e) {
            zt(this, t, e)
        }, oe.prototype.removeEventListener = oe.prototype.off, oe.prototype.one = function (t, e) {
            var r = this.addEventListener;
            this.addEventListener = function () {
            }, Xt(this, t, e), this.addEventListener = r
        }, oe.prototype.trigger = function (t) {
            var e = t.type || t;
            "string" === typeof t && (t = {type: e}), t = Vt(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), qt(this, t)
        }, oe.prototype.dispatchEvent = oe.prototype.trigger;
        var ie = function (t) {
            return t instanceof oe || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function (e) {
                return "function" === typeof t[e]
            })
        }, se = function (t) {
            return "string" === typeof t && /\S/.test(t) || Array.isArray(t) && !!t.length
        }, ae = function (t) {
            if (!t.nodeName && !ie(t)) throw new Error("Invalid target; must be a DOM node or evented object.")
        }, le = function (t) {
            if (!se(t)) throw new Error("Invalid event type; must be a non-empty string or array.")
        }, ce = function (t) {
            if ("function" !== typeof t) throw new Error("Invalid listener; must be a function.")
        }, ue = function (t, e) {
            var r = e.length < 3 || e[0] === t || e[0] === t.eventBusEl_, n = void 0, o = void 0, i = void 0;
            return r ? (n = t.eventBusEl_, e.length >= 3 && e.shift(), o = e[0], i = e[1]) : (n = e[0], o = e[1], i = e[2]), ae(n), le(o), ce(i), i = ee(t, i), {
                isTargetingSelf: r,
                target: n,
                type: o,
                listener: i
            }
        }, he = function (t, e, r, n) {
            ae(t), t.nodeName ? Gt[e](t, r, n) : t[e](r, n)
        }, pe = {
            on: function () {
                for (var t = this, e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                var o = ue(this, r), i = o.isTargetingSelf, s = o.target, a = o.type, l = o.listener;
                if (he(s, "on", a, l), !i) {
                    var c = function () {
                        return t.off(s, a, l)
                    };
                    c.guid = l.guid;
                    var u = function () {
                        return t.off("dispose", c)
                    };
                    u.guid = l.guid, he(this, "on", "dispose", c), he(s, "on", "dispose", u)
                }
            }, one: function () {
                for (var t = this, e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                var o = ue(this, r), i = o.isTargetingSelf, s = o.target, a = o.type, l = o.listener;
                if (i) he(s, "one", a, l); else {
                    var c = function e() {
                        for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                        t.off(s, a, e), l.apply(null, n)
                    };
                    c.guid = l.guid, he(s, "one", a, c)
                }
            }, off: function (t, e, r) {
                if (!t || se(t)) zt(this.eventBusEl_, t, e); else {
                    var n = t, o = e;
                    ae(n), le(o), ce(r), r = ee(this, r), this.off("dispose", r), n.nodeName ? (zt(n, o, r), zt(n, "dispose", r)) : ie(n) && (n.off(o, r), n.off("dispose", r))
                }
            }, trigger: function (t, e) {
                return qt(this.eventBusEl_, t, e)
            }
        };

        function de(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = e.eventBusKey;
            if (r) {
                if (!t[r].nodeName) throw new Error('The eventBusKey "' + r + '" does not refer to an element.');
                t.eventBusEl_ = t[r]
            } else t.eventBusEl_ = st("span", {className: "vjs-event-bus"});
            return U(t, pe), t.on("dispose", function () {
                t.off(), o.setTimeout(function () {
                    t.eventBusEl_ = null
                }, 0)
            }), t
        }

        var fe = {
            state: {}, setState: function (t) {
                var e = this;
                "function" === typeof t && (t = t());
                var r = void 0;
                return V(t, function (t, n) {
                    e.state[n] !== t && (r = r || {}, r[n] = {from: e.state[n], to: t}), e.state[n] = t
                }), r && ie(this) && this.trigger({changes: r, type: "statechanged"}), r
            }
        };

        function ye(t, e) {
            return U(t, fe), t.state = U({}, t.state, e), "function" === typeof t.handleStateChanged && ie(t) && t.on("statechanged", t.handleStateChanged), t
        }

        function ve(t) {
            return "string" !== typeof t ? t : t.charAt(0).toUpperCase() + t.slice(1)
        }

        function ge(t, e) {
            return ve(t) === ve(e)
        }

        function me() {
            for (var t = {}, e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return r.forEach(function (e) {
                e && V(e, function (e, r) {
                    z(e) ? (z(t[r]) || (t[r] = {}), t[r] = me(t[r], e)) : t[r] = e
                })
            }), t
        }

        var _e = function () {
            function t(e, r, n) {
                if (D(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = me({}, this.options_), r = this.options_ = me(this.options_, r), this.id_ = r.id || r.el && r.el.id, !this.id_) {
                    var o = e && e.id && e.id() || "no_player";
                    this.id_ = o + "_component_" + Nt()
                }
                this.name_ = r.name || null, r.el ? this.el_ = r.el : !1 !== r.createEl && (this.el_ = this.createEl()), !1 !== r.evented && de(this, {eventBusKey: this.el_ ? "el_" : null}), ye(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== r.initChildren && this.initChildren(), this.ready(n), !1 !== r.reportTouchActivity && this.enableTouchActivity()
            }

            return t.prototype.dispose = function () {
                if (this.trigger({
                    type: "dispose",
                    bubbles: !1
                }), this.children_) for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
                this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), Ft(this.el_), this.el_ = null), this.player_ = null
            }, t.prototype.player = function () {
                return this.player_
            }, t.prototype.options = function (t) {
                return Y.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = me(this.options_, t), this.options_) : this.options_
            }, t.prototype.el = function () {
                return this.el_
            }, t.prototype.createEl = function (t, e, r) {
                return st(t, e, r)
            }, t.prototype.localize = function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                    n = this.player_.language && this.player_.language(),
                    o = this.player_.languages && this.player_.languages(), i = o && o[n], s = n && n.split("-")[0],
                    a = o && o[s], l = r;
                return i && i[t] ? l = i[t] : a && a[t] && (l = a[t]), e && (l = l.replace(/\{(\d+)\}/g, function (t, r) {
                    var n = e[r - 1], o = n;
                    return "undefined" === typeof n && (o = t), o
                })), l
            }, t.prototype.contentEl = function () {
                return this.contentEl_ || this.el_
            }, t.prototype.id = function () {
                return this.id_
            }, t.prototype.name = function () {
                return this.name_
            }, t.prototype.children = function () {
                return this.children_
            }, t.prototype.getChildById = function (t) {
                return this.childIndex_[t]
            }, t.prototype.getChild = function (t) {
                if (t) return t = ve(t), this.childNameIndex_[t]
            }, t.prototype.addChild = function (e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                    o = void 0, i = void 0;
                if ("string" === typeof e) {
                    i = ve(e);
                    var s = r.componentClass || i;
                    r.name = i;
                    var a = t.getComponent(s);
                    if (!a) throw new Error("Component " + s + " does not exist");
                    if ("function" !== typeof a) return null;
                    o = new a(this.player_ || this, r)
                } else o = e;
                if (this.children_.splice(n, 0, o), "function" === typeof o.id && (this.childIndex_[o.id()] = o), i = i || o.name && ve(o.name()), i && (this.childNameIndex_[i] = o), "function" === typeof o.el && o.el()) {
                    var l = this.contentEl().children, c = l[n] || null;
                    this.contentEl().insertBefore(o.el(), c)
                }
                return o
            }, t.prototype.removeChild = function (t) {
                if ("string" === typeof t && (t = this.getChild(t)), t && this.children_) {
                    for (var e = !1, r = this.children_.length - 1; r >= 0; r--) if (this.children_[r] === t) {
                        e = !0, this.children_.splice(r, 1);
                        break
                    }
                    if (e) {
                        this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                        var n = t.el();
                        n && n.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                    }
                }
            }, t.prototype.initChildren = function () {
                var e = this, r = this.options_.children;
                if (r) {
                    var n = this.options_, o = function (t) {
                        var r = t.name, o = t.opts;
                        if (void 0 !== n[r] && (o = n[r]), !1 !== o) {
                            !0 === o && (o = {}), o.playerOptions = e.options_.playerOptions;
                            var i = e.addChild(r, o);
                            i && (e[r] = i)
                        }
                    }, i = void 0, s = t.getComponent("Tech");
                    i = Array.isArray(r) ? r : Object.keys(r), i.concat(Object.keys(this.options_).filter(function (t) {
                        return !i.some(function (e) {
                            return "string" === typeof e ? t === e : t === e.name
                        })
                    })).map(function (t) {
                        var n = void 0, o = void 0;
                        return "string" === typeof t ? (n = t, o = r[n] || e.options_[n] || {}) : (n = t.name, o = t), {
                            name: n,
                            opts: o
                        }
                    }).filter(function (e) {
                        var r = t.getComponent(e.opts.componentClass || ve(e.name));
                        return r && !s.isTech(r)
                    }).forEach(o)
                }
            }, t.prototype.buildCSSClass = function () {
                return ""
            }, t.prototype.ready = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t) return this.isReady_ ? void (e ? t.call(this) : this.setTimeout(t, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(t))
            }, t.prototype.triggerReady = function () {
                this.isReady_ = !0, this.setTimeout(function () {
                    var t = this.readyQueue_;
                    this.readyQueue_ = [], t && t.length > 0 && t.forEach(function (t) {
                        t.call(this)
                    }, this), this.trigger("ready")
                }, 1)
            }, t.prototype.$ = function (t, e) {
                return Pt(t, e || this.contentEl())
            }, t.prototype.$$ = function (t, e) {
                return At(t, e || this.contentEl())
            }, t.prototype.hasClass = function (t) {
                return ct(this.el_, t)
            }, t.prototype.addClass = function (t) {
                ut(this.el_, t)
            }, t.prototype.removeClass = function (t) {
                ht(this.el_, t)
            }, t.prototype.toggleClass = function (t, e) {
                pt(this.el_, t, e)
            }, t.prototype.show = function () {
                this.removeClass("vjs-hidden")
            }, t.prototype.hide = function () {
                this.addClass("vjs-hidden")
            }, t.prototype.lockShowing = function () {
                this.addClass("vjs-lock-showing")
            }, t.prototype.unlockShowing = function () {
                this.removeClass("vjs-lock-showing")
            }, t.prototype.getAttribute = function (t) {
                return yt(this.el_, t)
            }, t.prototype.setAttribute = function (t, e) {
                vt(this.el_, t, e)
            }, t.prototype.removeAttribute = function (t) {
                gt(this.el_, t)
            }, t.prototype.width = function (t, e) {
                return this.dimension("width", t, e)
            }, t.prototype.height = function (t, e) {
                return this.dimension("height", t, e)
            }, t.prototype.dimensions = function (t, e) {
                this.width(t, !0), this.height(e)
            }, t.prototype.dimension = function (t, e, r) {
                if (void 0 !== e) return null !== e && e === e || (e = 0), -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? this.el_.style[t] = e : this.el_.style[t] = "auto" === e ? "" : e + "px", void (r || this.trigger("componentresize"));
                if (!this.el_) return 0;
                var n = this.el_.style[t], o = n.indexOf("px");
                return -1 !== o ? parseInt(n.slice(0, o), 10) : parseInt(this.el_["offset" + ve(t)], 10)
            }, t.prototype.currentDimension = function (t) {
                var e = 0;
                if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
                if ("function" === typeof o.getComputedStyle) {
                    var r = o.getComputedStyle(this.el_);
                    e = r.getPropertyValue(t) || r[t]
                }
                if (e = parseFloat(e), 0 === e) {
                    var n = "offset" + ve(t);
                    e = this.el_[n]
                }
                return e
            }, t.prototype.currentDimensions = function () {
                return {width: this.currentDimension("width"), height: this.currentDimension("height")}
            }, t.prototype.currentWidth = function () {
                return this.currentDimension("width")
            }, t.prototype.currentHeight = function () {
                return this.currentDimension("height")
            }, t.prototype.focus = function () {
                this.el_.focus()
            }, t.prototype.blur = function () {
                this.el_.blur()
            }, t.prototype.emitTapEvents = function () {
                var t = 0, e = null, r = 10, n = 200, o = void 0;
                this.on("touchstart", function (r) {
                    1 === r.touches.length && (e = {
                        pageX: r.touches[0].pageX,
                        pageY: r.touches[0].pageY
                    }, t = (new Date).getTime(), o = !0)
                }), this.on("touchmove", function (t) {
                    if (t.touches.length > 1) o = !1; else if (e) {
                        var n = t.touches[0].pageX - e.pageX, i = t.touches[0].pageY - e.pageY,
                            s = Math.sqrt(n * n + i * i);
                        s > r && (o = !1)
                    }
                });
                var i = function () {
                    o = !1
                };
                this.on("touchleave", i), this.on("touchcancel", i), this.on("touchend", function (r) {
                    if (e = null, !0 === o) {
                        var i = (new Date).getTime() - t;
                        i < n && (r.preventDefault(), this.trigger("tap"))
                    }
                })
            }, t.prototype.enableTouchActivity = function () {
                if (this.player() && this.player().reportUserActivity) {
                    var t = ee(this.player(), this.player().reportUserActivity), e = void 0;
                    this.on("touchstart", function () {
                        t(), this.clearInterval(e), e = this.setInterval(t, 250)
                    });
                    var r = function (r) {
                        t(), this.clearInterval(e)
                    };
                    this.on("touchmove", t), this.on("touchend", r), this.on("touchcancel", r)
                }
            }, t.prototype.setTimeout = function (t, e) {
                var r, n, i = this;
                return t = ee(this, t), r = o.setTimeout(function () {
                    i.off("dispose", n), t()
                }, e), n = function () {
                    return i.clearTimeout(r)
                }, n.guid = "vjs-timeout-" + r, this.on("dispose", n), r
            }, t.prototype.clearTimeout = function (t) {
                o.clearTimeout(t);
                var e = function () {
                };
                return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
            }, t.prototype.setInterval = function (t, e) {
                var r = this;
                t = ee(this, t);
                var n = o.setInterval(t, e), i = function () {
                    return r.clearInterval(n)
                };
                return i.guid = "vjs-interval-" + n, this.on("dispose", i), n
            }, t.prototype.clearInterval = function (t) {
                o.clearInterval(t);
                var e = function () {
                };
                return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
            }, t.prototype.requestAnimationFrame = function (t) {
                var e, r, n = this;
                return this.supportsRaf_ ? (t = ee(this, t), e = o.requestAnimationFrame(function () {
                    n.off("dispose", r), t()
                }), r = function () {
                    return n.cancelAnimationFrame(e)
                }, r.guid = "vjs-raf-" + e, this.on("dispose", r), e) : this.setTimeout(t, 1e3 / 60)
            }, t.prototype.cancelAnimationFrame = function (t) {
                if (this.supportsRaf_) {
                    o.cancelAnimationFrame(t);
                    var e = function () {
                    };
                    return e.guid = "vjs-raf-" + t, this.off("dispose", e), t
                }
                return this.clearTimeout(t)
            }, t.registerComponent = function (e, r) {
                if ("string" !== typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
                var n = t.getComponent("Tech"), o = n && n.isTech(r),
                    i = t === r || t.prototype.isPrototypeOf(r.prototype);
                if (o || !i) {
                    var s = void 0;
                    throw s = o ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + s + ".")
                }
                e = ve(e), t.components_ || (t.components_ = {});
                var a = t.getComponent("Player");
                if ("Player" === e && a && a.players) {
                    var l = a.players, c = Object.keys(l);
                    if (l && c.length > 0 && c.map(function (t) {
                        return l[t]
                    }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
                }
                return t.components_[e] = r, r
            }, t.getComponent = function (e) {
                if (e) return e = ve(e), t.components_ && t.components_[e] ? t.components_[e] : void 0
            }, t
        }();

        function be(t, e, r) {
            if ("number" !== typeof e || e < 0 || e > r) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is non-numeric or out of bounds (0-" + r + ").")
        }

        function Te(t, e, r, n) {
            return be(t, n, r.length - 1), r[n][e]
        }

        function Ce(t) {
            return void 0 === t || 0 === t.length ? {
                length: 0, start: function () {
                    throw new Error("This TimeRanges object is empty")
                }, end: function () {
                    throw new Error("This TimeRanges object is empty")
                }
            } : {length: t.length, start: Te.bind(null, "start", 0, t), end: Te.bind(null, "end", 1, t)}
        }

        function ke(t, e) {
            return Array.isArray(t) ? Ce(t) : void 0 === t || void 0 === e ? Ce() : Ce([[t, e]])
        }

        function we(t, e) {
            var r = 0, n = void 0, o = void 0;
            if (!e) return 0;
            t && t.length || (t = ke(0, 0));
            for (var i = 0; i < t.length; i++) n = t.start(i), o = t.end(i), o > e && (o = e), r += o - n;
            return r / e
        }

        _e.prototype.supportsRaf_ = "function" === typeof o.requestAnimationFrame && "function" === typeof o.cancelAnimationFrame, _e.registerComponent("Component", _e);
        for (var Ee = {}, Se = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], xe = Se[0], je = void 0, Pe = 0; Pe < Se.length; Pe++) if (Se[Pe][1] in i) {
            je = Se[Pe];
            break
        }
        if (je) for (var Ae = 0; Ae < je.length; Ae++) Ee[xe[Ae]] = je[Ae];

        function Oe(t) {
            if (t instanceof Oe) return t;
            "number" === typeof t ? this.code = t : "string" === typeof t ? this.message = t : W(t) && ("number" === typeof t.code && (this.code = t.code), U(this, t)), this.message || (this.message = Oe.defaultMessages[this.code] || "")
        }

        Oe.prototype.code = 0, Oe.prototype.message = "", Oe.prototype.status = null, Oe.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Oe.defaultMessages = {
            1: "You aborted the media playback",
            2: "A network error caused the media download to fail part-way.",
            3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
            4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
            5: "The media is encrypted and we do not have the keys to decrypt it."
        };
        for (var Me = 0; Me < Oe.errorTypes.length; Me++) Oe[Oe.errorTypes[Me]] = Me, Oe.prototype[Oe.errorTypes[Me]] = Me;

        function Ne(t) {
            return void 0 !== t && null !== t && "function" === typeof t.then
        }

        function Ie(t) {
            Ne(t) && t.then(null, function (t) {
            })
        }

        var De = function (t) {
                var e = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (e, r, n) {
                    return t[r] && (e[r] = t[r]), e
                }, {
                    cues: t.cues && Array.prototype.map.call(t.cues, function (t) {
                        return {startTime: t.startTime, endTime: t.endTime, text: t.text, id: t.id}
                    })
                });
                return e
            }, Re = function (t) {
                var e = t.$$("track"), r = Array.prototype.map.call(e, function (t) {
                    return t.track
                }), n = Array.prototype.map.call(e, function (t) {
                    var e = De(t.track);
                    return t.src && (e.src = t.src), e
                });
                return n.concat(Array.prototype.filter.call(t.textTracks(), function (t) {
                    return -1 === r.indexOf(t)
                }).map(De))
            }, Le = function (t, e) {
                return t.forEach(function (t) {
                    var r = e.addRemoteTextTrack(t).track;
                    !t.src && t.cues && t.cues.forEach(function (t) {
                        return r.addCue(t)
                    })
                }), e.textTracks()
            }, Fe = {textTracksToJson: Re, jsonToTextTracks: Le, trackToJson_: De}, Be = "vjs-modal-dialog", $e = 27,
            Ve = function (t) {
                function e(r, n) {
                    D(this, e);
                    var o = L(this, t.call(this, r, n));
                    return o.opened_ = o.hasBeenOpened_ = o.hasBeenFilled_ = !1, o.closeable(!o.options_.uncloseable), o.content(o.options_.content), o.contentEl_ = st("div", {className: Be + "-content"}, {role: "document"}), o.descEl_ = st("p", {
                        className: Be + "-description vjs-control-text",
                        id: o.el().getAttribute("aria-describedby")
                    }), at(o.descEl_, o.description()), o.el_.appendChild(o.descEl_), o.el_.appendChild(o.contentEl_), o
                }

                return R(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {
                        className: this.buildCSSClass(),
                        tabIndex: -1
                    }, {
                        "aria-describedby": this.id() + "_description",
                        "aria-hidden": "true",
                        "aria-label": this.label(),
                        role: "dialog"
                    })
                }, e.prototype.dispose = function () {
                    this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, t.prototype.dispose.call(this)
                }, e.prototype.buildCSSClass = function () {
                    return Be + " vjs-hidden " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.handleKeyPress = function (t) {
                    t.which === $e && this.closeable() && this.close()
                }, e.prototype.label = function () {
                    return this.localize(this.options_.label || "Modal Window")
                }, e.prototype.description = function () {
                    var t = this.options_.description || this.localize("This is a modal window.");
                    return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
                }, e.prototype.open = function () {
                    if (!this.opened_) {
                        var t = this.player();
                        this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", ee(this, this.handleKeyPress)), this.hadControls_ = t.controls(), t.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                    }
                }, e.prototype.opened = function (t) {
                    return "boolean" === typeof t && this[t ? "open" : "close"](), this.opened_
                }, e.prototype.close = function () {
                    if (this.opened_) {
                        var t = this.player();
                        this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", ee(this, this.handleKeyPress)), this.hadControls_ && t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                    }
                }, e.prototype.closeable = function (t) {
                    if ("boolean" === typeof t) {
                        var e = this.closeable_ = !!t, r = this.getChild("closeButton");
                        if (e && !r) {
                            var n = this.contentEl_;
                            this.contentEl_ = this.el_, r = this.addChild("closeButton", {controlText: "Close Modal Dialog"}), this.contentEl_ = n, this.on(r, "close", this.close)
                        }
                        !e && r && (this.off(r, "close", this.close), this.removeChild(r), r.dispose())
                    }
                    return this.closeable_
                }, e.prototype.fill = function () {
                    this.fillWith(this.content())
                }, e.prototype.fillWith = function (t) {
                    var e = this.contentEl(), r = e.parentNode, n = e.nextSibling;
                    this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, r.removeChild(e), this.empty(), xt(e, t), this.trigger("modalfill"), n ? r.insertBefore(e, n) : r.appendChild(e);
                    var o = this.getChild("closeButton");
                    o && r.appendChild(o.el_)
                }, e.prototype.empty = function () {
                    this.trigger("beforemodalempty"), wt(this.contentEl()), this.trigger("modalempty")
                }, e.prototype.content = function (t) {
                    return "undefined" !== typeof t && (this.content_ = t), this.content_
                }, e.prototype.conditionalFocus_ = function () {
                    var t = i.activeElement, e = this.player_.el_;
                    this.previouslyActiveEl_ = null, (e.contains(t) || e === t) && (this.previouslyActiveEl_ = t, this.focus(), this.on(i, "keydown", this.handleKeyDown))
                }, e.prototype.conditionalBlur_ = function () {
                    this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(i, "keydown", this.handleKeyDown)
                }, e.prototype.handleKeyDown = function (t) {
                    if (9 === t.which) {
                        for (var e = this.focusableEls_(), r = this.el_.querySelector(":focus"), n = void 0, o = 0; o < e.length; o++) if (r === e[o]) {
                            n = o;
                            break
                        }
                        i.activeElement === this.el_ && (n = 0), t.shiftKey && 0 === n ? (e[e.length - 1].focus(), t.preventDefault()) : t.shiftKey || n !== e.length - 1 || (e[0].focus(), t.preventDefault())
                    }
                }, e.prototype.focusableEls_ = function () {
                    var t = this.el_.querySelectorAll("*");
                    return Array.prototype.filter.call(t, function (t) {
                        return (t instanceof o.HTMLAnchorElement || t instanceof o.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof o.HTMLInputElement || t instanceof o.HTMLSelectElement || t instanceof o.HTMLTextAreaElement || t instanceof o.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof o.HTMLIFrameElement || t instanceof o.HTMLObjectElement || t instanceof o.HTMLEmbedElement || t.hasAttribute("tabindex") && -1 !== t.getAttribute("tabindex") || t.hasAttribute("contenteditable")
                    })
                }, e
            }(_e);
        Ve.prototype.options_ = {pauseOnOpen: !0, temporary: !0}, _e.registerComponent("ModalDialog", Ve);
        var He = function (t) {
            function e() {
                var r, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                D(this, e);
                var s = L(this, t.call(this));
                if (!o && (o = s, x)) for (var a in o = i.createElement("custom"), e.prototype) "constructor" !== a && (o[a] = e.prototype[a]);
                o.tracks_ = [], Object.defineProperty(o, "length", {
                    get: function () {
                        return this.tracks_.length
                    }
                });
                for (var l = 0; l < n.length; l++) o.addTrack(n[l]);
                return r = o, L(s, r)
            }

            return R(e, t), e.prototype.addTrack = function (t) {
                var e = this.tracks_.length;
                "" + e in this || Object.defineProperty(this, e, {
                    get: function () {
                        return this.tracks_[e]
                    }
                }), -1 === this.tracks_.indexOf(t) && (this.tracks_.push(t), this.trigger({track: t, type: "addtrack"}))
            }, e.prototype.removeTrack = function (t) {
                for (var e = void 0, r = 0, n = this.length; r < n; r++) if (this[r] === t) {
                    e = this[r], e.off && e.off(), this.tracks_.splice(r, 1);
                    break
                }
                e && this.trigger({track: e, type: "removetrack"})
            }, e.prototype.getTrackById = function (t) {
                for (var e = null, r = 0, n = this.length; r < n; r++) {
                    var o = this[r];
                    if (o.id === t) {
                        e = o;
                        break
                    }
                }
                return e
            }, e
        }(oe);
        for (var Ue in He.prototype.allowedEvents_ = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack"
        }, He.prototype.allowedEvents_) He.prototype["on" + Ue] = null;
        var We = function (t, e) {
                for (var r = 0; r < t.length; r++) Object.keys(t[r]).length && e.id !== t[r].id && (t[r].enabled = !1)
            }, ze = function (t) {
                function e() {
                    var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    D(this, e);
                    for (var s = void 0, a = o.length - 1; a >= 0; a--) if (o[a].enabled) {
                        We(o, o[a]);
                        break
                    }
                    if (x) {
                        for (var l in s = i.createElement("custom"), He.prototype) "constructor" !== l && (s[l] = He.prototype[l]);
                        for (var c in e.prototype) "constructor" !== c && (s[c] = e.prototype[c])
                    }
                    return r = L(this, t.call(this, o, s)), s = r, s.changing_ = !1, n = s, L(r, n)
                }

                return R(e, t), e.prototype.addTrack = function (e) {
                    var r = this;
                    e.enabled && We(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("enabledchange", function () {
                        r.changing_ || (r.changing_ = !0, We(r, e), r.changing_ = !1, r.trigger("change"))
                    })
                }, e
            }(He), qe = function (t, e) {
                for (var r = 0; r < t.length; r++) Object.keys(t[r]).length && e.id !== t[r].id && (t[r].selected = !1)
            }, Xe = function (t) {
                function e() {
                    var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    D(this, e);
                    for (var s = void 0, a = o.length - 1; a >= 0; a--) if (o[a].selected) {
                        qe(o, o[a]);
                        break
                    }
                    if (x) {
                        for (var l in s = i.createElement("custom"), He.prototype) "constructor" !== l && (s[l] = He.prototype[l]);
                        for (var c in e.prototype) "constructor" !== c && (s[c] = e.prototype[c])
                    }
                    return r = L(this, t.call(this, o, s)), s = r, s.changing_ = !1, Object.defineProperty(s, "selectedIndex", {
                        get: function () {
                            for (var t = 0; t < this.length; t++) if (this[t].selected) return t;
                            return -1
                        }, set: function () {
                        }
                    }), n = s, L(r, n)
                }

                return R(e, t), e.prototype.addTrack = function (e) {
                    var r = this;
                    e.selected && qe(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("selectedchange", function () {
                        r.changing_ || (r.changing_ = !0, qe(r, e), r.changing_ = !1, r.trigger("change"))
                    })
                }, e
            }(He), Ge = function (t) {
                function e() {
                    var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    D(this, e);
                    var s = void 0;
                    if (x) {
                        for (var a in s = i.createElement("custom"), He.prototype) "constructor" !== a && (s[a] = He.prototype[a]);
                        for (var l in e.prototype) "constructor" !== l && (s[l] = e.prototype[l])
                    }
                    return r = L(this, t.call(this, o, s)), s = r, n = s, L(r, n)
                }

                return R(e, t), e.prototype.addTrack = function (e) {
                    t.prototype.addTrack.call(this, e), e.addEventListener("modechange", ee(this, function () {
                        this.trigger("change")
                    }));
                    var r = ["metadata", "chapters"];
                    -1 === r.indexOf(e.kind) && e.addEventListener("modechange", ee(this, function () {
                        this.trigger("selectedlanguagechange")
                    }))
                }, e
            }(He), Ye = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    D(this, t);
                    var r = this;
                    if (x) for (var n in r = i.createElement("custom"), t.prototype) "constructor" !== n && (r[n] = t.prototype[n]);
                    r.trackElements_ = [], Object.defineProperty(r, "length", {
                        get: function () {
                            return this.trackElements_.length
                        }
                    });
                    for (var o = 0, s = e.length; o < s; o++) r.addTrackElement_(e[o]);
                    if (x) return r
                }

                return t.prototype.addTrackElement_ = function (t) {
                    var e = this.trackElements_.length;
                    "" + e in this || Object.defineProperty(this, e, {
                        get: function () {
                            return this.trackElements_[e]
                        }
                    }), -1 === this.trackElements_.indexOf(t) && this.trackElements_.push(t)
                }, t.prototype.getTrackElementByTrack_ = function (t) {
                    for (var e = void 0, r = 0, n = this.trackElements_.length; r < n; r++) if (t === this.trackElements_[r].track) {
                        e = this.trackElements_[r];
                        break
                    }
                    return e
                }, t.prototype.removeTrackElement_ = function (t) {
                    for (var e = 0, r = this.trackElements_.length; e < r; e++) if (t === this.trackElements_[e]) {
                        this.trackElements_.splice(e, 1);
                        break
                    }
                }, t
            }(), Ke = function () {
                function t(e) {
                    D(this, t);
                    var r = this;
                    if (x) for (var n in r = i.createElement("custom"), t.prototype) "constructor" !== n && (r[n] = t.prototype[n]);
                    if (t.prototype.setCues_.call(r, e), Object.defineProperty(r, "length", {
                        get: function () {
                            return this.length_
                        }
                    }), x) return r
                }

                return t.prototype.setCues_ = function (t) {
                    var e = this.length || 0, r = 0, n = t.length;
                    this.cues_ = t, this.length_ = t.length;
                    var o = function (t) {
                        "" + t in this || Object.defineProperty(this, "" + t, {
                            get: function () {
                                return this.cues_[t]
                            }
                        })
                    };
                    if (e < n) for (r = e; r < n; r++) o.call(this, r)
                }, t.prototype.getCueById = function (t) {
                    for (var e = null, r = 0, n = this.length; r < n; r++) {
                        var o = this[r];
                        if (o.id === t) {
                            e = o;
                            break
                        }
                    }
                    return e
                }, t
            }(), Je = {
                alternative: "alternative",
                captions: "captions",
                main: "main",
                sign: "sign",
                subtitles: "subtitles",
                commentary: "commentary"
            }, Qe = {
                alternative: "alternative",
                descriptions: "descriptions",
                main: "main",
                "main-desc": "main-desc",
                translation: "translation",
                commentary: "commentary"
            }, Ze = {
                subtitles: "subtitles",
                captions: "captions",
                descriptions: "descriptions",
                chapters: "chapters",
                metadata: "metadata"
            }, tr = {disabled: "disabled", hidden: "hidden", showing: "showing"}, er = function (t) {
                function e() {
                    var r, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    D(this, e);
                    var o = L(this, t.call(this)), s = o;
                    if (x) for (var a in s = i.createElement("custom"), e.prototype) "constructor" !== a && (s[a] = e.prototype[a]);
                    var l = {
                        id: n.id || "vjs_track_" + Nt(),
                        kind: n.kind || "",
                        label: n.label || "",
                        language: n.language || ""
                    }, c = function (t) {
                        Object.defineProperty(s, t, {
                            get: function () {
                                return l[t]
                            }, set: function () {
                            }
                        })
                    };
                    for (var u in l) c(u);
                    return r = s, L(o, r)
                }

                return R(e, t), e
            }(oe), rr = function (t) {
                var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], r = i.createElement("a");
                r.href = t;
                var n = "" === r.host && "file:" !== r.protocol, s = void 0;
                n && (s = i.createElement("div"), s.innerHTML = '<a href="' + t + '"></a>', r = s.firstChild, s.setAttribute("style", "display:none; position:absolute;"), i.body.appendChild(s));
                for (var a = {}, l = 0; l < e.length; l++) a[e[l]] = r[e[l]];
                return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), a.protocol || (a.protocol = o.location.protocol), n && i.body.removeChild(s), a
            }, nr = function (t) {
                if (!t.match(/^https?:\/\//)) {
                    var e = i.createElement("div");
                    e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
                }
                return t
            }, or = function (t) {
                if ("string" === typeof t) {
                    var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i, r = e.exec(t);
                    if (r) return r.pop().toLowerCase()
                }
                return ""
            }, ir = function (t) {
                var e = o.location, r = rr(t), n = ":" === r.protocol ? e.protocol : r.protocol,
                    i = n + r.host !== e.protocol + e.host;
                return i
            }, sr = (Object.freeze || Object)({parseUrl: rr, getAbsoluteURL: nr, getFileExtension: or, isCrossOrigin: ir}),
            ar = function (t, e) {
                var r = new o.WebVTT.Parser(o, o.vttjs, o.WebVTT.StringDecoder()), n = [];
                r.oncue = function (t) {
                    e.addCue(t)
                }, r.onparsingerror = function (t) {
                    n.push(t)
                }, r.onflush = function () {
                    e.trigger({type: "loadeddata", target: e})
                }, r.parse(t), n.length > 0 && (o.console && o.console.groupCollapsed && o.console.groupCollapsed("Text Track parsing errors for " + e.src), n.forEach(function (t) {
                    return Y.error(t)
                }), o.console && o.console.groupEnd && o.console.groupEnd()), r.flush()
            }, lr = function (t, e) {
                var r = {uri: t}, n = ir(t);
                n && (r.cors = n), l(r, ee(this, function (t, r, n) {
                    if (t) return Y.error(t, r);
                    if (e.loaded_ = !0, "function" !== typeof o.WebVTT) {
                        if (e.tech_) {
                            var i = function () {
                                return ar(n, e)
                            };
                            e.tech_.on("vttjsloaded", i), e.tech_.on("vttjserror", function () {
                                Y.error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", i)
                            })
                        }
                    } else ar(n, e)
                }))
            }, cr = function (t) {
                function e() {
                    var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (D(this, e), !o.tech) throw new Error("A tech was not provided.");
                    var i = me(o, {kind: Ze[o.kind] || "subtitles", language: o.language || o.srclang || ""}),
                        s = tr[i.mode] || "disabled", a = i["default"];
                    "metadata" !== i.kind && "chapters" !== i.kind || (s = "hidden");
                    var l = (r = L(this, t.call(this, i)), r);
                    if (l.tech_ = i.tech, x) for (var c in e.prototype) "constructor" !== c && (l[c] = e.prototype[c]);
                    l.cues_ = [], l.activeCues_ = [];
                    var u = new Ke(l.cues_), h = new Ke(l.activeCues_), p = !1, d = ee(l, function () {
                        this.activeCues = this.activeCues, p && (this.trigger("cuechange"), p = !1)
                    });
                    return "disabled" !== s && l.tech_.ready(function () {
                        l.tech_.on("timeupdate", d)
                    }, !0), Object.defineProperty(l, "default", {
                        get: function () {
                            return a
                        }, set: function () {
                        }
                    }), Object.defineProperty(l, "mode", {
                        get: function () {
                            return s
                        }, set: function (t) {
                            var e = this;
                            tr[t] && (s = t, "disabled" !== s ? this.tech_.ready(function () {
                                e.tech_.on("timeupdate", d)
                            }, !0) : this.tech_.off("timeupdate", d), this.trigger("modechange"))
                        }
                    }), Object.defineProperty(l, "cues", {
                        get: function () {
                            return this.loaded_ ? u : null
                        }, set: function () {
                        }
                    }), Object.defineProperty(l, "activeCues", {
                        get: function () {
                            if (!this.loaded_) return null;
                            if (0 === this.cues.length) return h;
                            for (var t = this.tech_.currentTime(), e = [], r = 0, n = this.cues.length; r < n; r++) {
                                var o = this.cues[r];
                                o.startTime <= t && o.endTime >= t ? e.push(o) : o.startTime === o.endTime && o.startTime <= t && o.startTime + .5 >= t && e.push(o)
                            }
                            if (p = !1, e.length !== this.activeCues_.length) p = !0; else for (var i = 0; i < e.length; i++) -1 === this.activeCues_.indexOf(e[i]) && (p = !0);
                            return this.activeCues_ = e, h.setCues_(this.activeCues_), h
                        }, set: function () {
                        }
                    }), i.src ? (l.src = i.src, lr(i.src, l)) : l.loaded_ = !0, n = l, L(r, n)
                }

                return R(e, t), e.prototype.addCue = function (t) {
                    var e = t;
                    if (o.vttjs && !(t instanceof o.vttjs.VTTCue)) {
                        for (var r in e = new o.vttjs.VTTCue(t.startTime, t.endTime, t.text), t) r in e || (e[r] = t[r]);
                        e.id = t.id, e.originalCue_ = t
                    }
                    for (var n = this.tech_.textTracks(), i = 0; i < n.length; i++) n[i] !== this && n[i].removeCue(e);
                    this.cues_.push(e), this.cues.setCues_(this.cues_)
                }, e.prototype.removeCue = function (t) {
                    var e = this.cues_.length;
                    while (e--) {
                        var r = this.cues_[e];
                        if (r === t || r.originalCue_ && r.originalCue_ === t) {
                            this.cues_.splice(e, 1), this.cues.setCues_(this.cues_);
                            break
                        }
                    }
                }, e
            }(er);
        cr.prototype.allowedEvents_ = {cuechange: "cuechange"};
        var ur = function (t) {
            function e() {
                var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                D(this, e);
                var i = me(o, {kind: Qe[o.kind] || ""}), s = (r = L(this, t.call(this, i)), r), a = !1;
                if (x) for (var l in e.prototype) "constructor" !== l && (s[l] = e.prototype[l]);
                return Object.defineProperty(s, "enabled", {
                    get: function () {
                        return a
                    }, set: function (t) {
                        "boolean" === typeof t && t !== a && (a = t, this.trigger("enabledchange"))
                    }
                }), i.enabled && (s.enabled = i.enabled), s.loaded_ = !0, n = s, L(r, n)
            }

            return R(e, t), e
        }(er), hr = function (t) {
            function e() {
                var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                D(this, e);
                var i = me(o, {kind: Je[o.kind] || ""}), s = (r = L(this, t.call(this, i)), r), a = !1;
                if (x) for (var l in e.prototype) "constructor" !== l && (s[l] = e.prototype[l]);
                return Object.defineProperty(s, "selected", {
                    get: function () {
                        return a
                    }, set: function (t) {
                        "boolean" === typeof t && t !== a && (a = t, this.trigger("selectedchange"))
                    }
                }), i.selected && (s.selected = i.selected), n = s, L(r, n)
            }

            return R(e, t), e
        }(er), pr = 0, dr = 1, fr = 2, yr = 3, vr = function (t) {
            function e() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                D(this, e);
                var n = L(this, t.call(this)), o = void 0, s = n;
                if (x) for (var a in s = i.createElement("custom"), e.prototype) "constructor" !== a && (s[a] = e.prototype[a]);
                var l, c = new cr(r);
                return s.kind = c.kind, s.src = c.src, s.srclang = c.language, s.label = c.label, s["default"] = c["default"], Object.defineProperty(s, "readyState", {
                    get: function () {
                        return o
                    }
                }), Object.defineProperty(s, "track", {
                    get: function () {
                        return c
                    }
                }), o = pr, c.addEventListener("loadeddata", function () {
                    o = fr, s.trigger({type: "load", target: s})
                }), x ? (l = s, L(n, l)) : n
            }

            return R(e, t), e
        }(oe);
        vr.prototype.allowedEvents_ = {load: "load"}, vr.NONE = pr, vr.LOADING = dr, vr.LOADED = fr, vr.ERROR = yr;
        var gr = {
            audio: {ListClass: ze, TrackClass: ur, capitalName: "Audio"},
            video: {ListClass: Xe, TrackClass: hr, capitalName: "Video"},
            text: {ListClass: Ge, TrackClass: cr, capitalName: "Text"}
        };
        Object.keys(gr).forEach(function (t) {
            gr[t].getterName = t + "Tracks", gr[t].privateName = t + "Tracks_"
        });
        var mr = {
            remoteText: {
                ListClass: Ge,
                TrackClass: cr,
                capitalName: "RemoteText",
                getterName: "remoteTextTracks",
                privateName: "remoteTextTracks_"
            },
            remoteTextEl: {
                ListClass: Ye,
                TrackClass: vr,
                capitalName: "RemoteTextTrackEls",
                getterName: "remoteTextTrackEls",
                privateName: "remoteTextTrackEls_"
            }
        }, _r = me(gr, mr);

        function br(t, e, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, i = t.textTracks();
            o.kind = e, r && (o.label = r), n && (o.language = n), o.tech = t;
            var s = new _r.text.TrackClass(o);
            return i.addTrack(s), s
        }

        mr.names = Object.keys(mr), gr.names = Object.keys(gr), _r.names = [].concat(mr.names).concat(gr.names);
        var Tr = function (t) {
            function e() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                    };
                D(this, e), r.reportTouchActivity = !1;
                var o = L(this, t.call(this, null, r, n));
                return o.hasStarted_ = !1, o.on("playing", function () {
                    this.hasStarted_ = !0
                }), o.on("loadstart", function () {
                    this.hasStarted_ = !1
                }), _r.names.forEach(function (t) {
                    var e = _r[t];
                    r && r[e.getterName] && (o[e.privateName] = r[e.getterName])
                }), o.featuresProgressEvents || o.manualProgressOn(), o.featuresTimeupdateEvents || o.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (t) {
                    !1 === r["native" + t + "Tracks"] && (o["featuresNative" + t + "Tracks"] = !1)
                }), !1 === r.nativeCaptions || !1 === r.nativeTextTracks ? o.featuresNativeTextTracks = !1 : !0 !== r.nativeCaptions && !0 !== r.nativeTextTracks || (o.featuresNativeTextTracks = !0), o.featuresNativeTextTracks || o.emulateTextTracks(), o.autoRemoteTextTracks_ = new _r.text.ListClass, o.initTrackListeners(), r.nativeControlsForTouch || o.emitTapEvents(), o.constructor && (o.name_ = o.constructor.name || "Unknown Tech"), o
            }

            return R(e, t), e.prototype.triggerSourceset = function (t) {
                var e = this;
                this.isReady_ || this.one("ready", function () {
                    return e.setTimeout(function () {
                        return e.triggerSourceset(t)
                    }, 1)
                }), this.trigger({src: t, type: "sourceset"})
            }, e.prototype.manualProgressOn = function () {
                this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
            }, e.prototype.manualProgressOff = function () {
                this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
            }, e.prototype.trackProgress = function (t) {
                this.stopTrackingProgress(), this.progressInterval = this.setInterval(ee(this, function () {
                    var t = this.bufferedPercent();
                    this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
                }), 500)
            }, e.prototype.onDurationChange = function (t) {
                this.duration_ = this.duration()
            }, e.prototype.buffered = function () {
                return ke(0, 0)
            }, e.prototype.bufferedPercent = function () {
                return we(this.buffered(), this.duration_)
            }, e.prototype.stopTrackingProgress = function () {
                this.clearInterval(this.progressInterval)
            }, e.prototype.manualTimeUpdatesOn = function () {
                this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
            }, e.prototype.manualTimeUpdatesOff = function () {
                this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
            }, e.prototype.trackCurrentTime = function () {
                this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                    this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
                }, 250)
            }, e.prototype.stopTrackingCurrentTime = function () {
                this.clearInterval(this.currentTimeInterval), this.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                })
            }, e.prototype.dispose = function () {
                this.clearTracks(gr.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
            }, e.prototype.clearTracks = function (t) {
                var e = this;
                t = [].concat(t), t.forEach(function (t) {
                    var r = e[t + "Tracks"]() || [], n = r.length;
                    while (n--) {
                        var o = r[n];
                        "text" === t && e.removeRemoteTextTrack(o), r.removeTrack(o)
                    }
                })
            }, e.prototype.cleanupAutoTextTracks = function () {
                var t = this.autoRemoteTextTracks_ || [], e = t.length;
                while (e--) {
                    var r = t[e];
                    this.removeRemoteTextTrack(r)
                }
            }, e.prototype.reset = function () {
            }, e.prototype.error = function (t) {
                return void 0 !== t && (this.error_ = new Oe(t), this.trigger("error")), this.error_
            }, e.prototype.played = function () {
                return this.hasStarted_ ? ke(0, 0) : ke()
            }, e.prototype.setCurrentTime = function () {
                this.manualTimeUpdates && this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
            }, e.prototype.initTrackListeners = function () {
                var t = this;
                gr.names.forEach(function (e) {
                    var r = gr[e], n = function () {
                        t.trigger(e + "trackchange")
                    }, o = t[r.getterName]();
                    o.addEventListener("removetrack", n), o.addEventListener("addtrack", n), t.on("dispose", function () {
                        o.removeEventListener("removetrack", n), o.removeEventListener("addtrack", n)
                    })
                })
            }, e.prototype.addWebVttScript_ = function () {
                var t = this;
                if (!o.WebVTT) if (i.body.contains(this.el())) {
                    if (!this.options_["vtt.js"] && z(c) && Object.keys(c).length > 0) return void this.trigger("vttjsloaded");
                    var e = i.createElement("script");
                    e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js", e.onload = function () {
                        t.trigger("vttjsloaded")
                    }, e.onerror = function () {
                        t.trigger("vttjserror")
                    }, this.on("dispose", function () {
                        e.onload = null, e.onerror = null
                    }), o.WebVTT = !0, this.el().parentNode.appendChild(e)
                } else this.ready(this.addWebVttScript_)
            }, e.prototype.emulateTextTracks = function () {
                var t = this, e = this.textTracks(), r = this.remoteTextTracks(), n = function (t) {
                    return e.addTrack(t.track)
                }, o = function (t) {
                    return e.removeTrack(t.track)
                };
                r.on("addtrack", n), r.on("removetrack", o), this.addWebVttScript_();
                var i = function () {
                    return t.trigger("texttrackchange")
                }, s = function () {
                    i();
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t];
                        r.removeEventListener("cuechange", i), "showing" === r.mode && r.addEventListener("cuechange", i)
                    }
                };
                s(), e.addEventListener("change", s), e.addEventListener("addtrack", s), e.addEventListener("removetrack", s), this.on("dispose", function () {
                    r.off("addtrack", n), r.off("removetrack", o), e.removeEventListener("change", s), e.removeEventListener("addtrack", s), e.removeEventListener("removetrack", s);
                    for (var t = 0; t < e.length; t++) {
                        var a = e[t];
                        a.removeEventListener("cuechange", i)
                    }
                })
            }, e.prototype.addTextTrack = function (t, e, r) {
                if (!t) throw new Error("TextTrack kind is required but was not provided");
                return br(this, t, e, r)
            }, e.prototype.createRemoteTextTrack = function (t) {
                var e = me(t, {tech: this});
                return new mr.remoteTextEl.TrackClass(e)
            }, e.prototype.addRemoteTextTrack = function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments[1],
                    n = this.createRemoteTextTrack(e);
                return !0 !== r && !1 !== r && (Y.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), r = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), !0 !== r && this.ready(function () {
                    return t.autoRemoteTextTracks_.addTrack(n.track)
                }), n
            }, e.prototype.removeRemoteTextTrack = function (t) {
                var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
                this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack(t), this.autoRemoteTextTracks_.removeTrack(t)
            }, e.prototype.getVideoPlaybackQuality = function () {
                return {}
            }, e.prototype.setPoster = function () {
            }, e.prototype.playsinline = function () {
            }, e.prototype.setPlaysinline = function () {
            }, e.prototype.canPlayType = function () {
                return ""
            }, e.canPlayType = function () {
                return ""
            }, e.canPlaySource = function (t, r) {
                return e.canPlayType(t.type)
            }, e.isTech = function (t) {
                return t.prototype instanceof e || t instanceof e || t === e
            }, e.registerTech = function (t, r) {
                if (e.techs_ || (e.techs_ = {}), !e.isTech(r)) throw new Error("Tech " + t + " must be a Tech");
                if (!e.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
                if (!e.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
                return t = ve(t), e.techs_[t] = r, "Tech" !== t && e.defaultTechOrder_.push(t), r
            }, e.getTech = function (t) {
                if (t) return t = ve(t), e.techs_ && e.techs_[t] ? e.techs_[t] : o && o.videojs && o.videojs[t] ? (Y.warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), o.videojs[t]) : void 0
            }, e
        }(_e);
        _r.names.forEach(function (t) {
            var e = _r[t];
            Tr.prototype[e.getterName] = function () {
                return this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName]
            }
        }), Tr.prototype.featuresVolumeControl = !0, Tr.prototype.featuresMuteControl = !0, Tr.prototype.featuresFullscreenResize = !1, Tr.prototype.featuresPlaybackRate = !1, Tr.prototype.featuresProgressEvents = !1, Tr.prototype.featuresSourceset = !1, Tr.prototype.featuresTimeupdateEvents = !1, Tr.prototype.featuresNativeTextTracks = !1, Tr.withSourceHandlers = function (t) {
            t.registerSourceHandler = function (e, r) {
                var n = t.sourceHandlers;
                n || (n = t.sourceHandlers = []), void 0 === r && (r = n.length), n.splice(r, 0, e)
            }, t.canPlayType = function (e) {
                for (var r = t.sourceHandlers || [], n = void 0, o = 0; o < r.length; o++) if (n = r[o].canPlayType(e), n) return n;
                return ""
            }, t.selectSourceHandler = function (e, r) {
                for (var n = t.sourceHandlers || [], o = void 0, i = 0; i < n.length; i++) if (o = n[i].canHandleSource(e, r), o) return n[i];
                return null
            }, t.canPlaySource = function (e, r) {
                var n = t.selectSourceHandler(e, r);
                return n ? n.canHandleSource(e, r) : ""
            };
            var e = ["seekable", "seeking", "duration"];
            e.forEach(function (t) {
                var e = this[t];
                "function" === typeof e && (this[t] = function () {
                    return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
                })
            }, t.prototype), t.prototype.setSource = function (e) {
                var r = t.selectSourceHandler(e, this.options_);
                r || (t.nativeSourceHandler ? r = t.nativeSourceHandler : Y.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), r !== t.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = r.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler)
            }, t.prototype.disposeSourceHandler = function () {
                this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
            }
        }, _e.registerComponent("Tech", Tr), Tr.registerTech("Tech", Tr), Tr.defaultTechOrder_ = [];
        var Cr = {}, kr = {}, wr = {};

        function Er(t, e) {
            Cr[t] = Cr[t] || [], Cr[t].push(e)
        }

        function Sr(t, e, r) {
            t.setTimeout(function () {
                return Fr(e, Cr[e.type], r, t)
            }, 1)
        }

        function xr(t, e) {
            t.forEach(function (t) {
                return t.setTech && t.setTech(e)
            })
        }

        function jr(t, e, r) {
            return t.reduceRight(Ir(r), e[r]())
        }

        function Pr(t, e, r, n) {
            return e[r](t.reduce(Ir(r), n))
        }

        function Ar(t, e, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = "call" + ve(r),
                i = t.reduce(Ir(o), n), s = i === wr, a = s ? null : e[r](i);
            return Dr(t, r, a, s), a
        }

        var Or = {buffered: 1, currentTime: 1, duration: 1, seekable: 1, played: 1, paused: 1},
            Mr = {setCurrentTime: 1}, Nr = {play: 1, pause: 1};

        function Ir(t) {
            return function (e, r) {
                return e === wr ? wr : r[t] ? r[t](e) : e
            }
        }

        function Dr(t, e, r, n) {
            for (var o = t.length - 1; o >= 0; o--) {
                var i = t[o];
                i[e] && i[e](n, r)
            }
        }

        function Rr(t) {
            kr[t.id()] = null
        }

        function Lr(t, e) {
            var r = kr[t.id()], n = null;
            if (void 0 === r || null === r) return n = e(t), kr[t.id()] = [[e, n]], n;
            for (var o = 0; o < r.length; o++) {
                var i = r[o], s = i[0], a = i[1];
                s === e && (n = a)
            }
            return null === n && (n = e(t), r.push([e, n])), n
        }

        function Fr() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = arguments[2],
                n = arguments[3], o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], s = e[0], a = e.slice(1);
            if ("string" === typeof s) Fr(t, Cr[s], r, n, o, i); else if (s) {
                var l = Lr(n, s);
                if (!l.setSource) return o.push(l), Fr(t, a, r, n, o, i);
                l.setSource(U({}, t), function (e, s) {
                    if (e) return Fr(t, a, r, n, o, i);
                    o.push(l), Fr(s, t.type === s.type ? a : Cr[s.type], r, n, o, i)
                })
            } else a.length ? Fr(t, a, r, n, o, i) : i ? r(t, o) : Fr(t, Cr["*"], r, n, o, !0)
        }

        var Br = {
            opus: "video/ogg",
            ogv: "video/ogg",
            mp4: "video/mp4",
            mov: "video/mp4",
            m4v: "video/mp4",
            mkv: "video/x-matroska",
            mp3: "audio/mpeg",
            aac: "audio/aac",
            oga: "audio/ogg",
            m3u8: "application/x-mpegURL"
        }, $r = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = or(t),
                r = Br[e.toLowerCase()];
            return r || ""
        }, Vr = function (t, e) {
            if (!e) return "";
            if (t.cache_.source.src === e && t.cache_.source.type) return t.cache_.source.type;
            var r = t.cache_.sources.filter(function (t) {
                return t.src === e
            });
            if (r.length) return r[0].type;
            for (var n = t.$$("source"), o = 0; o < n.length; o++) {
                var i = n[o];
                if (i.type && i.src && i.src === e) return i.type
            }
            return $r(e)
        }, Hr = function t(e) {
            if (Array.isArray(e)) {
                var r = [];
                e.forEach(function (e) {
                    e = t(e), Array.isArray(e) ? r = r.concat(e) : W(e) && r.push(e)
                }), e = r
            } else e = "string" === typeof e && e.trim() ? [Ur({src: e})] : W(e) && "string" === typeof e.src && e.src && e.src.trim() ? [Ur(e)] : [];
            return e
        };

        function Ur(t) {
            var e = $r(t.src);
            return !t.type && e && (t.type = e), t
        }

        var Wr = function (t) {
            function e(r, n, o) {
                D(this, e);
                var i = me({createEl: !1}, n), s = L(this, t.call(this, r, i, o));
                if (n.playerOptions.sources && 0 !== n.playerOptions.sources.length) r.src(n.playerOptions.sources); else for (var a = 0, l = n.playerOptions.techOrder; a < l.length; a++) {
                    var c = ve(l[a]), u = Tr.getTech(c);
                    if (c || (u = _e.getComponent(c)), u && u.isSupported()) {
                        r.loadTech_(c);
                        break
                    }
                }
                return s
            }

            return R(e, t), e
        }(_e);
        _e.registerComponent("MediaLoader", Wr);
        var zr = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.emitTapEvents(), o.enable(), o
            }

            return R(e, t), e.prototype.createEl = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                r = U({
                    innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                    className: this.buildCSSClass(),
                    tabIndex: 0
                }, r), "button" === e && Y.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), n = U({role: "button"}, n), this.tabIndex_ = r.tabIndex;
                var o = t.prototype.createEl.call(this, e, r, n);
                return this.createControlTextEl(o), o
            }, e.prototype.dispose = function () {
                this.controlTextEl_ = null, t.prototype.dispose.call(this)
            }, e.prototype.createControlTextEl = function (t) {
                return this.controlTextEl_ = st("span", {className: "vjs-control-text"}, {"aria-live": "polite"}), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_
            }, e.prototype.controlText = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
                if (void 0 === t) return this.controlText_ || "Need Text";
                var r = this.localize(t);
                this.controlText_ = t, at(this.controlTextEl_, r), this.nonIconControl || e.setAttribute("title", r)
            }, e.prototype.buildCSSClass = function () {
                return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.enable = function () {
                this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" !== typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
            }, e.prototype.disable = function () {
                this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" !== typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
            }, e.prototype.handleClick = function (t) {
            }, e.prototype.handleFocus = function (t) {
                Wt(i, "keydown", ee(this, this.handleKeyPress))
            }, e.prototype.handleKeyPress = function (e) {
                32 === e.which || 13 === e.which ? (e.preventDefault(), this.trigger("click")) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
            }, e.prototype.handleBlur = function (t) {
                zt(i, "keydown", ee(this, this.handleKeyPress))
            }, e
        }(_e);
        _e.registerComponent("ClickableComponent", zr);
        var qr = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.update(), r.on("posterchange", ee(o, o.update)), o
            }

            return R(e, t), e.prototype.dispose = function () {
                this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
            }, e.prototype.createEl = function () {
                var t = st("div", {className: "vjs-poster", tabIndex: -1});
                return M || (this.fallbackImg_ = st("img"), t.appendChild(this.fallbackImg_)), t
            }, e.prototype.update = function (t) {
                var e = this.player().poster();
                this.setSrc(e), e ? this.show() : this.hide()
            }, e.prototype.setSrc = function (t) {
                if (this.fallbackImg_) this.fallbackImg_.src = t; else {
                    var e = "";
                    t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
                }
            }, e.prototype.handleClick = function (t) {
                this.player_.controls() && (this.player_.paused() ? Ie(this.player_.play()) : this.player_.pause())
            }, e
        }(zr);
        _e.registerComponent("PosterImage", qr);
        var Xr = "#222", Gr = "#ccc", Yr = {
            monospace: "monospace",
            sansSerif: "sans-serif",
            serif: "serif",
            monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
            monospaceSerif: '"Courier New", monospace',
            proportionalSansSerif: "sans-serif",
            proportionalSerif: "serif",
            casual: '"Comic Sans MS", Impact, fantasy',
            script: '"Monotype Corsiva", cursive',
            smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
        };

        function Kr(t, e) {
            var r = void 0;
            if (4 === t.length) r = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]; else {
                if (7 !== t.length) throw new Error("Invalid color code provided, " + t + "; must be formatted as e.g. #f0e or #f604e2.");
                r = t.slice(1)
            }
            return "rgba(" + parseInt(r.slice(0, 2), 16) + "," + parseInt(r.slice(2, 4), 16) + "," + parseInt(r.slice(4, 6), 16) + "," + e + ")"
        }

        function Jr(t, e, r) {
            try {
                t.style[e] = r
            } catch (n) {
                return
            }
        }

        var Qr = function (t) {
            function e(r, n, i) {
                D(this, e);
                var s = L(this, t.call(this, r, n, i)), a = ee(s, s.updateDisplay);
                return r.on("loadstart", ee(s, s.toggleDisplay)), r.on("texttrackchange", a), r.on("loadstart", ee(s, s.preselectTrack)), r.ready(ee(s, function () {
                    if (r.tech_ && r.tech_.featuresNativeTextTracks) this.hide(); else {
                        r.on("fullscreenchange", a), r.on("playerresize", a), o.addEventListener && o.addEventListener("orientationchange", a), r.on("dispose", function () {
                            return o.removeEventListener("orientationchange", a)
                        });
                        for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
                        this.preselectTrack()
                    }
                })), s
            }

            return R(e, t), e.prototype.preselectTrack = function () {
                for (var t = {
                    captions: 1,
                    subtitles: 1
                }, e = this.player_.textTracks(), r = this.player_.cache_.selectedLanguage, n = void 0, o = void 0, i = void 0, s = 0; s < e.length; s++) {
                    var a = e[s];
                    r && r.enabled && r.language === a.language ? a.kind === r.kind ? i = a : i || (i = a) : r && !r.enabled ? (i = null, n = null, o = null) : a["default"] && ("descriptions" !== a.kind || n ? a.kind in t && !o && (o = a) : n = a)
                }
                i ? i.mode = "showing" : o ? o.mode = "showing" : n && (n.mode = "showing")
            }, e.prototype.toggleDisplay = function () {
                this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
            }, e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {className: "vjs-text-track-display"}, {
                    "aria-live": "off",
                    "aria-atomic": "true"
                })
            }, e.prototype.clearDisplay = function () {
                "function" === typeof o.WebVTT && o.WebVTT.processCues(o, [], this.el_)
            }, e.prototype.updateDisplay = function () {
                var t = this.player_.textTracks();
                this.clearDisplay();
                var e = null, r = null, n = t.length;
                while (n--) {
                    var o = t[n];
                    "showing" === o.mode && ("descriptions" === o.kind ? e = o : r = o)
                }
                r ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(r)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(e))
            }, e.prototype.updateForTrack = function (t) {
                if ("function" === typeof o.WebVTT && t.activeCues) {
                    for (var e = [], r = 0; r < t.activeCues.length; r++) e.push(t.activeCues[r]);
                    if (o.WebVTT.processCues(o, e, this.el_), this.player_.textTrackSettings) {
                        var n = this.player_.textTrackSettings.getValues(), i = e.length;
                        while (i--) {
                            var s = e[i];
                            if (s) {
                                var a = s.displayState;
                                if (n.color && (a.firstChild.style.color = n.color), n.textOpacity && Jr(a.firstChild, "color", Kr(n.color || "#fff", n.textOpacity)), n.backgroundColor && (a.firstChild.style.backgroundColor = n.backgroundColor), n.backgroundOpacity && Jr(a.firstChild, "backgroundColor", Kr(n.backgroundColor || "#000", n.backgroundOpacity)), n.windowColor && (n.windowOpacity ? Jr(a, "backgroundColor", Kr(n.windowColor, n.windowOpacity)) : a.style.backgroundColor = n.windowColor), n.edgeStyle && ("dropshadow" === n.edgeStyle ? a.firstChild.style.textShadow = "2px 2px 3px " + Xr + ", 2px 2px 4px " + Xr + ", 2px 2px 5px " + Xr : "raised" === n.edgeStyle ? a.firstChild.style.textShadow = "1px 1px " + Xr + ", 2px 2px " + Xr + ", 3px 3px " + Xr : "depressed" === n.edgeStyle ? a.firstChild.style.textShadow = "1px 1px " + Gr + ", 0 1px " + Gr + ", -1px -1px " + Xr + ", 0 -1px " + Xr : "uniform" === n.edgeStyle && (a.firstChild.style.textShadow = "0 0 4px " + Xr + ", 0 0 4px " + Xr + ", 0 0 4px " + Xr + ", 0 0 4px " + Xr)), n.fontPercent && 1 !== n.fontPercent) {
                                    var l = o.parseFloat(a.style.fontSize);
                                    a.style.fontSize = l * n.fontPercent + "px", a.style.height = "auto", a.style.top = "auto", a.style.bottom = "2px"
                                }
                                n.fontFamily && "default" !== n.fontFamily && ("small-caps" === n.fontFamily ? a.firstChild.style.fontVariant = "small-caps" : a.firstChild.style.fontFamily = Yr[n.fontFamily])
                            }
                        }
                    }
                }
            }, e
        }(_e);
        _e.registerComponent("TextTrackDisplay", Qr);
        var Zr = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.createEl = function () {
                var e = this.player_.isAudio(), r = this.localize(e ? "Audio Player" : "Video Player"),
                    n = st("span", {className: "vjs-control-text", innerHTML: this.localize("{1} is loading.", [r])}),
                    o = t.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner", dir: "ltr"});
                return o.appendChild(n), o
            }, e
        }(_e);
        _e.registerComponent("LoadingSpinner", Zr);
        var tn = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.createEl = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                t = "button", e = U({
                    innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                    className: this.buildCSSClass()
                }, e), r = U({type: "button"}, r);
                var n = _e.prototype.createEl.call(this, t, e, r);
                return this.createControlTextEl(n), n
            }, e.prototype.addChild = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = this.constructor.name;
                return Y.warn("Adding an actionable (user controllable) child to a Button (" + r + ") is not supported; use a ClickableComponent instead."), _e.prototype.addChild.call(this, t, e)
            }, e.prototype.enable = function () {
                t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
            }, e.prototype.disable = function () {
                t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
            }, e.prototype.handleKeyPress = function (e) {
                32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
            }, e
        }(zr);
        _e.registerComponent("Button", tn);
        var en = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.mouseused_ = !1, o.on("mousedown", o.handleMouseDown), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-big-play-button"
            }, e.prototype.handleClick = function (t) {
                var e = this.player_.play();
                if (this.mouseused_ && t.clientX && t.clientY) Ie(e); else {
                    var r = this.player_.getChild("controlBar"), n = r && r.getChild("playToggle");
                    if (n) {
                        var o = function () {
                            return n.focus()
                        };
                        Ne(e) ? e.then(o, function () {
                        }) : this.setTimeout(o, 1)
                    } else this.player_.focus()
                }
            }, e.prototype.handleKeyPress = function (e) {
                this.mouseused_ = !1, t.prototype.handleKeyPress.call(this, e)
            }, e.prototype.handleMouseDown = function (t) {
                this.mouseused_ = !0
            }, e
        }(tn);
        en.prototype.controlText_ = "Play Video", _e.registerComponent("BigPlayButton", en);
        var rn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.controlText(n && n.controlText || o.localize("Close")), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.handleClick = function (t) {
                this.trigger({type: "close", bubbles: !1})
            }, e
        }(tn);
        _e.registerComponent("CloseButton", rn);
        var nn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.on(r, "play", o.handlePlay), o.on(r, "pause", o.handlePause), o.on(r, "ended", o.handleEnded), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.handleClick = function (t) {
                this.player_.paused() ? this.player_.play() : this.player_.pause()
            }, e.prototype.handleSeeked = function (t) {
                this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(t) : this.handlePlay(t)
            }, e.prototype.handlePlay = function (t) {
                this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
            }, e.prototype.handlePause = function (t) {
                this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
            }, e.prototype.handleEnded = function (t) {
                this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
            }, e
        }(tn);
        nn.prototype.controlText_ = "Play", _e.registerComponent("PlayToggle", nn);
        var on = function (t, e) {
            t = t < 0 ? 0 : t;
            var r = Math.floor(t % 60), n = Math.floor(t / 60 % 60), o = Math.floor(t / 3600),
                i = Math.floor(e / 60 % 60), s = Math.floor(e / 3600);
            return (isNaN(t) || t === 1 / 0) && (o = n = r = "-"), o = o > 0 || s > 0 ? o + ":" : "", n = ((o || i >= 10) && n < 10 ? "0" + n : n) + ":", r = r < 10 ? "0" + r : r, o + n + r
        }, sn = on;

        function an(t) {
            sn = t
        }

        function ln() {
            sn = on
        }

        var cn = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
            return sn(t, e)
        }, un = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.throttledUpdateContent = re(ee(o, o.updateContent), 25), o.on(r, "timeupdate", o.throttledUpdateContent), o
            }

            return R(e, t), e.prototype.createEl = function (e) {
                var r = this.buildCSSClass(), n = t.prototype.createEl.call(this, "div", {
                    className: r + " vjs-time-control vjs-control",
                    innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + " </span>"
                });
                return this.contentEl_ = st("span", {className: r + "-display"}, {"aria-live": "off"}), this.updateTextNode_(), n.appendChild(this.contentEl_), n
            }, e.prototype.dispose = function () {
                this.contentEl_ = null, this.textNode_ = null, t.prototype.dispose.call(this)
            }, e.prototype.updateTextNode_ = function () {
                if (this.contentEl_) {
                    while (this.contentEl_.firstChild) this.contentEl_.removeChild(this.contentEl_.firstChild);
                    this.textNode_ = i.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
                }
            }, e.prototype.formatTime_ = function (t) {
                return cn(t)
            }, e.prototype.updateFormattedTime_ = function (t) {
                var e = this.formatTime_(t);
                e !== this.formattedTime_ && (this.formattedTime_ = e, this.requestAnimationFrame(this.updateTextNode_))
            }, e.prototype.updateContent = function (t) {
            }, e
        }(_e);
        un.prototype.labelText_ = "Time", un.prototype.controlText_ = "Time", _e.registerComponent("TimeDisplay", un);
        var hn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.on(r, "ended", o.handleEnded), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-current-time"
            }, e.prototype.updateContent = function (t) {
                var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                this.updateFormattedTime_(e)
            }, e.prototype.handleEnded = function (t) {
                this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
            }, e
        }(un);
        hn.prototype.labelText_ = "Current Time", hn.prototype.controlText_ = "Current Time", _e.registerComponent("CurrentTimeDisplay", hn);
        var pn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.on(r, "durationchange", o.updateContent), o.on(r, "loadedmetadata", o.throttledUpdateContent), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-duration"
            }, e.prototype.updateContent = function (t) {
                var e = this.player_.duration();
                e && this.duration_ !== e && (this.duration_ = e, this.updateFormattedTime_(e))
            }, e
        }(un);
        pn.prototype.labelText_ = "Duration", pn.prototype.controlText_ = "Duration", _e.registerComponent("DurationDisplay", pn);
        var dn = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {
                    className: "vjs-time-control vjs-time-divider",
                    innerHTML: "<div><span>/</span></div>"
                })
            }, e
        }(_e);
        _e.registerComponent("TimeDivider", dn);
        var fn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.on(r, "durationchange", o.throttledUpdateContent), o.on(r, "ended", o.handleEnded), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-remaining-time"
            }, e.prototype.formatTime_ = function (e) {
                return "-" + t.prototype.formatTime_.call(this, e)
            }, e.prototype.updateContent = function (t) {
                this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
            }, e.prototype.handleEnded = function (t) {
                this.player_.duration() && this.updateFormattedTime_(0)
            }, e
        }(un);
        fn.prototype.labelText_ = "Remaining Time", fn.prototype.controlText_ = "Remaining Time", _e.registerComponent("RemainingTimeDisplay", fn);
        var yn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.updateShowing(), o.on(o.player(), "durationchange", o.updateShowing), o
            }

            return R(e, t), e.prototype.createEl = function () {
                var e = t.prototype.createEl.call(this, "div", {className: "vjs-live-control vjs-control"});
                return this.contentEl_ = st("div", {
                    className: "vjs-live-display",
                    innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
                }, {"aria-live": "off"}), e.appendChild(this.contentEl_), e
            }, e.prototype.dispose = function () {
                this.contentEl_ = null, t.prototype.dispose.call(this)
            }, e.prototype.updateShowing = function (t) {
                this.player().duration() === 1 / 0 ? this.show() : this.hide()
            }, e
        }(_e);
        _e.registerComponent("LiveDisplay", yn);
        var vn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.bar = o.getChild(o.options_.barName), o.vertical(!!o.options_.vertical), o.enable(), o
            }

            return R(e, t), e.prototype.enabled = function () {
                return this.enabled_
            }, e.prototype.enable = function () {
                this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
            }, e.prototype.disable = function () {
                if (this.enabled()) {
                    var t = this.bar.el_.ownerDocument;
                    this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
                }
            }, e.prototype.createEl = function (e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return r.className = r.className + " vjs-slider", r = U({tabIndex: 0}, r), n = U({
                    role: "slider",
                    "aria-valuenow": 0,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    tabIndex: 0
                }, n), t.prototype.createEl.call(this, e, r, n)
            }, e.prototype.handleMouseDown = function (t) {
                var e = this.bar.el_.ownerDocument;
                "mousedown" === t.type && t.preventDefault(), "touchstart" !== t.type || E || t.preventDefault(), mt(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
            }, e.prototype.handleMouseMove = function (t) {
            }, e.prototype.handleMouseUp = function () {
                var t = this.bar.el_.ownerDocument;
                _t(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
            }, e.prototype.update = function () {
                if (this.el_) {
                    var t = this.getPercent(), e = this.bar;
                    if (e) {
                        ("number" !== typeof t || t !== t || t < 0 || t === 1 / 0) && (t = 0);
                        var r = (100 * t).toFixed(2) + "%", n = e.el().style;
                        return this.vertical() ? n.height = r : n.width = r, t
                    }
                }
            }, e.prototype.calculateDistance = function (t) {
                var e = Ct(this.el_, t);
                return this.vertical() ? e.y : e.x
            }, e.prototype.handleFocus = function () {
                this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
            }, e.prototype.handleKeyPress = function (t) {
                37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
            }, e.prototype.handleBlur = function () {
                this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
            }, e.prototype.handleClick = function (t) {
                t.stopImmediatePropagation(), t.preventDefault()
            }, e.prototype.vertical = function (t) {
                if (void 0 === t) return this.vertical_ || !1;
                this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
            }, e
        }(_e);
        _e.registerComponent("Slider", vn);
        var gn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.partEls_ = [], o.on(r, "progress", o.update), o
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {
                    className: "vjs-load-progress",
                    innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                })
            }, e.prototype.dispose = function () {
                this.partEls_ = null, t.prototype.dispose.call(this)
            }, e.prototype.update = function (t) {
                var e = this.player_.buffered(), r = this.player_.duration(), n = this.player_.bufferedEnd(),
                    o = this.partEls_, i = function (t, e) {
                        var r = t / e || 0;
                        return 100 * (r >= 1 ? 1 : r) + "%"
                    };
                this.el_.style.width = i(n, r);
                for (var s = 0; s < e.length; s++) {
                    var a = e.start(s), l = e.end(s), c = o[s];
                    c || (c = this.el_.appendChild(st()), o[s] = c), c.style.left = i(a, n), c.style.width = i(l - a, n)
                }
                for (var u = o.length; u > e.length; u--) this.el_.removeChild(o[u - 1]);
                o.length = e.length
            }, e
        }(_e);
        _e.registerComponent("LoadProgressBar", gn);
        var mn = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {className: "vjs-time-tooltip"})
            }, e.prototype.update = function (t, e, r) {
                var n = bt(this.el_), o = bt(this.player_.el()), i = t.width * e;
                if (o && n) {
                    var s = t.left - o.left + i, a = t.width - i + (o.right - t.right), l = n.width / 2;
                    s < l ? l += l - s : a < l && (l = a), l < 0 ? l = 0 : l > n.width && (l = n.width), this.el_.style.right = "-" + l + "px", at(this.el_, r)
                }
            }, e
        }(_e);
        _e.registerComponent("TimeTooltip", mn);
        var _n = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {
                    className: "vjs-play-progress vjs-slider-bar",
                    innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                })
            }, e.prototype.update = function (t, e) {
                var r = this;
                this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                    var n = r.player_.scrubbing() ? r.player_.getCache().currentTime : r.player_.currentTime(),
                        o = cn(n, r.player_.duration()), i = r.getChild("timeTooltip");
                    i && i.update(t, e, o)
                })
            }, e
        }(_e);
        _n.prototype.options_ = {children: []}, j && !(j > 8) || g || _ || _n.prototype.options_.children.push("timeTooltip"), _e.registerComponent("PlayProgressBar", _n);
        var bn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.update = re(ee(o, o.update), 25), o
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {className: "vjs-mouse-display"})
            }, e.prototype.update = function (t, e) {
                var r = this;
                this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                    var n = r.player_.duration(), o = cn(e * n, n);
                    r.el_.style.left = t.width * e + "px", r.getChild("timeTooltip").update(t, e, o)
                })
            }, e
        }(_e);
        bn.prototype.options_ = {children: ["timeTooltip"]}, _e.registerComponent("MouseTimeDisplay", bn);
        var Tn = 5, Cn = 30, kn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.setEventHandlers_(), o
            }

            return R(e, t), e.prototype.setEventHandlers_ = function () {
                var t = this;
                this.update = re(ee(this, this.update), Cn), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.updateInterval = null, this.on(this.player_, ["playing"], function () {
                    t.clearInterval(t.updateInterval), t.updateInterval = t.setInterval(function () {
                        t.requestAnimationFrame(function () {
                            t.update()
                        })
                    }, Cn)
                }), this.on(this.player_, ["ended", "pause", "waiting"], function () {
                    t.clearInterval(t.updateInterval)
                }), this.on(this.player_, ["timeupdate", "ended"], this.update)
            }, e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {className: "vjs-progress-holder"}, {"aria-label": this.localize("Progress Bar")})
            }, e.prototype.update_ = function (t, e) {
                var r = this.player_.duration();
                this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [cn(t, r), cn(r, r)], "{1} of {2}")), this.bar.update(bt(this.el_), e)
            }, e.prototype.update = function (e) {
                var r = t.prototype.update.call(this);
                return this.update_(this.getCurrentTime_(), r), r
            }, e.prototype.getCurrentTime_ = function () {
                return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
            }, e.prototype.handleEnded = function (t) {
                this.update_(this.player_.duration(), 1)
            }, e.prototype.getPercent = function () {
                var t = this.getCurrentTime_() / this.player_.duration();
                return t >= 1 ? 1 : t
            }, e.prototype.handleMouseDown = function (e) {
                jt(e) && (e.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), t.prototype.handleMouseDown.call(this, e))
            }, e.prototype.handleMouseMove = function (t) {
                if (jt(t)) {
                    var e = this.calculateDistance(t) * this.player_.duration();
                    e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
                }
            }, e.prototype.enable = function () {
                t.prototype.enable.call(this);
                var e = this.getChild("mouseTimeDisplay");
                e && e.show()
            }, e.prototype.disable = function () {
                t.prototype.disable.call(this);
                var e = this.getChild("mouseTimeDisplay");
                e && e.hide()
            }, e.prototype.handleMouseUp = function (e) {
                t.prototype.handleMouseUp.call(this, e), e && e.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                }), this.videoWasPlaying && Ie(this.player_.play())
            }, e.prototype.stepForward = function () {
                this.player_.currentTime(this.player_.currentTime() + Tn)
            }, e.prototype.stepBack = function () {
                this.player_.currentTime(this.player_.currentTime() - Tn)
            }, e.prototype.handleAction = function (t) {
                this.player_.paused() ? this.player_.play() : this.player_.pause()
            }, e.prototype.handleKeyPress = function (e) {
                32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleAction(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
            }, e
        }(vn);
        kn.prototype.options_ = {
            children: ["loadProgressBar", "playProgressBar"],
            barName: "playProgressBar"
        }, j && !(j > 8) || g || _ || kn.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), kn.prototype.playerEvent = "timeupdate", _e.registerComponent("SeekBar", kn);
        var wn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.handleMouseMove = re(ee(o, o.handleMouseMove), 25), o.throttledHandleMouseSeek = re(ee(o, o.handleMouseSeek), 25), o.enable(), o
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
            }, e.prototype.handleMouseMove = function (t) {
                var e = this.getChild("seekBar");
                if (e) {
                    var r = e.getChild("mouseTimeDisplay"), n = e.el(), o = bt(n), i = Ct(n, t).x;
                    i > 1 ? i = 1 : i < 0 && (i = 0), r && r.update(o, i)
                }
            }, e.prototype.handleMouseSeek = function (t) {
                var e = this.getChild("seekBar");
                e && e.handleMouseMove(t)
            }, e.prototype.enabled = function () {
                return this.enabled_
            }, e.prototype.disable = function () {
                this.children().forEach(function (t) {
                    return t.disable && t.disable()
                }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
            }, e.prototype.enable = function () {
                this.children().forEach(function (t) {
                    return t.enable && t.enable()
                }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
            }, e.prototype.handleMouseDown = function (t) {
                var e = this.el_.ownerDocument, r = this.getChild("seekBar");
                r && r.handleMouseDown(t), this.on(e, "mousemove", this.throttledHandleMouseSeek), this.on(e, "touchmove", this.throttledHandleMouseSeek), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
            }, e.prototype.handleMouseUp = function (t) {
                var e = this.el_.ownerDocument, r = this.getChild("seekBar");
                r && r.handleMouseUp(t), this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
            }, e
        }(_e);
        wn.prototype.options_ = {children: ["seekBar"]}, _e.registerComponent("ProgressControl", wn);
        var En = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.on(r, "fullscreenchange", o.handleFullscreenChange), !1 === i[Ee.fullscreenEnabled] && o.disable(), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.handleFullscreenChange = function (t) {
                this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
            }, e.prototype.handleClick = function (t) {
                this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
            }, e
        }(tn);
        En.prototype.controlText_ = "Fullscreen", _e.registerComponent("FullscreenToggle", En);
        var Sn = function (t, e) {
            e.tech_ && !e.tech_.featuresVolumeControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", function () {
                e.tech_.featuresVolumeControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
            })
        }, xn = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {
                    className: "vjs-volume-level",
                    innerHTML: '<span class="vjs-control-text"></span>'
                })
            }, e
        }(_e);
        _e.registerComponent("VolumeLevel", xn);
        var jn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.on("slideractive", o.updateLastVolume_), o.on(r, "volumechange", o.updateARIAAttributes), r.ready(function () {
                    return o.updateARIAAttributes()
                }), o
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {className: "vjs-volume-bar vjs-slider-bar"}, {
                    "aria-label": this.localize("Volume Level"),
                    "aria-live": "polite"
                })
            }, e.prototype.handleMouseDown = function (e) {
                jt(e) && t.prototype.handleMouseDown.call(this, e)
            }, e.prototype.handleMouseMove = function (t) {
                jt(t) && (this.checkMuted(), this.player_.volume(this.calculateDistance(t)))
            }, e.prototype.checkMuted = function () {
                this.player_.muted() && this.player_.muted(!1)
            }, e.prototype.getPercent = function () {
                return this.player_.muted() ? 0 : this.player_.volume()
            }, e.prototype.stepForward = function () {
                this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
            }, e.prototype.stepBack = function () {
                this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
            }, e.prototype.updateARIAAttributes = function (t) {
                var e = this.player_.muted() ? 0 : this.volumeAsPercentage_();
                this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%")
            }, e.prototype.volumeAsPercentage_ = function () {
                return Math.round(100 * this.player_.volume())
            }, e.prototype.updateLastVolume_ = function () {
                var t = this, e = this.player_.volume();
                this.one("sliderinactive", function () {
                    0 === t.player_.volume() && t.player_.lastVolume_(e)
                })
            }, e
        }(vn);
        jn.prototype.options_ = {
            children: ["volumeLevel"],
            barName: "volumeLevel"
        }, jn.prototype.playerEvent = "volumechange", _e.registerComponent("VolumeBar", jn);
        var Pn = function (t) {
            function e(r) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                D(this, e), n.vertical = n.vertical || !1, ("undefined" === typeof n.volumeBar || z(n.volumeBar)) && (n.volumeBar = n.volumeBar || {}, n.volumeBar.vertical = n.vertical);
                var o = L(this, t.call(this, r, n));
                return Sn(o, r), o.throttledHandleMouseMove = re(ee(o, o.handleMouseMove), 25), o.on("mousedown", o.handleMouseDown), o.on("touchstart", o.handleMouseDown), o.on(o.volumeBar, ["focus", "slideractive"], function () {
                    o.volumeBar.addClass("vjs-slider-active"), o.addClass("vjs-slider-active"), o.trigger("slideractive")
                }), o.on(o.volumeBar, ["blur", "sliderinactive"], function () {
                    o.volumeBar.removeClass("vjs-slider-active"), o.removeClass("vjs-slider-active"), o.trigger("sliderinactive")
                }), o
            }

            return R(e, t), e.prototype.createEl = function () {
                var e = "vjs-volume-horizontal";
                return this.options_.vertical && (e = "vjs-volume-vertical"), t.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control " + e})
            }, e.prototype.handleMouseDown = function (t) {
                var e = this.el_.ownerDocument;
                this.on(e, "mousemove", this.throttledHandleMouseMove), this.on(e, "touchmove", this.throttledHandleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
            }, e.prototype.handleMouseUp = function (t) {
                var e = this.el_.ownerDocument;
                this.off(e, "mousemove", this.throttledHandleMouseMove), this.off(e, "touchmove", this.throttledHandleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
            }, e.prototype.handleMouseMove = function (t) {
                this.volumeBar.handleMouseMove(t)
            }, e
        }(_e);
        Pn.prototype.options_ = {children: ["volumeBar"]}, _e.registerComponent("VolumeControl", Pn);
        var An = function (t, e) {
            e.tech_ && !e.tech_.featuresMuteControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", function () {
                e.tech_.featuresMuteControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
            })
        }, On = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return An(o, r), o.on(r, ["loadstart", "volumechange"], o.update), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.handleClick = function (t) {
                var e = this.player_.volume(), r = this.player_.lastVolume_();
                if (0 === e) {
                    var n = r < .1 ? .1 : r;
                    this.player_.volume(n), this.player_.muted(!1)
                } else this.player_.muted(!this.player_.muted())
            }, e.prototype.update = function (t) {
                this.updateIcon_(), this.updateControlText_()
            }, e.prototype.updateIcon_ = function () {
                var t = this.player_.volume(), e = 3;
                g && this.player_.muted(this.player_.tech_.el_.muted), 0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
                for (var r = 0; r < 4; r++) ht(this.el_, "vjs-vol-" + r);
                ut(this.el_, "vjs-vol-" + e)
            }, e.prototype.updateControlText_ = function () {
                var t = this.player_.muted() || 0 === this.player_.volume(), e = t ? "Unmute" : "Mute";
                this.controlText() !== e && this.controlText(e)
            }, e
        }(tn);
        On.prototype.controlText_ = "Mute", _e.registerComponent("MuteToggle", On);
        var Mn = function (t) {
            function e(r) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                D(this, e), "undefined" !== typeof n.inline ? n.inline = n.inline : n.inline = !0, ("undefined" === typeof n.volumeControl || z(n.volumeControl)) && (n.volumeControl = n.volumeControl || {}, n.volumeControl.vertical = !n.inline);
                var o = L(this, t.call(this, r, n));
                return o.on(r, ["loadstart"], o.volumePanelState_), o.on(o.volumeControl, ["slideractive"], o.sliderActive_), o.on(o.volumeControl, ["sliderinactive"], o.sliderInactive_), o
            }

            return R(e, t), e.prototype.sliderActive_ = function () {
                this.addClass("vjs-slider-active")
            }, e.prototype.sliderInactive_ = function () {
                this.removeClass("vjs-slider-active")
            }, e.prototype.volumePanelState_ = function () {
                this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
            }, e.prototype.createEl = function () {
                var e = "vjs-volume-panel-horizontal";
                return this.options_.inline || (e = "vjs-volume-panel-vertical"), t.prototype.createEl.call(this, "div", {className: "vjs-volume-panel vjs-control " + e})
            }, e
        }(_e);
        Mn.prototype.options_ = {children: ["muteToggle", "volumeControl"]}, _e.registerComponent("VolumePanel", Mn);
        var Nn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return n && (o.menuButton_ = n.menuButton), o.focusedChild_ = -1, o.on("keydown", o.handleKeyPress), o
            }

            return R(e, t), e.prototype.addItem = function (t) {
                this.addChild(t), t.on("click", ee(this, function (e) {
                    this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus())
                }))
            }, e.prototype.createEl = function () {
                var e = this.options_.contentElType || "ul";
                this.contentEl_ = st(e, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu");
                var r = t.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
                return r.appendChild(this.contentEl_), Wt(r, "click", function (t) {
                    t.preventDefault(), t.stopImmediatePropagation()
                }), r
            }, e.prototype.dispose = function () {
                this.contentEl_ = null, t.prototype.dispose.call(this)
            }, e.prototype.handleKeyPress = function (t) {
                37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
            }, e.prototype.stepForward = function () {
                var t = 0;
                void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
            }, e.prototype.stepBack = function () {
                var t = 0;
                void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
            }, e.prototype.focus = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = this.children().slice(),
                    r = e.length && e[0].className && /vjs-menu-title/.test(e[0].className);
                r && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
            }, e
        }(_e);
        _e.registerComponent("Menu", Nn);
        var In = function (t) {
            function e(r) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                D(this, e);
                var o = L(this, t.call(this, r, n));
                o.menuButton_ = new tn(r, n), o.menuButton_.controlText(o.controlText_), o.menuButton_.el_.setAttribute("aria-haspopup", "true");
                var i = tn.prototype.buildCSSClass();
                return o.menuButton_.el_.className = o.buildCSSClass() + " " + i, o.menuButton_.removeClass("vjs-control"), o.addChild(o.menuButton_), o.update(), o.enabled_ = !0, o.on(o.menuButton_, "tap", o.handleClick), o.on(o.menuButton_, "click", o.handleClick), o.on(o.menuButton_, "focus", o.handleFocus), o.on(o.menuButton_, "blur", o.handleBlur), o.on("keydown", o.handleSubmenuKeyPress), o
            }

            return R(e, t), e.prototype.update = function () {
                var t = this.createMenu();
                this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
            }, e.prototype.createMenu = function () {
                var t = new Nn(this.player_, {menuButton: this});
                if (this.hideThreshold_ = 0, this.options_.title) {
                    var e = st("li", {className: "vjs-menu-title", innerHTML: ve(this.options_.title), tabIndex: -1});
                    this.hideThreshold_ += 1, t.children_.unshift(e), lt(e, t.contentEl())
                }
                if (this.items = this.createItems(), this.items) for (var r = 0; r < this.items.length; r++) t.addItem(this.items[r]);
                return t
            }, e.prototype.createItems = function () {
            }, e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {className: this.buildWrapperCSSClass()}, {})
            }, e.prototype.buildWrapperCSSClass = function () {
                var e = "vjs-menu-button";
                !0 === this.options_.inline ? e += "-inline" : e += "-popup";
                var r = tn.prototype.buildCSSClass();
                return "vjs-menu-button " + e + " " + r + " " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.buildCSSClass = function () {
                var e = "vjs-menu-button";
                return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.controlText = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
                return this.menuButton_.controlText(t, e)
            }, e.prototype.handleClick = function (t) {
                this.one(this.menu.contentEl(), "mouseleave", ee(this, function (t) {
                    this.unpressButton(), this.el_.blur()
                })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
            }, e.prototype.focus = function () {
                this.menuButton_.focus()
            }, e.prototype.blur = function () {
                this.menuButton_.blur()
            }, e.prototype.handleFocus = function () {
                Wt(i, "keydown", ee(this, this.handleKeyPress))
            }, e.prototype.handleBlur = function () {
                zt(i, "keydown", ee(this, this.handleKeyPress))
            }, e.prototype.handleKeyPress = function (t) {
                27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus())) : 38 !== t.which && 40 !== t.which || this.buttonPressed_ || (this.pressButton(), t.preventDefault())
            }, e.prototype.handleSubmenuKeyPress = function (t) {
                27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus()))
            }, e.prototype.pressButton = function () {
                if (this.enabled_) {
                    if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), g && ot()) return;
                    this.menu.focus()
                }
            }, e.prototype.unpressButton = function () {
                this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
            }, e.prototype.disable = function () {
                this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
            }, e.prototype.enable = function () {
                this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
            }, e
        }(_e);
        _e.registerComponent("MenuButton", In);
        var Dn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = n.tracks, i = L(this, t.call(this, r, n));
                if (i.items.length <= 1 && i.hide(), !o) return L(i);
                var s = ee(i, i.update);
                return o.addEventListener("removetrack", s), o.addEventListener("addtrack", s), i.player_.on("ready", s), i.player_.on("dispose", function () {
                    o.removeEventListener("removetrack", s), o.removeEventListener("addtrack", s)
                }), i
            }

            return R(e, t), e
        }(In);
        _e.registerComponent("TrackButton", Dn);
        var Rn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.selectable = n.selectable, o.isSelected_ = n.selected || !1, o.multiSelectable = n.multiSelectable, o.selected(o.isSelected_), o.selectable ? o.multiSelectable ? o.el_.setAttribute("role", "menuitemcheckbox") : o.el_.setAttribute("role", "menuitemradio") : o.el_.setAttribute("role", "menuitem"), o
            }

            return R(e, t), e.prototype.createEl = function (e, r, n) {
                return this.nonIconControl = !0, t.prototype.createEl.call(this, "li", U({
                    className: "vjs-menu-item",
                    innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                    tabIndex: -1
                }, r), n)
            }, e.prototype.handleClick = function (t) {
                this.selected(!0)
            }, e.prototype.selected = function (t) {
                this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
            }, e
        }(zr);
        _e.registerComponent("MenuItem", Rn);
        var Ln = function (t) {
            function e(r, n) {
                D(this, e);
                var s = n.track, a = r.textTracks();
                n.label = s.label || s.language || "Unknown", n.selected = "showing" === s.mode;
                var l = L(this, t.call(this, r, n));
                l.track = s;
                var c = function () {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    l.handleTracksChange.apply(l, e)
                }, u = function () {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    l.handleSelectedLanguageChange.apply(l, e)
                };
                if (r.on(["loadstart", "texttrackchange"], c), a.addEventListener("change", c), a.addEventListener("selectedlanguagechange", u), l.on("dispose", function () {
                    r.off(["loadstart", "texttrackchange"], c), a.removeEventListener("change", c), a.removeEventListener("selectedlanguagechange", u)
                }), void 0 === a.onchange) {
                    var h = void 0;
                    l.on(["tap", "click"], function () {
                        if ("object" !== I(o.Event)) try {
                            h = new o.Event("change")
                        } catch (t) {
                        }
                        h || (h = i.createEvent("Event"), h.initEvent("change", !0, !0)), a.dispatchEvent(h)
                    })
                }
                return l.handleTracksChange(), l
            }

            return R(e, t), e.prototype.handleClick = function (e) {
                var r = this.track.kind, n = this.track.kinds, o = this.player_.textTracks();
                if (n || (n = [r]), t.prototype.handleClick.call(this, e), o) for (var i = 0; i < o.length; i++) {
                    var s = o[i];
                    s === this.track && n.indexOf(s.kind) > -1 ? "showing" !== s.mode && (s.mode = "showing") : "disabled" !== s.mode && (s.mode = "disabled")
                }
            }, e.prototype.handleTracksChange = function (t) {
                var e = "showing" === this.track.mode;
                e !== this.isSelected_ && this.selected(e)
            }, e.prototype.handleSelectedLanguageChange = function (t) {
                if ("showing" === this.track.mode) {
                    var e = this.player_.cache_.selectedLanguage;
                    if (e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind) return;
                    this.player_.cache_.selectedLanguage = {
                        enabled: !0,
                        language: this.track.language,
                        kind: this.track.kind
                    }
                }
            }, e.prototype.dispose = function () {
                this.track = null, t.prototype.dispose.call(this)
            }, e
        }(Rn);
        _e.registerComponent("TextTrackMenuItem", Ln);
        var Fn = function (t) {
            function e(r, n) {
                return D(this, e), n.track = {
                    player: r,
                    kind: n.kind,
                    kinds: n.kinds,
                    default: !1,
                    mode: "disabled"
                }, n.kinds || (n.kinds = [n.kind]), n.label ? n.track.label = n.label : n.track.label = n.kinds.join(" and ") + " off", n.selectable = !0, n.multiSelectable = !1, L(this, t.call(this, r, n))
            }

            return R(e, t), e.prototype.handleTracksChange = function (t) {
                for (var e = this.player().textTracks(), r = !0, n = 0, o = e.length; n < o; n++) {
                    var i = e[n];
                    if (this.options_.kinds.indexOf(i.kind) > -1 && "showing" === i.mode) {
                        r = !1;
                        break
                    }
                }
                r !== this.isSelected_ && this.selected(r)
            }, e.prototype.handleSelectedLanguageChange = function (t) {
                for (var e = this.player().textTracks(), r = !0, n = 0, o = e.length; n < o; n++) {
                    var i = e[n];
                    if (["captions", "descriptions", "subtitles"].indexOf(i.kind) > -1 && "showing" === i.mode) {
                        r = !1;
                        break
                    }
                }
                r && (this.player_.cache_.selectedLanguage = {enabled: !1})
            }, e
        }(Ln);
        _e.registerComponent("OffTextTrackMenuItem", Fn);
        var Bn = function (t) {
            function e(r) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return D(this, e), n.tracks = r.textTracks(), L(this, t.call(this, r, n))
            }

            return R(e, t), e.prototype.createItems = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ln, r = void 0;
                this.label_ && (r = this.label_ + " off"), t.push(new Fn(this.player_, {
                    kinds: this.kinds_,
                    kind: this.kind_,
                    label: r
                })), this.hideThreshold_ += 1;
                var n = this.player_.textTracks();
                Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
                for (var o = 0; o < n.length; o++) {
                    var i = n[o];
                    if (this.kinds_.indexOf(i.kind) > -1) {
                        var s = new e(this.player_, {track: i, selectable: !0, multiSelectable: !1});
                        s.addClass("vjs-" + i.kind + "-menu-item"), t.push(s)
                    }
                }
                return t
            }, e
        }(Dn);
        _e.registerComponent("TextTrackButton", Bn);
        var $n = function (t) {
            function e(r, n) {
                D(this, e);
                var o = n.track, i = n.cue, s = r.currentTime();
                n.selectable = !0, n.multiSelectable = !1, n.label = i.text, n.selected = i.startTime <= s && s < i.endTime;
                var a = L(this, t.call(this, r, n));
                return a.track = o, a.cue = i, o.addEventListener("cuechange", ee(a, a.update)), a
            }

            return R(e, t), e.prototype.handleClick = function (e) {
                t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
            }, e.prototype.update = function (t) {
                var e = this.cue, r = this.player_.currentTime();
                this.selected(e.startTime <= r && r < e.endTime)
            }, e
        }(Rn);
        _e.registerComponent("ChaptersTrackMenuItem", $n);
        var Vn = function (t) {
            function e(r, n, o) {
                return D(this, e), L(this, t.call(this, r, n, o))
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.buildWrapperCSSClass = function () {
                return "vjs-chapters-button " + t.prototype.buildWrapperCSSClass.call(this)
            }, e.prototype.update = function (e) {
                this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), t.prototype.update.call(this)
            }, e.prototype.setTrack = function (t) {
                if (this.track_ !== t) {
                    if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                        var e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                        e && e.removeEventListener("load", this.updateHandler_), this.track_ = null
                    }
                    if (this.track_ = t, this.track_) {
                        this.track_.mode = "hidden";
                        var r = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                        r && r.addEventListener("load", this.updateHandler_)
                    }
                }
            }, e.prototype.findChaptersTrack = function () {
                for (var t = this.player_.textTracks() || [], e = t.length - 1; e >= 0; e--) {
                    var r = t[e];
                    if (r.kind === this.kind_) return r
                }
            }, e.prototype.getMenuCaption = function () {
                return this.track_ && this.track_.label ? this.track_.label : this.localize(ve(this.kind_))
            }, e.prototype.createMenu = function () {
                return this.options_.title = this.getMenuCaption(), t.prototype.createMenu.call(this)
            }, e.prototype.createItems = function () {
                var t = [];
                if (!this.track_) return t;
                var e = this.track_.cues;
                if (!e) return t;
                for (var r = 0, n = e.length; r < n; r++) {
                    var o = e[r], i = new $n(this.player_, {track: this.track_, cue: o});
                    t.push(i)
                }
                return t
            }, e
        }(Bn);
        Vn.prototype.kind_ = "chapters", Vn.prototype.controlText_ = "Chapters", _e.registerComponent("ChaptersButton", Vn);
        var Hn = function (t) {
            function e(r, n, o) {
                D(this, e);
                var i = L(this, t.call(this, r, n, o)), s = r.textTracks(), a = ee(i, i.handleTracksChange);
                return s.addEventListener("change", a), i.on("dispose", function () {
                    s.removeEventListener("change", a)
                }), i
            }

            return R(e, t), e.prototype.handleTracksChange = function (t) {
                for (var e = this.player().textTracks(), r = !1, n = 0, o = e.length; n < o; n++) {
                    var i = e[n];
                    if (i.kind !== this.kind_ && "showing" === i.mode) {
                        r = !0;
                        break
                    }
                }
                r ? this.disable() : this.enable()
            }, e.prototype.buildCSSClass = function () {
                return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.buildWrapperCSSClass = function () {
                return "vjs-descriptions-button " + t.prototype.buildWrapperCSSClass.call(this)
            }, e
        }(Bn);
        Hn.prototype.kind_ = "descriptions", Hn.prototype.controlText_ = "Descriptions", _e.registerComponent("DescriptionsButton", Hn);
        var Un = function (t) {
            function e(r, n, o) {
                return D(this, e), L(this, t.call(this, r, n, o))
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.buildWrapperCSSClass = function () {
                return "vjs-subtitles-button " + t.prototype.buildWrapperCSSClass.call(this)
            }, e
        }(Bn);
        Un.prototype.kind_ = "subtitles", Un.prototype.controlText_ = "Subtitles", _e.registerComponent("SubtitlesButton", Un);
        var Wn = function (t) {
            function e(r, n) {
                D(this, e), n.track = {
                    player: r,
                    kind: n.kind,
                    label: n.kind + " settings",
                    selectable: !1,
                    default: !1,
                    mode: "disabled"
                }, n.selectable = !1, n.name = "CaptionSettingsMenuItem";
                var o = L(this, t.call(this, r, n));
                return o.addClass("vjs-texttrack-settings"), o.controlText(", opens " + n.kind + " settings dialog"), o
            }

            return R(e, t), e.prototype.handleClick = function (t) {
                this.player().getChild("textTrackSettings").open()
            }, e
        }(Ln);
        _e.registerComponent("CaptionSettingsMenuItem", Wn);
        var zn = function (t) {
            function e(r, n, o) {
                return D(this, e), L(this, t.call(this, r, n, o))
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.buildWrapperCSSClass = function () {
                return "vjs-captions-button " + t.prototype.buildWrapperCSSClass.call(this)
            }, e.prototype.createItems = function () {
                var e = [];
                return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new Wn(this.player_, {kind: this.kind_})), this.hideThreshold_ += 1), t.prototype.createItems.call(this, e)
            }, e
        }(Bn);
        zn.prototype.kind_ = "captions", zn.prototype.controlText_ = "Captions", _e.registerComponent("CaptionsButton", zn);
        var qn = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.createEl = function (e, r, n) {
                var o = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                "captions" === this.options_.track.kind && (o += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), o += "</span>";
                var i = t.prototype.createEl.call(this, e, U({innerHTML: o}, r), n);
                return i
            }, e
        }(Ln);
        _e.registerComponent("SubsCapsMenuItem", qn);
        var Xn = function (t) {
            function e(r) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(o.player_.language_) > -1 && (o.label_ = "captions"), o.menuButton_.controlText(ve(o.label_)), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-subs-caps-button " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.buildWrapperCSSClass = function () {
                return "vjs-subs-caps-button " + t.prototype.buildWrapperCSSClass.call(this)
            }, e.prototype.createItems = function () {
                var e = [];
                return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new Wn(this.player_, {kind: this.label_})), this.hideThreshold_ += 1), e = t.prototype.createItems.call(this, e, qn), e
            }, e
        }(Bn);
        Xn.prototype.kinds_ = ["captions", "subtitles"], Xn.prototype.controlText_ = "Subtitles", _e.registerComponent("SubsCapsButton", Xn);
        var Gn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = n.track, i = r.audioTracks();
                n.label = o.label || o.language || "Unknown", n.selected = o.enabled;
                var s = L(this, t.call(this, r, n));
                s.track = o, s.addClass("vjs-" + o.kind + "-menu-item");
                var a = function () {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    s.handleTracksChange.apply(s, e)
                };
                return i.addEventListener("change", a), s.on("dispose", function () {
                    i.removeEventListener("change", a)
                }), s
            }

            return R(e, t), e.prototype.createEl = function (e, r, n) {
                var o = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                "main-desc" === this.options_.track.kind && (o += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), o += "</span>";
                var i = t.prototype.createEl.call(this, e, U({innerHTML: o}, r), n);
                return i
            }, e.prototype.handleClick = function (e) {
                var r = this.player_.audioTracks();
                t.prototype.handleClick.call(this, e);
                for (var n = 0; n < r.length; n++) {
                    var o = r[n];
                    o.enabled = o === this.track
                }
            }, e.prototype.handleTracksChange = function (t) {
                this.selected(this.track.enabled)
            }, e
        }(Rn);
        _e.registerComponent("AudioTrackMenuItem", Gn);
        var Yn = function (t) {
            function e(r) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return D(this, e), n.tracks = r.audioTracks(), L(this, t.call(this, r, n))
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-audio-button " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.buildWrapperCSSClass = function () {
                return "vjs-audio-button " + t.prototype.buildWrapperCSSClass.call(this)
            }, e.prototype.createItems = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this.hideThreshold_ = 1;
                for (var e = this.player_.audioTracks(), r = 0; r < e.length; r++) {
                    var n = e[r];
                    t.push(new Gn(this.player_, {track: n, selectable: !0, multiSelectable: !1}))
                }
                return t
            }, e
        }(Dn);
        Yn.prototype.controlText_ = "Audio Track", _e.registerComponent("AudioTrackButton", Yn);
        var Kn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = n.rate, i = parseFloat(o, 10);
                n.label = o, n.selected = 1 === i, n.selectable = !0, n.multiSelectable = !1;
                var s = L(this, t.call(this, r, n));
                return s.label = o, s.rate = i, s.on(r, "ratechange", s.update), s
            }

            return R(e, t), e.prototype.handleClick = function (e) {
                t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
            }, e.prototype.update = function (t) {
                this.selected(this.player().playbackRate() === this.rate)
            }, e
        }(Rn);
        Kn.prototype.contentElType = "button", _e.registerComponent("PlaybackRateMenuItem", Kn);
        var Jn = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.updateVisibility(), o.updateLabel(), o.on(r, "loadstart", o.updateVisibility), o.on(r, "ratechange", o.updateLabel), o
            }

            return R(e, t), e.prototype.createEl = function () {
                var e = t.prototype.createEl.call(this);
                return this.labelEl_ = st("div", {
                    className: "vjs-playback-rate-value",
                    innerHTML: "1x"
                }), e.appendChild(this.labelEl_), e
            }, e.prototype.dispose = function () {
                this.labelEl_ = null, t.prototype.dispose.call(this)
            }, e.prototype.buildCSSClass = function () {
                return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.buildWrapperCSSClass = function () {
                return "vjs-playback-rate " + t.prototype.buildWrapperCSSClass.call(this)
            }, e.prototype.createMenu = function () {
                var t = new Nn(this.player()), e = this.playbackRates();
                if (e) for (var r = e.length - 1; r >= 0; r--) t.addChild(new Kn(this.player(), {rate: e[r] + "x"}));
                return t
            }, e.prototype.updateARIAAttributes = function () {
                this.el().setAttribute("aria-valuenow", this.player().playbackRate())
            }, e.prototype.handleClick = function (t) {
                for (var e = this.player().playbackRate(), r = this.playbackRates(), n = r[0], o = 0; o < r.length; o++) if (r[o] > e) {
                    n = r[o];
                    break
                }
                this.player().playbackRate(n)
            }, e.prototype.playbackRates = function () {
                return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
            }, e.prototype.playbackRateSupported = function () {
                return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
            }, e.prototype.updateVisibility = function (t) {
                this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
            }, e.prototype.updateLabel = function (t) {
                this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
            }, e
        }(In);
        Jn.prototype.controlText_ = "Playback Rate", _e.registerComponent("PlaybackRateMenuButton", Jn);
        var Qn = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
            }, e
        }(_e);
        _e.registerComponent("Spacer", Qn);
        var Zn = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.createEl = function () {
                var e = t.prototype.createEl.call(this, {className: this.buildCSSClass()});
                return e.innerHTML = " ", e
            }, e
        }(Qn);
        _e.registerComponent("CustomControlSpacer", Zn);
        var to = function (t) {
            function e() {
                return D(this, e), L(this, t.apply(this, arguments))
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {className: "vjs-control-bar", dir: "ltr"})
            }, e
        }(_e);
        to.prototype.options_ = {children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]}, _e.registerComponent("ControlBar", to);
        var eo = function (t) {
            function e(r, n) {
                D(this, e);
                var o = L(this, t.call(this, r, n));
                return o.on(r, "error", o.open), o
            }

            return R(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.content = function () {
                var t = this.player().error();
                return t ? this.localize(t.message) : ""
            }, e
        }(Ve);
        eo.prototype.options_ = me(Ve.prototype.options_, {
            pauseOnOpen: !1,
            fillAlways: !0,
            temporary: !1,
            uncloseable: !0
        }), _e.registerComponent("ErrorDisplay", eo);
        var ro = "vjs-text-track-settings", no = ["#000", "Black"], oo = ["#00F", "Blue"], io = ["#0FF", "Cyan"],
            so = ["#0F0", "Green"], ao = ["#F0F", "Magenta"], lo = ["#F00", "Red"], co = ["#FFF", "White"],
            uo = ["#FF0", "Yellow"], ho = ["1", "Opaque"], po = ["0.5", "Semi-Transparent"], fo = ["0", "Transparent"],
            yo = {
                backgroundColor: {
                    selector: ".vjs-bg-color > select",
                    id: "captions-background-color-%s",
                    label: "Color",
                    options: [no, co, lo, so, oo, uo, ao, io]
                },
                backgroundOpacity: {
                    selector: ".vjs-bg-opacity > select",
                    id: "captions-background-opacity-%s",
                    label: "Transparency",
                    options: [ho, po, fo]
                },
                color: {
                    selector: ".vjs-fg-color > select",
                    id: "captions-foreground-color-%s",
                    label: "Color",
                    options: [co, no, lo, so, oo, uo, ao, io]
                },
                edgeStyle: {
                    selector: ".vjs-edge-style > select",
                    id: "%s",
                    label: "Text Edge Style",
                    options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
                },
                fontFamily: {
                    selector: ".vjs-font-family > select",
                    id: "captions-font-family-%s",
                    label: "Font Family",
                    options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
                },
                fontPercent: {
                    selector: ".vjs-font-percent > select",
                    id: "captions-font-size-%s",
                    label: "Font Size",
                    options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
                    default: 2,
                    parser: function (t) {
                        return "1.00" === t ? null : Number(t)
                    }
                },
                textOpacity: {
                    selector: ".vjs-text-opacity > select",
                    id: "captions-foreground-opacity-%s",
                    label: "Transparency",
                    options: [ho, po]
                },
                windowColor: {selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color"},
                windowOpacity: {
                    selector: ".vjs-window-opacity > select",
                    id: "captions-window-opacity-%s",
                    label: "Transparency",
                    options: [fo, po, ho]
                }
            };

        function vo(t, e) {
            if (e && (t = e(t)), t && "none" !== t) return t
        }

        function go(t, e) {
            var r = t.options[t.options.selectedIndex].value;
            return vo(r, e)
        }

        function mo(t, e, r) {
            if (e) for (var n = 0; n < t.options.length; n++) if (vo(t.options[n].value, r) === e) {
                t.selectedIndex = n;
                break
            }
        }

        yo.windowColor.options = yo.backgroundColor.options;
        var _o = function (t) {
            function e(r, n) {
                D(this, e), n.temporary = !1;
                var o = L(this, t.call(this, r, n));
                return o.updateDisplay = ee(o, o.updateDisplay), o.fill(), o.hasBeenOpened_ = o.hasBeenFilled_ = !0, o.endDialog = st("p", {
                    className: "vjs-control-text",
                    textContent: o.localize("End of dialog window.")
                }), o.el().appendChild(o.endDialog), o.setDefaults(), void 0 === n.persistTextTrackSettings && (o.options_.persistTextTrackSettings = o.options_.playerOptions.persistTextTrackSettings), o.on(o.$(".vjs-done-button"), "click", function () {
                    o.saveSettings(), o.close()
                }), o.on(o.$(".vjs-default-button"), "click", function () {
                    o.setDefaults(), o.updateDisplay()
                }), V(yo, function (t) {
                    o.on(o.$(t.selector), "change", o.updateDisplay)
                }), o.options_.persistTextTrackSettings && o.restoreSettings(), o
            }

            return R(e, t), e.prototype.dispose = function () {
                this.endDialog = null, t.prototype.dispose.call(this)
            }, e.prototype.createElSelect_ = function (t) {
                var e = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label", o = yo[t],
                    i = o.id.replace("%s", this.id_), s = [r, i].join(" ").trim();
                return ["<" + n + ' id="' + i + '" class="' + ("label" === n ? "vjs-label" : "") + '">', this.localize(o.label), "</" + n + ">", '<select aria-labelledby="' + s + '">'].concat(o.options.map(function (t) {
                    var r = i + "-" + t[1].replace(/\W+/g, "");
                    return ['<option id="' + r + '" value="' + t[0] + '" ', 'aria-labelledby="' + s + " " + r + '">', e.localize(t[1]), "</option>"].join("")
                })).concat("</select>").join("")
            }, e.prototype.createElFgColor_ = function () {
                var t = "captions-text-legend-" + this.id_;
                return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", t), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", t), "</span>", "</fieldset>"].join("")
            }, e.prototype.createElBgColor_ = function () {
                var t = "captions-background-" + this.id_;
                return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", t), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", t), "</span>", "</fieldset>"].join("")
            }, e.prototype.createElWinColor_ = function () {
                var t = "captions-window-" + this.id_;
                return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", t), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", t), "</span>", "</fieldset>"].join("")
            }, e.prototype.createElColors_ = function () {
                return st("div", {
                    className: "vjs-track-settings-colors",
                    innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
                })
            }, e.prototype.createElFont_ = function () {
                return st("div", {
                    className: "vjs-track-settings-font",
                    innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
                })
            }, e.prototype.createElControls_ = function () {
                var t = this.localize("restore all settings to the default values");
                return st("div", {
                    className: "vjs-track-settings-controls",
                    innerHTML: ['<button type="button" class="vjs-default-button" title="' + t + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + t + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
                })
            }, e.prototype.content = function () {
                return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
            }, e.prototype.label = function () {
                return this.localize("Caption Settings Dialog")
            }, e.prototype.description = function () {
                return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
            }, e.prototype.buildCSSClass = function () {
                return t.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
            }, e.prototype.getValues = function () {
                var t = this;
                return H(yo, function (e, r, n) {
                    var o = go(t.$(r.selector), r.parser);
                    return void 0 !== o && (e[n] = o), e
                }, {})
            }, e.prototype.setValues = function (t) {
                var e = this;
                V(yo, function (r, n) {
                    mo(e.$(r.selector), t[n], r.parser)
                })
            }, e.prototype.setDefaults = function () {
                var t = this;
                V(yo, function (e) {
                    var r = e.hasOwnProperty("default") ? e["default"] : 0;
                    t.$(e.selector).selectedIndex = r
                })
            }, e.prototype.restoreSettings = function () {
                var t = void 0;
                try {
                    t = JSON.parse(o.localStorage.getItem(ro))
                } catch (e) {
                    Y.warn(e)
                }
                t && this.setValues(t)
            }, e.prototype.saveSettings = function () {
                if (this.options_.persistTextTrackSettings) {
                    var t = this.getValues();
                    try {
                        Object.keys(t).length ? o.localStorage.setItem(ro, JSON.stringify(t)) : o.localStorage.removeItem(ro)
                    } catch (e) {
                        Y.warn(e)
                    }
                }
            }, e.prototype.updateDisplay = function () {
                var t = this.player_.getChild("textTrackDisplay");
                t && t.updateDisplay()
            }, e.prototype.conditionalBlur_ = function () {
                this.previouslyActiveEl_ = null, this.off(i, "keydown", this.handleKeyDown);
                var t = this.player_.controlBar, e = t && t.subsCapsButton, r = t && t.captionsButton;
                e ? e.focus() : r && r.focus()
            }, e
        }(Ve);
        _e.registerComponent("TextTrackSettings", _o);
        var bo = function (t) {
            function e(r, n) {
                D(this, e);
                var i = n.ResizeObserver || o.ResizeObserver;
                null === n.ResizeObserver && (i = !1);
                var s = me({createEl: !i}, n), a = L(this, t.call(this, r, s));
                return a.ResizeObserver = n.ResizeObserver || o.ResizeObserver, a.loadListener_ = null, a.resizeObserver_ = null, a.debouncedHandler_ = ne(function () {
                    a.resizeHandler()
                }, 100, !1, a), i ? (a.resizeObserver_ = new a.ResizeObserver(a.debouncedHandler_), a.resizeObserver_.observe(r.el())) : (a.loadListener_ = function () {
                    a.el_ && a.el_.contentWindow && Wt(a.el_.contentWindow, "resize", a.debouncedHandler_)
                }, a.one("load", a.loadListener_)), a
            }

            return R(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "iframe", {className: "vjs-resize-manager"})
            }, e.prototype.resizeHandler = function () {
                this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
            }, e.prototype.dispose = function () {
                this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.el_ && this.el_.contentWindow && zt(this.el_.contentWindow, "resize", this.debouncedHandler_), this.loadListener_ && this.off("load", this.loadListener_), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null
            }, e
        }(_e);
        _e.registerComponent("ResizeManager", bo);
        var To = function (t) {
            var e = t.el();
            if (e.hasAttribute("src")) return t.triggerSourceset(e.src), !0;
            var r = t.$$("source"), n = [], o = "";
            if (!r.length) return !1;
            for (var i = 0; i < r.length; i++) {
                var s = r[i].src;
                s && -1 === n.indexOf(s) && n.push(s)
            }
            return !!n.length && (1 === n.length && (o = n[0]), t.triggerSourceset(o), !0)
        }, Co = {};
        x || (Co = Object.defineProperty({}, "innerHTML", {
            get: function () {
                return this.cloneNode(!0).innerHTML
            }, set: function (t) {
                var e = i.createElement(this.nodeName.toLowerCase());
                e.innerHTML = t;
                var r = i.createDocumentFragment();
                while (e.childNodes.length) r.appendChild(e.childNodes[0]);
                return this.innerText = "", o.Element.prototype.appendChild.call(this, r), this.innerHTML
            }
        }));
        var ko = function (t, e) {
            for (var r = {}, n = 0; n < t.length; n++) if (r = Object.getOwnPropertyDescriptor(t[n], e), r && r.set && r.get) break;
            return r.enumerable = !0, r.configurable = !0, r
        }, wo = function (t) {
            return ko([t.el(), o.HTMLMediaElement.prototype, o.Element.prototype, Co], "innerHTML")
        }, Eo = function (t) {
            var e = t.el();
            if (!e.resetSourceWatch_) {
                var r = {}, n = wo(t), o = function (r) {
                    return function () {
                        for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        var s = r.apply(e, o);
                        return To(t), s
                    }
                };
                ["append", "appendChild", "insertAdjacentHTML"].forEach(function (t) {
                    e[t] && (r[t] = e[t], e[t] = o(r[t]))
                }), Object.defineProperty(e, "innerHTML", me(n, {set: o(n.set)})), e.resetSourceWatch_ = function () {
                    e.resetSourceWatch_ = null, Object.keys(r).forEach(function (t) {
                        e[t] = r[t]
                    }), Object.defineProperty(e, "innerHTML", n)
                }, t.one("sourceset", e.resetSourceWatch_)
            }
        }, So = {};
        x || (So = Object.defineProperty({}, "src", {
            get: function () {
                return this.hasAttribute("src") ? nr(o.Element.prototype.getAttribute.call(this, "src")) : ""
            }, set: function (t) {
                return o.Element.prototype.setAttribute.call(this, "src", t), t
            }
        }));
        var xo = function (t) {
                return ko([t.el(), o.HTMLMediaElement.prototype, So], "src")
            }, jo = function (t) {
                if (t.featuresSourceset) {
                    var e = t.el();
                    if (!e.resetSourceset_) {
                        var r = xo(t), n = e.setAttribute, o = e.load;
                        Object.defineProperty(e, "src", me(r, {
                            set: function (n) {
                                var o = r.set.call(e, n);
                                return t.triggerSourceset(e.src), o
                            }
                        })), e.setAttribute = function (r, o) {
                            var i = n.call(e, r, o);
                            return /src/i.test(r) && t.triggerSourceset(e.src), i
                        }, e.load = function () {
                            var r = o.call(e);
                            return To(t) || (t.triggerSourceset(""), Eo(t)), r
                        }, e.currentSrc ? t.triggerSourceset(e.currentSrc) : To(t) || Eo(t), e.resetSourceset_ = function () {
                            e.resetSourceset_ = null, e.load = o, e.setAttribute = n, Object.defineProperty(e, "src", r), e.resetSourceWatch_ && e.resetSourceWatch_()
                        }
                    }
                }
            },
            Po = F(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
            Ao = function (t) {
                function e(r, n) {
                    D(this, e);
                    var o = L(this, t.call(this, r, n)), i = r.source, a = !1;
                    if (i && (o.el_.currentSrc !== i.src || r.tag && 3 === r.tag.initNetworkState_) ? o.setSource(i) : o.handleLateInit_(o.el_), r.enableSourceset && o.setupSourcesetHandling_(), o.el_.hasChildNodes()) {
                        var l = o.el_.childNodes, c = l.length, u = [];
                        while (c--) {
                            var h = l[c], p = h.nodeName.toLowerCase();
                            "track" === p && (o.featuresNativeTextTracks ? (o.remoteTextTrackEls().addTrackElement_(h), o.remoteTextTracks().addTrack(h.track), o.textTracks().addTrack(h.track), a || o.el_.hasAttribute("crossorigin") || !ir(h.src) || (a = !0)) : u.push(h))
                        }
                        for (var d = 0; d < u.length; d++) o.el_.removeChild(u[d])
                    }
                    return o.proxyNativeTracks_(), o.featuresNativeTextTracks && a && Y.warn(s(Po)), o.restoreMetadataTracksInIOSNativePlayer_(), (O || y || C) && !0 === r.nativeControlsForTouch && o.setControls(!0), o.proxyWebkitFullscreen_(), o.triggerReady(), o
                }

                return R(e, t), e.prototype.dispose = function () {
                    this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), e.disposeMediaElement(this.el_), this.options_ = null, t.prototype.dispose.call(this)
                }, e.prototype.setupSourcesetHandling_ = function () {
                    jo(this)
                }, e.prototype.restoreMetadataTracksInIOSNativePlayer_ = function () {
                    var t = this.textTracks(), e = void 0, r = function () {
                        e = [];
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            "metadata" === n.kind && e.push({track: n, storedMode: n.mode})
                        }
                    };
                    r(), t.addEventListener("change", r), this.on("dispose", function () {
                        return t.removeEventListener("change", r)
                    });
                    var n = function r() {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            "disabled" === o.track.mode && o.track.mode !== o.storedMode && (o.track.mode = o.storedMode)
                        }
                        t.removeEventListener("change", r)
                    };
                    this.on("webkitbeginfullscreen", function () {
                        t.removeEventListener("change", r), t.removeEventListener("change", n), t.addEventListener("change", n)
                    }), this.on("webkitendfullscreen", function () {
                        t.removeEventListener("change", r), t.addEventListener("change", r), t.removeEventListener("change", n)
                    })
                }, e.prototype.proxyNativeTracks_ = function () {
                    var t = this;
                    gr.names.forEach(function (e) {
                        var r = gr[e], n = t.el()[r.getterName], o = t[r.getterName]();
                        if (t["featuresNative" + r.capitalName + "Tracks"] && n && n.addEventListener) {
                            var i = {
                                change: function (t) {
                                    o.trigger({type: "change", target: o, currentTarget: o, srcElement: o})
                                }, addtrack: function (t) {
                                    o.addTrack(t.track)
                                }, removetrack: function (t) {
                                    o.removeTrack(t.track)
                                }
                            }, s = function () {
                                for (var t = [], e = 0; e < o.length; e++) {
                                    for (var r = !1, i = 0; i < n.length; i++) if (n[i] === o[e]) {
                                        r = !0;
                                        break
                                    }
                                    r || t.push(o[e])
                                }
                                while (t.length) o.removeTrack(t.shift())
                            };
                            Object.keys(i).forEach(function (e) {
                                var r = i[e];
                                n.addEventListener(e, r), t.on("dispose", function (t) {
                                    return n.removeEventListener(e, r)
                                })
                            }), t.on("loadstart", s), t.on("dispose", function (e) {
                                return t.off("loadstart", s)
                            })
                        }
                    })
                }, e.prototype.createEl = function () {
                    var t = this.options_.tag;
                    if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                        if (t) {
                            var r = t.cloneNode(!0);
                            t.parentNode && t.parentNode.insertBefore(r, t), e.disposeMediaElement(t), t = r
                        } else {
                            t = i.createElement("video");
                            var n = this.options_.tag && ft(this.options_.tag), o = me({}, n);
                            O && !0 === this.options_.nativeControlsForTouch || delete o.controls, dt(t, U(o, {
                                id: this.options_.techId,
                                class: "vjs-tech"
                            }))
                        }
                        t.playerId = this.options_.playerId
                    }
                    "undefined" !== typeof this.options_.preload && vt(t, "preload", this.options_.preload);
                    for (var s = ["loop", "muted", "playsinline", "autoplay"], a = 0; a < s.length; a++) {
                        var l = s[a], c = this.options_[l];
                        "undefined" !== typeof c && (c ? vt(t, l, l) : gt(t, l), t[l] = c)
                    }
                    return t
                }, e.prototype.handleLateInit_ = function (t) {
                    if (0 !== t.networkState && 3 !== t.networkState) {
                        if (0 === t.readyState) {
                            var e = !1, r = function () {
                                e = !0
                            };
                            this.on("loadstart", r);
                            var n = function () {
                                e || this.trigger("loadstart")
                            };
                            return this.on("loadedmetadata", n), void this.ready(function () {
                                this.off("loadstart", r), this.off("loadedmetadata", n), e || this.trigger("loadstart")
                            })
                        }
                        var o = ["loadstart"];
                        o.push("loadedmetadata"), t.readyState >= 2 && o.push("loadeddata"), t.readyState >= 3 && o.push("canplay"), t.readyState >= 4 && o.push("canplaythrough"), this.ready(function () {
                            o.forEach(function (t) {
                                this.trigger(t)
                            }, this)
                        })
                    }
                }, e.prototype.setCurrentTime = function (t) {
                    try {
                        this.el_.currentTime = t
                    } catch (e) {
                        Y(e, "Video is not ready. (Video.js)")
                    }
                }, e.prototype.duration = function () {
                    var t = this;
                    if (this.el_.duration === 1 / 0 && _ && E && 0 === this.el_.currentTime) {
                        var e = function e() {
                            t.el_.currentTime > 0 && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
                        };
                        return this.on("timeupdate", e), NaN
                    }
                    return this.el_.duration || NaN
                }, e.prototype.width = function () {
                    return this.el_.offsetWidth
                }, e.prototype.height = function () {
                    return this.el_.offsetHeight
                }, e.prototype.proxyWebkitFullscreen_ = function () {
                    var t = this;
                    if ("webkitDisplayingFullscreen" in this.el_) {
                        var e = function () {
                            this.trigger("fullscreenchange", {isFullscreen: !1})
                        }, r = function () {
                            "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {isFullscreen: !0}))
                        };
                        this.on("webkitbeginfullscreen", r), this.on("dispose", function () {
                            t.off("webkitbeginfullscreen", r), t.off("webkitendfullscreen", e)
                        })
                    }
                }, e.prototype.supportsFullScreen = function () {
                    if ("function" === typeof this.el_.webkitEnterFullScreen) {
                        var t = o.navigator && o.navigator.userAgent || "";
                        if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                    }
                    return !1
                }, e.prototype.enterFullScreen = function () {
                    var t = this.el_;
                    t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                        t.pause(), t.webkitEnterFullScreen()
                    }, 0)) : t.webkitEnterFullScreen()
                }, e.prototype.exitFullScreen = function () {
                    this.el_.webkitExitFullScreen()
                }, e.prototype.src = function (t) {
                    if (void 0 === t) return this.el_.src;
                    this.setSrc(t)
                }, e.prototype.reset = function () {
                    e.resetMediaElement(this.el_)
                }, e.prototype.currentSrc = function () {
                    return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                }, e.prototype.setControls = function (t) {
                    this.el_.controls = !!t
                }, e.prototype.addTextTrack = function (e, r, n) {
                    return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, r, n) : t.prototype.addTextTrack.call(this, e, r, n)
                }, e.prototype.createRemoteTextTrack = function (e) {
                    if (!this.featuresNativeTextTracks) return t.prototype.createRemoteTextTrack.call(this, e);
                    var r = i.createElement("track");
                    return e.kind && (r.kind = e.kind), e.label && (r.label = e.label), (e.language || e.srclang) && (r.srclang = e.language || e.srclang), e["default"] && (r["default"] = e["default"]), e.id && (r.id = e.id), e.src && (r.src = e.src), r
                }, e.prototype.addRemoteTextTrack = function (e, r) {
                    var n = t.prototype.addRemoteTextTrack.call(this, e, r);
                    return this.featuresNativeTextTracks && this.el().appendChild(n), n
                }, e.prototype.removeRemoteTextTrack = function (e) {
                    if (t.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) {
                        var r = this.$$("track"), n = r.length;
                        while (n--) e !== r[n] && e !== r[n].track || this.el().removeChild(r[n])
                    }
                }, e.prototype.getVideoPlaybackQuality = function () {
                    if ("function" === typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                    var t = {};
                    return "undefined" !== typeof this.el().webkitDroppedFrameCount && "undefined" !== typeof this.el().webkitDecodedFrameCount && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount, t.totalVideoFrames = this.el().webkitDecodedFrameCount), o.performance && "function" === typeof o.performance.now ? t.creationTime = o.performance.now() : o.performance && o.performance.timing && "number" === typeof o.performance.timing.navigationStart && (t.creationTime = o.Date.now() - o.performance.timing.navigationStart), t
                }, e
            }(Tr);
        if (rt()) {
            Ao.TEST_VID = i.createElement("video");
            var Oo = i.createElement("track");
            Oo.kind = "captions", Oo.srclang = "en", Oo.label = "English", Ao.TEST_VID.appendChild(Oo)
        }
        Ao.isSupported = function () {
            try {
                Ao.TEST_VID.volume = .5
            } catch (t) {
                return !1
            }
            return !(!Ao.TEST_VID || !Ao.TEST_VID.canPlayType)
        }, Ao.canPlayType = function (t) {
            return Ao.TEST_VID.canPlayType(t)
        }, Ao.canPlaySource = function (t, e) {
            return Ao.canPlayType(t.type)
        }, Ao.canControlVolume = function () {
            try {
                var t = Ao.TEST_VID.volume;
                return Ao.TEST_VID.volume = t / 2 + .1, t !== Ao.TEST_VID.volume
            } catch (e) {
                return !1
            }
        }, Ao.canMuteVolume = function () {
            try {
                var t = Ao.TEST_VID.muted;
                return Ao.TEST_VID.muted = !t, Ao.TEST_VID.muted ? vt(Ao.TEST_VID, "muted", "muted") : gt(Ao.TEST_VID, "muted", "muted"), t !== Ao.TEST_VID.muted
            } catch (e) {
                return !1
            }
        }, Ao.canControlPlaybackRate = function () {
            if (_ && E && S < 58) return !1;
            try {
                var t = Ao.TEST_VID.playbackRate;
                return Ao.TEST_VID.playbackRate = t / 2 + .1, t !== Ao.TEST_VID.playbackRate
            } catch (e) {
                return !1
            }
        }, Ao.canOverrideAttributes = function () {
            if (x) return !1;
            try {
                var t = function () {
                };
                Object.defineProperty(i.createElement("video"), "src", {
                    get: t,
                    set: t
                }), Object.defineProperty(i.createElement("audio"), "src", {
                    get: t,
                    set: t
                }), Object.defineProperty(i.createElement("video"), "innerHTML", {
                    get: t,
                    set: t
                }), Object.defineProperty(i.createElement("audio"), "innerHTML", {get: t, set: t})
            } catch (e) {
                return !1
            }
            return !0
        }, Ao.supportsNativeTextTracks = function () {
            return A || g && E
        }, Ao.supportsNativeVideoTracks = function () {
            return !(!Ao.TEST_VID || !Ao.TEST_VID.videoTracks)
        }, Ao.supportsNativeAudioTracks = function () {
            return !(!Ao.TEST_VID || !Ao.TEST_VID.audioTracks)
        }, Ao.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], Ao.prototype.featuresVolumeControl = Ao.canControlVolume(), Ao.prototype.featuresMuteControl = Ao.canMuteVolume(), Ao.prototype.featuresPlaybackRate = Ao.canControlPlaybackRate(), Ao.prototype.featuresSourceset = Ao.canOverrideAttributes(), Ao.prototype.movingMediaElementInDOM = !g, Ao.prototype.featuresFullscreenResize = !0, Ao.prototype.featuresProgressEvents = !0, Ao.prototype.featuresTimeupdateEvents = !0, Ao.prototype.featuresNativeTextTracks = Ao.supportsNativeTextTracks(), Ao.prototype.featuresNativeVideoTracks = Ao.supportsNativeVideoTracks(), Ao.prototype.featuresNativeAudioTracks = Ao.supportsNativeAudioTracks();
        var Mo = Ao.TEST_VID && Ao.TEST_VID.constructor.prototype.canPlayType,
            No = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, Io = /^video\/mp4/i;
        Ao.patchCanPlayType = function () {
            b >= 4 && !k && !E ? Ao.TEST_VID.constructor.prototype.canPlayType = function (t) {
                return t && No.test(t) ? "maybe" : Mo.call(this, t)
            } : T && (Ao.TEST_VID.constructor.prototype.canPlayType = function (t) {
                return t && Io.test(t) ? "maybe" : Mo.call(this, t)
            })
        }, Ao.unpatchCanPlayType = function () {
            var t = Ao.TEST_VID.constructor.prototype.canPlayType;
            return Ao.TEST_VID.constructor.prototype.canPlayType = Mo, t
        }, Ao.patchCanPlayType(), Ao.disposeMediaElement = function (t) {
            if (t) {
                t.parentNode && t.parentNode.removeChild(t);
                while (t.hasChildNodes()) t.removeChild(t.firstChild);
                t.removeAttribute("src"), "function" === typeof t.load && function () {
                    try {
                        t.load()
                    } catch (e) {
                    }
                }()
            }
        }, Ao.resetMediaElement = function (t) {
            if (t) {
                var e = t.querySelectorAll("source"), r = e.length;
                while (r--) t.removeChild(e[r]);
                t.removeAttribute("src"), "function" === typeof t.load && function () {
                    try {
                        t.load()
                    } catch (e) {
                    }
                }()
            }
        }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (t) {
            Ao.prototype[t] = function () {
                return this.el_[t] || this.el_.hasAttribute(t)
            }
        }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (t) {
            Ao.prototype["set" + ve(t)] = function (e) {
                this.el_[t] = e, e ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
            }
        }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (t) {
            Ao.prototype[t] = function () {
                return this.el_[t]
            }
        }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function (t) {
            Ao.prototype["set" + ve(t)] = function (e) {
                this.el_[t] = e
            }
        }), ["pause", "load", "play"].forEach(function (t) {
            Ao.prototype[t] = function () {
                return this.el_[t]()
            }
        }), Tr.withSourceHandlers(Ao), Ao.nativeSourceHandler = {}, Ao.nativeSourceHandler.canPlayType = function (t) {
            try {
                return Ao.TEST_VID.canPlayType(t)
            } catch (e) {
                return ""
            }
        }, Ao.nativeSourceHandler.canHandleSource = function (t, e) {
            if (t.type) return Ao.nativeSourceHandler.canPlayType(t.type);
            if (t.src) {
                var r = or(t.src);
                return Ao.nativeSourceHandler.canPlayType("video/" + r)
            }
            return ""
        }, Ao.nativeSourceHandler.handleSource = function (t, e, r) {
            e.setSrc(t.src)
        }, Ao.nativeSourceHandler.dispose = function () {
        }, Ao.registerSourceHandler(Ao.nativeSourceHandler), Tr.registerTech("Html5", Ao);
        var Do = F(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
            Ro = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
            Lo = {canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked"},
            Fo = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"], Bo = {};
        Fo.forEach(function (t) {
            var e = "x" === t.charAt(0) ? "x-" + t.substring(1) : t;
            Bo[t] = "vjs-layout-" + e
        });
        var $o = {tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0},
            Vo = function (t) {
                function e(r, n, o) {
                    if (D(this, e), r.id = r.id || n.id || "vjs_video_" + Nt(), n = U(e.getTagSettings(r), n), n.initChildren = !1, n.createEl = !1, n.evented = !1, n.reportTouchActivity = !1, !n.language) if ("function" === typeof r.closest) {
                        var i = r.closest("[lang]");
                        i && i.getAttribute && (n.language = i.getAttribute("lang"))
                    } else {
                        var s = r;
                        while (s && 1 === s.nodeType) {
                            if (ft(s).hasOwnProperty("lang")) {
                                n.language = s.getAttribute("lang");
                                break
                            }
                            s = s.parentNode
                        }
                    }
                    var a = L(this, t.call(this, null, n, o));
                    if (a.log = K(a.id_), a.isPosterFromTech_ = !1, a.queuedCallbacks_ = [], a.isReady_ = !1, a.hasStarted_ = !1, a.userActive_ = !1, !a.options_ || !a.options_.techOrder || !a.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                    if (a.tag = r, a.tagAttributes = r && ft(r), a.language(a.options_.language), n.languages) {
                        var l = {};
                        Object.getOwnPropertyNames(n.languages).forEach(function (t) {
                            l[t.toLowerCase()] = n.languages[t]
                        }), a.languages_ = l
                    } else a.languages_ = e.prototype.options_.languages;
                    a.cache_ = {}, a.poster_ = n.poster || "", a.controls_ = !!n.controls, a.cache_.lastVolume = 1, r.controls = !1, r.removeAttribute("controls"), r.hasAttribute("autoplay") ? a.options_.autoplay = !0 : a.autoplay(a.options_.autoplay), a.scrubbing_ = !1, a.el_ = a.createEl(), a.cache_.lastPlaybackRate = a.defaultPlaybackRate(), de(a, {eventBusKey: "el_"});
                    var c = me(a.options_);
                    if (n.plugins) {
                        var h = n.plugins;
                        Object.keys(h).forEach(function (t) {
                            if ("function" !== typeof this[t]) throw new Error('plugin "' + t + '" does not exist');
                            this[t](h[t])
                        }, a)
                    }
                    a.options_.playerOptions = c, a.middleware_ = [], a.initChildren(), a.isAudio("audio" === r.nodeName.toLowerCase()), a.controls() ? a.addClass("vjs-controls-enabled") : a.addClass("vjs-controls-disabled"), a.el_.setAttribute("role", "region"), a.isAudio() ? a.el_.setAttribute("aria-label", a.localize("Audio Player")) : a.el_.setAttribute("aria-label", a.localize("Video Player")), a.isAudio() && a.addClass("vjs-audio"), a.flexNotSupported_() && a.addClass("vjs-no-flex"), g || a.addClass("vjs-workinghover"), e.players[a.id_] = a;
                    var p = u.split(".")[0];
                    return a.addClass("vjs-v" + p), a.userActive(!0), a.reportUserActivity(), a.one("play", a.listenForUserActivity_), a.on("fullscreenchange", a.handleFullscreenChange_), a.on("stageclick", a.handleStageClick_), a.breakpoints(a.options_.breakpoints), a.responsive(a.options_.responsive), a.changingSrc_ = !1, a.playWaitingForReady_ = !1, a.playOnLoadstart_ = null, a
                }

                return R(e, t), e.prototype.dispose = function () {
                    this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), Rr(this), t.prototype.dispose.call(this)
                }, e.prototype.createEl = function () {
                    var e = this.tag, r = void 0,
                        n = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player"),
                        s = "video-js" === this.tag.tagName.toLowerCase();
                    n ? r = this.el_ = e.parentNode : s || (r = this.el_ = t.prototype.createEl.call(this, "div"));
                    var a = ft(e);
                    if (s) {
                        r = this.el_ = e, e = this.tag = i.createElement("video");
                        while (r.children.length) e.appendChild(r.firstChild);
                        ct(r, "video-js") || ut(r, "video-js"), r.appendChild(e), n = this.playerElIngest_ = r, ["autoplay", "controls", "crossOrigin", "defaultMuted", "defaultPlaybackRate", "loop", "muted", "playbackRate", "src", "volume"].forEach(function (t) {
                            "undefined" !== typeof r[t] && (e[t] = r[t])
                        })
                    }
                    if (e.setAttribute("tabindex", "-1"), a.tabindex = "-1", j && (e.setAttribute("role", "application"), a.role = "application"), e.removeAttribute("width"), e.removeAttribute("height"), "width" in a && delete a.width, "height" in a && delete a.height, Object.getOwnPropertyNames(a).forEach(function (t) {
                        "class" === t ? (r.className += " " + a[t], s && (e.className += " " + a[t])) : (r.setAttribute(t, a[t]), s && e.setAttribute(t, a[t]))
                    }), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = r.player = this, this.addClass("vjs-paused"), !0 !== o.VIDEOJS_NO_DYNAMIC_STYLE) {
                        this.styleEl_ = Zt("vjs-styles-dimensions");
                        var l = Pt(".vjs-styles-defaults"), c = Pt("head");
                        c.insertBefore(this.styleEl_, l ? l.nextSibling : c.firstChild)
                    }
                    this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                    for (var u = e.getElementsByTagName("a"), h = 0; h < u.length; h++) {
                        var p = u.item(h);
                        ut(p, "vjs-hidden"), p.setAttribute("hidden", "hidden")
                    }
                    return e.initNetworkState_ = e.networkState, e.parentNode && !n && e.parentNode.insertBefore(r, e), lt(e, r), this.children_.unshift(e), this.el_.setAttribute("lang", this.language_), this.el_ = r, r
                }, e.prototype.width = function (t) {
                    return this.dimension("width", t)
                }, e.prototype.height = function (t) {
                    return this.dimension("height", t)
                }, e.prototype.dimension = function (t, e) {
                    var r = t + "_";
                    if (void 0 === e) return this[r] || 0;
                    if ("" === e) return this[r] = void 0, void this.updateStyleEl_();
                    var n = parseFloat(e);
                    isNaN(n) ? Y.error('Improper value "' + e + '" supplied for for ' + t) : (this[r] = n, this.updateStyleEl_())
                }, e.prototype.fluid = function (t) {
                    if (void 0 === t) return !!this.fluid_;
                    this.fluid_ = !!t, t ? (this.addClass("vjs-fluid"), this.fill(!1)) : this.removeClass("vjs-fluid"), this.updateStyleEl_()
                }, e.prototype.fill = function (t) {
                    if (void 0 === t) return !!this.fill_;
                    this.fill_ = !!t, t ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill")
                }, e.prototype.aspectRatio = function (t) {
                    if (void 0 === t) return this.aspectRatio_;
                    if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                    this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
                }, e.prototype.updateStyleEl_ = function () {
                    if (!0 !== o.VIDEOJS_NO_DYNAMIC_STYLE) {
                        var t = void 0, e = void 0, r = void 0, n = void 0;
                        r = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                        var i = r.split(":"), s = i[1] / i[0];
                        t = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / s : this.videoWidth() || 300, e = void 0 !== this.height_ ? this.height_ : t * s, n = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(n), te(this.styleEl_, "\n      ." + n + " {\n        width: " + t + "px;\n        height: " + e + "px;\n      }\n\n      ." + n + ".vjs-fluid {\n        padding-top: " + 100 * s + "%;\n      }\n    ")
                    } else {
                        var a = "number" === typeof this.width_ ? this.width_ : this.options_.width,
                            l = "number" === typeof this.height_ ? this.height_ : this.options_.height,
                            c = this.tech_ && this.tech_.el();
                        c && (a >= 0 && (c.width = a), l >= 0 && (c.height = l))
                    }
                }, e.prototype.loadTech_ = function (t, e) {
                    var r = this;
                    this.tech_ && this.unloadTech_();
                    var n = ve(t), o = t.charAt(0).toLowerCase() + t.slice(1);
                    "Html5" !== n && this.tag && (Tr.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = n, this.isReady_ = !1;
                    var i = "string" !== typeof this.autoplay() && this.autoplay(), s = {
                        source: e,
                        autoplay: i,
                        nativeControlsForTouch: this.options_.nativeControlsForTouch,
                        playerId: this.id(),
                        techId: this.id() + "_" + o + "_api",
                        playsinline: this.options_.playsinline,
                        preload: this.options_.preload,
                        loop: this.options_.loop,
                        muted: this.options_.muted,
                        poster: this.poster(),
                        language: this.language(),
                        playerElIngest: this.playerElIngest_ || !1,
                        "vtt.js": this.options_["vtt.js"],
                        canOverridePoster: !!this.options_.techCanOverridePoster,
                        enableSourceset: this.options_.enableSourceset
                    };
                    _r.names.forEach(function (t) {
                        var e = _r[t];
                        s[e.getterName] = r[e.privateName]
                    }), U(s, this.options_[n]), U(s, this.options_[o]), U(s, this.options_[t.toLowerCase()]), this.tag && (s.tag = this.tag), e && e.src === this.cache_.src && this.cache_.currentTime > 0 && (s.startTime = this.cache_.currentTime);
                    var a = Tr.getTech(t);
                    if (!a) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
                    this.tech_ = new a(s), this.tech_.ready(ee(this, this.handleTechReady_), !0), Fe.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), Ro.forEach(function (t) {
                        r.on(r.tech_, t, r["handleTech" + ve(t) + "_"])
                    }), Object.keys(Lo).forEach(function (t) {
                        r.on(r.tech_, t, function (e) {
                            0 === r.tech_.playbackRate() && r.tech_.seeking() ? r.queuedCallbacks_.push({
                                callback: r["handleTech" + Lo[t] + "_"].bind(r),
                                event: e
                            }) : r["handleTech" + Lo[t] + "_"](e)
                        })
                    }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || lt(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                }, e.prototype.unloadTech_ = function () {
                    var t = this;
                    _r.names.forEach(function (e) {
                        var r = _r[e];
                        t[r.privateName] = t[r.getterName]()
                    }), this.textTracksJson_ = Fe.textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
                }, e.prototype.tech = function (t) {
                    return void 0 === t && Y.warn(s(Do)), this.tech_
                }, e.prototype.addTechControlsListeners_ = function () {
                    this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                }, e.prototype.removeTechControlsListeners_ = function () {
                    this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                }, e.prototype.handleTechReady_ = function () {
                    if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
                        delete this.tag.poster
                    } catch (t) {
                        Y("deleting tag.poster throws in some browsers", t)
                    }
                }, e.prototype.handleTechLoadStart_ = function () {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
                }, e.prototype.manualAutoplay_ = function (t) {
                    var e = this;
                    if (this.tech_ && "string" === typeof t) {
                        var r = function () {
                            var t = e.muted();
                            e.muted(!0);
                            var r = e.play();
                            if (r && r.then && r["catch"]) return r["catch"](function (r) {
                                e.muted(t)
                            })
                        }, n = void 0;
                        if ("any" === t ? (n = this.play(), n && n.then && n["catch"] && n["catch"](function () {
                            return r()
                        })) : n = "muted" === t ? r() : this.play(), n && n.then && n["catch"]) return n.then(function () {
                            e.trigger({type: "autoplay-success", autoplay: t})
                        })["catch"](function (r) {
                            e.trigger({type: "autoplay-failure", autoplay: t})
                        })
                    }
                }, e.prototype.updateSourceCaches_ = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = t, r = "";
                    "string" !== typeof e && (e = t.src, r = t.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], e && !r && (r = Vr(this, e)), this.cache_.source = me({}, t, {
                        src: e,
                        type: r
                    });
                    for (var n = this.cache_.sources.filter(function (t) {
                        return t.src && t.src === e
                    }), o = [], i = this.$$("source"), s = [], a = 0; a < i.length; a++) {
                        var l = ft(i[a]);
                        o.push(l), l.src && l.src === e && s.push(l.src)
                    }
                    s.length && !n.length ? this.cache_.sources = o : n.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = e
                }, e.prototype.handleTechSourceset_ = function (t) {
                    var e = this;
                    if (!this.changingSrc_) {
                        var r = function (t) {
                            return e.updateSourceCaches_(t)
                        }, n = this.currentSource().src, o = t.src;
                        if (n && !/^blob:/.test(n) && /^blob:/.test(o) && (!this.lastSource_ || this.lastSource_.tech !== o && this.lastSource_.player !== n) && (r = function () {
                        }), r(o), !t.src) {
                            var i = function t(r) {
                                if ("sourceset" !== r.type) {
                                    var n = e.techGet("currentSrc");
                                    e.lastSource_.tech = n, e.updateSourceCaches_(n)
                                }
                                e.tech_.off(["sourceset", "loadstart"], t)
                            };
                            this.tech_.one(["sourceset", "loadstart"], i)
                        }
                    }
                    this.lastSource_ = {player: this.currentSource().src, tech: t.src}, this.trigger({
                        src: t.src,
                        type: "sourceset"
                    })
                }, e.prototype.hasStarted = function (t) {
                    if (void 0 === t) return this.hasStarted_;
                    t !== this.hasStarted_ && (this.hasStarted_ = t, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
                }, e.prototype.handleTechPlay_ = function () {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                }, e.prototype.handleTechRateChange_ = function () {
                    this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function (t) {
                        return t.callback(t.event)
                    }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
                }, e.prototype.handleTechWaiting_ = function () {
                    var t = this;
                    this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
                        return t.removeClass("vjs-waiting")
                    })
                }, e.prototype.handleTechCanPlay_ = function () {
                    this.removeClass("vjs-waiting"), this.trigger("canplay")
                }, e.prototype.handleTechCanPlayThrough_ = function () {
                    this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                }, e.prototype.handleTechPlaying_ = function () {
                    this.removeClass("vjs-waiting"), this.trigger("playing")
                }, e.prototype.handleTechSeeking_ = function () {
                    this.addClass("vjs-seeking"), this.trigger("seeking")
                }, e.prototype.handleTechSeeked_ = function () {
                    this.removeClass("vjs-seeking"), this.trigger("seeked")
                }, e.prototype.handleTechFirstPlay_ = function () {
                    this.options_.starttime && (Y.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
                }, e.prototype.handleTechPause_ = function () {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                }, e.prototype.handleTechEnded_ = function () {
                    this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                }, e.prototype.handleTechDurationChange_ = function () {
                    this.duration(this.techGet_("duration"))
                }, e.prototype.handleTechClick_ = function (t) {
                    jt(t) && this.controls_ && (this.paused() ? Ie(this.play()) : this.pause())
                }, e.prototype.handleTechTap_ = function () {
                    this.userActive(!this.userActive())
                }, e.prototype.handleTechTouchStart_ = function () {
                    this.userWasActive = this.userActive()
                }, e.prototype.handleTechTouchMove_ = function () {
                    this.userWasActive && this.reportUserActivity()
                }, e.prototype.handleTechTouchEnd_ = function (t) {
                    t.preventDefault()
                }, e.prototype.handleFullscreenChange_ = function () {
                    this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                }, e.prototype.handleStageClick_ = function () {
                    this.reportUserActivity()
                }, e.prototype.handleTechFullscreenChange_ = function (t, e) {
                    e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
                }, e.prototype.handleTechError_ = function () {
                    var t = this.tech_.error();
                    this.error(t)
                }, e.prototype.handleTechTextData_ = function () {
                    var t = null;
                    arguments.length > 1 && (t = arguments[1]), this.trigger("textdata", t)
                }, e.prototype.getCache = function () {
                    return this.cache_
                }, e.prototype.techCall_ = function (t, e) {
                    this.ready(function () {
                        if (t in Mr) return Pr(this.middleware_, this.tech_, t, e);
                        if (t in Nr) return Ar(this.middleware_, this.tech_, t, e);
                        try {
                            this.tech_ && this.tech_[t](e)
                        } catch (r) {
                            throw Y(r), r
                        }
                    }, !0)
                }, e.prototype.techGet_ = function (t) {
                    if (this.tech_ && this.tech_.isReady_) {
                        if (t in Or) return jr(this.middleware_, this.tech_, t);
                        if (t in Nr) return Ar(this.middleware_, this.tech_, t);
                        try {
                            return this.tech_[t]()
                        } catch (e) {
                            if (void 0 === this.tech_[t]) throw Y("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e;
                            if ("TypeError" === e.name) throw Y("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e;
                            throw Y(e), e
                        }
                    }
                }, e.prototype.play = function () {
                    var t = this, e = this.options_.Promise || o.Promise;
                    return e ? new e(function (e) {
                        t.play_(e)
                    }) : this.play_()
                }, e.prototype.play_ = function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie;
                    if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
                        if (!this.changingSrc_ && (this.src() || this.currentSrc())) return void e(this.techGet_("play"));
                        this.playOnLoadstart_ = function () {
                            t.playOnLoadstart_ = null, e(t.play())
                        }, this.one("loadstart", this.playOnLoadstart_)
                    } else {
                        if (this.playWaitingForReady_) return;
                        this.playWaitingForReady_ = !0, this.ready(function () {
                            t.playWaitingForReady_ = !1, e(t.play())
                        })
                    }
                }, e.prototype.pause = function () {
                    this.techCall_("pause")
                }, e.prototype.paused = function () {
                    return !1 !== this.techGet_("paused")
                }, e.prototype.played = function () {
                    return this.techGet_("played") || ke(0, 0)
                }, e.prototype.scrubbing = function (t) {
                    if ("undefined" === typeof t) return this.scrubbing_;
                    this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
                }, e.prototype.currentTime = function (t) {
                    return "undefined" !== typeof t ? (t < 0 && (t = 0), void this.techCall_("setCurrentTime", t)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                }, e.prototype.duration = function (t) {
                    if (void 0 === t) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                    t = parseFloat(t), t < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
                }, e.prototype.remainingTime = function () {
                    return this.duration() - this.currentTime()
                }, e.prototype.remainingTimeDisplay = function () {
                    return Math.floor(this.duration()) - Math.floor(this.currentTime())
                }, e.prototype.buffered = function () {
                    var t = this.techGet_("buffered");
                    return t && t.length || (t = ke(0, 0)), t
                }, e.prototype.bufferedPercent = function () {
                    return we(this.buffered(), this.duration())
                }, e.prototype.bufferedEnd = function () {
                    var t = this.buffered(), e = this.duration(), r = t.end(t.length - 1);
                    return r > e && (r = e), r
                }, e.prototype.volume = function (t) {
                    var e = void 0;
                    return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), void (e > 0 && this.lastVolume_(e))) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
                }, e.prototype.muted = function (t) {
                    if (void 0 === t) return this.techGet_("muted") || !1;
                    this.techCall_("setMuted", t)
                }, e.prototype.defaultMuted = function (t) {
                    return void 0 !== t ? this.techCall_("setDefaultMuted", t) : this.techGet_("defaultMuted") || !1
                }, e.prototype.lastVolume_ = function (t) {
                    if (void 0 === t || 0 === t) return this.cache_.lastVolume;
                    this.cache_.lastVolume = t
                }, e.prototype.supportsFullScreen = function () {
                    return this.techGet_("supportsFullScreen") || !1
                }, e.prototype.isFullscreen = function (t) {
                    if (void 0 === t) return !!this.isFullscreen_;
                    this.isFullscreen_ = !!t
                }, e.prototype.requestFullscreen = function () {
                    var t = Ee;
                    this.isFullscreen(!0), t.requestFullscreen ? (Wt(i, t.fullscreenchange, ee(this, function e(r) {
                        this.isFullscreen(i[t.fullscreenElement]), !1 === this.isFullscreen() && zt(i, t.fullscreenchange, e), this.trigger("fullscreenchange")
                    })), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
                }, e.prototype.exitFullscreen = function () {
                    var t = Ee;
                    this.isFullscreen(!1), t.requestFullscreen ? i[t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
                }, e.prototype.enterFullWindow = function () {
                    this.isFullWindow = !0, this.docOrigOverflow = i.documentElement.style.overflow, Wt(i, "keydown", ee(this, this.fullWindowOnEscKey)), i.documentElement.style.overflow = "hidden", ut(i.body, "vjs-full-window"), this.trigger("enterFullWindow")
                }, e.prototype.fullWindowOnEscKey = function (t) {
                    27 === t.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
                }, e.prototype.exitFullWindow = function () {
                    this.isFullWindow = !1, zt(i, "keydown", this.fullWindowOnEscKey), i.documentElement.style.overflow = this.docOrigOverflow, ht(i.body, "vjs-full-window"), this.trigger("exitFullWindow")
                }, e.prototype.canPlayType = function (t) {
                    for (var e = void 0, r = 0, n = this.options_.techOrder; r < n.length; r++) {
                        var o = n[r], i = Tr.getTech(o);
                        if (i || (i = _e.getComponent(o)), i) {
                            if (i.isSupported() && (e = i.canPlayType(t), e)) return e
                        } else Y.error('The "' + o + '" tech is undefined. Skipped browser support check for that tech.')
                    }
                    return ""
                }, e.prototype.selectSource = function (t) {
                    var e = this, r = this.options_.techOrder.map(function (t) {
                        return [t, Tr.getTech(t)]
                    }).filter(function (t) {
                        var e = t[0], r = t[1];
                        return r ? r.isSupported() : (Y.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                    }), n = function (t, e, r) {
                        var n = void 0;
                        return t.some(function (t) {
                            return e.some(function (e) {
                                if (n = r(t, e), n) return !0
                            })
                        }), n
                    }, o = void 0, i = function (t) {
                        return function (e, r) {
                            return t(r, e)
                        }
                    }, s = function (t, r) {
                        var n = t[0], o = t[1];
                        if (o.canPlaySource(r, e.options_[n.toLowerCase()])) return {source: r, tech: n}
                    };
                    return o = this.options_.sourceOrder ? n(t, r, i(s)) : n(r, t, s), o || !1
                }, e.prototype.src = function (t) {
                    var e = this;
                    if ("undefined" === typeof t) return this.cache_.src || "";
                    var r = Hr(t);
                    r.length ? (this.changingSrc_ = !0, this.cache_.sources = r, this.updateSourceCaches_(r[0]), Sr(this, r[0], function (t, n) {
                        e.middleware_ = n, e.cache_.sources = r, e.updateSourceCaches_(t);
                        var o = e.src_(t);
                        if (o) return r.length > 1 ? e.src(r.slice(1)) : (e.changingSrc_ = !1, e.setTimeout(function () {
                            this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                        }, 0), void e.triggerReady());
                        xr(n, e.tech_)
                    })) : this.setTimeout(function () {
                        this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                    }, 0)
                }, e.prototype.src_ = function (t) {
                    var e = this, r = this.selectSource([t]);
                    return !r || (ge(r.tech, this.techName_) ? (this.ready(function () {
                        this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), this.changingSrc_ = !1
                    }, !0), !1) : (this.changingSrc_ = !0, this.loadTech_(r.tech, r.source), this.tech_.ready(function () {
                        e.changingSrc_ = !1
                    }), !1))
                }, e.prototype.load = function () {
                    this.techCall_("load")
                }, e.prototype.reset = function () {
                    this.tech_ && this.tech_.clearTracks("text"), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
                }, e.prototype.currentSources = function () {
                    var t = this.currentSource(), e = [];
                    return 0 !== Object.keys(t).length && e.push(t), this.cache_.sources || e
                }, e.prototype.currentSource = function () {
                    return this.cache_.source || {}
                }, e.prototype.currentSrc = function () {
                    return this.currentSource() && this.currentSource().src || ""
                }, e.prototype.currentType = function () {
                    return this.currentSource() && this.currentSource().type || ""
                }, e.prototype.preload = function (t) {
                    return void 0 !== t ? (this.techCall_("setPreload", t), void (this.options_.preload = t)) : this.techGet_("preload")
                }, e.prototype.autoplay = function (t) {
                    if (void 0 === t) return this.options_.autoplay || !1;
                    var e = void 0;
                    "string" === typeof t && /(any|play|muted)/.test(t) ? (this.options_.autoplay = t, this.manualAutoplay_(t), e = !1) : this.options_.autoplay = !!t, e = e || this.options_.autoplay, this.tech_ && this.techCall_("setAutoplay", e)
                }, e.prototype.playsinline = function (t) {
                    return void 0 !== t ? (this.techCall_("setPlaysinline", t), this.options_.playsinline = t, this) : this.techGet_("playsinline")
                }, e.prototype.loop = function (t) {
                    return void 0 !== t ? (this.techCall_("setLoop", t), void (this.options_.loop = t)) : this.techGet_("loop")
                }, e.prototype.poster = function (t) {
                    if (void 0 === t) return this.poster_;
                    t || (t = ""), t !== this.poster_ && (this.poster_ = t, this.techCall_("setPoster", t), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
                }, e.prototype.handleTechPosterChange_ = function () {
                    if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                        var t = this.tech_.poster() || "";
                        t !== this.poster_ && (this.poster_ = t, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                    }
                }, e.prototype.controls = function (t) {
                    if (void 0 === t) return !!this.controls_;
                    t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
                }, e.prototype.usingNativeControls = function (t) {
                    if (void 0 === t) return !!this.usingNativeControls_;
                    t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
                }, e.prototype.error = function (t) {
                    return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new Oe(t), this.addClass("vjs-error"), Y.error("(CODE:" + this.error_.code + " " + Oe.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
                }, e.prototype.reportUserActivity = function (t) {
                    this.userActivity_ = !0
                }, e.prototype.userActive = function (t) {
                    if (void 0 === t) return this.userActive_;
                    if (t = !!t, t !== this.userActive_) {
                        if (this.userActive_ = t, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                        this.tech_ && this.tech_.one("mousemove", function (t) {
                            t.stopPropagation(), t.preventDefault()
                        }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                    }
                }, e.prototype.listenForUserActivity_ = function () {
                    var t = void 0, e = void 0, r = void 0, n = ee(this, this.reportUserActivity), o = function (t) {
                        t.screenX === e && t.screenY === r || (e = t.screenX, r = t.screenY, n())
                    }, i = function () {
                        n(), this.clearInterval(t), t = this.setInterval(n, 250)
                    }, s = function (e) {
                        n(), this.clearInterval(t)
                    };
                    this.on("mousedown", i), this.on("mousemove", o), this.on("mouseup", s), this.on("keydown", n), this.on("keyup", n);
                    var a = void 0;
                    this.setInterval(function () {
                        if (this.userActivity_) {
                            this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                            var t = this.options_.inactivityTimeout;
                            t <= 0 || (a = this.setTimeout(function () {
                                this.userActivity_ || this.userActive(!1)
                            }, t))
                        }
                    }, 250)
                }, e.prototype.playbackRate = function (t) {
                    if (void 0 === t) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
                    this.techCall_("setPlaybackRate", t)
                }, e.prototype.defaultPlaybackRate = function (t) {
                    return void 0 !== t ? this.techCall_("setDefaultPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
                }, e.prototype.isAudio = function (t) {
                    if (void 0 === t) return !!this.isAudio_;
                    this.isAudio_ = !!t
                }, e.prototype.addTextTrack = function (t, e, r) {
                    if (this.tech_) return this.tech_.addTextTrack(t, e, r)
                }, e.prototype.addRemoteTextTrack = function (t, e) {
                    if (this.tech_) return this.tech_.addRemoteTextTrack(t, e)
                }, e.prototype.removeRemoteTextTrack = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.track,
                        r = void 0 === e ? arguments[0] : e;
                    if (this.tech_) return this.tech_.removeRemoteTextTrack(r)
                }, e.prototype.getVideoPlaybackQuality = function () {
                    return this.techGet_("getVideoPlaybackQuality")
                }, e.prototype.videoWidth = function () {
                    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                }, e.prototype.videoHeight = function () {
                    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                },e.prototype.language = function (t) {
                    if (void 0 === t) return this.language_;
                    this.language_ = String(t).toLowerCase()
                },e.prototype.languages = function () {
                    return me(e.prototype.options_.languages, this.languages_)
                },e.prototype.toJSON = function () {
                    var t = me(this.options_), e = t.tracks;
                    t.tracks = [];
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n = me(n), n.player = void 0, t.tracks[r] = n
                    }
                    return t
                },e.prototype.createModal = function (t, e) {
                    var r = this;
                    e = e || {}, e.content = t || "";
                    var n = new Ve(this, e);
                    return this.addChild(n), n.on("dispose", function () {
                        r.removeChild(n)
                    }), n.open(), n
                },e.prototype.updateCurrentBreakpoint_ = function () {
                    if (this.responsive()) for (var t = this.currentBreakpoint(), e = this.currentWidth(), r = 0; r < Fo.length; r++) {
                        var n = Fo[r], o = this.breakpoints_[n];
                        if (e <= o) {
                            if (t === n) return;
                            t && this.removeClass(Bo[t]), this.addClass(Bo[n]), this.breakpoint_ = n;
                            break
                        }
                    }
                },e.prototype.removeCurrentBreakpoint_ = function () {
                    var t = this.currentBreakpointClass();
                    this.breakpoint_ = "", t && this.removeClass(t)
                },e.prototype.breakpoints = function (t) {
                    return void 0 === t ? U(this.breakpoints_) : (this.breakpoint_ = "", this.breakpoints_ = U({}, $o, t), this.updateCurrentBreakpoint_(), U(this.breakpoints_))
                },e.prototype.responsive = function (t) {
                    if (void 0 === t) return this.responsive_;
                    t = Boolean(t);
                    var e = this.responsive_;
                    return t !== e ? (this.responsive_ = t, t ? (this.on("playerresize", this.updateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), t) : void 0
                },e.prototype.currentBreakpoint = function () {
                    return this.breakpoint_
                },e.prototype.currentBreakpointClass = function () {
                    return Bo[this.breakpoint_] || ""
                },e.getTagSettings = function (t) {
                    var e = {sources: [], tracks: []}, r = ft(t), n = r["data-setup"];
                    if (ct(t, "vjs-fill") && (r.fill = !0), ct(t, "vjs-fluid") && (r.fluid = !0), null !== n) {
                        var o = a(n || "{}"), i = o[0], s = o[1];
                        i && Y.error(i), U(r, s)
                    }
                    if (U(e, r), t.hasChildNodes()) for (var l = t.childNodes, c = 0, u = l.length; c < u; c++) {
                        var h = l[c], p = h.nodeName.toLowerCase();
                        "source" === p ? e.sources.push(ft(h)) : "track" === p && e.tracks.push(ft(h))
                    }
                    return e
                },e.prototype.flexNotSupported_ = function () {
                    var t = i.createElement("i");
                    return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
                },e
            }(_e);
        _r.names.forEach(function (t) {
            var e = _r[t];
            Vo.prototype[e.getterName] = function () {
                return this.tech_ ? this.tech_[e.getterName]() : (this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName])
            }
        }), Vo.players = {};
        var Ho = o.navigator;
        Vo.prototype.options_ = {
            techOrder: Tr.defaultTechOrder_,
            html5: {},
            flash: {},
            inactivityTimeout: 2e3,
            playbackRates: [],
            children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
            language: Ho && (Ho.languages && Ho.languages[0] || Ho.userLanguage || Ho.language) || "en",
            languages: {},
            notSupportedMessage: "No compatible source was found for this media.",
            breakpoints: {},
            responsive: !1
        }, x || Vo.prototype.options_.children.push("resizeManager"), ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (t) {
            Vo.prototype[t] = function () {
                return this.techGet_(t)
            }
        }), Ro.forEach(function (t) {
            Vo.prototype["handleTech" + ve(t) + "_"] = function () {
                return this.trigger(t)
            }
        }), _e.registerComponent("Player", Vo);
        var Uo = "plugin", Wo = "activePlugins_", zo = {}, qo = function (t) {
            return zo.hasOwnProperty(t)
        }, Xo = function (t) {
            return qo(t) ? zo[t] : void 0
        }, Go = function (t, e) {
            t[Wo] = t[Wo] || {}, t[Wo][e] = !0
        }, Yo = function (t, e, r) {
            var n = (r ? "before" : "") + "pluginsetup";
            t.trigger(n, e), t.trigger(n + ":" + e.name, e)
        }, Ko = function (t, e) {
            var r = function () {
                Yo(this, {name: t, plugin: e, instance: null}, !0);
                var r = e.apply(this, arguments);
                return Go(this, t), Yo(this, {name: t, plugin: e, instance: r}), r
            };
            return Object.keys(e).forEach(function (t) {
                r[t] = e[t]
            }), r
        }, Jo = function (t, e) {
            return e.prototype.name = t, function () {
                Yo(this, {name: t, plugin: e, instance: null}, !0);
                for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                var i = new (Function.prototype.bind.apply(e, [null].concat([this].concat(n))));
                return this[t] = function () {
                    return i
                }, Yo(this, i.getEventHash()), i
            }
        }, Qo = function () {
            function t(e) {
                if (D(this, t), this.constructor === t) throw new Error("Plugin must be sub-classed; not directly instantiated.");
                this.player = e, de(this), delete this.trigger, ye(this, this.constructor.defaultState), Go(e, this.name), this.dispose = ee(this, this.dispose), e.on("dispose", this.dispose)
            }

            return t.prototype.version = function () {
                return this.constructor.VERSION
            }, t.prototype.getEventHash = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.name = this.name, t.plugin = this.constructor, t.instance = this, t
            }, t.prototype.trigger = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return qt(this.eventBusEl_, t, this.getEventHash(e))
            }, t.prototype.handleStateChanged = function (t) {
            }, t.prototype.dispose = function () {
                var t = this.name, e = this.player;
                this.trigger("dispose"), this.off(), e.off("dispose", this.dispose), e[Wo][t] = !1, this.player = this.state = null, e[t] = Jo(t, zo[t])
            }, t.isBasic = function (e) {
                var r = "string" === typeof e ? Xo(e) : e;
                return "function" === typeof r && !t.prototype.isPrototypeOf(r.prototype)
            }, t.registerPlugin = function (e, r) {
                if ("string" !== typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + ("undefined" === typeof e ? "undefined" : I(e)) + ".");
                if (qo(e)) Y.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!'); else if (Vo.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
                if ("function" !== typeof r) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + ("undefined" === typeof r ? "undefined" : I(r)) + ".");
                return zo[e] = r, e !== Uo && (t.isBasic(r) ? Vo.prototype[e] = Ko(e, r) : Vo.prototype[e] = Jo(e, r)), r
            }, t.deregisterPlugin = function (t) {
                if (t === Uo) throw new Error("Cannot de-register base plugin.");
                qo(t) && (delete zo[t], delete Vo.prototype[t])
            }, t.getPlugins = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(zo), e = void 0;
                return t.forEach(function (t) {
                    var r = Xo(t);
                    r && (e = e || {}, e[t] = r)
                }), e
            }, t.getPluginVersion = function (t) {
                var e = Xo(t);
                return e && e.VERSION || ""
            }, t
        }();
        Qo.getPlugin = Xo, Qo.BASE_PLUGIN_NAME = Uo, Qo.registerPlugin(Uo, Qo), Vo.prototype.usingPlugin = function (t) {
            return !!this[Wo] && !0 === this[Wo][t]
        }, Vo.prototype.hasPlugin = function (t) {
            return !!qo(t)
        };
        var Zo = function (t, e) {
            if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof e ? "undefined" : I(e)));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (t.super_ = e)
        }, ti = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = function () {
                t.apply(this, arguments)
            }, n = {};
            for (var o in "object" === ("undefined" === typeof e ? "undefined" : I(e)) ? (e.constructor !== Object.prototype.constructor && (r = e.constructor), n = e) : "function" === typeof e && (r = e), Zo(r, t), n) n.hasOwnProperty(o) && (r.prototype[o] = n[o]);
            return r
        };
        "undefined" === typeof HTMLVideoElement && rt() && (i.createElement("video"), i.createElement("audio"), i.createElement("track"), i.createElement("video-js"));
        var ei = function (t) {
            return 0 === t.indexOf("#") ? t.slice(1) : t
        };

        function ri(t, e, r) {
            var n = ri.getPlayer(t);
            if (n) return e && Y.warn('Player "' + t + '" is already initialised. Options will not be applied.'), r && n.ready(r), n;
            var o = "string" === typeof t ? Pt("#" + ei(t)) : t;
            if (!nt(o)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
            i.body.contains(o) || Y.warn("The element supplied is not included in the DOM"), e = e || {}, ri.hooks("beforesetup").forEach(function (t) {
                var r = t(o, me(e));
                W(r) && !Array.isArray(r) ? e = me(e, r) : Y.error("please return an object in beforesetup hooks")
            });
            var s = _e.getComponent("Player");
            return n = new s(o, e, r), ri.hooks("setup").forEach(function (t) {
                return t(n)
            }), n
        }

        if (ri.hooks_ = {}, ri.hooks = function (t, e) {
            return ri.hooks_[t] = ri.hooks_[t] || [], e && (ri.hooks_[t] = ri.hooks_[t].concat(e)), ri.hooks_[t]
        }, ri.hook = function (t, e) {
            ri.hooks(t, e)
        }, ri.hookOnce = function (t, e) {
            ri.hooks(t, [].concat(e).map(function (e) {
                var r = function r() {
                    return ri.removeHook(t, r), e.apply(void 0, arguments)
                };
                return r
            }))
        }, ri.removeHook = function (t, e) {
            var r = ri.hooks(t).indexOf(e);
            return !(r <= -1) && (ri.hooks_[t] = ri.hooks_[t].slice(), ri.hooks_[t].splice(r, 1), !0)
        }, !0 !== o.VIDEOJS_NO_DYNAMIC_STYLE && rt()) {
            var ni = Pt(".vjs-styles-defaults");
            if (!ni) {
                ni = Zt("vjs-styles-defaults");
                var oi = Pt("head");
                oi && oi.insertBefore(ni, oi.firstChild), te(ni, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
            }
        }
        Qt(1, ri), ri.VERSION = u, ri.options = Vo.prototype.options_, ri.getPlayers = function () {
            return Vo.players
        }, ri.getPlayer = function (t) {
            var e = Vo.players, r = void 0;
            if ("string" === typeof t) {
                var n = ei(t), o = e[n];
                if (o) return o;
                r = Pt("#" + n)
            } else r = t;
            if (nt(r)) {
                var i = r, s = i.player, a = i.playerId;
                if (s || e[a]) return s || e[a]
            }
        }, ri.getAllPlayers = function () {
            return Object.keys(Vo.players).map(function (t) {
                return Vo.players[t]
            }).filter(Boolean)
        }, ri.players = Vo.players, ri.getComponent = _e.getComponent, ri.registerComponent = function (t, e) {
            Tr.isTech(e) && Y.warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), _e.registerComponent.call(_e, t, e)
        }, ri.getTech = Tr.getTech, ri.registerTech = Tr.registerTech, ri.use = Er, !x && Object.defineProperty ? (Object.defineProperty(ri, "middleware", {
            value: {},
            writeable: !1,
            enumerable: !0
        }), Object.defineProperty(ri.middleware, "TERMINATOR", {
            value: wr,
            writeable: !1,
            enumerable: !0
        })) : ri.middleware = {TERMINATOR: wr}, ri.browser = N, ri.TOUCH_ENABLED = O, ri.extend = ti, ri.mergeOptions = me, ri.bind = ee, ri.registerPlugin = Qo.registerPlugin, ri.deregisterPlugin = Qo.deregisterPlugin, ri.plugin = function (t, e) {
            return Y.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), Qo.registerPlugin(t, e)
        }, ri.getPlugins = Qo.getPlugins, ri.getPlugin = Qo.getPlugin, ri.getPluginVersion = Qo.getPluginVersion, ri.addLanguage = function (t, e) {
            var r;
            return t = ("" + t).toLowerCase(), ri.options.languages = me(ri.options.languages, (r = {}, r[t] = e, r)), ri.options.languages[t]
        }, ri.log = Y, ri.createLogger = K, ri.createTimeRange = ri.createTimeRanges = ke, ri.formatTime = cn, ri.setFormatTime = an, ri.resetFormatTime = ln, ri.parseUrl = rr, ri.isCrossOrigin = ir, ri.EventTarget = oe, ri.on = Wt, ri.one = Xt, ri.off = zt, ri.trigger = qt, ri.xhr = l, ri.TextTrack = cr, ri.AudioTrack = ur, ri.VideoTrack = hr, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function (t) {
            ri[t] = function () {
                return Y.warn("videojs." + t + "() is deprecated; use videojs.dom." + t + "() instead"), Ot[t].apply(null, arguments)
            }
        }), ri.computedStyle = J, ri.dom = Ot, ri.url = sr, t.exports = ri
    }, "4de8": function (t, e) {
        t.exports = function (t) {
            return null === t || "function" !== typeof t && "object" !== typeof t
        }
    }, "53a8": function (t, e) {
        t.exports = n;
        var r = Object.prototype.hasOwnProperty;

        function n() {
            for (var t = {}, e = 0; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) r.call(n, o) && (t[o] = n[o])
            }
            return t
        }
    }, "562e": function (t, e, r) {
        "use strict";
        var n = r("0f7c"), o = r("0f01"), i = n.call(Function.call, String.prototype.replace),
            s = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
            a = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
        t.exports = function () {
            var t = o.ToString(o.CheckObjectCoercible(this));
            return i(i(t, s, ""), a, "")
        }
    }, 5975: function (t, e) {
        t.exports = function (t) {
            return t >= 0 ? 1 : -1
        }
    }, "5bcf": function (t, e, r) {
        "use strict";
        var n = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("a-drawer", {
                    attrs: {
                        title: "附件详情",
                        width: t.isMobile() ? "100%" : "460",
                        closable: "",
                        visible: t.visible,
                        destroyOnClose: ""
                    }, on: {close: t.onClose}
                }, [r("a-row", {
                    attrs: {
                        type: "flex",
                        align: "middle"
                    }
                }, [r("a-col", {attrs: {span: 24}}, [r("a-skeleton", {
                    attrs: {
                        active: "",
                        loading: t.detailLoading,
                        paragraph: {rows: 8}
                    }
                }, [r("div", {staticClass: "attach-detail-img"}, [r("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.nonsupportPreviewVisible,
                        expression: "nonsupportPreviewVisible"
                    }]
                }, [t._v("此文件不支持预览")]), r("a", {
                    attrs: {
                        href: t.attachment.path,
                        target: "_blank"
                    }
                }, [r("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.photoPreviewVisible,
                        expression: "photoPreviewVisible"
                    }], staticStyle: {width: "100%"}, attrs: {src: t.attachment.path}
                })]), r("video-player", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.videoPreviewVisible,
                        expression: "videoPreviewVisible"
                    }],
                    ref: "videoPlayer",
                    staticClass: "video-player-box",
                    staticStyle: {width: "100%"},
                    attrs: {options: t.playerOptions, playsinline: !0}
                })], 1)])], 1), r("a-divider"), r("a-col", {attrs: {span: 24}}, [r("a-skeleton", {
                    attrs: {
                        active: "",
                        loading: t.detailLoading,
                        paragraph: {rows: 8}
                    }
                }, [r("a-list", {attrs: {itemLayout: "horizontal"}}, [r("a-list-item", [r("a-list-item-meta", [t.editable ? r("template", {slot: "description"}, [r("a-input", {
                    on: {blur: t.doUpdateAttachment},
                    model: {
                        value: t.attachment.name, callback: function (e) {
                            t.$set(t.attachment, "name", e)
                        }, expression: "attachment.name"
                    }
                })], 1) : r("template", {slot: "description"}, [t._v(t._s(t.attachment.name))]), r("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [t._v("\n                附件名：\n                "), r("a", {attrs: {href: "javascript:void(0);"}}, [r("a-icon", {
                    attrs: {type: "edit"},
                    on: {click: t.handleEditName}
                })], 1)])], 2)], 1), r("a-list-item", [r("a-list-item-meta", {attrs: {description: t.attachment.mediaType}}, [r("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [t._v("附件类型：")])])], 1), r("a-list-item", [r("a-list-item-meta", {attrs: {description: t.attachment.typeProperty}}, [r("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [t._v("存储位置：")])])], 1), r("a-list-item", [r("a-list-item-meta", [r("template", {slot: "description"}, [t._v("\n                " + t._s(t._f("fileSizeFormat")(t.attachment.size)) + "\n              ")]), r("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [t._v("附件大小：")])], 2)], 1), t.photoPreviewVisible ? r("a-list-item", [r("a-list-item-meta", {attrs: {description: t.attachment.height + "x" + t.attachment.width}}, [r("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [t._v("图片尺寸：")])])], 1) : t._e(), r("a-list-item", [r("a-list-item-meta", [r("template", {slot: "description"}, [t._v("\n                " + t._s(t._f("moment")(t.attachment.createTime)) + "\n              ")]), r("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [t._v("上传日期：")])], 2)], 1), r("a-list-item", [r("a-list-item-meta", {attrs: {description: t.attachment.path}}, [r("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [t._v("\n                普通链接：\n                "), r("a", {
                    attrs: {href: "javascript:void(0);"},
                    on: {click: t.handleCopyNormalLink}
                }, [r("a-icon", {attrs: {type: "copy"}})], 1)])])], 1), t.photoPreviewVisible ? r("a-list-item", [r("a-list-item-meta", [r("span", {
                    attrs: {slot: "description"},
                    slot: "description"
                }, [t._v("![" + t._s(t.attachment.name) + "](" + t._s(t.attachment.path) + ")")]), r("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [t._v("\n                Markdown 格式：\n                "), r("a", {
                    attrs: {href: "javascript:void(0);"},
                    on: {click: t.handleCopyMarkdownLink}
                }, [r("a-icon", {attrs: {type: "copy"}})], 1)])])], 1) : t._e()], 1)], 1)], 1)], 1), r("a-divider", {staticClass: "divider-transparent"}), r("div", {staticClass: "bottom-control"}, [t.addToPhoto ? r("a-popconfirm", {
                    attrs: {
                        title: "你确定要添加到图库？",
                        okText: "确定",
                        cancelText: "取消"
                    }, on: {confirm: t.handleAddToPhoto}
                }, [r("a-button", {
                    staticStyle: {marginRight: "8px"},
                    attrs: {type: "dashed"}
                }, [t._v("添加到图库")])], 1) : t._e(), r("a-popconfirm", {
                    attrs: {
                        title: "你确定要删除该附件？",
                        okText: "确定",
                        cancelText: "取消"
                    }, on: {confirm: t.handleDeleteAttachment}
                }, [r("a-button", {attrs: {type: "danger"}}, [t._v("删除")])], 1)], 1)], 1)
            }, o = [], i = (r("28a5"), r("7f7f"), r("ac0d")), s = r("d6d3"), a = (r("fda2"), r("a796")), l = r("975e"),
            c = {
                name: "AttachmentDetailDrawer",
                mixins: [i["a"], i["b"]],
                components: {videoPlayer: s["videoPlayer"]},
                data: function () {
                    return {
                        detailLoading: !0,
                        editable: !1,
                        photo: {},
                        photoPreviewVisible: !1,
                        videoPreviewVisible: !1,
                        nonsupportPreviewVisible: !1,
                        playerOptions: {
                            muted: !0,
                            language: "zh-CN",
                            aspectRatio: "16:9",
                            fluid: !0,
                            controls: !0,
                            loop: !1,
                            playbackRates: [.7, 1, 1.5, 2],
                            sources: [{
                                type: "video/mp4",
                                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                            }],
                            poster: "/static/images/author.jpg",
                            width: document.documentElement.clientWidth,
                            notSupportedMessage: "此视频暂无法播放，请稍后再试"
                        }
                    }
                },
                model: {prop: "visible", event: "close"},
                props: {
                    attachment: {type: Object, required: !0},
                    addToPhoto: {type: Boolean, required: !1, default: !1},
                    visible: {type: Boolean, required: !1, default: !0}
                },
                created: function () {
                    this.loadSkeleton()
                },
                computed: {
                    player: function () {
                        return this.$refs.videoPlayer.player
                    }
                },
                watch: {
                    visible: function (t, e) {
                        this.$log.debug("old value", e), this.$log.debug("new value", t), t && this.loadSkeleton()
                    }, attachment: function (t, e) {
                        if (t) {
                            var r = t;
                            this.handleJudgeMediaType(r)
                        }
                    }
                },
                methods: {
                    loadSkeleton: function () {
                        var t = this;
                        this.detailLoading = !0, setTimeout(function () {
                            t.detailLoading = !1
                        }, 500)
                    }, handleDeleteAttachment: function () {
                        var t = this;
                        a["a"].delete(this.attachment.id).then(function (e) {
                            t.$message.success("删除成功！"), t.$emit("delete", t.attachment), t.onClose()
                        })
                    }, handleEditName: function () {
                        this.editable = !this.editable
                    }, doUpdateAttachment: function () {
                        var t = this;
                        this.attachment.name ? (a["a"].update(this.attachment.id, this.attachment).then(function (e) {
                            t.$log.debug("Updated attachment", e.data.data), t.$message.success("附件修改成功！")
                        }), this.editable = !1) : this.$notification["error"]({message: "提示", description: "附件名称不能为空！"})
                    }, handleCopyNormalLink: function () {
                        var t = this, e = "".concat(encodeURI(this.attachment.path));
                        this.$copyText(e).then(function (e) {
                            console.log("copy", e), t.$message.success("复制成功！")
                        }).catch(function (e) {
                            console.log("copy.err", e), t.$message.error("复制失败！")
                        })
                    }, handleCopyMarkdownLink: function () {
                        var t = this,
                            e = "![".concat(this.attachment.name, "](").concat(encodeURI(this.attachment.path), ")");
                        this.$copyText(e).then(function (e) {
                            console.log("copy", e), t.$message.success("复制成功！")
                        }).catch(function (e) {
                            console.log("copy.err", e), t.$message.error("复制失败！")
                        })
                    }, handleAddToPhoto: function () {
                        var t = this;
                        this.photo["name"] = this.attachment.name, this.photo["thumbnail"] = this.attachment.thumbPath, this.photo["url"] = this.attachment.path, this.photo["takeTime"] = (new Date).getTime(), l["a"].create(this.photo).then(function (e) {
                            t.$message.success("添加成功！"), t.photo = {}
                        })
                    }, onClose: function () {
                        this.$emit("close", !1)
                    }, handleJudgeMediaType: function (t) {
                        var e = t.mediaType;
                        if (e) {
                            var r = e.split("/")[0];
                            "video" === r || "flv" === r ? (this.videoPreviewVisible = !0, this.photoPreviewVisible = !1, this.nonsupportPreviewVisible = !1, this.$set(this.playerOptions.sources, 0, {
                                type: e,
                                src: t.path
                            }), console.log(this.playerOptions.sources)) : "image" === r ? (this.photoPreviewVisible = !0, this.videoPreviewVisible = !1, this.nonsupportPreviewVisible = !1) : (this.nonsupportPreviewVisible = !0, this.videoPreviewVisible = !1, this.photoPreviewVisible = !1)
                        }
                    }
                }
            }, u = c, h = r("2877"), p = Object(h["a"])(u, n, o, !1, null, null, null);
        e["a"] = p.exports
    }, 6444: function (t, e, r) {
        var n = r("ca9f"), o = r("d024"), i = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        };
        t.exports = function (t) {
            if (!t) return {};
            var e = {};
            return o(n(t).split("\n"), function (t) {
                var r = t.indexOf(":"), o = n(t.slice(0, r)).toLowerCase(), s = n(t.slice(r + 1));
                "undefined" === typeof e[o] ? e[o] = s : i(e[o]) ? e[o].push(s) : e[o] = [e[o], s]
            }), e
        }
    }, "688e": function (t, e, r) {
        "use strict";
        var n = "Function.prototype.bind called on incompatible ", o = Array.prototype.slice,
            i = Object.prototype.toString, s = "[object Function]";
        t.exports = function (t) {
            var e = this;
            if ("function" !== typeof e || i.call(e) !== s) throw new TypeError(n + e);
            for (var r, a = o.call(arguments, 1), l = function () {
                if (this instanceof r) {
                    var n = e.apply(this, a.concat(o.call(arguments)));
                    return Object(n) === n ? n : this
                }
                return e.apply(t, a.concat(o.call(arguments)))
            }, c = Math.max(0, e.length - a.length), u = [], h = 0; h < c; h++) u.push("$" + h);
            if (r = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(l), e.prototype) {
                var p = function () {
                };
                p.prototype = e.prototype, r.prototype = new p, p.prototype = null
            }
            return r
        }
    }, 8362: function (t, e) {
        t.exports = n;
        var r = Object.prototype.toString;

        function n(t) {
            var e = r.call(t);
            return "[object Function]" === e || "function" === typeof t && "[object RegExp]" !== e || "undefined" !== typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
        }
    }, "8c10": function (t, e) {
        function r(t, e) {
            var r, n = null;
            try {
                r = JSON.parse(t, e)
            } catch (o) {
                n = o
            }
            return [n, r]
        }

        t.exports = r
    }, "975e": function (t, e, r) {
        "use strict";
        var n = r("9efd"), o = "/api/admin/photos", i = {
            query: function (t) {
                return Object(n["a"])({url: o, params: t, method: "get"})
            }, create: function (t) {
                return Object(n["a"])({url: o, data: t, method: "post"})
            }, update: function (t, e) {
                return Object(n["a"])({url: "".concat(o, "/").concat(t), method: "put", data: e})
            }, delete: function (t) {
                return Object(n["a"])({url: "".concat(o, "/").concat(t), method: "delete"})
            }, listTeams: function () {
                return Object(n["a"])({url: "".concat(o, "/teams"), method: "get"})
            }
        };
        e["a"] = i
    }, a0d3: function (t, e, r) {
        "use strict";
        var n = r("0f7c");
        t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
    }, a796: function (t, e, r) {
        "use strict";
        var n = r("bc3a"), o = r.n(n), i = r("9efd"), s = "/api/admin/attachments", a = {
            query: function (t) {
                return Object(i["a"])({url: s, params: t, method: "get"})
            }, get: function (t) {
                return Object(i["a"])({url: "".concat(s, "/").concat(t), method: "get"})
            }, delete: function (t) {
                return Object(i["a"])({url: "".concat(s, "/").concat(t), method: "delete"})
            }, update: function (t, e) {
                return Object(i["a"])({url: "".concat(s, "/").concat(t), method: "put", data: e})
            }, getMediaTypes: function () {
                return Object(i["a"])({url: "".concat(s, "/media_types"), method: "get"})
            }
        };
        a.CancelToken = o.a.CancelToken, a.isCancel = o.a.isCancel, a.upload = function (t, e, r) {
            return Object(i["a"])({
                url: "".concat(s, "/upload"),
                timeout: 864e4,
                data: t,
                onUploadProgress: e,
                cancelToken: r,
                method: "post"
            })
        }, a.uploads = function (t, e, r) {
            return Object(i["a"])({
                url: "".concat(s, "/uploads"),
                timeout: 864e4,
                data: t,
                onUploadProgress: e,
                cancelToken: r,
                method: "post"
            })
        }, a.type = {
            LOCAL: {type: "local", text: "本地"},
            SMMS: {type: "smms", text: "SM.MS"},
            UPYUN: {type: "upyun", text: "又拍云"},
            QNYUN: {type: "qnyun", text: "七牛云"},
            ALIYUN: {type: "aliyun", text: "阿里云"},
            BAIDUYUN: {type: "baiduyun", text: "百度云"},
            TENCENTYUN: {type: "tencentyun", text: "腾讯云"}
        }, e["a"] = a
    }, b03c: function (t, e) {
        var r = "auto", n = {"": !0, lr: !0, rl: !0}, o = {start: !0, middle: !0, end: !0, left: !0, right: !0};

        function i(t) {
            if ("string" !== typeof t) return !1;
            var e = n[t.toLowerCase()];
            return !!e && t.toLowerCase()
        }

        function s(t) {
            if ("string" !== typeof t) return !1;
            var e = o[t.toLowerCase()];
            return !!e && t.toLowerCase()
        }

        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) t[n] = r[n]
            }
            return t
        }

        function l(t, e, n) {
            var o = this, l = /MSIE\s8\.0/.test(navigator.userAgent), c = {};
            l ? o = document.createElement("custom") : c.enumerable = !0, o.hasBeenReset = !1;
            var u = "", h = !1, p = t, d = e, f = n, y = null, v = "", g = !0, m = "auto", _ = "start", b = 50,
                T = "middle", C = 50, k = "middle";
            if (Object.defineProperty(o, "id", a({}, c, {
                get: function () {
                    return u
                }, set: function (t) {
                    u = "" + t
                }
            })), Object.defineProperty(o, "pauseOnExit", a({}, c, {
                get: function () {
                    return h
                }, set: function (t) {
                    h = !!t
                }
            })), Object.defineProperty(o, "startTime", a({}, c, {
                get: function () {
                    return p
                }, set: function (t) {
                    if ("number" !== typeof t) throw new TypeError("Start time must be set to a number.");
                    p = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "endTime", a({}, c, {
                get: function () {
                    return d
                }, set: function (t) {
                    if ("number" !== typeof t) throw new TypeError("End time must be set to a number.");
                    d = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "text", a({}, c, {
                get: function () {
                    return f
                }, set: function (t) {
                    f = "" + t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "region", a({}, c, {
                get: function () {
                    return y
                }, set: function (t) {
                    y = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "vertical", a({}, c, {
                get: function () {
                    return v
                }, set: function (t) {
                    var e = i(t);
                    if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                    v = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "snapToLines", a({}, c, {
                get: function () {
                    return g
                }, set: function (t) {
                    g = !!t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "line", a({}, c, {
                get: function () {
                    return m
                }, set: function (t) {
                    if ("number" !== typeof t && t !== r) throw new SyntaxError("An invalid number or illegal string was specified.");
                    m = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "lineAlign", a({}, c, {
                get: function () {
                    return _
                }, set: function (t) {
                    var e = s(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    _ = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "position", a({}, c, {
                get: function () {
                    return b
                }, set: function (t) {
                    if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                    b = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "positionAlign", a({}, c, {
                get: function () {
                    return T
                }, set: function (t) {
                    var e = s(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    T = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "size", a({}, c, {
                get: function () {
                    return C
                }, set: function (t) {
                    if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                    C = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(o, "align", a({}, c, {
                get: function () {
                    return k
                }, set: function (t) {
                    var e = s(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    k = e, this.hasBeenReset = !0
                }
            })), o.displayState = void 0, l) return o
        }

        l.prototype.getCueAsHTML = function () {
            return WebVTT.convertCueToDOMTree(window, this.text)
        }, t.exports = l
    }, b189: function (t, e, r) {
        "use strict";
        var n;
        if (!Object.keys) {
            var o = Object.prototype.hasOwnProperty, i = Object.prototype.toString, s = r("d4ab"),
                a = Object.prototype.propertyIsEnumerable, l = !a.call({toString: null}, "toString"),
                c = a.call(function () {
                }, "prototype"),
                u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                h = function (t) {
                    var e = t.constructor;
                    return e && e.prototype === t
                }, p = {
                    $applicationCache: !0,
                    $console: !0,
                    $external: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $innerHeight: !0,
                    $innerWidth: !0,
                    $onmozfullscreenchange: !0,
                    $onmozfullscreenerror: !0,
                    $outerHeight: !0,
                    $outerWidth: !0,
                    $pageXOffset: !0,
                    $pageYOffset: !0,
                    $parent: !0,
                    $scrollLeft: !0,
                    $scrollTop: !0,
                    $scrollX: !0,
                    $scrollY: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                }, d = function () {
                    if ("undefined" === typeof window) return !1;
                    for (var t in window) try {
                        if (!p["$" + t] && o.call(window, t) && null !== window[t] && "object" === typeof window[t]) try {
                            h(window[t])
                        } catch (e) {
                            return !0
                        }
                    } catch (e) {
                        return !0
                    }
                    return !1
                }(), f = function (t) {
                    if ("undefined" === typeof window || !d) return h(t);
                    try {
                        return h(t)
                    } catch (e) {
                        return !1
                    }
                };
            n = function (t) {
                var e = null !== t && "object" === typeof t, r = "[object Function]" === i.call(t), n = s(t),
                    a = e && "[object String]" === i.call(t), h = [];
                if (!e && !r && !n) throw new TypeError("Object.keys called on a non-object");
                var p = c && r;
                if (a && t.length > 0 && !o.call(t, 0)) for (var d = 0; d < t.length; ++d) h.push(String(d));
                if (n && t.length > 0) for (var y = 0; y < t.length; ++y) h.push(String(y)); else for (var v in t) p && "prototype" === v || !o.call(t, v) || h.push(String(v));
                if (l) for (var g = f(t), m = 0; m < u.length; ++m) g && "constructor" === u[m] || !o.call(t, u[m]) || h.push(u[m]);
                return h
            }
        }
        t.exports = n
    }, b3fd: function (t, e, r) {
        "use strict";
        var n = r("f367"), o = r("1b7f");
        t.exports = function () {
            var t = o();
            return n(String.prototype, {trim: t}, {
                trim: function () {
                    return String.prototype.trim !== t
                }
            }), t
        }
    }, bb53: function (t, e) {
        t.exports = function (t, e) {
            var r = t % e;
            return Math.floor(r >= 0 ? r : r + e)
        }
    }, be09: function (t, e, r) {
        (function (e) {
            var r;
            r = "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : "undefined" !== typeof self ? self : {}, t.exports = r
        }).call(this, r("c8ba"))
    }, c46d: function (t, e, r) {
        "use strict";
        var n = r("e9ac"), o = n("%TypeError%"), i = n("%SyntaxError%"), s = r("a0d3"), a = {
            "Property Descriptor": function (t, e) {
                if ("Object" !== t.Type(e)) return !1;
                var r = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                for (var n in e) if (s(e, n) && !r[n]) return !1;
                var i = s(e, "[[Value]]"), a = s(e, "[[Get]]") || s(e, "[[Set]]");
                if (i && a) throw new o("Property Descriptors may not be both accessor and data descriptors");
                return !0
            }
        };
        t.exports = function (t, e, r, n) {
            var s = a[e];
            if ("function" !== typeof s) throw new i("unknown record type: " + e);
            if (!s(t, n)) throw new o(r + " must be a " + e);
            console.log(s(t, n), n)
        }
    }, c612: function (t, e) {
        var r = Number.isNaN || function (t) {
            return t !== t
        };
        t.exports = Number.isFinite || function (t) {
            return "number" === typeof t && !r(t) && t !== 1 / 0 && t !== -1 / 0
        }
    }, ca9f: function (t, e, r) {
        "use strict";
        var n = r("0f7c"), o = r("f367"), i = r("562e"), s = r("1b7f"), a = r("b3fd"), l = n.call(Function.call, s());
        o(l, {getPolyfill: s, implementation: i, shim: a}), t.exports = l
    }, d024: function (t, e, r) {
        "use strict";
        var n = r("21d0"), o = Object.prototype.toString, i = Object.prototype.hasOwnProperty, s = function (t, e, r) {
            for (var n = 0, o = t.length; n < o; n++) i.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t))
        }, a = function (t, e, r) {
            for (var n = 0, o = t.length; n < o; n++) null == r ? e(t.charAt(n), n, t) : e.call(r, t.charAt(n), n, t)
        }, l = function (t, e, r) {
            for (var n in t) i.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t))
        }, c = function (t, e, r) {
            if (!n(e)) throw new TypeError("iterator must be a function");
            var i;
            arguments.length >= 3 && (i = r), "[object Array]" === o.call(t) ? s(t, e, i) : "string" === typeof t ? a(t, e, i) : l(t, e, i)
        };
        t.exports = c
    }, d02c4: function (t, e) {
        var r = Object.create || function () {
            function t() {
            }

            return function (e) {
                if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                return t.prototype = e, new t
            }
        }();

        function n(t, e) {
            this.name = "ParsingError", this.code = t.code, this.message = e || t.message
        }

        function o(t) {
            function e(t, e, r, n) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + (0 | n) / 1e3
            }

            var r = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return r ? r[3] ? e(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? e(r[1], r[2], 0, r[4]) : e(0, r[1], r[2], r[4]) : null
        }

        function i() {
            this.values = r(null)
        }

        function s(t, e, r, n) {
            var o = n ? t.split(n) : [t];
            for (var i in o) if ("string" === typeof o[i]) {
                var s = o[i].split(r);
                if (2 === s.length) {
                    var a = s[0], l = s[1];
                    e(a, l)
                }
            }
        }

        function a(t, e, r) {
            var a = t;

            function l() {
                var e = o(t);
                if (null === e) throw new n(n.Errors.BadTimeStamp, "Malformed timestamp: " + a);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
            }

            function c(t, e) {
                var n = new i;
                s(t, function (t, e) {
                    switch (t) {
                        case"region":
                            for (var o = r.length - 1; o >= 0; o--) if (r[o].id === e) {
                                n.set(t, r[o].region);
                                break
                            }
                            break;
                        case"vertical":
                            n.alt(t, e, ["rl", "lr"]);
                            break;
                        case"line":
                            var i = e.split(","), s = i[0];
                            n.integer(t, s), n.percent(t, s) && n.set("snapToLines", !1), n.alt(t, s, ["auto"]), 2 === i.length && n.alt("lineAlign", i[1], ["start", "middle", "end"]);
                            break;
                        case"position":
                            i = e.split(","), n.percent(t, i[0]), 2 === i.length && n.alt("positionAlign", i[1], ["start", "middle", "end"]);
                            break;
                        case"size":
                            n.percent(t, e);
                            break;
                        case"align":
                            n.alt(t, e, ["start", "middle", "end", "left", "right"]);
                            break
                    }
                }, /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", ""), e.line = n.get("line", "auto"), e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100), e.align = n.get("align", "middle"), e.position = n.get("position", {
                    start: 0,
                    left: 0,
                    middle: 50,
                    end: 100,
                    right: 100
                }, e.align), e.positionAlign = n.get("positionAlign", {
                    start: "start",
                    left: "start",
                    middle: "middle",
                    end: "end",
                    right: "end"
                }, e.align)
            }

            function u() {
                t = t.replace(/^\s+/, "")
            }

            if (u(), e.startTime = l(), u(), "--\x3e" !== t.substr(0, 3)) throw new n(n.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + a);
            t = t.substr(3), u(), e.endTime = l(), u(), c(t, e)
        }

        n.prototype = r(Error.prototype), n.prototype.constructor = n, n.Errors = {
            BadSignature: {
                code: 0,
                message: "Malformed WebVTT signature."
            }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
        }, i.prototype = {
            set: function (t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            }, get: function (t, e, r) {
                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
            }, has: function (t) {
                return t in this.values
            }, alt: function (t, e, r) {
                for (var n = 0; n < r.length; ++n) if (e === r[n]) {
                    this.set(t, e);
                    break
                }
            }, integer: function (t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            }, percent: function (t, e) {
                return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e), e >= 0 && e <= 100)) && (this.set(t, e), !0)
            }
        };
        var l = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " "},
            c = {c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span"},
            u = {v: "title", lang: "lang"}, h = {rt: "ruby"};

        function p(t, e) {
            function r() {
                if (!e) return null;

                function t(t) {
                    return e = e.substr(t.length), t
                }

                var r = e.match(/^([^<]*)(<[^>]*>?)?/);
                return t(r[1] ? r[1] : r[2])
            }

            function n(t) {
                return l[t]
            }

            function i(t) {
                while (m = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)) t = t.replace(m[0], n);
                return t
            }

            function s(t, e) {
                return !h[e.localName] || h[e.localName] === t.localName
            }

            function a(e, r) {
                var n = c[e];
                if (!n) return null;
                var o = t.document.createElement(n);
                o.localName = n;
                var i = u[e];
                return i && r && (o[i] = r.trim()), o
            }

            var p, d = t.document.createElement("div"), f = d, y = [];
            while (null !== (p = r())) if ("<" !== p[0]) f.appendChild(t.document.createTextNode(i(p))); else {
                if ("/" === p[1]) {
                    y.length && y[y.length - 1] === p.substr(2).replace(">", "") && (y.pop(), f = f.parentNode);
                    continue
                }
                var v, g = o(p.substr(1, p.length - 2));
                if (g) {
                    v = t.document.createProcessingInstruction("timestamp", g), f.appendChild(v);
                    continue
                }
                var m = p.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!m) continue;
                if (v = a(m[1], m[3]), !v) continue;
                if (!s(f, v)) continue;
                m[2] && (v.className = m[2].substr(1).replace(".", " ")), y.push(m[1]), f.appendChild(v), f = v
            }
            return d
        }

        var d = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];

        function f(t) {
            for (var e = 0; e < d.length; e++) {
                var r = d[e];
                if (t >= r[0] && t <= r[1]) return !0
            }
            return !1
        }

        function y(t) {
            var e, r = [], n = "";
            if (!t || !t.childNodes) return "ltr";

            function o(t, e) {
                for (var r = e.childNodes.length - 1; r >= 0; r--) t.push(e.childNodes[r])
            }

            function i(t) {
                if (!t || !t.length) return null;
                var e = t.pop(), r = e.textContent || e.innerText;
                if (r) {
                    var n = r.match(/^.*(\n|\r)/);
                    return n ? (t.length = 0, n[0]) : r
                }
                return "ruby" === e.tagName ? i(t) : e.childNodes ? (o(t, e), i(t)) : void 0
            }

            o(r, t);
            while (n = i(r)) for (var s = 0; s < n.length; s++) if (e = n.charCodeAt(s), f(e)) return "rtl";
            return "ltr"
        }

        function v(t) {
            if ("number" === typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
            if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
            for (var e = t.track, r = e.textTrackList, n = 0, o = 0; o < r.length && r[o] !== e; o++) "showing" === r[o].mode && n++;
            return -1 * ++n
        }

        function g() {
        }

        function m(t, e, r) {
            var n = /MSIE\s8\.0/.test(navigator.userAgent), o = "rgba(255, 255, 255, 1)", i = "rgba(0, 0, 0, 0.8)";
            n && (o = "rgb(255, 255, 255)", i = "rgb(0, 0, 0)"), g.call(this), this.cue = e, this.cueDiv = p(t, e.text);
            var s = {
                color: o,
                backgroundColor: i,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "inline"
            };
            n || (s.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", s.unicodeBidi = "plaintext"), this.applyStyles(s, this.cueDiv), this.div = t.document.createElement("div"), s = {
                textAlign: "middle" === e.align ? "center" : e.align,
                font: r.font,
                whiteSpace: "pre-line",
                position: "absolute"
            }, n || (s.direction = y(this.cueDiv), s.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(s), this.div.appendChild(this.cueDiv);
            var a = 0;
            switch (e.positionAlign) {
                case"start":
                    a = e.position;
                    break;
                case"middle":
                    a = e.position - e.size / 2;
                    break;
                case"end":
                    a = e.position - e.size;
                    break
            }
            "" === e.vertical ? this.applyStyles({
                left: this.formatStyle(a, "%"),
                width: this.formatStyle(e.size, "%")
            }) : this.applyStyles({
                top: this.formatStyle(a, "%"),
                height: this.formatStyle(e.size, "%")
            }), this.move = function (t) {
                this.applyStyles({
                    top: this.formatStyle(t.top, "px"),
                    bottom: this.formatStyle(t.bottom, "px"),
                    left: this.formatStyle(t.left, "px"),
                    right: this.formatStyle(t.right, "px"),
                    height: this.formatStyle(t.height, "px"),
                    width: this.formatStyle(t.width, "px")
                })
            }
        }

        function _(t) {
            var e, r, n, o, i = /MSIE\s8\.0/.test(navigator.userAgent);
            if (t.div) {
                r = t.div.offsetHeight, n = t.div.offsetWidth, o = t.div.offsetTop;
                var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
                t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
            }
            this.left = t.left, this.right = t.right, this.top = t.top || o, this.height = t.height || r, this.bottom = t.bottom || o + (t.height || r), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight, i && !this.lineHeight && (this.lineHeight = 13)
        }

        function b(t, e, r, n) {
            function o(t, e) {
                for (var o, i = new _(t), s = 1, a = 0; a < e.length; a++) {
                    while (t.overlapsOppositeAxis(r, e[a]) || t.within(r) && t.overlapsAny(n)) t.move(e[a]);
                    if (t.within(r)) return t;
                    var l = t.intersectPercentage(r);
                    s > l && (o = new _(t), s = l), t = new _(i)
                }
                return o || i
            }

            var i = new _(e), s = e.cue, a = v(s), l = [];
            if (s.snapToLines) {
                var c;
                switch (s.vertical) {
                    case"":
                        l = ["+y", "-y"], c = "height";
                        break;
                    case"rl":
                        l = ["+x", "-x"], c = "width";
                        break;
                    case"lr":
                        l = ["-x", "+x"], c = "width";
                        break
                }
                var u = i.lineHeight, h = u * Math.round(a), p = r[c] + u, d = l[0];
                Math.abs(h) > p && (h = h < 0 ? -1 : 1, h *= Math.ceil(p / u) * u), a < 0 && (h += "" === s.vertical ? r.height : r.width, l = l.reverse()), i.move(d, h)
            } else {
                var f = i.lineHeight / r.height * 100;
                switch (s.lineAlign) {
                    case"middle":
                        a -= f / 2;
                        break;
                    case"end":
                        a -= f;
                        break
                }
                switch (s.vertical) {
                    case"":
                        e.applyStyles({top: e.formatStyle(a, "%")});
                        break;
                    case"rl":
                        e.applyStyles({left: e.formatStyle(a, "%")});
                        break;
                    case"lr":
                        e.applyStyles({right: e.formatStyle(a, "%")});
                        break
                }
                l = ["+y", "-x", "+x", "-y"], i = new _(e)
            }
            var y = o(i, l);
            e.move(y.toCSSCompatValues(r))
        }

        function T() {
        }

        g.prototype.applyStyles = function (t, e) {
            for (var r in e = e || this.div, t) t.hasOwnProperty(r) && (e.style[r] = t[r])
        }, g.prototype.formatStyle = function (t, e) {
            return 0 === t ? 0 : t + e
        }, m.prototype = r(g.prototype), m.prototype.constructor = m, _.prototype.move = function (t, e) {
            switch (e = void 0 !== e ? e : this.lineHeight, t) {
                case"+x":
                    this.left += e, this.right += e;
                    break;
                case"-x":
                    this.left -= e, this.right -= e;
                    break;
                case"+y":
                    this.top += e, this.bottom += e;
                    break;
                case"-y":
                    this.top -= e, this.bottom -= e;
                    break
            }
        }, _.prototype.overlaps = function (t) {
            return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
        }, _.prototype.overlapsAny = function (t) {
            for (var e = 0; e < t.length; e++) if (this.overlaps(t[e])) return !0;
            return !1
        }, _.prototype.within = function (t) {
            return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
        }, _.prototype.overlapsOppositeAxis = function (t, e) {
            switch (e) {
                case"+x":
                    return this.left < t.left;
                case"-x":
                    return this.right > t.right;
                case"+y":
                    return this.top < t.top;
                case"-y":
                    return this.bottom > t.bottom
            }
        }, _.prototype.intersectPercentage = function (t) {
            var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)),
                r = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)), n = e * r;
            return n / (this.height * this.width)
        }, _.prototype.toCSSCompatValues = function (t) {
            return {
                top: this.top - t.top,
                bottom: t.bottom - this.bottom,
                left: this.left - t.left,
                right: t.right - this.right,
                height: this.height,
                width: this.width
            }
        }, _.getSimpleBoxPosition = function (t) {
            var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
                r = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
            t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
            var o = {
                left: t.left,
                right: t.right,
                top: t.top || n,
                height: t.height || e,
                bottom: t.bottom || n + (t.height || e),
                width: t.width || r
            };
            return o
        }, T.StringDecoder = function () {
            return {
                decode: function (t) {
                    if (!t) return "";
                    if ("string" !== typeof t) throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(t))
                }
            }
        }, T.convertCueToDOMTree = function (t, e) {
            return t && e ? p(t, e) : null
        };
        var C = .05, k = "sans-serif", w = "1.5%";
        T.processCues = function (t, e, r) {
            if (!t || !e || !r) return null;
            while (r.firstChild) r.removeChild(r.firstChild);
            var n = t.document.createElement("div");

            function o(t) {
                for (var e = 0; e < t.length; e++) if (t[e].hasBeenReset || !t[e].displayState) return !0;
                return !1
            }

            if (n.style.position = "absolute", n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.margin = w, r.appendChild(n), o(e)) {
                var i = [], s = _.getSimpleBoxPosition(n), a = Math.round(s.height * C * 100) / 100,
                    l = {font: a + "px " + k};
                (function () {
                    for (var r, o, a = 0; a < e.length; a++) o = e[a], r = new m(t, o, l), n.appendChild(r.div), b(t, r, s, i), o.displayState = r.div, i.push(_.getSimpleBoxPosition(r))
                })()
            } else for (var c = 0; c < e.length; c++) n.appendChild(e[c].displayState)
        }, T.Parser = function (t, e, r) {
            r || (r = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = r || new TextDecoder("utf8"), this.regionList = []
        }, T.Parser.prototype = {
            reportOrThrowError: function (t) {
                if (!(t instanceof n)) throw t;
                this.onparsingerror && this.onparsingerror(t)
            }, parse: function (t) {
                var e = this;

                function r() {
                    var t = e.buffer, r = 0;
                    while (r < t.length && "\r" !== t[r] && "\n" !== t[r]) ++r;
                    var n = t.substr(0, r);
                    return "\r" === t[r] && ++r, "\n" === t[r] && ++r, e.buffer = t.substr(r), n
                }

                function l(t) {
                    var r = new i;
                    if (s(t, function (t, e) {
                        switch (t) {
                            case"id":
                                r.set(t, e);
                                break;
                            case"width":
                                r.percent(t, e);
                                break;
                            case"lines":
                                r.integer(t, e);
                                break;
                            case"regionanchor":
                            case"viewportanchor":
                                var n = e.split(",");
                                if (2 !== n.length) break;
                                var o = new i;
                                if (o.percent("x", n[0]), o.percent("y", n[1]), !o.has("x") || !o.has("y")) break;
                                r.set(t + "X", o.get("x")), r.set(t + "Y", o.get("y"));
                                break;
                            case"scroll":
                                r.alt(t, e, ["up"]);
                                break
                        }
                    }, /=/, /\s/), r.has("id")) {
                        var n = new (e.vttjs.VTTRegion || e.window.VTTRegion);
                        n.width = r.get("width", 100), n.lines = r.get("lines", 3), n.regionAnchorX = r.get("regionanchorX", 0), n.regionAnchorY = r.get("regionanchorY", 100), n.viewportAnchorX = r.get("viewportanchorX", 0), n.viewportAnchorY = r.get("viewportanchorY", 100), n.scroll = r.get("scroll", ""), e.onregion && e.onregion(n), e.regionList.push({
                            id: r.get("id"),
                            region: n
                        })
                    }
                }

                function c(t) {
                    var r = new i;
                    s(t, function (t, e) {
                        switch (t) {
                            case"MPEGT":
                                r.integer(t + "S", e);
                                break;
                            case"LOCA":
                                r.set(t + "L", o(e));
                                break
                        }
                    }, /[^\d]:/, /,/), e.ontimestampmap && e.ontimestampmap({
                        MPEGTS: r.get("MPEGTS"),
                        LOCAL: r.get("LOCAL")
                    })
                }

                function u(t) {
                    t.match(/X-TIMESTAMP-MAP/) ? s(t, function (t, e) {
                        switch (t) {
                            case"X-TIMESTAMP-MAP":
                                c(e);
                                break
                        }
                    }, /=/) : s(t, function (t, e) {
                        switch (t) {
                            case"Region":
                                l(e);
                                break
                        }
                    }, /:/)
                }

                t && (e.buffer += e.decoder.decode(t, {stream: !0}));
                try {
                    var h;
                    if ("INITIAL" === e.state) {
                        if (!/\r\n|\n/.test(e.buffer)) return this;
                        h = r();
                        var p = h.match(/^WEBVTT([ \t].*)?$/);
                        if (!p || !p[0]) throw new n(n.Errors.BadSignature);
                        e.state = "HEADER"
                    }
                    var d = !1;
                    while (e.buffer) {
                        if (!/\r\n|\n/.test(e.buffer)) return this;
                        switch (d ? d = !1 : h = r(), e.state) {
                            case"HEADER":
                                /:/.test(h) ? u(h) : h || (e.state = "ID");
                                continue;
                            case"NOTE":
                                h || (e.state = "ID");
                                continue;
                            case"ID":
                                if (/^NOTE($|[ \t])/.test(h)) {
                                    e.state = "NOTE";
                                    break
                                }
                                if (!h) continue;
                                if (e.cue = new (e.vttjs.VTTCue || e.window.VTTCue)(0, 0, ""), e.state = "CUE", -1 === h.indexOf("--\x3e")) {
                                    e.cue.id = h;
                                    continue
                                }
                            case"CUE":
                                try {
                                    a(h, e.cue, e.regionList)
                                } catch (y) {
                                    e.reportOrThrowError(y), e.cue = null, e.state = "BADCUE";
                                    continue
                                }
                                e.state = "CUETEXT";
                                continue;
                            case"CUETEXT":
                                var f = -1 !== h.indexOf("--\x3e");
                                if (!h || f && (d = !0)) {
                                    e.oncue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                    continue
                                }
                                e.cue.text && (e.cue.text += "\n"), e.cue.text += h;
                                continue;
                            case"BADCUE":
                                h || (e.state = "ID");
                                continue
                        }
                    }
                } catch (y) {
                    e.reportOrThrowError(y), "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            }, flush: function () {
                var t = this;
                try {
                    if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new n(n.Errors.BadSignature)
                } catch (e) {
                    t.reportOrThrowError(e)
                }
                return t.onflush && t.onflush(), this
            }
        }, t.exports = T
    }, d4ab: function (t, e, r) {
        "use strict";
        var n = Object.prototype.toString;
        t.exports = function (t) {
            var e = n.call(t), r = "[object Arguments]" === e;
            return r || (r = "[object Array]" !== e && null !== t && "object" === typeof t && "number" === typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), r
        }
    }, d6c7: function (t, e, r) {
        "use strict";
        var n = Array.prototype.slice, o = r("d4ab"), i = Object.keys, s = i ? function (t) {
            return i(t)
        } : r("b189"), a = Object.keys;
        s.shim = function () {
            if (Object.keys) {
                var t = function () {
                    var t = Object.keys(arguments);
                    return t && t.length === arguments.length
                }(1, 2);
                t || (Object.keys = function (t) {
                    return o(t) ? a(n.call(t)) : a(t)
                })
            } else Object.keys = s;
            return Object.keys || s
        }, t.exports = s
    }, d6d3: function (t, e, r) {
        !function (e, n) {
            t.exports = n(r("3d33"))
        }(0, function (t) {
            return function (t) {
                function e(n) {
                    if (r[n]) return r[n].exports;
                    var o = r[n] = {i: n, l: !1, exports: {}};
                    return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
                }

                var r = {};
                return e.m = t, e.c = r, e.i = function (t) {
                    return t
                }, e.d = function (t, r, n) {
                    e.o(t, r) || Object.defineProperty(t, r, {configurable: !1, enumerable: !0, get: n})
                }, e.n = function (t) {
                    var r = t && t.__esModule ? function () {
                        return t.default
                    } : function () {
                        return t
                    };
                    return e.d(r, "a", r), r
                }, e.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "/", e(e.s = 3)
            }([function (e, r) {
                e.exports = t
            }, function (t, e, r) {
                "use strict";

                function n(t, e, r) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = r, t
                }

                Object.defineProperty(e, "__esModule", {value: !0});
                var o = r(0), i = function (t) {
                    return t && t.__esModule ? t : {default: t}
                }(o), s = window.videojs || i.default;
                "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                    value: function (t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        for (var r = Object(t), n = 1; n < arguments.length; n++) {
                            var o = arguments[n];
                            if (null != o) for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
                        }
                        return r
                    }, writable: !0, configurable: !0
                });
                var a = ["loadeddata", "canplay", "canplaythrough", "play", "pause", "waiting", "playing", "ended", "error"];
                e.default = {
                    name: "video-player",
                    props: {
                        start: {type: Number, default: 0},
                        crossOrigin: {type: String, default: ""},
                        playsinline: {type: Boolean, default: !1},
                        customEventName: {type: String, default: "statechanged"},
                        options: {type: Object, required: !0},
                        events: {
                            type: Array, default: function () {
                                return []
                            }
                        },
                        globalOptions: {
                            type: Object, default: function () {
                                return {
                                    controls: !0,
                                    controlBar: {
                                        remainingTimeDisplay: !1,
                                        playToggle: {},
                                        progressControl: {},
                                        fullscreenToggle: {},
                                        volumeMenuButton: {inline: !1, vertical: !0}
                                    },
                                    techOrder: ["html5"],
                                    plugins: {}
                                }
                            }
                        },
                        globalEvents: {
                            type: Array, default: function () {
                                return []
                            }
                        }
                    },
                    data: function () {
                        return {player: null, reseted: !0}
                    },
                    mounted: function () {
                        this.player || this.initialize()
                    },
                    beforeDestroy: function () {
                        this.player && this.dispose()
                    },
                    methods: {
                        initialize: function () {
                            var t = this, e = Object.assign({}, this.globalOptions, this.options);
                            this.playsinline && (this.$refs.video.setAttribute("playsinline", this.playsinline), this.$refs.video.setAttribute("webkit-playsinline", this.playsinline), this.$refs.video.setAttribute("x5-playsinline", this.playsinline), this.$refs.video.setAttribute("x5-video-player-type", "h5"), this.$refs.video.setAttribute("x5-video-player-fullscreen", !1)), "" !== this.crossOrigin && (this.$refs.video.crossOrigin = this.crossOrigin, this.$refs.video.setAttribute("crossOrigin", this.crossOrigin));
                            var r = function (e, r) {
                                e && t.$emit(e, t.player), r && t.$emit(t.customEventName, n({}, e, r))
                            };
                            e.plugins && delete e.plugins.__ob__;
                            var o = this;
                            this.player = s(this.$refs.video, e, function () {
                                for (var t = this, e = a.concat(o.events).concat(o.globalEvents), n = {}, i = 0; i < e.length; i++) "string" == typeof e[i] && void 0 === n[e[i]] && function (e) {
                                    n[e] = null, t.on(e, function () {
                                        r(e, !0)
                                    })
                                }(e[i]);
                                this.on("timeupdate", function () {
                                    r("timeupdate", this.currentTime())
                                }), o.$emit("ready", this)
                            })
                        }, dispose: function (t) {
                            var e = this;
                            this.player && this.player.dispose && ("Flash" !== this.player.techName_ && this.player.pause && this.player.pause(), this.player.dispose(), this.player = null, this.$nextTick(function () {
                                e.reseted = !1, e.$nextTick(function () {
                                    e.reseted = !0, e.$nextTick(function () {
                                        t && t()
                                    })
                                })
                            }))
                        }
                    },
                    watch: {
                        options: {
                            deep: !0, handler: function (t, e) {
                                var r = this;
                                this.dispose(function () {
                                    t && t.sources && t.sources.length && r.initialize()
                                })
                            }
                        }
                    }
                }
            }, function (t, e, r) {
                "use strict";
                Object.defineProperty(e, "__esModule", {value: !0});
                var n = r(1), o = r.n(n);
                for (var i in n) ["default", "default"].indexOf(i) < 0 && function (t) {
                    r.d(e, t, function () {
                        return n[t]
                    })
                }(i);
                var s = r(5), a = r(4), l = a(o.a, s.a, !1, null, null, null);
                e.default = l.exports
            }, function (t, e, r) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                Object.defineProperty(e, "__esModule", {value: !0}), e.install = e.videoPlayer = e.videojs = void 0;
                var o = r(0), i = n(o), s = r(2), a = n(s), l = window.videojs || i.default, c = function (t, e) {
                    e && (e.options && (a.default.props.globalOptions.default = function () {
                        return e.options
                    }), e.events && (a.default.props.globalEvents.default = function () {
                        return e.events
                    })), t.component(a.default.name, a.default)
                }, u = {videojs: l, videoPlayer: a.default, install: c};
                e.default = u, e.videojs = l, e.videoPlayer = a.default, e.install = c
            }, function (t, e) {
                t.exports = function (t, e, r, n, o, i) {
                    var s, a = t = t || {}, l = typeof t.default;
                    "object" !== l && "function" !== l || (s = t, a = t.default);
                    var c, u = "function" == typeof a ? a.options : a;
                    if (e && (u.render = e.render, u.staticRenderFns = e.staticRenderFns, u._compiled = !0), r && (u.functional = !0), o && (u._scopeId = o), i ? (c = function (t) {
                        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), n && n.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i)
                    }, u._ssrRegister = c) : n && (c = n), c) {
                        var h = u.functional, p = h ? u.render : u.beforeCreate;
                        h ? (u._injectStyles = c, u.render = function (t, e) {
                            return c.call(e), p(t, e)
                        }) : u.beforeCreate = p ? [].concat(p, c) : [c]
                    }
                    return {esModule: s, exports: a, options: u}
                }
            }, function (t, e, r) {
                "use strict";
                var n = function () {
                    var t = this, e = t.$createElement, r = t._self._c || e;
                    return t.reseted ? r("div", {staticClass: "video-player"}, [r("video", {
                        ref: "video",
                        staticClass: "video-js"
                    })]) : t._e()
                }, o = [], i = {render: n, staticRenderFns: o};
                e.a = i
            }])
        })
    }, e9ac: function (t, e, r) {
        "use strict";
        var n, o, i, s, a = Object.getOwnPropertyDescriptor ? function () {
                return Object.getOwnPropertyDescriptor(arguments, "callee").get
            }() : function () {
                throw new TypeError
            }, l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator,
            c = Object.getPrototypeOf || function (t) {
                return t.__proto__
            }, u = o ? c(o) : n, h = i ? i.constructor : n, p = s ? c(s) : n, d = s ? s() : n,
            f = "undefined" === typeof Uint8Array ? n : c(Uint8Array), y = {
                "$ %Array%": Array,
                "$ %ArrayBuffer%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer,
                "$ %ArrayBufferPrototype%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer.prototype,
                "$ %ArrayIteratorPrototype%": l ? c([][Symbol.iterator]()) : n,
                "$ %ArrayPrototype%": Array.prototype,
                "$ %ArrayProto_entries%": Array.prototype.entries,
                "$ %ArrayProto_forEach%": Array.prototype.forEach,
                "$ %ArrayProto_keys%": Array.prototype.keys,
                "$ %ArrayProto_values%": Array.prototype.values,
                "$ %AsyncFromSyncIteratorPrototype%": n,
                "$ %AsyncFunction%": h,
                "$ %AsyncFunctionPrototype%": h ? h.prototype : n,
                "$ %AsyncGenerator%": s ? c(d) : n,
                "$ %AsyncGeneratorFunction%": p,
                "$ %AsyncGeneratorPrototype%": p ? p.prototype : n,
                "$ %AsyncIteratorPrototype%": d && l && Symbol.asyncIterator ? d[Symbol.asyncIterator]() : n,
                "$ %Atomics%": "undefined" === typeof Atomics ? n : Atomics,
                "$ %Boolean%": Boolean,
                "$ %BooleanPrototype%": Boolean.prototype,
                "$ %DataView%": "undefined" === typeof DataView ? n : DataView,
                "$ %DataViewPrototype%": "undefined" === typeof DataView ? n : DataView.prototype,
                "$ %Date%": Date,
                "$ %DatePrototype%": Date.prototype,
                "$ %decodeURI%": decodeURI,
                "$ %decodeURIComponent%": decodeURIComponent,
                "$ %encodeURI%": encodeURI,
                "$ %encodeURIComponent%": encodeURIComponent,
                "$ %Error%": Error,
                "$ %ErrorPrototype%": Error.prototype,
                "$ %eval%": eval,
                "$ %EvalError%": EvalError,
                "$ %EvalErrorPrototype%": EvalError.prototype,
                "$ %Float32Array%": "undefined" === typeof Float32Array ? n : Float32Array,
                "$ %Float32ArrayPrototype%": "undefined" === typeof Float32Array ? n : Float32Array.prototype,
                "$ %Float64Array%": "undefined" === typeof Float64Array ? n : Float64Array,
                "$ %Float64ArrayPrototype%": "undefined" === typeof Float64Array ? n : Float64Array.prototype,
                "$ %Function%": Function,
                "$ %FunctionPrototype%": Function.prototype,
                "$ %Generator%": o ? c(o()) : n,
                "$ %GeneratorFunction%": u,
                "$ %GeneratorPrototype%": u ? u.prototype : n,
                "$ %Int8Array%": "undefined" === typeof Int8Array ? n : Int8Array,
                "$ %Int8ArrayPrototype%": "undefined" === typeof Int8Array ? n : Int8Array.prototype,
                "$ %Int16Array%": "undefined" === typeof Int16Array ? n : Int16Array,
                "$ %Int16ArrayPrototype%": "undefined" === typeof Int16Array ? n : Int8Array.prototype,
                "$ %Int32Array%": "undefined" === typeof Int32Array ? n : Int32Array,
                "$ %Int32ArrayPrototype%": "undefined" === typeof Int32Array ? n : Int32Array.prototype,
                "$ %isFinite%": isFinite,
                "$ %isNaN%": isNaN,
                "$ %IteratorPrototype%": l ? c(c([][Symbol.iterator]())) : n,
                "$ %JSON%": JSON,
                "$ %JSONParse%": JSON.parse,
                "$ %Map%": "undefined" === typeof Map ? n : Map,
                "$ %MapIteratorPrototype%": "undefined" !== typeof Map && l ? c((new Map)[Symbol.iterator]()) : n,
                "$ %MapPrototype%": "undefined" === typeof Map ? n : Map.prototype,
                "$ %Math%": Math,
                "$ %Number%": Number,
                "$ %NumberPrototype%": Number.prototype,
                "$ %Object%": Object,
                "$ %ObjectPrototype%": Object.prototype,
                "$ %ObjProto_toString%": Object.prototype.toString,
                "$ %ObjProto_valueOf%": Object.prototype.valueOf,
                "$ %parseFloat%": parseFloat,
                "$ %parseInt%": parseInt,
                "$ %Promise%": "undefined" === typeof Promise ? n : Promise,
                "$ %PromisePrototype%": "undefined" === typeof Promise ? n : Promise.prototype,
                "$ %PromiseProto_then%": "undefined" === typeof Promise ? n : Promise.prototype.then,
                "$ %Promise_all%": "undefined" === typeof Promise ? n : Promise.all,
                "$ %Promise_reject%": "undefined" === typeof Promise ? n : Promise.reject,
                "$ %Promise_resolve%": "undefined" === typeof Promise ? n : Promise.resolve,
                "$ %Proxy%": "undefined" === typeof Proxy ? n : Proxy,
                "$ %RangeError%": RangeError,
                "$ %RangeErrorPrototype%": RangeError.prototype,
                "$ %ReferenceError%": ReferenceError,
                "$ %ReferenceErrorPrototype%": ReferenceError.prototype,
                "$ %Reflect%": "undefined" === typeof Reflect ? n : Reflect,
                "$ %RegExp%": RegExp,
                "$ %RegExpPrototype%": RegExp.prototype,
                "$ %Set%": "undefined" === typeof Set ? n : Set,
                "$ %SetIteratorPrototype%": "undefined" !== typeof Set && l ? c((new Set)[Symbol.iterator]()) : n,
                "$ %SetPrototype%": "undefined" === typeof Set ? n : Set.prototype,
                "$ %SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                "$ %SharedArrayBufferPrototype%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer.prototype,
                "$ %String%": String,
                "$ %StringIteratorPrototype%": l ? c(""[Symbol.iterator]()) : n,
                "$ %StringPrototype%": String.prototype,
                "$ %Symbol%": l ? Symbol : n,
                "$ %SymbolPrototype%": l ? Symbol.prototype : n,
                "$ %SyntaxError%": SyntaxError,
                "$ %SyntaxErrorPrototype%": SyntaxError.prototype,
                "$ %ThrowTypeError%": a,
                "$ %TypedArray%": f,
                "$ %TypedArrayPrototype%": f ? f.prototype : n,
                "$ %TypeError%": TypeError,
                "$ %TypeErrorPrototype%": TypeError.prototype,
                "$ %Uint8Array%": "undefined" === typeof Uint8Array ? n : Uint8Array,
                "$ %Uint8ArrayPrototype%": "undefined" === typeof Uint8Array ? n : Uint8Array.prototype,
                "$ %Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                "$ %Uint8ClampedArrayPrototype%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray.prototype,
                "$ %Uint16Array%": "undefined" === typeof Uint16Array ? n : Uint16Array,
                "$ %Uint16ArrayPrototype%": "undefined" === typeof Uint16Array ? n : Uint16Array.prototype,
                "$ %Uint32Array%": "undefined" === typeof Uint32Array ? n : Uint32Array,
                "$ %Uint32ArrayPrototype%": "undefined" === typeof Uint32Array ? n : Uint32Array.prototype,
                "$ %URIError%": URIError,
                "$ %URIErrorPrototype%": URIError.prototype,
                "$ %WeakMap%": "undefined" === typeof WeakMap ? n : WeakMap,
                "$ %WeakMapPrototype%": "undefined" === typeof WeakMap ? n : WeakMap.prototype,
                "$ %WeakSet%": "undefined" === typeof WeakSet ? n : WeakSet,
                "$ %WeakSetPrototype%": "undefined" === typeof WeakSet ? n : WeakSet.prototype
            };
        t.exports = function (t, e) {
            if (arguments.length > 1 && "boolean" !== typeof e) throw new TypeError('"allowMissing" argument must be a boolean');
            var r = "$ " + t;
            if (!(r in y)) throw new SyntaxError("intrinsic " + t + " does not exist!");
            if ("undefined" === typeof y[r] && !e) throw new TypeError("intrinsic " + t + " exists, but is not available. Please file an issue!");
            return y[r]
        }
    }, eec7: function (t, e, r) {
        "use strict";
        var n = r("be09"), o = r("8362"), i = r("6444"), s = r("53a8");

        function a(t, e) {
            for (var r = 0; r < t.length; r++) e(t[r])
        }

        function l(t) {
            for (var e in t) if (t.hasOwnProperty(e)) return !1;
            return !0
        }

        function c(t, e, r) {
            var n = t;
            return o(e) ? (r = e, "string" === typeof t && (n = {uri: t})) : n = s(e, {uri: t}), n.callback = r, n
        }

        function u(t, e, r) {
            return e = c(t, e, r), h(e)
        }

        function h(t) {
            if ("undefined" === typeof t.callback) throw new Error("callback argument missing");
            var e = !1, r = function (r, n, o) {
                e || (e = !0, t.callback(r, n, o))
            };

            function n() {
                4 === d.readyState && setTimeout(a, 0)
            }

            function o() {
                var t = void 0;
                if (t = d.response ? d.response : d.responseText || p(d), b) try {
                    t = JSON.parse(t)
                } catch (e) {
                }
                return t
            }

            function s(t) {
                return clearTimeout(f), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, r(t, T)
            }

            function a() {
                if (!h) {
                    var e;
                    clearTimeout(f), e = t.useXDR && void 0 === d.status ? 200 : 1223 === d.status ? 204 : d.status;
                    var n = T, s = null;
                    return 0 !== e ? (n = {
                        body: o(),
                        statusCode: e,
                        method: v,
                        headers: {},
                        url: y,
                        rawRequest: d
                    }, d.getAllResponseHeaders && (n.headers = i(d.getAllResponseHeaders()))) : s = new Error("Internal XMLHttpRequest Error"), r(s, n, n.body)
                }
            }

            var c, h, d = t.xhr || null;
            d || (d = t.cors || t.useXDR ? new u.XDomainRequest : new u.XMLHttpRequest);
            var f, y = d.url = t.uri || t.url, v = d.method = t.method || "GET", g = t.body || t.data,
                m = d.headers = t.headers || {}, _ = !!t.sync, b = !1,
                T = {body: void 0, headers: {}, statusCode: 0, method: v, url: y, rawRequest: d};
            if ("json" in t && !1 !== t.json && (b = !0, m["accept"] || m["Accept"] || (m["Accept"] = "application/json"), "GET" !== v && "HEAD" !== v && (m["content-type"] || m["Content-Type"] || (m["Content-Type"] = "application/json"), g = JSON.stringify(!0 === t.json ? g : t.json))), d.onreadystatechange = n, d.onload = a, d.onerror = s, d.onprogress = function () {
            }, d.onabort = function () {
                h = !0
            }, d.ontimeout = s, d.open(v, y, !_, t.username, t.password), _ || (d.withCredentials = !!t.withCredentials), !_ && t.timeout > 0 && (f = setTimeout(function () {
                if (!h) {
                    h = !0, d.abort("timeout");
                    var t = new Error("XMLHttpRequest timeout");
                    t.code = "ETIMEDOUT", s(t)
                }
            }, t.timeout)), d.setRequestHeader) for (c in m) m.hasOwnProperty(c) && d.setRequestHeader(c, m[c]); else if (t.headers && !l(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType" in t && (d.responseType = t.responseType), "beforeSend" in t && "function" === typeof t.beforeSend && t.beforeSend(d), d.send(g || null), d
        }

        function p(t) {
            if ("document" === t.responseType) return t.responseXML;
            var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
            return "" !== t.responseType || e ? null : t.responseXML
        }

        function d() {
        }

        t.exports = u, u.XMLHttpRequest = n.XMLHttpRequest || d, u.XDomainRequest = "withCredentials" in new u.XMLHttpRequest ? u.XMLHttpRequest : n.XDomainRequest, a(["get", "put", "post", "patch", "head", "delete"], function (t) {
            u["delete" === t ? "del" : t] = function (e, r, n) {
                return r = c(e, r, n), r.method = t.toUpperCase(), h(r)
            }
        })
    }, ef34: function (t, e, r) {
        (function (e) {
            var n, o = "undefined" !== typeof e ? e : "undefined" !== typeof window ? window : {}, i = r(1);
            "undefined" !== typeof document ? n = document : (n = o["__GLOBAL_DOCUMENT_CACHE@4"], n || (n = o["__GLOBAL_DOCUMENT_CACHE@4"] = i)), t.exports = n
        }).call(this, r("c8ba"))
    }, f367: function (t, e, r) {
        "use strict";
        var n = r("d6c7"), o = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"),
            i = Object.prototype.toString, s = Array.prototype.concat, a = Object.defineProperty, l = function (t) {
                return "function" === typeof t && "[object Function]" === i.call(t)
            }, c = function () {
                var t = {};
                try {
                    for (var e in a(t, "x", {enumerable: !1, value: t}), t) return !1;
                    return t.x === t
                } catch (r) {
                    return !1
                }
            }, u = a && c(), h = function (t, e, r, n) {
                (!(e in t) || l(n) && n()) && (u ? a(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: r,
                    writable: !0
                }) : t[e] = r)
            }, p = function (t, e) {
                var r = arguments.length > 2 ? arguments[2] : {}, i = n(e);
                o && (i = s.call(i, Object.getOwnPropertySymbols(e)));
                for (var a = 0; a < i.length; a += 1) h(t, i[a], e[i[a]], r[i[a]])
            };
        p.supportsDescriptors = !!u, t.exports = p
    }, f97d: function (t, e) {
        var r = {"": !0, up: !0};

        function n(t) {
            if ("string" !== typeof t) return !1;
            var e = r[t.toLowerCase()];
            return !!e && t.toLowerCase()
        }

        function o(t) {
            return "number" === typeof t && t >= 0 && t <= 100
        }

        function i() {
            var t = 100, e = 3, r = 0, i = 100, s = 0, a = 100, l = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0, get: function () {
                        return t
                    }, set: function (e) {
                        if (!o(e)) throw new Error("Width must be between 0 and 100.");
                        t = e
                    }
                }, lines: {
                    enumerable: !0, get: function () {
                        return e
                    }, set: function (t) {
                        if ("number" !== typeof t) throw new TypeError("Lines must be set to a number.");
                        e = t
                    }
                }, regionAnchorY: {
                    enumerable: !0, get: function () {
                        return i
                    }, set: function (t) {
                        if (!o(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                        i = t
                    }
                }, regionAnchorX: {
                    enumerable: !0, get: function () {
                        return r
                    }, set: function (t) {
                        if (!o(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                        r = t
                    }
                }, viewportAnchorY: {
                    enumerable: !0, get: function () {
                        return a
                    }, set: function (t) {
                        if (!o(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                        a = t
                    }
                }, viewportAnchorX: {
                    enumerable: !0, get: function () {
                        return s
                    }, set: function (t) {
                        if (!o(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                        s = t
                    }
                }, scroll: {
                    enumerable: !0, get: function () {
                        return l
                    }, set: function (t) {
                        var e = n(t);
                        if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                        l = e
                    }
                }
            })
        }

        t.exports = i
    }, fda2: function (t, e, r) {
    }
}]);