(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-37a26d88"], {
    "1f27": function (e, t, a) {
        "use strict";
        var r = a("9efd"), n = "/api/admin/menus", o = {
            listAll: function () {
                return Object(r["a"])({url: n, method: "get"})
            }, listTree: function () {
                return Object(r["a"])({url: "".concat(n, "/tree_view"), method: "get"})
            }, create: function (e) {
                return Object(r["a"])({url: n, data: e, method: "post"})
            }, delete: function (e) {
                return Object(r["a"])({url: "".concat(n, "/").concat(e), method: "delete"})
            }, get: function (e) {
                return Object(r["a"])({url: "".concat(n, "/").concat(e), method: "get"})
            }, update: function (e, t) {
                return Object(r["a"])({url: "".concat(n, "/").concat(e), data: t, method: "put"})
            }
        };
        t["a"] = o
    }, "7e89": function (e, t, a) {
        "use strict";
        a.r(t);
        var r = function () {
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
                        value: e.categoryToCreate.name, callback: function (t) {
                            e.$set(e.categoryToCreate, "name", t)
                        }, expression: "categoryToCreate.name"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "别名：",
                        help: "* 一般为单个分类页面的标识，最好为英文"
                    }
                }, [a("a-input", {
                    model: {
                        value: e.categoryToCreate.slugName, callback: function (t) {
                            e.$set(e.categoryToCreate, "slugName", t)
                        }, expression: "categoryToCreate.slugName"
                    }
                })], 1), a("a-form-item", {attrs: {label: "上级目录："}}, [a("category-select-tree", {
                    attrs: {categories: e.categories},
                    model: {
                        value: e.categoryToCreate.parentId, callback: function (t) {
                            e.$set(e.categoryToCreate, "parentId", t)
                        }, expression: "categoryToCreate.parentId"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "描述：",
                        help: "* 分类描述，部分主题可显示"
                    }
                }, [a("a-input", {
                    attrs: {type: "textarea", autosize: {minRows: 3}},
                    model: {
                        value: e.categoryToCreate.description, callback: function (t) {
                            e.$set(e.categoryToCreate, "description", t)
                        }, expression: "categoryToCreate.description"
                    }
                })], 1), a("a-form-item", ["create" === e.formType ? a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: e.handleSaveClick}
                }, [e._v("保存")]) : a("a-button-group", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: e.handleSaveClick}
                }, [e._v("更新")]), "update" === e.formType ? a("a-button", {
                    attrs: {type: "dashed"},
                    on: {click: e.handleAddCategory}
                }, [e._v("返回添加")]) : e._e()], 1)], 1)], 1)], 1)], 1), a("a-col", {
                    style: {"padding-bottom": "1rem"},
                    attrs: {xl: 14, lg: 14, md: 14, sm: 24, xs: 24}
                }, [a("a-card", {attrs: {title: "分类列表", bodyStyle: {padding: "16px"}}}, [a("a-table", {
                    attrs: {
                        columns: e.columns, dataSource: e.categories, rowKey: function (e) {
                            return e.id
                        }, loading: e.loading
                    }, scopedSlots: e._u([{
                        key: "name", fn: function (t) {
                            return a("ellipsis", {
                                attrs: {
                                    length: 30,
                                    tooltip: ""
                                }
                            }, [e._v("\n            " + e._s(t) + "\n          ")])
                        }
                    }, {
                        key: "action", fn: function (t, r) {
                            return a("span", {}, [a("a", {
                                attrs: {href: "javascript:;"}, on: {
                                    click: function (t) {
                                        return e.handleEditCategory(r)
                                    }
                                }
                            }, [e._v("编辑")]), a("a-divider", {attrs: {type: "vertical"}}), a("a-dropdown", {attrs: {trigger: ["click"]}}, [a("a", {
                                staticClass: "ant-dropdown-link",
                                attrs: {href: "javascript:void(0);"}
                            }, [e._v("更多")]), a("a-menu", {
                                attrs: {slot: "overlay"},
                                slot: "overlay"
                            }, [a("a-menu-item", {key: "1"}, [a("a-popconfirm", {
                                attrs: {
                                    title: "你确定要添加【" + r.name + "】到菜单？",
                                    okText: "确定",
                                    cancelText: "取消"
                                }, on: {
                                    confirm: function (t) {
                                        return e.handleCategoryToMenu(r)
                                    }
                                }
                            }, [a("a", {attrs: {href: "javascript:void(0);"}}, [e._v("添加到菜单")])])], 1), a("a-menu-item", {key: "2"}, [a("a-popconfirm", {
                                attrs: {
                                    title: "你确定要删除【" + r.name + "】分类？",
                                    okText: "确定",
                                    cancelText: "取消"
                                }, on: {
                                    confirm: function (t) {
                                        return e.handleDeleteCategory(r.id)
                                    }
                                }
                            }, [a("a", {attrs: {href: "javascript:void(0);"}}, [e._v("删除")])])], 1)], 1)], 1)], 1)
                        }
                    }])
                })], 1)], 1)], 1)], 1)
            }, n = [], o = (a("7f7f"), a("fa25")), c = a("c405"), i = a("1f27"),
            l = [{title: "名称", dataIndex: "name"}, {title: "别名", dataIndex: "slugName"}, {
                title: "描述",
                dataIndex: "description"
            }, {title: "文章数", dataIndex: "postCount"}, {
                title: "操作",
                key: "action",
                scopedSlots: {customRender: "action"}
            }], s = {
                components: {CategorySelectTree: o["a"]}, data: function () {
                    return {formType: "create", categories: [], categoryToCreate: {}, menu: {}, loading: !1, columns: l}
                }, computed: {
                    title: function () {
                        return this.categoryToCreate.id ? "修改分类" : "添加分类"
                    }
                }, created: function () {
                    this.loadCategories()
                }, methods: {
                    loadCategories: function () {
                        var e = this;
                        this.loading = !0, c["a"].listAll(!0).then(function (t) {
                            e.categories = t.data.data, e.loading = !1
                        })
                    }, handleSaveClick: function () {
                        this.createOrUpdateCategory()
                    }, handleAddCategory: function () {
                        this.formType = "create", this.categoryToCreate = {}
                    }, handleEditCategory: function (e) {
                        this.categoryToCreate = e, this.formType = "update"
                    }, handleDeleteCategory: function (e) {
                        var t = this;
                        c["a"].delete(e).then(function (e) {
                            t.$message.success("删除成功！"), t.loadCategories(), t.handleAddCategory()
                        })
                    }, createOrUpdateCategory: function () {
                        var e = this;
                        this.categoryToCreate.name ? (this.categoryToCreate.id ? c["a"].update(this.categoryToCreate.id, this.categoryToCreate).then(function (t) {
                            e.$message.success("更新成功！"), e.loadCategories(), e.categoryToCreate = {}
                        }) : c["a"].create(this.categoryToCreate).then(function (t) {
                            e.$message.success("保存成功！"), e.loadCategories(), e.categoryToCreate = {}
                        }), this.handleAddCategory()) : this.$notification["error"]({
                            message: "提示",
                            description: "分类名称不能为空！"
                        })
                    }, handleCategoryToMenu: function (e) {
                        var t = this;
                        this.menu["name"] = e.name, this.menu["url"] = "/categories/".concat(e.slugName), i["a"].create(this.menu).then(function (e) {
                            t.$message.success("添加到菜单成功！"), t.menu = {}
                        })
                    }
                }
            }, u = s, d = a("2877"), g = Object(d["a"])(u, r, n, !1, null, null, null);
        t["default"] = g.exports
    }, c405: function (e, t, a) {
        "use strict";
        a("7f7f"), a("ac6a");
        var r = a("9efd"), n = "/api/admin/categories", o = {};

        function c(e, t) {
            t.forEach(function (t) {
                e.key === t.parentId && (e.children || (e.children = []), e.children.push({
                    key: t.id,
                    title: t.name,
                    isLeaf: !1
                }))
            }), e.children ? e.children.forEach(function (e) {
                return c(e, t)
            }) : e.isLeaf = !0
        }

        o.listAll = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return Object(r["a"])({url: "".concat(n), params: {more: e}, method: "get"})
        }, o.listTree = function () {
            return Object(r["a"])({url: "".concat(n, "/tree_view"), method: "get"})
        }, o.create = function (e) {
            return Object(r["a"])({url: n, data: e, method: "post"})
        }, o.delete = function (e) {
            return Object(r["a"])({url: "".concat(n, "/").concat(e), method: "delete"})
        }, o.get = function (e) {
            return Object(r["a"])({url: "".concat(n, "/").concat(e), method: "get"})
        }, o.update = function (e, t) {
            return Object(r["a"])({url: "".concat(n, "/").concat(e), data: t, method: "put"})
        }, o.concreteTree = function (e) {
            var t = {key: 0, title: "top", children: []};
            return c(t, e), t.children
        }, t["a"] = o
    }, fa25: function (e, t, a) {
        "use strict";
        var r = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("a-tree-select", {
                attrs: {
                    treeData: e.categoryTreeData,
                    placeholder: "请选择上级目录，默认为顶级目录",
                    treeDefaultExpandAll: "",
                    treeDataSimpleMode: !0,
                    allowClear: !0,
                    value: e.categoryIdString
                }, on: {change: e.handleSelectionChange}
            })
        }, n = [], o = (a("6b54"), a("7f7f"), a("c5f6"), {
            name: "CategorySelectTree",
            model: {prop: "categoryId", event: "change"},
            props: {
                categoryId: {type: Number, required: !0, default: 0},
                categories: {
                    type: Array, required: !1, default: function () {
                        return []
                    }
                }
            },
            computed: {
                categoryTreeData: function () {
                    return this.categories.map(function (e) {
                        return {id: e.id, title: e.name, value: e.id.toString(), pId: e.parentId}
                    })
                }, categoryIdString: function () {
                    return this.categoryId.toString()
                }
            },
            methods: {
                handleSelectionChange: function (e, t, a) {
                    this.$log.debug("value: ", e), this.$log.debug("label: ", t), this.$log.debug("extra: ", a), this.$emit("change", e ? parseInt(e) : 0)
                }
            }
        }), c = o, i = a("2877"), l = Object(i["a"])(c, r, n, !1, null, null, null);
        t["a"] = l.exports
    }
}]);