(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-f1c576e6"], {
    "12de": function (e, t, n) {
        "use strict";
        var a = n("9efd"), i = "/api/admin/themes", r = {
            listAll: function () {
                return Object(a["a"])({url: "".concat(i), method: "get"})
            }, listFilesActivated: function () {
                return Object(a["a"])({url: "".concat(i, "/activation/files"), method: "get"})
            }, listFiles: function (e) {
                return Object(a["a"])({url: "".concat(i, "/").concat(e, "/files"), method: "get"})
            }, customTpls: function () {
                return Object(a["a"])({url: "".concat(i, "/files/custom"), method: "get"})
            }, active: function (e) {
                return Object(a["a"])({url: "".concat(i, "/").concat(e, "/activation"), method: "post"})
            }, getActivatedTheme: function () {
                return Object(a["a"])({url: "".concat(i, "/activation"), method: "get"})
            }, update: function (e) {
                return Object(a["a"])({url: "".concat(i, "/fetching/").concat(e), timeout: 6e4, method: "put"})
            }, delete: function (e) {
                return Object(a["a"])({url: "".concat(i, "/").concat(e), method: "delete"})
            }, fetchConfiguration: function (e) {
                return Object(a["a"])({url: "".concat(i, "/").concat(e, "/configurations"), method: "get"})
            }, fetchSettings: function (e) {
                return Object(a["a"])({url: "".concat(i, "/").concat(e, "/settings"), method: "get"})
            }, saveSettings: function (e, t) {
                return Object(a["a"])({url: "".concat(i, "/").concat(e, "/settings"), data: t, method: "post"})
            }, getProperty: function (e) {
                return Object(a["a"])({url: "".concat(i, "/").concat(e), method: "get"})
            }, upload: function (e, t, n) {
                return Object(a["a"])({
                    url: "".concat(i, "/upload"),
                    timeout: 864e5,
                    data: e,
                    onUploadProgress: t,
                    cancelToken: n,
                    method: "post"
                })
            }, updateByUpload: function (e, t, n, r) {
                return Object(a["a"])({
                    url: "".concat(i, "/upload/").concat(r),
                    timeout: 864e5,
                    data: e,
                    onUploadProgress: t,
                    cancelToken: n,
                    method: "put"
                })
            }, fetching: function (e) {
                return Object(a["a"])({url: "".concat(i, "/fetching"), timeout: 6e4, params: {uri: e}, method: "post"})
            }, getContent: function (e) {
                return Object(a["a"])({url: "".concat(i, "/files/content"), params: {path: e}, method: "get"})
            }
        };
        r.getContent = function (e, t) {
            return Object(a["a"])({
                url: "".concat(i, "/").concat(e, "/files/content"),
                params: {path: t},
                method: "get"
            })
        }, r.saveContent = function (e, t) {
            return Object(a["a"])({url: "".concat(i, "/files/content"), data: {path: e, content: t}, method: "put"})
        }, r.saveContent = function (e, t, n) {
            return Object(a["a"])({
                url: "".concat(i, "/").concat(e, "/files/content"),
                data: {path: t, content: n},
                method: "put"
            })
        }, r.reload = function () {
            return Object(a["a"])({url: "".concat(i, "/reload"), method: "post"})
        }, r.exists = function (e) {
            return Object(a["a"])({
                url: "".concat(i, "/activation/template/exists"),
                method: "get",
                params: {template: e}
            })
        }, t["a"] = r
    }, "241a": function (e, t, n) {
        "use strict";
        var a = n("2f55"), i = n.n(a);
        i.a
    }, "2f55": function (e, t, n) {
    }, 3993: function (e, t, n) {
        "use strict";
        var a = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [n("a-drawer", {
                attrs: {
                    title: e.title,
                    width: e.isMobile() ? "100%" : e.drawerWidth,
                    closable: "",
                    visible: e.visible,
                    destroyOnClose: ""
                }, on: {close: e.onClose}
            }, [n("a-row", {attrs: {type: "flex", align: "middle"}}, [n("a-input-search", {
                attrs: {
                    placeholder: "搜索附件",
                    enterButton: ""
                }
            })], 1), n("a-divider"), n("a-row", {
                attrs: {
                    type: "flex",
                    align: "middle"
                }
            }, [n("a-skeleton", {
                attrs: {
                    active: "",
                    loading: e.skeletonLoading,
                    paragraph: {rows: 18}
                }
            }, [n("a-col", {attrs: {span: 24}}, e._l(e.attachments, function (t, a) {
                return n("div", {
                    key: a, staticClass: "attach-item", on: {
                        click: function (n) {
                            return e.handleSelectAttachment(t)
                        }
                    }
                }, [n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.handleJudgeMediaType(t),
                        expression: "!handleJudgeMediaType(item)"
                    }]
                }, [e._v("当前格式不支持预览")]), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.handleJudgeMediaType(t),
                        expression: "handleJudgeMediaType(item)"
                    }], attrs: {src: t.thumbPath}
                })])
            }), 0)], 1)], 1), n("a-divider"), n("div", {staticClass: "page-wrapper"}, [n("a-pagination", {
                attrs: {
                    defaultPageSize: e.pagination.size,
                    total: e.pagination.total
                }, on: {change: e.handlePaginationChange}
            })], 1), n("a-divider", {staticClass: "divider-transparent"}), n("div", {staticClass: "bottom-control"}, [e.isChooseAvatar ? n("a-button", {
                staticStyle: {marginRight: "8px"},
                attrs: {type: "dashed"},
                on: {click: e.handleSelectGravatar}
            }, [e._v("使用 Gravatar")]) : e._e(), n("a-button", {
                attrs: {type: "primary"},
                on: {click: e.handleShowUploadModal}
            }, [e._v("上传附件")])], 1)], 1), n("a-modal", {
                attrs: {
                    title: "上传附件",
                    footer: null,
                    afterClose: e.onUploadClose,
                    destroyOnClose: ""
                }, model: {
                    value: e.uploadVisible, callback: function (t) {
                        e.uploadVisible = t
                    }, expression: "uploadVisible"
                }
            }, [n("FilePondUpload", {ref: "upload", attrs: {uploadHandler: e.uploadHandler}})], 1)], 1)
        }, i = [], r = (n("28a5"), n("c5f6"), n("ac0d")), o = n("a796"), s = {
            name: "AttachmentSelectDrawer",
            mixins: [r["a"], r["b"]],
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
                    uploadHandler: o["a"].upload
                }
            },
            created: function () {
                this.loadSkeleton(), this.loadAttachments()
            },
            watch: {
                visible: function (e, t) {
                    e && this.loadSkeleton()
                }
            },
            methods: {
                loadSkeleton: function () {
                    var e = this;
                    this.skeletonLoading = !0, setTimeout(function () {
                        e.skeletonLoading = !1
                    }, 500)
                }, handleShowUploadModal: function () {
                    this.uploadVisible = !0
                }, loadAttachments: function () {
                    var e = this, t = Object.assign({}, this.pagination);
                    t.page--, o["a"].query(t).then(function (t) {
                        e.attachments = t.data.data.content, e.pagination.total = t.data.data.total
                    })
                }, handleSelectAttachment: function (e) {
                    this.$emit("listenToSelect", e)
                }, handleSelectGravatar: function () {
                    this.$emit("listenToSelectGravatar")
                }, handlePaginationChange: function (e, t) {
                    this.pagination.page = e, this.pagination.size = t, this.loadAttachments()
                }, handleAttachmentUploadSuccess: function () {
                    this.$message.success("上传成功！"), this.loadAttachments()
                }, onUploadClose: function () {
                    this.$refs.upload.handleClearFileList(), this.loadSkeleton(), this.loadAttachments()
                }, handleJudgeMediaType: function (e) {
                    var t = e.mediaType;
                    if (t) {
                        var n = t.split("/")[0];
                        return "image" === n
                    }
                    return !1
                }, onClose: function () {
                    this.$emit("close", !1)
                }
            }
        }, l = s, c = n("2877"), u = Object(c["a"])(l, a, i, !1, null, null, null);
        t["a"] = u.exports
    }, "79e7": function (e, t, n) {
        "use strict";
        n.r(t);
        var a = function () {
            var e = this, t = this, n = t.$createElement, a = t._self._c || n;
            return a("div", {staticClass: "page-header-index-wide"}, [a("a-row", {
                attrs: {
                    gutter: 12,
                    type: "flex",
                    align: "middle"
                }
            }, [a("a-col", {attrs: {span: 24}}, [a("a-list", {
                attrs: {
                    grid: {gutter: 12, xs: 1, sm: 1, md: 2, lg: 4, xl: 4, xxl: 4},
                    dataSource: t.sortedThemes,
                    loading: t.themeLoading
                }, scopedSlots: t._u([{
                    key: "renderItem", fn: function (e, n) {
                        return a("a-list-item", {key: n}, [a("a-card", {
                            attrs: {
                                hoverable: "",
                                title: e.name,
                                bodyStyle: {padding: 0}
                            }
                        }, [a("div", {staticClass: "theme-thumb"}, [a("img", {
                            attrs: {
                                alt: e.name,
                                src: e.screenshots
                            }
                        })]), a("template", {
                            staticClass: "ant-card-actions",
                            slot: "actions"
                        }, [e.activated ? a("div", [a("a-icon", {
                            staticStyle: {"margin-right": "3px"},
                            attrs: {type: "unlock", theme: "twoTone"}
                        }), t._v("已启用\n              ")], 1) : a("div", {
                            on: {
                                click: function (n) {
                                    return t.handleActivateClick(e)
                                }
                            }
                        }, [a("a-icon", {
                            staticStyle: {"margin-right": "3px"},
                            attrs: {type: "lock"}
                        }), t._v("启用\n              ")], 1), a("div", {
                            on: {
                                click: function (n) {
                                    return t.handleShowThemeSetting(e)
                                }
                            }
                        }, [a("a-icon", {
                            staticStyle: {"margin-right": "3px"},
                            attrs: {type: "setting"}
                        }), t._v("设置\n              ")], 1), a("a-dropdown", {
                            attrs: {
                                placement: "topCenter",
                                trigger: ["click"]
                            }
                        }, [a("a", {
                            staticClass: "ant-dropdown-link",
                            attrs: {href: "#"}
                        }, [a("a-icon", {
                            staticStyle: {"margin-right": "3px"},
                            attrs: {type: "ellipsis"}
                        }), t._v("更多\n                ")], 1), a("a-menu", {
                            attrs: {slot: "overlay"},
                            slot: "overlay"
                        }, [a("a-menu-item", {
                            key: 1,
                            attrs: {disabled: e.activated}
                        }, [e.activated ? a("span", [a("a-icon", {
                            staticStyle: {"margin-right": "3px"},
                            attrs: {type: "delete"}
                        }), t._v("删除\n                    ")], 1) : a("a-popconfirm", {
                            attrs: {
                                title: "确定删除【" + e.name + "】主题？",
                                okText: "确定",
                                cancelText: "取消"
                            }, on: {
                                confirm: function (n) {
                                    return t.handleDeleteTheme(e.id)
                                }
                            }
                        }, [a("a-icon", {
                            staticStyle: {"margin-right": "3px"},
                            attrs: {type: "delete"}
                        }), t._v("删除\n                    ")], 1)], 1), e.repo ? a("a-menu-item", {key: 2}, [a("a-popconfirm", {
                            attrs: {
                                title: "确定更新【" + e.name + "】主题？",
                                okText: "确定",
                                cancelText: "取消"
                            }, on: {
                                confirm: function (n) {
                                    return t.handleUpdateTheme(e.id)
                                }
                            }
                        }, [a("a-icon", {
                            staticStyle: {"margin-right": "3px"},
                            attrs: {type: "cloud"}
                        }), t._v("在线更新\n                    ")], 1)], 1) : t._e(), a("a-menu-item", {
                            key: 3,
                            on: {
                                click: function (n) {
                                    return t.handleShowUpdateNewThemeModal(e)
                                }
                            }
                        }, [a("a-icon", {
                            staticStyle: {"margin-right": "3px"},
                            attrs: {type: "file"}
                        }), t._v("从主题包更新\n                  ")], 1)], 1)], 1)], 1)], 2)], 1)
                    }
                }])
            })], 1)], 1), t.themeSettingVisible ? a("ThemeSetting", {
                attrs: {theme: t.selectedTheme},
                on: {close: t.onThemeSettingsClose}
            }) : t._e(), a("div", {staticClass: "upload-button"}, [a("a-dropdown", {
                attrs: {
                    placement: "topLeft",
                    trigger: ["click"]
                }
            }, [a("a-button", {
                attrs: {
                    type: "primary",
                    shape: "circle",
                    icon: "plus",
                    size: "large"
                }
            }), a("a-menu", {
                attrs: {slot: "overlay"},
                slot: "overlay"
            }, [a("a-menu-item", [a("a", {
                attrs: {rel: "noopener noreferrer", href: "javascript:void(0);"},
                on: {
                    click: function () {
                        return e.uploadThemeVisible = !0
                    }
                }
            }, [t._v("安装主题")])]), a("a-menu-item", [a("a", {
                attrs: {
                    rel: "noopener noreferrer",
                    href: "javascript:void(0);"
                }, on: {click: t.handleReload}
            }, [t._v("刷新列表")])])], 1)], 1)], 1), a("a-modal", {
                attrs: {
                    title: "安装主题",
                    destroyOnClose: "",
                    footer: null,
                    bodyStyle: {padding: "0 24px 24px"},
                    afterClose: t.onThemeUploadClose
                }, model: {
                    value: t.uploadThemeVisible, callback: function (e) {
                        t.uploadThemeVisible = e
                    }, expression: "uploadThemeVisible"
                }
            }, [a("div", {staticClass: "custom-tab-wrapper"}, [a("a-tabs", [a("a-tab-pane", {
                key: "1",
                attrs: {tab: "远程拉取"}
            }, [a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {attrs: {label: "远程地址："}}, [a("a-input", {
                model: {
                    value: t.fetchingUrl,
                    callback: function (e) {
                        t.fetchingUrl = e
                    },
                    expression: "fetchingUrl"
                }
            })], 1), a("a-form-item", [a("a-button", {
                attrs: {type: "primary", loading: t.fetchButtonLoading},
                on: {click: t.handleFetching}
            }, [t._v("下载")])], 1)], 1), a("a-alert", {
                attrs: {
                    type: "info",
                    closable: ""
                }
            }, [a("template", {slot: "message"}, [t._v("\n              远程地址即主题仓库地址，如：https://github.com/halo-dev/halo-theme-quick-starter。\n              "), a("br"), t._v("更多主题请访问：\n              "), a("a", {
                attrs: {
                    target: "_blank",
                    href: "https://halo.run/theme"
                }
            }, [t._v("https://halo.run/theme")])])], 2)], 1), a("a-tab-pane", {
                key: "2",
                attrs: {tab: "本地上传"}
            }, [a("FilePondUpload", {
                ref: "upload",
                attrs: {
                    name: "file",
                    accept: "application/zip",
                    label: "点击选择主题包或将主题包拖拽到此处<br>仅支持 ZIP 格式的文件",
                    uploadHandler: t.uploadHandler
                },
                on: {success: t.handleUploadSuccess}
            })], 1)], 1)], 1)]), a("a-modal", {
                attrs: {
                    title: "更新主题",
                    footer: null,
                    destroyOnClose: "",
                    afterClose: t.onThemeUploadClose
                }, model: {
                    value: t.uploadNewThemeVisible, callback: function (e) {
                        t.uploadNewThemeVisible = e
                    }, expression: "uploadNewThemeVisible"
                }
            }, [a("FilePondUpload", {
                ref: "updateByupload",
                attrs: {
                    name: "file",
                    accept: "application/zip",
                    label: "点击选择主题更新包或将主题更新包拖拽到此处<br>仅支持 ZIP 格式的文件",
                    uploadHandler: t.updateByUploadHandler,
                    filed: t.prepareUpdateTheme.id,
                    multiple: !1
                },
                on: {success: t.handleUploadSuccess}
            })], 1)], 1)
        }, i = [], r = (n("55dd"), function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("a-drawer", {
                attrs: {
                    title: e.selectedTheme.name + " 主题设置",
                    width: "100%",
                    placement: "right",
                    closable: "",
                    destroyOnClose: "",
                    visible: e.visible
                }, on: {close: e.onClose}
            }, [n("a-row", {attrs: {gutter: 12, type: "flex"}}, [e.viewMode ? e._e() : n("a-col", {
                attrs: {
                    xl: 12,
                    lg: 12,
                    md: 12,
                    sm: 24,
                    xs: 24
                }
            }, [n("a-skeleton", {
                attrs: {
                    active: "",
                    loading: e.settingLoading,
                    paragraph: {rows: 10}
                }
            }, [n("a-card", {attrs: {bordered: !1}}, [n("img", {
                attrs: {
                    slot: "cover",
                    alt: e.selectedTheme.name,
                    src: e.selectedTheme.screenshots
                }, slot: "cover"
            }), n("a-card-meta", {attrs: {description: e.selectedTheme.description}}, [n("template", {slot: "title"}, [n("a", {
                attrs: {
                    href: e.selectedTheme.author.website,
                    target: "_blank"
                }
            }, [e._v(e._s(e.selectedTheme.author.name))])]), e.selectedTheme.logo ? n("a-avatar", {
                attrs: {
                    slot: "avatar",
                    src: e.selectedTheme.logo,
                    size: "large"
                }, slot: "avatar"
            }) : n("a-avatar", {
                attrs: {slot: "avatar", size: "large"},
                slot: "avatar"
            }, [e._v(e._s(e.selectedTheme.author.name))])], 2)], 1)], 1)], 1), n("a-col", {
                staticStyle: {"padding-bottom": "50px"},
                attrs: {xl: e.formColValue, lg: e.formColValue, md: e.formColValue, sm: 24, xs: 24}
            }, [n("a-skeleton", {
                attrs: {
                    active: "",
                    loading: e.settingLoading,
                    paragraph: {rows: 20}
                }
            }, [n("div", {staticClass: "card-container"}, [e.themeConfiguration.length > 0 ? n("a-tabs", {
                attrs: {
                    type: "card",
                    defaultActiveKey: "0"
                }
            }, e._l(e.themeConfiguration, function (t, a) {
                return n("a-tab-pane", {
                    key: a.toString(),
                    attrs: {tab: t.label}
                }, [n("a-form", {attrs: {layout: "vertical"}}, e._l(t.items, function (t, a) {
                    return n("a-form-item", {
                        key: a,
                        attrs: {label: t.label + "：", "wrapper-col": e.wrapperCol}
                    }, ["TEXT" == t.type ? n("a-input", {
                        attrs: {
                            defaultValue: t.defaultValue,
                            placeholder: t.placeholder
                        }, model: {
                            value: e.themeSettings[t.name], callback: function (n) {
                                e.$set(e.themeSettings, t.name, n)
                            }, expression: "themeSettings[item.name]"
                        }
                    }) : "TEXTAREA" == t.type ? n("a-input", {
                        attrs: {
                            type: "textarea",
                            autosize: {minRows: 5},
                            placeholder: t.placeholder
                        }, model: {
                            value: e.themeSettings[t.name], callback: function (n) {
                                e.$set(e.themeSettings, t.name, n)
                            }, expression: "themeSettings[item.name]"
                        }
                    }) : "RADIO" == t.type ? n("a-radio-group", {
                        directives: [{
                            name: "decorator",
                            rawName: "v-decorator",
                            value: ["radio-group"],
                            expression: "['radio-group']"
                        }],
                        attrs: {defaultValue: t.defaultValue},
                        model: {
                            value: e.themeSettings[t.name], callback: function (n) {
                                e.$set(e.themeSettings, t.name, n)
                            }, expression: "themeSettings[item.name]"
                        }
                    }, e._l(t.options, function (t, a) {
                        return n("a-radio", {key: a, attrs: {value: t.value}}, [e._v(e._s(t.label))])
                    }), 1) : "SELECT" == t.type ? n("a-select", {
                        attrs: {defaultValue: t.defaultValue},
                        model: {
                            value: e.themeSettings[t.name], callback: function (n) {
                                e.$set(e.themeSettings, t.name, n)
                            }, expression: "themeSettings[item.name]"
                        }
                    }, e._l(t.options, function (t) {
                        return n("a-select-option", {key: t.value, attrs: {value: t.value}}, [e._v(e._s(t.label))])
                    }), 1) : "COLOR" == t.type ? n("verte", {
                        staticStyle: {display: "inline-block", height: "24px"},
                        attrs: {picker: "square", model: "hex", defaultValue: t.defaultValue},
                        model: {
                            value: e.themeSettings[t.name], callback: function (n) {
                                e.$set(e.themeSettings, t.name, n)
                            }, expression: "themeSettings[item.name]"
                        }
                    }) : "ATTACHMENT" == t.type ? n("a-input", {
                        attrs: {defaultValue: t.defaultValue},
                        model: {
                            value: e.themeSettings[t.name], callback: function (n) {
                                e.$set(e.themeSettings, t.name, n)
                            }, expression: "themeSettings[item.name]"
                        }
                    }, [n("a", {
                        attrs: {slot: "addonAfter", href: "javascript:void(0);"}, on: {
                            click: function (n) {
                                return e.handleShowSelectAttachment(t.name)
                            }
                        }, slot: "addonAfter"
                    }, [n("a-icon", {attrs: {type: "picture"}})], 1)]) : n("a-input", {
                        attrs: {
                            defaultValue: t.defaultValue,
                            placeholder: t.placeholder
                        }, model: {
                            value: e.themeSettings[t.name], callback: function (n) {
                                e.$set(e.themeSettings, t.name, n)
                            }, expression: "themeSettings[item.name]"
                        }
                    })], 1)
                }), 1)], 1)
            }), 1) : n("a-alert", {
                attrs: {
                    message: "当前主题暂无设置选项",
                    banner: ""
                }
            })], 1)])], 1), e.viewMode ? n("a-col", {
                staticStyle: {"padding-bottom": "50px"},
                attrs: {xl: 20, lg: 20, md: 20, sm: 24, xs: 24}
            }, [n("a-card", {
                attrs: {
                    bordered: !0,
                    bodyStyle: {padding: 0}
                }
            }, [n("iframe", {
                attrs: {
                    id: "themeViewIframe",
                    title: "主题预览",
                    frameborder: "0",
                    scrolling: "auto",
                    border: "0",
                    src: e.options.blog_url,
                    width: "100%",
                    height: e.clientHeight - 165
                }
            })])], 1) : e._e()], 1), n("AttachmentSelectDrawer", {
                attrs: {title: "选择附件"},
                on: {listenToSelect: e.handleSelectAttachment},
                model: {
                    value: e.attachmentDrawerVisible, callback: function (t) {
                        e.attachmentDrawerVisible = t
                    }, expression: "attachmentDrawerVisible"
                }
            }), e.themeConfiguration.length > 0 ? n("footer-tool-bar", {style: {width: "100%"}}, [!this.isMobile() && e.theme.activated && e.viewMode ? n("a-button", {
                staticStyle: {marginRight: "8px"},
                attrs: {type: "primary", ghost: ""},
                on: {click: e.toggleViewMode}
            }, [e._v("普通模式")]) : this.isMobile() || !e.theme.activated || e.viewMode ? e._e() : n("a-button", {
                staticStyle: {marginRight: "8px"},
                attrs: {type: "dashed"},
                on: {click: e.toggleViewMode}
            }, [e._v("预览模式")]), n("a-button", {
                attrs: {type: "primary"},
                on: {click: e.handleSaveSettings}
            }, [e._v("保存")])], 1) : e._e()], 1)
        }), o = [], s = n("cebc"), l = n("ac0d"), c = n("2f62"), u = n("3993"), d = n("5a70");

        /**
         * Verte v0.0.12
         * (c) 2019 Baianat
         * @license MIT
         */
        /**
         * color-fns v0.0.10
         * (c) 2019 Baianat
         * @license MIT
         */
        function h(e) {
            return h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, h(e)
        }

        function m(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        function f(e, t, n) {
            return t && p(e.prototype, t), n && p(e, n), e
        }

        function v(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }

        function g(e) {
            return g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, g(e)
        }

        function b(e, t) {
            return b = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            }, b(e, t)
        }

        function y(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function C(e, t) {
            return !t || "object" !== typeof t && "function" !== typeof t ? y(e) : t
        }

        function x(e, t) {
            while (!Object.prototype.hasOwnProperty.call(e, t)) if (e = g(e), null === e) break;
            return e
        }

        function S(e, t, n) {
            return S = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var a = x(e, t);
                if (a) {
                    var i = Object.getOwnPropertyDescriptor(a, t);
                    return i.get ? i.get.call(n) : i.value
                }
            }, S(e, t, n || e)
        }

        function w(e) {
            return "object" === h(e) && e.model ? e.model : ("#" !== e.slice(0, 1) || 4 !== e.length && 7 !== e.length) && ("#" !== e.slice(0, 1) || 6 !== e.length && 9 !== e.length) ? "RGBA" === e.slice(0, 4).toUpperCase() ? "rgb" : "RGB" === e.slice(0, 3).toUpperCase() ? "rgb" : "HSLA" === e.slice(0, 4).toUpperCase() ? "hsl" : "HSL" === e.slice(0, 3).toUpperCase() && "hsl" : "hex"
        }

        function _(e) {
            return isNaN(parseInt(e, 16)) ? 0 : parseInt(e, 16)
        }

        function k(e, t) {
            return function (n) {
                return n >= e && n <= t
            }
        }

        function T(e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e)
        }

        function M(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5;
            return Number((e * (1 - n) + t * n).toFixed(2))
        }

        function V(e) {
            return !(void 0 === e || isNaN(e) || e < 0 || e > 1)
        }

        var L = function () {
            function e(t) {
                var n = this;
                m(this, e), this.invalid = !this.validate(t), this.invalid || Object.keys(t).forEach(function (e) {
                    n[e] = t[e]
                }), this.init()
            }

            return f(e, [{
                key: "init", value: function () {
                }
            }, {
                key: "validate", value: function (e) {
                    return !!e && "object" === h(e)
                }
            }]), e
        }(), A = function (e) {
            function t() {
                return m(this, t), C(this, g(t).apply(this, arguments))
            }

            return v(t, e), f(t, [{
                key: "validate", value: function (e) {
                    if (!S(g(t.prototype), "validate", this).call(this, e)) return !1;
                    var n = k(0, 255);
                    return n(e.red) && n(e.green) && n(e.blue)
                }
            }, {
                key: "init", value: function () {
                    this.model = "rgb", this.alpha = V(this.alpha) ? this.alpha : 1
                }
            }, {
                key: "toString", value: function () {
                    return this.invalid ? "Invalid Color" : k(0, .999)(this.alpha) ? "rgba(".concat(this.red, ",").concat(this.green, ",").concat(this.blue, ",").concat(this.alpha, ")") : "rgb(".concat(this.red, ",").concat(this.green, ",").concat(this.blue, ")")
                }
            }]), t
        }(L), O = function (e) {
            function t() {
                return m(this, t), C(this, g(t).apply(this, arguments))
            }

            return v(t, e), f(t, [{
                key: "validate", value: function (e) {
                    if (!S(g(t.prototype), "validate", this).call(this, e)) return !1;
                    var n = k(0, 100);
                    return k(0, 360)(e.hue) && n(e.lum) && n(e.sat)
                }
            }, {
                key: "init", value: function () {
                    this.model = "hsl", this.alpha = V(this.alpha) ? this.alpha : 1
                }
            }, {
                key: "toString", value: function () {
                    return this.invalid ? "Invalid Color" : k(0, .999)(this.alpha) ? "hsla(".concat(this.hue, ",").concat(this.sat, "%,").concat(this.lum, "%,").concat(this.alpha, ")") : "hsl(".concat(this.hue, ",").concat(this.sat, "%,").concat(this.lum, "%)")
                }
            }]), t
        }(L), E = function (e) {
            function t() {
                return m(this, t), C(this, g(t).apply(this, arguments))
            }

            return v(t, e), f(t, [{
                key: "validate", value: function (e) {
                    return !!S(g(t.prototype), "validate", this).call(this, e) && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#".concat(e.red).concat(e.green).concat(e.blue))
                }
            }, {
                key: "init", value: function () {
                    this.model = "hex", this.alpha = void 0 !== this.alpha ? this.alpha : "ff"
                }
            }, {
                key: "toString", value: function () {
                    return this.invalid ? "Invalid Color" : k(0, .999)(_(this.alpha) / 255) ? "#".concat(this.red).concat(this.green).concat(this.blue).concat(this.alpha) : "#".concat(this.red).concat(this.green).concat(this.blue)
                }
            }]), t
        }(L), $ = Object.freeze({Color: L, RgbColor: A, HslColor: O, HexColor: E});

        function N(e) {
            if ("object" === h(e)) return e;
            var t = e.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
            return !t || t.length < 4 ? new A : new A({
                red: Number(t[1]),
                green: Number(t[2]),
                blue: Number(t[3]),
                alpha: Number(t[4])
            })
        }

        function j(e) {
            var t = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])*$/i;
            return 5 !== e.length && 4 !== e.length || !t.test(e) || (e = e.replace(t, function (e, t, n, a, i) {
                return "#".concat(t).concat(t).concat(n).concat(n).concat(a).concat(a).concat(i ? "".concat(i).concat(i) : "")
            })), e
        }

        function H(e) {
            if ("object" === h(e)) return e;
            var t = j(e), n = t.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})*/i);
            return !n || n.length < 4 ? new E : new E({hex: t, red: n[1], green: n[2], blue: n[3], alpha: n[4]})
        }

        function P(e) {
            if ("object" === h(e)) return e;
            var t = e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
            return !t || t.length < 4 ? new O : new O({
                hue: Number(t[1]),
                sat: Number(t[2]),
                lum: Number(t[3]),
                alpha: Number(t[4])
            })
        }

        function U(e) {
            var t = w(e);
            return "rgb" === t ? !N(e).invalid : "hex" === t ? !H(e).invalid : "hsl" === t && !P(e).invalid
        }

        function R(e) {
            return e = Math.floor(e), isNaN(e) ? "00" : ("0" + e.toString(16)).slice(-2)
        }

        function B(e) {
            if (!e) return new E;
            e = N(e);
            var t = [R(e.red), R(e.green), R(e.blue), e.alpha ? R(255 * e.alpha) : null], n = t[0], a = t[1], i = t[2],
                r = t[3];
            return new E({red: n, green: a, blue: i, alpha: r || "ff"})
        }

        function F(e) {
            if (!e) return new O;
            e = N(e);
            var t = [e.red / 255, e.green / 255, e.blue / 255, e.alpha], n = t[0], a = t[1], i = t[2], r = t[3], o = 0,
                s = 0, l = 0, c = Math.min(n, a, i), u = Math.max(n, a, i);
            return l = (c + u) / 2, c !== u && (s = l > .5 ? (u - c) / (2 - u - c) : (u - c) / (u + c)), n >= u && c !== u && (o = (a - i) / (u - c) * 60), a >= u && c !== u && (o = 60 * (2 + (i - n) / (u - c))), i >= u && c !== u && (o = 60 * (4 + (n - a) / (u - c))), o = o < 0 ? Math.floor(o + 360) : Math.floor(o), s = Math.floor(100 * s), l = Math.floor(100 * l), new O({
                hue: o,
                sat: s,
                lum: l,
                alpha: r
            })
        }

        function q(e) {
            if (!e) return new A;
            var t = H(e), n = t.red, a = t.green, i = t.blue, r = t.alpha;
            return new A({
                red: _(n),
                green: _(a),
                blue: _(i),
                alpha: void 0 === r ? 1 : Number((_(r) / 255).toFixed(2))
            })
        }

        function I(e) {
            return Math.min(Math.max(parseInt(e), 0), 255)
        }

        function D(e) {
            if (!e) return new A;
            e = P(e);
            var t = [e.hue / 360, e.sat / 100, e.lum / 100, e.alpha], n = t[0], a = t[1], i = t[2], r = t[3], o = 0,
                s = 0, l = 0;
            if (0 === a && (o = s = l = I(255 * i)), 0 !== a) {
                var c = i >= 50 ? i + a - i * a : i * (1 + a), u = 2 * i - c, d = function (e) {
                    return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? u + 6 * (c - u) * e : e < .5 ? c : e < 2 / 3 ? u + (c - u) * (2 / 3 - e) * 6 : u
                };
                o = I(255 * d(n + 1 / 3)), s = I(255 * d(n)), l = I(255 * d(n - 1 / 3))
            }
            return new A({red: o, green: s, blue: l, alpha: r})
        }

        function z(e) {
            return e ? F(q(e)) : new O
        }

        function W(e) {
            return e ? B(D(e)) : new E
        }

        function G(e) {
            var t = w(e);
            return "hex" === t ? q(e) : "hsl" === t ? D(e) : "rgb" === t && "string" === typeof e ? N(e) : "rgb" === t && "object" === h(e) ? e : new A
        }

        function J(e) {
            var t = w(e);
            return "hex" === t ? z(e) : "rgb" === t ? F(e) : "hsl" === t && "string" === typeof e ? P(e) : "hsl" === t && "object" === h(e) ? e : new O
        }

        function Y(e) {
            var t = w(e);
            return "rgb" === t ? B(e) : "hsl" === t ? W(e) : "hex" === t && "string" === typeof e ? H(e) : "hex" === t && "object" === h(e) ? e : new E
        }

        function X() {
            return "rgb(".concat(T(0, 255), ", ").concat(T(0, 255), ", ").concat(T(0, 255), ")")
        }

        function Z(e, t, n) {
            e = G(e), t = G(t);
            var a = Math.floor(M(e.red, t.red, n)), i = Math.floor(M(e.green, t.green, n)),
                r = Math.floor(M(e.blue, t.blue, n)), o = M(e.alpha, t.alpha, n);
            return new A({red: a, green: i, blue: r, alpha: o})
        }

        function K(e, t) {
            for (var n = [], a = 0; a < e; a++) {
                var i = "function" === typeof t ? t() : t;
                n.push(i)
            }
            return n
        }

        function Q(e, t) {
            var n;
            return void 0 === t && (t = !1), function () {
                var a = arguments, i = function () {
                    n = null, t || e.apply(void 0, a)
                }, r = t && !n;
                window.cancelAnimationFrame(n), n = window.requestAnimationFrame(i), r && e.apply(void 0, arguments)
            }
        }

        function ee(e, t) {
            while (e !== document && null !== e) {
                if (e === t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function te(e, t) {
            return e.reduce(function (e, n) {
                return Math.abs(n - t) < Math.abs(e - t) ? n : e
            })
        }

        function ne(e, t) {
            return {r: Math.sqrt(e * e + t * t), theta: 180 * Math.atan2(t, e) / Math.PI}
        }

        function ae(e, t) {
            return {x: e * Math.cos(t * Math.PI * 2), y: e * Math.sin(t * Math.PI * 2)}
        }

        function ie(e, t) {
            return function (e) {
                var n = -1 !== t.indexOf(e);
                return n
            }
        }

        function re(e) {
            if (e.type.match(/^touch/i)) {
                var t = e.touches[0];
                return {x: t.clientX, y: t.clientY}
            }
            return e.type.match(/^mouse/i) ? {x: e.clientX, y: e.clientY} : {x: 0, y: 0}
        }

        var oe = {
            name: "VerteSlider",
            props: {
                gradient: Array,
                classes: Array,
                colorCode: {type: Boolean, default: !1},
                editable: {type: Boolean, default: !0},
                reverse: {type: Boolean, default: !1},
                label: {type: Boolean, default: !1},
                trackSlide: {type: Boolean, default: !0},
                min: {type: Number, default: 0},
                max: {type: Number, default: 255},
                step: {type: Number, default: 1},
                value: {type: Number, default: 0},
                handlesValue: {
                    type: Array, default: function () {
                        return [0]
                    }
                }
            },
            data: function () {
                return {fill: {translate: 0, scale: 0}, multiple: !1, currentValue: 0, handles: [], values: []}
            },
            watch: {
                gradient: function (e) {
                    this.initGradient(e), this.reloadHandlesColor()
                }, values: function () {
                    this.multiple = this.values.length > 1, this.fill = !this.multiple && (this.fill || {})
                }, value: function (e, t) {
                    e !== t && e !== this.currentValue && this.updateValue(this.value, !0)
                }
            },
            methods: {
                init: function () {
                    var e = this;
                    this.$emitInputEvent = Q(function () {
                        e.$emit("input", e.currentValue)
                    }), this.multiple = this.values.length > 1, this.values = this.handlesValue, this.handles = this.handlesValue.map(function (e, t) {
                        return {value: e, position: 0, color: "#fff"}
                    }), 1 === this.values.length && (this.values[0] = Number(this.value)), this.values.sort(), this.initElements(), this.gradient && this.initGradient(this.gradient), this.initEvents(), this.values.forEach(function (t, n) {
                        e.activeHandle = n, e.updateValue(t, !0)
                    })
                }, initElements: function () {
                    var e;
                    this.wrapper = this.$refs.wrapper, this.track = this.$refs.track, this.fill = this.$refs.fill, this.wrapper.classList.toggle("slider--editable", this.editable), this.wrapper.classList.toggle("slider--reverse", this.reverse), this.classes && (e = this.wrapper.classList).add.apply(e, this.classes)
                }, initGradient: function (e) {
                    e.length > 1 ? this.fill.style.backgroundImage = "linear-gradient(90deg, " + e + ")" : (this.fill.style.backgroundImage = "", this.fill.style.backgroundColor = e[0], this.handles.forEach(function (t) {
                        t.style.color = e[0]
                    }))
                }, handleResize: function () {
                    this.updateWidth(), this.updateValue(this.currentValue, !0)
                }, initEvents: function () {
                    window.addEventListener("resize", this.handleResize)
                }, select: function (e) {
                    if (e.preventDefault(), e.stopPropagation(), 2 !== e.buttons) {
                        this.updateWidth(), this.track.classList.add("slider--dragging"), this.ticking = !1;
                        var t = this.getStepValue(e);
                        if (this.multiple) {
                            var n = te(this.values, t);
                            this.activeHandle = this.values.indexOf(n)
                        }
                        this.updateValue(t), this.tempDrag = this.dragging.bind(this), this.tempRelease = this.release.bind(this), document.addEventListener("mousemove", this.tempDrag), document.addEventListener("touchmove", this.tempDrag), document.addEventListener("touchend", this.tempRelease), document.addEventListener("mouseup", this.tempRelease)
                    }
                }, dragging: function (e) {
                    var t = this, n = this.getStepValue(e);
                    this.ticking || (window.requestAnimationFrame(function () {
                        t.updateValue(n), t.ticking = !1
                    }), this.ticking = !0)
                }, release: function () {
                    this.track.classList.remove("slider--dragging"), document.removeEventListener("mousemove", this.tempDrag), document.removeEventListener("touchmove", this.tempDrag), document.removeEventListener("mouseup", this.tempRelease), document.removeEventListener("touchend", this.tempRelease)
                }, getStepValue: function (e) {
                    var t = re(e), n = t.x, a = n - this.currentX, i = parseInt(a / this.stepWidth + .5, 10),
                        r = i * this.step + this.min;
                    return this.decimalsCount ? Number(r.toFixed(this.decimalsCount)) : r
                }, updateWidth: function () {
                    var e = this.track.getBoundingClientRect();
                    this.currentX = e.left, this.width = e.width, this.stepWidth = this.width / (this.max - this.min) * this.step
                }, getPositionPercentage: function (e) {
                    return ((e - this.min) / (this.max - this.min)).toFixed(2)
                }, normalizeValue: function (e) {
                    if (isNaN(Number(e))) return this.value;
                    if (this.multiple) {
                        var t = this.values[this.activeHandle - 1] || this.min,
                            n = this.values[this.activeHandle + 1] || this.max;
                        e = Math.min(Math.max(Number(e), t), n)
                    }
                    return Math.min(Math.max(Number(e), this.min), this.max)
                }, addHandle: function (e) {
                    var t = te(this.values, e), n = this.values.indexOf(t), a = this.values[n], i = a <= e ? n + 1 : n;
                    this.handles.splice(i, 0, {
                        value: e,
                        position: 0,
                        color: "#fff"
                    }), this.values.splice(i, 0, e), this.activeHandle = i, this.currentValue = null, this.updateValue(e)
                }, removeHandle: function (e) {
                    this.handles.splice(e, 1), this.values.splice(e, 1), this.activeHandle = 0 === e ? e + 1 : e - 1
                }, getHandleColor: function (e) {
                    for (var t = this, n = this.gradient.length - 1, a = e, i = 1; i <= n; i++) if (a >= (i - 1) / n && a <= i / n) {
                        var r = (a - (i - 1) / n) / (1 / n);
                        return Z(t.gradient[i - 1], t.gradient[i], r)
                    }
                    return "rgb(0, 0, 0)"
                }, reloadHandlesColor: function () {
                    var e = this;
                    this.handles.forEach(function (t, n) {
                        var a = e.getPositionPercentage(t.value), i = e.getHandleColor(a);
                        e.handles[n].color = i.toString()
                    })
                }, updateValue: function (e, t) {
                    var n = this;
                    void 0 === t && (t = !1), window.requestAnimationFrame(function () {
                        var a = n.normalizeValue(e), i = n.getPositionPercentage(a);
                        if (n.fill && (n.fill.translate = i * n.width, n.fill.scale = 1 - i), n.values[n.activeHandle] = a, n.handles[n.activeHandle].value = a, n.handles[n.activeHandle].position = i * n.width, n.currentValue = a, n.$refs.input.value = n.currentValue, n.gradient) {
                            var r = n.getHandleColor(i);
                            n.handles[n.activeHandle].color = r.toString(), n.colorCode && (n.currentValue = r)
                        }
                        t || n.$emitInputEvent()
                    })
                }
            },
            created: function () {
                var e = this.step.toString().split(".")[1];
                this.currentValue = this.value, this.decimalsCount = e ? e.length : 0
            },
            mounted: function () {
                var e = this;
                this.init(), this.$nextTick(function () {
                    e.updateWidth(), e.updateValue(void 0, !0)
                })
            },
            destroyed: function () {
                window.removeEventListener("resize", this.handleResize)
            }
        }, se = oe, le = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {ref: "wrapper", staticClass: "slider"}, [n("div", e._g({
                ref: "track",
                staticClass: "slider__track"
            }, e.trackSlide ? {mousedown: e.select, touchstart: e.select} : {}), [n("div", {
                ref: "fill",
                staticClass: "slider__fill"
            }), e._l(e.handles, function (t) {
                return n("div", {
                    staticClass: "slider__handle",
                    style: "transform: translate(" + t.position + "px, 0); background-color: " + t.color + ";",
                    on: {mousedown: e.select, touchstart: e.select}
                }, [e.label ? n("div", {staticClass: "slider__label"}, [e._v(e._s(t.value))]) : e._e()])
            })], 2), n("input", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.editable,
                    expression: "editable"
                }],
                ref: "input",
                staticClass: "slider__input",
                attrs: {type: e.colorCode ? "text" : "number"},
                on: {
                    change: function (t) {
                        e.updateValue(t.target.value)
                    }
                }
            })])
        }, ce = [];
        le._withStripped = !0;
        var ue = void 0, de = void 0, he = void 0, me = !1;

        function pe(e, t, n, a, i, r, o, s) {
            var l = ("function" === typeof n ? n.options : n) || {};
            return l.__file = "/mnt/c/Users/Abdelrahman/Projects/verte/src/components/Slider.vue", l.render || (l.render = e.render, l.staticRenderFns = e.staticRenderFns, l._compiled = !0, i && (l.functional = !0)), l._scopeId = a, l
        }

        function fe() {
            var e = document.head || document.getElementsByTagName("head")[0], t = fe.styles || (fe.styles = {}),
                n = "undefined" !== typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
            return function (a, i) {
                if (!document.querySelector('style[data-vue-ssr-id~="' + a + '"]')) {
                    var r = n ? i.media || "default" : a, o = t[r] || (t[r] = {ids: [], parts: [], element: void 0});
                    if (!o.ids.includes(a)) {
                        var s = i.source, l = o.ids.length;
                        if (o.ids.push(a), n && (o.element = o.element || document.querySelector("style[data-group=" + r + "]")), !o.element) {
                            var c = o.element = document.createElement("style");
                            c.type = "text/css", i.media && c.setAttribute("media", i.media), n && (c.setAttribute("data-group", r), c.setAttribute("data-next-index", "0")), e.appendChild(c)
                        }
                        if (n && (l = parseInt(o.element.getAttribute("data-next-index")), o.element.setAttribute("data-next-index", l + 1)), o.element.styleSheet) o.parts.push(s), o.element.styleSheet.cssText = o.parts.filter(Boolean).join("\n"); else {
                            var u = document.createTextNode(s), d = o.element.childNodes;
                            d[l] && o.element.removeChild(d[l]), d.length ? o.element.insertBefore(u, d[l]) : o.element.appendChild(u)
                        }
                    }
                }
            }
        }

        var ve = pe({render: le, staticRenderFns: ce}, ue, se, de, me, he, fe, void 0), ge = {
            name: "VertePicker",
            components: {Slider: ve},
            props: {
                mode: {type: String, default: "square"},
                edge: {type: Number, default: 250},
                diameter: {type: Number, default: 180},
                satSlider: {type: Boolean, default: !0},
                alpha: {type: Number, default: 1},
                value: {type: String, default: "#fff"}
            },
            data: function () {
                return {
                    currentHue: 0,
                    currentSat: 0,
                    currentColor: "",
                    cursor: {},
                    preventUpdating: !1,
                    preventEcho: !1
                }
            },
            watch: {
                value: function (e) {
                    this.preventUpdating ? this.preventUpdating = !1 : this.handleValue(e, !0)
                }, currentSat: function () {
                    this.updateWheelColors(), this.updateColor()
                }, currentHue: function () {
                    this.updateSquareColors(), this.updateColor()
                }
            },
            methods: {
                initSquare: function () {
                    var e = this.edge;
                    this.$refs.canvas.width = e, this.$refs.canvas.height = e - 100, this.ctx = this.$refs.canvas.getContext("2d"), this.updateSquareColors()
                }, initWheel: function () {
                    this.$refs.canvas.width = this.diameter, this.$refs.canvas.height = this.diameter, this.ctx = this.$refs.canvas.getContext("2d"), this.circle = {
                        path: new Path2D,
                        xCords: this.diameter / 2,
                        yCords: this.diameter / 2,
                        radius: this.diameter / 2
                    }, this.circle.path.moveTo(this.circle.xCords, this.circle.yCords), this.circle.path.arc(this.circle.xCords, this.circle.yCords, this.circle.radius, 0, 360), this.circle.path.closePath(), this.updateWheelColors()
                }, handleValue: function (e, t) {
                    void 0 === t && (t = !1);
                    var n = this.pickerRect, a = n.width, i = n.height;
                    if (this.currentColor = J(e), this.preventEcho = !0, "wheel" === this.mode) {
                        var r = (100 - this.currentColor.lum) * (this.diameter / 200), o = this.diameter / 2,
                            s = ae(r, this.currentColor.hue / 360);
                        this.cursor = {x: s.x + o, y: s.y + o}, this.currentSat = this.currentColor.sat
                    }
                    if ("square" === this.mode) {
                        var l = this.currentColor.sat / 100 * a, c = (100 - this.currentColor.lum) / 100 * i;
                        this.cursor = {x: l, y: c}, this.currentHue = this.currentColor.hue
                    }
                }, updateCursorPosition: function (e) {
                    var t = e.x, n = e.y, a = this.pickerRect, i = a.left, r = a.top, o = a.width, s = a.height,
                        l = {x: Math.min(Math.max(t - i, 0), o), y: Math.min(Math.max(n - r, 0), s)};
                    ("wheel" !== this.mode || this.ctx.isPointInPath(this.circle.path, l.x, l.y)) && (this.cursor = l, this.updateColor())
                }, updateColor: function (e) {
                    void 0 === e && (e = !1), this.preventEcho ? this.preventEcho = !1 : (this.currentColor = this.getCanvasColor(), this.preventUpdating = !0, this.$emit("change", this.currentColor), this.$emit("input", this.currentColor))
                }, updateWheelColors: function () {
                    var e = this;
                    if (this.circle) {
                        var t = this.pickerRect, n = t.width, a = t.height, i = this.circle.xCords,
                            r = this.circle.yCords, o = this.circle.radius, s = this.satSlider ? this.currentSat : 100;
                        this.ctx.clearRect(0, 0, n, a);
                        for (var l = 0; l < 360; l += 1) {
                            var c = e.ctx.createRadialGradient(i, r, 0, i, r, o), u = (l - 2) * Math.PI / 180,
                                d = (l + 2) * Math.PI / 180;
                            e.ctx.beginPath(), e.ctx.moveTo(i, r), e.ctx.arc(i, r, o, u, d), e.ctx.closePath(), c.addColorStop(0, "hsl(" + l + ", " + s + "%, 100%)"), c.addColorStop(.5, "hsl(" + l + ", " + s + "%, 50%)"), c.addColorStop(1, "hsl(" + l + ", " + s + "%, 0%)"), e.ctx.fillStyle = c, e.ctx.fill()
                        }
                    }
                }, updateSquareColors: function () {
                    var e = this.pickerRect, t = e.width, n = e.height;
                    this.ctx.clearRect(0, 0, t, n), this.ctx.fillStyle = "hsl(" + this.currentHue + ", 100%, 50%)", this.ctx.fillRect(0, 0, t, n);
                    var a = this.ctx.createLinearGradient(0, 0, t, 0);
                    a.addColorStop(0, "hsl(0, 0%, 50%)"), a.addColorStop(1, "hsla(0, 0%, 50%, 0)"), this.ctx.fillStyle = a, this.ctx.fillRect(0, 0, t, n);
                    var i = this.ctx.createLinearGradient(0, 0, 0, n);
                    i.addColorStop(0, "hsl(0, 0%, 100%)"), i.addColorStop(.5, "hsla(0, 0%, 100%, 0)"), i.addColorStop(.5, "hsla(0, 0%, 0%, 0)"), i.addColorStop(1, "hsl(0, 0%, 0%) "), this.ctx.fillStyle = i, this.ctx.fillRect(0, 0, t, n)
                }, getCanvasColor: function () {
                    var e = this.cursor, t = e.x, n = e.y, a = 0, i = 0, r = 0;
                    if ("wheel" === this.mode) {
                        var o = this.diameter / 2, s = t - o, l = -1 * (n - o), c = ne(s, l), u = c.r, d = c.theta;
                        i = 100 * (o - u) / o, r = ~Math.sign(d) ? 360 - d : -d, a = this.currentSat
                    }
                    if ("square" === this.mode) {
                        var h = this.pickerRect, m = h.width, p = h.height;
                        a = 100 * t / m, i = 100 - 100 * n / p, r = this.currentHue
                    }
                    return new $.HslColor({
                        alpha: this.alpha,
                        hue: Math.round(r),
                        sat: Math.round(a),
                        lum: Math.round(i)
                    })
                }, handleSelect: function (e) {
                    var t = this;
                    e.preventDefault(), this.pickerRect = this.$refs.canvas.getBoundingClientRect(), this.updateCursorPosition(re(e));
                    var n = function (e) {
                        window.requestAnimationFrame(function () {
                            t.updateCursorPosition(re(e))
                        })
                    }, a = function () {
                        document.removeEventListener("mousemove", n), document.removeEventListener("touchmove", n), document.removeEventListener("mouseup", a), document.removeEventListener("touchend", a)
                    };
                    document.addEventListener("mousemove", n), document.addEventListener("touchmove", n), document.addEventListener("mouseup", a), document.addEventListener("touchend", a)
                }
            },
            mounted: function () {
                var e = this;
                this.pickerRect = this.$refs.canvas.getBoundingClientRect(), "wheel" === this.mode && this.initWheel(), "square" === this.mode && this.initSquare(), this.$nextTick(function () {
                    e.handleValue(e.value)
                })
            }
        }, be = ge, ye = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                ref: "picker",
                staticClass: "verte-picker",
                class: "verte-picker--" + e.mode
            }, [n("div", {ref: "origin", staticClass: "verte-picker__origin"}, [n("canvas", {
                ref: "canvas",
                staticClass: "verte-picker__canvas",
                on: {mousedown: e.handleSelect, touchstart: e.handleSelect}
            }), n("div", {
                ref: "cursor",
                staticClass: "verte-picker__cursor",
                style: "transform: translate3d(" + e.cursor.x + "px, " + e.cursor.y + "px, 0)"
            })]), "square" === e.mode ? n("slider", {
                staticClass: "verte-picker__slider",
                attrs: {gradient: ["#f00", "#ff0", "#0f0", "#0ff", "#00f", "#f0f", "#f00"], editable: !1, max: 360},
                model: {
                    value: e.currentHue, callback: function (t) {
                        e.currentHue = t
                    }, expression: "currentHue"
                }
            }) : e._e(), "wheel" === e.mode ? n("slider", {
                staticClass: "verte-picker__slider",
                attrs: {
                    gradient: ["hsl(" + e.currentColor.hue + ",0%," + e.currentColor.lum + "%)", "hsl(" + e.currentColor.hue + ",100%," + e.currentColor.lum + "%)"],
                    editable: !1,
                    max: 100
                },
                model: {
                    value: e.currentSat, callback: function (t) {
                        e.currentSat = t
                    }, expression: "currentSat"
                }
            }) : e._e()], 1)
        }, Ce = [];
        ye._withStripped = !0;
        var xe = void 0, Se = void 0, we = void 0, _e = !1;

        function ke(e, t, n, a, i, r, o, s) {
            var l = ("function" === typeof n ? n.options : n) || {};
            return l.__file = "/mnt/c/Users/Abdelrahman/Projects/verte/src/components/Picker.vue", l.render || (l.render = e.render, l.staticRenderFns = e.staticRenderFns, l._compiled = !0, i && (l.functional = !0)), l._scopeId = a, l
        }

        function Te() {
            var e = document.head || document.getElementsByTagName("head")[0], t = Te.styles || (Te.styles = {}),
                n = "undefined" !== typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
            return function (a, i) {
                if (!document.querySelector('style[data-vue-ssr-id~="' + a + '"]')) {
                    var r = n ? i.media || "default" : a, o = t[r] || (t[r] = {ids: [], parts: [], element: void 0});
                    if (!o.ids.includes(a)) {
                        var s = i.source, l = o.ids.length;
                        if (o.ids.push(a), n && (o.element = o.element || document.querySelector("style[data-group=" + r + "]")), !o.element) {
                            var c = o.element = document.createElement("style");
                            c.type = "text/css", i.media && c.setAttribute("media", i.media), n && (c.setAttribute("data-group", r), c.setAttribute("data-next-index", "0")), e.appendChild(c)
                        }
                        if (n && (l = parseInt(o.element.getAttribute("data-next-index")), o.element.setAttribute("data-next-index", l + 1)), o.element.styleSheet) o.parts.push(s), o.element.styleSheet.cssText = o.parts.filter(Boolean).join("\n"); else {
                            var u = document.createTextNode(s), d = o.element.childNodes;
                            d[l] && o.element.removeChild(d[l]), d.length ? o.element.insertBefore(u, d[l]) : o.element.appendChild(u)
                        }
                    }
                }
            }
        }

        var Me, Ve, Le = ke({render: ye, staticRenderFns: Ce}, xe, be, Se, _e, we, Te, void 0), Ae = 6;

        function Oe(e, t) {
            if (Ve) return Ve;
            t = t || {};
            var n = t.recentColors, a = t.onRecentColorsChange;
            return Me = e, Ve = new Me({
                data: function () {
                    return {recentColors: n || K(6, X)}
                }, methods: {
                    addRecentColor: function (e) {
                        this.recentColors.includes(e) || (this.recentColors.length >= Ae && this.recentColors.pop(), this.recentColors.unshift(e), a && a(this.recentColors))
                    }
                }
            }), Ve
        }

        var Ee = {
            name: "Verte",
            components: {Picker: Le, Slider: ve},
            props: {
                picker: {type: String, default: "square", validator: ie("picker", ["wheel", "square"])},
                value: {type: String, default: "#000"},
                model: {type: String, default: "hsl", validator: ie("model", ["rgb", "hex", "hsl"])},
                display: {type: String, default: "picker", validator: ie("display", ["picker", "widget"])},
                menuPosition: {
                    type: String,
                    default: "bottom",
                    validator: ie("menuPosition", ["top", "bottom", "left", "right", "center"])
                },
                showHistory: {type: Boolean, default: !0},
                colorHistory: {type: Array, default: null},
                enableAlpha: {type: Boolean, default: !0},
                rgbSliders: {type: Boolean, default: !1},
                draggable: {type: Boolean, default: !0}
            },
            data: function () {
                return {
                    isMenuActive: !0,
                    isLoading: !0,
                    rgb: G("#000"),
                    hex: Y("#000"),
                    hsl: J("#000"),
                    delta: {x: 0, y: 0},
                    currentModel: "",
                    internalColorHistory: []
                }
            },
            computed: {
                $_verteStore: function () {
                    return Oe()
                }, historySource: function () {
                    return this.colorHistory ? this.internalColorHistory : this.$_verteStore.recentColors
                }, currentColor: {
                    get: function () {
                        return this[this.model], this[this.model].toString()
                    }, set: function (e) {
                        this.selectColor(e)
                    }
                }, alpha: {
                    get: function () {
                        return this[this.model] ? isNaN(this[this.model].alpha) ? 1 : this[this.model].alpha : 1
                    }, set: function (e) {
                        this[this.model].alpha = e, this.selectColor(this[this.model])
                    }
                }, menuOnly: function () {
                    return "widget" === this.display
                }
            },
            watch: {
                value: function (e, t) {
                    e !== t && e !== this.currentColor && this.selectColor(e)
                }, rgb: {
                    handler: function (e) {
                        this.hex = Y(e.toString()), this.$emit("input", this.currentColor)
                    }, deep: !0
                }, colorHistory: function (e) {
                    this.internalColorHistory !== e && (this.internalColorHistory = [].concat(e))
                }
            },
            beforeCreate: function () {
                Oe(this.$options._base)
            },
            install: function (e, t) {
                Oe(e, t), e.component("Verte", this)
            },
            created: function () {
                this.colorHistory && (this.internalColorHistory = [].concat(this.colorHistory)), this.selectColor(this.value || "#000", !0), this.currentModel = this.model
            },
            mounted: function () {
                var e = this;
                this.$nextTick(function () {
                    e.isLoading = !1, e.menuOnly || (e.isMenuActive = !1)
                })
            },
            methods: {
                selectColor: function (e, t) {
                    void 0 === t && (t = !1), U(e) && (this.rgb = G(e), this.hex = Y(e), this.hsl = J(e), t || this.$emit("input", this.currentColor))
                }, switchModel: function () {
                    var e = ["hex", "rgb", "hsl"], t = e.indexOf(this.currentModel);
                    this.currentModel = e[t + 1] || e[0]
                }, handleMenuDrag: function (e) {
                    var t = this;
                    if (2 !== e.button) {
                        e.preventDefault();
                        var n = Object.assign({}, this.delta), a = re(e), i = function (e) {
                            window.requestAnimationFrame(function () {
                                var i = re(e);
                                t.delta.x = n.x + i.x - a.x, t.delta.y = n.y + i.y - a.y
                            })
                        }, r = function () {
                            document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", r), document.removeEventListener("touchmove", i), document.removeEventListener("touchup", r)
                        };
                        document.addEventListener("mousemove", i), document.addEventListener("mouseup", r), document.addEventListener("touchmove", i), document.addEventListener("touchup", r)
                    }
                }, submit: function () {
                    this.$emit("beforeSubmit", this.currentColor), this.addColorToHistory(this.currentColor), this.$emit("input", this.currentColor), this.$emit("submit", this.currentColor)
                }, addColorToHistory: function (e) {
                    if (this.colorHistory) return this.internalColorHistory.length >= Ae && this.internalColorHistory.pop(), this.internalColorHistory.unshift(e), void this.$emit("update:colorHistory", this.internalColorHistory);
                    this.$_verteStore.addRecentColor(this.currentColor)
                }, inputChanged: function (e, t) {
                    var n = e.target;
                    if ("hex" !== this.currentModel) {
                        var a = Math.min(Math.max(n.value, n.min), n.max);
                        this[this.currentModel][t] = a, this.selectColor(this[this.currentModel])
                    } else this.selectColor(n.value)
                }, toggleMenu: function () {
                    this.isMenuActive ? this.closeMenu() : this.openMenu()
                }, closeMenu: function () {
                    this.isMenuActive = !1, document.removeEventListener("mousedown", this.closeCallback), this.$emit("close", this.currentColor)
                }, openMenu: function () {
                    var e = this;
                    this.isMenuActive = !0, this.closeCallback = function (t) {
                        ee(t.target, e.$refs.menu) || ee(t.target, e.$refs.guide) || e.closeMenu()
                    }, document.addEventListener("mousedown", this.closeCallback)
                }
            }
        }, $e = Ee, Ne = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "verte",
                class: {"verte--loading": e.isLoading}
            }, [e.menuOnly ? e._e() : n("button", {
                ref: "guide",
                staticClass: "verte__guide",
                style: "color: " + e.currentColor + "; fill: " + e.currentColor + ";",
                attrs: {type: "button"},
                on: {click: e.toggleMenu}
            }, [e._t("default", [n("svg", {
                staticClass: "verte__icon",
                attrs: {viewBox: "0 0 24 24"}
            }, [n("pattern", {
                attrs: {
                    id: "checkerboard",
                    width: "6",
                    height: "6",
                    patternUnits: "userSpaceOnUse",
                    fill: "FFF"
                }
            }, [n("rect", {
                attrs: {
                    fill: "#7080707f",
                    x: "0",
                    width: "3",
                    height: "3",
                    y: "0"
                }
            }), n("rect", {
                attrs: {
                    fill: "#7080707f",
                    x: "3",
                    width: "3",
                    height: "3",
                    y: "3"
                }
            })]), n("circle", {
                attrs: {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "url(#checkerboard)"
                }
            }), n("circle", {
                attrs: {
                    cx: "12",
                    cy: "12",
                    r: "12"
                }
            })])])], 2), n("div", {
                staticClass: "verte__menu-origin",
                class: ["verte__menu-origin--" + e.menuPosition, {
                    "verte__menu-origin--static": e.menuOnly,
                    "verte__menu-origin--active": e.isMenuActive
                }]
            }, [n("div", {
                ref: "menu",
                staticClass: "verte__menu",
                style: "transform: translate(" + e.delta.x + "px, " + e.delta.y + "px)",
                attrs: {tabindex: "-1"}
            }, [e.menuOnly ? e._e() : n("button", {
                staticClass: "verte__close",
                attrs: {type: "button"},
                on: {click: e.closeMenu}
            }, [n("svg", {
                staticClass: "verte__icon verte__icon--small",
                attrs: {viewBox: "0 0 24 24"}
            }, [n("title", [e._v("Close Icon")]), n("path", {attrs: {d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])]), e.draggable && !e.menuOnly ? n("div", {
                staticClass: "verte__draggable",
                on: {mousedown: e.handleMenuDrag, touchstart: e.handleMenuDrag}
            }) : e._e(), n("Picker", {
                attrs: {mode: e.picker, alpha: e.alpha},
                model: {
                    value: e.currentColor, callback: function (t) {
                        e.currentColor = t
                    }, expression: "currentColor"
                }
            }), n("div", {staticClass: "verte__controller"}, [e.enableAlpha ? n("Slider", {
                attrs: {
                    gradient: ["rgba(" + e.rgb.red + ", " + e.rgb.green + ", " + e.rgb.blue + ", 0)", "rgba(" + e.rgb.red + ", " + e.rgb.green + ", " + e.rgb.blue + ", 1)"],
                    min: 0,
                    max: 1,
                    step: .01,
                    editable: !1
                }, model: {
                    value: e.alpha, callback: function (t) {
                        e.alpha = t
                    }, expression: "alpha"
                }
            }) : e._e(), e.rgbSliders ? [n("Slider", {
                attrs: {gradient: ["rgb(0," + e.rgb.green + "," + e.rgb.blue + ")", "rgb(255," + e.rgb.green + "," + e.rgb.blue + ")"]},
                model: {
                    value: e.rgb.red, callback: function (t) {
                        e.$set(e.rgb, "red", t)
                    }, expression: "rgb.red"
                }
            }), n("Slider", {
                attrs: {gradient: ["rgb(" + e.rgb.red + ",0," + e.rgb.blue + ")", "rgb(" + e.rgb.red + ",255," + e.rgb.blue + ")"]},
                model: {
                    value: e.rgb.green, callback: function (t) {
                        e.$set(e.rgb, "green", t)
                    }, expression: "rgb.green"
                }
            }), n("Slider", {
                attrs: {gradient: ["rgb(" + e.rgb.red + "," + e.rgb.green + ",0)", "rgb(" + e.rgb.red + "," + e.rgb.green + ",255)"]},
                model: {
                    value: e.rgb.blue, callback: function (t) {
                        e.$set(e.rgb, "blue", t)
                    }, expression: "rgb.blue"
                }
            })] : e._e(), n("div", {staticClass: "verte__inputs"}, [n("button", {
                staticClass: "verte__model",
                attrs: {type: "button"},
                on: {click: e.switchModel}
            }, [e._v(e._s(e.currentModel))]), "hsl" === e.currentModel ? [n("input", {
                staticClass: "verte__input",
                attrs: {type: "number", max: "360", min: "0"},
                domProps: {value: e.hsl.hue},
                on: {
                    change: function (t) {
                        e.inputChanged(t, "hue")
                    }
                }
            }), n("input", {
                staticClass: "verte__input",
                attrs: {type: "number", min: "0", max: "100"},
                domProps: {value: e.hsl.sat},
                on: {
                    change: function (t) {
                        e.inputChanged(t, "sat")
                    }
                }
            }), n("input", {
                staticClass: "verte__input",
                attrs: {type: "number", min: "0", max: "100"},
                domProps: {value: e.hsl.lum},
                on: {
                    change: function (t) {
                        e.inputChanged(t, "lum")
                    }
                }
            })] : e._e(), "rgb" === e.currentModel ? [n("input", {
                staticClass: "verte__input",
                attrs: {type: "number", min: "0", max: "255"},
                domProps: {value: e.rgb.red},
                on: {
                    change: function (t) {
                        e.inputChanged(t, "red")
                    }
                }
            }), n("input", {
                staticClass: "verte__input",
                attrs: {type: "number", min: "0", max: "255"},
                domProps: {value: e.rgb.green},
                on: {
                    change: function (t) {
                        e.inputChanged(t, "green")
                    }
                }
            }), n("input", {
                staticClass: "verte__input",
                attrs: {type: "number", min: "0", max: "255"},
                domProps: {value: e.rgb.blue},
                on: {
                    change: function (t) {
                        e.inputChanged(t, "blue")
                    }
                }
            })] : e._e(), "hex" === e.currentModel ? [n("input", {
                staticClass: "verte__input",
                attrs: {type: "text"},
                domProps: {value: e.hex},
                on: {
                    change: function (t) {
                        e.inputChanged(t, "hex")
                    }
                }
            })] : e._e(), n("button", {
                staticClass: "verte__submit",
                attrs: {type: "button"},
                on: {click: e.submit}
            }, [n("title", [e._v("Submit Icon")]), n("svg", {
                staticClass: "verte__icon",
                attrs: {viewBox: "0 0 24 24"}
            }, [n("path", {attrs: {d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])], 2), e.showHistory ? n("div", {
                ref: "recent",
                staticClass: "verte__recent"
            }, e._l(e.historySource, function (t) {
                return n("a", {
                    staticClass: "verte__recent-color",
                    style: "color: " + t,
                    attrs: {role: "button", href: "#"},
                    on: {
                        click: function (n) {
                            n.preventDefault(), e.selectColor(t)
                        }
                    }
                })
            })) : e._e()], 2)], 1)])])
        }, je = [];
        Ne._withStripped = !0;
        var He = void 0, Pe = void 0, Ue = void 0, Re = !1;

        function Be(e, t, n, a, i, r, o, s) {
            var l = ("function" === typeof n ? n.options : n) || {};
            return l.__file = "/mnt/c/Users/Abdelrahman/Projects/verte/src/components/Verte.vue", l.render || (l.render = e.render, l.staticRenderFns = e.staticRenderFns, l._compiled = !0, i && (l.functional = !0)), l._scopeId = a, l
        }

        function Fe() {
            var e = document.head || document.getElementsByTagName("head")[0], t = Fe.styles || (Fe.styles = {}),
                n = "undefined" !== typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
            return function (a, i) {
                if (!document.querySelector('style[data-vue-ssr-id~="' + a + '"]')) {
                    var r = n ? i.media || "default" : a, o = t[r] || (t[r] = {ids: [], parts: [], element: void 0});
                    if (!o.ids.includes(a)) {
                        var s = i.source, l = o.ids.length;
                        if (o.ids.push(a), n && (o.element = o.element || document.querySelector("style[data-group=" + r + "]")), !o.element) {
                            var c = o.element = document.createElement("style");
                            c.type = "text/css", i.media && c.setAttribute("media", i.media), n && (c.setAttribute("data-group", r), c.setAttribute("data-next-index", "0")), e.appendChild(c)
                        }
                        if (n && (l = parseInt(o.element.getAttribute("data-next-index")), o.element.setAttribute("data-next-index", l + 1)), o.element.styleSheet) o.parts.push(s), o.element.styleSheet.cssText = o.parts.filter(Boolean).join("\n"); else {
                            var u = document.createTextNode(s), d = o.element.childNodes;
                            d[l] && o.element.removeChild(d[l]), d.length ? o.element.insertBefore(u, d[l]) : o.element.appendChild(u)
                        }
                    }
                }
            }
        }

        var qe = Be({render: Ne, staticRenderFns: je}, He, $e, Pe, Re, Ue, Fe, void 0), Ie = qe,
            De = (n("bbb4"), n("12de")), ze = {
                name: "ThemeSetting",
                mixins: [l["a"], l["b"]],
                components: {AttachmentSelectDrawer: u["a"], FooterToolBar: d["a"], Verte: Ie},
                data: function () {
                    return {
                        attachmentDrawerVisible: !1,
                        selectedTheme: this.theme,
                        themeConfiguration: [],
                        themeSettings: [],
                        settingLoading: !0,
                        selectedField: "",
                        wrapperCol: {xl: {span: 12}, lg: {span: 12}, sm: {span: 24}, xs: {span: 24}},
                        viewMode: !1,
                        formColValue: 12,
                        clientHeight: document.documentElement.clientHeight
                    }
                },
                model: {prop: "visible", event: "close"},
                props: {theme: {type: Object, required: !0}, visible: {type: Boolean, required: !1, default: !0}},
                created: function () {
                    this.loadSkeleton(), this.initData()
                },
                watch: {
                    visible: function (e, t) {
                        e && this.loadSkeleton()
                    }
                },
                computed: Object(s["a"])({}, Object(c["c"])(["options"])),
                methods: {
                    loadSkeleton: function () {
                        var e = this;
                        this.settingLoading = !0, setTimeout(function () {
                            e.settingLoading = !1
                        }, 500)
                    }, initData: function () {
                        var e = this;
                        this.settingLoading = !0, De["a"].fetchConfiguration(this.selectedTheme.id).then(function (t) {
                            e.themeConfiguration = t.data.data, De["a"].fetchSettings(e.selectedTheme.id).then(function (t) {
                                e.themeSettings = t.data.data, setTimeout(function () {
                                    e.settingLoading = !1
                                }, 300)
                            })
                        })
                    }, handleSaveSettings: function () {
                        var e = this;
                        De["a"].saveSettings(this.selectedTheme.id, this.themeSettings).then(function (t) {
                            e.$message.success("保存成功！"), e.viewMode && document.getElementById("themeViewIframe").contentWindow.location.reload(!0)
                        })
                    }, onClose: function () {
                        this.$emit("close", !1)
                    }, handleShowSelectAttachment: function (e) {
                        this.selectedField = e, this.attachmentDrawerVisible = !0
                    }, handleSelectAttachment: function (e) {
                        this.themeSettings[this.selectedField] = encodeURI(e.path), this.attachmentDrawerVisible = !1
                    }, toggleViewMode: function () {
                        this.viewMode = !this.viewMode, this.viewMode ? (this.formColValue = 4, this.wrapperCol = {
                            xl: {span: 24},
                            lg: {span: 24},
                            sm: {span: 24},
                            xs: {span: 24}
                        }) : (this.formColValue = 12, this.wrapperCol = {
                            xl: {span: 12},
                            lg: {span: 12},
                            sm: {span: 24},
                            xs: {span: 24}
                        })
                    }
                }
            }, We = ze, Ge = n("2877"), Je = Object(Ge["a"])(We, r, o, !1, null, null, null), Ye = Je.exports, Xe = {
                components: {ThemeSetting: Ye}, data: function () {
                    return {
                        themeLoading: !1,
                        uploadThemeVisible: !1,
                        uploadNewThemeVisible: !1,
                        fetchButtonLoading: !1,
                        themes: [],
                        themeSettingVisible: !1,
                        selectedTheme: {},
                        fetchingUrl: null,
                        uploadHandler: De["a"].upload,
                        updateByUploadHandler: De["a"].updateByUpload,
                        prepareUpdateTheme: {}
                    }
                }, computed: {
                    sortedThemes: function () {
                        var e = this.themes.slice(0);
                        return e.sort(function (e, t) {
                            return t.activated - e.activated
                        })
                    }
                }, created: function () {
                    this.loadThemes()
                }, destroyed: function () {
                    this.themeSettingVisible && (this.themeSettingVisible = !1)
                }, beforeRouteLeave: function (e, t, n) {
                    this.themeSettingVisible && (this.themeSettingVisible = !1), n()
                }, methods: {
                    loadThemes: function () {
                        var e = this;
                        this.themeLoading = !0, De["a"].listAll().then(function (t) {
                            e.themes = t.data.data, e.themeLoading = !1
                        })
                    }, activeTheme: function (e) {
                        var t = this;
                        De["a"].active(e).then(function (e) {
                            t.$message.success("设置成功！"), t.loadThemes()
                        })
                    }, handleUpdateTheme: function (e) {
                        var t = this;
                        De["a"].update(e).then(function (e) {
                            t.$message.success("更新成功！"), t.loadThemes()
                        })
                    }, handleDeleteTheme: function (e) {
                        var t = this;
                        De["a"].delete(e).then(function (e) {
                            t.$message.success("删除成功！"), t.loadThemes()
                        })
                    }, handleUploadSuccess: function () {
                        this.uploadThemeVisible && (this.uploadThemeVisible = !1), this.uploadNewThemeVisible && (this.uploadNewThemeVisible = !1), this.loadThemes()
                    }, handleEditClick: function (e) {
                        this.settingDrawer(e)
                    }, handleActivateClick: function (e) {
                        this.activeTheme(e.id)
                    }, handleFetching: function () {
                        var e = this;
                        this.fetchingUrl ? (this.fetchButtonLoading = !0, De["a"].fetching(this.fetchingUrl).then(function (t) {
                            e.$message.success("拉取成功！"), e.uploadThemeVisible = !1, e.loadThemes()
                        }).finally(function () {
                            e.fetchButtonLoading = !1
                        })) : this.$notification["error"]({message: "提示", description: "远程地址不能为空！"})
                    }, handleReload: function () {
                        var e = this;
                        De["a"].reload().then(function (t) {
                            e.loadThemes(), e.$message.success("刷新成功！")
                        })
                    }, handleShowUpdateNewThemeModal: function (e) {
                        this.prepareUpdateTheme = e, this.uploadNewThemeVisible = !0
                    }, handleShowThemeSetting: function (e) {
                        this.selectedTheme = e, this.themeSettingVisible = !0
                    }, onThemeUploadClose: function () {
                        this.uploadThemeVisible && this.$refs.upload.handleClearFileList(), this.uploadNewThemeVisible && this.$refs.updateByupload.handleClearFileList(), this.loadThemes()
                    }, onThemeSettingsClose: function () {
                        this.themeSettingVisible = !1, this.selectedTheme = {}
                    }
                }
            }, Ze = Xe, Ke = (n("241a"), Object(Ge["a"])(Ze, a, i, !1, null, null, null));
        t["default"] = Ke.exports
    }, a796: function (e, t, n) {
        "use strict";
        var a = n("bc3a"), i = n.n(a), r = n("9efd"), o = "/api/admin/attachments", s = {
            query: function (e) {
                return Object(r["a"])({url: o, params: e, method: "get"})
            }, get: function (e) {
                return Object(r["a"])({url: "".concat(o, "/").concat(e), method: "get"})
            }, delete: function (e) {
                return Object(r["a"])({url: "".concat(o, "/").concat(e), method: "delete"})
            }, update: function (e, t) {
                return Object(r["a"])({url: "".concat(o, "/").concat(e), method: "put", data: t})
            }, getMediaTypes: function () {
                return Object(r["a"])({url: "".concat(o, "/media_types"), method: "get"})
            }
        };
        s.CancelToken = i.a.CancelToken, s.isCancel = i.a.isCancel, s.upload = function (e, t, n) {
            return Object(r["a"])({
                url: "".concat(o, "/upload"),
                timeout: 864e4,
                data: e,
                onUploadProgress: t,
                cancelToken: n,
                method: "post"
            })
        }, s.uploads = function (e, t, n) {
            return Object(r["a"])({
                url: "".concat(o, "/uploads"),
                timeout: 864e4,
                data: e,
                onUploadProgress: t,
                cancelToken: n,
                method: "post"
            })
        }, s.type = {
            LOCAL: {type: "local", text: "本地"},
            SMMS: {type: "smms", text: "SM.MS"},
            UPYUN: {type: "upyun", text: "又拍云"},
            QNYUN: {type: "qnyun", text: "七牛云"},
            ALIYUN: {type: "aliyun", text: "阿里云"},
            BAIDUYUN: {type: "baiduyun", text: "百度云"},
            TENCENTYUN: {type: "tencentyun", text: "腾讯云"}
        }, t["a"] = s
    }, bbb4: function (e, t, n) {
    }
}]);