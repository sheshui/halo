(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0cf13d"], {
    "61d0": function (a, t, e) {
        "use strict";
        e.r(t);
        var i = function () {
            var a = this, t = this, e = t.$createElement, i = t._self._c || e;
            return i("page-view", [i("a-row", {
                attrs: {
                    gutter: 12,
                    type: "flex",
                    align: "middle"
                }
            }, [i("a-col", {
                staticClass: "search-box",
                staticStyle: {"padding-bottom": "12px"},
                attrs: {span: 24}
            }, [i("a-card", {
                attrs: {
                    bordered: !1,
                    bodyStyle: {padding: "16px"}
                }
            }, [i("div", {staticClass: "table-page-search-wrapper"}, [i("a-form", {attrs: {layout: "inline"}}, [i("a-row", {attrs: {gutter: 48}}, [i("a-col", {
                attrs: {
                    md: 6,
                    sm: 24
                }
            }, [i("a-form-item", {attrs: {label: "关键词"}}, [i("a-input", {
                model: {
                    value: t.queryParam.keyword,
                    callback: function (a) {
                        t.$set(t.queryParam, "keyword", a)
                    },
                    expression: "queryParam.keyword"
                }
            })], 1)], 1), i("a-col", {
                attrs: {
                    md: 6,
                    sm: 24
                }
            }, [i("a-form-item", {attrs: {label: "存储位置"}}, [i("a-select", {
                on: {change: t.handleQuery},
                model: {
                    value: t.queryParam.attachmentType, callback: function (a) {
                        t.$set(t.queryParam, "attachmentType", a)
                    }, expression: "queryParam.attachmentType"
                }
            }, t._l(Object.keys(t.attachmentType), function (a) {
                return i("a-select-option", {key: a, attrs: {value: a}}, [t._v(t._s(t.attachmentType[a].text))])
            }), 1)], 1)], 1), i("a-col", {
                attrs: {
                    md: 6,
                    sm: 24
                }
            }, [i("a-form-item", {attrs: {label: "文件类型"}}, [i("a-select", {
                on: {change: t.handleQuery},
                model: {
                    value: t.queryParam.mediaType, callback: function (a) {
                        t.$set(t.queryParam, "mediaType", a)
                    }, expression: "queryParam.mediaType"
                }
            }, t._l(t.mediaTypes, function (a, e) {
                return i("a-select-option", {key: e, attrs: {value: a}}, [t._v(t._s(a))])
            }), 1)], 1)], 1), i("a-col", {
                attrs: {
                    md: 6,
                    sm: 24
                }
            }, [i("span", {staticClass: "table-page-search-submitButtons"}, [i("a-button", {
                attrs: {type: "primary"},
                on: {click: t.handleQuery}
            }, [t._v("查询")]), i("a-button", {
                staticStyle: {"margin-left": "8px"},
                on: {click: t.handleResetParam}
            }, [t._v("重置")])], 1)])], 1)], 1)], 1), i("div", {
                staticClass: "table-operator",
                staticStyle: {"margin-bottom": "0"}
            }, [i("a-button", {
                attrs: {type: "primary", icon: "plus"}, on: {
                    click: function () {
                        return a.uploadVisible = !0
                    }
                }
            }, [t._v("上传")])], 1)])], 1), i("a-col", {attrs: {span: 24}}, [i("a-list", {
                attrs: {
                    grid: {
                        gutter: 12,
                        xs: 2,
                        sm: 2,
                        md: 4,
                        lg: 6,
                        xl: 6,
                        xxl: 6
                    }, dataSource: t.formattedDatas, loading: t.listLoading
                }, scopedSlots: t._u([{
                    key: "renderItem", fn: function (a, e) {
                        return i("a-list-item", {key: e}, [i("a-card", {
                            attrs: {bodyStyle: {padding: 0}, hoverable: ""},
                            on: {
                                click: function (e) {
                                    return t.handleShowDetailDrawer(a)
                                }
                            }
                        }, [i("div", {staticClass: "attach-thumb"}, [i("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.handleJudgeMediaType(a),
                                expression: "!handleJudgeMediaType(item)"
                            }]
                        }, [t._v("当前格式不支持预览")]), i("img", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.handleJudgeMediaType(a),
                                expression: "handleJudgeMediaType(item)"
                            }], attrs: {src: a.thumbPath}
                        })]), i("a-card-meta", {staticStyle: {padding: "0.8rem"}}, [i("ellipsis", {
                            attrs: {
                                slot: "description",
                                length: t.isMobile() ? 12 : 16,
                                tooltip: ""
                            }, slot: "description"
                        }, [t._v(t._s(a.name))])], 1)], 1)], 1)
                    }
                }])
            })], 1)], 1), i("div", {staticClass: "page-wrapper"}, [i("a-pagination", {
                staticClass: "pagination",
                attrs: {
                    total: t.pagination.total,
                    defaultPageSize: t.pagination.size,
                    pageSizeOptions: ["18", "36", "54", "72", "90", "108"],
                    showSizeChanger: ""
                },
                on: {change: t.handlePaginationChange, showSizeChange: t.handlePaginationChange}
            })], 1), i("a-modal", {
                attrs: {
                    title: "上传附件",
                    footer: null,
                    afterClose: t.onUploadClose,
                    destroyOnClose: ""
                }, model: {
                    value: t.uploadVisible, callback: function (a) {
                        t.uploadVisible = a
                    }, expression: "uploadVisible"
                }
            }, [i("FilePondUpload", {
                ref: "upload",
                attrs: {uploadHandler: t.uploadHandler}
            })], 1), t.selectAttachment ? i("AttachmentDetailDrawer", {
                attrs: {
                    attachment: t.selectAttachment,
                    addToPhoto: !0
                }, on: {
                    delete: function () {
                        return a.loadAttachments()
                    }
                }, model: {
                    value: t.drawerVisible, callback: function (a) {
                        t.drawerVisible = a
                    }, expression: "drawerVisible"
                }
            }) : t._e()], 1)
        }, n = [], s = (e("28a5"), e("55dd"), e("ac0d")), r = e("680a"), l = e("5bcf"), o = e("a796"), d = {
            components: {PageView: r["b"], AttachmentDetailDrawer: l["a"]},
            mixins: [s["a"], s["b"]],
            data: function () {
                return {
                    attachmentType: o["a"].type,
                    listLoading: !0,
                    uploadVisible: !1,
                    selectAttachment: {},
                    attachments: [],
                    mediaTypes: [],
                    editable: !1,
                    pagination: {page: 1, size: 18, sort: null},
                    queryParam: {page: 0, size: 18, sort: null, keyword: null, mediaType: null, attachmentType: null},
                    drawerVisible: !1,
                    uploadHandler: o["a"].upload
                }
            },
            computed: {
                formattedDatas: function () {
                    var a = this;
                    return this.attachments.map(function (t) {
                        return t.typeProperty = a.attachmentType[t.type], t
                    })
                }
            },
            created: function () {
                this.loadAttachments(), this.loadMediaTypes()
            },
            destroyed: function () {
                this.drawerVisible && (this.drawerVisible = !1)
            },
            beforeRouteLeave: function (a, t, e) {
                this.drawerVisible && (this.drawerVisible = !1), e()
            },
            methods: {
                loadAttachments: function () {
                    var a = this;
                    this.queryParam.page = this.pagination.page - 1, this.queryParam.size = this.pagination.size, this.queryParam.sort = this.pagination.sort, this.listLoading = !0, o["a"].query(this.queryParam).then(function (t) {
                        a.attachments = t.data.data.content, a.pagination.total = t.data.data.total, a.listLoading = !1
                    })
                }, loadMediaTypes: function () {
                    var a = this;
                    o["a"].getMediaTypes().then(function (t) {
                        a.mediaTypes = t.data.data
                    })
                }, handleShowDetailDrawer: function (a) {
                    this.selectAttachment = a, this.drawerVisible = !0
                }, handlePaginationChange: function (a, t) {
                    this.$log.debug("Current: ".concat(a, ", PageSize: ").concat(t)), this.pagination.page = a, this.pagination.size = t, this.loadAttachments()
                }, handleResetParam: function () {
                    this.queryParam.keyword = null, this.queryParam.mediaType = null, this.queryParam.attachmentType = null, this.loadAttachments(), this.loadMediaTypes()
                }, handleQuery: function () {
                    this.queryParam.page = 0, this.pagination.page = 1, this.loadAttachments()
                }, onUploadClose: function () {
                    this.$refs.upload.handleClearFileList(), this.loadAttachments(), this.loadMediaTypes()
                }, handleJudgeMediaType: function (a) {
                    var t = a.mediaType;
                    if (t) {
                        var e = t.split("/")[0];
                        return "image" === e
                    }
                    return !1
                }
            }
        }, c = d, u = e("2877"), p = Object(u["a"])(c, i, n, !1, null, null, null);
        t["default"] = p.exports
    }
}]);