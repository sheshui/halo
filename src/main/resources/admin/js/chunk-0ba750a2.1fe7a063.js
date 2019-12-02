(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0ba750a2"], {
    aa1e: function (t, a, e) {
        "use strict";
        e.r(a);
        var n = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "page-header-index-wide"}, [e("a-row", {attrs: {gutter: 12}}, [e("a-col", {
                style: {"padding-bottom": "12px"},
                attrs: {xl: 10, lg: 10, md: 10, sm: 24, xs: 24}
            }, [e("a-card", {
                attrs: {
                    title: t.title,
                    bodyStyle: {padding: "16px"}
                }
            }, [e("a-form", {attrs: {layout: "horizontal"}}, [e("a-form-item", {
                attrs: {
                    label: "名称：",
                    help: "* 页面上所显示的名称"
                }
            }, [e("a-input", {
                model: {
                    value: t.tagToCreate.name, callback: function (a) {
                        t.$set(t.tagToCreate, "name", a)
                    }, expression: "tagToCreate.name"
                }
            })], 1), e("a-form-item", {
                attrs: {
                    label: "别名",
                    help: "* 一般为单个标签页面的标识，最好为英文"
                }
            }, [e("a-input", {
                model: {
                    value: t.tagToCreate.slugName, callback: function (a) {
                        t.$set(t.tagToCreate, "slugName", a)
                    }, expression: "tagToCreate.slugName"
                }
            })], 1), e("a-form-item", ["create" === t.formType ? e("a-button", {
                attrs: {type: "primary"},
                on: {click: t.handleSaveClick}
            }, [t._v("保存")]) : e("a-button-group", [e("a-button", {
                attrs: {type: "primary"},
                on: {click: t.handleSaveClick}
            }, [t._v("更新")]), "update" === t.formType ? e("a-button", {
                attrs: {type: "dashed"},
                on: {click: t.handleAddTag}
            }, [t._v("返回添加")]) : t._e()], 1), "update" === t.formType ? e("a-popconfirm", {
                attrs: {
                    title: "你确定要删除【" + t.tagToCreate.name + "】标签？",
                    okText: "确定",
                    cancelText: "取消"
                }, on: {
                    confirm: function (a) {
                        return t.handleDeleteTag(t.tagToCreate.id)
                    }
                }
            }, [e("a-button", {
                staticStyle: {float: "right"},
                attrs: {type: "danger"}
            }, [t._v("删除")])], 1) : t._e()], 1)], 1)], 1)], 1), e("a-col", {
                style: {"padding-bottom": "12px"},
                attrs: {xl: 14, lg: 14, md: 14, sm: 24, xs: 24}
            }, [e("a-card", {attrs: {title: "所有标签", bodyStyle: {padding: "16px"}}}, t._l(t.tags, function (a) {
                return e("a-tooltip", {
                    key: a.id,
                    attrs: {placement: "topLeft"}
                }, [e("template", {slot: "title"}, [e("span", [t._v(t._s(a.postCount) + " 篇文章")])]), e("a-tag", {
                    staticStyle: {"margin-bottom": "8px"},
                    attrs: {color: "blue"},
                    on: {
                        click: function (e) {
                            return t.handleEditTag(a)
                        }
                    }
                }, [t._v(t._s(a.name))])], 2)
            }), 1)], 1)], 1)], 1)
        }, o = [], r = (e("7f7f"), e("d28d")), i = {
            data: function () {
                return {formType: "create", tags: [], tagToCreate: {}}
            }, computed: {
                title: function () {
                    return this.tagToCreate.id ? "修改标签" : "添加标签"
                }
            }, created: function () {
                this.loadTags()
            }, methods: {
                loadTags: function () {
                    var t = this;
                    r["a"].listAll(!0).then(function (a) {
                        t.tags = a.data.data
                    })
                }, handleSaveClick: function () {
                    this.createOrUpdateTag()
                }, handleAddTag: function () {
                    this.formType = "create", this.tagToCreate = {}
                }, handleEditTag: function (t) {
                    this.tagToCreate = t, this.formType = "update"
                }, handleDeleteTag: function (t) {
                    var a = this;
                    r["a"].delete(t).then(function (t) {
                        a.$message.success("删除成功！"), a.loadTags(), a.handleAddTag()
                    })
                }, createOrUpdateTag: function () {
                    var t = this;
                    this.tagToCreate.name ? (this.tagToCreate.id ? r["a"].update(this.tagToCreate.id, this.tagToCreate).then(function (a) {
                        t.$message.success("更新成功！"), t.loadTags(), t.tagToCreate = {}
                    }) : r["a"].create(this.tagToCreate).then(function (a) {
                        t.$message.success("保存成功！"), t.loadTags(), t.tagToCreate = {}
                    }), this.handleAddTag()) : this.$notification["error"]({message: "提示", description: "标签名称不能为空！"})
                }
            }
        }, s = i, l = e("2877"), c = Object(l["a"])(s, n, o, !1, null, null, null);
        a["default"] = c.exports
    }, d28d: function (t, a, e) {
        "use strict";
        var n = e("9efd"), o = "/api/admin/tags", r = {
            listAll: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return Object(n["a"])({url: o, params: {more: t}, method: "get"})
            }, createWithName: function (t) {
                return Object(n["a"])({url: o, data: {name: t}, method: "post"})
            }, create: function (t) {
                return Object(n["a"])({url: o, data: t, method: "post"})
            }, update: function (t, a) {
                return Object(n["a"])({url: "".concat(o, "/").concat(t), data: a, method: "put"})
            }, delete: function (t) {
                return Object(n["a"])({url: "".concat(o, "/").concat(t), method: "delete"})
            }
        };
        a["a"] = r
    }
}]);