(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-36ac1a23"], {
    "12de": function (e, t, r) {
        "use strict";
        var n = r("9efd"), i = "/api/admin/themes", o = {
            listAll: function () {
                return Object(n["a"])({url: "".concat(i), method: "get"})
            }, listFilesActivated: function () {
                return Object(n["a"])({url: "".concat(i, "/activation/files"), method: "get"})
            }, listFiles: function (e) {
                return Object(n["a"])({url: "".concat(i, "/").concat(e, "/files"), method: "get"})
            }, customTpls: function () {
                return Object(n["a"])({url: "".concat(i, "/files/custom"), method: "get"})
            }, active: function (e) {
                return Object(n["a"])({url: "".concat(i, "/").concat(e, "/activation"), method: "post"})
            }, getActivatedTheme: function () {
                return Object(n["a"])({url: "".concat(i, "/activation"), method: "get"})
            }, update: function (e) {
                return Object(n["a"])({url: "".concat(i, "/fetching/").concat(e), timeout: 6e4, method: "put"})
            }, delete: function (e) {
                return Object(n["a"])({url: "".concat(i, "/").concat(e), method: "delete"})
            }, fetchConfiguration: function (e) {
                return Object(n["a"])({url: "".concat(i, "/").concat(e, "/configurations"), method: "get"})
            }, fetchSettings: function (e) {
                return Object(n["a"])({url: "".concat(i, "/").concat(e, "/settings"), method: "get"})
            }, saveSettings: function (e, t) {
                return Object(n["a"])({url: "".concat(i, "/").concat(e, "/settings"), data: t, method: "post"})
            }, getProperty: function (e) {
                return Object(n["a"])({url: "".concat(i, "/").concat(e), method: "get"})
            }, upload: function (e, t, r) {
                return Object(n["a"])({
                    url: "".concat(i, "/upload"),
                    timeout: 864e5,
                    data: e,
                    onUploadProgress: t,
                    cancelToken: r,
                    method: "post"
                })
            }, updateByUpload: function (e, t, r, o) {
                return Object(n["a"])({
                    url: "".concat(i, "/upload/").concat(o),
                    timeout: 864e5,
                    data: e,
                    onUploadProgress: t,
                    cancelToken: r,
                    method: "put"
                })
            }, fetching: function (e) {
                return Object(n["a"])({url: "".concat(i, "/fetching"), timeout: 6e4, params: {uri: e}, method: "post"})
            }, getContent: function (e) {
                return Object(n["a"])({url: "".concat(i, "/files/content"), params: {path: e}, method: "get"})
            }
        };
        o.getContent = function (e, t) {
            return Object(n["a"])({
                url: "".concat(i, "/").concat(e, "/files/content"),
                params: {path: t},
                method: "get"
            })
        }, o.saveContent = function (e, t) {
            return Object(n["a"])({url: "".concat(i, "/files/content"), data: {path: e, content: t}, method: "put"})
        }, o.saveContent = function (e, t, r) {
            return Object(n["a"])({
                url: "".concat(i, "/").concat(e, "/files/content"),
                data: {path: t, content: r},
                method: "put"
            })
        }, o.reload = function () {
            return Object(n["a"])({url: "".concat(i, "/reload"), method: "post"})
        }, o.exists = function (e) {
            return Object(n["a"])({
                url: "".concat(i, "/activation/template/exists"),
                method: "get",
                params: {template: e}
            })
        }, t["a"] = o
    }, "19ce": function (e, t, r) {
    }, "33c9": function (e, t, r) {
        "use strict";
        r.r(t);
        var n, i, o = function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", {staticClass: "page-header-index-wide"}, [r("a-row", {attrs: {gutter: 12}}, [r("a-col", {
                    style: {"padding-bottom": "12px"},
                    attrs: {xl: 18, lg: 18, md: 18, sm: 24, xs: 24}
                }, [r("a-card", {attrs: {bodyStyle: {padding: "16px"}}}, [r("a-form", {attrs: {layout: "vertical"}}, [r("a-form-item", [r("codemirror", {
                    attrs: {options: e.options},
                    model: {
                        value: e.content, callback: function (t) {
                            e.content = t
                        }, expression: "content"
                    }
                })], 1), r("a-form-item", [r("a-button", {
                    attrs: {type: "primary", disabled: e.buttonDisabled},
                    on: {click: e.handlerSaveContent}
                }, [e._v("保存")])], 1)], 1)], 1)], 1), r("a-col", {
                    style: {"padding-bottom": "12px"},
                    attrs: {xl: 6, lg: 6, md: 6, sm: 24, xs: 24}
                }, [r("a-card", {attrs: {bodyStyle: {padding: "16px"}}}, [r("template", {slot: "title"}, [r("a-select", {
                    staticStyle: {width: "100%"},
                    on: {change: e.onSelectTheme},
                    model: {
                        value: e.selectedTheme.id, callback: function (t) {
                            e.$set(e.selectedTheme, "id", t)
                        }, expression: "selectedTheme.id"
                    }
                }, e._l(e.themes, function (t, n) {
                    return r("a-select-option", {
                        key: n,
                        attrs: {value: t.id}
                    }, [e._v(e._s(t.name) + "\n              "), t.activated ? r("a-icon", {attrs: {type: "check"}}) : e._e()], 1)
                }), 1)], 1), e.files ? r("theme-file", {
                    attrs: {files: e.files},
                    on: {listenToSelect: e.handleSelectFile}
                }) : e._e()], 2)], 1)], 1)], 1)
            }, a = [], l = (r("7f7f"), r("12de")), s = {
                name: "ThemeFile", props: {
                    files: {
                        type: Array, required: !1, default: function () {
                            return []
                        }
                    }
                }, methods: {
                    handleSelectFile: function (e) {
                        this.$emit("listenToSelect", e)
                    }, renderNode: function (e, t) {
                        var r = this, n = this;
                        return t.node && t.node.length ? e("a-tree-node", {
                            props: {
                                key: t.path,
                                title: t.name,
                                isLeaf: t.isFile
                            }
                        }, t.node.map(function (t) {
                            return r.renderNode(e, t)
                        })) : e("a-tree-node", {
                            props: {key: t.path, title: t.name, isLeaf: t.isFile},
                            nativeOn: {
                                click: function () {
                                    n.handleSelectFile(t)
                                }
                            }
                        })
                    }
                }, render: function (e) {
                    var t = this;
                    return this.files.length ? e("a-directory-tree", this.files.map(function (r) {
                        return t.renderNode(e, r)
                    })) : e("p", "没有文件")
                }
            }, c = s, u = r("2877"), d = Object(u["a"])(c, n, i, !1, null, null, null), f = d.exports, h = r("c884"),
            p = (r("d69f"), {
                components: {codemirror: h["codemirror"], ThemeFile: f}, data: function () {
                    return {
                        buttonDisabled: !0,
                        options: {tabSize: 4, mode: "text/html", lineNumbers: !0, line: !0},
                        files: null,
                        file: {},
                        content: "",
                        themes: [],
                        selectedTheme: {}
                    }
                }, created: function () {
                    this.loadActivatedTheme(), this.loadFiles(), this.loadThemes()
                }, methods: {
                    loadActivatedTheme: function () {
                        var e = this;
                        l["a"].getActivatedTheme().then(function (t) {
                            e.selectedTheme = t.data.data
                        })
                    }, loadFiles: function () {
                        var e = this;
                        l["a"].listFilesActivated().then(function (t) {
                            e.files = t.data.data
                        })
                    }, loadThemes: function () {
                        var e = this;
                        l["a"].listAll().then(function (t) {
                            e.themes = t.data.data
                        })
                    }, onSelectTheme: function (e) {
                        var t = this;
                        this.files = null, l["a"].listFiles(e).then(function (e) {
                            t.files = e.data.data
                        })
                    }, handleSelectFile: function (e) {
                        var t = this, r = this;
                        if (!e.editable) return this.$message.info("该文件不支持修改！"), this.content = "", this.file = {}, void (this.buttonDisabled = !0);
                        "settings.yaml" !== e.name && "settings.yml" !== e.name && "theme.yaml" !== e.name && "theme.yml" !== e.name || this.$confirm({
                            title: "警告：请谨慎修改该配置文件",
                            content: "修改之后可能会产生不可预料的问题！",
                            onCancel: function () {
                                r.content = "", r.file = {}, r.buttonDisabled = !0
                            }
                        }), l["a"].getContent(this.selectedTheme.id, e.path).then(function (r) {
                            t.content = r.data.data, t.file = e, t.buttonDisabled = !1
                        })
                    }, handlerSaveContent: function () {
                        var e = this;
                        l["a"].saveContent(this.selectedTheme.id, this.file.path, this.content).then(function (t) {
                            e.$message.success("保存成功！")
                        })
                    }
                }
            }), m = p, g = (r("b4c0d"), Object(u["a"])(m, o, a, !1, null, null, null));
        t["default"] = g.exports
    }, "56b3": function (e, t, r) {
        (function (t, r) {
            e.exports = r()
        })(0, function () {
            "use strict";
            var e = navigator.userAgent, t = navigator.platform, r = /gecko\/\d/i.test(e), n = /MSIE \d/.test(e),
                i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e), o = /Edge\/(\d+)/.exec(e), a = n || i || o,
                l = a && (n ? document.documentMode || 6 : +(o || i)[1]), s = !o && /WebKit\//.test(e),
                c = s && /Qt\/\d+\.\d+/.test(e), u = !o && /Chrome\//.test(e), d = /Opera\//.test(e),
                f = /Apple Computer/.test(navigator.vendor), h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                p = /PhantomJS/.test(e), m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
                g = /Android/.test(e), v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                y = m || /Mac/.test(t), b = /\bCrOS\b/.test(e), w = /win/i.test(t),
                x = d && e.match(/Version\/(\d*\.\d*)/);
            x && (x = Number(x[1])), x && x >= 15 && (d = !1, s = !0);
            var k = y && (c || d && (null == x || x < 12.11)), C = r || a && l >= 9;

            function S(e) {
                return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
            }

            var T, L = function (e, t) {
                var r = e.className, n = S(t).exec(r);
                if (n) {
                    var i = r.slice(n.index + n[0].length);
                    e.className = r.slice(0, n.index) + (i ? n[1] + i : "")
                }
            };

            function M(e) {
                for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                return e
            }

            function O(e, t) {
                return M(e).appendChild(t)
            }

            function N(e, t, r, n) {
                var i = document.createElement(e);
                if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) i.appendChild(document.createTextNode(t)); else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
                return i
            }

            function A(e, t, r, n) {
                var i = N(e, t, r, n);
                return i.setAttribute("role", "presentation"), i
            }

            function D(e, t) {
                if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                do {
                    if (11 == t.nodeType && (t = t.host), t == e) return !0
                } while (t = t.parentNode)
            }

            function W() {
                var e;
                try {
                    e = document.activeElement
                } catch (t) {
                    e = document.body || null
                }
                while (e && e.shadowRoot && e.shadowRoot.activeElement) e = e.shadowRoot.activeElement;
                return e
            }

            function z(e, t) {
                var r = e.className;
                S(t).test(r) || (e.className += (r ? " " : "") + t)
            }

            function P(e, t) {
                for (var r = e.split(" "), n = 0; n < r.length; n++) r[n] && !S(r[n]).test(t) && (t += " " + r[n]);
                return t
            }

            T = document.createRange ? function (e, t, r, n) {
                var i = document.createRange();
                return i.setEnd(n || e, r), i.setStart(e, t), i
            } : function (e, t, r) {
                var n = document.body.createTextRange();
                try {
                    n.moveToElementText(e.parentNode)
                } catch (i) {
                    return n
                }
                return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n
            };
            var E = function (e) {
                e.select()
            };

            function F(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return e.apply(null, t)
                }
            }

            function H(e, t, r) {
                for (var n in t || (t = {}), e) !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) || (t[n] = e[n]);
                return t
            }

            function I(e, t, r, n, i) {
                null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));
                for (var o = n || 0, a = i || 0; ;) {
                    var l = e.indexOf("\t", o);
                    if (l < 0 || l >= t) return a + (t - o);
                    a += l - o, a += r - a % r, o = l + 1
                }
            }

            m ? E = function (e) {
                e.selectionStart = 0, e.selectionEnd = e.value.length
            } : a && (E = function (e) {
                try {
                    e.select()
                } catch (t) {
                }
            });
            var R = function () {
                this.id = null
            };

            function B(e, t) {
                for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
                return -1
            }

            R.prototype.set = function (e, t) {
                clearTimeout(this.id), this.id = setTimeout(t, e)
            };
            var j = 30, V = {
                toString: function () {
                    return "CodeMirror.Pass"
                }
            }, K = {scroll: !1}, G = {origin: "*mouse"}, U = {origin: "+move"};

            function $(e, t, r) {
                for (var n = 0, i = 0; ;) {
                    var o = e.indexOf("\t", n);
                    -1 == o && (o = e.length);
                    var a = o - n;
                    if (o == e.length || i + a >= t) return n + Math.min(a, t - i);
                    if (i += o - n, i += r - i % r, n = o + 1, i >= t) return n
                }
            }

            var q = [""];

            function _(e) {
                while (q.length <= e) q.push(X(q) + " ");
                return q[e]
            }

            function X(e) {
                return e[e.length - 1]
            }

            function Y(e, t) {
                for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
                return r
            }

            function Z(e, t, r) {
                var n = 0, i = r(t);
                while (n < e.length && r(e[n]) <= i) n++;
                e.splice(n, 0, t)
            }

            function J() {
            }

            function Q(e, t) {
                var r;
                return Object.create ? r = Object.create(e) : (J.prototype = e, r = new J), t && H(t, r), r
            }

            var ee = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

            function te(e) {
                return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || ee.test(e))
            }

            function re(e, t) {
                return t ? !!(t.source.indexOf("\\w") > -1 && te(e)) || t.test(e) : te(e)
            }

            function ne(e) {
                for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
                return !0
            }

            var ie = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

            function oe(e) {
                return e.charCodeAt(0) >= 768 && ie.test(e)
            }

            function ae(e, t, r) {
                while ((r < 0 ? t > 0 : t < e.length) && oe(e.charAt(t))) t += r;
                return t
            }

            function le(e, t, r) {
                for (var n = t > r ? -1 : 1; ;) {
                    if (t == r) return t;
                    var i = (t + r) / 2, o = n < 0 ? Math.ceil(i) : Math.floor(i);
                    if (o == t) return e(o) ? t : r;
                    e(o) ? r = o : t = o + n
                }
            }

            function se(e, t, r, n) {
                if (!e) return n(t, r, "ltr", 0);
                for (var i = !1, o = 0; o < e.length; ++o) {
                    var a = e[o];
                    (a.from < r && a.to > t || t == r && a.to == t) && (n(Math.max(a.from, t), Math.min(a.to, r), 1 == a.level ? "rtl" : "ltr", o), i = !0)
                }
                i || n(t, r, "ltr")
            }

            var ce = null;

            function ue(e, t, r) {
                var n;
                ce = null;
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i];
                    if (o.from < t && o.to > t) return i;
                    o.to == t && (o.from != o.to && "before" == r ? n = i : ce = i), o.from == t && (o.from != o.to && "before" != r ? n = i : ce = i)
                }
                return null != n ? n : ce
            }

            var de = function () {
                var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                    t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

                function r(r) {
                    return r <= 247 ? e.charAt(r) : 1424 <= r && r <= 1524 ? "R" : 1536 <= r && r <= 1785 ? t.charAt(r - 1536) : 1774 <= r && r <= 2220 ? "r" : 8192 <= r && r <= 8203 ? "w" : 8204 == r ? "b" : "L"
                }

                var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, i = /[stwN]/, o = /[LRr]/, a = /[Lb1n]/,
                    l = /[1n]/;

                function s(e, t, r) {
                    this.level = e, this.from = t, this.to = r
                }

                return function (e, t) {
                    var c = "ltr" == t ? "L" : "R";
                    if (0 == e.length || "ltr" == t && !n.test(e)) return !1;
                    for (var u = e.length, d = [], f = 0; f < u; ++f) d.push(r(e.charCodeAt(f)));
                    for (var h = 0, p = c; h < u; ++h) {
                        var m = d[h];
                        "m" == m ? d[h] = p : p = m
                    }
                    for (var g = 0, v = c; g < u; ++g) {
                        var y = d[g];
                        "1" == y && "r" == v ? d[g] = "n" : o.test(y) && (v = y, "r" == y && (d[g] = "R"))
                    }
                    for (var b = 1, w = d[0]; b < u - 1; ++b) {
                        var x = d[b];
                        "+" == x && "1" == w && "1" == d[b + 1] ? d[b] = "1" : "," != x || w != d[b + 1] || "1" != w && "n" != w || (d[b] = w), w = x
                    }
                    for (var k = 0; k < u; ++k) {
                        var C = d[k];
                        if ("," == C) d[k] = "N"; else if ("%" == C) {
                            var S = void 0;
                            for (S = k + 1; S < u && "%" == d[S]; ++S) ;
                            for (var T = k && "!" == d[k - 1] || S < u && "1" == d[S] ? "1" : "N", L = k; L < S; ++L) d[L] = T;
                            k = S - 1
                        }
                    }
                    for (var M = 0, O = c; M < u; ++M) {
                        var N = d[M];
                        "L" == O && "1" == N ? d[M] = "L" : o.test(N) && (O = N)
                    }
                    for (var A = 0; A < u; ++A) if (i.test(d[A])) {
                        var D = void 0;
                        for (D = A + 1; D < u && i.test(d[D]); ++D) ;
                        for (var W = "L" == (A ? d[A - 1] : c), z = "L" == (D < u ? d[D] : c), P = W == z ? W ? "L" : "R" : c, E = A; E < D; ++E) d[E] = P;
                        A = D - 1
                    }
                    for (var F, H = [], I = 0; I < u;) if (a.test(d[I])) {
                        var R = I;
                        for (++I; I < u && a.test(d[I]); ++I) ;
                        H.push(new s(0, R, I))
                    } else {
                        var B = I, j = H.length;
                        for (++I; I < u && "L" != d[I]; ++I) ;
                        for (var V = B; V < I;) if (l.test(d[V])) {
                            B < V && H.splice(j, 0, new s(1, B, V));
                            var K = V;
                            for (++V; V < I && l.test(d[V]); ++V) ;
                            H.splice(j, 0, new s(2, K, V)), B = V
                        } else ++V;
                        B < I && H.splice(j, 0, new s(1, B, I))
                    }
                    return "ltr" == t && (1 == H[0].level && (F = e.match(/^\s+/)) && (H[0].from = F[0].length, H.unshift(new s(0, 0, F[0].length))), 1 == X(H).level && (F = e.match(/\s+$/)) && (X(H).to -= F[0].length, H.push(new s(0, u - F[0].length, u)))), "rtl" == t ? H.reverse() : H
                }
            }();

            function fe(e, t) {
                var r = e.order;
                return null == r && (r = e.order = de(e.text, t)), r
            }

            var he = [], pe = function (e, t, r) {
                if (e.addEventListener) e.addEventListener(t, r, !1); else if (e.attachEvent) e.attachEvent("on" + t, r); else {
                    var n = e._handlers || (e._handlers = {});
                    n[t] = (n[t] || he).concat(r)
                }
            };

            function me(e, t) {
                return e._handlers && e._handlers[t] || he
            }

            function ge(e, t, r) {
                if (e.removeEventListener) e.removeEventListener(t, r, !1); else if (e.detachEvent) e.detachEvent("on" + t, r); else {
                    var n = e._handlers, i = n && n[t];
                    if (i) {
                        var o = B(i, r);
                        o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)))
                    }
                }
            }

            function ve(e, t) {
                var r = me(e, t);
                if (r.length) for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n)
            }

            function ye(e, t, r) {
                return "string" == typeof t && (t = {
                    type: t, preventDefault: function () {
                        this.defaultPrevented = !0
                    }
                }), ve(e, r || t.type, e, t), Se(t) || t.codemirrorIgnore
            }

            function be(e) {
                var t = e._handlers && e._handlers.cursorActivity;
                if (t) for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) -1 == B(r, t[n]) && r.push(t[n])
            }

            function we(e, t) {
                return me(e, t).length > 0
            }

            function xe(e) {
                e.prototype.on = function (e, t) {
                    pe(this, e, t)
                }, e.prototype.off = function (e, t) {
                    ge(this, e, t)
                }
            }

            function ke(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }

            function Ce(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }

            function Se(e) {
                return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
            }

            function Te(e) {
                ke(e), Ce(e)
            }

            function Le(e) {
                return e.target || e.srcElement
            }

            function Me(e) {
                var t = e.which;
                return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t
            }

            var Oe, Ne, Ae = function () {
                if (a && l < 9) return !1;
                var e = N("div");
                return "draggable" in e || "dragDrop" in e
            }();

            function De(e) {
                if (null == Oe) {
                    var t = N("span", "​");
                    O(e, N("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Oe = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8))
                }
                var r = Oe ? N("span", "​") : N("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                return r.setAttribute("cm-text", ""), r
            }

            function We(e) {
                if (null != Ne) return Ne;
                var t = O(e, document.createTextNode("AخA")), r = T(t, 0, 1).getBoundingClientRect(),
                    n = T(t, 1, 2).getBoundingClientRect();
                return M(e), !(!r || r.left == r.right) && (Ne = n.right - r.right < 3)
            }

            var ze = 3 != "\n\nb".split(/\n/).length ? function (e) {
                var t = 0, r = [], n = e.length;
                while (t <= n) {
                    var i = e.indexOf("\n", t);
                    -1 == i && (i = e.length);
                    var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i), a = o.indexOf("\r");
                    -1 != a ? (r.push(o.slice(0, a)), t += a + 1) : (r.push(o), t = i + 1)
                }
                return r
            } : function (e) {
                return e.split(/\r\n?|\n/)
            }, Pe = window.getSelection ? function (e) {
                try {
                    return e.selectionStart != e.selectionEnd
                } catch (t) {
                    return !1
                }
            } : function (e) {
                var t;
                try {
                    t = e.ownerDocument.selection.createRange()
                } catch (r) {
                }
                return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
            }, Ee = function () {
                var e = N("div");
                return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
            }(), Fe = null;

            function He(e) {
                if (null != Fe) return Fe;
                var t = O(e, N("span", "x")), r = t.getBoundingClientRect(), n = T(t, 0, 1).getBoundingClientRect();
                return Fe = Math.abs(r.left - n.left) > 1
            }

            var Ie = {}, Re = {};

            function Be(e, t) {
                arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ie[e] = t
            }

            function je(e, t) {
                Re[e] = t
            }

            function Ve(e) {
                if ("string" == typeof e && Re.hasOwnProperty(e)) e = Re[e]; else if (e && "string" == typeof e.name && Re.hasOwnProperty(e.name)) {
                    var t = Re[e.name];
                    "string" == typeof t && (t = {name: t}), e = Q(t, e), e.name = t.name
                } else {
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ve("application/xml");
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ve("application/json")
                }
                return "string" == typeof e ? {name: e} : e || {name: "null"}
            }

            function Ke(e, t) {
                t = Ve(t);
                var r = Ie[t.name];
                if (!r) return Ke(e, "text/plain");
                var n = r(e, t);
                if (Ge.hasOwnProperty(t.name)) {
                    var i = Ge[t.name];
                    for (var o in i) i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]), n[o] = i[o])
                }
                if (n.name = t.name, t.helperType && (n.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) n[a] = t.modeProps[a];
                return n
            }

            var Ge = {};

            function Ue(e, t) {
                var r = Ge.hasOwnProperty(e) ? Ge[e] : Ge[e] = {};
                H(t, r)
            }

            function $e(e, t) {
                if (!0 === t) return t;
                if (e.copyState) return e.copyState(t);
                var r = {};
                for (var n in t) {
                    var i = t[n];
                    i instanceof Array && (i = i.concat([])), r[n] = i
                }
                return r
            }

            function qe(e, t) {
                var r;
                while (e.innerMode) {
                    if (r = e.innerMode(t), !r || r.mode == e) break;
                    t = r.state, e = r.mode
                }
                return r || {mode: e, state: t}
            }

            function _e(e, t, r) {
                return !e.startState || e.startState(t, r)
            }

            var Xe = function (e, t, r) {
                this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = r
            };

            function Ye(e, t) {
                if (t -= e.first, t < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
                var r = e;
                while (!r.lines) for (var n = 0; ; ++n) {
                    var i = r.children[n], o = i.chunkSize();
                    if (t < o) {
                        r = i;
                        break
                    }
                    t -= o
                }
                return r.lines[t]
            }

            function Ze(e, t, r) {
                var n = [], i = t.line;
                return e.iter(t.line, r.line + 1, function (e) {
                    var o = e.text;
                    i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i
                }), n
            }

            function Je(e, t, r) {
                var n = [];
                return e.iter(t, r, function (e) {
                    n.push(e.text)
                }), n
            }

            function Qe(e, t) {
                var r = t - e.height;
                if (r) for (var n = e; n; n = n.parent) n.height += r
            }

            function et(e) {
                if (null == e.parent) return null;
                for (var t = e.parent, r = B(t.lines, e), n = t.parent; n; t = n, n = n.parent) for (var i = 0; ; ++i) {
                    if (n.children[i] == t) break;
                    r += n.children[i].chunkSize()
                }
                return r + t.first
            }

            function tt(e, t) {
                var r = e.first;
                e:do {
                    for (var n = 0; n < e.children.length; ++n) {
                        var i = e.children[n], o = i.height;
                        if (t < o) {
                            e = i;
                            continue e
                        }
                        t -= o, r += i.chunkSize()
                    }
                    return r
                } while (!e.lines);
                for (var a = 0; a < e.lines.length; ++a) {
                    var l = e.lines[a], s = l.height;
                    if (t < s) break;
                    t -= s
                }
                return r + a
            }

            function rt(e, t) {
                return t >= e.first && t < e.first + e.size
            }

            function nt(e, t) {
                return String(e.lineNumberFormatter(t + e.firstLineNumber))
            }

            function it(e, t, r) {
                if (void 0 === r && (r = null), !(this instanceof it)) return new it(e, t, r);
                this.line = e, this.ch = t, this.sticky = r
            }

            function ot(e, t) {
                return e.line - t.line || e.ch - t.ch
            }

            function at(e, t) {
                return e.sticky == t.sticky && 0 == ot(e, t)
            }

            function lt(e) {
                return it(e.line, e.ch)
            }

            function st(e, t) {
                return ot(e, t) < 0 ? t : e
            }

            function ct(e, t) {
                return ot(e, t) < 0 ? e : t
            }

            function ut(e, t) {
                return Math.max(e.first, Math.min(t, e.first + e.size - 1))
            }

            function dt(e, t) {
                if (t.line < e.first) return it(e.first, 0);
                var r = e.first + e.size - 1;
                return t.line > r ? it(r, Ye(e, r).text.length) : ft(t, Ye(e, t.line).text.length)
            }

            function ft(e, t) {
                var r = e.ch;
                return null == r || r > t ? it(e.line, t) : r < 0 ? it(e.line, 0) : e
            }

            function ht(e, t) {
                for (var r = [], n = 0; n < t.length; n++) r[n] = dt(e, t[n]);
                return r
            }

            Xe.prototype.eol = function () {
                return this.pos >= this.string.length
            }, Xe.prototype.sol = function () {
                return this.pos == this.lineStart
            }, Xe.prototype.peek = function () {
                return this.string.charAt(this.pos) || void 0
            }, Xe.prototype.next = function () {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++)
            }, Xe.prototype.eat = function (e) {
                var t, r = this.string.charAt(this.pos);
                if (t = "string" == typeof e ? r == e : r && (e.test ? e.test(r) : e(r)), t) return ++this.pos, r
            }, Xe.prototype.eatWhile = function (e) {
                var t = this.pos;
                while (this.eat(e)) ;
                return this.pos > t
            }, Xe.prototype.eatSpace = function () {
                var e = this, t = this.pos;
                while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++e.pos;
                return this.pos > t
            }, Xe.prototype.skipToEnd = function () {
                this.pos = this.string.length
            }, Xe.prototype.skipTo = function (e) {
                var t = this.string.indexOf(e, this.pos);
                if (t > -1) return this.pos = t, !0
            }, Xe.prototype.backUp = function (e) {
                this.pos -= e
            }, Xe.prototype.column = function () {
                return this.lastColumnPos < this.start && (this.lastColumnValue = I(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0)
            }, Xe.prototype.indentation = function () {
                return I(this.string, null, this.tabSize) - (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0)
            }, Xe.prototype.match = function (e, t, r) {
                if ("string" != typeof e) {
                    var n = this.string.slice(this.pos).match(e);
                    return n && n.index > 0 ? null : (n && !1 !== t && (this.pos += n[0].length), n)
                }
                var i = function (e) {
                    return r ? e.toLowerCase() : e
                }, o = this.string.substr(this.pos, e.length);
                if (i(o) == i(e)) return !1 !== t && (this.pos += e.length), !0
            }, Xe.prototype.current = function () {
                return this.string.slice(this.start, this.pos)
            }, Xe.prototype.hideFirstChars = function (e, t) {
                this.lineStart += e;
                try {
                    return t()
                } finally {
                    this.lineStart -= e
                }
            }, Xe.prototype.lookAhead = function (e) {
                var t = this.lineOracle;
                return t && t.lookAhead(e)
            }, Xe.prototype.baseToken = function () {
                var e = this.lineOracle;
                return e && e.baseToken(this.pos)
            };
            var pt = function (e, t) {
                this.state = e, this.lookAhead = t
            }, mt = function (e, t, r, n) {
                this.state = t, this.doc = e, this.line = r, this.maxLookAhead = n || 0, this.baseTokens = null, this.baseTokenPos = 1
            };

            function gt(e, t, r, n) {
                var i = [e.state.modeGen], o = {};
                Tt(e, t.text, e.doc.mode, r, function (e, t) {
                    return i.push(e, t)
                }, o, n);
                for (var a = r.state, l = function (n) {
                    r.baseTokens = i;
                    var l = e.state.overlays[n], s = 1, c = 0;
                    r.state = !0, Tt(e, t.text, l.mode, r, function (e, t) {
                        var r = s;
                        while (c < e) {
                            var n = i[s];
                            n > e && i.splice(s, 1, e, i[s + 1], n), s += 2, c = Math.min(e, n)
                        }
                        if (t) if (l.opaque) i.splice(r, s - r, e, "overlay " + t), s = r + 2; else for (; r < s; r += 2) {
                            var o = i[r + 1];
                            i[r + 1] = (o ? o + " " : "") + "overlay " + t
                        }
                    }, o), r.state = a, r.baseTokens = null, r.baseTokenPos = 1
                }, s = 0; s < e.state.overlays.length; ++s) l(s);
                return {styles: i, classes: o.bgClass || o.textClass ? o : null}
            }

            function vt(e, t, r) {
                if (!t.styles || t.styles[0] != e.state.modeGen) {
                    var n = yt(e, et(t)), i = t.text.length > e.options.maxHighlightLength && $e(e.doc.mode, n.state),
                        o = gt(e, t, n);
                    i && (n.state = i), t.stateAfter = n.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), r === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
                }
                return t.styles
            }

            function yt(e, t, r) {
                var n = e.doc, i = e.display;
                if (!n.mode.startState) return new mt(n, !0, t);
                var o = Lt(e, t, r), a = o > n.first && Ye(n, o - 1).stateAfter,
                    l = a ? mt.fromSaved(n, a, o) : new mt(n, _e(n.mode), o);
                return n.iter(o, t, function (r) {
                    bt(e, r.text, l);
                    var n = l.line;
                    r.stateAfter = n == t - 1 || n % 5 == 0 || n >= i.viewFrom && n < i.viewTo ? l.save() : null, l.nextLine()
                }), r && (n.modeFrontier = l.line), l
            }

            function bt(e, t, r, n) {
                var i = e.doc.mode, o = new Xe(t, e.options.tabSize, r);
                o.start = o.pos = n || 0, "" == t && wt(i, r.state);
                while (!o.eol()) xt(i, o, r.state), o.start = o.pos
            }

            function wt(e, t) {
                if (e.blankLine) return e.blankLine(t);
                if (e.innerMode) {
                    var r = qe(e, t);
                    return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
                }
            }

            function xt(e, t, r, n) {
                for (var i = 0; i < 10; i++) {
                    n && (n[0] = qe(e, r).mode);
                    var o = e.token(t, r);
                    if (t.pos > t.start) return o
                }
                throw new Error("Mode " + e.name + " failed to advance stream.")
            }

            mt.prototype.lookAhead = function (e) {
                var t = this.doc.getLine(this.line + e);
                return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
            }, mt.prototype.baseToken = function (e) {
                var t = this;
                if (!this.baseTokens) return null;
                while (this.baseTokens[this.baseTokenPos] <= e) t.baseTokenPos += 2;
                var r = this.baseTokens[this.baseTokenPos + 1];
                return {type: r && r.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e}
            }, mt.prototype.nextLine = function () {
                this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
            }, mt.fromSaved = function (e, t, r) {
                return t instanceof pt ? new mt(e, $e(e.mode, t.state), r, t.lookAhead) : new mt(e, $e(e.mode, t), r)
            }, mt.prototype.save = function (e) {
                var t = !1 !== e ? $e(this.doc.mode, this.state) : this.state;
                return this.maxLookAhead > 0 ? new pt(t, this.maxLookAhead) : t
            };
            var kt = function (e, t, r) {
                this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = r
            };

            function Ct(e, t, r, n) {
                var i, o = e.doc, a = o.mode;
                t = dt(o, t);
                var l, s = Ye(o, t.line), c = yt(e, t.line, r), u = new Xe(s.text, e.options.tabSize, c);
                n && (l = []);
                while ((n || u.pos < t.ch) && !u.eol()) u.start = u.pos, i = xt(a, u, c.state), n && l.push(new kt(u, i, $e(o.mode, c.state)));
                return n ? l : new kt(u, i, c.state)
            }

            function St(e, t) {
                if (e) for (; ;) {
                    var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!r) break;
                    e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
                    var n = r[1] ? "bgClass" : "textClass";
                    null == t[n] ? t[n] = r[2] : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) || (t[n] += " " + r[2])
                }
                return e
            }

            function Tt(e, t, r, n, i, o, a) {
                var l = r.flattenSpans;
                null == l && (l = e.options.flattenSpans);
                var s, c = 0, u = null, d = new Xe(t, e.options.tabSize, n), f = e.options.addModeClass && [null];
                "" == t && St(wt(r, n.state), o);
                while (!d.eol()) {
                    if (d.pos > e.options.maxHighlightLength ? (l = !1, a && bt(e, t, n, d.pos), d.pos = t.length, s = null) : s = St(xt(r, d, n.state, f), o), f) {
                        var h = f[0].name;
                        h && (s = "m-" + (s ? h + " " + s : h))
                    }
                    if (!l || u != s) {
                        while (c < d.start) c = Math.min(d.start, c + 5e3), i(c, u);
                        u = s
                    }
                    d.start = d.pos
                }
                while (c < d.pos) {
                    var p = Math.min(d.pos, c + 5e3);
                    i(p, u), c = p
                }
            }

            function Lt(e, t, r) {
                for (var n, i, o = e.doc, a = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t; l > a; --l) {
                    if (l <= o.first) return o.first;
                    var s = Ye(o, l - 1), c = s.stateAfter;
                    if (c && (!r || l + (c instanceof pt ? c.lookAhead : 0) <= o.modeFrontier)) return l;
                    var u = I(s.text, null, e.options.tabSize);
                    (null == i || n > u) && (i = l - 1, n = u)
                }
                return i
            }

            function Mt(e, t) {
                if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                    for (var r = e.first, n = t - 1; n > r; n--) {
                        var i = Ye(e, n).stateAfter;
                        if (i && (!(i instanceof pt) || n + i.lookAhead < t)) {
                            r = n + 1;
                            break
                        }
                    }
                    e.highlightFrontier = Math.min(e.highlightFrontier, r)
                }
            }

            var Ot = !1, Nt = !1;

            function At() {
                Ot = !0
            }

            function Dt() {
                Nt = !0
            }

            function Wt(e, t, r) {
                this.marker = e, this.from = t, this.to = r
            }

            function zt(e, t) {
                if (e) for (var r = 0; r < e.length; ++r) {
                    var n = e[r];
                    if (n.marker == t) return n
                }
            }

            function Pt(e, t) {
                for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
                return r
            }

            function Et(e, t) {
                e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
            }

            function Ft(e, t, r) {
                var n;
                if (e) for (var i = 0; i < e.length; ++i) {
                    var o = e[i], a = o.marker, l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                    if (l || o.from == t && "bookmark" == a.type && (!r || !o.marker.insertLeft)) {
                        var s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                        (n || (n = [])).push(new Wt(a, o.from, s ? null : o.to))
                    }
                }
                return n
            }

            function Ht(e, t, r) {
                var n;
                if (e) for (var i = 0; i < e.length; ++i) {
                    var o = e[i], a = o.marker, l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                    if (l || o.from == t && "bookmark" == a.type && (!r || o.marker.insertLeft)) {
                        var s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                        (n || (n = [])).push(new Wt(a, s ? null : o.from - t, null == o.to ? null : o.to - t))
                    }
                }
                return n
            }

            function It(e, t) {
                if (t.full) return null;
                var r = rt(e, t.from.line) && Ye(e, t.from.line).markedSpans,
                    n = rt(e, t.to.line) && Ye(e, t.to.line).markedSpans;
                if (!r && !n) return null;
                var i = t.from.ch, o = t.to.ch, a = 0 == ot(t.from, t.to), l = Ft(r, i, a), s = Ht(n, o, a),
                    c = 1 == t.text.length, u = X(t.text).length + (c ? i : 0);
                if (l) for (var d = 0; d < l.length; ++d) {
                    var f = l[d];
                    if (null == f.to) {
                        var h = zt(s, f.marker);
                        h ? c && (f.to = null == h.to ? null : h.to + u) : f.to = i
                    }
                }
                if (s) for (var p = 0; p < s.length; ++p) {
                    var m = s[p];
                    if (null != m.to && (m.to += u), null == m.from) {
                        var g = zt(l, m.marker);
                        g || (m.from = u, c && (l || (l = [])).push(m))
                    } else m.from += u, c && (l || (l = [])).push(m)
                }
                l && (l = Rt(l)), s && s != l && (s = Rt(s));
                var v = [l];
                if (!c) {
                    var y, b = t.text.length - 2;
                    if (b > 0 && l) for (var w = 0; w < l.length; ++w) null == l[w].to && (y || (y = [])).push(new Wt(l[w].marker, null, null));
                    for (var x = 0; x < b; ++x) v.push(y);
                    v.push(s)
                }
                return v
            }

            function Rt(e) {
                for (var t = 0; t < e.length; ++t) {
                    var r = e[t];
                    null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1)
                }
                return e.length ? e : null
            }

            function Bt(e, t, r) {
                var n = null;
                if (e.iter(t.line, r.line + 1, function (e) {
                    if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                        var r = e.markedSpans[t].marker;
                        !r.readOnly || n && -1 != B(n, r) || (n || (n = [])).push(r)
                    }
                }), !n) return null;
                for (var i = [{
                    from: t,
                    to: r
                }], o = 0; o < n.length; ++o) for (var a = n[o], l = a.find(0), s = 0; s < i.length; ++s) {
                    var c = i[s];
                    if (!(ot(c.to, l.from) < 0 || ot(c.from, l.to) > 0)) {
                        var u = [s, 1], d = ot(c.from, l.from), f = ot(c.to, l.to);
                        (d < 0 || !a.inclusiveLeft && !d) && u.push({
                            from: c.from,
                            to: l.from
                        }), (f > 0 || !a.inclusiveRight && !f) && u.push({
                            from: l.to,
                            to: c.to
                        }), i.splice.apply(i, u), s += u.length - 3
                    }
                }
                return i
            }

            function jt(e) {
                var t = e.markedSpans;
                if (t) {
                    for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
                    e.markedSpans = null
                }
            }

            function Vt(e, t) {
                if (t) {
                    for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
                    e.markedSpans = t
                }
            }

            function Kt(e) {
                return e.inclusiveLeft ? -1 : 0
            }

            function Gt(e) {
                return e.inclusiveRight ? 1 : 0
            }

            function Ut(e, t) {
                var r = e.lines.length - t.lines.length;
                if (0 != r) return r;
                var n = e.find(), i = t.find(), o = ot(n.from, i.from) || Kt(e) - Kt(t);
                if (o) return -o;
                var a = ot(n.to, i.to) || Gt(e) - Gt(t);
                return a || t.id - e.id
            }

            function $t(e, t) {
                var r, n = Nt && e.markedSpans;
                if (n) for (var i = void 0, o = 0; o < n.length; ++o) i = n[o], i.marker.collapsed && null == (t ? i.from : i.to) && (!r || Ut(r, i.marker) < 0) && (r = i.marker);
                return r
            }

            function qt(e) {
                return $t(e, !0)
            }

            function _t(e) {
                return $t(e, !1)
            }

            function Xt(e, t) {
                var r, n = Nt && e.markedSpans;
                if (n) for (var i = 0; i < n.length; ++i) {
                    var o = n[i];
                    o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!r || Ut(r, o.marker) < 0) && (r = o.marker)
                }
                return r
            }

            function Yt(e, t, r, n, i) {
                var o = Ye(e, t), a = Nt && o.markedSpans;
                if (a) for (var l = 0; l < a.length; ++l) {
                    var s = a[l];
                    if (s.marker.collapsed) {
                        var c = s.marker.find(0), u = ot(c.from, r) || Kt(s.marker) - Kt(i),
                            d = ot(c.to, n) || Gt(s.marker) - Gt(i);
                        if (!(u >= 0 && d <= 0 || u <= 0 && d >= 0) && (u <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? ot(c.to, r) >= 0 : ot(c.to, r) > 0) || u >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? ot(c.from, n) <= 0 : ot(c.from, n) < 0))) return !0
                    }
                }
            }

            function Zt(e) {
                var t;
                while (t = qt(e)) e = t.find(-1, !0).line;
                return e
            }

            function Jt(e) {
                var t;
                while (t = _t(e)) e = t.find(1, !0).line;
                return e
            }

            function Qt(e) {
                var t, r;
                while (t = _t(e)) e = t.find(1, !0).line, (r || (r = [])).push(e);
                return r
            }

            function er(e, t) {
                var r = Ye(e, t), n = Zt(r);
                return r == n ? t : et(n)
            }

            function tr(e, t) {
                if (t > e.lastLine()) return t;
                var r, n = Ye(e, t);
                if (!rr(e, n)) return t;
                while (r = _t(n)) n = r.find(1, !0).line;
                return et(n) + 1
            }

            function rr(e, t) {
                var r = Nt && t.markedSpans;
                if (r) for (var n = void 0, i = 0; i < r.length; ++i) if (n = r[i], n.marker.collapsed) {
                    if (null == n.from) return !0;
                    if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && nr(e, t, n)) return !0
                }
            }

            function nr(e, t, r) {
                if (null == r.to) {
                    var n = r.marker.find(1, !0);
                    return nr(e, n.line, zt(n.line.markedSpans, r.marker))
                }
                if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
                for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && nr(e, t, i)) return !0
            }

            function ir(e) {
                e = Zt(e);
                for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
                    var i = r.lines[n];
                    if (i == e) break;
                    t += i.height
                }
                for (var o = r.parent; o; r = o, o = r.parent) for (var a = 0; a < o.children.length; ++a) {
                    var l = o.children[a];
                    if (l == r) break;
                    t += l.height
                }
                return t
            }

            function or(e) {
                if (0 == e.height) return 0;
                var t, r = e.text.length, n = e;
                while (t = qt(n)) {
                    var i = t.find(0, !0);
                    n = i.from.line, r += i.from.ch - i.to.ch
                }
                n = e;
                while (t = _t(n)) {
                    var o = t.find(0, !0);
                    r -= n.text.length - o.from.ch, n = o.to.line, r += n.text.length - o.to.ch
                }
                return r
            }

            function ar(e) {
                var t = e.display, r = e.doc;
                t.maxLine = Ye(r, r.first), t.maxLineLength = or(t.maxLine), t.maxLineChanged = !0, r.iter(function (e) {
                    var r = or(e);
                    r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e)
                })
            }

            var lr = function (e, t, r) {
                this.text = e, Vt(this, t), this.height = r ? r(this) : 1
            };

            function sr(e, t, r, n) {
                e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), jt(e), Vt(e, r);
                var i = n ? n(e) : 1;
                i != e.height && Qe(e, i)
            }

            function cr(e) {
                e.parent = null, jt(e)
            }

            lr.prototype.lineNo = function () {
                return et(this)
            }, xe(lr);
            var ur = {}, dr = {};

            function fr(e, t) {
                if (!e || /^\s*$/.test(e)) return null;
                var r = t.addModeClass ? dr : ur;
                return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"))
            }

            function hr(e, t) {
                var r = A("span", null, null, s ? "padding-right: .1px" : null), n = {
                    pre: A("pre", [r], "CodeMirror-line"),
                    content: r,
                    col: 0,
                    pos: 0,
                    cm: e,
                    trailingSpace: !1,
                    splitSpaces: e.getOption("lineWrapping")
                };
                t.measure = {};
                for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                    var o = i ? t.rest[i - 1] : t.line, a = void 0;
                    n.pos = 0, n.addToken = mr, We(e.display.measure) && (a = fe(o, e.doc.direction)) && (n.addToken = vr(n.addToken, a)), n.map = [];
                    var l = t != e.display.externalMeasured && et(o);
                    br(o, n, vt(e, o, l)), o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = P(o.styleClasses.bgClass, n.bgClass || "")), o.styleClasses.textClass && (n.textClass = P(o.styleClasses.textClass, n.textClass || ""))), 0 == n.map.length && n.map.push(0, 0, n.content.appendChild(De(e.display.measure))), 0 == i ? (t.measure.map = n.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}))
                }
                if (s) {
                    var c = n.content.lastChild;
                    (/\bcm-tab\b/.test(c.className) || c.querySelector && c.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack")
                }
                return ve(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = P(n.pre.className, n.textClass || "")), n
            }

            function pr(e) {
                var t = N("span", "•", "cm-invalidchar");
                return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
            }

            function mr(e, t, r, n, i, o, s) {
                if (t) {
                    var c, u = e.splitSpaces ? gr(t, e.trailingSpace) : t, d = e.cm.state.specialChars, f = !1;
                    if (d.test(t)) {
                        c = document.createDocumentFragment();
                        var h = 0;
                        while (1) {
                            d.lastIndex = h;
                            var p = d.exec(t), m = p ? p.index - h : t.length - h;
                            if (m) {
                                var g = document.createTextNode(u.slice(h, h + m));
                                a && l < 9 ? c.appendChild(N("span", [g])) : c.appendChild(g), e.map.push(e.pos, e.pos + m, g), e.col += m, e.pos += m
                            }
                            if (!p) break;
                            h += m + 1;
                            var v = void 0;
                            if ("\t" == p[0]) {
                                var y = e.cm.options.tabSize, b = y - e.col % y;
                                v = c.appendChild(N("span", _(b), "cm-tab")), v.setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += b
                            } else "\r" == p[0] || "\n" == p[0] ? (v = c.appendChild(N("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar")), v.setAttribute("cm-text", p[0]), e.col += 1) : (v = e.cm.options.specialCharPlaceholder(p[0]), v.setAttribute("cm-text", p[0]), a && l < 9 ? c.appendChild(N("span", [v])) : c.appendChild(v), e.col += 1);
                            e.map.push(e.pos, e.pos + 1, v), e.pos++
                        }
                    } else e.col += t.length, c = document.createTextNode(u), e.map.push(e.pos, e.pos + t.length, c), a && l < 9 && (f = !0), e.pos += t.length;
                    if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1), r || n || i || f || o) {
                        var w = r || "";
                        n && (w += n), i && (w += i);
                        var x = N("span", [c], w, o);
                        if (s) for (var k in s) s.hasOwnProperty(k) && "style" != k && "class" != k && x.setAttribute(k, s[k]);
                        return e.content.appendChild(x)
                    }
                    e.content.appendChild(c)
                }
            }

            function gr(e, t) {
                if (e.length > 1 && !/  /.test(e)) return e;
                for (var r = t, n = "", i = 0; i < e.length; i++) {
                    var o = e.charAt(i);
                    " " != o || !r || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), n += o, r = " " == o
                }
                return n
            }

            function vr(e, t) {
                return function (r, n, i, o, a, l, s) {
                    i = i ? i + " cm-force-border" : "cm-force-border";
                    for (var c = r.pos, u = c + n.length; ;) {
                        for (var d = void 0, f = 0; f < t.length; f++) if (d = t[f], d.to > c && d.from <= c) break;
                        if (d.to >= u) return e(r, n, i, o, a, l, s);
                        e(r, n.slice(0, d.to - c), i, o, null, l, s), o = null, n = n.slice(d.to - c), c = d.to
                    }
                }
            }

            function yr(e, t, r, n) {
                var i = !n && r.widgetNode;
                i && e.map.push(e.pos, e.pos + t, i), !n && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", r.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
            }

            function br(e, t, r) {
                var n = e.markedSpans, i = e.text, o = 0;
                if (n) for (var a, l, s, c, u, d, f, h = i.length, p = 0, m = 1, g = "", v = 0; ;) {
                    if (v == p) {
                        s = c = u = l = "", f = null, d = null, v = 1 / 0;
                        for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                            var x = n[w], k = x.marker;
                            if ("bookmark" == k.type && x.from == p && k.widgetNode) y.push(k); else if (x.from <= p && (null == x.to || x.to > p || k.collapsed && x.to == p && x.from == p)) {
                                if (null != x.to && x.to != p && v > x.to && (v = x.to, c = ""), k.className && (s += " " + k.className), k.css && (l = (l ? l + ";" : "") + k.css), k.startStyle && x.from == p && (u += " " + k.startStyle), k.endStyle && x.to == v && (b || (b = [])).push(k.endStyle, x.to), k.title && ((f || (f = {})).title = k.title), k.attributes) for (var C in k.attributes) (f || (f = {}))[C] = k.attributes[C];
                                k.collapsed && (!d || Ut(d.marker, k) < 0) && (d = x)
                            } else x.from > p && v > x.from && (v = x.from)
                        }
                        if (b) for (var S = 0; S < b.length; S += 2) b[S + 1] == v && (c += " " + b[S]);
                        if (!d || d.from == p) for (var T = 0; T < y.length; ++T) yr(t, 0, y[T]);
                        if (d && (d.from || 0) == p) {
                            if (yr(t, (null == d.to ? h + 1 : d.to) - p, d.marker, null == d.from), null == d.to) return;
                            d.to == p && (d = !1)
                        }
                    }
                    if (p >= h) break;
                    var L = Math.min(h, v);
                    while (1) {
                        if (g) {
                            var M = p + g.length;
                            if (!d) {
                                var O = M > L ? g.slice(0, L - p) : g;
                                t.addToken(t, O, a ? a + s : s, u, p + O.length == v ? c : "", l, f)
                            }
                            if (M >= L) {
                                g = g.slice(L - p), p = L;
                                break
                            }
                            p = M, u = ""
                        }
                        g = i.slice(o, o = r[m++]), a = fr(r[m++], t.cm.options)
                    }
                } else for (var N = 1; N < r.length; N += 2) t.addToken(t, i.slice(o, o = r[N]), fr(r[N + 1], t.cm.options))
            }

            function wr(e, t, r) {
                this.line = t, this.rest = Qt(t), this.size = this.rest ? et(X(this.rest)) - r + 1 : 1, this.node = this.text = null, this.hidden = rr(e, t)
            }

            function xr(e, t, r) {
                for (var n, i = [], o = t; o < r; o = n) {
                    var a = new wr(e.doc, Ye(e.doc, o), o);
                    n = o + a.size, i.push(a)
                }
                return i
            }

            var kr = null;

            function Cr(e) {
                kr ? kr.ops.push(e) : e.ownsGroup = kr = {ops: [e], delayedCallbacks: []}
            }

            function Sr(e) {
                var t = e.delayedCallbacks, r = 0;
                do {
                    for (; r < t.length; r++) t[r].call(null);
                    for (var n = 0; n < e.ops.length; n++) {
                        var i = e.ops[n];
                        if (i.cursorActivityHandlers) while (i.cursorActivityCalled < i.cursorActivityHandlers.length) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                    }
                } while (r < t.length)
            }

            function Tr(e, t) {
                var r = e.ownsGroup;
                if (r) try {
                    Sr(r)
                } finally {
                    kr = null, t(r)
                }
            }

            var Lr = null;

            function Mr(e, t) {
                var r = me(e, t);
                if (r.length) {
                    var n, i = Array.prototype.slice.call(arguments, 2);
                    kr ? n = kr.delayedCallbacks : Lr ? n = Lr : (n = Lr = [], setTimeout(Or, 0));
                    for (var o = function (e) {
                        n.push(function () {
                            return r[e].apply(null, i)
                        })
                    }, a = 0; a < r.length; ++a) o(a)
                }
            }

            function Or() {
                var e = Lr;
                Lr = null;
                for (var t = 0; t < e.length; ++t) e[t]()
            }

            function Nr(e, t, r, n) {
                for (var i = 0; i < t.changes.length; i++) {
                    var o = t.changes[i];
                    "text" == o ? zr(e, t) : "gutter" == o ? Er(e, t, r, n) : "class" == o ? Pr(e, t) : "widget" == o && Fr(e, t, n)
                }
                t.changes = null
            }

            function Ar(e) {
                return e.node == e.text && (e.node = N("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), a && l < 8 && (e.node.style.zIndex = 2)), e.node
            }

            function Dr(e, t) {
                var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                if (r && (r += " CodeMirror-linebackground"), t.background) r ? t.background.className = r : (t.background.parentNode.removeChild(t.background), t.background = null); else if (r) {
                    var n = Ar(t);
                    t.background = n.insertBefore(N("div", null, r), n.firstChild), e.display.input.setUneditable(t.background)
                }
            }

            function Wr(e, t) {
                var r = e.display.externalMeasured;
                return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, r.built) : hr(e, t)
            }

            function zr(e, t) {
                var r = t.text.className, n = Wr(e, t);
                t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, t.textClass = n.textClass, Pr(e, t)) : r && (t.text.className = r)
            }

            function Pr(e, t) {
                Dr(e, t), t.line.wrapClass ? Ar(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
                var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                t.text.className = r || ""
            }

            function Er(e, t, r, n) {
                if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                    var i = Ar(t);
                    t.gutterBackground = N("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
                }
                var o = t.line.gutterMarkers;
                if (e.options.lineNumbers || o) {
                    var a = Ar(t),
                        l = t.gutter = N("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
                    if (e.display.input.setUneditable(l), a.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(N("div", nt(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o) for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                        var c = e.display.gutterSpecs[s].className, u = o.hasOwnProperty(c) && o[c];
                        u && l.appendChild(N("div", [u], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[c] + "px; width: " + n.gutterWidth[c] + "px"))
                    }
                }
            }

            function Fr(e, t, r) {
                t.alignable && (t.alignable = null);
                for (var n = t.node.firstChild, i = void 0; n; n = i) i = n.nextSibling, "CodeMirror-linewidget" == n.className && t.node.removeChild(n);
                Ir(e, t, r)
            }

            function Hr(e, t, r, n) {
                var i = Wr(e, t);
                return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), Pr(e, t), Er(e, t, r, n), Ir(e, t, n), t.node
            }

            function Ir(e, t, r) {
                if (Rr(e, t.line, t, r, !0), t.rest) for (var n = 0; n < t.rest.length; n++) Rr(e, t.rest[n], t, r, !1)
            }

            function Rr(e, t, r, n, i) {
                if (t.widgets) for (var o = Ar(r), a = 0, l = t.widgets; a < l.length; ++a) {
                    var s = l[a], c = N("div", [s.node], "CodeMirror-linewidget");
                    s.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), Br(s, c, r, n), e.display.input.setUneditable(c), i && s.above ? o.insertBefore(c, r.gutter || r.text) : o.appendChild(c), Mr(s, "redraw")
                }
            }

            function Br(e, t, r, n) {
                if (e.noHScroll) {
                    (r.alignable || (r.alignable = [])).push(t);
                    var i = n.wrapperWidth;
                    t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = i + "px"
                }
                e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
            }

            function jr(e) {
                if (null != e.height) return e.height;
                var t = e.doc.cm;
                if (!t) return 0;
                if (!D(document.body, e.node)) {
                    var r = "position: relative;";
                    e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), O(t.display.measure, N("div", [e.node], null, r))
                }
                return e.height = e.node.parentNode.offsetHeight
            }

            function Vr(e, t) {
                for (var r = Le(t); r != e.wrapper; r = r.parentNode) if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0
            }

            function Kr(e) {
                return e.lineSpace.offsetTop
            }

            function Gr(e) {
                return e.mover.offsetHeight - e.lineSpace.offsetHeight
            }

            function Ur(e) {
                if (e.cachedPaddingH) return e.cachedPaddingH;
                var t = O(e.measure, N("pre", "x")),
                    r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                    n = {left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight)};
                return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n
            }

            function $r(e) {
                return j - e.display.nativeBarWidth
            }

            function qr(e) {
                return e.display.scroller.clientWidth - $r(e) - e.display.barWidth
            }

            function _r(e) {
                return e.display.scroller.clientHeight - $r(e) - e.display.barHeight
            }

            function Xr(e, t, r) {
                var n = e.options.lineWrapping, i = n && qr(e);
                if (!t.measure.heights || n && t.measure.width != i) {
                    var o = t.measure.heights = [];
                    if (n) {
                        t.measure.width = i;
                        for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) {
                            var s = a[l], c = a[l + 1];
                            Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - r.top)
                        }
                    }
                    o.push(r.bottom - r.top)
                }
            }

            function Yr(e, t, r) {
                if (e.line == t) return {map: e.measure.map, cache: e.measure.cache};
                for (var n = 0; n < e.rest.length; n++) if (e.rest[n] == t) return {
                    map: e.measure.maps[n],
                    cache: e.measure.caches[n]
                };
                for (var i = 0; i < e.rest.length; i++) if (et(e.rest[i]) > r) return {
                    map: e.measure.maps[i],
                    cache: e.measure.caches[i],
                    before: !0
                }
            }

            function Zr(e, t) {
                t = Zt(t);
                var r = et(t), n = e.display.externalMeasured = new wr(e.doc, t, r);
                n.lineN = r;
                var i = n.built = hr(e, n);
                return n.text = i.pre, O(e.display.lineMeasure, i.pre), n
            }

            function Jr(e, t, r, n) {
                return tn(e, en(e, t), r, n)
            }

            function Qr(e, t) {
                if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[En(e, t)];
                var r = e.display.externalMeasured;
                return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
            }

            function en(e, t) {
                var r = et(t), n = Qr(e, r);
                n && !n.text ? n = null : n && n.changes && (Nr(e, n, r, An(e)), e.curOp.forceUpdate = !0), n || (n = Zr(e, t));
                var i = Yr(n, t, r);
                return {line: t, view: n, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1}
            }

            function tn(e, t, r, n, i) {
                t.before && (r = -1);
                var o, a = r + (n || "");
                return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Xr(e, t.view, t.rect), t.hasHeights = !0), o = ln(e, t, r, n), o.bogus || (t.cache[a] = o)), {
                    left: o.left,
                    right: o.right,
                    top: i ? o.rtop : o.top,
                    bottom: i ? o.rbottom : o.bottom
                }
            }

            var rn, nn = {left: 0, right: 0, top: 0, bottom: 0};

            function on(e, t, r) {
                for (var n, i, o, a, l, s, c = 0; c < e.length; c += 3) if (l = e[c], s = e[c + 1], t < l ? (i = 0, o = 1, a = "left") : t < s ? (i = t - l, o = i + 1) : (c == e.length - 3 || t == s && e[c + 3] > t) && (o = s - l, i = o - 1, t >= s && (a = "right")), null != i) {
                    if (n = e[c + 2], l == s && r == (n.insertLeft ? "left" : "right") && (a = r), "left" == r && 0 == i) while (c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft) n = e[2 + (c -= 3)], a = "left";
                    if ("right" == r && i == s - l) while (c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft) n = e[(c += 3) + 2], a = "right";
                    break
                }
                return {node: n, start: i, end: o, collapse: a, coverStart: l, coverEnd: s}
            }

            function an(e, t) {
                var r = nn;
                if ("left" == t) {
                    for (var n = 0; n < e.length; n++) if ((r = e[n]).left != r.right) break
                } else for (var i = e.length - 1; i >= 0; i--) if ((r = e[i]).left != r.right) break;
                return r
            }

            function ln(e, t, r, n) {
                var i, o = on(t.map, r, n), s = o.node, c = o.start, u = o.end, d = o.collapse;
                if (3 == s.nodeType) {
                    for (var f = 0; f < 4; f++) {
                        while (c && oe(t.line.text.charAt(o.coverStart + c))) --c;
                        while (o.coverStart + u < o.coverEnd && oe(t.line.text.charAt(o.coverStart + u))) ++u;
                        if (i = a && l < 9 && 0 == c && u == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : an(T(s, c, u).getClientRects(), n), i.left || i.right || 0 == c) break;
                        u = c, c -= 1, d = "right"
                    }
                    a && l < 11 && (i = sn(e.display.measure, i))
                } else {
                    var h;
                    c > 0 && (d = n = "right"), i = e.options.lineWrapping && (h = s.getClientRects()).length > 1 ? h["right" == n ? h.length - 1 : 0] : s.getBoundingClientRect()
                }
                if (a && l < 9 && !c && (!i || !i.left && !i.right)) {
                    var p = s.parentNode.getClientRects()[0];
                    i = p ? {left: p.left, right: p.left + Nn(e.display), top: p.top, bottom: p.bottom} : nn
                }
                for (var m = i.top - t.rect.top, g = i.bottom - t.rect.top, v = (m + g) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1; b++) if (v < y[b]) break;
                var w = b ? y[b - 1] : 0, x = y[b], k = {
                    left: ("right" == d ? i.right : i.left) - t.rect.left,
                    right: ("left" == d ? i.left : i.right) - t.rect.left,
                    top: w,
                    bottom: x
                };
                return i.left || i.right || (k.bogus = !0), e.options.singleCursorHeightPerLine || (k.rtop = m, k.rbottom = g), k
            }

            function sn(e, t) {
                if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !He(e)) return t;
                var r = screen.logicalXDPI / screen.deviceXDPI, n = screen.logicalYDPI / screen.deviceYDPI;
                return {left: t.left * r, right: t.right * r, top: t.top * n, bottom: t.bottom * n}
            }

            function cn(e) {
                if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
            }

            function un(e) {
                e.display.externalMeasure = null, M(e.display.lineMeasure);
                for (var t = 0; t < e.display.view.length; t++) cn(e.display.view[t])
            }

            function dn(e) {
                un(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
            }

            function fn() {
                return u && g ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
            }

            function hn() {
                return u && g ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
            }

            function pn(e) {
                var t = 0;
                if (e.widgets) for (var r = 0; r < e.widgets.length; ++r) e.widgets[r].above && (t += jr(e.widgets[r]));
                return t
            }

            function mn(e, t, r, n, i) {
                if (!i) {
                    var o = pn(t);
                    r.top += o, r.bottom += o
                }
                if ("line" == n) return r;
                n || (n = "local");
                var a = ir(t);
                if ("local" == n ? a += Kr(e.display) : a -= e.display.viewOffset, "page" == n || "window" == n) {
                    var l = e.display.lineSpace.getBoundingClientRect();
                    a += l.top + ("window" == n ? 0 : hn());
                    var s = l.left + ("window" == n ? 0 : fn());
                    r.left += s, r.right += s
                }
                return r.top += a, r.bottom += a, r
            }

            function gn(e, t, r) {
                if ("div" == r) return t;
                var n = t.left, i = t.top;
                if ("page" == r) n -= fn(), i -= hn(); else if ("local" == r || !r) {
                    var o = e.display.sizer.getBoundingClientRect();
                    n += o.left, i += o.top
                }
                var a = e.display.lineSpace.getBoundingClientRect();
                return {left: n - a.left, top: i - a.top}
            }

            function vn(e, t, r, n, i) {
                return n || (n = Ye(e.doc, t.line)), mn(e, n, Jr(e, n, t.ch, i), r)
            }

            function yn(e, t, r, n, i, o) {
                function a(t, a) {
                    var l = tn(e, i, t, a ? "right" : "left", o);
                    return a ? l.left = l.right : l.right = l.left, mn(e, n, l, r)
                }

                n = n || Ye(e.doc, t.line), i || (i = en(e, n));
                var l = fe(n, e.doc.direction), s = t.ch, c = t.sticky;
                if (s >= n.text.length ? (s = n.text.length, c = "before") : s <= 0 && (s = 0, c = "after"), !l) return a("before" == c ? s - 1 : s, "before" == c);

                function u(e, t, r) {
                    var n = l[t], i = 1 == n.level;
                    return a(r ? e - 1 : e, i != r)
                }

                var d = ue(l, s, c), f = ce, h = u(s, d, "before" == c);
                return null != f && (h.other = u(s, f, "before" != c)), h
            }

            function bn(e, t) {
                var r = 0;
                t = dt(e.doc, t), e.options.lineWrapping || (r = Nn(e.display) * t.ch);
                var n = Ye(e.doc, t.line), i = ir(n) + Kr(e.display);
                return {left: r, right: r, top: i, bottom: i + n.height}
            }

            function wn(e, t, r, n, i) {
                var o = it(e, t, r);
                return o.xRel = i, n && (o.outside = !0), o
            }

            function xn(e, t, r) {
                var n = e.doc;
                if (r += e.display.viewOffset, r < 0) return wn(n.first, 0, null, !0, -1);
                var i = tt(n, r), o = n.first + n.size - 1;
                if (i > o) return wn(n.first + n.size - 1, Ye(n, o).text.length, null, !0, 1);
                t < 0 && (t = 0);
                for (var a = Ye(n, i); ;) {
                    var l = Tn(e, a, i, t, r), s = Xt(a, l.ch + (l.xRel > 0 ? 1 : 0));
                    if (!s) return l;
                    var c = s.find(1);
                    if (c.line == i) return c;
                    a = Ye(n, i = c.line)
                }
            }

            function kn(e, t, r, n) {
                n -= pn(t);
                var i = t.text.length, o = le(function (t) {
                    return tn(e, r, t - 1).bottom <= n
                }, i, 0);
                return i = le(function (t) {
                    return tn(e, r, t).top > n
                }, o, i), {begin: o, end: i}
            }

            function Cn(e, t, r, n) {
                r || (r = en(e, t));
                var i = mn(e, t, tn(e, r, n), "line").top;
                return kn(e, t, r, i)
            }

            function Sn(e, t, r, n) {
                return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t)
            }

            function Tn(e, t, r, n, i) {
                i -= ir(t);
                var o = en(e, t), a = pn(t), l = 0, s = t.text.length, c = !0, u = fe(t, e.doc.direction);
                if (u) {
                    var d = (e.options.lineWrapping ? Mn : Ln)(e, t, r, o, u, n, i);
                    c = 1 != d.level, l = c ? d.from : d.to - 1, s = c ? d.to : d.from - 1
                }
                var f, h, p = null, m = null, g = le(function (t) {
                    var r = tn(e, o, t);
                    return r.top += a, r.bottom += a, !!Sn(r, n, i, !1) && (r.top <= i && r.left <= n && (p = t, m = r), !0)
                }, l, s), v = !1;
                if (m) {
                    var y = n - m.left < m.right - n, b = y == c;
                    g = p + (b ? 0 : 1), h = b ? "after" : "before", f = y ? m.left : m.right
                } else {
                    c || g != s && g != l || g++, h = 0 == g ? "after" : g == t.text.length ? "before" : tn(e, o, g - (c ? 1 : 0)).bottom + a <= i == c ? "after" : "before";
                    var w = yn(e, it(r, g, h), "line", t, o);
                    f = w.left, v = i < w.top || i >= w.bottom
                }
                return g = ae(t.text, g, 1), wn(r, g, h, v, n - f)
            }

            function Ln(e, t, r, n, i, o, a) {
                var l = le(function (l) {
                    var s = i[l], c = 1 != s.level;
                    return Sn(yn(e, it(r, c ? s.to : s.from, c ? "before" : "after"), "line", t, n), o, a, !0)
                }, 0, i.length - 1), s = i[l];
                if (l > 0) {
                    var c = 1 != s.level, u = yn(e, it(r, c ? s.from : s.to, c ? "after" : "before"), "line", t, n);
                    Sn(u, o, a, !0) && u.top > a && (s = i[l - 1])
                }
                return s
            }

            function Mn(e, t, r, n, i, o, a) {
                var l = kn(e, t, n, a), s = l.begin, c = l.end;
                /\s/.test(t.text.charAt(c - 1)) && c--;
                for (var u = null, d = null, f = 0; f < i.length; f++) {
                    var h = i[f];
                    if (!(h.from >= c || h.to <= s)) {
                        var p = 1 != h.level, m = tn(e, n, p ? Math.min(c, h.to) - 1 : Math.max(s, h.from)).right,
                            g = m < o ? o - m + 1e9 : m - o;
                        (!u || d > g) && (u = h, d = g)
                    }
                }
                return u || (u = i[i.length - 1]), u.from < s && (u = {
                    from: s,
                    to: u.to,
                    level: u.level
                }), u.to > c && (u = {from: u.from, to: c, level: u.level}), u
            }

            function On(e) {
                if (null != e.cachedTextHeight) return e.cachedTextHeight;
                if (null == rn) {
                    rn = N("pre");
                    for (var t = 0; t < 49; ++t) rn.appendChild(document.createTextNode("x")), rn.appendChild(N("br"));
                    rn.appendChild(document.createTextNode("x"))
                }
                O(e.measure, rn);
                var r = rn.offsetHeight / 50;
                return r > 3 && (e.cachedTextHeight = r), M(e.measure), r || 1
            }

            function Nn(e) {
                if (null != e.cachedCharWidth) return e.cachedCharWidth;
                var t = N("span", "xxxxxxxxxx"), r = N("pre", [t]);
                O(e.measure, r);
                var n = t.getBoundingClientRect(), i = (n.right - n.left) / 10;
                return i > 2 && (e.cachedCharWidth = i), i || 10
            }

            function An(e) {
                for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
                    var l = e.display.gutterSpecs[a].className;
                    r[l] = o.offsetLeft + o.clientLeft + i, n[l] = o.clientWidth
                }
                return {
                    fixedPos: Dn(t),
                    gutterTotalWidth: t.gutters.offsetWidth,
                    gutterLeft: r,
                    gutterWidth: n,
                    wrapperWidth: t.wrapper.clientWidth
                }
            }

            function Dn(e) {
                return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
            }

            function Wn(e) {
                var t = On(e.display), r = e.options.lineWrapping,
                    n = r && Math.max(5, e.display.scroller.clientWidth / Nn(e.display) - 3);
                return function (i) {
                    if (rr(e.doc, i)) return 0;
                    var o = 0;
                    if (i.widgets) for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
                    return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t
                }
            }

            function zn(e) {
                var t = e.doc, r = Wn(e);
                t.iter(function (e) {
                    var t = r(e);
                    t != e.height && Qe(e, t)
                })
            }

            function Pn(e, t, r, n) {
                var i = e.display;
                if (!r && "true" == Le(t).getAttribute("cm-not-content")) return null;
                var o, a, l = i.lineSpace.getBoundingClientRect();
                try {
                    o = t.clientX - l.left, a = t.clientY - l.top
                } catch (t) {
                    return null
                }
                var s, c = xn(e, o, a);
                if (n && 1 == c.xRel && (s = Ye(e.doc, c.line).text).length == c.ch) {
                    var u = I(s, s.length, e.options.tabSize) - s.length;
                    c = it(c.line, Math.max(0, Math.round((o - Ur(e.display).left) / Nn(e.display)) - u))
                }
                return c
            }

            function En(e, t) {
                if (t >= e.display.viewTo) return null;
                if (t -= e.display.viewFrom, t < 0) return null;
                for (var r = e.display.view, n = 0; n < r.length; n++) if (t -= r[n].size, t < 0) return n
            }

            function Fn(e, t, r, n) {
                null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
                var i = e.display;
                if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Nt && er(e.doc, t) < i.viewTo && In(e); else if (r <= i.viewFrom) Nt && tr(e.doc, r + n) > i.viewFrom ? In(e) : (i.viewFrom += n, i.viewTo += n); else if (t <= i.viewFrom && r >= i.viewTo) In(e); else if (t <= i.viewFrom) {
                    var o = Rn(e, r, r + n, 1);
                    o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) : In(e)
                } else if (r >= i.viewTo) {
                    var a = Rn(e, t, t, -1);
                    a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : In(e)
                } else {
                    var l = Rn(e, t, t, -1), s = Rn(e, r, r + n, 1);
                    l && s ? (i.view = i.view.slice(0, l.index).concat(xr(e, l.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += n) : In(e)
                }
                var c = i.externalMeasured;
                c && (r < c.lineN ? c.lineN += n : t < c.lineN + c.size && (i.externalMeasured = null))
            }

            function Hn(e, t, r) {
                e.curOp.viewChanged = !0;
                var n = e.display, i = e.display.externalMeasured;
                if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) {
                    var o = n.view[En(e, t)];
                    if (null != o.node) {
                        var a = o.changes || (o.changes = []);
                        -1 == B(a, r) && a.push(r)
                    }
                }
            }

            function In(e) {
                e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
            }

            function Rn(e, t, r, n) {
                var i, o = En(e, t), a = e.display.view;
                if (!Nt || r == e.doc.first + e.doc.size) return {index: o, lineN: r};
                for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
                if (l != t) {
                    if (n > 0) {
                        if (o == a.length - 1) return null;
                        i = l + a[o].size - t, o++
                    } else i = l - t;
                    t += i, r += i
                }
                while (er(e.doc, r) != r) {
                    if (o == (n < 0 ? 0 : a.length - 1)) return null;
                    r += n * a[o - (n < 0 ? 1 : 0)].size, o += n
                }
                return {index: o, lineN: r}
            }

            function Bn(e, t, r) {
                var n = e.display, i = n.view;
                0 == i.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = xr(e, t, r), n.viewFrom = t) : (n.viewFrom > t ? n.view = xr(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(En(e, t))), n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat(xr(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, En(e, r)))), n.viewTo = r
            }

            function jn(e) {
                for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.hidden || i.node && !i.changes || ++r
                }
                return r
            }

            function Vn(e) {
                e.display.input.showSelection(e.display.input.prepareSelection())
            }

            function Kn(e, t) {
                void 0 === t && (t = !0);
                for (var r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), a = 0; a < r.sel.ranges.length; a++) if (t || a != r.sel.primIndex) {
                    var l = r.sel.ranges[a];
                    if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
                        var s = l.empty();
                        (s || e.options.showCursorWhenSelecting) && Gn(e, l.head, i), s || $n(e, l, o)
                    }
                }
                return n
            }

            function Gn(e, t, r) {
                var n = yn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                    i = r.appendChild(N("div", " ", "CodeMirror-cursor"));
                if (i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", n.other) {
                    var o = r.appendChild(N("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    o.style.display = "", o.style.left = n.other.left + "px", o.style.top = n.other.top + "px", o.style.height = .85 * (n.other.bottom - n.other.top) + "px"
                }
            }

            function Un(e, t) {
                return e.top - t.top || e.left - t.left
            }

            function $n(e, t, r) {
                var n = e.display, i = e.doc, o = document.createDocumentFragment(), a = Ur(e.display), l = a.left,
                    s = Math.max(n.sizerWidth, qr(e) - n.sizer.offsetLeft) - a.right, c = "ltr" == i.direction;

                function u(e, t, r, n) {
                    t < 0 && (t = 0), t = Math.round(t), n = Math.round(n), o.appendChild(N("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? s - e : r) + "px;\n                             height: " + (n - t) + "px"))
                }

                function d(t, r, n) {
                    var o, a, d = Ye(i, t), f = d.text.length;

                    function h(r, n) {
                        return vn(e, it(t, r), "div", d, n)
                    }

                    function p(t, r, n) {
                        var i = Cn(e, d, null, t), o = "ltr" == r == ("after" == n) ? "left" : "right",
                            a = "after" == n ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1);
                        return h(a, o)[o]
                    }

                    var m = fe(d, i.direction);
                    return se(m, r || 0, null == n ? f : n, function (e, t, i, d) {
                        var g = "ltr" == i, v = h(e, g ? "left" : "right"), y = h(t - 1, g ? "right" : "left"),
                            b = null == r && 0 == e, w = null == n && t == f, x = 0 == d, k = !m || d == m.length - 1;
                        if (y.top - v.top <= 3) {
                            var C = (c ? b : w) && x, S = (c ? w : b) && k, T = C ? l : (g ? v : y).left,
                                L = S ? s : (g ? y : v).right;
                            u(T, v.top, L - T, v.bottom)
                        } else {
                            var M, O, N, A;
                            g ? (M = c && b && x ? l : v.left, O = c ? s : p(e, i, "before"), N = c ? l : p(t, i, "after"), A = c && w && k ? s : y.right) : (M = c ? p(e, i, "before") : l, O = !c && b && x ? s : v.right, N = !c && w && k ? l : y.left, A = c ? p(t, i, "after") : s), u(M, v.top, O - M, v.bottom), v.bottom < y.top && u(l, v.bottom, null, y.top), u(N, y.top, A - N, y.bottom)
                        }
                        (!o || Un(v, o) < 0) && (o = v), Un(y, o) < 0 && (o = y), (!a || Un(v, a) < 0) && (a = v), Un(y, a) < 0 && (a = y)
                    }), {start: o, end: a}
                }

                var f = t.from(), h = t.to();
                if (f.line == h.line) d(f.line, f.ch, h.ch); else {
                    var p = Ye(i, f.line), m = Ye(i, h.line), g = Zt(p) == Zt(m),
                        v = d(f.line, f.ch, g ? p.text.length + 1 : null).end, y = d(h.line, g ? 0 : null, h.ch).start;
                    g && (v.top < y.top - 2 ? (u(v.right, v.top, null, v.bottom), u(l, y.top, y.left, y.bottom)) : u(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && u(l, v.bottom, null, y.top)
                }
                r.appendChild(o)
            }

            function qn(e) {
                if (e.state.focused) {
                    var t = e.display;
                    clearInterval(t.blinker);
                    var r = !0;
                    t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
                        return t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden"
                    }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
                }
            }

            function _n(e) {
                e.state.focused || (e.display.input.focus(), Yn(e))
            }

            function Xn(e) {
                e.state.delayingBlurEvent = !0, setTimeout(function () {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, Zn(e))
                }, 100)
            }

            function Yn(e, t) {
                e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (ve(e, "focus", e, t), e.state.focused = !0, z(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), s && setTimeout(function () {
                    return e.display.input.reset(!0)
                }, 20)), e.display.input.receivedFocus()), qn(e))
            }

            function Zn(e, t) {
                e.state.delayingBlurEvent || (e.state.focused && (ve(e, "blur", e, t), e.state.focused = !1, L(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
                    e.state.focused || (e.display.shift = !1)
                }, 150))
            }

            function Jn(e) {
                for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
                    var i = t.view[n], o = e.options.lineWrapping, s = void 0, c = 0;
                    if (!i.hidden) {
                        if (a && l < 8) {
                            var u = i.node.offsetTop + i.node.offsetHeight;
                            s = u - r, r = u
                        } else {
                            var d = i.node.getBoundingClientRect();
                            s = d.bottom - d.top, !o && i.text.firstChild && (c = i.text.firstChild.getBoundingClientRect().right - d.left - 1)
                        }
                        var f = i.line.height - s;
                        if ((f > .005 || f < -.005) && (Qe(i.line, s), Qn(i.line), i.rest)) for (var h = 0; h < i.rest.length; h++) Qn(i.rest[h]);
                        if (c > e.display.sizerWidth) {
                            var p = Math.ceil(c / Nn(e.display));
                            p > e.display.maxLineLength && (e.display.maxLineLength = p, e.display.maxLine = i.line, e.display.maxLineChanged = !0)
                        }
                    }
                }
            }

            function Qn(e) {
                if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
                    var r = e.widgets[t], n = r.node.parentNode;
                    n && (r.height = n.offsetHeight)
                }
            }

            function ei(e, t, r) {
                var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
                n = Math.floor(n - Kr(e));
                var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight, o = tt(t, n), a = tt(t, i);
                if (r && r.ensure) {
                    var l = r.ensure.from.line, s = r.ensure.to.line;
                    l < o ? (o = l, a = tt(t, ir(Ye(t, l)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= a && (o = tt(t, ir(Ye(t, s)) - e.wrapper.clientHeight), a = s)
                }
                return {from: o, to: Math.max(a, o + 1)}
            }

            function ti(e, t) {
                if (!ye(e, "scrollCursorIntoView")) {
                    var r = e.display, n = r.sizer.getBoundingClientRect(), i = null;
                    if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p) {
                        var o = N("div", "​", null, "position: absolute;\n                         top: " + (t.top - r.viewOffset - Kr(e.display)) + "px;\n                         height: " + (t.bottom - t.top + $r(e) + r.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                        e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
                    }
                }
            }

            function ri(e, t, r, n) {
                var i;
                null == n && (n = 0), e.options.lineWrapping || t != r || (t = t.ch ? it(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t, r = "before" == t.sticky ? it(t.line, t.ch + 1, "before") : t);
                for (var o = 0; o < 5; o++) {
                    var a = !1, l = yn(e, t), s = r && r != t ? yn(e, r) : l;
                    i = {
                        left: Math.min(l.left, s.left),
                        top: Math.min(l.top, s.top) - n,
                        right: Math.max(l.left, s.left),
                        bottom: Math.max(l.bottom, s.bottom) + n
                    };
                    var c = ii(e, i), u = e.doc.scrollTop, d = e.doc.scrollLeft;
                    if (null != c.scrollTop && (di(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)), null != c.scrollLeft && (hi(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)), !a) break
                }
                return i
            }

            function ni(e, t) {
                var r = ii(e, t);
                null != r.scrollTop && di(e, r.scrollTop), null != r.scrollLeft && hi(e, r.scrollLeft)
            }

            function ii(e, t) {
                var r = e.display, n = On(e.display);
                t.top < 0 && (t.top = 0);
                var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop, o = _r(e),
                    a = {};
                t.bottom - t.top > o && (t.bottom = t.top + o);
                var l = e.doc.height + Gr(r), s = t.top < n, c = t.bottom > l - n;
                if (t.top < i) a.scrollTop = s ? 0 : t.top; else if (t.bottom > i + o) {
                    var u = Math.min(t.top, (c ? l : t.bottom) - o);
                    u != i && (a.scrollTop = u)
                }
                var d = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft,
                    f = qr(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0), h = t.right - t.left > f;
                return h && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < d ? a.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)) : t.right > f + d - 3 && (a.scrollLeft = t.right + (h ? 0 : 10) - f), a
            }

            function oi(e, t) {
                null != t && (ci(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
            }

            function ai(e) {
                ci(e);
                var t = e.getCursor();
                e.curOp.scrollToPos = {from: t, to: t, margin: e.options.cursorScrollMargin}
            }

            function li(e, t, r) {
                null == t && null == r || ci(e), null != t && (e.curOp.scrollLeft = t), null != r && (e.curOp.scrollTop = r)
            }

            function si(e, t) {
                ci(e), e.curOp.scrollToPos = t
            }

            function ci(e) {
                var t = e.curOp.scrollToPos;
                if (t) {
                    e.curOp.scrollToPos = null;
                    var r = bn(e, t.from), n = bn(e, t.to);
                    ui(e, r, n, t.margin)
                }
            }

            function ui(e, t, r, n) {
                var i = ii(e, {
                    left: Math.min(t.left, r.left),
                    top: Math.min(t.top, r.top) - n,
                    right: Math.max(t.right, r.right),
                    bottom: Math.max(t.bottom, r.bottom) + n
                });
                li(e, i.scrollLeft, i.scrollTop)
            }

            function di(e, t) {
                Math.abs(e.doc.scrollTop - t) < 2 || (r || Vi(e, {top: t}), fi(e, t, !0), r && Vi(e), Pi(e, 100))
            }

            function fi(e, t, r) {
                t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || r) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
            }

            function hi(e, t, r, n) {
                t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n || (e.doc.scrollLeft = t, $i(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
            }

            function pi(e) {
                var t = e.display, r = t.gutters.offsetWidth, n = Math.round(e.doc.height + Gr(e.display));
                return {
                    clientHeight: t.scroller.clientHeight,
                    viewHeight: t.wrapper.clientHeight,
                    scrollWidth: t.scroller.scrollWidth,
                    clientWidth: t.scroller.clientWidth,
                    viewWidth: t.wrapper.clientWidth,
                    barLeft: e.options.fixedGutter ? r : 0,
                    docHeight: n,
                    scrollHeight: n + $r(e) + t.barHeight,
                    nativeBarWidth: t.nativeBarWidth,
                    gutterWidth: r
                }
            }

            var mi = function (e, t, r) {
                this.cm = r;
                var n = this.vert = N("div", [N("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                    i = this.horiz = N("div", [N("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                n.tabIndex = i.tabIndex = -1, e(n), e(i), pe(n, "scroll", function () {
                    n.clientHeight && t(n.scrollTop, "vertical")
                }), pe(i, "scroll", function () {
                    i.clientWidth && t(i.scrollLeft, "horizontal")
                }), this.checkedZeroWidth = !1, a && l < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
            };
            mi.prototype.update = function (e) {
                var t = e.scrollWidth > e.clientWidth + 1, r = e.scrollHeight > e.clientHeight + 1,
                    n = e.nativeBarWidth;
                if (r) {
                    this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
                    var i = e.viewHeight - (t ? n : 0);
                    this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
                } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                if (t) {
                    this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                    var o = e.viewWidth - e.barLeft - (r ? n : 0);
                    this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
                } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                    right: r ? n : 0,
                    bottom: t ? n : 0
                }
            }, mi.prototype.setScrollLeft = function (e) {
                this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
            }, mi.prototype.setScrollTop = function (e) {
                this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
            }, mi.prototype.zeroWidthHack = function () {
                var e = y && !h ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new R, this.disableVert = new R
            }, mi.prototype.enableZeroWidthBar = function (e, t, r) {
                function n() {
                    var i = e.getBoundingClientRect(),
                        o = "vert" == r ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
                    o != e ? e.style.pointerEvents = "none" : t.set(1e3, n)
                }

                e.style.pointerEvents = "auto", t.set(1e3, n)
            }, mi.prototype.clear = function () {
                var e = this.horiz.parentNode;
                e.removeChild(this.horiz), e.removeChild(this.vert)
            };
            var gi = function () {
            };

            function vi(e, t) {
                t || (t = pi(e));
                var r = e.display.barWidth, n = e.display.barHeight;
                yi(e, t);
                for (var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++) r != e.display.barWidth && e.options.lineWrapping && Jn(e), yi(e, pi(e)), r = e.display.barWidth, n = e.display.barHeight
            }

            function yi(e, t) {
                var r = e.display, n = r.scrollbars.update(t);
                r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = ""
            }

            gi.prototype.update = function () {
                return {bottom: 0, right: 0}
            }, gi.prototype.setScrollLeft = function () {
            }, gi.prototype.setScrollTop = function () {
            }, gi.prototype.clear = function () {
            };
            var bi = {native: mi, null: gi};

            function wi(e) {
                e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && L(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new bi[e.options.scrollbarStyle](function (t) {
                    e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), pe(t, "mousedown", function () {
                        e.state.focused && setTimeout(function () {
                            return e.display.input.focus()
                        }, 0)
                    }), t.setAttribute("cm-not-content", "true")
                }, function (t, r) {
                    "horizontal" == r ? hi(e, t) : di(e, t)
                }, e), e.display.scrollbars.addClass && z(e.display.wrapper, e.display.scrollbars.addClass)
            }

            var xi = 0;

            function ki(e) {
                e.curOp = {
                    cm: e,
                    viewChanged: !1,
                    startHeight: e.doc.height,
                    forceUpdate: !1,
                    updateInput: 0,
                    typing: !1,
                    changeObjs: null,
                    cursorActivityHandlers: null,
                    cursorActivityCalled: 0,
                    selectionChanged: !1,
                    updateMaxLine: !1,
                    scrollLeft: null,
                    scrollTop: null,
                    scrollToPos: null,
                    focus: !1,
                    id: ++xi
                }, Cr(e.curOp)
            }

            function Ci(e) {
                var t = e.curOp;
                t && Tr(t, function (e) {
                    for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                    Si(e)
                })
            }

            function Si(e) {
                for (var t = e.ops, r = 0; r < t.length; r++) Ti(t[r]);
                for (var n = 0; n < t.length; n++) Li(t[n]);
                for (var i = 0; i < t.length; i++) Mi(t[i]);
                for (var o = 0; o < t.length; o++) Oi(t[o]);
                for (var a = 0; a < t.length; a++) Ni(t[a])
            }

            function Ti(e) {
                var t = e.cm, r = t.display;
                Hi(t), e.updateMaxLine && ar(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new Fi(t, e.mustUpdate && {
                    top: e.scrollTop,
                    ensure: e.scrollToPos
                }, e.forceUpdate)
            }

            function Li(e) {
                e.updatedDisplay = e.mustUpdate && Bi(e.cm, e.update)
            }

            function Mi(e) {
                var t = e.cm, r = t.display;
                e.updatedDisplay && Jn(t), e.barMeasure = pi(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Jr(t, r.maxLine, r.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + $r(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - qr(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection())
            }

            function Oi(e) {
                var t = e.cm;
                null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && hi(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
                var r = e.focus && e.focus == W();
                e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r), (e.updatedDisplay || e.startHeight != t.doc.height) && vi(t, e.barMeasure), e.updatedDisplay && Ui(t, e.barMeasure), e.selectionChanged && qn(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), r && _n(e.cm)
            }

            function Ni(e) {
                var t = e.cm, r = t.display, n = t.doc;
                if (e.updatedDisplay && ji(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null != e.scrollTop && fi(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && hi(t, e.scrollLeft, !0, !0), e.scrollToPos) {
                    var i = ri(t, dt(n, e.scrollToPos.from), dt(n, e.scrollToPos.to), e.scrollToPos.margin);
                    ti(t, i)
                }
                var o = e.maybeHiddenMarkers, a = e.maybeUnhiddenMarkers;
                if (o) for (var l = 0; l < o.length; ++l) o[l].lines.length || ve(o[l], "hide");
                if (a) for (var s = 0; s < a.length; ++s) a[s].lines.length && ve(a[s], "unhide");
                r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && ve(t, "changes", t, e.changeObjs), e.update && e.update.finish()
            }

            function Ai(e, t) {
                if (e.curOp) return t();
                ki(e);
                try {
                    return t()
                } finally {
                    Ci(e)
                }
            }

            function Di(e, t) {
                return function () {
                    if (e.curOp) return t.apply(e, arguments);
                    ki(e);
                    try {
                        return t.apply(e, arguments)
                    } finally {
                        Ci(e)
                    }
                }
            }

            function Wi(e) {
                return function () {
                    if (this.curOp) return e.apply(this, arguments);
                    ki(this);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        Ci(this)
                    }
                }
            }

            function zi(e) {
                return function () {
                    var t = this.cm;
                    if (!t || t.curOp) return e.apply(this, arguments);
                    ki(t);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        Ci(t)
                    }
                }
            }

            function Pi(e, t) {
                e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, F(Ei, e))
            }

            function Ei(e) {
                var t = e.doc;
                if (!(t.highlightFrontier >= e.display.viewTo)) {
                    var r = +new Date + e.options.workTime, n = yt(e, t.highlightFrontier), i = [];
                    t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
                        if (n.line >= e.display.viewFrom) {
                            var a = o.styles,
                                l = o.text.length > e.options.maxHighlightLength ? $e(t.mode, n.state) : null,
                                s = gt(e, o, n, !0);
                            l && (n.state = l), o.styles = s.styles;
                            var c = o.styleClasses, u = s.classes;
                            u ? o.styleClasses = u : c && (o.styleClasses = null);
                            for (var d = !a || a.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), f = 0; !d && f < a.length; ++f) d = a[f] != o.styles[f];
                            d && i.push(n.line), o.stateAfter = n.save(), n.nextLine()
                        } else o.text.length <= e.options.maxHighlightLength && bt(e, o.text, n), o.stateAfter = n.line % 5 == 0 ? n.save() : null, n.nextLine();
                        if (+new Date > r) return Pi(e, e.options.workDelay), !0
                    }), t.highlightFrontier = n.line, t.modeFrontier = Math.max(t.modeFrontier, n.line), i.length && Ai(e, function () {
                        for (var t = 0; t < i.length; t++) Hn(e, i[t], "text")
                    })
                }
            }

            var Fi = function (e, t, r) {
                var n = e.display;
                this.viewport = t, this.visible = ei(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = qr(e), this.force = r, this.dims = An(e), this.events = []
            };

            function Hi(e) {
                var t = e.display;
                !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = $r(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = $r(e) + "px", t.scrollbarsClipped = !0)
            }

            function Ii(e) {
                if (e.hasFocus()) return null;
                var t = W();
                if (!t || !D(e.display.lineDiv, t)) return null;
                var r = {activeElt: t};
                if (window.getSelection) {
                    var n = window.getSelection();
                    n.anchorNode && n.extend && D(e.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode, r.anchorOffset = n.anchorOffset, r.focusNode = n.focusNode, r.focusOffset = n.focusOffset)
                }
                return r
            }

            function Ri(e) {
                if (e && e.activeElt && e.activeElt != W() && (e.activeElt.focus(), e.anchorNode && D(document.body, e.anchorNode) && D(document.body, e.focusNode))) {
                    var t = window.getSelection(), r = document.createRange();
                    r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), t.removeAllRanges(), t.addRange(r), t.extend(e.focusNode, e.focusOffset)
                }
            }

            function Bi(e, t) {
                var r = e.display, n = e.doc;
                if (t.editorIsHidden) return In(e), !1;
                if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == jn(e)) return !1;
                qi(e) && (In(e), t.dims = An(e));
                var i = n.first + n.size, o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
                    a = Math.min(i, t.visible.to + e.options.viewportMargin);
                r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(i, r.viewTo)), Nt && (o = er(e.doc, o), a = tr(e.doc, a));
                var l = o != r.viewFrom || a != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
                Bn(e, o, a), r.viewOffset = ir(Ye(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
                var s = jn(e);
                if (!l && 0 == s && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
                var c = Ii(e);
                return s > 4 && (r.lineDiv.style.display = "none"), Ki(e, r.updateLineNumbers, t.dims), s > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, Ri(c), M(r.cursorDiv), M(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, l && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, Pi(e, 400)), r.updateLineNumbers = null, !0
            }

            function ji(e, t) {
                for (var r = t.viewport, n = !0; ; n = !1) {
                    if ((!n || !e.options.lineWrapping || t.oldDisplayWidth == qr(e)) && (r && null != r.top && (r = {top: Math.min(e.doc.height + Gr(e.display) - _r(e), r.top)}), t.visible = ei(e.display, e.doc, r), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)) break;
                    if (!Bi(e, t)) break;
                    Jn(e);
                    var i = pi(e);
                    Vn(e), vi(e, i), Ui(e, i), t.force = !1
                }
                t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
            }

            function Vi(e, t) {
                var r = new Fi(e, t);
                if (Bi(e, r)) {
                    Jn(e), ji(e, r);
                    var n = pi(e);
                    Vn(e), vi(e, n), Ui(e, n), r.finish()
                }
            }

            function Ki(e, t, r) {
                var n = e.display, i = e.options.lineNumbers, o = n.lineDiv, a = o.firstChild;

                function l(t) {
                    var r = t.nextSibling;
                    return s && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), r
                }

                for (var c = n.view, u = n.viewFrom, d = 0; d < c.length; d++) {
                    var f = c[d];
                    if (f.hidden) ; else if (f.node && f.node.parentNode == o) {
                        while (a != f.node) a = l(a);
                        var h = i && null != t && t <= u && f.lineNumber;
                        f.changes && (B(f.changes, "gutter") > -1 && (h = !1), Nr(e, f, u, r)), h && (M(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(nt(e.options, u)))), a = f.node.nextSibling
                    } else {
                        var p = Hr(e, f, u, r);
                        o.insertBefore(p, a)
                    }
                    u += f.size
                }
                while (a) a = l(a)
            }

            function Gi(e) {
                var t = e.gutters.offsetWidth;
                e.sizer.style.marginLeft = t + "px"
            }

            function Ui(e, t) {
                e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + $r(e) + "px"
            }

            function $i(e) {
                var t = e.display, r = t.view;
                if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                    for (var n = Dn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", a = 0; a < r.length; a++) if (!r[a].hidden) {
                        e.options.fixedGutter && (r[a].gutter && (r[a].gutter.style.left = o), r[a].gutterBackground && (r[a].gutterBackground.style.left = o));
                        var l = r[a].alignable;
                        if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o
                    }
                    e.options.fixedGutter && (t.gutters.style.left = n + i + "px")
                }
            }

            function qi(e) {
                if (!e.options.lineNumbers) return !1;
                var t = e.doc, r = nt(e.options, t.first + t.size - 1), n = e.display;
                if (r.length != n.lineNumChars) {
                    var i = n.measure.appendChild(N("div", [N("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                        o = i.firstChild.offsetWidth, a = i.offsetWidth - o;
                    return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - a) + 1, n.lineNumWidth = n.lineNumInnerWidth + a, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", Gi(e.display), !0
                }
                return !1
            }

            function _i(e, t) {
                for (var r = [], n = !1, i = 0; i < e.length; i++) {
                    var o = e[i], a = null;
                    if ("string" != typeof o && (a = o.style, o = o.className), "CodeMirror-linenumbers" == o) {
                        if (!t) continue;
                        n = !0
                    }
                    r.push({className: o, style: a})
                }
                return t && !n && r.push({className: "CodeMirror-linenumbers", style: null}), r
            }

            function Xi(e) {
                var t = e.gutters, r = e.gutterSpecs;
                M(t), e.lineGutter = null;
                for (var n = 0; n < r.length; ++n) {
                    var i = r[n], o = i.className, a = i.style,
                        l = t.appendChild(N("div", null, "CodeMirror-gutter " + o));
                    a && (l.style.cssText = a), "CodeMirror-linenumbers" == o && (e.lineGutter = l, l.style.width = (e.lineNumWidth || 1) + "px")
                }
                t.style.display = r.length ? "" : "none", Gi(e)
            }

            function Yi(e) {
                Xi(e.display), Fn(e), $i(e)
            }

            function Zi(e, t, n, i) {
                var o = this;
                this.input = n, o.scrollbarFiller = N("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = N("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = A("div", null, "CodeMirror-code"), o.selectionDiv = N("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = N("div", null, "CodeMirror-cursors"), o.measure = N("div", null, "CodeMirror-measure"), o.lineMeasure = N("div", null, "CodeMirror-measure"), o.lineSpace = A("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
                var c = A("div", [o.lineSpace], "CodeMirror-lines");
                o.mover = N("div", [c], null, "position: relative"), o.sizer = N("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = N("div", null, null, "position: absolute; height: " + j + "px; width: 1px;"), o.gutters = N("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = N("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = N("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), a && l < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), s || r && v || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = _i(i.gutters, i.lineNumbers), Xi(o), n.init(o)
            }

            Fi.prototype.signal = function (e, t) {
                we(e, t) && this.events.push(arguments)
            }, Fi.prototype.finish = function () {
                for (var e = this, t = 0; t < this.events.length; t++) ve.apply(null, e.events[t])
            };
            var Ji = 0, Qi = null;

            function eo(e) {
                var t = e.wheelDeltaX, r = e.wheelDeltaY;
                return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta), {
                    x: t,
                    y: r
                }
            }

            function to(e) {
                var t = eo(e);
                return t.x *= Qi, t.y *= Qi, t
            }

            function ro(e, t) {
                var n = eo(t), i = n.x, o = n.y, a = e.display, l = a.scroller, c = l.scrollWidth > l.clientWidth,
                    u = l.scrollHeight > l.clientHeight;
                if (i && c || o && u) {
                    if (o && y && s) e:for (var f = t.target, h = a.view; f != l; f = f.parentNode) for (var p = 0; p < h.length; p++) if (h[p].node == f) {
                        e.display.currentWheelTarget = f;
                        break e
                    }
                    if (i && !r && !d && null != Qi) return o && u && di(e, Math.max(0, l.scrollTop + o * Qi)), hi(e, Math.max(0, l.scrollLeft + i * Qi)), (!o || o && u) && ke(t), void (a.wheelStartX = null);
                    if (o && null != Qi) {
                        var m = o * Qi, g = e.doc.scrollTop, v = g + a.wrapper.clientHeight;
                        m < 0 ? g = Math.max(0, g + m - 50) : v = Math.min(e.doc.height, v + m + 50), Vi(e, {
                            top: g,
                            bottom: v
                        })
                    }
                    Ji < 20 && (null == a.wheelStartX ? (a.wheelStartX = l.scrollLeft, a.wheelStartY = l.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout(function () {
                        if (null != a.wheelStartX) {
                            var e = l.scrollLeft - a.wheelStartX, t = l.scrollTop - a.wheelStartY,
                                r = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
                            a.wheelStartX = a.wheelStartY = null, r && (Qi = (Qi * Ji + r) / (Ji + 1), ++Ji)
                        }
                    }, 200)) : (a.wheelDX += i, a.wheelDY += o))
                }
            }

            a ? Qi = -.53 : r ? Qi = 15 : u ? Qi = -.7 : f && (Qi = -1 / 3);
            var no = function (e, t) {
                this.ranges = e, this.primIndex = t
            };
            no.prototype.primary = function () {
                return this.ranges[this.primIndex]
            }, no.prototype.equals = function (e) {
                var t = this;
                if (e == this) return !0;
                if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                for (var r = 0; r < this.ranges.length; r++) {
                    var n = t.ranges[r], i = e.ranges[r];
                    if (!at(n.anchor, i.anchor) || !at(n.head, i.head)) return !1
                }
                return !0
            }, no.prototype.deepCopy = function () {
                for (var e = this, t = [], r = 0; r < this.ranges.length; r++) t[r] = new io(lt(e.ranges[r].anchor), lt(e.ranges[r].head));
                return new no(t, this.primIndex)
            }, no.prototype.somethingSelected = function () {
                for (var e = this, t = 0; t < this.ranges.length; t++) if (!e.ranges[t].empty()) return !0;
                return !1
            }, no.prototype.contains = function (e, t) {
                var r = this;
                t || (t = e);
                for (var n = 0; n < this.ranges.length; n++) {
                    var i = r.ranges[n];
                    if (ot(t, i.from()) >= 0 && ot(e, i.to()) <= 0) return n
                }
                return -1
            };
            var io = function (e, t) {
                this.anchor = e, this.head = t
            };

            function oo(e, t, r) {
                var n = e && e.options.selectionsMayTouch, i = t[r];
                t.sort(function (e, t) {
                    return ot(e.from(), t.from())
                }), r = B(t, i);
                for (var o = 1; o < t.length; o++) {
                    var a = t[o], l = t[o - 1], s = ot(l.to(), a.from());
                    if (n && !a.empty() ? s > 0 : s >= 0) {
                        var c = ct(l.from(), a.from()), u = st(l.to(), a.to()),
                            d = l.empty() ? a.from() == a.head : l.from() == l.head;
                        o <= r && --r, t.splice(--o, 2, new io(d ? u : c, d ? c : u))
                    }
                }
                return new no(t, r)
            }

            function ao(e, t) {
                return new no([new io(e, t || e)], 0)
            }

            function lo(e) {
                return e.text ? it(e.from.line + e.text.length - 1, X(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
            }

            function so(e, t) {
                if (ot(e, t.from) < 0) return e;
                if (ot(e, t.to) <= 0) return lo(t);
                var r = e.line + t.text.length - (t.to.line - t.from.line) - 1, n = e.ch;
                return e.line == t.to.line && (n += lo(t).ch - t.to.ch), it(r, n)
            }

            function co(e, t) {
                for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
                    var i = e.sel.ranges[n];
                    r.push(new io(so(i.anchor, t), so(i.head, t)))
                }
                return oo(e.cm, r, e.sel.primIndex)
            }

            function uo(e, t, r) {
                return e.line == t.line ? it(r.line, e.ch - t.ch + r.ch) : it(r.line + (e.line - t.line), e.ch)
            }

            function fo(e, t, r) {
                for (var n = [], i = it(e.first, 0), o = i, a = 0; a < t.length; a++) {
                    var l = t[a], s = uo(l.from, i, o), c = uo(lo(l), i, o);
                    if (i = l.to, o = c, "around" == r) {
                        var u = e.sel.ranges[a], d = ot(u.head, u.anchor) < 0;
                        n[a] = new io(d ? c : s, d ? s : c)
                    } else n[a] = new io(s, s)
                }
                return new no(n, e.sel.primIndex)
            }

            function ho(e) {
                e.doc.mode = Ke(e.options, e.doc.modeOption), po(e)
            }

            function po(e) {
                e.doc.iter(function (e) {
                    e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
                }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Pi(e, 100), e.state.modeGen++, e.curOp && Fn(e)
            }

            function mo(e, t) {
                return 0 == t.from.ch && 0 == t.to.ch && "" == X(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
            }

            function go(e, t, r, n) {
                function i(e) {
                    return r ? r[e] : null
                }

                function o(e, r, i) {
                    sr(e, r, i, n), Mr(e, "change", e, t)
                }

                function a(e, t) {
                    for (var r = [], o = e; o < t; ++o) r.push(new lr(c[o], i(o), n));
                    return r
                }

                var l = t.from, s = t.to, c = t.text, u = Ye(e, l.line), d = Ye(e, s.line), f = X(c),
                    h = i(c.length - 1), p = s.line - l.line;
                if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length); else if (mo(e, t)) {
                    var m = a(0, c.length - 1);
                    o(d, d.text, h), p && e.remove(l.line, p), m.length && e.insert(l.line, m)
                } else if (u == d) if (1 == c.length) o(u, u.text.slice(0, l.ch) + f + u.text.slice(s.ch), h); else {
                    var g = a(1, c.length - 1);
                    g.push(new lr(f + u.text.slice(s.ch), h, n)), o(u, u.text.slice(0, l.ch) + c[0], i(0)), e.insert(l.line + 1, g)
                } else if (1 == c.length) o(u, u.text.slice(0, l.ch) + c[0] + d.text.slice(s.ch), i(0)), e.remove(l.line + 1, p); else {
                    o(u, u.text.slice(0, l.ch) + c[0], i(0)), o(d, f + d.text.slice(s.ch), h);
                    var v = a(1, c.length - 1);
                    p > 1 && e.remove(l.line + 1, p - 1), e.insert(l.line + 1, v)
                }
                Mr(e, "change", e, t)
            }

            function vo(e, t, r) {
                function n(e, i, o) {
                    if (e.linked) for (var a = 0; a < e.linked.length; ++a) {
                        var l = e.linked[a];
                        if (l.doc != i) {
                            var s = o && l.sharedHist;
                            r && !s || (t(l.doc, s), n(l.doc, e, s))
                        }
                    }
                }

                n(e, null, !0)
            }

            function yo(e, t) {
                if (t.cm) throw new Error("This document is already in use.");
                e.doc = t, t.cm = e, zn(e), ho(e), bo(e), e.options.lineWrapping || ar(e), e.options.mode = t.modeOption, Fn(e)
            }

            function bo(e) {
                ("rtl" == e.doc.direction ? z : L)(e.display.lineDiv, "CodeMirror-rtl")
            }

            function wo(e) {
                Ai(e, function () {
                    bo(e), Fn(e)
                })
            }

            function xo(e) {
                this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
            }

            function ko(e, t) {
                var r = {from: lt(t.from), to: lo(t), text: Ze(e, t.from, t.to)};
                return No(e, r, t.from.line, t.to.line + 1), vo(e, function (e) {
                    return No(e, r, t.from.line, t.to.line + 1)
                }, !0), r
            }

            function Co(e) {
                while (e.length) {
                    var t = X(e);
                    if (!t.ranges) break;
                    e.pop()
                }
            }

            function So(e, t) {
                return t ? (Co(e.done), X(e.done)) : e.done.length && !X(e.done).ranges ? X(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), X(e.done)) : void 0
            }

            function To(e, t, r, n) {
                var i = e.history;
                i.undone.length = 0;
                var o, a, l = +new Date;
                if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = So(i, i.lastOp == n))) a = X(o.changes), 0 == ot(t.from, t.to) && 0 == ot(t.from, a.to) ? a.to = lo(t) : o.changes.push(ko(e, t)); else {
                    var s = X(i.done);
                    s && s.ranges || Oo(e.sel, i.done), o = {
                        changes: [ko(e, t)],
                        generation: i.generation
                    }, i.done.push(o);
                    while (i.done.length > i.undoDepth) i.done.shift(), i.done[0].ranges || i.done.shift()
                }
                i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, a || ve(e, "historyAdded")
            }

            function Lo(e, t, r, n) {
                var i = t.charAt(0);
                return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
            }

            function Mo(e, t, r, n) {
                var i = e.history, o = n && n.origin;
                r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Lo(e, o, X(i.done), t)) ? i.done[i.done.length - 1] = t : Oo(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = r, n && !1 !== n.clearRedo && Co(i.undone)
            }

            function Oo(e, t) {
                var r = X(t);
                r && r.ranges && r.equals(e) || t.push(e)
            }

            function No(e, t, r, n) {
                var i = t["spans_" + e.id], o = 0;
                e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function (r) {
                    r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o
                })
            }

            function Ao(e) {
                if (!e) return null;
                for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
                return t ? t.length ? t : null : e
            }

            function Do(e, t) {
                var r = t["spans_" + e.id];
                if (!r) return null;
                for (var n = [], i = 0; i < t.text.length; ++i) n.push(Ao(r[i]));
                return n
            }

            function Wo(e, t) {
                var r = Do(e, t), n = It(e, t);
                if (!r) return n;
                if (!n) return r;
                for (var i = 0; i < r.length; ++i) {
                    var o = r[i], a = n[i];
                    if (o && a) e:for (var l = 0; l < a.length; ++l) {
                        for (var s = a[l], c = 0; c < o.length; ++c) if (o[c].marker == s.marker) continue e;
                        o.push(s)
                    } else a && (r[i] = a)
                }
                return r
            }

            function zo(e, t, r) {
                for (var n = [], i = 0; i < e.length; ++i) {
                    var o = e[i];
                    if (o.ranges) n.push(r ? no.prototype.deepCopy.call(o) : o); else {
                        var a = o.changes, l = [];
                        n.push({changes: l});
                        for (var s = 0; s < a.length; ++s) {
                            var c = a[s], u = void 0;
                            if (l.push({
                                from: c.from,
                                to: c.to,
                                text: c.text
                            }), t) for (var d in c) (u = d.match(/^spans_(\d+)$/)) && B(t, Number(u[1])) > -1 && (X(l)[d] = c[d], delete c[d])
                        }
                    }
                }
                return n
            }

            function Po(e, t, r, n) {
                if (n) {
                    var i = e.anchor;
                    if (r) {
                        var o = ot(t, i) < 0;
                        o != ot(r, i) < 0 ? (i = t, t = r) : o != ot(t, r) < 0 && (t = r)
                    }
                    return new io(i, t)
                }
                return new io(r || t, t)
            }

            function Eo(e, t, r, n, i) {
                null == i && (i = e.cm && (e.cm.display.shift || e.extend)), jo(e, new no([Po(e.sel.primary(), t, r, i)], 0), n)
            }

            function Fo(e, t, r) {
                for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) n[o] = Po(e.sel.ranges[o], t[o], null, i);
                var a = oo(e.cm, n, e.sel.primIndex);
                jo(e, a, r)
            }

            function Ho(e, t, r, n) {
                var i = e.sel.ranges.slice(0);
                i[t] = r, jo(e, oo(e.cm, i, e.sel.primIndex), n)
            }

            function Io(e, t, r, n) {
                jo(e, ao(t, r), n)
            }

            function Ro(e, t, r) {
                var n = {
                    ranges: t.ranges, update: function (t) {
                        var r = this;
                        this.ranges = [];
                        for (var n = 0; n < t.length; n++) r.ranges[n] = new io(dt(e, t[n].anchor), dt(e, t[n].head))
                    }, origin: r && r.origin
                };
                return ve(e, "beforeSelectionChange", e, n), e.cm && ve(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? oo(e.cm, n.ranges, n.ranges.length - 1) : t
            }

            function Bo(e, t, r) {
                var n = e.history.done, i = X(n);
                i && i.ranges ? (n[n.length - 1] = t, Vo(e, t, r)) : jo(e, t, r)
            }

            function jo(e, t, r) {
                Vo(e, t, r), Mo(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
            }

            function Vo(e, t, r) {
                (we(e, "beforeSelectionChange") || e.cm && we(e.cm, "beforeSelectionChange")) && (t = Ro(e, t, r));
                var n = r && r.bias || (ot(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                Ko(e, Uo(e, t, n, !0)), r && !1 === r.scroll || !e.cm || ai(e.cm)
            }

            function Ko(e, t) {
                t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, be(e.cm)), Mr(e, "cursorActivity", e))
            }

            function Go(e) {
                Ko(e, Uo(e, e.sel, null, !1))
            }

            function Uo(e, t, r, n) {
                for (var i, o = 0; o < t.ranges.length; o++) {
                    var a = t.ranges[o], l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                        s = qo(e, a.anchor, l && l.anchor, r, n), c = qo(e, a.head, l && l.head, r, n);
                    (i || s != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new io(s, c))
                }
                return i ? oo(e.cm, i, t.primIndex) : t
            }

            function $o(e, t, r, n, i) {
                var o = Ye(e, t.line);
                if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
                    var l = o.markedSpans[a], s = l.marker;
                    if ((null == l.from || (s.inclusiveLeft ? l.from <= t.ch : l.from < t.ch)) && (null == l.to || (s.inclusiveRight ? l.to >= t.ch : l.to > t.ch))) {
                        if (i && (ve(s, "beforeCursorEnter"), s.explicitlyCleared)) {
                            if (o.markedSpans) {
                                --a;
                                continue
                            }
                            break
                        }
                        if (!s.atomic) continue;
                        if (r) {
                            var c = s.find(n < 0 ? 1 : -1), u = void 0;
                            if ((n < 0 ? s.inclusiveRight : s.inclusiveLeft) && (c = _o(e, c, -n, c && c.line == t.line ? o : null)), c && c.line == t.line && (u = ot(c, r)) && (n < 0 ? u < 0 : u > 0)) return $o(e, c, t, n, i)
                        }
                        var d = s.find(n < 0 ? -1 : 1);
                        return (n < 0 ? s.inclusiveLeft : s.inclusiveRight) && (d = _o(e, d, n, d.line == t.line ? o : null)), d ? $o(e, d, t, n, i) : null
                    }
                }
                return t
            }

            function qo(e, t, r, n, i) {
                var o = n || 1,
                    a = $o(e, t, r, o, i) || !i && $o(e, t, r, o, !0) || $o(e, t, r, -o, i) || !i && $o(e, t, r, -o, !0);
                return a || (e.cantEdit = !0, it(e.first, 0))
            }

            function _o(e, t, r, n) {
                return r < 0 && 0 == t.ch ? t.line > e.first ? dt(e, it(t.line - 1)) : null : r > 0 && t.ch == (n || Ye(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? it(t.line + 1, 0) : null : new it(t.line, t.ch + r)
            }

            function Xo(e) {
                e.setSelection(it(e.firstLine(), 0), it(e.lastLine()), K)
            }

            function Yo(e, t, r) {
                var n = {
                    canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function () {
                        return n.canceled = !0
                    }
                };
                return r && (n.update = function (t, r, i, o) {
                    t && (n.from = dt(e, t)), r && (n.to = dt(e, r)), i && (n.text = i), void 0 !== o && (n.origin = o)
                }), ve(e, "beforeChange", e, n), e.cm && ve(e.cm, "beforeChange", e.cm, n), n.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
                    from: n.from,
                    to: n.to,
                    text: n.text,
                    origin: n.origin
                }
            }

            function Zo(e, t, r) {
                if (e.cm) {
                    if (!e.cm.curOp) return Di(e.cm, Zo)(e, t, r);
                    if (e.cm.state.suppressEdits) return
                }
                if (!(we(e, "beforeChange") || e.cm && we(e.cm, "beforeChange")) || (t = Yo(e, t, !0), t)) {
                    var n = Ot && !r && Bt(e, t.from, t.to);
                    if (n) for (var i = n.length - 1; i >= 0; --i) Jo(e, {
                        from: n[i].from,
                        to: n[i].to,
                        text: i ? [""] : t.text,
                        origin: t.origin
                    }); else Jo(e, t)
                }
            }

            function Jo(e, t) {
                if (1 != t.text.length || "" != t.text[0] || 0 != ot(t.from, t.to)) {
                    var r = co(e, t);
                    To(e, t, r, e.cm ? e.cm.curOp.id : NaN), ta(e, t, r, It(e, t));
                    var n = [];
                    vo(e, function (e, r) {
                        r || -1 != B(n, e.history) || (aa(e.history, t), n.push(e.history)), ta(e, t, null, It(e, t))
                    })
                }
            }

            function Qo(e, t, r) {
                var n = e.cm && e.cm.state.suppressEdits;
                if (!n || r) {
                    for (var i, o = e.history, a = e.sel, l = "undo" == t ? o.done : o.undone, s = "undo" == t ? o.undone : o.done, c = 0; c < l.length; c++) if (i = l[c], r ? i.ranges && !i.equals(e.sel) : !i.ranges) break;
                    if (c != l.length) {
                        for (o.lastOrigin = o.lastSelOrigin = null; ;) {
                            if (i = l.pop(), !i.ranges) {
                                if (n) return void l.push(i);
                                break
                            }
                            if (Oo(i, s), r && !i.equals(e.sel)) return void jo(e, i, {clearRedo: !1});
                            a = i
                        }
                        var u = [];
                        Oo(a, s), s.push({
                            changes: u,
                            generation: o.generation
                        }), o.generation = i.generation || ++o.maxGeneration;
                        for (var d = we(e, "beforeChange") || e.cm && we(e.cm, "beforeChange"), f = function (r) {
                            var n = i.changes[r];
                            if (n.origin = t, d && !Yo(e, n, !1)) return l.length = 0, {};
                            u.push(ko(e, n));
                            var o = r ? co(e, n) : X(l);
                            ta(e, n, o, Wo(e, n)), !r && e.cm && e.cm.scrollIntoView({from: n.from, to: lo(n)});
                            var a = [];
                            vo(e, function (e, t) {
                                t || -1 != B(a, e.history) || (aa(e.history, n), a.push(e.history)), ta(e, n, null, Wo(e, n))
                            })
                        }, h = i.changes.length - 1; h >= 0; --h) {
                            var p = f(h);
                            if (p) return p.v
                        }
                    }
                }
            }

            function ea(e, t) {
                if (0 != t && (e.first += t, e.sel = new no(Y(e.sel.ranges, function (e) {
                    return new io(it(e.anchor.line + t, e.anchor.ch), it(e.head.line + t, e.head.ch))
                }), e.sel.primIndex), e.cm)) {
                    Fn(e.cm, e.first, e.first - t, t);
                    for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) Hn(e.cm, n, "gutter")
                }
            }

            function ta(e, t, r, n) {
                if (e.cm && !e.cm.curOp) return Di(e.cm, ta)(e, t, r, n);
                if (t.to.line < e.first) ea(e, t.text.length - 1 - (t.to.line - t.from.line)); else if (!(t.from.line > e.lastLine())) {
                    if (t.from.line < e.first) {
                        var i = t.text.length - 1 - (e.first - t.from.line);
                        ea(e, i), t = {
                            from: it(e.first, 0),
                            to: it(t.to.line + i, t.to.ch),
                            text: [X(t.text)],
                            origin: t.origin
                        }
                    }
                    var o = e.lastLine();
                    t.to.line > o && (t = {
                        from: t.from,
                        to: it(o, Ye(e, o).text.length),
                        text: [t.text[0]],
                        origin: t.origin
                    }), t.removed = Ze(e, t.from, t.to), r || (r = co(e, t)), e.cm ? ra(e.cm, t, n) : go(e, t, n), Vo(e, r, K)
                }
            }

            function ra(e, t, r) {
                var n = e.doc, i = e.display, o = t.from, a = t.to, l = !1, s = o.line;
                e.options.lineWrapping || (s = et(Zt(Ye(n, o.line))), n.iter(s, a.line + 1, function (e) {
                    if (e == i.maxLine) return l = !0, !0
                })), n.sel.contains(t.from, t.to) > -1 && be(e), go(n, t, r, Wn(e)), e.options.lineWrapping || (n.iter(s, o.line + t.text.length, function (e) {
                    var t = or(e);
                    t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, l = !1)
                }), l && (e.curOp.updateMaxLine = !0)), Mt(n, o.line), Pi(e, 400);
                var c = t.text.length - (a.line - o.line) - 1;
                t.full ? Fn(e) : o.line != a.line || 1 != t.text.length || mo(e.doc, t) ? Fn(e, o.line, a.line + 1, c) : Hn(e, o.line, "text");
                var u = we(e, "changes"), d = we(e, "change");
                if (d || u) {
                    var f = {from: o, to: a, text: t.text, removed: t.removed, origin: t.origin};
                    d && Mr(e, "change", e, f), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
                }
                e.display.selForContextMenu = null
            }

            function na(e, t, r, n, i) {
                var o;
                n || (n = r), ot(n, r) < 0 && (o = [n, r], r = o[0], n = o[1]), "string" == typeof t && (t = e.splitLines(t)), Zo(e, {
                    from: r,
                    to: n,
                    text: t,
                    origin: i
                })
            }

            function ia(e, t, r, n) {
                r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0)
            }

            function oa(e, t, r, n) {
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i], a = !0;
                    if (o.ranges) {
                        o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
                        for (var l = 0; l < o.ranges.length; l++) ia(o.ranges[l].anchor, t, r, n), ia(o.ranges[l].head, t, r, n)
                    } else {
                        for (var s = 0; s < o.changes.length; ++s) {
                            var c = o.changes[s];
                            if (r < c.from.line) c.from = it(c.from.line + n, c.from.ch), c.to = it(c.to.line + n, c.to.ch); else if (t <= c.to.line) {
                                a = !1;
                                break
                            }
                        }
                        a || (e.splice(0, i + 1), i = 0)
                    }
                }
            }

            function aa(e, t) {
                var r = t.from.line, n = t.to.line, i = t.text.length - (n - r) - 1;
                oa(e.done, r, n, i), oa(e.undone, r, n, i)
            }

            function la(e, t, r, n) {
                var i = t, o = t;
                return "number" == typeof t ? o = Ye(e, ut(e, t)) : i = et(t), null == i ? null : (n(o, i) && e.cm && Hn(e.cm, i, r), o)
            }

            function sa(e) {
                var t = this;
                this.lines = e, this.parent = null;
                for (var r = 0, n = 0; n < e.length; ++n) e[n].parent = t, r += e[n].height;
                this.height = r
            }

            function ca(e) {
                var t = this;
                this.children = e;
                for (var r = 0, n = 0, i = 0; i < e.length; ++i) {
                    var o = e[i];
                    r += o.chunkSize(), n += o.height, o.parent = t
                }
                this.size = r, this.height = n, this.parent = null
            }

            io.prototype.from = function () {
                return ct(this.anchor, this.head)
            }, io.prototype.to = function () {
                return st(this.anchor, this.head)
            }, io.prototype.empty = function () {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
            }, sa.prototype = {
                chunkSize: function () {
                    return this.lines.length
                }, removeInner: function (e, t) {
                    for (var r = this, n = e, i = e + t; n < i; ++n) {
                        var o = r.lines[n];
                        r.height -= o.height, cr(o), Mr(o, "delete")
                    }
                    this.lines.splice(e, t)
                }, collapse: function (e) {
                    e.push.apply(e, this.lines)
                }, insertInner: function (e, t, r) {
                    var n = this;
                    this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                    for (var i = 0; i < t.length; ++i) t[i].parent = n
                }, iterN: function (e, t, r) {
                    for (var n = this, i = e + t; e < i; ++e) if (r(n.lines[e])) return !0
                }
            }, ca.prototype = {
                chunkSize: function () {
                    return this.size
                }, removeInner: function (e, t) {
                    var r = this;
                    this.size -= t;
                    for (var n = 0; n < this.children.length; ++n) {
                        var i = r.children[n], o = i.chunkSize();
                        if (e < o) {
                            var a = Math.min(t, o - e), l = i.height;
                            if (i.removeInner(e, a), r.height -= l - i.height, o == a && (r.children.splice(n--, 1), i.parent = null), 0 == (t -= a)) break;
                            e = 0
                        } else e -= o
                    }
                    if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof sa))) {
                        var s = [];
                        this.collapse(s), this.children = [new sa(s)], this.children[0].parent = this
                    }
                }, collapse: function (e) {
                    for (var t = this, r = 0; r < this.children.length; ++r) t.children[r].collapse(e)
                }, insertInner: function (e, t, r) {
                    var n = this;
                    this.size += t.length, this.height += r;
                    for (var i = 0; i < this.children.length; ++i) {
                        var o = n.children[i], a = o.chunkSize();
                        if (e <= a) {
                            if (o.insertInner(e, t, r), o.lines && o.lines.length > 50) {
                                for (var l = o.lines.length % 25 + 25, s = l; s < o.lines.length;) {
                                    var c = new sa(o.lines.slice(s, s += 25));
                                    o.height -= c.height, n.children.splice(++i, 0, c), c.parent = n
                                }
                                o.lines = o.lines.slice(0, l), n.maybeSpill()
                            }
                            break
                        }
                        e -= a
                    }
                }, maybeSpill: function () {
                    if (!(this.children.length <= 10)) {
                        var e = this;
                        do {
                            var t = e.children.splice(e.children.length - 5, 5), r = new ca(t);
                            if (e.parent) {
                                e.size -= r.size, e.height -= r.height;
                                var n = B(e.parent.children, e);
                                e.parent.children.splice(n + 1, 0, r)
                            } else {
                                var i = new ca(e.children);
                                i.parent = e, e.children = [i, r], e = i
                            }
                            r.parent = e.parent
                        } while (e.children.length > 10);
                        e.parent.maybeSpill()
                    }
                }, iterN: function (e, t, r) {
                    for (var n = this, i = 0; i < this.children.length; ++i) {
                        var o = n.children[i], a = o.chunkSize();
                        if (e < a) {
                            var l = Math.min(t, a - e);
                            if (o.iterN(e, l, r)) return !0;
                            if (0 == (t -= l)) break;
                            e = 0
                        } else e -= a
                    }
                }
            };
            var ua = function (e, t, r) {
                var n = this;
                if (r) for (var i in r) r.hasOwnProperty(i) && (n[i] = r[i]);
                this.doc = e, this.node = t
            };

            function da(e, t, r) {
                ir(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && oi(e, r)
            }

            function fa(e, t, r, n) {
                var i = new ua(e, r, n), o = e.cm;
                return o && i.noHScroll && (o.display.alignWidgets = !0), la(e, t, "widget", function (t) {
                    var r = t.widgets || (t.widgets = []);
                    if (null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !rr(e, t)) {
                        var n = ir(t) < e.scrollTop;
                        Qe(t, t.height + jr(i)), n && oi(o, i.height), o.curOp.forceUpdate = !0
                    }
                    return !0
                }), o && Mr(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : et(t)), i
            }

            ua.prototype.clear = function () {
                var e = this, t = this.doc.cm, r = this.line.widgets, n = this.line, i = et(n);
                if (null != i && r) {
                    for (var o = 0; o < r.length; ++o) r[o] == e && r.splice(o--, 1);
                    r.length || (n.widgets = null);
                    var a = jr(this);
                    Qe(n, Math.max(0, n.height - a)), t && (Ai(t, function () {
                        da(t, n, -a), Hn(t, i, "widget")
                    }), Mr(t, "lineWidgetCleared", t, this, i))
                }
            }, ua.prototype.changed = function () {
                var e = this, t = this.height, r = this.doc.cm, n = this.line;
                this.height = null;
                var i = jr(this) - t;
                i && (rr(this.doc, n) || Qe(n, n.height + i), r && Ai(r, function () {
                    r.curOp.forceUpdate = !0, da(r, n, i), Mr(r, "lineWidgetChanged", r, e, et(n))
                }))
            }, xe(ua);
            var ha = 0, pa = function (e, t) {
                this.lines = [], this.type = t, this.doc = e, this.id = ++ha
            };

            function ma(e, t, r, n, i) {
                if (n && n.shared) return va(e, t, r, n, i);
                if (e.cm && !e.cm.curOp) return Di(e.cm, ma)(e, t, r, n, i);
                var o = new pa(e, i), a = ot(t, r);
                if (n && H(n, o, !1), a > 0 || 0 == a && !1 !== o.clearWhenEmpty) return o;
                if (o.replacedWith && (o.collapsed = !0, o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), n.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
                    if (Yt(e, t.line, t, r, o) || t.line != r.line && Yt(e, r.line, t, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    Dt()
                }
                o.addToHistory && To(e, {from: t, to: r, origin: "markText"}, e.sel, NaN);
                var l, s = t.line, c = e.cm;
                if (e.iter(s, r.line + 1, function (e) {
                    c && o.collapsed && !c.options.lineWrapping && Zt(e) == c.display.maxLine && (l = !0), o.collapsed && s != t.line && Qe(e, 0), Et(e, new Wt(o, s == t.line ? t.ch : null, s == r.line ? r.ch : null)), ++s
                }), o.collapsed && e.iter(t.line, r.line + 1, function (t) {
                    rr(e, t) && Qe(t, 0)
                }), o.clearOnEnter && pe(o, "beforeCursorEnter", function () {
                    return o.clear()
                }), o.readOnly && (At(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++ha, o.atomic = !0), c) {
                    if (l && (c.curOp.updateMaxLine = !0), o.collapsed) Fn(c, t.line, r.line + 1); else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var u = t.line; u <= r.line; u++) Hn(c, u, "text");
                    o.atomic && Go(c.doc), Mr(c, "markerAdded", c, o)
                }
                return o
            }

            pa.prototype.clear = function () {
                var e = this;
                if (!this.explicitlyCleared) {
                    var t = this.doc.cm, r = t && !t.curOp;
                    if (r && ki(t), we(this, "clear")) {
                        var n = this.find();
                        n && Mr(this, "clear", n.from, n.to)
                    }
                    for (var i = null, o = null, a = 0; a < this.lines.length; ++a) {
                        var l = e.lines[a], s = zt(l.markedSpans, e);
                        t && !e.collapsed ? Hn(t, et(l), "text") : t && (null != s.to && (o = et(l)), null != s.from && (i = et(l))), l.markedSpans = Pt(l.markedSpans, s), null == s.from && e.collapsed && !rr(e.doc, l) && t && Qe(l, On(t.display))
                    }
                    if (t && this.collapsed && !t.options.lineWrapping) for (var c = 0; c < this.lines.length; ++c) {
                        var u = Zt(e.lines[c]), d = or(u);
                        d > t.display.maxLineLength && (t.display.maxLine = u, t.display.maxLineLength = d, t.display.maxLineChanged = !0)
                    }
                    null != i && t && this.collapsed && Fn(t, i, o + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && Go(t.doc)), t && Mr(t, "markerCleared", t, this, i, o), r && Ci(t), this.parent && this.parent.clear()
                }
            }, pa.prototype.find = function (e, t) {
                var r, n, i = this;
                null == e && "bookmark" == this.type && (e = 1);
                for (var o = 0; o < this.lines.length; ++o) {
                    var a = i.lines[o], l = zt(a.markedSpans, i);
                    if (null != l.from && (r = it(t ? a : et(a), l.from), -1 == e)) return r;
                    if (null != l.to && (n = it(t ? a : et(a), l.to), 1 == e)) return n
                }
                return r && {from: r, to: n}
            }, pa.prototype.changed = function () {
                var e = this, t = this.find(-1, !0), r = this, n = this.doc.cm;
                t && n && Ai(n, function () {
                    var i = t.line, o = et(t.line), a = Qr(n, o);
                    if (a && (cn(a), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !rr(r.doc, i) && null != r.height) {
                        var l = r.height;
                        r.height = null;
                        var s = jr(r) - l;
                        s && Qe(i, i.height + s)
                    }
                    Mr(n, "markerChanged", n, e)
                })
            }, pa.prototype.attachLine = function (e) {
                if (!this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp;
                    t.maybeHiddenMarkers && -1 != B(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(e)
            }, pa.prototype.detachLine = function (e) {
                if (this.lines.splice(B(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp;
                    (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                }
            }, xe(pa);
            var ga = function (e, t) {
                var r = this;
                this.markers = e, this.primary = t;
                for (var n = 0; n < e.length; ++n) e[n].parent = r
            };

            function va(e, t, r, n, i) {
                n = H(n), n.shared = !1;
                var o = [ma(e, t, r, n, i)], a = o[0], l = n.widgetNode;
                return vo(e, function (e) {
                    l && (n.widgetNode = l.cloneNode(!0)), o.push(ma(e, dt(e, t), dt(e, r), n, i));
                    for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
                    a = X(o)
                }), new ga(o, a)
            }

            function ya(e) {
                return e.findMarks(it(e.first, 0), e.clipPos(it(e.lastLine())), function (e) {
                    return e.parent
                })
            }

            function ba(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r], i = n.find(), o = e.clipPos(i.from), a = e.clipPos(i.to);
                    if (ot(o, a)) {
                        var l = ma(e, o, a, n.primary, n.primary.type);
                        n.markers.push(l), l.parent = n
                    }
                }
            }

            function wa(e) {
                for (var t = function (t) {
                    var r = e[t], n = [r.primary.doc];
                    vo(r.primary.doc, function (e) {
                        return n.push(e)
                    });
                    for (var i = 0; i < r.markers.length; i++) {
                        var o = r.markers[i];
                        -1 == B(n, o.doc) && (o.parent = null, r.markers.splice(i--, 1))
                    }
                }, r = 0; r < e.length; r++) t(r)
            }

            ga.prototype.clear = function () {
                var e = this;
                if (!this.explicitlyCleared) {
                    this.explicitlyCleared = !0;
                    for (var t = 0; t < this.markers.length; ++t) e.markers[t].clear();
                    Mr(this, "clear")
                }
            }, ga.prototype.find = function (e, t) {
                return this.primary.find(e, t)
            }, xe(ga);
            var xa = 0, ka = function (e, t, r, n, i) {
                if (!(this instanceof ka)) return new ka(e, t, r, n, i);
                null == r && (r = 0), ca.call(this, [new sa([new lr("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r;
                var o = it(r, 0);
                this.sel = ao(o), this.history = new xo(null), this.id = ++xa, this.modeOption = t, this.lineSep = n, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), go(this, {
                    from: o,
                    to: o,
                    text: e
                }), jo(this, ao(o), K)
            };
            ka.prototype = Q(ca.prototype, {
                constructor: ka, iter: function (e, t, r) {
                    r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e)
                }, insert: function (e, t) {
                    for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
                    this.insertInner(e - this.first, t, r)
                }, remove: function (e, t) {
                    this.removeInner(e - this.first, t)
                }, getValue: function (e) {
                    var t = Je(this, this.first, this.first + this.size);
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                }, setValue: zi(function (e) {
                    var t = it(this.first, 0), r = this.first + this.size - 1;
                    Zo(this, {
                        from: t,
                        to: it(r, Ye(this, r).text.length),
                        text: this.splitLines(e),
                        origin: "setValue",
                        full: !0
                    }, !0), this.cm && li(this.cm, 0, 0), jo(this, ao(t), K)
                }), replaceRange: function (e, t, r, n) {
                    t = dt(this, t), r = r ? dt(this, r) : t, na(this, e, t, r, n)
                }, getRange: function (e, t, r) {
                    var n = Ze(this, dt(this, e), dt(this, t));
                    return !1 === r ? n : n.join(r || this.lineSeparator())
                }, getLine: function (e) {
                    var t = this.getLineHandle(e);
                    return t && t.text
                }, getLineHandle: function (e) {
                    if (rt(this, e)) return Ye(this, e)
                }, getLineNumber: function (e) {
                    return et(e)
                }, getLineHandleVisualStart: function (e) {
                    return "number" == typeof e && (e = Ye(this, e)), Zt(e)
                }, lineCount: function () {
                    return this.size
                }, firstLine: function () {
                    return this.first
                }, lastLine: function () {
                    return this.first + this.size - 1
                }, clipPos: function (e) {
                    return dt(this, e)
                }, getCursor: function (e) {
                    var t, r = this.sel.primary();
                    return t = null == e || "head" == e ? r.head : "anchor" == e ? r.anchor : "end" == e || "to" == e || !1 === e ? r.to() : r.from(), t
                }, listSelections: function () {
                    return this.sel.ranges
                }, somethingSelected: function () {
                    return this.sel.somethingSelected()
                }, setCursor: zi(function (e, t, r) {
                    Io(this, dt(this, "number" == typeof e ? it(e, t || 0) : e), null, r)
                }), setSelection: zi(function (e, t, r) {
                    Io(this, dt(this, e), dt(this, t || e), r)
                }), extendSelection: zi(function (e, t, r) {
                    Eo(this, dt(this, e), t && dt(this, t), r)
                }), extendSelections: zi(function (e, t) {
                    Fo(this, ht(this, e), t)
                }), extendSelectionsBy: zi(function (e, t) {
                    var r = Y(this.sel.ranges, e);
                    Fo(this, ht(this, r), t)
                }), setSelections: zi(function (e, t, r) {
                    var n = this;
                    if (e.length) {
                        for (var i = [], o = 0; o < e.length; o++) i[o] = new io(dt(n, e[o].anchor), dt(n, e[o].head));
                        null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), jo(this, oo(this.cm, i, t), r)
                    }
                }), addSelection: zi(function (e, t, r) {
                    var n = this.sel.ranges.slice(0);
                    n.push(new io(dt(this, e), dt(this, t || e))), jo(this, oo(this.cm, n, n.length - 1), r)
                }), getSelection: function (e) {
                    for (var t, r = this, n = this.sel.ranges, i = 0; i < n.length; i++) {
                        var o = Ze(r, n[i].from(), n[i].to());
                        t = t ? t.concat(o) : o
                    }
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                }, getSelections: function (e) {
                    for (var t = this, r = [], n = this.sel.ranges, i = 0; i < n.length; i++) {
                        var o = Ze(t, n[i].from(), n[i].to());
                        !1 !== e && (o = o.join(e || t.lineSeparator())), r[i] = o
                    }
                    return r
                }, replaceSelection: function (e, t, r) {
                    for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
                    this.replaceSelections(n, t, r || "+input")
                }, replaceSelections: zi(function (e, t, r) {
                    for (var n = this, i = [], o = this.sel, a = 0; a < o.ranges.length; a++) {
                        var l = o.ranges[a];
                        i[a] = {from: l.from(), to: l.to(), text: n.splitLines(e[a]), origin: r}
                    }
                    for (var s = t && "end" != t && fo(this, i, t), c = i.length - 1; c >= 0; c--) Zo(n, i[c]);
                    s ? Bo(this, s) : this.cm && ai(this.cm)
                }), undo: zi(function () {
                    Qo(this, "undo")
                }), redo: zi(function () {
                    Qo(this, "redo")
                }), undoSelection: zi(function () {
                    Qo(this, "undo", !0)
                }), redoSelection: zi(function () {
                    Qo(this, "redo", !0)
                }), setExtending: function (e) {
                    this.extend = e
                }, getExtending: function () {
                    return this.extend
                }, historySize: function () {
                    for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t;
                    for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
                    return {undo: t, redo: r}
                }, clearHistory: function () {
                    this.history = new xo(this.history.maxGeneration)
                }, markClean: function () {
                    this.cleanGeneration = this.changeGeneration(!0)
                }, changeGeneration: function (e) {
                    return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
                }, isClean: function (e) {
                    return this.history.generation == (e || this.cleanGeneration)
                }, getHistory: function () {
                    return {done: zo(this.history.done), undone: zo(this.history.undone)}
                }, setHistory: function (e) {
                    var t = this.history = new xo(this.history.maxGeneration);
                    t.done = zo(e.done.slice(0), null, !0), t.undone = zo(e.undone.slice(0), null, !0)
                }, setGutterMarker: zi(function (e, t, r) {
                    return la(this, e, "gutter", function (e) {
                        var n = e.gutterMarkers || (e.gutterMarkers = {});
                        return n[t] = r, !r && ne(n) && (e.gutterMarkers = null), !0
                    })
                }), clearGutter: zi(function (e) {
                    var t = this;
                    this.iter(function (r) {
                        r.gutterMarkers && r.gutterMarkers[e] && la(t, r, "gutter", function () {
                            return r.gutterMarkers[e] = null, ne(r.gutterMarkers) && (r.gutterMarkers = null), !0
                        })
                    })
                }), lineInfo: function (e) {
                    var t;
                    if ("number" == typeof e) {
                        if (!rt(this, e)) return null;
                        if (t = e, e = Ye(this, e), !e) return null
                    } else if (t = et(e), null == t) return null;
                    return {
                        line: t,
                        handle: e,
                        text: e.text,
                        gutterMarkers: e.gutterMarkers,
                        textClass: e.textClass,
                        bgClass: e.bgClass,
                        wrapClass: e.wrapClass,
                        widgets: e.widgets
                    }
                }, addLineClass: zi(function (e, t, r) {
                    return la(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                        var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
                        if (e[n]) {
                            if (S(r).test(e[n])) return !1;
                            e[n] += " " + r
                        } else e[n] = r;
                        return !0
                    })
                }), removeLineClass: zi(function (e, t, r) {
                    return la(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                        var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                            i = e[n];
                        if (!i) return !1;
                        if (null == r) e[n] = null; else {
                            var o = i.match(S(r));
                            if (!o) return !1;
                            var a = o.index + o[0].length;
                            e[n] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null
                        }
                        return !0
                    })
                }), addLineWidget: zi(function (e, t, r) {
                    return fa(this, e, t, r)
                }), removeLineWidget: function (e) {
                    e.clear()
                }, markText: function (e, t, r) {
                    return ma(this, dt(this, e), dt(this, t), r, r && r.type || "range")
                }, setBookmark: function (e, t) {
                    var r = {
                        replacedWith: t && (null == t.nodeType ? t.widget : t),
                        insertLeft: t && t.insertLeft,
                        clearWhenEmpty: !1,
                        shared: t && t.shared,
                        handleMouseEvents: t && t.handleMouseEvents
                    };
                    return e = dt(this, e), ma(this, e, e, r, "bookmark")
                }, findMarksAt: function (e) {
                    e = dt(this, e);
                    var t = [], r = Ye(this, e.line).markedSpans;
                    if (r) for (var n = 0; n < r.length; ++n) {
                        var i = r[n];
                        (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                    }
                    return t
                }, findMarks: function (e, t, r) {
                    e = dt(this, e), t = dt(this, t);
                    var n = [], i = e.line;
                    return this.iter(e.line, t.line + 1, function (o) {
                        var a = o.markedSpans;
                        if (a) for (var l = 0; l < a.length; l++) {
                            var s = a[l];
                            null != s.to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || r && !r(s.marker) || n.push(s.marker.parent || s.marker)
                        }
                        ++i
                    }), n
                }, getAllMarks: function () {
                    var e = [];
                    return this.iter(function (t) {
                        var r = t.markedSpans;
                        if (r) for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker)
                    }), e
                }, posFromIndex: function (e) {
                    var t, r = this.first, n = this.lineSeparator().length;
                    return this.iter(function (i) {
                        var o = i.text.length + n;
                        if (o > e) return t = e, !0;
                        e -= o, ++r
                    }), dt(this, it(r, t))
                }, indexFromPos: function (e) {
                    e = dt(this, e);
                    var t = e.ch;
                    if (e.line < this.first || e.ch < 0) return 0;
                    var r = this.lineSeparator().length;
                    return this.iter(this.first, e.line, function (e) {
                        t += e.text.length + r
                    }), t
                }, copy: function (e) {
                    var t = new ka(Je(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                    return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
                }, linkedDoc: function (e) {
                    e || (e = {});
                    var t = this.first, r = this.first + this.size;
                    null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
                    var n = new ka(Je(this, t, r), e.mode || this.modeOption, t, this.lineSep, this.direction);
                    return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
                        doc: n,
                        sharedHist: e.sharedHist
                    }), n.linked = [{doc: this, isParent: !0, sharedHist: e.sharedHist}], ba(n, ya(this)), n
                }, unlinkDoc: function (e) {
                    var t = this;
                    if (e instanceof Fl && (e = e.doc), this.linked) for (var r = 0; r < this.linked.length; ++r) {
                        var n = t.linked[r];
                        if (n.doc == e) {
                            t.linked.splice(r, 1), e.unlinkDoc(t), wa(ya(t));
                            break
                        }
                    }
                    if (e.history == this.history) {
                        var i = [e.id];
                        vo(e, function (e) {
                            return i.push(e.id)
                        }, !0), e.history = new xo(null), e.history.done = zo(this.history.done, i), e.history.undone = zo(this.history.undone, i)
                    }
                }, iterLinkedDocs: function (e) {
                    vo(this, e)
                }, getMode: function () {
                    return this.mode
                }, getEditor: function () {
                    return this.cm
                }, splitLines: function (e) {
                    return this.lineSep ? e.split(this.lineSep) : ze(e)
                }, lineSeparator: function () {
                    return this.lineSep || "\n"
                }, setDirection: zi(function (e) {
                    "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function (e) {
                        return e.order = null
                    }), this.cm && wo(this.cm))
                })
            }), ka.prototype.eachLine = ka.prototype.iter;
            var Ca = 0;

            function Sa(e) {
                var t = this;
                if (Ma(t), !ye(t, e) && !Vr(t.display, e)) {
                    ke(e), a && (Ca = +new Date);
                    var r = Pn(t, e, !0), n = e.dataTransfer.files;
                    if (r && !t.isReadOnly()) if (n && n.length && window.FileReader && window.File) for (var i = n.length, o = Array(i), l = 0, s = function (e, n) {
                        if (!t.options.allowDropFileTypes || -1 != B(t.options.allowDropFileTypes, e.type)) {
                            var a = new FileReader;
                            a.onload = Di(t, function () {
                                var e = a.result;
                                if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[n] = e, ++l == i) {
                                    r = dt(t.doc, r);
                                    var s = {
                                        from: r,
                                        to: r,
                                        text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    Zo(t.doc, s), Bo(t.doc, ao(r, lo(s)))
                                }
                            }), a.readAsText(e)
                        }
                    }, c = 0; c < i; ++c) s(n[c], c); else {
                        if (t.state.draggingText && t.doc.sel.contains(r) > -1) return t.state.draggingText(e), void setTimeout(function () {
                            return t.display.input.focus()
                        }, 20);
                        try {
                            var u = e.dataTransfer.getData("Text");
                            if (u) {
                                var d;
                                if (t.state.draggingText && !t.state.draggingText.copy && (d = t.listSelections()), Vo(t.doc, ao(r, r)), d) for (var f = 0; f < d.length; ++f) na(t.doc, "", d[f].anchor, d[f].head, "drag");
                                t.replaceSelection(u, "around", "paste"), t.display.input.focus()
                            }
                        } catch (e) {
                        }
                    }
                }
            }

            function Ta(e, t) {
                if (a && (!e.state.draggingText || +new Date - Ca < 100)) Te(t); else if (!ye(e, t) && !Vr(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !f)) {
                    var r = N("img", null, null, "position: fixed; left: 0; top: 0;");
                    r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d && (r.width = r.height = 1, e.display.wrapper.appendChild(r), r._top = r.offsetTop), t.dataTransfer.setDragImage(r, 0, 0), d && r.parentNode.removeChild(r)
                }
            }

            function La(e, t) {
                var r = Pn(e, t);
                if (r) {
                    var n = document.createDocumentFragment();
                    Gn(e, r, n), e.display.dragCursor || (e.display.dragCursor = N("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), O(e.display.dragCursor, n)
                }
            }

            function Ma(e) {
                e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
            }

            function Oa(e) {
                if (document.getElementsByClassName) {
                    for (var t = document.getElementsByClassName("CodeMirror"), r = [], n = 0; n < t.length; n++) {
                        var i = t[n].CodeMirror;
                        i && r.push(i)
                    }
                    r.length && r[0].operation(function () {
                        for (var t = 0; t < r.length; t++) e(r[t])
                    })
                }
            }

            var Na = !1;

            function Aa() {
                Na || (Da(), Na = !0)
            }

            function Da() {
                var e;
                pe(window, "resize", function () {
                    null == e && (e = setTimeout(function () {
                        e = null, Oa(Wa)
                    }, 100))
                }), pe(window, "blur", function () {
                    return Oa(Zn)
                })
            }

            function Wa(e) {
                var t = e.display;
                t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
            }

            for (var za = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            }, Pa = 0; Pa < 10; Pa++) za[Pa + 48] = za[Pa + 96] = String(Pa);
            for (var Ea = 65; Ea <= 90; Ea++) za[Ea] = String.fromCharCode(Ea);
            for (var Fa = 1; Fa <= 12; Fa++) za[Fa + 111] = za[Fa + 63235] = "F" + Fa;
            var Ha = {};

            function Ia(e) {
                var t, r, n, i, o = e.split(/-(?!$)/);
                e = o[o.length - 1];
                for (var a = 0; a < o.length - 1; a++) {
                    var l = o[a];
                    if (/^(cmd|meta|m)$/i.test(l)) i = !0; else if (/^a(lt)?$/i.test(l)) t = !0; else if (/^(c|ctrl|control)$/i.test(l)) r = !0; else {
                        if (!/^s(hift)?$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);
                        n = !0
                    }
                }
                return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e
            }

            function Ra(e) {
                var t = {};
                for (var r in e) if (e.hasOwnProperty(r)) {
                    var n = e[r];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
                    if ("..." == n) {
                        delete e[r];
                        continue
                    }
                    for (var i = Y(r.split(" "), Ia), o = 0; o < i.length; o++) {
                        var a = void 0, l = void 0;
                        o == i.length - 1 ? (l = i.join(" "), a = n) : (l = i.slice(0, o + 1).join(" "), a = "...");
                        var s = t[l];
                        if (s) {
                            if (s != a) throw new Error("Inconsistent bindings for " + l)
                        } else t[l] = a
                    }
                    delete e[r]
                }
                for (var c in t) e[c] = t[c];
                return e
            }

            function Ba(e, t, r, n) {
                t = Ga(t);
                var i = t.call ? t.call(e, n) : t[e];
                if (!1 === i) return "nothing";
                if ("..." === i) return "multi";
                if (null != i && r(i)) return "handled";
                if (t.fallthrough) {
                    if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Ba(e, t.fallthrough, r, n);
                    for (var o = 0; o < t.fallthrough.length; o++) {
                        var a = Ba(e, t.fallthrough[o], r, n);
                        if (a) return a
                    }
                }
            }

            function ja(e) {
                var t = "string" == typeof e ? e : za[e.keyCode];
                return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
            }

            function Va(e, t, r) {
                var n = e;
                return t.altKey && "Alt" != n && (e = "Alt-" + e), (k ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e), (k ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e), !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e), e
            }

            function Ka(e, t) {
                if (d && 34 == e.keyCode && e["char"]) return !1;
                var r = za[e.keyCode];
                return null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code), Va(r, e, t))
            }

            function Ga(e) {
                return "string" == typeof e ? Ha[e] : e
            }

            function Ua(e, t) {
                for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
                    var o = t(r[i]);
                    while (n.length && ot(o.from, X(n).to) <= 0) {
                        var a = n.pop();
                        if (ot(a.from, o.from) < 0) {
                            o.from = a.from;
                            break
                        }
                    }
                    n.push(o)
                }
                Ai(e, function () {
                    for (var t = n.length - 1; t >= 0; t--) na(e.doc, "", n[t].from, n[t].to, "+delete");
                    ai(e)
                })
            }

            function $a(e, t, r) {
                var n = ae(e.text, t + r, r);
                return n < 0 || n > e.text.length ? null : n
            }

            function qa(e, t, r) {
                var n = $a(e, t.ch, r);
                return null == n ? null : new it(t.line, n, r < 0 ? "after" : "before")
            }

            function _a(e, t, r, n, i) {
                if (e) {
                    var o = fe(r, t.doc.direction);
                    if (o) {
                        var a, l = i < 0 ? X(o) : o[0], s = i < 0 == (1 == l.level), c = s ? "after" : "before";
                        if (l.level > 0 || "rtl" == t.doc.direction) {
                            var u = en(t, r);
                            a = i < 0 ? r.text.length - 1 : 0;
                            var d = tn(t, u, a).top;
                            a = le(function (e) {
                                return tn(t, u, e).top == d
                            }, i < 0 == (1 == l.level) ? l.from : l.to - 1, a), "before" == c && (a = $a(r, a, 1))
                        } else a = i < 0 ? l.to : l.from;
                        return new it(n, a, c)
                    }
                }
                return new it(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after")
            }

            function Xa(e, t, r, n) {
                var i = fe(t, e.doc.direction);
                if (!i) return qa(t, r, n);
                r.ch >= t.text.length ? (r.ch = t.text.length, r.sticky = "before") : r.ch <= 0 && (r.ch = 0, r.sticky = "after");
                var o = ue(i, r.ch, r.sticky), a = i[o];
                if ("ltr" == e.doc.direction && a.level % 2 == 0 && (n > 0 ? a.to > r.ch : a.from < r.ch)) return qa(t, r, n);
                var l, s = function (e, r) {
                    return $a(t, e instanceof it ? e.ch : e, r)
                }, c = function (r) {
                    return e.options.lineWrapping ? (l = l || en(e, t), Cn(e, t, l, r)) : {begin: 0, end: t.text.length}
                }, u = c("before" == r.sticky ? s(r, -1) : r.ch);
                if ("rtl" == e.doc.direction || 1 == a.level) {
                    var d = 1 == a.level == n < 0, f = s(r, d ? 1 : -1);
                    if (null != f && (d ? f <= a.to && f <= u.end : f >= a.from && f >= u.begin)) {
                        var h = d ? "before" : "after";
                        return new it(r.line, f, h)
                    }
                }
                var p = function (e, t, n) {
                    for (var o = function (e, t) {
                        return t ? new it(r.line, s(e, 1), "before") : new it(r.line, e, "after")
                    }; e >= 0 && e < i.length; e += t) {
                        var a = i[e], l = t > 0 == (1 != a.level), c = l ? n.begin : s(n.end, -1);
                        if (a.from <= c && c < a.to) return o(c, l);
                        if (c = l ? a.from : s(a.to, -1), n.begin <= c && c < n.end) return o(c, l)
                    }
                }, m = p(o + n, n, u);
                if (m) return m;
                var g = n > 0 ? u.end : s(u.begin, -1);
                return null == g || n > 0 && g == t.text.length || (m = p(n > 0 ? 0 : i.length - 1, n, c(g)), !m) ? null : m
            }

            Ha.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                "Shift-Backspace": "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite",
                Esc: "singleSelection"
            }, Ha.pcDefault = {
                "Ctrl-A": "selectAll",
                "Ctrl-D": "deleteLine",
                "Ctrl-Z": "undo",
                "Shift-Ctrl-Z": "redo",
                "Ctrl-Y": "redo",
                "Ctrl-Home": "goDocStart",
                "Ctrl-End": "goDocEnd",
                "Ctrl-Up": "goLineUp",
                "Ctrl-Down": "goLineDown",
                "Ctrl-Left": "goGroupLeft",
                "Ctrl-Right": "goGroupRight",
                "Alt-Left": "goLineStart",
                "Alt-Right": "goLineEnd",
                "Ctrl-Backspace": "delGroupBefore",
                "Ctrl-Delete": "delGroupAfter",
                "Ctrl-S": "save",
                "Ctrl-F": "find",
                "Ctrl-G": "findNext",
                "Shift-Ctrl-G": "findPrev",
                "Shift-Ctrl-F": "replace",
                "Shift-Ctrl-R": "replaceAll",
                "Ctrl-[": "indentLess",
                "Ctrl-]": "indentMore",
                "Ctrl-U": "undoSelection",
                "Shift-Ctrl-U": "redoSelection",
                "Alt-U": "redoSelection",
                fallthrough: "basic"
            }, Ha.emacsy = {
                "Ctrl-F": "goCharRight",
                "Ctrl-B": "goCharLeft",
                "Ctrl-P": "goLineUp",
                "Ctrl-N": "goLineDown",
                "Alt-F": "goWordRight",
                "Alt-B": "goWordLeft",
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                "Ctrl-V": "goPageDown",
                "Shift-Ctrl-V": "goPageUp",
                "Ctrl-D": "delCharAfter",
                "Ctrl-H": "delCharBefore",
                "Alt-D": "delWordAfter",
                "Alt-Backspace": "delWordBefore",
                "Ctrl-K": "killLine",
                "Ctrl-T": "transposeChars",
                "Ctrl-O": "openLine"
            }, Ha.macDefault = {
                "Cmd-A": "selectAll",
                "Cmd-D": "deleteLine",
                "Cmd-Z": "undo",
                "Shift-Cmd-Z": "redo",
                "Cmd-Y": "redo",
                "Cmd-Home": "goDocStart",
                "Cmd-Up": "goDocStart",
                "Cmd-End": "goDocEnd",
                "Cmd-Down": "goDocEnd",
                "Alt-Left": "goGroupLeft",
                "Alt-Right": "goGroupRight",
                "Cmd-Left": "goLineLeft",
                "Cmd-Right": "goLineRight",
                "Alt-Backspace": "delGroupBefore",
                "Ctrl-Alt-Backspace": "delGroupAfter",
                "Alt-Delete": "delGroupAfter",
                "Cmd-S": "save",
                "Cmd-F": "find",
                "Cmd-G": "findNext",
                "Shift-Cmd-G": "findPrev",
                "Cmd-Alt-F": "replace",
                "Shift-Cmd-Alt-F": "replaceAll",
                "Cmd-[": "indentLess",
                "Cmd-]": "indentMore",
                "Cmd-Backspace": "delWrappedLineLeft",
                "Cmd-Delete": "delWrappedLineRight",
                "Cmd-U": "undoSelection",
                "Shift-Cmd-U": "redoSelection",
                "Ctrl-Up": "goDocStart",
                "Ctrl-Down": "goDocEnd",
                fallthrough: ["basic", "emacsy"]
            }, Ha["default"] = y ? Ha.macDefault : Ha.pcDefault;
            var Ya = {
                selectAll: Xo, singleSelection: function (e) {
                    return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), K)
                }, killLine: function (e) {
                    return Ua(e, function (t) {
                        if (t.empty()) {
                            var r = Ye(e.doc, t.head.line).text.length;
                            return t.head.ch == r && t.head.line < e.lastLine() ? {
                                from: t.head,
                                to: it(t.head.line + 1, 0)
                            } : {from: t.head, to: it(t.head.line, r)}
                        }
                        return {from: t.from(), to: t.to()}
                    })
                }, deleteLine: function (e) {
                    return Ua(e, function (t) {
                        return {from: it(t.from().line, 0), to: dt(e.doc, it(t.to().line + 1, 0))}
                    })
                }, delLineLeft: function (e) {
                    return Ua(e, function (e) {
                        return {from: it(e.from().line, 0), to: e.from()}
                    })
                }, delWrappedLineLeft: function (e) {
                    return Ua(e, function (t) {
                        var r = e.charCoords(t.head, "div").top + 5, n = e.coordsChar({left: 0, top: r}, "div");
                        return {from: n, to: t.from()}
                    })
                }, delWrappedLineRight: function (e) {
                    return Ua(e, function (t) {
                        var r = e.charCoords(t.head, "div").top + 5,
                            n = e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: r}, "div");
                        return {from: t.from(), to: n}
                    })
                }, undo: function (e) {
                    return e.undo()
                }, redo: function (e) {
                    return e.redo()
                }, undoSelection: function (e) {
                    return e.undoSelection()
                }, redoSelection: function (e) {
                    return e.redoSelection()
                }, goDocStart: function (e) {
                    return e.extendSelection(it(e.firstLine(), 0))
                }, goDocEnd: function (e) {
                    return e.extendSelection(it(e.lastLine()))
                }, goLineStart: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        return Za(e, t.head.line)
                    }, {origin: "+move", bias: 1})
                }, goLineStartSmart: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        return Qa(e, t.head)
                    }, {origin: "+move", bias: 1})
                }, goLineEnd: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        return Ja(e, t.head.line)
                    }, {origin: "+move", bias: -1})
                }, goLineRight: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        var r = e.cursorCoords(t.head, "div").top + 5;
                        return e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: r}, "div")
                    }, U)
                }, goLineLeft: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        var r = e.cursorCoords(t.head, "div").top + 5;
                        return e.coordsChar({left: 0, top: r}, "div")
                    }, U)
                }, goLineLeftSmart: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        var r = e.cursorCoords(t.head, "div").top + 5, n = e.coordsChar({left: 0, top: r}, "div");
                        return n.ch < e.getLine(n.line).search(/\S/) ? Qa(e, t.head) : n
                    }, U)
                }, goLineUp: function (e) {
                    return e.moveV(-1, "line")
                }, goLineDown: function (e) {
                    return e.moveV(1, "line")
                }, goPageUp: function (e) {
                    return e.moveV(-1, "page")
                }, goPageDown: function (e) {
                    return e.moveV(1, "page")
                }, goCharLeft: function (e) {
                    return e.moveH(-1, "char")
                }, goCharRight: function (e) {
                    return e.moveH(1, "char")
                }, goColumnLeft: function (e) {
                    return e.moveH(-1, "column")
                }, goColumnRight: function (e) {
                    return e.moveH(1, "column")
                }, goWordLeft: function (e) {
                    return e.moveH(-1, "word")
                }, goGroupRight: function (e) {
                    return e.moveH(1, "group")
                }, goGroupLeft: function (e) {
                    return e.moveH(-1, "group")
                }, goWordRight: function (e) {
                    return e.moveH(1, "word")
                }, delCharBefore: function (e) {
                    return e.deleteH(-1, "char")
                }, delCharAfter: function (e) {
                    return e.deleteH(1, "char")
                }, delWordBefore: function (e) {
                    return e.deleteH(-1, "word")
                }, delWordAfter: function (e) {
                    return e.deleteH(1, "word")
                }, delGroupBefore: function (e) {
                    return e.deleteH(-1, "group")
                }, delGroupAfter: function (e) {
                    return e.deleteH(1, "group")
                }, indentAuto: function (e) {
                    return e.indentSelection("smart")
                }, indentMore: function (e) {
                    return e.indentSelection("add")
                }, indentLess: function (e) {
                    return e.indentSelection("subtract")
                }, insertTab: function (e) {
                    return e.replaceSelection("\t")
                }, insertSoftTab: function (e) {
                    for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
                        var o = r[i].from(), a = I(e.getLine(o.line), o.ch, n);
                        t.push(_(n - a % n))
                    }
                    e.replaceSelections(t)
                }, defaultTab: function (e) {
                    e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
                }, transposeChars: function (e) {
                    return Ai(e, function () {
                        for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++) if (t[n].empty()) {
                            var i = t[n].head, o = Ye(e.doc, i.line).text;
                            if (o) if (i.ch == o.length && (i = new it(i.line, i.ch - 1)), i.ch > 0) i = new it(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), it(i.line, i.ch - 2), i, "+transpose"); else if (i.line > e.doc.first) {
                                var a = Ye(e.doc, i.line - 1).text;
                                a && (i = new it(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), it(i.line - 1, a.length - 1), i, "+transpose"))
                            }
                            r.push(new io(i, i))
                        }
                        e.setSelections(r)
                    })
                }, newlineAndIndent: function (e) {
                    return Ai(e, function () {
                        for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--) e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, "+input");
                        t = e.listSelections();
                        for (var n = 0; n < t.length; n++) e.indentLine(t[n].from().line, null, !0);
                        ai(e)
                    })
                }, openLine: function (e) {
                    return e.replaceSelection("\n", "start")
                }, toggleOverwrite: function (e) {
                    return e.toggleOverwrite()
                }
            };

            function Za(e, t) {
                var r = Ye(e.doc, t), n = Zt(r);
                return n != r && (t = et(n)), _a(!0, e, n, t, 1)
            }

            function Ja(e, t) {
                var r = Ye(e.doc, t), n = Jt(r);
                return n != r && (t = et(n)), _a(!0, e, r, t, -1)
            }

            function Qa(e, t) {
                var r = Za(e, t.line), n = Ye(e.doc, r.line), i = fe(n, e.doc.direction);
                if (!i || 0 == i[0].level) {
                    var o = Math.max(0, n.text.search(/\S/)), a = t.line == r.line && t.ch <= o && t.ch;
                    return it(r.line, a ? 0 : o, r.sticky)
                }
                return r
            }

            function el(e, t, r) {
                if ("string" == typeof t && (t = Ya[t], !t)) return !1;
                e.display.input.ensurePolled();
                var n = e.display.shift, i = !1;
                try {
                    e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), i = t(e) != V
                } finally {
                    e.display.shift = n, e.state.suppressEdits = !1
                }
                return i
            }

            function tl(e, t, r) {
                for (var n = 0; n < e.state.keyMaps.length; n++) {
                    var i = Ba(t, e.state.keyMaps[n], r, e);
                    if (i) return i
                }
                return e.options.extraKeys && Ba(t, e.options.extraKeys, r, e) || Ba(t, e.options.keyMap, r, e)
            }

            var rl = new R;

            function nl(e, t, r, n) {
                var i = e.state.keySeq;
                if (i) {
                    if (ja(t)) return "handled";
                    if (/\'$/.test(t) ? e.state.keySeq = null : rl.set(50, function () {
                        e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
                    }), il(e, i + " " + t, r, n)) return !0
                }
                return il(e, t, r, n)
            }

            function il(e, t, r, n) {
                var i = tl(e, t, n);
                return "multi" == i && (e.state.keySeq = t), "handled" == i && Mr(e, "keyHandled", e, t, r), "handled" != i && "multi" != i || (ke(r), qn(e)), !!i
            }

            function ol(e, t) {
                var r = Ka(t, !0);
                return !!r && (t.shiftKey && !e.state.keySeq ? nl(e, "Shift-" + r, t, function (t) {
                    return el(e, t, !0)
                }) || nl(e, r, t, function (t) {
                    if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return el(e, t)
                }) : nl(e, r, t, function (t) {
                    return el(e, t)
                }))
            }

            function al(e, t, r) {
                return nl(e, "'" + r + "'", t, function (t) {
                    return el(e, t, !0)
                })
            }

            var ll = null;

            function sl(e) {
                var t = this;
                if (t.curOp.focus = W(), !ye(t, e)) {
                    a && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
                    var r = e.keyCode;
                    t.display.shift = 16 == r || e.shiftKey;
                    var n = ol(t, e);
                    d && (ll = n ? r : null, !n && 88 == r && !Ee && (y ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || cl(t)
                }
            }

            function cl(e) {
                var t = e.display.lineDiv;

                function r(e) {
                    18 != e.keyCode && e.altKey || (L(t, "CodeMirror-crosshair"), ge(document, "keyup", r), ge(document, "mouseover", r))
                }

                z(t, "CodeMirror-crosshair"), pe(document, "keyup", r), pe(document, "mouseover", r)
            }

            function ul(e) {
                16 == e.keyCode && (this.doc.sel.shift = !1), ye(this, e)
            }

            function dl(e) {
                var t = this;
                if (!(Vr(t.display, e) || ye(t, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) {
                    var r = e.keyCode, n = e.charCode;
                    if (d && r == ll) return ll = null, void ke(e);
                    if (!d || e.which && !(e.which < 10) || !ol(t, e)) {
                        var i = String.fromCharCode(null == n ? r : n);
                        "\b" != i && (al(t, e, i) || t.display.input.onKeyPress(e))
                    }
                }
            }

            var fl, hl, pl = 400, ml = function (e, t, r) {
                this.time = e, this.pos = t, this.button = r
            };

            function gl(e, t) {
                var r = +new Date;
                return hl && hl.compare(r, e, t) ? (fl = hl = null, "triple") : fl && fl.compare(r, e, t) ? (hl = new ml(r, e, t), fl = null, "double") : (fl = new ml(r, e, t), hl = null, "single")
            }

            function vl(e) {
                var t = this, r = t.display;
                if (!(ye(t, e) || r.activeTouch && r.input.supportsTouch())) if (r.input.ensurePolled(), r.shift = e.shiftKey, Vr(r, e)) s || (r.scroller.draggable = !1, setTimeout(function () {
                    return r.scroller.draggable = !0
                }, 100)); else if (!Ll(t, e)) {
                    var n = Pn(t, e), i = Me(e), o = n ? gl(n, i) : "single";
                    window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), n && yl(t, i, n, o, e) || (1 == i ? n ? wl(t, n, o, e) : Le(e) == r.scroller && ke(e) : 2 == i ? (n && Eo(t.doc, n), setTimeout(function () {
                        return r.input.focus()
                    }, 20)) : 3 == i && (C ? t.display.input.onContextMenu(e) : Xn(t)))
                }
            }

            function yl(e, t, r, n, i) {
                var o = "Click";
                return "double" == n ? o = "Double" + o : "triple" == n && (o = "Triple" + o), o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, nl(e, Va(o, i), i, function (t) {
                    if ("string" == typeof t && (t = Ya[t]), !t) return !1;
                    var n = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0), n = t(e, r) != V
                    } finally {
                        e.state.suppressEdits = !1
                    }
                    return n
                })
            }

            function bl(e, t, r) {
                var n = e.getOption("configureMouse"), i = n ? n(e, t, r) : {};
                if (null == i.unit) {
                    var o = b ? r.shiftKey && r.metaKey : r.altKey;
                    i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                }
                return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey), null == i.addNew && (i.addNew = y ? r.metaKey : r.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(y ? r.altKey : r.ctrlKey)), i
            }

            function wl(e, t, r, n) {
                a ? setTimeout(F(_n, e), 0) : e.curOp.focus = W();
                var i, o = bl(e, r, n), l = e.doc.sel;
                e.options.dragDrop && Ae && !e.isReadOnly() && "single" == r && (i = l.contains(t)) > -1 && (ot((i = l.ranges[i]).from(), t) < 0 || t.xRel > 0) && (ot(i.to(), t) > 0 || t.xRel < 0) ? xl(e, n, t, o) : Cl(e, n, t, o)
            }

            function xl(e, t, r, n) {
                var i = e.display, o = !1, c = Di(e, function (t) {
                    s && (i.scroller.draggable = !1), e.state.draggingText = !1, ge(i.wrapper.ownerDocument, "mouseup", c), ge(i.wrapper.ownerDocument, "mousemove", u), ge(i.scroller, "dragstart", d), ge(i.scroller, "drop", c), o || (ke(t), n.addNew || Eo(e.doc, r, null, null, n.extend), s || a && 9 == l ? setTimeout(function () {
                        i.wrapper.ownerDocument.body.focus(), i.input.focus()
                    }, 20) : i.input.focus())
                }), u = function (e) {
                    o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
                }, d = function () {
                    return o = !0
                };
                s && (i.scroller.draggable = !0), e.state.draggingText = c, c.copy = !n.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop(), pe(i.wrapper.ownerDocument, "mouseup", c), pe(i.wrapper.ownerDocument, "mousemove", u), pe(i.scroller, "dragstart", d), pe(i.scroller, "drop", c), Xn(e), setTimeout(function () {
                    return i.input.focus()
                }, 20)
            }

            function kl(e, t, r) {
                if ("char" == r) return new io(t, t);
                if ("word" == r) return e.findWordAt(t);
                if ("line" == r) return new io(it(t.line, 0), dt(e.doc, it(t.line + 1, 0)));
                var n = r(e, t);
                return new io(n.from, n.to)
            }

            function Cl(e, t, r, n) {
                var i = e.display, o = e.doc;
                ke(t);
                var a, l, s = o.sel, c = s.ranges;
                if (n.addNew && !n.extend ? (l = o.sel.contains(r), a = l > -1 ? c[l] : new io(r, r)) : (a = o.sel.primary(), l = o.sel.primIndex), "rectangle" == n.unit) n.addNew || (a = new io(r, r)), r = Pn(e, t, !0, !0), l = -1; else {
                    var u = kl(e, r, n.unit);
                    a = n.extend ? Po(a, u.anchor, u.head, n.extend) : u
                }
                n.addNew ? -1 == l ? (l = c.length, jo(o, oo(e, c.concat([a]), l), {
                    scroll: !1,
                    origin: "*mouse"
                })) : c.length > 1 && c[l].empty() && "char" == n.unit && !n.extend ? (jo(o, oo(e, c.slice(0, l).concat(c.slice(l + 1)), 0), {
                    scroll: !1,
                    origin: "*mouse"
                }), s = o.sel) : Ho(o, l, a, G) : (l = 0, jo(o, new no([a], 0), G), s = o.sel);
                var d = r;

                function f(t) {
                    if (0 != ot(d, t)) if (d = t, "rectangle" == n.unit) {
                        for (var i = [], c = e.options.tabSize, u = I(Ye(o, r.line).text, r.ch, c), f = I(Ye(o, t.line).text, t.ch, c), h = Math.min(u, f), p = Math.max(u, f), m = Math.min(r.line, t.line), g = Math.min(e.lastLine(), Math.max(r.line, t.line)); m <= g; m++) {
                            var v = Ye(o, m).text, y = $(v, h, c);
                            h == p ? i.push(new io(it(m, y), it(m, y))) : v.length > y && i.push(new io(it(m, y), it(m, $(v, p, c))))
                        }
                        i.length || i.push(new io(r, r)), jo(o, oo(e, s.ranges.slice(0, l).concat(i), l), {
                            origin: "*mouse",
                            scroll: !1
                        }), e.scrollIntoView(t)
                    } else {
                        var b, w = a, x = kl(e, t, n.unit), k = w.anchor;
                        ot(x.anchor, k) > 0 ? (b = x.head, k = ct(w.from(), x.anchor)) : (b = x.anchor, k = st(w.to(), x.head));
                        var C = s.ranges.slice(0);
                        C[l] = Sl(e, new io(dt(o, k), b)), jo(o, oo(e, C, l), G)
                    }
                }

                var h = i.wrapper.getBoundingClientRect(), p = 0;

                function m(t) {
                    var r = ++p, a = Pn(e, t, !0, "rectangle" == n.unit);
                    if (a) if (0 != ot(a, d)) {
                        e.curOp.focus = W(), f(a);
                        var l = ei(i, o);
                        (a.line >= l.to || a.line < l.from) && setTimeout(Di(e, function () {
                            p == r && m(t)
                        }), 150)
                    } else {
                        var s = t.clientY < h.top ? -20 : t.clientY > h.bottom ? 20 : 0;
                        s && setTimeout(Di(e, function () {
                            p == r && (i.scroller.scrollTop += s, m(t))
                        }), 50)
                    }
                }

                function g(t) {
                    e.state.selectingText = !1, p = 1 / 0, t && (ke(t), i.input.focus()), ge(i.wrapper.ownerDocument, "mousemove", v), ge(i.wrapper.ownerDocument, "mouseup", y), o.history.lastSelOrigin = null
                }

                var v = Di(e, function (e) {
                    0 !== e.buttons && Me(e) ? m(e) : g(e)
                }), y = Di(e, g);
                e.state.selectingText = y, pe(i.wrapper.ownerDocument, "mousemove", v), pe(i.wrapper.ownerDocument, "mouseup", y)
            }

            function Sl(e, t) {
                var r = t.anchor, n = t.head, i = Ye(e.doc, r.line);
                if (0 == ot(r, n) && r.sticky == n.sticky) return t;
                var o = fe(i);
                if (!o) return t;
                var a = ue(o, r.ch, r.sticky), l = o[a];
                if (l.from != r.ch && l.to != r.ch) return t;
                var s, c = a + (l.from == r.ch == (1 != l.level) ? 0 : 1);
                if (0 == c || c == o.length) return t;
                if (n.line != r.line) s = (n.line - r.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0; else {
                    var u = ue(o, n.ch, n.sticky), d = u - a || (n.ch - r.ch) * (1 == l.level ? -1 : 1);
                    s = u == c - 1 || u == c ? d < 0 : d > 0
                }
                var f = o[c + (s ? -1 : 0)], h = s == (1 == f.level), p = h ? f.from : f.to, m = h ? "after" : "before";
                return r.ch == p && r.sticky == m ? t : new io(new it(r.line, p, m), n)
            }

            function Tl(e, t, r, n) {
                var i, o;
                if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY; else try {
                    i = t.clientX, o = t.clientY
                } catch (t) {
                    return !1
                }
                if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                n && ke(t);
                var a = e.display, l = a.lineDiv.getBoundingClientRect();
                if (o > l.bottom || !we(e, r)) return Se(t);
                o -= l.top - a.viewOffset;
                for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                    var c = a.gutters.childNodes[s];
                    if (c && c.getBoundingClientRect().right >= i) {
                        var u = tt(e.doc, o), d = e.display.gutterSpecs[s];
                        return ve(e, r, e, u, d.className, t), Se(t)
                    }
                }
            }

            function Ll(e, t) {
                return Tl(e, t, "gutterClick", !0)
            }

            function Ml(e, t) {
                Vr(e.display, t) || Ol(e, t) || ye(e, t, "contextmenu") || C || e.display.input.onContextMenu(t)
            }

            function Ol(e, t) {
                return !!we(e, "gutterContextMenu") && Tl(e, t, "gutterContextMenu", !1)
            }

            function Nl(e) {
                e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), dn(e)
            }

            ml.prototype.compare = function (e, t, r) {
                return this.time + pl > e && 0 == ot(t, this.pos) && r == this.button
            };
            var Al = {
                toString: function () {
                    return "CodeMirror.Init"
                }
            }, Dl = {}, Wl = {};

            function zl(e) {
                var t = e.optionHandlers;

                function r(r, n, i, o) {
                    e.defaults[r] = n, i && (t[r] = o ? function (e, t, r) {
                        r != Al && i(e, t, r)
                    } : i)
                }

                e.defineOption = r, e.Init = Al, r("value", "", function (e, t) {
                    return e.setValue(t)
                }, !0), r("mode", null, function (e, t) {
                    e.doc.modeOption = t, ho(e)
                }, !0), r("indentUnit", 2, ho, !0), r("indentWithTabs", !1), r("smartIndent", !0), r("tabSize", 4, function (e) {
                    po(e), dn(e), Fn(e)
                }, !0), r("lineSeparator", null, function (e, t) {
                    if (e.doc.lineSep = t, t) {
                        var r = [], n = e.doc.first;
                        e.doc.iter(function (e) {
                            for (var i = 0; ;) {
                                var o = e.text.indexOf(t, i);
                                if (-1 == o) break;
                                i = o + t.length, r.push(it(n, o))
                            }
                            n++
                        });
                        for (var i = r.length - 1; i >= 0; i--) na(e.doc, t, r[i], it(r[i].line, r[i].ch + t.length))
                    }
                }), r("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (e, t, r) {
                    e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), r != Al && e.refresh()
                }), r("specialCharPlaceholder", pr, function (e) {
                    return e.refresh()
                }, !0), r("electricChars", !0), r("inputStyle", v ? "contenteditable" : "textarea", function () {
                    throw new Error("inputStyle can not (yet) be changed in a running editor")
                }, !0), r("spellcheck", !1, function (e, t) {
                    return e.getInputField().spellcheck = t
                }, !0), r("autocorrect", !1, function (e, t) {
                    return e.getInputField().autocorrect = t
                }, !0), r("autocapitalize", !1, function (e, t) {
                    return e.getInputField().autocapitalize = t
                }, !0), r("rtlMoveVisually", !w), r("wholeLineUpdateBefore", !0), r("theme", "default", function (e) {
                    Nl(e), Yi(e)
                }, !0), r("keyMap", "default", function (e, t, r) {
                    var n = Ga(t), i = r != Al && Ga(r);
                    i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null)
                }), r("extraKeys", null), r("configureMouse", null), r("lineWrapping", !1, El, !0), r("gutters", [], function (e, t) {
                    e.display.gutterSpecs = _i(t, e.options.lineNumbers), Yi(e)
                }, !0), r("fixedGutter", !0, function (e, t) {
                    e.display.gutters.style.left = t ? Dn(e.display) + "px" : "0", e.refresh()
                }, !0), r("coverGutterNextToScrollbar", !1, function (e) {
                    return vi(e)
                }, !0), r("scrollbarStyle", "native", function (e) {
                    wi(e), vi(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
                }, !0), r("lineNumbers", !1, function (e, t) {
                    e.display.gutterSpecs = _i(e.options.gutters, t), Yi(e)
                }, !0), r("firstLineNumber", 1, Yi, !0), r("lineNumberFormatter", function (e) {
                    return e
                }, Yi, !0), r("showCursorWhenSelecting", !1, Vn, !0), r("resetSelectionOnContextMenu", !0), r("lineWiseCopyCut", !0), r("pasteLinesPerSelection", !0), r("selectionsMayTouch", !1), r("readOnly", !1, function (e, t) {
                    "nocursor" == t && (Zn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
                }), r("disableInput", !1, function (e, t) {
                    t || e.display.input.reset()
                }, !0), r("dragDrop", !0, Pl), r("allowDropFileTypes", null), r("cursorBlinkRate", 530), r("cursorScrollMargin", 0), r("cursorHeight", 1, Vn, !0), r("singleCursorHeightPerLine", !0, Vn, !0), r("workTime", 100), r("workDelay", 100), r("flattenSpans", !0, po, !0), r("addModeClass", !1, po, !0), r("pollInterval", 100), r("undoDepth", 200, function (e, t) {
                    return e.doc.history.undoDepth = t
                }), r("historyEventDelay", 1250), r("viewportMargin", 10, function (e) {
                    return e.refresh()
                }, !0), r("maxHighlightLength", 1e4, po, !0), r("moveInputWithCursor", !0, function (e, t) {
                    t || e.display.input.resetPosition()
                }), r("tabindex", null, function (e, t) {
                    return e.display.input.getField().tabIndex = t || ""
                }), r("autofocus", null), r("direction", "ltr", function (e, t) {
                    return e.doc.setDirection(t)
                }, !0), r("phrases", null)
            }

            function Pl(e, t, r) {
                var n = r && r != Al;
                if (!t != !n) {
                    var i = e.display.dragFunctions, o = t ? pe : ge;
                    o(e.display.scroller, "dragstart", i.start), o(e.display.scroller, "dragenter", i.enter), o(e.display.scroller, "dragover", i.over), o(e.display.scroller, "dragleave", i.leave), o(e.display.scroller, "drop", i.drop)
                }
            }

            function El(e) {
                e.options.lineWrapping ? (z(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (L(e.display.wrapper, "CodeMirror-wrap"), ar(e)), zn(e), Fn(e), dn(e), setTimeout(function () {
                    return vi(e)
                }, 100)
            }

            function Fl(e, t) {
                var r = this;
                if (!(this instanceof Fl)) return new Fl(e, t);
                this.options = t = t ? H(t) : {}, H(Dl, t, !1);
                var n = t.value;
                "string" == typeof n ? n = new ka(n, t.mode, null, t.lineSeparator, t.direction) : t.mode && (n.modeOption = t.mode), this.doc = n;
                var i = new Fl.inputStyles[t.inputStyle](this), o = this.display = new Zi(e, n, i, t);
                for (var c in o.wrapper.CodeMirror = this, Nl(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), wi(this), this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: -1,
                    cutIncoming: -1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new R,
                    keySeq: null,
                    specialChars: null
                }, t.autofocus && !v && o.input.focus(), a && l < 11 && setTimeout(function () {
                    return r.display.input.reset(!0)
                }, 20), Hl(this), Aa(), ki(this), this.curOp.forceUpdate = !0, yo(this, n), t.autofocus && !v || this.hasFocus() ? setTimeout(F(Yn, this), 20) : Zn(this), Wl) Wl.hasOwnProperty(c) && Wl[c](r, t[c], Al);
                qi(this), t.finishInit && t.finishInit(this);
                for (var u = 0; u < Il.length; ++u) Il[u](r);
                Ci(this), s && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
            }

            function Hl(e) {
                var t = e.display;
                pe(t.scroller, "mousedown", Di(e, vl)), pe(t.scroller, "dblclick", a && l < 11 ? Di(e, function (t) {
                    if (!ye(e, t)) {
                        var r = Pn(e, t);
                        if (r && !Ll(e, t) && !Vr(e.display, t)) {
                            ke(t);
                            var n = e.findWordAt(r);
                            Eo(e.doc, n.anchor, n.head)
                        }
                    }
                }) : function (t) {
                    return ye(e, t) || ke(t)
                }), pe(t.scroller, "contextmenu", function (t) {
                    return Ml(e, t)
                });
                var r, n = {end: 0};

                function i() {
                    t.activeTouch && (r = setTimeout(function () {
                        return t.activeTouch = null
                    }, 1e3), n = t.activeTouch, n.end = +new Date)
                }

                function o(e) {
                    if (1 != e.touches.length) return !1;
                    var t = e.touches[0];
                    return t.radiusX <= 1 && t.radiusY <= 1
                }

                function s(e, t) {
                    if (null == t.left) return !0;
                    var r = t.left - e.left, n = t.top - e.top;
                    return r * r + n * n > 400
                }

                pe(t.scroller, "touchstart", function (i) {
                    if (!ye(e, i) && !o(i) && !Ll(e, i)) {
                        t.input.ensurePolled(), clearTimeout(r);
                        var a = +new Date;
                        t.activeTouch = {
                            start: a,
                            moved: !1,
                            prev: a - n.end <= 300 ? n : null
                        }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY)
                    }
                }), pe(t.scroller, "touchmove", function () {
                    t.activeTouch && (t.activeTouch.moved = !0)
                }), pe(t.scroller, "touchend", function (r) {
                    var n = t.activeTouch;
                    if (n && !Vr(t, r) && null != n.left && !n.moved && new Date - n.start < 300) {
                        var o, a = e.coordsChar(t.activeTouch, "page");
                        o = !n.prev || s(n, n.prev) ? new io(a, a) : !n.prev.prev || s(n, n.prev.prev) ? e.findWordAt(a) : new io(it(a.line, 0), dt(e.doc, it(a.line + 1, 0))), e.setSelection(o.anchor, o.head), e.focus(), ke(r)
                    }
                    i()
                }), pe(t.scroller, "touchcancel", i), pe(t.scroller, "scroll", function () {
                    t.scroller.clientHeight && (di(e, t.scroller.scrollTop), hi(e, t.scroller.scrollLeft, !0), ve(e, "scroll", e))
                }), pe(t.scroller, "mousewheel", function (t) {
                    return ro(e, t)
                }), pe(t.scroller, "DOMMouseScroll", function (t) {
                    return ro(e, t)
                }), pe(t.wrapper, "scroll", function () {
                    return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
                }), t.dragFunctions = {
                    enter: function (t) {
                        ye(e, t) || Te(t)
                    }, over: function (t) {
                        ye(e, t) || (La(e, t), Te(t))
                    }, start: function (t) {
                        return Ta(e, t)
                    }, drop: Di(e, Sa), leave: function (t) {
                        ye(e, t) || Ma(e)
                    }
                };
                var c = t.input.getField();
                pe(c, "keyup", function (t) {
                    return ul.call(e, t)
                }), pe(c, "keydown", Di(e, sl)), pe(c, "keypress", Di(e, dl)), pe(c, "focus", function (t) {
                    return Yn(e, t)
                }), pe(c, "blur", function (t) {
                    return Zn(e, t)
                })
            }

            Fl.defaults = Dl, Fl.optionHandlers = Wl;
            var Il = [];

            function Rl(e, t, r, n) {
                var i, o = e.doc;
                null == r && (r = "add"), "smart" == r && (o.mode.indent ? i = yt(e, t).state : r = "prev");
                var a = e.options.tabSize, l = Ye(o, t), s = I(l.text, null, a);
                l.stateAfter && (l.stateAfter = null);
                var c, u = l.text.match(/^\s*/)[0];
                if (n || /\S/.test(l.text)) {
                    if ("smart" == r && (c = o.mode.indent(i, l.text.slice(u.length), l.text), c == V || c > 150)) {
                        if (!n) return;
                        r = "prev"
                    }
                } else c = 0, r = "not";
                "prev" == r ? c = t > o.first ? I(Ye(o, t - 1).text, null, a) : 0 : "add" == r ? c = s + e.options.indentUnit : "subtract" == r ? c = s - e.options.indentUnit : "number" == typeof r && (c = s + r), c = Math.max(0, c);
                var d = "", f = 0;
                if (e.options.indentWithTabs) for (var h = Math.floor(c / a); h; --h) f += a, d += "\t";
                if (f < c && (d += _(c - f)), d != u) return na(o, d, it(t, 0), it(t, u.length), "+input"), l.stateAfter = null, !0;
                for (var p = 0; p < o.sel.ranges.length; p++) {
                    var m = o.sel.ranges[p];
                    if (m.head.line == t && m.head.ch < u.length) {
                        var g = it(t, u.length);
                        Ho(o, p, new io(g, g));
                        break
                    }
                }
            }

            Fl.defineInitHook = function (e) {
                return Il.push(e)
            };
            var Bl = null;

            function jl(e) {
                Bl = e
            }

            function Vl(e, t, r, n, i) {
                var o = e.doc;
                e.display.shift = !1, n || (n = o.sel);
                var a = +new Date - 200, l = "paste" == i || e.state.pasteIncoming > a, s = ze(t), c = null;
                if (l && n.ranges.length > 1) if (Bl && Bl.text.join("\n") == t) {
                    if (n.ranges.length % Bl.text.length == 0) {
                        c = [];
                        for (var u = 0; u < Bl.text.length; u++) c.push(o.splitLines(Bl.text[u]))
                    }
                } else s.length == n.ranges.length && e.options.pasteLinesPerSelection && (c = Y(s, function (e) {
                    return [e]
                }));
                for (var d = e.curOp.updateInput, f = n.ranges.length - 1; f >= 0; f--) {
                    var h = n.ranges[f], p = h.from(), m = h.to();
                    h.empty() && (r && r > 0 ? p = it(p.line, p.ch - r) : e.state.overwrite && !l ? m = it(m.line, Math.min(Ye(o, m.line).text.length, m.ch + X(s).length)) : l && Bl && Bl.lineWise && Bl.text.join("\n") == t && (p = m = it(p.line, 0)));
                    var g = {
                        from: p,
                        to: m,
                        text: c ? c[f % c.length] : s,
                        origin: i || (l ? "paste" : e.state.cutIncoming > a ? "cut" : "+input")
                    };
                    Zo(e.doc, g), Mr(e, "inputRead", e, g)
                }
                t && !l && Gl(e, t), ai(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = d), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1
            }

            function Kl(e, t) {
                var r = e.clipboardData && e.clipboardData.getData("Text");
                if (r) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Ai(t, function () {
                    return Vl(t, r, 0, null, "paste")
                }), !0
            }

            function Gl(e, t) {
                if (e.options.electricChars && e.options.smartIndent) for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
                    var i = r.ranges[n];
                    if (!(i.head.ch > 100 || n && r.ranges[n - 1].head.line == i.head.line)) {
                        var o = e.getModeAt(i.head), a = !1;
                        if (o.electricChars) {
                            for (var l = 0; l < o.electricChars.length; l++) if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                                a = Rl(e, i.head.line, "smart");
                                break
                            }
                        } else o.electricInput && o.electricInput.test(Ye(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Rl(e, i.head.line, "smart"));
                        a && Mr(e, "electricInput", e, i.head.line)
                    }
                }
            }

            function Ul(e) {
                for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
                    var i = e.doc.sel.ranges[n].head.line, o = {anchor: it(i, 0), head: it(i + 1, 0)};
                    r.push(o), t.push(e.getRange(o.anchor, o.head))
                }
                return {text: t, ranges: r}
            }

            function $l(e, t, r, n) {
                e.setAttribute("autocorrect", r ? "" : "off"), e.setAttribute("autocapitalize", n ? "" : "off"), e.setAttribute("spellcheck", !!t)
            }

            function ql() {
                var e = N("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                    t = N("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                return s ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), m && (e.style.border = "1px solid black"), $l(e), t
            }

            function _l(e) {
                var t = e.optionHandlers, r = e.helpers = {};
                e.prototype = {
                    constructor: e,
                    focus: function () {
                        window.focus(), this.display.input.focus()
                    },
                    setOption: function (e, r) {
                        var n = this.options, i = n[e];
                        n[e] == r && "mode" != e || (n[e] = r, t.hasOwnProperty(e) && Di(this, t[e])(this, r, i), ve(this, "optionChange", this, e))
                    },
                    getOption: function (e) {
                        return this.options[e]
                    },
                    getDoc: function () {
                        return this.doc
                    },
                    addKeyMap: function (e, t) {
                        this.state.keyMaps[t ? "push" : "unshift"](Ga(e))
                    },
                    removeKeyMap: function (e) {
                        for (var t = this.state.keyMaps, r = 0; r < t.length; ++r) if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0
                    },
                    addOverlay: Wi(function (t, r) {
                        var n = t.token ? t : e.getMode(this.options, t);
                        if (n.startState) throw new Error("Overlays may not be stateful.");
                        Z(this.state.overlays, {
                            mode: n,
                            modeSpec: t,
                            opaque: r && r.opaque,
                            priority: r && r.priority || 0
                        }, function (e) {
                            return e.priority
                        }), this.state.modeGen++, Fn(this)
                    }),
                    removeOverlay: Wi(function (e) {
                        for (var t = this, r = this.state.overlays, n = 0; n < r.length; ++n) {
                            var i = r[n].modeSpec;
                            if (i == e || "string" == typeof e && i.name == e) return r.splice(n, 1), t.state.modeGen++, void Fn(t)
                        }
                    }),
                    indentLine: Wi(function (e, t, r) {
                        "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), rt(this.doc, e) && Rl(this, e, t, r)
                    }),
                    indentSelection: Wi(function (e) {
                        for (var t = this, r = this.doc.sel.ranges, n = -1, i = 0; i < r.length; i++) {
                            var o = r[i];
                            if (o.empty()) o.head.line > n && (Rl(t, o.head.line, e, !0), n = o.head.line, i == t.doc.sel.primIndex && ai(t)); else {
                                var a = o.from(), l = o.to(), s = Math.max(n, a.line);
                                n = Math.min(t.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                                for (var c = s; c < n; ++c) Rl(t, c, e);
                                var u = t.doc.sel.ranges;
                                0 == a.ch && r.length == u.length && u[i].from().ch > 0 && Ho(t.doc, i, new io(a, u[i].to()), K)
                            }
                        }
                    }),
                    getTokenAt: function (e, t) {
                        return Ct(this, e, t)
                    },
                    getLineTokens: function (e, t) {
                        return Ct(this, it(e), t, !0)
                    },
                    getTokenTypeAt: function (e) {
                        e = dt(this.doc, e);
                        var t, r = vt(this, Ye(this.doc, e.line)), n = 0, i = (r.length - 1) / 2, o = e.ch;
                        if (0 == o) t = r[2]; else for (; ;) {
                            var a = n + i >> 1;
                            if ((a ? r[2 * a - 1] : 0) >= o) i = a; else {
                                if (!(r[2 * a + 1] < o)) {
                                    t = r[2 * a + 2];
                                    break
                                }
                                n = a + 1
                            }
                        }
                        var l = t ? t.indexOf("overlay ") : -1;
                        return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1)
                    },
                    getModeAt: function (t) {
                        var r = this.doc.mode;
                        return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r
                    },
                    getHelper: function (e, t) {
                        return this.getHelpers(e, t)[0]
                    },
                    getHelpers: function (e, t) {
                        var n = this, i = [];
                        if (!r.hasOwnProperty(t)) return i;
                        var o = r[t], a = this.getModeAt(e);
                        if ("string" == typeof a[t]) o[a[t]] && i.push(o[a[t]]); else if (a[t]) for (var l = 0; l < a[t].length; l++) {
                            var s = o[a[t][l]];
                            s && i.push(s)
                        } else a.helperType && o[a.helperType] ? i.push(o[a.helperType]) : o[a.name] && i.push(o[a.name]);
                        for (var c = 0; c < o._global.length; c++) {
                            var u = o._global[c];
                            u.pred(a, n) && -1 == B(i, u.val) && i.push(u.val)
                        }
                        return i
                    },
                    getStateAfter: function (e, t) {
                        var r = this.doc;
                        return e = ut(r, null == e ? r.first + r.size - 1 : e), yt(this, e + 1, t).state
                    },
                    cursorCoords: function (e, t) {
                        var r, n = this.doc.sel.primary();
                        return r = null == e ? n.head : "object" == typeof e ? dt(this.doc, e) : e ? n.from() : n.to(), yn(this, r, t || "page")
                    },
                    charCoords: function (e, t) {
                        return vn(this, dt(this.doc, e), t || "page")
                    },
                    coordsChar: function (e, t) {
                        return e = gn(this, e, t || "page"), xn(this, e.left, e.top)
                    },
                    lineAtHeight: function (e, t) {
                        return e = gn(this, {
                            top: e,
                            left: 0
                        }, t || "page").top, tt(this.doc, e + this.display.viewOffset)
                    },
                    heightAtLine: function (e, t, r) {
                        var n, i = !1;
                        if ("number" == typeof e) {
                            var o = this.doc.first + this.doc.size - 1;
                            e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), n = Ye(this.doc, e)
                        } else n = e;
                        return mn(this, n, {
                            top: 0,
                            left: 0
                        }, t || "page", r || i).top + (i ? this.doc.height - ir(n) : 0)
                    },
                    defaultTextHeight: function () {
                        return On(this.display)
                    },
                    defaultCharWidth: function () {
                        return Nn(this.display)
                    },
                    getViewport: function () {
                        return {from: this.display.viewFrom, to: this.display.viewTo}
                    },
                    addWidget: function (e, t, r, n, i) {
                        var o = this.display;
                        e = yn(this, dt(this.doc, e));
                        var a = e.bottom, l = e.left;
                        if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == n) a = e.top; else if ("above" == n || "near" == n) {
                            var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                                c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                            ("above" == n || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= s && (a = e.bottom), l + t.offsetWidth > c && (l = c - t.offsetWidth)
                        }
                        t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (l = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? l = 0 : "middle" == i && (l = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = l + "px"), r && ni(this, {
                            left: l,
                            top: a,
                            right: l + t.offsetWidth,
                            bottom: a + t.offsetHeight
                        })
                    },
                    triggerOnKeyDown: Wi(sl),
                    triggerOnKeyPress: Wi(dl),
                    triggerOnKeyUp: ul,
                    triggerOnMouseDown: Wi(vl),
                    execCommand: function (e) {
                        if (Ya.hasOwnProperty(e)) return Ya[e].call(null, this)
                    },
                    triggerElectric: Wi(function (e) {
                        Gl(this, e)
                    }),
                    findPosH: function (e, t, r, n) {
                        var i = this, o = 1;
                        t < 0 && (o = -1, t = -t);
                        for (var a = dt(this.doc, e), l = 0; l < t; ++l) if (a = Xl(i.doc, a, o, r, n), a.hitSide) break;
                        return a
                    },
                    moveH: Wi(function (e, t) {
                        var r = this;
                        this.extendSelectionsBy(function (n) {
                            return r.display.shift || r.doc.extend || n.empty() ? Xl(r.doc, n.head, e, t, r.options.rtlMoveVisually) : e < 0 ? n.from() : n.to()
                        }, U)
                    }),
                    deleteH: Wi(function (e, t) {
                        var r = this.doc.sel, n = this.doc;
                        r.somethingSelected() ? n.replaceSelection("", null, "+delete") : Ua(this, function (r) {
                            var i = Xl(n, r.head, e, t, !1);
                            return e < 0 ? {from: i, to: r.head} : {from: r.head, to: i}
                        })
                    }),
                    findPosV: function (e, t, r, n) {
                        var i = this, o = 1, a = n;
                        t < 0 && (o = -1, t = -t);
                        for (var l = dt(this.doc, e), s = 0; s < t; ++s) {
                            var c = yn(i, l, "div");
                            if (null == a ? a = c.left : c.left = a, l = Yl(i, c, o, r), l.hitSide) break
                        }
                        return l
                    },
                    moveV: Wi(function (e, t) {
                        var r = this, n = this.doc, i = [],
                            o = !this.display.shift && !n.extend && n.sel.somethingSelected();
                        if (n.extendSelectionsBy(function (a) {
                            if (o) return e < 0 ? a.from() : a.to();
                            var l = yn(r, a.head, "div");
                            null != a.goalColumn && (l.left = a.goalColumn), i.push(l.left);
                            var s = Yl(r, l, e, t);
                            return "page" == t && a == n.sel.primary() && oi(r, vn(r, s, "div").top - l.top), s
                        }, U), i.length) for (var a = 0; a < n.sel.ranges.length; a++) n.sel.ranges[a].goalColumn = i[a]
                    }),
                    findWordAt: function (e) {
                        var t = this.doc, r = Ye(t, e.line).text, n = e.ch, i = e.ch;
                        if (r) {
                            var o = this.getHelper(e, "wordChars");
                            "before" != e.sticky && i != r.length || !n ? ++i : --n;
                            var a = r.charAt(n), l = re(a, o) ? function (e) {
                                return re(e, o)
                            } : /\s/.test(a) ? function (e) {
                                return /\s/.test(e)
                            } : function (e) {
                                return !/\s/.test(e) && !re(e)
                            };
                            while (n > 0 && l(r.charAt(n - 1))) --n;
                            while (i < r.length && l(r.charAt(i))) ++i
                        }
                        return new io(it(e.line, n), it(e.line, i))
                    },
                    toggleOverwrite: function (e) {
                        null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? z(this.display.cursorDiv, "CodeMirror-overwrite") : L(this.display.cursorDiv, "CodeMirror-overwrite"), ve(this, "overwriteToggle", this, this.state.overwrite))
                    },
                    hasFocus: function () {
                        return this.display.input.getField() == W()
                    },
                    isReadOnly: function () {
                        return !(!this.options.readOnly && !this.doc.cantEdit)
                    },
                    scrollTo: Wi(function (e, t) {
                        li(this, e, t)
                    }),
                    getScrollInfo: function () {
                        var e = this.display.scroller;
                        return {
                            left: e.scrollLeft,
                            top: e.scrollTop,
                            height: e.scrollHeight - $r(this) - this.display.barHeight,
                            width: e.scrollWidth - $r(this) - this.display.barWidth,
                            clientHeight: _r(this),
                            clientWidth: qr(this)
                        }
                    },
                    scrollIntoView: Wi(function (e, t) {
                        null == e ? (e = {
                            from: this.doc.sel.primary().head,
                            to: null
                        }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                            from: it(e, 0),
                            to: null
                        } : null == e.from && (e = {
                            from: e,
                            to: null
                        }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? si(this, e) : ui(this, e.from, e.to, e.margin)
                    }),
                    setSize: Wi(function (e, t) {
                        var r = this, n = function (e) {
                            return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                        };
                        null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && un(this);
                        var i = this.display.viewFrom;
                        this.doc.iter(i, this.display.viewTo, function (e) {
                            if (e.widgets) for (var t = 0; t < e.widgets.length; t++) if (e.widgets[t].noHScroll) {
                                Hn(r, i, "widget");
                                break
                            }
                            ++i
                        }), this.curOp.forceUpdate = !0, ve(this, "refresh", this)
                    }),
                    operation: function (e) {
                        return Ai(this, e)
                    },
                    startOperation: function () {
                        return ki(this)
                    },
                    endOperation: function () {
                        return Ci(this)
                    },
                    refresh: Wi(function () {
                        var e = this.display.cachedTextHeight;
                        Fn(this), this.curOp.forceUpdate = !0, dn(this), li(this, this.doc.scrollLeft, this.doc.scrollTop), Gi(this.display), (null == e || Math.abs(e - On(this.display)) > .5) && zn(this), ve(this, "refresh", this)
                    }),
                    swapDoc: Wi(function (e) {
                        var t = this.doc;
                        return t.cm = null, this.state.selectingText && this.state.selectingText(), yo(this, e), dn(this), this.display.input.reset(), li(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Mr(this, "swapDoc", this, t), t
                    }),
                    phrase: function (e) {
                        var t = this.options.phrases;
                        return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
                    },
                    getInputField: function () {
                        return this.display.input.getField()
                    },
                    getWrapperElement: function () {
                        return this.display.wrapper
                    },
                    getScrollerElement: function () {
                        return this.display.scroller
                    },
                    getGutterElement: function () {
                        return this.display.gutters
                    }
                }, xe(e), e.registerHelper = function (t, n, i) {
                    r.hasOwnProperty(t) || (r[t] = e[t] = {_global: []}), r[t][n] = i
                }, e.registerGlobalHelper = function (t, n, i, o) {
                    e.registerHelper(t, n, o), r[t]._global.push({pred: i, val: o})
                }
            }

            function Xl(e, t, r, n, i) {
                var o = t, a = r, l = Ye(e, t.line);

                function s() {
                    var n = t.line + r;
                    return !(n < e.first || n >= e.first + e.size) && (t = new it(n, t.ch, t.sticky), l = Ye(e, n))
                }

                function c(n) {
                    var o;
                    if (o = i ? Xa(e.cm, l, t, r) : qa(l, t, r), null == o) {
                        if (n || !s()) return !1;
                        t = _a(i, e.cm, l, t.line, r)
                    } else t = o;
                    return !0
                }

                if ("char" == n) c(); else if ("column" == n) c(!0); else if ("word" == n || "group" == n) for (var u = null, d = "group" == n, f = e.cm && e.cm.getHelper(t, "wordChars"), h = !0; ; h = !1) {
                    if (r < 0 && !c(!h)) break;
                    var p = l.text.charAt(t.ch) || "\n",
                        m = re(p, f) ? "w" : d && "\n" == p ? "n" : !d || /\s/.test(p) ? null : "p";
                    if (!d || h || m || (m = "s"), u && u != m) {
                        r < 0 && (r = 1, c(), t.sticky = "after");
                        break
                    }
                    if (m && (u = m), r > 0 && !c(!h)) break
                }
                var g = qo(e, t, o, a, !0);
                return at(o, g) && (g.hitSide = !0), g
            }

            function Yl(e, t, r, n) {
                var i, o, a = e.doc, l = t.left;
                if ("page" == n) {
                    var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                        c = Math.max(s - .5 * On(e.display), 3);
                    i = (r > 0 ? t.bottom : t.top) + r * c
                } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
                for (; ;) {
                    if (o = xn(e, l, i), !o.outside) break;
                    if (r < 0 ? i <= 0 : i >= a.height) {
                        o.hitSide = !0;
                        break
                    }
                    i += 5 * r
                }
                return o
            }

            var Zl = function (e) {
                this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new R, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
            };

            function Jl(e, t) {
                var r = Qr(e, t.line);
                if (!r || r.hidden) return null;
                var n = Ye(e.doc, t.line), i = Yr(r, n, t.line), o = fe(n, e.doc.direction), a = "left";
                if (o) {
                    var l = ue(o, t.ch);
                    a = l % 2 ? "right" : "left"
                }
                var s = on(i.map, t.ch, a);
                return s.offset = "right" == s.collapse ? s.end : s.start, s
            }

            function Ql(e) {
                for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                return !1
            }

            function es(e, t) {
                return t && (e.bad = !0), e
            }

            function ts(e, t, r, n, i) {
                var o = "", a = !1, l = e.doc.lineSeparator(), s = !1;

                function c(e) {
                    return function (t) {
                        return t.id == e
                    }
                }

                function u() {
                    a && (o += l, s && (o += l), a = s = !1)
                }

                function d(e) {
                    e && (u(), o += e)
                }

                function f(t) {
                    if (1 == t.nodeType) {
                        var r = t.getAttribute("cm-text");
                        if (r) return void d(r);
                        var o, h = t.getAttribute("cm-marker");
                        if (h) {
                            var p = e.findMarks(it(n, 0), it(i + 1, 0), c(+h));
                            return void (p.length && (o = p[0].find(0)) && d(Ze(e.doc, o.from, o.to).join(l)))
                        }
                        if ("false" == t.getAttribute("contenteditable")) return;
                        var m = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                        if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                        m && u();
                        for (var g = 0; g < t.childNodes.length; g++) f(t.childNodes[g]);
                        /^(pre|p)$/i.test(t.nodeName) && (s = !0), m && (a = !0)
                    } else 3 == t.nodeType && d(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
                }

                for (; ;) {
                    if (f(t), t == r) break;
                    t = t.nextSibling, s = !1
                }
                return o
            }

            function rs(e, t, r) {
                var n;
                if (t == e.display.lineDiv) {
                    if (n = e.display.lineDiv.childNodes[r], !n) return es(e.clipPos(it(e.display.viewTo - 1)), !0);
                    t = null, r = 0
                } else for (n = t; ; n = n.parentNode) {
                    if (!n || n == e.display.lineDiv) return null;
                    if (n.parentNode && n.parentNode == e.display.lineDiv) break
                }
                for (var i = 0; i < e.display.view.length; i++) {
                    var o = e.display.view[i];
                    if (o.node == n) return ns(o, t, r)
                }
            }

            function ns(e, t, r) {
                var n = e.text.firstChild, i = !1;
                if (!t || !D(n, t)) return es(it(et(e.line), 0), !0);
                if (t == n && (i = !0, t = n.childNodes[r], r = 0, !t)) {
                    var o = e.rest ? X(e.rest) : e.line;
                    return es(it(et(o), o.text.length), i)
                }
                var a = 3 == t.nodeType ? t : null, l = t;
                a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild, r && (r = a.nodeValue.length));
                while (l.parentNode != n) l = l.parentNode;
                var s = e.measure, c = s.maps;

                function u(t, r, n) {
                    for (var i = -1; i < (c ? c.length : 0); i++) for (var o = i < 0 ? s.map : c[i], a = 0; a < o.length; a += 3) {
                        var l = o[a + 2];
                        if (l == t || l == r) {
                            var u = et(i < 0 ? e.line : e.rest[i]), d = o[a] + n;
                            return (n < 0 || l != t) && (d = o[a + (n ? 1 : 0)]), it(u, d)
                        }
                    }
                }

                var d = u(a, l, r);
                if (d) return es(d, i);
                for (var f = l.nextSibling, h = a ? a.nodeValue.length - r : 0; f; f = f.nextSibling) {
                    if (d = u(f, f.firstChild, 0), d) return es(it(d.line, d.ch - h), i);
                    h += f.textContent.length
                }
                for (var p = l.previousSibling, m = r; p; p = p.previousSibling) {
                    if (d = u(p, p.firstChild, -1), d) return es(it(d.line, d.ch + m), i);
                    m += p.textContent.length
                }
            }

            Zl.prototype.init = function (e) {
                var t = this, r = this, n = r.cm, i = r.div = e.lineDiv;

                function o(e) {
                    if (!ye(n, e)) {
                        if (n.somethingSelected()) jl({
                            lineWise: !1,
                            text: n.getSelections()
                        }), "cut" == e.type && n.replaceSelection("", null, "cut"); else {
                            if (!n.options.lineWiseCopyCut) return;
                            var t = Ul(n);
                            jl({lineWise: !0, text: t.text}), "cut" == e.type && n.operation(function () {
                                n.setSelections(t.ranges, 0, K), n.replaceSelection("", null, "cut")
                            })
                        }
                        if (e.clipboardData) {
                            e.clipboardData.clearData();
                            var o = Bl.text.join("\n");
                            if (e.clipboardData.setData("Text", o), e.clipboardData.getData("Text") == o) return void e.preventDefault()
                        }
                        var a = ql(), l = a.firstChild;
                        n.display.lineSpace.insertBefore(a, n.display.lineSpace.firstChild), l.value = Bl.text.join("\n");
                        var s = document.activeElement;
                        E(l), setTimeout(function () {
                            n.display.lineSpace.removeChild(a), s.focus(), s == i && r.showPrimarySelection()
                        }, 50)
                    }
                }

                $l(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize), pe(i, "paste", function (e) {
                    ye(n, e) || Kl(e, n) || l <= 11 && setTimeout(Di(n, function () {
                        return t.updateFromDOM()
                    }), 20)
                }), pe(i, "compositionstart", function (e) {
                    t.composing = {data: e.data, done: !1}
                }), pe(i, "compositionupdate", function (e) {
                    t.composing || (t.composing = {data: e.data, done: !1})
                }), pe(i, "compositionend", function (e) {
                    t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
                }), pe(i, "touchstart", function () {
                    return r.forceCompositionEnd()
                }), pe(i, "input", function () {
                    t.composing || t.readFromDOMSoon()
                }), pe(i, "copy", o), pe(i, "cut", o)
            }, Zl.prototype.prepareSelection = function () {
                var e = Kn(this.cm, !1);
                return e.focus = this.cm.state.focused, e
            }, Zl.prototype.showSelection = function (e, t) {
                e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
            }, Zl.prototype.getSelection = function () {
                return this.cm.display.wrapper.ownerDocument.getSelection()
            }, Zl.prototype.showPrimarySelection = function () {
                var e = this.getSelection(), t = this.cm, n = t.doc.sel.primary(), i = n.from(), o = n.to();
                if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges(); else {
                    var a = rs(t, e.anchorNode, e.anchorOffset), l = rs(t, e.focusNode, e.focusOffset);
                    if (!a || a.bad || !l || l.bad || 0 != ot(ct(a, l), i) || 0 != ot(st(a, l), o)) {
                        var s = t.display.view,
                            c = i.line >= t.display.viewFrom && Jl(t, i) || {node: s[0].measure.map[2], offset: 0},
                            u = o.line < t.display.viewTo && Jl(t, o);
                        if (!u) {
                            var d = s[s.length - 1].measure, f = d.maps ? d.maps[d.maps.length - 1] : d.map;
                            u = {node: f[f.length - 1], offset: f[f.length - 2] - f[f.length - 3]}
                        }
                        if (c && u) {
                            var h, p = e.rangeCount && e.getRangeAt(0);
                            try {
                                h = T(c.node, c.offset, u.offset, u.node)
                            } catch (m) {
                            }
                            h && (!r && t.state.focused ? (e.collapse(c.node, c.offset), h.collapsed || (e.removeAllRanges(), e.addRange(h))) : (e.removeAllRanges(), e.addRange(h)), p && null == e.anchorNode ? e.addRange(p) : r && this.startGracePeriod()), this.rememberSelection()
                        } else e.removeAllRanges()
                    }
                }
            }, Zl.prototype.startGracePeriod = function () {
                var e = this;
                clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
                    e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
                        return e.cm.curOp.selectionChanged = !0
                    })
                }, 20)
            }, Zl.prototype.showMultipleSelections = function (e) {
                O(this.cm.display.cursorDiv, e.cursors), O(this.cm.display.selectionDiv, e.selection)
            }, Zl.prototype.rememberSelection = function () {
                var e = this.getSelection();
                this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
            }, Zl.prototype.selectionInEditor = function () {
                var e = this.getSelection();
                if (!e.rangeCount) return !1;
                var t = e.getRangeAt(0).commonAncestorContainer;
                return D(this.div, t)
            }, Zl.prototype.focus = function () {
                "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
            }, Zl.prototype.blur = function () {
                this.div.blur()
            }, Zl.prototype.getField = function () {
                return this.div
            }, Zl.prototype.supportsTouch = function () {
                return !0
            }, Zl.prototype.receivedFocus = function () {
                var e = this;

                function t() {
                    e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t))
                }

                this.selectionInEditor() ? this.pollSelection() : Ai(this.cm, function () {
                    return e.cm.curOp.selectionChanged = !0
                }), this.polling.set(this.cm.options.pollInterval, t)
            }, Zl.prototype.selectionChanged = function () {
                var e = this.getSelection();
                return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
            }, Zl.prototype.pollSelection = function () {
                if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                    var e = this.getSelection(), t = this.cm;
                    if (g && u && this.cm.display.gutterSpecs.length && Ql(e.anchorNode)) return this.cm.triggerOnKeyDown({
                        type: "keydown",
                        keyCode: 8,
                        preventDefault: Math.abs
                    }), this.blur(), void this.focus();
                    if (!this.composing) {
                        this.rememberSelection();
                        var r = rs(t, e.anchorNode, e.anchorOffset), n = rs(t, e.focusNode, e.focusOffset);
                        r && n && Ai(t, function () {
                            jo(t.doc, ao(r, n), K), (r.bad || n.bad) && (t.curOp.selectionChanged = !0)
                        })
                    }
                }
            }, Zl.prototype.pollContent = function () {
                null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
                var e, t, r, n = this.cm, i = n.display, o = n.doc.sel.primary(), a = o.from(), l = o.to();
                if (0 == a.ch && a.line > n.firstLine() && (a = it(a.line - 1, Ye(n.doc, a.line - 1).length)), l.ch == Ye(n.doc, l.line).text.length && l.line < n.lastLine() && (l = it(l.line + 1, 0)), a.line < i.viewFrom || l.line > i.viewTo - 1) return !1;
                a.line == i.viewFrom || 0 == (e = En(n, a.line)) ? (t = et(i.view[0].line), r = i.view[0].node) : (t = et(i.view[e].line), r = i.view[e - 1].node.nextSibling);
                var s, c, u = En(n, l.line);
                if (u == i.view.length - 1 ? (s = i.viewTo - 1, c = i.lineDiv.lastChild) : (s = et(i.view[u + 1].line) - 1, c = i.view[u + 1].node.previousSibling), !r) return !1;
                var d = n.doc.splitLines(ts(n, r, c, t, s)), f = Ze(n.doc, it(t, 0), it(s, Ye(n.doc, s).text.length));
                while (d.length > 1 && f.length > 1) if (X(d) == X(f)) d.pop(), f.pop(), s--; else {
                    if (d[0] != f[0]) break;
                    d.shift(), f.shift(), t++
                }
                var h = 0, p = 0, m = d[0], g = f[0], v = Math.min(m.length, g.length);
                while (h < v && m.charCodeAt(h) == g.charCodeAt(h)) ++h;
                var y = X(d), b = X(f),
                    w = Math.min(y.length - (1 == d.length ? h : 0), b.length - (1 == f.length ? h : 0));
                while (p < w && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)) ++p;
                if (1 == d.length && 1 == f.length && t == a.line) while (h && h > a.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)) h--, p++;
                d[d.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), d[0] = d[0].slice(h).replace(/\u200b+$/, "");
                var x = it(t, h), k = it(s, f.length ? X(f).length - p : 0);
                return d.length > 1 || d[0] || ot(x, k) ? (na(n.doc, d, x, k, "+input"), !0) : void 0
            }, Zl.prototype.ensurePolled = function () {
                this.forceCompositionEnd()
            }, Zl.prototype.reset = function () {
                this.forceCompositionEnd()
            }, Zl.prototype.forceCompositionEnd = function () {
                this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
            }, Zl.prototype.readFromDOMSoon = function () {
                var e = this;
                null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
                    if (e.readDOMTimeout = null, e.composing) {
                        if (!e.composing.done) return;
                        e.composing = null
                    }
                    e.updateFromDOM()
                }, 80))
            }, Zl.prototype.updateFromDOM = function () {
                var e = this;
                !this.cm.isReadOnly() && this.pollContent() || Ai(this.cm, function () {
                    return Fn(e.cm)
                })
            }, Zl.prototype.setUneditable = function (e) {
                e.contentEditable = "false"
            }, Zl.prototype.onKeyPress = function (e) {
                0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Di(this.cm, Vl)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
            }, Zl.prototype.readOnlyChanged = function (e) {
                this.div.contentEditable = String("nocursor" != e)
            }, Zl.prototype.onContextMenu = function () {
            }, Zl.prototype.resetPosition = function () {
            }, Zl.prototype.needsContentAttribute = !0;
            var is = function (e) {
                this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new R, this.hasSelection = !1, this.composing = null
            };

            function os(e, t) {
                if (t = t ? H(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
                    var r = W();
                    t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body
                }

                function n() {
                    e.value = l.getValue()
                }

                var i;
                if (e.form && (pe(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
                    var o = e.form;
                    i = o.submit;
                    try {
                        var a = o.submit = function () {
                            n(), o.submit = i, o.submit(), o.submit = a
                        }
                    } catch (s) {
                    }
                }
                t.finishInit = function (t) {
                    t.save = n, t.getTextArea = function () {
                        return e
                    }, t.toTextArea = function () {
                        t.toTextArea = isNaN, n(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (ge(e.form, "submit", n), "function" == typeof e.form.submit && (e.form.submit = i))
                    }
                }, e.style.display = "none";
                var l = Fl(function (t) {
                    return e.parentNode.insertBefore(t, e.nextSibling)
                }, t);
                return l
            }

            function as(e) {
                e.off = ge, e.on = pe, e.wheelEventPixels = to, e.Doc = ka, e.splitLines = ze, e.countColumn = I, e.findColumn = $, e.isWordChar = te, e.Pass = V, e.signal = ve, e.Line = lr, e.changeEnd = lo, e.scrollbarModel = bi, e.Pos = it, e.cmpPos = ot, e.modes = Ie, e.mimeModes = Re, e.resolveMode = Ve, e.getMode = Ke, e.modeExtensions = Ge, e.extendMode = Ue, e.copyState = $e, e.startState = _e, e.innerMode = qe, e.commands = Ya, e.keyMap = Ha, e.keyName = Ka, e.isModifierKey = ja, e.lookupKey = Ba, e.normalizeKeyMap = Ra, e.StringStream = Xe, e.SharedTextMarker = ga, e.TextMarker = pa, e.LineWidget = ua, e.e_preventDefault = ke, e.e_stopPropagation = Ce, e.e_stop = Te, e.addClass = z, e.contains = D, e.rmClass = L, e.keyNames = za
            }

            is.prototype.init = function (e) {
                var t = this, r = this, n = this.cm;
                this.createField(e);
                var i = this.textarea;

                function o(e) {
                    if (!ye(n, e)) {
                        if (n.somethingSelected()) jl({lineWise: !1, text: n.getSelections()}); else {
                            if (!n.options.lineWiseCopyCut) return;
                            var t = Ul(n);
                            jl({
                                lineWise: !0,
                                text: t.text
                            }), "cut" == e.type ? n.setSelections(t.ranges, null, K) : (r.prevInput = "", i.value = t.text.join("\n"), E(i))
                        }
                        "cut" == e.type && (n.state.cutIncoming = +new Date)
                    }
                }

                e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), m && (i.style.width = "0px"), pe(i, "input", function () {
                    a && l >= 9 && t.hasSelection && (t.hasSelection = null), r.poll()
                }), pe(i, "paste", function (e) {
                    ye(n, e) || Kl(e, n) || (n.state.pasteIncoming = +new Date, r.fastPoll())
                }), pe(i, "cut", o), pe(i, "copy", o), pe(e.scroller, "paste", function (t) {
                    if (!Vr(e, t) && !ye(n, t)) {
                        if (!i.dispatchEvent) return n.state.pasteIncoming = +new Date, void r.focus();
                        var o = new Event("paste");
                        o.clipboardData = t.clipboardData, i.dispatchEvent(o)
                    }
                }), pe(e.lineSpace, "selectstart", function (t) {
                    Vr(e, t) || ke(t)
                }), pe(i, "compositionstart", function () {
                    var e = n.getCursor("from");
                    r.composing && r.composing.range.clear(), r.composing = {
                        start: e,
                        range: n.markText(e, n.getCursor("to"), {className: "CodeMirror-composing"})
                    }
                }), pe(i, "compositionend", function () {
                    r.composing && (r.poll(), r.composing.range.clear(), r.composing = null)
                })
            }, is.prototype.createField = function (e) {
                this.wrapper = ql(), this.textarea = this.wrapper.firstChild
            }, is.prototype.prepareSelection = function () {
                var e = this.cm, t = e.display, r = e.doc, n = Kn(e);
                if (e.options.moveInputWithCursor) {
                    var i = yn(e, r.sel.primary().head, "div"), o = t.wrapper.getBoundingClientRect(),
                        a = t.lineDiv.getBoundingClientRect();
                    n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left))
                }
                return n
            }, is.prototype.showSelection = function (e) {
                var t = this.cm, r = t.display;
                O(r.cursorDiv, e.cursors), O(r.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
            }, is.prototype.reset = function (e) {
                if (!this.contextMenuPending && !this.composing) {
                    var t = this.cm;
                    if (t.somethingSelected()) {
                        this.prevInput = "";
                        var r = t.getSelection();
                        this.textarea.value = r, t.state.focused && E(this.textarea), a && l >= 9 && (this.hasSelection = r)
                    } else e || (this.prevInput = this.textarea.value = "", a && l >= 9 && (this.hasSelection = null))
                }
            }, is.prototype.getField = function () {
                return this.textarea
            }, is.prototype.supportsTouch = function () {
                return !1
            }, is.prototype.focus = function () {
                if ("nocursor" != this.cm.options.readOnly && (!v || W() != this.textarea)) try {
                    this.textarea.focus()
                } catch (e) {
                }
            }, is.prototype.blur = function () {
                this.textarea.blur()
            }, is.prototype.resetPosition = function () {
                this.wrapper.style.top = this.wrapper.style.left = 0
            }, is.prototype.receivedFocus = function () {
                this.slowPoll()
            }, is.prototype.slowPoll = function () {
                var e = this;
                this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
                    e.poll(), e.cm.state.focused && e.slowPoll()
                })
            }, is.prototype.fastPoll = function () {
                var e = !1, t = this;

                function r() {
                    var n = t.poll();
                    n || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, r))
                }

                t.pollingFast = !0, t.polling.set(20, r)
            }, is.prototype.poll = function () {
                var e = this, t = this.cm, r = this.textarea, n = this.prevInput;
                if (this.contextMenuPending || !t.state.focused || Pe(r) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                var i = r.value;
                if (i == n && !t.somethingSelected()) return !1;
                if (a && l >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
                if (t.doc.sel == t.display.selForContextMenu) {
                    var o = i.charCodeAt(0);
                    if (8203 != o || n || (n = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
                }
                var s = 0, c = Math.min(n.length, i.length);
                while (s < c && n.charCodeAt(s) == i.charCodeAt(s)) ++s;
                return Ai(t, function () {
                    Vl(t, i.slice(s), n.length - s, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? r.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {className: "CodeMirror-composing"}))
                }), !0
            }, is.prototype.ensurePolled = function () {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
            }, is.prototype.onKeyPress = function () {
                a && l >= 9 && (this.hasSelection = null), this.fastPoll()
            }, is.prototype.onContextMenu = function (e) {
                var t = this, r = t.cm, n = r.display, i = t.textarea;
                t.contextMenuPending && t.contextMenuPending();
                var o = Pn(r, e), c = n.scroller.scrollTop;
                if (o && !d) {
                    var u = r.options.resetSelectionOnContextMenu;
                    u && -1 == r.doc.sel.contains(o) && Di(r, jo)(r.doc, ao(o), K);
                    var f, h = i.style.cssText, p = t.wrapper.style.cssText,
                        m = t.wrapper.offsetParent.getBoundingClientRect();
                    if (t.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - m.top - 5) + "px; left: " + (e.clientX - m.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", s && (f = window.scrollY), n.input.focus(), s && window.scrollTo(null, f), n.input.reset(), r.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = y, n.selForContextMenu = r.doc.sel, clearTimeout(n.detectingSelectAll), a && l >= 9 && v(), C) {
                        Te(e);
                        var g = function () {
                            ge(window, "mouseup", g), setTimeout(y, 20)
                        };
                        pe(window, "mouseup", g)
                    } else setTimeout(y, 50)
                }

                function v() {
                    if (null != i.selectionStart) {
                        var e = r.somethingSelected(), o = "​" + (e ? i.value : "");
                        i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, n.selForContextMenu = r.doc.sel
                    }
                }

                function y() {
                    if (t.contextMenuPending == y && (t.contextMenuPending = !1, t.wrapper.style.cssText = p, i.style.cssText = h, a && l < 9 && n.scrollbars.setScrollTop(n.scroller.scrollTop = c), null != i.selectionStart)) {
                        (!a || a && l < 9) && v();
                        var e = 0, o = function () {
                            n.selForContextMenu == r.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? Di(r, Xo)(r) : e++ < 10 ? n.detectingSelectAll = setTimeout(o, 500) : (n.selForContextMenu = null, n.input.reset())
                        };
                        n.detectingSelectAll = setTimeout(o, 200)
                    }
                }
            }, is.prototype.readOnlyChanged = function (e) {
                e || this.reset(), this.textarea.disabled = "nocursor" == e
            }, is.prototype.setUneditable = function () {
            }, is.prototype.needsContentAttribute = !1, zl(Fl), _l(Fl);
            var ls = "iter insert remove copy getEditor constructor".split(" ");
            for (var ss in ka.prototype) ka.prototype.hasOwnProperty(ss) && B(ls, ss) < 0 && (Fl.prototype[ss] = function (e) {
                return function () {
                    return e.apply(this.doc, arguments)
                }
            }(ka.prototype[ss]));
            return xe(ka), Fl.inputStyles = {textarea: is, contenteditable: Zl}, Fl.defineMode = function (e) {
                Fl.defaults.mode || "null" == e || (Fl.defaults.mode = e), Be.apply(this, arguments)
            }, Fl.defineMIME = je, Fl.defineMode("null", function () {
                return {
                    token: function (e) {
                        return e.skipToEnd()
                    }
                }
            }), Fl.defineMIME("text/plain", "null"), Fl.defineExtension = function (e, t) {
                Fl.prototype[e] = t
            }, Fl.defineDocExtension = function (e, t) {
                ka.prototype[e] = t
            }, Fl.fromTextArea = os, as(Fl), Fl.version = "5.47.0", Fl
        })
    }, "7b00": function (e, t, r) {
        (function (e) {
            e(r("56b3"))
        })(function (e) {
            "use strict";

            function t(e) {
                for (var t = {}, r = 0; r < e.length; ++r) t[e[r].toLowerCase()] = !0;
                return t
            }

            e.defineMode("css", function (t, r) {
                var n = r.inline;
                r.propertyKeywords || (r = e.resolveMode("text/css"));
                var i, o, a = t.indentUnit, l = r.tokenHooks, s = r.documentTypes || {}, c = r.mediaTypes || {},
                    u = r.mediaFeatures || {}, d = r.mediaValueKeywords || {}, f = r.propertyKeywords || {},
                    h = r.nonStandardPropertyKeywords || {}, p = r.fontProperties || {}, m = r.counterDescriptors || {},
                    g = r.colorKeywords || {}, v = r.valueKeywords || {}, y = r.allowNested, b = r.lineComment,
                    w = !0 === r.supportsAtComponent;

                function x(e, t) {
                    return i = t, e
                }

                function k(e, t) {
                    var r = e.next();
                    if (l[r]) {
                        var n = l[r](e, t);
                        if (!1 !== n) return n
                    }
                    return "@" == r ? (e.eatWhile(/[\w\\\-]/), x("def", e.current())) : "=" == r || ("~" == r || "|" == r) && e.eat("=") ? x(null, "compare") : '"' == r || "'" == r ? (t.tokenize = C(r), t.tokenize(e, t)) : "#" == r ? (e.eatWhile(/[\w\\\-]/), x("atom", "hash")) : "!" == r ? (e.match(/^\s*\w*/), x("keyword", "important")) : /\d/.test(r) || "." == r && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), x("number", "unit")) : "-" !== r ? /[,+>*\/]/.test(r) ? x(null, "select-op") : "." == r && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? x("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(r) ? x(null, r) : e.match(/[\w-.]+(?=\()/) ? (/^(url(-prefix)?|domain|regexp)$/.test(e.current().toLowerCase()) && (t.tokenize = S), x("variable callee", "variable")) : /[\w\\\-]/.test(r) ? (e.eatWhile(/[\w\\\-]/), x("property", "word")) : x(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), x("number", "unit")) : e.match(/^-[\w\\\-]*/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? x("variable-2", "variable-definition") : x("variable-2", "variable")) : e.match(/^\w+-/) ? x("meta", "meta") : void 0
                }

                function C(e) {
                    return function (t, r) {
                        var n, i = !1;
                        while (null != (n = t.next())) {
                            if (n == e && !i) {
                                ")" == e && t.backUp(1);
                                break
                            }
                            i = !i && "\\" == n
                        }
                        return (n == e || !i && ")" != e) && (r.tokenize = null), x("string", "string")
                    }
                }

                function S(e, t) {
                    return e.next(), e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = C(")"), x(null, "(")
                }

                function T(e, t, r) {
                    this.type = e, this.indent = t, this.prev = r
                }

                function L(e, t, r, n) {
                    return e.context = new T(r, t.indentation() + (!1 === n ? 0 : a), e.context), r
                }

                function M(e) {
                    return e.context.prev && (e.context = e.context.prev), e.context.type
                }

                function O(e, t, r) {
                    return D[r.context.type](e, t, r)
                }

                function N(e, t, r, n) {
                    for (var i = n || 1; i > 0; i--) r.context = r.context.prev;
                    return O(e, t, r)
                }

                function A(e) {
                    var t = e.current().toLowerCase();
                    o = v.hasOwnProperty(t) ? "atom" : g.hasOwnProperty(t) ? "keyword" : "variable"
                }

                var D = {
                    top: function (e, t, r) {
                        if ("{" == e) return L(r, t, "block");
                        if ("}" == e && r.context.prev) return M(r);
                        if (w && /@component/i.test(e)) return L(r, t, "atComponentBlock");
                        if (/^@(-moz-)?document$/i.test(e)) return L(r, t, "documentTypes");
                        if (/^@(media|supports|(-moz-)?document|import)$/i.test(e)) return L(r, t, "atBlock");
                        if (/^@(font-face|counter-style)/i.test(e)) return r.stateArg = e, "restricted_atBlock_before";
                        if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) return "keyframes";
                        if (e && "@" == e.charAt(0)) return L(r, t, "at");
                        if ("hash" == e) o = "builtin"; else if ("word" == e) o = "tag"; else {
                            if ("variable-definition" == e) return "maybeprop";
                            if ("interpolation" == e) return L(r, t, "interpolation");
                            if (":" == e) return "pseudo";
                            if (y && "(" == e) return L(r, t, "parens")
                        }
                        return r.context.type
                    }, block: function (e, t, r) {
                        if ("word" == e) {
                            var n = t.current().toLowerCase();
                            return f.hasOwnProperty(n) ? (o = "property", "maybeprop") : h.hasOwnProperty(n) ? (o = "string-2", "maybeprop") : y ? (o = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (o += " error", "maybeprop")
                        }
                        return "meta" == e ? "block" : y || "hash" != e && "qualifier" != e ? D.top(e, t, r) : (o = "error", "block")
                    }, maybeprop: function (e, t, r) {
                        return ":" == e ? L(r, t, "prop") : O(e, t, r)
                    }, prop: function (e, t, r) {
                        if (";" == e) return M(r);
                        if ("{" == e && y) return L(r, t, "propBlock");
                        if ("}" == e || "{" == e) return N(e, t, r);
                        if ("(" == e) return L(r, t, "parens");
                        if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
                            if ("word" == e) A(t); else if ("interpolation" == e) return L(r, t, "interpolation")
                        } else o += " error";
                        return "prop"
                    }, propBlock: function (e, t, r) {
                        return "}" == e ? M(r) : "word" == e ? (o = "property", "maybeprop") : r.context.type
                    }, parens: function (e, t, r) {
                        return "{" == e || "}" == e ? N(e, t, r) : ")" == e ? M(r) : "(" == e ? L(r, t, "parens") : "interpolation" == e ? L(r, t, "interpolation") : ("word" == e && A(t), "parens")
                    }, pseudo: function (e, t, r) {
                        return "meta" == e ? "pseudo" : "word" == e ? (o = "variable-3", r.context.type) : O(e, t, r)
                    }, documentTypes: function (e, t, r) {
                        return "word" == e && s.hasOwnProperty(t.current()) ? (o = "tag", r.context.type) : D.atBlock(e, t, r)
                    }, atBlock: function (e, t, r) {
                        if ("(" == e) return L(r, t, "atBlock_parens");
                        if ("}" == e || ";" == e) return N(e, t, r);
                        if ("{" == e) return M(r) && L(r, t, y ? "block" : "top");
                        if ("interpolation" == e) return L(r, t, "interpolation");
                        if ("word" == e) {
                            var n = t.current().toLowerCase();
                            o = "only" == n || "not" == n || "and" == n || "or" == n ? "keyword" : c.hasOwnProperty(n) ? "attribute" : u.hasOwnProperty(n) ? "property" : d.hasOwnProperty(n) ? "keyword" : f.hasOwnProperty(n) ? "property" : h.hasOwnProperty(n) ? "string-2" : v.hasOwnProperty(n) ? "atom" : g.hasOwnProperty(n) ? "keyword" : "error"
                        }
                        return r.context.type
                    }, atComponentBlock: function (e, t, r) {
                        return "}" == e ? N(e, t, r) : "{" == e ? M(r) && L(r, t, y ? "block" : "top", !1) : ("word" == e && (o = "error"), r.context.type)
                    }, atBlock_parens: function (e, t, r) {
                        return ")" == e ? M(r) : "{" == e || "}" == e ? N(e, t, r, 2) : D.atBlock(e, t, r)
                    }, restricted_atBlock_before: function (e, t, r) {
                        return "{" == e ? L(r, t, "restricted_atBlock") : "word" == e && "@counter-style" == r.stateArg ? (o = "variable", "restricted_atBlock_before") : O(e, t, r)
                    }, restricted_atBlock: function (e, t, r) {
                        return "}" == e ? (r.stateArg = null, M(r)) : "word" == e ? (o = "@font-face" == r.stateArg && !p.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == r.stateArg && !m.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock"
                    }, keyframes: function (e, t, r) {
                        return "word" == e ? (o = "variable", "keyframes") : "{" == e ? L(r, t, "top") : O(e, t, r)
                    }, at: function (e, t, r) {
                        return ";" == e ? M(r) : "{" == e || "}" == e ? N(e, t, r) : ("word" == e ? o = "tag" : "hash" == e && (o = "builtin"), "at")
                    }, interpolation: function (e, t, r) {
                        return "}" == e ? M(r) : "{" == e || ";" == e ? N(e, t, r) : ("word" == e ? o = "variable" : "variable" != e && "(" != e && ")" != e && (o = "error"), "interpolation")
                    }
                };
                return {
                    startState: function (e) {
                        return {
                            tokenize: null,
                            state: n ? "block" : "top",
                            stateArg: null,
                            context: new T(n ? "block" : "top", e || 0, null)
                        }
                    },
                    token: function (e, t) {
                        if (!t.tokenize && e.eatSpace()) return null;
                        var r = (t.tokenize || k)(e, t);
                        return r && "object" == typeof r && (i = r[1], r = r[0]), o = r, "comment" != i && (t.state = D[t.state](i, e, t)), o
                    },
                    indent: function (e, t) {
                        var r = e.context, n = t && t.charAt(0), i = r.indent;
                        return "prop" != r.type || "}" != n && ")" != n || (r = r.prev), r.prev && ("}" != n || "block" != r.type && "top" != r.type && "interpolation" != r.type && "restricted_atBlock" != r.type ? (")" != n || "parens" != r.type && "atBlock_parens" != r.type) && ("{" != n || "at" != r.type && "atBlock" != r.type) || (i = Math.max(0, r.indent - a)) : (r = r.prev, i = r.indent)), i
                    },
                    electricChars: "}",
                    blockCommentStart: "/*",
                    blockCommentEnd: "*/",
                    blockCommentContinue: " * ",
                    lineComment: b,
                    fold: "brace"
                }
            });
            var r = ["domain", "regexp", "url", "url-prefix"], n = t(r),
                i = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
                o = t(i),
                a = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover"],
                l = t(a),
                s = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive"],
                c = t(s),
                u = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "mix-blend-mode", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
                d = t(u),
                f = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
                h = t(f),
                p = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"],
                m = t(p),
                g = ["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"],
                v = t(g),
                y = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
                b = t(y),
                w = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unset", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"],
                x = t(w), k = r.concat(i).concat(a).concat(s).concat(u).concat(f).concat(y).concat(w);

            function C(e, t) {
                var r, n = !1;
                while (null != (r = e.next())) {
                    if (n && "/" == r) {
                        t.tokenize = null;
                        break
                    }
                    n = "*" == r
                }
                return ["comment", "comment"]
            }

            e.registerHelper("hintWords", "css", k), e.defineMIME("text/css", {
                documentTypes: n,
                mediaTypes: o,
                mediaFeatures: l,
                mediaValueKeywords: c,
                propertyKeywords: d,
                nonStandardPropertyKeywords: h,
                fontProperties: m,
                counterDescriptors: v,
                colorKeywords: b,
                valueKeywords: x,
                tokenHooks: {
                    "/": function (e, t) {
                        return !!e.eat("*") && (t.tokenize = C, C(e, t))
                    }
                },
                name: "css"
            }), e.defineMIME("text/x-scss", {
                mediaTypes: o,
                mediaFeatures: l,
                mediaValueKeywords: c,
                propertyKeywords: d,
                nonStandardPropertyKeywords: h,
                colorKeywords: b,
                valueKeywords: x,
                fontProperties: m,
                allowNested: !0,
                lineComment: "//",
                tokenHooks: {
                    "/": function (e, t) {
                        return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = C, C(e, t)) : ["operator", "operator"]
                    }, ":": function (e) {
                        return !!e.match(/\s*\{/, !1) && [null, null]
                    }, $: function (e) {
                        return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
                    }, "#": function (e) {
                        return !!e.eat("{") && [null, "interpolation"]
                    }
                },
                name: "css",
                helperType: "scss"
            }), e.defineMIME("text/x-less", {
                mediaTypes: o,
                mediaFeatures: l,
                mediaValueKeywords: c,
                propertyKeywords: d,
                nonStandardPropertyKeywords: h,
                colorKeywords: b,
                valueKeywords: x,
                fontProperties: m,
                allowNested: !0,
                lineComment: "//",
                tokenHooks: {
                    "/": function (e, t) {
                        return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = C, C(e, t)) : ["operator", "operator"]
                    }, "@": function (e) {
                        return e.eat("{") ? [null, "interpolation"] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, !1) && (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
                    }, "&": function () {
                        return ["atom", "atom"]
                    }
                },
                name: "css",
                helperType: "less"
            }), e.defineMIME("text/x-gss", {
                documentTypes: n,
                mediaTypes: o,
                mediaFeatures: l,
                propertyKeywords: d,
                nonStandardPropertyKeywords: h,
                fontProperties: m,
                counterDescriptors: v,
                colorKeywords: b,
                valueKeywords: x,
                supportsAtComponent: !0,
                tokenHooks: {
                    "/": function (e, t) {
                        return !!e.eat("*") && (t.tokenize = C, C(e, t))
                    }
                },
                name: "css",
                helperType: "gss"
            })
        })
    }, "7b34": function (e, t, r) {
        "use strict";
        r.r(t);
        var n = function () {
            var e = this, t = e.$createElement;
            e._self._c;
            return e._m(0)
        }, i = [function () {
            var e = this, t = e.$createElement, r = e._self._c || t;
            return r("div", {staticClass: "vue-codemirror-wrap"}, [r("textarea")])
        }], o = r("7618"), a = r("56b3");
        r("a7be");
        var l = {
            props: {
                value: {type: String, default: ""}, options: {
                    type: Object, default: function () {
                        return {mode: "text/javascript", lineNumbers: !0, lineWrapping: !0}
                    }
                }
            }, data: function () {
                return {skipNextChangeEvent: !1}
            }, ready: function () {
                var e = this;
                this.editor = a.fromTextArea(this.$el.querySelector("textarea"), this.options), this.editor.setValue(this.value), this.editor.on("change", function (t) {
                    e.skipNextChangeEvent ? e.skipNextChangeEvent = !1 : (e.value = t.getValue(), e.$emit && e.$emit("change", t.getValue()))
                })
            }, mounted: function () {
                var e = this;
                this.editor = a.fromTextArea(this.$el.querySelector("textarea"), this.options), this.editor.setValue(this.value), this.editor.on("change", function (t) {
                    e.skipNextChangeEvent ? e.skipNextChangeEvent = !1 : e.$emit && (e.$emit("change", t.getValue()), e.$emit("input", t.getValue()))
                })
            }, watch: {
                value: function (e, t) {
                    var r = this.editor.getValue();
                    if (e !== r) {
                        this.skipNextChangeEvent = !0;
                        var n = this.editor.getScrollInfo();
                        this.editor.setValue(e), this.editor.scrollTo(n.left, n.top)
                    }
                }, options: function (e, t) {
                    if ("object" === Object(o["a"])(e)) for (var r in e) e.hasOwnProperty(r) && this.editor.setOption(r, e[r])
                }
            }, beforeDestroy: function () {
                this.editor && this.editor.toTextArea()
            }
        }, s = l, c = (r("f917"), r("2877")), u = Object(c["a"])(s, n, i, !1, null, null, null);
        t["default"] = u.exports
    }, a7be: function (e, t, r) {
    }, b4c0d: function (e, t, r) {
        "use strict";
        var n = r("de09"), i = r.n(n);
        i.a
    }, c884: function (e, t, r) {
        var n = r("56b3"), i = r("7b34");
        i = i.default || i, e.exports = {
            CodeMirror: n, codemirror: i, install: function (e) {
                e.component("codemirror", i)
            }
        }
    }, d5e0: function (e, t, r) {
        (function (e) {
            e(r("56b3"))
        })(function (e) {
            "use strict";
            var t = {
                autoSelfClosers: {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    command: !0,
                    embed: !0,
                    frame: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0,
                    menuitem: !0
                },
                implicitlyClosed: {
                    dd: !0,
                    li: !0,
                    optgroup: !0,
                    option: !0,
                    p: !0,
                    rp: !0,
                    rt: !0,
                    tbody: !0,
                    td: !0,
                    tfoot: !0,
                    th: !0,
                    tr: !0
                },
                contextGrabbers: {
                    dd: {dd: !0, dt: !0},
                    dt: {dd: !0, dt: !0},
                    li: {li: !0},
                    option: {option: !0, optgroup: !0},
                    optgroup: {optgroup: !0},
                    p: {
                        address: !0,
                        article: !0,
                        aside: !0,
                        blockquote: !0,
                        dir: !0,
                        div: !0,
                        dl: !0,
                        fieldset: !0,
                        footer: !0,
                        form: !0,
                        h1: !0,
                        h2: !0,
                        h3: !0,
                        h4: !0,
                        h5: !0,
                        h6: !0,
                        header: !0,
                        hgroup: !0,
                        hr: !0,
                        menu: !0,
                        nav: !0,
                        ol: !0,
                        p: !0,
                        pre: !0,
                        section: !0,
                        table: !0,
                        ul: !0
                    },
                    rp: {rp: !0, rt: !0},
                    rt: {rp: !0, rt: !0},
                    tbody: {tbody: !0, tfoot: !0},
                    td: {td: !0, th: !0},
                    tfoot: {tbody: !0},
                    th: {td: !0, th: !0},
                    thead: {tbody: !0, tfoot: !0},
                    tr: {tr: !0}
                },
                doNotIndent: {pre: !0},
                allowUnquoted: !0,
                allowMissing: !0,
                caseFold: !0
            }, r = {
                autoSelfClosers: {},
                implicitlyClosed: {},
                contextGrabbers: {},
                doNotIndent: {},
                allowUnquoted: !1,
                allowMissing: !1,
                allowMissingTagName: !1,
                caseFold: !1
            };
            e.defineMode("xml", function (n, i) {
                var o, a, l = n.indentUnit, s = {}, c = i.htmlMode ? t : r;
                for (var u in c) s[u] = c[u];
                for (var u in i) s[u] = i[u];

                function d(e, t) {
                    function r(r) {
                        return t.tokenize = r, r(e, t)
                    }

                    var n, i = e.next();
                    return "<" == i ? e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? r(p("atom", "]]>")) : null : e.match("--") ? r(p("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), r(m(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = p("meta", "?>"), "meta") : (o = e.eat("/") ? "closeTag" : "openTag", t.tokenize = f, "tag bracket") : "&" == i ? (n = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"), n ? "atom" : "error") : (e.eatWhile(/[^&<]/), null)
                }

                function f(e, t) {
                    var r = e.next();
                    if (">" == r || "/" == r && e.eat(">")) return t.tokenize = d, o = ">" == r ? "endTag" : "selfcloseTag", "tag bracket";
                    if ("=" == r) return o = "equals", null;
                    if ("<" == r) {
                        t.tokenize = d, t.state = b, t.tagName = t.tagStart = null;
                        var n = t.tokenize(e, t);
                        return n ? n + " tag error" : "tag error"
                    }
                    return /[\'\"]/.test(r) ? (t.tokenize = h(r), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
                }

                function h(e) {
                    var t = function (t, r) {
                        while (!t.eol()) if (t.next() == e) {
                            r.tokenize = f;
                            break
                        }
                        return "string"
                    };
                    return t.isInAttribute = !0, t
                }

                function p(e, t) {
                    return function (r, n) {
                        while (!r.eol()) {
                            if (r.match(t)) {
                                n.tokenize = d;
                                break
                            }
                            r.next()
                        }
                        return e
                    }
                }

                function m(e) {
                    return function (t, r) {
                        var n;
                        while (null != (n = t.next())) {
                            if ("<" == n) return r.tokenize = m(e + 1), r.tokenize(t, r);
                            if (">" == n) {
                                if (1 == e) {
                                    r.tokenize = d;
                                    break
                                }
                                return r.tokenize = m(e - 1), r.tokenize(t, r)
                            }
                        }
                        return "meta"
                    }
                }

                function g(e, t, r) {
                    this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = r, (s.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
                }

                function v(e) {
                    e.context && (e.context = e.context.prev)
                }

                function y(e, t) {
                    var r;
                    while (1) {
                        if (!e.context) return;
                        if (r = e.context.tagName, !s.contextGrabbers.hasOwnProperty(r) || !s.contextGrabbers[r].hasOwnProperty(t)) return;
                        v(e)
                    }
                }

                function b(e, t, r) {
                    return "openTag" == e ? (r.tagStart = t.column(), w) : "closeTag" == e ? x : b
                }

                function w(e, t, r) {
                    return "word" == e ? (r.tagName = t.current(), a = "tag", S) : s.allowMissingTagName && "endTag" == e ? (a = "tag bracket", S(e, t, r)) : (a = "error", w)
                }

                function x(e, t, r) {
                    if ("word" == e) {
                        var n = t.current();
                        return r.context && r.context.tagName != n && s.implicitlyClosed.hasOwnProperty(r.context.tagName) && v(r), r.context && r.context.tagName == n || !1 === s.matchClosing ? (a = "tag", k) : (a = "tag error", C)
                    }
                    return s.allowMissingTagName && "endTag" == e ? (a = "tag bracket", k(e, t, r)) : (a = "error", C)
                }

                function k(e, t, r) {
                    return "endTag" != e ? (a = "error", k) : (v(r), b)
                }

                function C(e, t, r) {
                    return a = "error", k(e, t, r)
                }

                function S(e, t, r) {
                    if ("word" == e) return a = "attribute", T;
                    if ("endTag" == e || "selfcloseTag" == e) {
                        var n = r.tagName, i = r.tagStart;
                        return r.tagName = r.tagStart = null, "selfcloseTag" == e || s.autoSelfClosers.hasOwnProperty(n) ? y(r, n) : (y(r, n), r.context = new g(r, n, i == r.indented)), b
                    }
                    return a = "error", S
                }

                function T(e, t, r) {
                    return "equals" == e ? L : (s.allowMissing || (a = "error"), S(e, t, r))
                }

                function L(e, t, r) {
                    return "string" == e ? M : "word" == e && s.allowUnquoted ? (a = "string", S) : (a = "error", S(e, t, r))
                }

                function M(e, t, r) {
                    return "string" == e ? M : S(e, t, r)
                }

                return d.isInText = !0, {
                    startState: function (e) {
                        var t = {tokenize: d, state: b, indented: e || 0, tagName: null, tagStart: null, context: null};
                        return null != e && (t.baseIndent = e), t
                    },
                    token: function (e, t) {
                        if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
                        o = null;
                        var r = t.tokenize(e, t);
                        return (r || o) && "comment" != r && (a = null, t.state = t.state(o || r, e, t), a && (r = "error" == a ? r + " error" : a)), r
                    },
                    indent: function (t, r, n) {
                        var i = t.context;
                        if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + l;
                        if (i && i.noIndent) return e.Pass;
                        if (t.tokenize != f && t.tokenize != d) return n ? n.match(/^(\s*)/)[0].length : 0;
                        if (t.tagName) return !1 !== s.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + l * (s.multilineTagIndentFactor || 1);
                        if (s.alignCDATA && /<!\[CDATA\[/.test(r)) return 0;
                        var o = r && /^<(\/)?([\w_:\.-]*)/.exec(r);
                        if (o && o[1]) while (i) {
                            if (i.tagName == o[2]) {
                                i = i.prev;
                                break
                            }
                            if (!s.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                            i = i.prev
                        } else if (o) while (i) {
                            var a = s.contextGrabbers[i.tagName];
                            if (!a || !a.hasOwnProperty(o[2])) break;
                            i = i.prev
                        }
                        while (i && i.prev && !i.startOfLine) i = i.prev;
                        return i ? i.indent + l : t.baseIndent || 0
                    },
                    electricInput: /<\/[\s\w:]+>$/,
                    blockCommentStart: "\x3c!--",
                    blockCommentEnd: "--\x3e",
                    configuration: s.htmlMode ? "html" : "xml",
                    helperType: s.htmlMode ? "html" : "xml",
                    skipAttribute: function (e) {
                        e.state == L && (e.state = S)
                    }
                }
            }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
                name: "xml",
                htmlMode: !0
            })
        })
    }, d69f: function (e, t, r) {
        (function (e) {
            e(r("56b3"), r("d5e0"), r("f9d4"), r("7b00"))
        })(function (e) {
            "use strict";
            var t = {
                script: [["lang", /(javascript|babel)/i, "javascript"], ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"], ["type", /./, "text/plain"], [null, null, "javascript"]],
                style: [["lang", /^css$/i, "css"], ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"], ["type", /./, "text/plain"], [null, null, "css"]]
            };

            function r(e, t, r) {
                var n = e.current(), i = n.search(t);
                return i > -1 ? e.backUp(n.length - i) : n.match(/<\/?$/) && (e.backUp(n.length), e.match(t, !1) || e.match(n)), r
            }

            var n = {};

            function i(e) {
                var t = n[e];
                return t || (n[e] = new RegExp("\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))
            }

            function o(e, t) {
                var r = e.match(i(t));
                return r ? /^\s*(.*?)\s*$/.exec(r[2])[1] : ""
            }

            function a(e, t) {
                return new RegExp((t ? "^" : "") + "</s*" + e + "s*>", "i")
            }

            function l(e, t) {
                for (var r in e) for (var n = t[r] || (t[r] = []), i = e[r], o = i.length - 1; o >= 0; o--) n.unshift(i[o])
            }

            function s(e, t) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    if (!n[0] || n[1].test(o(t, n[0]))) return n[2]
                }
            }

            e.defineMode("htmlmixed", function (n, i) {
                var o = e.getMode(n, {
                    name: "xml",
                    htmlMode: !0,
                    multilineTagIndentFactor: i.multilineTagIndentFactor,
                    multilineTagIndentPastTag: i.multilineTagIndentPastTag
                }), c = {}, u = i && i.tags, d = i && i.scriptTypes;
                if (l(t, c), u && l(u, c), d) for (var f = d.length - 1; f >= 0; f--) c.script.unshift(["type", d[f].matches, d[f].mode]);

                function h(t, i) {
                    var l, u = o.token(t, i.htmlState), d = /\btag\b/.test(u);
                    if (d && !/[<>\s\/]/.test(t.current()) && (l = i.htmlState.tagName && i.htmlState.tagName.toLowerCase()) && c.hasOwnProperty(l)) i.inTag = l + " "; else if (i.inTag && d && />$/.test(t.current())) {
                        var f = /^([\S]+) (.*)/.exec(i.inTag);
                        i.inTag = null;
                        var p = ">" == t.current() && s(c[f[1]], f[2]), m = e.getMode(n, p), g = a(f[1], !0),
                            v = a(f[1], !1);
                        i.token = function (e, t) {
                            return e.match(g, !1) ? (t.token = h, t.localState = t.localMode = null, null) : r(e, v, t.localMode.token(e, t.localState))
                        }, i.localMode = m, i.localState = e.startState(m, o.indent(i.htmlState, "", ""))
                    } else i.inTag && (i.inTag += t.current(), t.eol() && (i.inTag += " "));
                    return u
                }

                return {
                    startState: function () {
                        var t = e.startState(o);
                        return {token: h, inTag: null, localMode: null, localState: null, htmlState: t}
                    }, copyState: function (t) {
                        var r;
                        return t.localState && (r = e.copyState(t.localMode, t.localState)), {
                            token: t.token,
                            inTag: t.inTag,
                            localMode: t.localMode,
                            localState: r,
                            htmlState: e.copyState(o, t.htmlState)
                        }
                    }, token: function (e, t) {
                        return t.token(e, t)
                    }, indent: function (t, r, n) {
                        return !t.localMode || /^\s*<\//.test(r) ? o.indent(t.htmlState, r, n) : t.localMode.indent ? t.localMode.indent(t.localState, r, n) : e.Pass
                    }, innerMode: function (e) {
                        return {state: e.localState || e.htmlState, mode: e.localMode || o}
                    }
                }
            }, "xml", "javascript", "css"), e.defineMIME("text/html", "htmlmixed")
        })
    }, de09: function (e, t, r) {
    }, f917: function (e, t, r) {
        "use strict";
        var n = r("19ce"), i = r.n(n);
        i.a
    }, f9d4: function (e, t, r) {
        (function (e) {
            e(r("56b3"))
        })(function (e) {
            "use strict";
            e.defineMode("javascript", function (t, r) {
                var n, i, o = t.indentUnit, a = r.statementIndent, l = r.jsonld, s = r.json || l, c = r.typescript,
                    u = r.wordCharacters || /[\w$\xa1-\uffff]/, d = function () {
                        function e(e) {
                            return {type: e, style: "keyword"}
                        }

                        var t = e("keyword a"), r = e("keyword b"), n = e("keyword c"), i = e("keyword d"),
                            o = e("operator"), a = {type: "atom", style: "atom"};
                        return {
                            if: e("if"),
                            while: t,
                            with: t,
                            else: r,
                            do: r,
                            try: r,
                            finally: r,
                            return: i,
                            break: i,
                            continue: i,
                            new: e("new"),
                            delete: n,
                            void: n,
                            throw: n,
                            debugger: e("debugger"),
                            var: e("var"),
                            const: e("var"),
                            let: e("var"),
                            function: e("function"),
                            catch: e("catch"),
                            for: e("for"),
                            switch: e("switch"),
                            case: e("case"),
                            default: e("default"),
                            in: o,
                            typeof: o,
                            instanceof: o,
                            true: a,
                            false: a,
                            null: a,
                            undefined: a,
                            NaN: a,
                            Infinity: a,
                            this: e("this"),
                            class: e("class"),
                            super: e("atom"),
                            yield: n,
                            export: e("export"),
                            import: e("import"),
                            extends: n,
                            await: n
                        }
                    }(), f = /[+\-*&%=<>!?|~^@]/,
                    h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

                function p(e) {
                    var t, r = !1, n = !1;
                    while (null != (t = e.next())) {
                        if (!r) {
                            if ("/" == t && !n) return;
                            "[" == t ? n = !0 : n && "]" == t && (n = !1)
                        }
                        r = !r && "\\" == t
                    }
                }

                function m(e, t, r) {
                    return n = e, i = r, t
                }

                function g(e, t) {
                    var r = e.next();
                    if ('"' == r || "'" == r) return t.tokenize = v(r), t.tokenize(e, t);
                    if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) return m("number", "number");
                    if ("." == r && e.match("..")) return m("spread", "meta");
                    if (/[\[\]{}\(\),;\:\.]/.test(r)) return m(r);
                    if ("=" == r && e.eat(">")) return m("=>", "operator");
                    if ("0" == r && e.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i)) return m("number", "number");
                    if (/\d/.test(r)) return e.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/), m("number", "number");
                    if ("/" == r) return e.eat("*") ? (t.tokenize = y, y(e, t)) : e.eat("/") ? (e.skipToEnd(), m("comment", "comment")) : Qe(e, t, 1) ? (p(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), m("regexp", "string-2")) : (e.eat("="), m("operator", "operator", e.current()));
                    if ("`" == r) return t.tokenize = b, b(e, t);
                    if ("#" == r) return e.skipToEnd(), m("error", "error");
                    if (f.test(r)) return ">" == r && t.lexical && ">" == t.lexical.type || (e.eat("=") ? "!" != r && "=" != r || e.eat("=") : /[<>*+\-]/.test(r) && (e.eat(r), ">" == r && e.eat(r))), m("operator", "operator", e.current());
                    if (u.test(r)) {
                        e.eatWhile(u);
                        var n = e.current();
                        if ("." != t.lastType) {
                            if (d.propertyIsEnumerable(n)) {
                                var i = d[n];
                                return m(i.type, i.style, n)
                            }
                            if ("async" == n && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return m("async", "keyword", n)
                        }
                        return m("variable", "variable", n)
                    }
                }

                function v(e) {
                    return function (t, r) {
                        var n, i = !1;
                        if (l && "@" == t.peek() && t.match(h)) return r.tokenize = g, m("jsonld-keyword", "meta");
                        while (null != (n = t.next())) {
                            if (n == e && !i) break;
                            i = !i && "\\" == n
                        }
                        return i || (r.tokenize = g), m("string", "string")
                    }
                }

                function y(e, t) {
                    var r, n = !1;
                    while (r = e.next()) {
                        if ("/" == r && n) {
                            t.tokenize = g;
                            break
                        }
                        n = "*" == r
                    }
                    return m("comment", "comment")
                }

                function b(e, t) {
                    var r, n = !1;
                    while (null != (r = e.next())) {
                        if (!n && ("`" == r || "$" == r && e.eat("{"))) {
                            t.tokenize = g;
                            break
                        }
                        n = !n && "\\" == r
                    }
                    return m("quasi", "string-2", e.current())
                }

                var w = "([{}])";

                function x(e, t) {
                    t.fatArrowAt && (t.fatArrowAt = null);
                    var r = e.string.indexOf("=>", e.start);
                    if (!(r < 0)) {
                        if (c) {
                            var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, r));
                            n && (r = n.index)
                        }
                        for (var i = 0, o = !1, a = r - 1; a >= 0; --a) {
                            var l = e.string.charAt(a), s = w.indexOf(l);
                            if (s >= 0 && s < 3) {
                                if (!i) {
                                    ++a;
                                    break
                                }
                                if (0 == --i) {
                                    "(" == l && (o = !0);
                                    break
                                }
                            } else if (s >= 3 && s < 6) ++i; else if (u.test(l)) o = !0; else {
                                if (/["'\/]/.test(l)) return;
                                if (o && !i) {
                                    ++a;
                                    break
                                }
                            }
                        }
                        o && !i && (t.fatArrowAt = a)
                    }
                }

                var k = {atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, "jsonld-keyword": !0};

                function C(e, t, r, n, i, o) {
                    this.indented = e, this.column = t, this.type = r, this.prev = i, this.info = o, null != n && (this.align = n)
                }

                function S(e, t) {
                    for (var r = e.localVars; r; r = r.next) if (r.name == t) return !0;
                    for (var n = e.context; n; n = n.prev) for (r = n.vars; r; r = r.next) if (r.name == t) return !0
                }

                function T(e, t, r, n, i) {
                    var o = e.cc;
                    L.state = e, L.stream = i, L.marked = null, L.cc = o, L.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);
                    while (1) {
                        var a = o.length ? o.pop() : s ? G : V;
                        if (a(r, n)) {
                            while (o.length && o[o.length - 1].lex) o.pop()();
                            return L.marked ? L.marked : "variable" == r && S(e, n) ? "variable-2" : t
                        }
                    }
                }

                var L = {state: null, column: null, marked: null, cc: null};

                function M() {
                    for (var e = arguments.length - 1; e >= 0; e--) L.cc.push(arguments[e])
                }

                function O() {
                    return M.apply(null, arguments), !0
                }

                function N(e, t) {
                    for (var r = t; r; r = r.next) if (r.name == e) return !0;
                    return !1
                }

                function A(e) {
                    var t = L.state;
                    if (L.marked = "def", t.context) if ("var" == t.lexical.info && t.context && t.context.block) {
                        var n = D(e, t.context);
                        if (null != n) return void (t.context = n)
                    } else if (!N(e, t.localVars)) return void (t.localVars = new P(e, t.localVars));
                    r.globalVars && !N(e, t.globalVars) && (t.globalVars = new P(e, t.globalVars))
                }

                function D(e, t) {
                    if (t) {
                        if (t.block) {
                            var r = D(e, t.prev);
                            return r ? r == t.prev ? t : new z(r, t.vars, !0) : null
                        }
                        return N(e, t.vars) ? t : new z(t.prev, new P(e, t.vars), !1)
                    }
                    return null
                }

                function W(e) {
                    return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e
                }

                function z(e, t, r) {
                    this.prev = e, this.vars = t, this.block = r
                }

                function P(e, t) {
                    this.name = e, this.next = t
                }

                var E = new P("this", new P("arguments", null));

                function F() {
                    L.state.context = new z(L.state.context, L.state.localVars, !1), L.state.localVars = E
                }

                function H() {
                    L.state.context = new z(L.state.context, L.state.localVars, !0), L.state.localVars = null
                }

                function I() {
                    L.state.localVars = L.state.context.vars, L.state.context = L.state.context.prev
                }

                function R(e, t) {
                    var r = function () {
                        var r = L.state, n = r.indented;
                        if ("stat" == r.lexical.type) n = r.lexical.indented; else for (var i = r.lexical; i && ")" == i.type && i.align; i = i.prev) n = i.indented;
                        r.lexical = new C(n, L.stream.column(), e, null, r.lexical, t)
                    };
                    return r.lex = !0, r
                }

                function B() {
                    var e = L.state;
                    e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
                }

                function j(e) {
                    function t(r) {
                        return r == e ? O() : ";" == e || "}" == r || ")" == r || "]" == r ? M() : O(t)
                    }

                    return t
                }

                function V(e, t) {
                    return "var" == e ? O(R("vardef", t), Ce, j(";"), B) : "keyword a" == e ? O(R("form"), $, V, B) : "keyword b" == e ? O(R("form"), V, B) : "keyword d" == e ? L.stream.match(/^\s*$/, !1) ? O() : O(R("stat"), _, j(";"), B) : "debugger" == e ? O(j(";")) : "{" == e ? O(R("}"), H, de, B, I) : ";" == e ? O() : "if" == e ? ("else" == L.state.lexical.info && L.state.cc[L.state.cc.length - 1] == B && L.state.cc.pop()(), O(R("form"), $, V, B, Ne)) : "function" == e ? O(ze) : "for" == e ? O(R("form"), Ae, V, B) : "class" == e || c && "interface" == t ? (L.marked = "keyword", O(R("form", "class" == e ? e : t), Ie, B)) : "variable" == e ? c && "declare" == t ? (L.marked = "keyword", O(V)) : c && ("module" == t || "enum" == t || "type" == t) && L.stream.match(/^\s*\w/, !1) ? (L.marked = "keyword", "enum" == t ? O(Ye) : "type" == t ? O(Ee, j("operator"), me, j(";")) : O(R("form"), Se, j("{"), R("}"), de, B, B)) : c && "namespace" == t ? (L.marked = "keyword", O(R("form"), G, V, B)) : c && "abstract" == t ? (L.marked = "keyword", O(V)) : O(R("stat"), ie) : "switch" == e ? O(R("form"), $, j("{"), R("}", "switch"), H, de, B, B, I) : "case" == e ? O(G, j(":")) : "default" == e ? O(j(":")) : "catch" == e ? O(R("form"), F, K, V, B, I) : "export" == e ? O(R("stat"), Ve, B) : "import" == e ? O(R("stat"), Ge, B) : "async" == e ? O(V) : "@" == t ? O(G, V) : M(R("stat"), G, j(";"), B)
                }

                function K(e) {
                    if ("(" == e) return O(Fe, j(")"))
                }

                function G(e, t) {
                    return q(e, t, !1)
                }

                function U(e, t) {
                    return q(e, t, !0)
                }

                function $(e) {
                    return "(" != e ? M() : O(R(")"), G, j(")"), B)
                }

                function q(e, t, r) {
                    if (L.state.fatArrowAt == L.stream.start) {
                        var n = r ? ee : Q;
                        if ("(" == e) return O(F, R(")"), ce(Fe, ")"), B, j("=>"), n, I);
                        if ("variable" == e) return M(F, Se, j("=>"), n, I)
                    }
                    var i = r ? Y : X;
                    return k.hasOwnProperty(e) ? O(i) : "function" == e ? O(ze, i) : "class" == e || c && "interface" == t ? (L.marked = "keyword", O(R("form"), He, B)) : "keyword c" == e || "async" == e ? O(r ? U : G) : "(" == e ? O(R(")"), _, j(")"), B, i) : "operator" == e || "spread" == e ? O(r ? U : G) : "[" == e ? O(R("]"), Xe, B, i) : "{" == e ? ue(ae, "}", null, i) : "quasi" == e ? M(Z, i) : "new" == e ? O(te(r)) : "import" == e ? O(G) : O()
                }

                function _(e) {
                    return e.match(/[;\}\)\],]/) ? M() : M(G)
                }

                function X(e, t) {
                    return "," == e ? O(G) : Y(e, t, !1)
                }

                function Y(e, t, r) {
                    var n = 0 == r ? X : Y, i = 0 == r ? G : U;
                    return "=>" == e ? O(F, r ? ee : Q, I) : "operator" == e ? /\+\+|--/.test(t) || c && "!" == t ? O(n) : c && "<" == t && L.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1) ? O(R(">"), ce(me, ">"), B, n) : "?" == t ? O(G, j(":"), i) : O(i) : "quasi" == e ? M(Z, n) : ";" != e ? "(" == e ? ue(U, ")", "call", n) : "." == e ? O(oe, n) : "[" == e ? O(R("]"), _, j("]"), B, n) : c && "as" == t ? (L.marked = "keyword", O(me, n)) : "regexp" == e ? (L.state.lastType = L.marked = "operator", L.stream.backUp(L.stream.pos - L.stream.start - 1), O(i)) : void 0 : void 0
                }

                function Z(e, t) {
                    return "quasi" != e ? M() : "${" != t.slice(t.length - 2) ? O(Z) : O(G, J)
                }

                function J(e) {
                    if ("}" == e) return L.marked = "string-2", L.state.tokenize = b, O(Z)
                }

                function Q(e) {
                    return x(L.stream, L.state), M("{" == e ? V : G)
                }

                function ee(e) {
                    return x(L.stream, L.state), M("{" == e ? V : U)
                }

                function te(e) {
                    return function (t) {
                        return "." == t ? O(e ? ne : re) : "variable" == t && c ? O(we, e ? Y : X) : M(e ? U : G)
                    }
                }

                function re(e, t) {
                    if ("target" == t) return L.marked = "keyword", O(X)
                }

                function ne(e, t) {
                    if ("target" == t) return L.marked = "keyword", O(Y)
                }

                function ie(e) {
                    return ":" == e ? O(B, V) : M(X, j(";"), B)
                }

                function oe(e) {
                    if ("variable" == e) return L.marked = "property", O()
                }

                function ae(e, t) {
                    return "async" == e ? (L.marked = "property", O(ae)) : "variable" == e || "keyword" == L.style ? (L.marked = "property", "get" == t || "set" == t ? O(le) : (c && L.state.fatArrowAt == L.stream.start && (r = L.stream.match(/^\s*:\s*/, !1)) && (L.state.fatArrowAt = L.stream.pos + r[0].length), O(se))) : "number" == e || "string" == e ? (L.marked = l ? "property" : L.style + " property", O(se)) : "jsonld-keyword" == e ? O(se) : c && W(t) ? (L.marked = "keyword", O(ae)) : "[" == e ? O(G, fe, j("]"), se) : "spread" == e ? O(U, se) : "*" == t ? (L.marked = "keyword", O(ae)) : ":" == e ? M(se) : void 0;
                    var r
                }

                function le(e) {
                    return "variable" != e ? M(se) : (L.marked = "property", O(ze))
                }

                function se(e) {
                    return ":" == e ? O(U) : "(" == e ? M(ze) : void 0
                }

                function ce(e, t, r) {
                    function n(i, o) {
                        if (r ? r.indexOf(i) > -1 : "," == i) {
                            var a = L.state.lexical;
                            return "call" == a.info && (a.pos = (a.pos || 0) + 1), O(function (r, n) {
                                return r == t || n == t ? M() : M(e)
                            }, n)
                        }
                        return i == t || o == t ? O() : r && r.indexOf(";") > -1 ? M(e) : O(j(t))
                    }

                    return function (r, i) {
                        return r == t || i == t ? O() : M(e, n)
                    }
                }

                function ue(e, t, r) {
                    for (var n = 3; n < arguments.length; n++) L.cc.push(arguments[n]);
                    return O(R(t, r), ce(e, t), B)
                }

                function de(e) {
                    return "}" == e ? O() : M(V, de)
                }

                function fe(e, t) {
                    if (c) {
                        if (":" == e || "in" == t) return O(me);
                        if ("?" == t) return O(fe)
                    }
                }

                function he(e) {
                    if (c && ":" == e) return L.stream.match(/^\s*\w+\s+is\b/, !1) ? O(G, pe, me) : O(me)
                }

                function pe(e, t) {
                    if ("is" == t) return L.marked = "keyword", O()
                }

                function me(e, t) {
                    return "keyof" == t || "typeof" == t || "infer" == t ? (L.marked = "keyword", O("typeof" == t ? U : me)) : "variable" == e || "void" == t ? (L.marked = "type", O(be)) : "|" == t || "&" == t ? O(me) : "string" == e || "number" == e || "atom" == e ? O(be) : "[" == e ? O(R("]"), ce(me, "]", ","), B, be) : "{" == e ? O(R("}"), ce(ve, "}", ",;"), B, be) : "(" == e ? O(ce(ye, ")"), ge, be) : "<" == e ? O(ce(me, ">"), me) : void 0
                }

                function ge(e) {
                    if ("=>" == e) return O(me)
                }

                function ve(e, t) {
                    return "variable" == e || "keyword" == L.style ? (L.marked = "property", O(ve)) : "?" == t || "number" == e || "string" == e ? O(ve) : ":" == e ? O(me) : "[" == e ? O(j("variable"), fe, j("]"), ve) : "(" == e ? M(Pe, ve) : void 0
                }

                function ye(e, t) {
                    return "variable" == e && L.stream.match(/^\s*[?:]/, !1) || "?" == t ? O(ye) : ":" == e ? O(me) : "spread" == e ? O(ye) : M(me)
                }

                function be(e, t) {
                    return "<" == t ? O(R(">"), ce(me, ">"), B, be) : "|" == t || "." == e || "&" == t ? O(me) : "[" == e ? O(me, j("]"), be) : "extends" == t || "implements" == t ? (L.marked = "keyword", O(me)) : "?" == t ? O(me, j(":"), me) : void 0
                }

                function we(e, t) {
                    if ("<" == t) return O(R(">"), ce(me, ">"), B, be)
                }

                function xe() {
                    return M(me, ke)
                }

                function ke(e, t) {
                    if ("=" == t) return O(me)
                }

                function Ce(e, t) {
                    return "enum" == t ? (L.marked = "keyword", O(Ye)) : M(Se, fe, Me, Oe)
                }

                function Se(e, t) {
                    return c && W(t) ? (L.marked = "keyword", O(Se)) : "variable" == e ? (A(t), O()) : "spread" == e ? O(Se) : "[" == e ? ue(Le, "]") : "{" == e ? ue(Te, "}") : void 0
                }

                function Te(e, t) {
                    return "variable" != e || L.stream.match(/^\s*:/, !1) ? ("variable" == e && (L.marked = "property"), "spread" == e ? O(Se) : "}" == e ? M() : "[" == e ? O(G, j("]"), j(":"), Te) : O(j(":"), Se, Me)) : (A(t), O(Me))
                }

                function Le() {
                    return M(Se, Me)
                }

                function Me(e, t) {
                    if ("=" == t) return O(U)
                }

                function Oe(e) {
                    if ("," == e) return O(Ce)
                }

                function Ne(e, t) {
                    if ("keyword b" == e && "else" == t) return O(R("form", "else"), V, B)
                }

                function Ae(e, t) {
                    return "await" == t ? O(Ae) : "(" == e ? O(R(")"), De, B) : void 0
                }

                function De(e) {
                    return "var" == e ? O(Ce, We) : "variable" == e ? O(We) : M(We)
                }

                function We(e, t) {
                    return ")" == e ? O() : ";" == e ? O(We) : "in" == t || "of" == t ? (L.marked = "keyword", O(G, We)) : M(G, We)
                }

                function ze(e, t) {
                    return "*" == t ? (L.marked = "keyword", O(ze)) : "variable" == e ? (A(t), O(ze)) : "(" == e ? O(F, R(")"), ce(Fe, ")"), B, he, V, I) : c && "<" == t ? O(R(">"), ce(xe, ">"), B, ze) : void 0
                }

                function Pe(e, t) {
                    return "*" == t ? (L.marked = "keyword", O(Pe)) : "variable" == e ? (A(t), O(Pe)) : "(" == e ? O(F, R(")"), ce(Fe, ")"), B, he, I) : c && "<" == t ? O(R(">"), ce(xe, ">"), B, Pe) : void 0
                }

                function Ee(e, t) {
                    return "keyword" == e || "variable" == e ? (L.marked = "type", O(Ee)) : "<" == t ? O(R(">"), ce(xe, ">"), B) : void 0
                }

                function Fe(e, t) {
                    return "@" == t && O(G, Fe), "spread" == e ? O(Fe) : c && W(t) ? (L.marked = "keyword", O(Fe)) : c && "this" == e ? O(fe, Me) : M(Se, fe, Me)
                }

                function He(e, t) {
                    return "variable" == e ? Ie(e, t) : Re(e, t)
                }

                function Ie(e, t) {
                    if ("variable" == e) return A(t), O(Re)
                }

                function Re(e, t) {
                    return "<" == t ? O(R(">"), ce(xe, ">"), B, Re) : "extends" == t || "implements" == t || c && "," == e ? ("implements" == t && (L.marked = "keyword"), O(c ? me : G, Re)) : "{" == e ? O(R("}"), Be, B) : void 0
                }

                function Be(e, t) {
                    return "async" == e || "variable" == e && ("static" == t || "get" == t || "set" == t || c && W(t)) && L.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (L.marked = "keyword", O(Be)) : "variable" == e || "keyword" == L.style ? (L.marked = "property", O(c ? je : ze, Be)) : "number" == e || "string" == e ? O(c ? je : ze, Be) : "[" == e ? O(G, fe, j("]"), c ? je : ze, Be) : "*" == t ? (L.marked = "keyword", O(Be)) : c && "(" == e ? M(Pe, Be) : ";" == e || "," == e ? O(Be) : "}" == e ? O() : "@" == t ? O(G, Be) : void 0
                }

                function je(e, t) {
                    if ("?" == t) return O(je);
                    if (":" == e) return O(me, Me);
                    if ("=" == t) return O(U);
                    var r = L.state.lexical.prev, n = r && "interface" == r.info;
                    return M(n ? Pe : ze)
                }

                function Ve(e, t) {
                    return "*" == t ? (L.marked = "keyword", O(_e, j(";"))) : "default" == t ? (L.marked = "keyword", O(G, j(";"))) : "{" == e ? O(ce(Ke, "}"), _e, j(";")) : M(V)
                }

                function Ke(e, t) {
                    return "as" == t ? (L.marked = "keyword", O(j("variable"))) : "variable" == e ? M(U, Ke) : void 0
                }

                function Ge(e) {
                    return "string" == e ? O() : "(" == e ? M(G) : M(Ue, $e, _e)
                }

                function Ue(e, t) {
                    return "{" == e ? ue(Ue, "}") : ("variable" == e && A(t), "*" == t && (L.marked = "keyword"), O(qe))
                }

                function $e(e) {
                    if ("," == e) return O(Ue, $e)
                }

                function qe(e, t) {
                    if ("as" == t) return L.marked = "keyword", O(Ue)
                }

                function _e(e, t) {
                    if ("from" == t) return L.marked = "keyword", O(G)
                }

                function Xe(e) {
                    return "]" == e ? O() : M(ce(U, "]"))
                }

                function Ye() {
                    return M(R("form"), Se, j("{"), R("}"), ce(Ze, "}"), B, B)
                }

                function Ze() {
                    return M(Se, Me)
                }

                function Je(e, t) {
                    return "operator" == e.lastType || "," == e.lastType || f.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
                }

                function Qe(e, t, r) {
                    return t.tokenize == g && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0)))
                }

                return I.lex = !0, B.lex = !0, {
                    startState: function (e) {
                        var t = {
                            tokenize: g,
                            lastType: "sof",
                            cc: [],
                            lexical: new C((e || 0) - o, 0, "block", !1),
                            localVars: r.localVars,
                            context: r.localVars && new z(null, null, !1),
                            indented: e || 0
                        };
                        return r.globalVars && "object" == typeof r.globalVars && (t.globalVars = r.globalVars), t
                    },
                    token: function (e, t) {
                        if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), x(e, t)), t.tokenize != y && e.eatSpace()) return null;
                        var r = t.tokenize(e, t);
                        return "comment" == n ? r : (t.lastType = "operator" != n || "++" != i && "--" != i ? n : "incdec", T(t, r, n, i, e))
                    },
                    indent: function (t, n) {
                        if (t.tokenize == y) return e.Pass;
                        if (t.tokenize != g) return 0;
                        var i, l = n && n.charAt(0), s = t.lexical;
                        if (!/^\s*else\b/.test(n)) for (var c = t.cc.length - 1; c >= 0; --c) {
                            var u = t.cc[c];
                            if (u == B) s = s.prev; else if (u != Ne) break
                        }
                        while (("stat" == s.type || "form" == s.type) && ("}" == l || (i = t.cc[t.cc.length - 1]) && (i == X || i == Y) && !/^[,\.=+\-*:?[\(]/.test(n))) s = s.prev;
                        a && ")" == s.type && "stat" == s.prev.type && (s = s.prev);
                        var d = s.type, f = l == d;
                        return "vardef" == d ? s.indented + ("operator" == t.lastType || "," == t.lastType ? s.info.length + 1 : 0) : "form" == d && "{" == l ? s.indented : "form" == d ? s.indented + o : "stat" == d ? s.indented + (Je(t, n) ? a || o : 0) : "switch" != s.info || f || 0 == r.doubleIndentSwitch ? s.align ? s.column + (f ? 0 : 1) : s.indented + (f ? 0 : o) : s.indented + (/^(?:case|default)\b/.test(n) ? o : 2 * o)
                    },
                    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                    blockCommentStart: s ? null : "/*",
                    blockCommentEnd: s ? null : "*/",
                    blockCommentContinue: s ? null : " * ",
                    lineComment: s ? null : "//",
                    fold: "brace",
                    closeBrackets: "()[]{}''\"\"``",
                    helperType: s ? "json" : "javascript",
                    jsonldMode: l,
                    jsonMode: s,
                    expressionAllowed: Qe,
                    skipExpression: function (e) {
                        var t = e.cc[e.cc.length - 1];
                        t != G && t != U || e.cc.pop()
                    }
                }
            }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", {
                name: "javascript",
                json: !0
            }), e.defineMIME("application/x-json", {
                name: "javascript",
                json: !0
            }), e.defineMIME("application/ld+json", {
                name: "javascript",
                jsonld: !0
            }), e.defineMIME("text/typescript", {
                name: "javascript",
                typescript: !0
            }), e.defineMIME("application/typescript", {name: "javascript", typescript: !0})
        })
    }
}]);