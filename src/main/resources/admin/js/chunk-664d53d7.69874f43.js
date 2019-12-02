(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-664d53d7"], {
    "1f27": function (e, t, a) {
        "use strict";
        var n = a("9efd"), r = "/api/admin/menus", o = {
            listAll: function () {
                return Object(n["a"])({url: r, method: "get"})
            }, listTree: function () {
                return Object(n["a"])({url: "".concat(r, "/tree_view"), method: "get"})
            }, create: function (e) {
                return Object(n["a"])({url: r, data: e, method: "post"})
            }, delete: function (e) {
                return Object(n["a"])({url: "".concat(r, "/").concat(e), method: "delete"})
            }, get: function (e) {
                return Object(n["a"])({url: "".concat(r, "/").concat(e), method: "get"})
            }, update: function (e, t) {
                return Object(n["a"])({url: "".concat(r, "/").concat(e), data: t, method: "put"})
            }
        };
        t["a"] = o
    }, "71d6": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-header-index-wide"}, [a("a-row", {attrs: {gutter: 12}}, [a("a-col", {
                    style: {"padding-bottom": "12px"},
                    attrs: {xl: 10, lg: 10, md: 10, sm: 24, xs: 24}
                }, [a("a-card", {
                    attrs: {
                        title: e.title,
                        bodyStyle: {padding: "16px"}
                    }
                }, [a("a-form", {attrs: {layout: "horizontal"}}, [a("a-form-item", {
                    attrs: {
                        label: "名称：",
                        help: "* 页面上所显示的名称"
                    }
                }, [a("a-input", {
                    model: {
                        value: e.menuToCreate.name, callback: function (t) {
                            e.$set(e.menuToCreate, "name", t)
                        }, expression: "menuToCreate.name"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "地址：",
                        help: "* 菜单的地址"
                    }
                }, [a("a-input", {
                    model: {
                        value: e.menuToCreate.url, callback: function (t) {
                            e.$set(e.menuToCreate, "url", t)
                        }, expression: "menuToCreate.url"
                    }
                })], 1), a("a-form-item", {attrs: {label: "上级菜单："}}, [a("menu-select-tree", {
                    attrs: {menus: e.menus},
                    model: {
                        value: e.menuToCreate.parentId, callback: function (t) {
                            e.$set(e.menuToCreate, "parentId", t)
                        }, expression: "menuToCreate.parentId"
                    }
                })], 1), a("a-form-item", {attrs: {label: "排序编号："}}, [a("a-input", {
                    attrs: {type: "number"},
                    model: {
                        value: e.menuToCreate.priority, callback: function (t) {
                            e.$set(e.menuToCreate, "priority", t)
                        }, expression: "menuToCreate.priority"
                    }
                })], 1), a("a-form-item", {
                    style: {display: e.fieldExpand ? "block" : "none"},
                    attrs: {label: "图标：", help: "* 请根据主题的支持选填"}
                }, [a("a-input", {
                    model: {
                        value: e.menuToCreate.icon, callback: function (t) {
                            e.$set(e.menuToCreate, "icon", t)
                        }, expression: "menuToCreate.icon"
                    }
                })], 1), a("a-form-item", {
                    style: {display: e.fieldExpand ? "block" : "none"},
                    attrs: {label: "分组："}
                }, [a("a-input", {
                    model: {
                        value: e.menuToCreate.team, callback: function (t) {
                            e.$set(e.menuToCreate, "team", t)
                        }, expression: "menuToCreate.team"
                    }
                })], 1), a("a-form-item", {
                    style: {display: e.fieldExpand ? "block" : "none"},
                    attrs: {label: "打开方式："}
                }, [a("a-select", {
                    attrs: {defaultValue: "_self"},
                    model: {
                        value: e.menuToCreate.target, callback: function (t) {
                            e.$set(e.menuToCreate, "target", t)
                        }, expression: "menuToCreate.target"
                    }
                }, [a("a-select-option", {attrs: {value: "_self"}}, [e._v("当前窗口")]), a("a-select-option", {attrs: {value: "_blank"}}, [e._v("新窗口")])], 1)], 1), a("a-form-item", ["create" === e.formType ? a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: e.handleSaveClick}
                }, [e._v("保存")]) : a("a-button-group", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: e.handleSaveClick}
                }, [e._v("更新")]), "update" === e.formType ? a("a-button", {
                    attrs: {type: "dashed"},
                    on: {click: e.handleAddMenu}
                }, [e._v("返回添加")]) : e._e()], 1), a("a", {
                    style: {marginLeft: "8px"},
                    on: {click: e.toggleExpand}
                }, [e._v("\n              更多选项\n              "), a("a-icon", {attrs: {type: e.fieldExpand ? "up" : "down"}})], 1)], 1)], 1)], 1)], 1), a("a-col", {
                    style: {"padding-bottom": "12px"},
                    attrs: {xl: 14, lg: 14, md: 14, sm: 24, xs: 24}
                }, [a("a-card", {
                    attrs: {
                        title: "所有菜单",
                        bodyStyle: {padding: "16px"}
                    }
                }, [a("a-table", {
                    attrs: {
                        columns: e.columns,
                        dataSource: e.menus,
                        loading: e.loading,
                        rowKey: function (e) {
                            return e.id
                        }
                    }, scopedSlots: e._u([{
                        key: "name", fn: function (t) {
                            return a("ellipsis", {attrs: {length: 30, tooltip: ""}}, [e._v(e._s(t))])
                        }
                    }, {
                        key: "action", fn: function (t, n) {
                            return a("span", {}, [a("a", {
                                attrs: {href: "javascript:;"}, on: {
                                    click: function (t) {
                                        return e.handleEditMenu(n)
                                    }
                                }
                            }, [e._v("编辑")]), a("a-divider", {attrs: {type: "vertical"}}), a("a-popconfirm", {
                                attrs: {
                                    title: "你确定要删除【" + n.name + "】菜单？",
                                    okText: "确定",
                                    cancelText: "取消"
                                }, on: {
                                    confirm: function (t) {
                                        return e.handleDeleteMenu(n.id)
                                    }
                                }
                            }, [a("a", {attrs: {href: "javascript:;"}}, [e._v("删除")])])], 1)
                        }
                    }])
                })], 1)], 1)], 1)], 1)
            }, r = [], o = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("a-tree-select", {
                    attrs: {
                        treeData: e.menuTreeData,
                        placeholder: "请选择上级菜单，默认为顶级菜单",
                        treeDefaultExpandAll: "",
                        treeDataSimpleMode: !0,
                        allowClear: !0,
                        value: e.menuIdString
                    }, on: {change: e.handleSelectionChange}
                })
            }, l = [], u = (a("6b54"), a("7f7f"), a("c5f6"), {
                name: "MenuSelectTree",
                model: {prop: "menuId", event: "change"},
                props: {
                    menuId: {type: Number, required: !0, default: 0},
                    menus: {
                        type: Array, required: !1, default: function () {
                            return []
                        }
                    }
                },
                computed: {
                    menuTreeData: function () {
                        return this.menus.map(function (e) {
                            return {id: e.id, title: e.name, value: e.id.toString(), pId: e.parentId}
                        })
                    }, menuIdString: function () {
                        return this.menuId.toString()
                    }
                },
                methods: {
                    handleSelectionChange: function (e, t, a) {
                        this.$log.debug("value: ", e), this.$log.debug("label: ", t), this.$log.debug("extra: ", a), this.$emit("change", e ? parseInt(e) : 0)
                    }
                }
            }), i = u, s = a("2877"), c = Object(s["a"])(i, o, l, !1, null, null, null), d = c.exports, m = a("1f27"),
            p = [{title: "名称", dataIndex: "name", scopedSlots: {customRender: "name"}}, {
                title: "地址",
                dataIndex: "url"
            }, {title: "分组", dataIndex: "team"}, {title: "排序", dataIndex: "priority"}, {
                title: "操作",
                key: "action",
                scopedSlots: {customRender: "action"}
            }], f = {
                components: {MenuSelectTree: d}, data: function () {
                    return {
                        formType: "create",
                        loading: !1,
                        columns: p,
                        menus: [],
                        menuToCreate: {target: "_self"},
                        fieldExpand: !1
                    }
                }, computed: {
                    title: function () {
                        return this.menuToCreate.id ? "修改菜单" : "添加菜单"
                    }
                }, created: function () {
                    this.loadMenus()
                }, methods: {
                    loadMenus: function () {
                        var e = this;
                        this.loading = !0, m["a"].listTree().then(function (t) {
                            e.menus = t.data.data, e.loading = !1
                        })
                    }, handleSaveClick: function () {
                        this.createOrUpdateMenu()
                    }, handleAddMenu: function () {
                        this.formType = "create", this.menuToCreate = {}
                    }, handleEditMenu: function (e) {
                        this.menuToCreate = e, this.formType = "update"
                    }, handleDeleteMenu: function (e) {
                        var t = this;
                        m["a"].delete(e).then(function (e) {
                            t.$message.success("删除成功！"), t.loadMenus()
                        })
                    }, createOrUpdateMenu: function () {
                        var e = this;
                        this.menuToCreate.id ? m["a"].update(this.menuToCreate.id, this.menuToCreate).then(function (t) {
                            e.$message.success("更新成功！"), e.loadMenus()
                        }) : m["a"].create(this.menuToCreate).then(function (t) {
                            e.$message.success("保存成功！"), e.loadMenus()
                        }), this.handleAddMenu()
                    }, toggleExpand: function () {
                        this.fieldExpand = !this.fieldExpand
                    }
                }
            }, h = f, g = Object(s["a"])(h, n, r, !1, null, null, null);
        t["default"] = g.exports
    }
}]);