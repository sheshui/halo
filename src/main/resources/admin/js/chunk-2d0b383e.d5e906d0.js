(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0b383e"], {
    2967: function (t, e, a) {
        "use strict";
        a.r(e);
        var n = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "page-header-index-wide"}, [a("a-row", [a("a-col", {attrs: {span: 24}}, [a("a-card", {
                    attrs: {
                        bordered: !1,
                        bodyStyle: {padding: "16px"}
                    }
                }, [a("a-card", {
                    staticClass: "environment-info",
                    attrs: {bordered: !1, bodyStyle: {padding: "16px"}}
                }, [a("template", {slot: "title"}, [t._v("\n            环境信息\n            "), a("a", {
                    attrs: {href: "javascript:void(0);"},
                    on: {click: t.handleCopyEnvironments}
                }, [a("a-icon", {attrs: {type: "copy"}})], 1)]), a("a-popconfirm", {
                    attrs: {
                        slot: "extra",
                        placement: "left",
                        okText: "确定",
                        cancelText: "取消"
                    }, on: {confirm: t.confirmUpdate}, slot: "extra"
                }, [a("template", {slot: "title"}, [a("p", [t._v("确定更新 "), a("b", [t._v("Halo admin")]), t._v(" 吗？")])]), a("a-icon", {
                    attrs: {
                        slot: "icon",
                        type: "cloud-download"
                    }, slot: "icon"
                }), a("a-button", {
                    attrs: {
                        loading: t.updating,
                        type: "dashed",
                        shape: "circle",
                        icon: "cloud-download"
                    }
                })], 2), a("ul", {
                    staticStyle: {
                        margin: "0",
                        padding: "0",
                        "list-style": "none"
                    }
                }, [a("li", [t._v("Server 版本：" + t._s(t.environments.version))]), a("li", [t._v("Admin 版本：" + t._s(t.adminVersion))]), a("li", [t._v("数据库：" + t._s(t.environments.database))]), a("li", [t._v("运行模式：" + t._s(t.environments.mode))]), a("li", [t._v("启动时间：" + t._s(t._f("moment")(t.environments.startTime)))])]), a("a", {
                    staticStyle: {"margin-right": "10px"},
                    attrs: {href: "https://github.com/halo-dev", target: "_blank"}
                }, [t._v("开源地址\n            "), a("a-icon", {attrs: {type: "link"}})], 1), a("a", {
                    staticStyle: {"margin-right": "10px"},
                    attrs: {href: "https://halo.run/guide", target: "_blank"}
                }, [t._v("用户文档\n            "), a("a-icon", {attrs: {type: "link"}})], 1), a("a", {
                    staticStyle: {"margin-right": "10px"},
                    attrs: {href: "https://bbs.halo.run", target: "_blank"}
                }, [t._v("在线社区\n            "), a("a-icon", {attrs: {type: "link"}})], 1)], 2), a("a-card", {
                    attrs: {
                        title: "开发者",
                        bordered: !1,
                        bodyStyle: {padding: "16px"}
                    }
                }, t._l(t.developers, function (t, e) {
                    return a("a", {
                        key: e,
                        attrs: {href: t.github, target: "_blank"}
                    }, [a("a-tooltip", {
                        attrs: {
                            placement: "top",
                            title: t.name
                        }
                    }, [a("a-avatar", {style: {marginRight: "10px"}, attrs: {size: "large", src: t.avatar}})], 1)], 1)
                }), 0), a("a-card", {
                    attrs: {
                        title: "时间轴",
                        bordered: !1,
                        bodyStyle: {padding: "16px"}
                    }
                }, [a("a-timeline", [a("a-timeline-item", [t._v("...")]), t._l(t.steps, function (e, n) {
                    return a("a-timeline-item", {key: n}, [t._v(t._s(e.date) + " " + t._s(e.content))])
                })], 2)], 1)], 1)], 1)], 1)], 1)
            }, i = [], r = (a("28a5"), a("a481"), a("7f7f"), a("96cf"), a("3b8d")), o = a("50fc"), s = a("bc3a"),
            c = a.n(s), l = {
                data: function () {
                    return {
                        adminVersion: this.VERSION,
                        environments: {},
                        developers: [{
                            name: "Ryan Wang",
                            avatar: "//cn.gravatar.com/avatar/7cc7f29278071bd4dce995612d428834?s=256&d=mm",
                            website: "https://ryanc.cc",
                            github: "https://github.com/ruibaby"
                        }, {
                            name: "John Niang",
                            avatar: "//cn.gravatar.com/avatar/1dcf60ef27363dae539385d5bae9b2bd?s=256&d=mm",
                            website: "https://johnniang.me",
                            github: "https://github.com/johnniang"
                        }, {
                            name: "Aquan",
                            avatar: "//cn.gravatar.com/avatar/3958035fa354403fa9ca3fca36b08068?s=256&d=mm",
                            website: "https://blog.eunji.cn",
                            github: "https://github.com/aquanlerou"
                        }, {
                            name: "appdev",
                            avatar: "//cn.gravatar.com/avatar/08cf681fb7c6ad1b4fe70a8269c2103c?s=256&d=mm",
                            website: "https://www.apkdv.com",
                            github: "https://github.com/appdev"
                        }, {
                            name: "guqing",
                            avatar: "//cn.gravatar.com/avatar/ad062ba572c8b006bfd2cbfc43fdee5e?s=256&d=mm",
                            website: "http://www.guqing.xyz",
                            github: "https://github.com/guqing"
                        }],
                        steps: [{date: "2019-09-11", content: "Halo v1.1.0 发布"}, {
                            date: "2019-07-09",
                            content: "Halo v1.0.3 发布"
                        }, {date: "2019-07-08", content: "Star 数达到 6500"}, {
                            date: "2019-06-01",
                            content: "1.0 正式版发布"
                        }, {date: "2019-05-03", content: "Star 数达到 3300"}, {
                            date: "2019-01-30",
                            content: "John Niang 加入开发"
                        }, {date: "2018-10-18", content: "构建镜像到 Docker hub"}, {
                            date: "2018-09-22",
                            content: "Star 数达到 800"
                        }, {date: "2018-05-02", content: "第一条 Issue"}, {
                            date: "2018-05-01",
                            content: "Star 数达到 100"
                        }, {date: "2018-04-29", content: "第一个 Pull request"}, {
                            date: "2018-04-28",
                            content: "正式开源"
                        }, {date: "2018-03-21", content: "确定命名为 Halo，并上传到 Github"}],
                        updating: !1
                    }
                }, created: function () {
                    this.getEnvironments(), this.checkUpdate()
                }, computed: {
                    updateText: function () {
                        return this.updating ? "更新中..." : "更新"
                    }
                }, methods: {
                    getEnvironments: function () {
                        var t = this;
                        o["a"].environments().then(function (e) {
                            t.environments = e.data.data
                        })
                    }, confirmUpdate: function () {
                        var t = this;
                        this.updating = !0, o["a"].updateAdminAssets().then(function (e) {
                            t.$notification.success({message: "更新成功", description: "请刷新后体验最新版本！"})
                        }).finally(function () {
                            t.updating = !1
                        })
                    }, handleCopyEnvironments: function () {
                        var t = this,
                            e = "Server 版本：".concat(this.environments.version, "\nAdmin 版本：").concat(this.adminVersion, "\n数据库：").concat(this.environments.database, "\n运行模式：").concat(this.environments.mode, "\nUA 信息：").concat(navigator.userAgent);
                        this.$copyText(e).then(function (e) {
                            console.log("copy", e), t.$message.success("复制成功！")
                        }).catch(function (e) {
                            console.log("copy.err", e), t.$message.error("复制失败！")
                        })
                    }, checkUpdate: function () {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e, a, n = this;
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e = this.$createElement, a = this, c.a.get("https://api.github.com/repos/halo-dev/halo/releases/latest").then(function (t) {
                                            var i = t.data;
                                            if (!i.draft && !i.prerelease) {
                                                var r = a.calculateIntValue(a.environments.version),
                                                    o = a.calculateIntValue(i.name);
                                                if (!(r >= o)) {
                                                    var s = "新版本提醒", c = "检测到新版本：" + i.name + "，点击下方按钮查看最新版本。",
                                                        l = i.html_url;
                                                    n.$notification.open({
                                                        message: s,
                                                        description: c,
                                                        icon: e("a-icon", {
                                                            attrs: {type: "smile"},
                                                            style: "color: #108ee9"
                                                        }),
                                                        btn: function (t) {
                                                            return t("a-button", {
                                                                props: {type: "primary", size: "small"},
                                                                on: {
                                                                    click: function () {
                                                                        return window.open(l, "_blank")
                                                                    }
                                                                }
                                                            }, "去看看")
                                                        }
                                                    })
                                                }
                                            }
                                        }).catch(function (t) {
                                            console.error("Check update fail", t)
                                        });
                                    case 3:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }

                        return e
                    }(), calculateIntValue: function (t) {
                        t = t.replace(/v/g, "");
                        var e = t.split(".");
                        if (null == e || 3 !== e.length) return -1;
                        var a = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
                        return isNaN(a) || isNaN(n) || isNaN(i) ? -1 : 1e6 * a + 1e3 * n + i
                    }
                }
            }, d = l, p = a("2877"), u = Object(p["a"])(d, n, i, !1, null, null, null);
        e["default"] = u.exports
    }
}]);