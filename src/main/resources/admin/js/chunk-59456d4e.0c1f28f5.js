(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-59456d4e"], {
    3993: function (t, e, a) {
        "use strict";
        var i = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("a-drawer", {
                attrs: {
                    title: t.title,
                    width: t.isMobile() ? "100%" : t.drawerWidth,
                    closable: "",
                    visible: t.visible,
                    destroyOnClose: ""
                }, on: {close: t.onClose}
            }, [a("a-row", {attrs: {type: "flex", align: "middle"}}, [a("a-input-search", {
                attrs: {
                    placeholder: "搜索附件",
                    enterButton: ""
                }
            })], 1), a("a-divider"), a("a-row", {
                attrs: {
                    type: "flex",
                    align: "middle"
                }
            }, [a("a-skeleton", {
                attrs: {
                    active: "",
                    loading: t.skeletonLoading,
                    paragraph: {rows: 18}
                }
            }, [a("a-col", {attrs: {span: 24}}, t._l(t.attachments, function (e, i) {
                return a("div", {
                    key: i, staticClass: "attach-item", on: {
                        click: function (a) {
                            return t.handleSelectAttachment(e)
                        }
                    }
                }, [a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.handleJudgeMediaType(e),
                        expression: "!handleJudgeMediaType(item)"
                    }]
                }, [t._v("当前格式不支持预览")]), a("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.handleJudgeMediaType(e),
                        expression: "handleJudgeMediaType(item)"
                    }], attrs: {src: e.thumbPath}
                })])
            }), 0)], 1)], 1), a("a-divider"), a("div", {staticClass: "page-wrapper"}, [a("a-pagination", {
                attrs: {
                    defaultPageSize: t.pagination.size,
                    total: t.pagination.total
                }, on: {change: t.handlePaginationChange}
            })], 1), a("a-divider", {staticClass: "divider-transparent"}), a("div", {staticClass: "bottom-control"}, [t.isChooseAvatar ? a("a-button", {
                staticStyle: {marginRight: "8px"},
                attrs: {type: "dashed"},
                on: {click: t.handleSelectGravatar}
            }, [t._v("使用 Gravatar")]) : t._e(), a("a-button", {
                attrs: {type: "primary"},
                on: {click: t.handleShowUploadModal}
            }, [t._v("上传附件")])], 1)], 1), a("a-modal", {
                attrs: {
                    title: "上传附件",
                    footer: null,
                    afterClose: t.onUploadClose,
                    destroyOnClose: ""
                }, model: {
                    value: t.uploadVisible, callback: function (e) {
                        t.uploadVisible = e
                    }, expression: "uploadVisible"
                }
            }, [a("FilePondUpload", {ref: "upload", attrs: {uploadHandler: t.uploadHandler}})], 1)], 1)
        }, o = [], n = (a("28a5"), a("c5f6"), a("ac0d")), s = a("a796"), l = {
            name: "AttachmentSelectDrawer",
            mixins: [n["a"], n["b"]],
            model: {prop: "visible", event: "close"},
            props: {
                visible: {type: Boolean, required: !1, default: !1},
                drawerWidth: {type: Number, required: !1, default: 460},
                title: {type: String, required: !1, default: "选择附件"},
                isChooseAvatar: {type: Boolean, required: !1, default: !1}
            },
            data: function () {
                return {
                    uploadVisible: !1,
                    skeletonLoading: !0,
                    pagination: {page: 1, size: 12, sort: ""},
                    attachments: [],
                    uploadHandler: s["a"].upload
                }
            },
            created: function () {
                this.loadSkeleton(), this.loadAttachments()
            },
            watch: {
                visible: function (t, e) {
                    t && this.loadSkeleton()
                }
            },
            methods: {
                loadSkeleton: function () {
                    var t = this;
                    this.skeletonLoading = !0, setTimeout(function () {
                        t.skeletonLoading = !1
                    }, 500)
                }, handleShowUploadModal: function () {
                    this.uploadVisible = !0
                }, loadAttachments: function () {
                    var t = this, e = Object.assign({}, this.pagination);
                    e.page--, s["a"].query(e).then(function (e) {
                        t.attachments = e.data.data.content, t.pagination.total = e.data.data.total
                    })
                }, handleSelectAttachment: function (t) {
                    this.$emit("listenToSelect", t)
                }, handleSelectGravatar: function () {
                    this.$emit("listenToSelectGravatar")
                }, handlePaginationChange: function (t, e) {
                    this.pagination.page = t, this.pagination.size = e, this.loadAttachments()
                }, handleAttachmentUploadSuccess: function () {
                    this.$message.success("上传成功！"), this.loadAttachments()
                }, onUploadClose: function () {
                    this.$refs.upload.handleClearFileList(), this.loadSkeleton(), this.loadAttachments()
                }, handleJudgeMediaType: function (t) {
                    var e = t.mediaType;
                    if (e) {
                        var a = e.split("/")[0];
                        return "image" === a
                    }
                    return !1
                }, onClose: function () {
                    this.$emit("close", !1)
                }
            }
        }, r = l, c = a("2877"), d = Object(c["a"])(r, i, o, !1, null, null, null);
        e["a"] = d.exports
    }, "6d0d": function (t, e, a) {
        "use strict";
        a.r(e);
        var i = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "page-header-index-wide"}, [a("a-row", {
                attrs: {
                    gutter: 12,
                    type: "flex",
                    align: "middle"
                }
            }, [a("a-col", {staticClass: "search-box", attrs: {span: 24}}, [a("a-card", {
                attrs: {
                    bordered: !1,
                    bodyStyle: {padding: "16px"}
                }
            }, [a("div", {staticClass: "table-page-search-wrapper"}, [a("a-form", {attrs: {layout: "inline"}}, [a("a-row", {attrs: {gutter: 48}}, [a("a-col", {
                attrs: {
                    md: 6,
                    sm: 24
                }
            }, [a("a-form-item", {attrs: {label: "关键词"}}, [a("a-input", {
                model: {
                    value: t.queryParam.keyword,
                    callback: function (e) {
                        t.$set(t.queryParam, "keyword", e)
                    },
                    expression: "queryParam.keyword"
                }
            })], 1)], 1), a("a-col", {
                attrs: {
                    md: 6,
                    sm: 24
                }
            }, [a("a-form-item", {attrs: {label: "分组"}}, [a("a-select", {
                on: {
                    change: function (e) {
                        return t.loadPhotos(!0)
                    }
                }, model: {
                    value: t.queryParam.team, callback: function (e) {
                        t.$set(t.queryParam, "team", e)
                    }, expression: "queryParam.team"
                }
            }, t._l(t.teams, function (e, i) {
                return a("a-select-option", {key: i, attrs: {value: e}}, [t._v(t._s(e))])
            }), 1)], 1)], 1), a("a-col", {
                attrs: {
                    md: 6,
                    sm: 24
                }
            }, [a("span", {staticClass: "table-page-search-submitButtons"}, [a("a-button", {
                attrs: {type: "primary"},
                on: {
                    click: function (e) {
                        return t.loadPhotos(!0)
                    }
                }
            }, [t._v("查询")]), a("a-button", {
                staticStyle: {"margin-left": "8px"},
                on: {click: t.resetParam}
            }, [t._v("重置")])], 1)])], 1)], 1)], 1), a("div", {staticClass: "table-operator"}, [a("a-button", {
                attrs: {
                    type: "primary",
                    icon: "plus"
                }, on: {click: t.handleAddClick}
            }, [t._v("添加")])], 1)])], 1), a("a-col", {attrs: {span: 24}}, [a("a-list", {
                attrs: {
                    grid: {
                        gutter: 12,
                        xs: 2,
                        sm: 2,
                        md: 4,
                        lg: 6,
                        xl: 6,
                        xxl: 6
                    }, dataSource: t.photos, loading: t.listLoading
                }, scopedSlots: t._u([{
                    key: "renderItem", fn: function (e, i) {
                        return a("a-list-item", {key: i}, [a("a-card", {
                            attrs: {bodyStyle: {padding: 0}, hoverable: ""},
                            on: {
                                click: function (a) {
                                    return t.showDrawer(e)
                                }
                            }
                        }, [a("div", {staticClass: "photo-thumb"}, [a("img", {attrs: {src: e.thumbnail}})]), a("a-card-meta", [a("ellipsis", {
                            attrs: {
                                slot: "description",
                                length: t.isMobile() ? 12 : 16,
                                tooltip: ""
                            }, slot: "description"
                        }, [t._v(t._s(e.name))])], 1)], 1)], 1)
                    }
                }])
            })], 1)], 1), a("div", {staticClass: "page-wrapper"}, [a("a-pagination", {
                attrs: {
                    total: t.pagination.total,
                    defaultPageSize: t.pagination.size,
                    pageSizeOptions: ["18", "36", "54", "72", "90", "108"],
                    showSizeChanger: ""
                }, on: {change: t.handlePaginationChange, showSizeChange: t.handlePaginationChange}
            })], 1), a("a-drawer", {
                attrs: {
                    title: "图片详情",
                    width: t.isMobile() ? "100%" : "460",
                    closable: "",
                    visible: t.drawerVisible,
                    destroyOnClose: ""
                }, on: {close: t.onDrawerClose}
            }, [a("a-row", {
                attrs: {
                    type: "flex",
                    align: "middle"
                }
            }, [a("a-col", {attrs: {span: 24}}, [a("a-skeleton", {
                attrs: {
                    active: "",
                    loading: t.drawerLoading,
                    paragraph: {rows: 8}
                }
            }, [a("div", {staticClass: "photo-detail-img"}, [a("img", {
                attrs: {src: t.photo.url || "//i.loli.net/2019/05/05/5ccf007c0a01d.png"},
                on: {click: t.showThumbDrawer}
            })])])], 1), a("a-divider"), a("a-col", {attrs: {span: 24}}, [a("a-skeleton", {
                attrs: {
                    active: "",
                    loading: t.drawerLoading,
                    paragraph: {rows: 8}
                }
            }, [a("a-list", {attrs: {itemLayout: "horizontal"}}, [a("a-list-item", [a("a-list-item-meta", [t.editable ? a("template", {slot: "description"}, [a("a-input", {
                model: {
                    value: t.photo.thumbnail,
                    callback: function (e) {
                        t.$set(t.photo, "thumbnail", e)
                    },
                    expression: "photo.thumbnail"
                }
            })], 1) : a("template", {slot: "description"}, [t._v(t._s(t.photo.thumbnail))]), a("span", {
                attrs: {slot: "title"},
                slot: "title"
            }, [t._v("\n                  缩略图地址：\n                ")])], 2)], 1), a("a-list-item", [a("a-list-item-meta", [t.editable ? a("template", {slot: "description"}, [a("a-input", {
                model: {
                    value: t.photo.name,
                    callback: function (e) {
                        t.$set(t.photo, "name", e)
                    },
                    expression: "photo.name"
                }
            })], 1) : a("template", {slot: "description"}, [t._v(t._s(t.photo.name))]), a("span", {
                attrs: {slot: "title"},
                slot: "title"
            }, [t._v("\n                  图片名称：\n                ")])], 2)], 1), a("a-list-item", [a("a-list-item-meta", [t.editable ? a("template", {slot: "description"}, [a("a-date-picker", {
                staticStyle: {width: "100%"},
                model: {
                    value: t.photo.takeTime, callback: function (e) {
                        t.$set(t.photo, "takeTime", e)
                    }, expression: "photo.takeTime"
                }
            })], 1) : a("span", {
                attrs: {slot: "description"},
                slot: "description"
            }, [t._v(t._s(t._f("moment")(t.photo.takeTime)))]), a("span", {
                attrs: {slot: "title"},
                slot: "title"
            }, [t._v("拍摄日期：")])], 2)], 1), a("a-list-item", [a("a-list-item-meta", [t.editable ? a("template", {slot: "description"}, [a("a-input", {
                model: {
                    value: t.photo.location,
                    callback: function (e) {
                        t.$set(t.photo, "location", e)
                    },
                    expression: "photo.location"
                }
            })], 1) : a("span", {
                attrs: {slot: "description"},
                slot: "description"
            }, [t._v(t._s(t.photo.location || "无"))]), a("span", {
                attrs: {slot: "title"},
                slot: "title"
            }, [t._v("拍摄地点：")])], 2)], 1), a("a-list-item", [a("a-list-item-meta", [t.editable ? a("template", {slot: "description"}, [a("a-input", {
                model: {
                    value: t.photo.team,
                    callback: function (e) {
                        t.$set(t.photo, "team", e)
                    },
                    expression: "photo.team"
                }
            })], 1) : a("span", {
                attrs: {slot: "description"},
                slot: "description"
            }, [t._v(t._s(t.photo.team || "无"))]), a("span", {
                attrs: {slot: "title"},
                slot: "title"
            }, [t._v("分组：")])], 2)], 1), a("a-list-item", [a("a-list-item-meta", [t.editable ? a("template", {slot: "description"}, [a("a-input", {
                attrs: {
                    type: "textarea",
                    autosize: {minRows: 5}
                }, model: {
                    value: t.photo.description, callback: function (e) {
                        t.$set(t.photo, "description", e)
                    }, expression: "photo.description"
                }
            })], 1) : a("span", {
                attrs: {slot: "description"},
                slot: "description"
            }, [t._v(t._s(t.photo.description || "无"))]), a("span", {
                attrs: {slot: "title"},
                slot: "title"
            }, [t._v("描述：")])], 2)], 1)], 1)], 1)], 1)], 1), a("AttachmentSelectDrawer", {
                attrs: {drawerWidth: 460},
                on: {listenToSelect: t.selectPhotoThumb},
                model: {
                    value: t.thumDrawerVisible, callback: function (e) {
                        t.thumDrawerVisible = e
                    }, expression: "thumDrawerVisible"
                }
            }), a("a-divider", {staticClass: "divider-transparent"}), a("div", {staticClass: "bottom-control"}, [t.editable ? a("a-button", {
                staticStyle: {marginRight: "8px"},
                attrs: {type: "primary"},
                on: {click: t.handleCreateOrUpdate}
            }, [t._v("保存")]) : a("a-button", {
                staticStyle: {marginRight: "8px"},
                attrs: {type: "dashed"},
                on: {click: t.handleEditClick}
            }, [t._v("编辑")]), a("a-popconfirm", {
                attrs: {title: "你确定要删除该图片？", okText: "确定", cancelText: "取消"},
                on: {confirm: t.handleDeletePhoto}
            }, [a("a-button", {attrs: {type: "danger"}}, [t._v("删除")])], 1)], 1)], 1)], 1)
        }, o = [], n = (a("55dd"), a("ac0d")), s = a("3993"), l = a("975e"), r = {
            components: {AttachmentSelectDrawer: s["a"]}, mixins: [n["a"], n["b"]], data: function () {
                return {
                    drawerVisible: !1,
                    drawerLoading: !1,
                    listLoading: !0,
                    thumDrawerVisible: !1,
                    photo: {},
                    photos: [],
                    teams: [],
                    editable: !1,
                    pagination: {page: 1, size: 18, sort: null},
                    queryParam: {page: 0, size: 18, sort: null, keyword: null, team: null}
                }
            }, created: function () {
                this.loadPhotos(), this.loadTeams()
            }, methods: {
                loadPhotos: function (t) {
                    var e = this;
                    this.queryParam.page = this.pagination.page - 1, this.queryParam.size = this.pagination.size, this.queryParam.sort = this.pagination.sort, t && (this.queryParam.page = 0), this.listLoading = !0, l["a"].query(this.queryParam).then(function (t) {
                        e.photos = t.data.data.content, e.pagination.total = t.data.data.total, e.listLoading = !1
                    })
                }, loadTeams: function () {
                    var t = this;
                    l["a"].listTeams().then(function (e) {
                        t.teams = e.data.data
                    })
                }, handleCreateOrUpdate: function () {
                    var t = this;
                    this.photo.id ? l["a"].update(this.photo.id, this.photo).then(function (e) {
                        t.$message.success("照片更新成功！"), t.loadPhotos()
                    }) : l["a"].create(this.photo).then(function (e) {
                        t.$message.success("照片添加成功！"), t.loadPhotos(), t.photo = e.data.data
                    }), this.editable = !1
                }, showDrawer: function (t) {
                    this.photo = t, this.drawerVisible = !0
                }, handlePaginationChange: function (t, e) {
                    this.$log.debug("Current: ".concat(t, ", PageSize: ").concat(e)), this.pagination.page = t, this.pagination.size = e, this.loadPhotos()
                }, handleAddClick: function () {
                    this.editable = !0, this.drawerVisible = !0
                }, handleEditClick: function () {
                    this.editable = !0
                }, handleDeletePhoto: function () {
                    var t = this;
                    l["a"].delete(this.photo.id).then(function (e) {
                        t.$message.success("删除成功！"), t.onDrawerClose(), t.loadPhotos()
                    })
                }, showThumbDrawer: function () {
                    this.thumDrawerVisible = !0
                }, selectPhotoThumb: function (t) {
                    this.photo.url = encodeURI(t.path), this.photo.thumbnail = encodeURI(t.thumbPath), this.thumDrawerVisible = !1
                }, resetParam: function () {
                    this.queryParam.keyword = null, this.queryParam.team = null, this.loadPhotos(), this.loadTeams()
                }, onDrawerClose: function () {
                    this.drawerVisible = !1, this.photo = {}, this.editable = !1
                }
            }
        }, c = r, d = (a("7d99"), a("2877")), p = Object(d["a"])(c, i, o, !1, null, "5d506604", null);
        e["default"] = p.exports
    }, "7d99": function (t, e, a) {
        "use strict";
        var i = a("bbf3"), o = a.n(i);
        o.a
    }, "975e": function (t, e, a) {
        "use strict";
        var i = a("9efd"), o = "/api/admin/photos", n = {
            query: function (t) {
                return Object(i["a"])({url: o, params: t, method: "get"})
            }, create: function (t) {
                return Object(i["a"])({url: o, data: t, method: "post"})
            }, update: function (t, e) {
                return Object(i["a"])({url: "".concat(o, "/").concat(t), method: "put", data: e})
            }, delete: function (t) {
                return Object(i["a"])({url: "".concat(o, "/").concat(t), method: "delete"})
            }, listTeams: function () {
                return Object(i["a"])({url: "".concat(o, "/teams"), method: "get"})
            }
        };
        e["a"] = n
    }, a796: function (t, e, a) {
        "use strict";
        var i = a("bc3a"), o = a.n(i), n = a("9efd"), s = "/api/admin/attachments", l = {
            query: function (t) {
                return Object(n["a"])({url: s, params: t, method: "get"})
            }, get: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t), method: "get"})
            }, delete: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t), method: "delete"})
            }, update: function (t, e) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t), method: "put", data: e})
            }, getMediaTypes: function () {
                return Object(n["a"])({url: "".concat(s, "/media_types"), method: "get"})
            }
        };
        l.CancelToken = o.a.CancelToken, l.isCancel = o.a.isCancel, l.upload = function (t, e, a) {
            return Object(n["a"])({
                url: "".concat(s, "/upload"),
                timeout: 864e4,
                data: t,
                onUploadProgress: e,
                cancelToken: a,
                method: "post"
            })
        }, l.uploads = function (t, e, a) {
            return Object(n["a"])({
                url: "".concat(s, "/uploads"),
                timeout: 864e4,
                data: t,
                onUploadProgress: e,
                cancelToken: a,
                method: "post"
            })
        }, l.type = {
            LOCAL: {type: "local", text: "本地"},
            SMMS: {type: "smms", text: "SM.MS"},
            UPYUN: {type: "upyun", text: "又拍云"},
            QNYUN: {type: "qnyun", text: "七牛云"},
            ALIYUN: {type: "aliyun", text: "阿里云"},
            BAIDUYUN: {type: "baiduyun", text: "百度云"},
            TENCENTYUN: {type: "tencentyun", text: "腾讯云"}
        }, e["a"] = l
    }, bbf3: function (t, e, a) {
    }
}]);