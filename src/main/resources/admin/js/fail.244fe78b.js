(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fail"], {
    2254: function (t, e, s) {
        "use strict";
        var n = s("c10b"), c = s.n(n);
        c.a
    }, c10b: function (t, e, s) {
    }, cc89: function (t, e, s) {
        "use strict";
        s.r(e);
        var n = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("exception-page", {attrs: {type: "404"}})
            }, c = [], i = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "exception"}, [s("div", {staticClass: "img"}, [s("img", {attrs: {src: t.config[t.type].img}})]), s("div", {staticClass: "content"}, [s("h1", [t._v(t._s(t.config[t.type].title))]), s("div", {staticClass: "desc"}, [t._v(t._s(t.config[t.type].desc))]), s("div", {staticClass: "action"}, [s("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleToHome}
                }, [t._v("返回首页")])], 1)])])
            }, a = [], o = {
                404: {
                    img: "https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",
                    title: "404",
                    desc: "抱歉，你访问的页面不存在"
                },
                500: {
                    img: "https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",
                    title: "500",
                    desc: "抱歉，服务器出错了"
                }
            }, l = o, p = {
                name: "Exception", props: {type: {type: String, default: "404"}}, data: function () {
                    return {config: l}
                }, methods: {
                    handleToHome: function () {
                        this.$router.push({name: "Dashboard"})
                    }
                }
            }, r = p, u = (s("2254"), s("2877")), d = Object(u["a"])(r, i, a, !1, null, "230942b4", null), m = d.exports,
            g = {components: {ExceptionPage: m}}, f = g, v = Object(u["a"])(f, n, c, !1, null, null, null);
        e["default"] = v.exports
    }
}]);