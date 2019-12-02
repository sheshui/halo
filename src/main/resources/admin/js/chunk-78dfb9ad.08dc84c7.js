(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-78dfb9ad"], {
    "12de": function (t, e, a) {
        "use strict";
        var n = a("9efd"), s = "/api/admin/themes", i = {
            listAll: function () {
                return Object(n["a"])({url: "".concat(s), method: "get"})
            }, listFilesActivated: function () {
                return Object(n["a"])({url: "".concat(s, "/activation/files"), method: "get"})
            }, listFiles: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t, "/files"), method: "get"})
            }, customTpls: function () {
                return Object(n["a"])({url: "".concat(s, "/files/custom"), method: "get"})
            }, active: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t, "/activation"), method: "post"})
            }, getActivatedTheme: function () {
                return Object(n["a"])({url: "".concat(s, "/activation"), method: "get"})
            }, update: function (t) {
                return Object(n["a"])({url: "".concat(s, "/fetching/").concat(t), timeout: 6e4, method: "put"})
            }, delete: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t), method: "delete"})
            }, fetchConfiguration: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t, "/configurations"), method: "get"})
            }, fetchSettings: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t, "/settings"), method: "get"})
            }, saveSettings: function (t, e) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t, "/settings"), data: e, method: "post"})
            }, getProperty: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t), method: "get"})
            }, upload: function (t, e, a) {
                return Object(n["a"])({
                    url: "".concat(s, "/upload"),
                    timeout: 864e5,
                    data: t,
                    onUploadProgress: e,
                    cancelToken: a,
                    method: "post"
                })
            }, updateByUpload: function (t, e, a, i) {
                return Object(n["a"])({
                    url: "".concat(s, "/upload/").concat(i),
                    timeout: 864e5,
                    data: t,
                    onUploadProgress: e,
                    cancelToken: a,
                    method: "put"
                })
            }, fetching: function (t) {
                return Object(n["a"])({url: "".concat(s, "/fetching"), timeout: 6e4, params: {uri: t}, method: "post"})
            }, getContent: function (t) {
                return Object(n["a"])({url: "".concat(s, "/files/content"), params: {path: t}, method: "get"})
            }
        };
        i.getContent = function (t, e) {
            return Object(n["a"])({
                url: "".concat(s, "/").concat(t, "/files/content"),
                params: {path: e},
                method: "get"
            })
        }, i.saveContent = function (t, e) {
            return Object(n["a"])({url: "".concat(s, "/files/content"), data: {path: t, content: e}, method: "put"})
        }, i.saveContent = function (t, e, a) {
            return Object(n["a"])({
                url: "".concat(s, "/").concat(t, "/files/content"),
                data: {path: e, content: a},
                method: "put"
            })
        }, i.reload = function () {
            return Object(n["a"])({url: "".concat(s, "/reload"), method: "post"})
        }, i.exists = function (t) {
            return Object(n["a"])({
                url: "".concat(s, "/activation/template/exists"),
                method: "get",
                params: {template: t}
            })
        }, e["a"] = i
    }, ed66: function (t, e, a) {
        "use strict";
        var n = a("9efd"), s = "/api/admin/sheets", i = {
            list: function () {
                return Object(n["a"])({url: s, method: "get"})
            },
            listInternal: function () {
                return Object(n["a"])({url: "".concat(s, "/internal"), method: "get"})
            },
            get: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t), method: "get"})
            },
            create: function (t, e) {
                return Object(n["a"])({url: s, method: "post", data: t, params: {autoSave: e}})
            },
            update: function (t, e, a) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t), method: "put", data: e, params: {autoSave: a}})
            },
            updateStatus: function (t, e) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t, "/").concat(e), method: "put"})
            },
            delete: function (t) {
                return Object(n["a"])({url: "".concat(s, "/").concat(t), method: "delete"})
            },
            preview: function (t) {
                return Object(n["a"])({url: "".concat(s, "/preview/").concat(t), method: "get"})
            },
            sheetStatus: {
                PUBLISHED: {color: "green", status: "success", text: "已发布"},
                DRAFT: {color: "yellow", status: "warning", text: "草稿"},
                RECYCLE: {color: "red", status: "error", text: "回收站"}
            }
        };
        e["a"] = i
    }, f542: function (t, e, a) {
        "use strict";
        var n = function () {
                var t = this, e = this, a = e.$createElement, n = e._self._c || a;
                return n("a-drawer", {
                    attrs: {
                        title: "页面设置",
                        width: e.isMobile() ? "100%" : "460",
                        placement: "right",
                        closable: "",
                        destroyOnClose: "",
                        visible: e.visible
                    }, on: {close: e.onClose}
                }, [n("a-skeleton", {
                    attrs: {
                        active: "",
                        loading: e.settingLoading,
                        paragraph: {rows: 18}
                    }
                }, [n("div", {staticClass: "post-setting-drawer-content"}, [n("div", {style: {marginBottom: "16px"}}, [n("h3", {staticClass: "post-setting-drawer-title"}, [e._v("基本设置")]), n("div", {staticClass: "post-setting-drawer-item"}, [n("a-form", {attrs: {layout: "vertical"}}, [e.needTitle ? n("a-form-item", {attrs: {label: "页面标题："}}, [n("a-input", {
                    model: {
                        value: e.selectedSheet.title,
                        callback: function (t) {
                            e.$set(e.selectedSheet, "title", t)
                        },
                        expression: "selectedSheet.title"
                    }
                })], 1) : e._e(), n("a-form-item", {
                    attrs: {
                        label: "页面路径：",
                        help: e.options.blog_url + "/s/" + (e.selectedSheet.url ? e.selectedSheet.url : "{auto_generate}")
                    }
                }, [n("a-input", {
                    model: {
                        value: e.selectedSheet.url, callback: function (t) {
                            e.$set(e.selectedSheet, "url", t)
                        }, expression: "selectedSheet.url"
                    }
                })], 1), n("a-form-item", {attrs: {label: "发表时间："}}, [n("a-date-picker", {
                    attrs: {
                        showTime: "",
                        defaultValue: e.pickerDefaultValue,
                        format: "YYYY-MM-DD HH:mm:ss",
                        placeholder: "选择页面发表时间"
                    }, on: {change: e.onSheetDateChange, ok: e.onSheetDateOk}
                })], 1), n("a-form-item", {attrs: {label: "开启评论："}}, [n("a-radio-group", {
                    attrs: {defaultValue: !1},
                    model: {
                        value: e.selectedSheet.disallowComment, callback: function (t) {
                            e.$set(e.selectedSheet, "disallowComment", t)
                        }, expression: "selectedSheet.disallowComment"
                    }
                }, [n("a-radio", {attrs: {value: !1}}, [e._v("开启")]), n("a-radio", {attrs: {value: !0}}, [e._v("关闭")])], 1)], 1), n("a-form-item", {attrs: {label: "自定义模板："}}, [n("a-select", {
                    model: {
                        value: e.selectedSheet.template,
                        callback: function (t) {
                            e.$set(e.selectedSheet, "template", t)
                        },
                        expression: "selectedSheet.template"
                    }
                }, [n("a-select-option", {key: "", attrs: {value: ""}}, [e._v("无")]), e._l(e.customTpls, function (t) {
                    return n("a-select-option", {key: t, attrs: {value: t}}, [e._v(e._s(t))])
                })], 2)], 1)], 1)], 1)]), n("a-divider"), n("div", {style: {marginBottom: "16px"}}, [n("h3", {staticClass: "post-setting-drawer-title"}, [e._v("缩略图")]), n("div", {staticClass: "post-setting-drawer-item"}, [n("div", {staticClass: "sheet-thumb"}, [n("img", {
                    staticClass: "img",
                    attrs: {src: e.selectedSheet.thumbnail || "//i.loli.net/2019/05/05/5ccf007c0a01d.png"},
                    on: {
                        click: function () {
                            return t.thumbDrawerVisible = !0
                        }
                    }
                }), n("a-button", {
                    staticClass: "sheet-thumb-remove",
                    attrs: {type: "dashed"},
                    on: {click: e.handlerRemoveThumb}
                }, [e._v("移除")])], 1)])]), n("a-divider", {staticClass: "divider-transparent"})], 1)]), n("AttachmentSelectDrawer", {
                    attrs: {drawerWidth: 460},
                    on: {listenToSelect: e.handleSelectSheetThumb},
                    model: {
                        value: e.thumbDrawerVisible, callback: function (t) {
                            e.thumbDrawerVisible = t
                        }, expression: "thumbDrawerVisible"
                    }
                }), n("div", {staticClass: "bottom-control"}, [n("a-button", {
                    staticStyle: {marginRight: "8px"},
                    on: {click: e.handleDraftClick}
                }, [e._v("保存草稿")]), n("a-button", {
                    attrs: {type: "primary"},
                    on: {click: e.handlePublishClick}
                }, [e._v("发布")])], 1)], 1)
            }, s = [], i = a("cebc"), o = a("ac0d"), c = a("c1df"), r = a.n(c), l = a("3993"), h = a("2f62"), u = a("12de"),
            d = a("ed66"), m = {
                name: "SheetSetting",
                mixins: [o["a"], o["b"]],
                components: {AttachmentSelectDrawer: l["a"]},
                data: function () {
                    return {thumbDrawerVisible: !1, settingLoading: !0, selectedSheet: this.sheet, customTpls: []}
                },
                props: {
                    sheet: {type: Object, required: !0},
                    needTitle: {type: Boolean, required: !1, default: !1},
                    visible: {type: Boolean, required: !1, default: !0}
                },
                created: function () {
                    this.loadSkeleton(), this.loadCustomTpls()
                },
                watch: {
                    sheet: function (t) {
                        this.selectedSheet = t
                    }, selectedSheet: function (t) {
                        this.$emit("onRefreshSheet", t)
                    }, visible: function (t, e) {
                        t && this.loadSkeleton()
                    }
                },
                computed: Object(i["a"])({
                    pickerDefaultValue: function () {
                        if (this.selectedSheet.createTime) {
                            var t = new Date(this.selectedSheet.createTime);
                            return r()(t, "YYYY-MM-DD HH:mm:ss")
                        }
                        return r()(new Date, "YYYY-MM-DD HH:mm:ss")
                    }
                }, Object(h["c"])(["options"])),
                methods: {
                    loadSkeleton: function () {
                        var t = this;
                        this.settingLoading = !0, setTimeout(function () {
                            t.settingLoading = !1
                        }, 500)
                    }, loadCustomTpls: function () {
                        var t = this;
                        u["a"].customTpls().then(function (e) {
                            t.customTpls = e.data.data
                        })
                    }, handleSelectSheetThumb: function (t) {
                        this.selectedSheet.thumbnail = encodeURI(t.path), this.thumbDrawerVisible = !1
                    }, handlerRemoveThumb: function () {
                        this.selectedSheet.thumbnail = null
                    }, handlePublishClick: function () {
                        this.selectedSheet.status = "PUBLISHED", this.saveSheet()
                    }, handleDraftClick: function () {
                        this.selectedSheet.status = "DRAFT", this.saveSheet()
                    }, saveSheet: function () {
                        var t = this;
                        this.createOrUpdateSheet(function () {
                            return t.$message.success("页面发布成功！")
                        }, function () {
                            return t.$message.success("页面发布成功！")
                        }, !1)
                    }, createOrUpdateSheet: function (t, e, a) {
                        var n = this;
                        this.selectedSheet.title ? this.selectedSheet.originalContent ? this.selectedSheet.id ? d["a"].update(this.selectedSheet.id, this.selectedSheet, a).then(function (t) {
                            n.$log.debug("Updated sheet", t.data.data), e && e()
                        }) : d["a"].create(this.selectedSheet, a).then(function (e) {
                            n.$log.debug("Created sheet", e.data.data), t && t(), n.selectedSheet = e.data.data
                        }) : this.$notification["error"]({
                            message: "提示",
                            description: "页面内容不能为空！"
                        }) : this.$notification["error"]({message: "提示", description: "页面标题不能为空！"})
                    }, onClose: function () {
                        this.$emit("close", !1)
                    }, onSheetDateChange: function (t, e) {
                        this.selectedSheet.createTime = t.valueOf()
                    }, onSheetDateOk: function (t) {
                        this.selectedSheet.createTime = t.valueOf()
                    }
                }
            }, f = m, g = a("2877"), p = Object(g["a"])(f, n, s, !1, null, null, null);
        e["a"] = p.exports
    }, f585: function (t, e, a) {
        "use strict";
        a.r(e);
        var n = function () {
                var t = this, e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "page-header-index-wide"}, [n("a-row", {attrs: {gutter: 12}}, [n("a-col", {attrs: {span: 24}}, [n("div", {staticStyle: {"margin-bottom": "16px"}}, [n("a-input", {
                    directives: [{
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["title", {rules: [{required: !0, message: "请输入页面标题"}]}],
                        expression: "['title', { rules: [{ required: true, message: '请输入页面标题' }] }]"
                    }],
                    attrs: {size: "large", placeholder: "请输入页面标题"},
                    model: {
                        value: e.sheetToStage.title, callback: function (t) {
                            e.$set(e.sheetToStage, "title", t)
                        }, expression: "sheetToStage.title"
                    }
                })], 1), n("div", {attrs: {id: "editor"}}, [n("halo-editor", {
                    ref: "md",
                    attrs: {boxShadow: !1, toolbars: e.toolbars, ishljs: !0, autofocus: !1},
                    on: {imgAdd: e.handleAttachmentUpload},
                    nativeOn: {
                        keydown: [function (t) {
                            return (t.type.indexOf("key") || 83 === t.keyCode) && t.ctrlKey ? e.handleSaveDraft(t) : null
                        }, function (t) {
                            return (t.type.indexOf("key") || 83 === t.keyCode) && t.metaKey ? e.handleSaveDraft(t) : null
                        }]
                    },
                    model: {
                        value: e.sheetToStage.originalContent, callback: function (t) {
                            e.$set(e.sheetToStage, "originalContent", t)
                        }, expression: "sheetToStage.originalContent"
                    }
                })], 1)])], 1), n("SheetSetting", {
                    attrs: {sheet: e.sheetToStage, visible: e.sheetSettingVisible},
                    on: {close: e.onSheetSettingsClose, onRefreshSheet: e.onRefreshSheetFromSetting}
                }), n("AttachmentDrawer", {
                    model: {
                        value: e.attachmentDrawerVisible, callback: function (t) {
                            e.attachmentDrawerVisible = t
                        }, expression: "attachmentDrawerVisible"
                    }
                }), n("footer-tool-bar", {style: {width: e.isSideMenu() && e.isDesktop() ? "calc(100% - " + (e.sidebarOpened ? 256 : 80) + "px)" : "100%"}}, [n("a-button", {
                    attrs: {type: "danger"},
                    on: {click: e.handleSaveDraft}
                }, [e._v("保存草稿")]), n("a-button", {
                    staticStyle: {"margin-left": "8px"},
                    on: {click: e.handlePreview}
                }, [e._v("预览")]), n("a-button", {
                    staticStyle: {"margin-left": "8px"},
                    attrs: {type: "primary"},
                    on: {click: e.handleShowSheetSetting}
                }, [e._v("发布")]), n("a-button", {
                    staticStyle: {"margin-left": "8px"},
                    attrs: {type: "dashed"},
                    on: {
                        click: function () {
                            return t.attachmentDrawerVisible = !0
                        }
                    }
                }, [e._v("附件库")])], 1)], 1)
            }, s = [], i = a("cebc"), o = a("ac0d"), c = a("2f62"), r = a("c1df"), l = a.n(r), h = a("2749"), u = a("f542"),
            d = a("ed4e"), m = a("5a70"), f = a("6ea2"), g = (a("6648"), a("ed66")), p = a("a796"), S = {
                components: {
                    haloEditor: f["haloEditor"],
                    FooterToolBar: m["a"],
                    AttachmentDrawer: d["a"],
                    SheetSetting: u["a"]
                }, mixins: [o["a"], o["b"]], data: function () {
                    return {
                        toolbars: h["a"],
                        wrapperCol: {xl: {span: 24}, sm: {span: 24}, xs: {span: 24}},
                        attachmentDrawerVisible: !1,
                        sheetSettingVisible: !1,
                        sheetToStage: {}
                    }
                }, beforeRouteEnter: function (t, e, a) {
                    var n = t.query.sheetId;
                    a(function (t) {
                        n && g["a"].get(n).then(function (e) {
                            var a = e.data.data;
                            t.sheetToStage = a
                        })
                    })
                }, destroyed: function () {
                    this.sheetSettingVisible && (this.sheetSettingVisible = !1), this.attachmentDrawerVisible && (this.attachmentDrawerVisible = !1)
                }, beforeRouteLeave: function (t, e, a) {
                    this.sheetSettingVisible && (this.sheetSettingVisible = !1), this.attachmentDrawerVisible && (this.attachmentDrawerVisible = !1), a()
                }, computed: Object(i["a"])({}, Object(c["c"])(["options"])), methods: {
                    handleSaveDraft: function () {
                        var t = this;
                        this.sheetToStage.status = "DRAFT", this.sheetToStage.title || (this.sheetToStage.title = l()(new Date).format("YYYY-MM-DD-HH-mm-ss")), this.sheetToStage.originalContent || (this.sheetToStage.originalContent = "开始编辑..."), this.sheetToStage.id ? g["a"].update(this.sheetToStage.id, this.sheetToStage, !1).then(function (e) {
                            t.$log.debug("Updated sheet", e.data.data), t.$message.success("保存草稿成功！")
                        }) : g["a"].create(this.sheetToStage, !1).then(function (e) {
                            t.$log.debug("Created sheet", e.data.data), t.$message.success("保存草稿成功！"), t.sheetToStage = e.data.data
                        })
                    }, handleAttachmentUpload: function (t, e) {
                        var a = this, n = new FormData;
                        n.append("file", e), p["a"].upload(n).then(function (e) {
                            var n = e.data;
                            if (200 === n.status) {
                                var s = a.$refs.md;
                                s.$img2Url(t, encodeURI(n.data.path)), a.$message.success("图片上传成功！")
                            } else a.$message.error("图片上传失败：" + n.message)
                        })
                    }, handleShowSheetSetting: function () {
                        this.sheetSettingVisible = !0
                    }, handlePreview: function () {
                        var t = this;
                        this.sheetToStage.status = "DRAFT", this.sheetToStage.title || (this.sheetToStage.title = l()(new Date).format("YYYY-MM-DD-HH-mm-ss")), this.sheetToStage.originalContent || (this.sheetToStage.originalContent = "开始编辑..."), this.sheetToStage.id ? g["a"].update(this.sheetToStage.id, this.sheetToStage, !1).then(function (e) {
                            t.$log.debug("Updated sheet", e.data.data), g["a"].preview(t.sheetToStage.id).then(function (t) {
                                window.open(t.data, "_blank")
                            })
                        }) : g["a"].create(this.sheetToStage, !1).then(function (e) {
                            t.$log.debug("Created sheet", e.data.data), t.sheetToStage = e.data.data, g["a"].preview(t.sheetToStage.id).then(function (t) {
                                window.open(t.data, "_blank")
                            })
                        })
                    }, onSheetSettingsClose: function () {
                        this.sheetSettingVisible = !1
                    }, onRefreshSheetFromSetting: function (t) {
                        this.sheetToStage = t
                    }
                }
            }, b = S, v = a("2877"), w = Object(v["a"])(b, n, s, !1, null, null, null);
        e["default"] = w.exports
    }
}]);