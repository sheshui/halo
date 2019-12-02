(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6709ac89"], {
    "26ea": function (e, t, o) {
        "use strict";
        o.r(t);
        var a = function () {
                var e = this, t = this, o = t.$createElement, a = t._self._c || o;
                return a("div", {staticClass: "page-header-index-wide"}, [a("a-row", [a("a-col", {attrs: {span: 24}}, [a("div", {staticClass: "card-container"}, [a("a-tabs", {attrs: {type: "card"}}, [a("a-tab-pane", {key: "general"}, [a("span", {
                    attrs: {slot: "tab"},
                    slot: "tab"
                }, [a("a-icon", {attrs: {type: "tool"}}), t._v("常规设置\n            ")], 1), a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {
                    attrs: {
                        label: "博客标题：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.blog_title, callback: function (e) {
                            t.$set(t.options, "blog_title", e)
                        }, expression: "options.blog_title"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "博客地址：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "如：https://halo.run"},
                    model: {
                        value: t.options.blog_url, callback: function (e) {
                            t.$set(t.options, "blog_url", e)
                        }, expression: "options.blog_url"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Logo：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.blog_logo, callback: function (e) {
                            t.$set(t.options, "blog_logo", e)
                        }, expression: "options.blog_logo"
                    }
                }, [a("a", {
                    attrs: {slot: "addonAfter", href: "javascript:void(0);"}, on: {
                        click: function () {
                            return e.logoDrawerVisible = !0
                        }
                    }, slot: "addonAfter"
                }, [a("a-icon", {attrs: {type: "picture"}})], 1)])], 1), a("a-form-item", {
                    attrs: {
                        label: "Favicon：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.blog_favicon, callback: function (e) {
                            t.$set(t.options, "blog_favicon", e)
                        }, expression: "options.blog_favicon"
                    }
                }, [a("a", {
                    attrs: {slot: "addonAfter", href: "javascript:void(0);"}, on: {
                        click: function () {
                            return e.faviconDrawerVisible = !0
                        }
                    }, slot: "addonAfter"
                }, [a("a-icon", {attrs: {type: "picture"}})], 1)])], 1), a("a-form-item", {
                    attrs: {
                        label: "页脚信息：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "textarea", autosize: {minRows: 5}, placeholder: "支持 HTML 格式的文本"},
                    model: {
                        value: t.options.blog_footer_info, callback: function (e) {
                            t.$set(t.options, "blog_footer_info", e)
                        }, expression: "options.blog_footer_info"
                    }
                })], 1), a("a-form-item", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleSaveOptions}
                }, [t._v("保存")])], 1)], 1)], 1), a("a-tab-pane", {key: "seo"}, [a("span", {
                    attrs: {slot: "tab"},
                    slot: "tab"
                }, [a("a-icon", {attrs: {type: "global"}}), t._v("SEO 设置\n            ")], 1), a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {
                    attrs: {
                        label: "屏蔽搜索引擎：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-switch", {
                    model: {
                        value: t.options.seo_spider_disabled, callback: function (e) {
                            t.$set(t.options, "seo_spider_disabled", e)
                        }, expression: "options.seo_spider_disabled"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "关键词： ",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "多个关键词以英文状态下的逗号隔开"},
                    model: {
                        value: t.options.seo_keywords, callback: function (e) {
                            t.$set(t.options, "seo_keywords", e)
                        }, expression: "options.seo_keywords"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "博客描述：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "textarea", autosize: {minRows: 5}},
                    model: {
                        value: t.options.seo_description, callback: function (e) {
                            t.$set(t.options, "seo_description", e)
                        }, expression: "options.seo_description"
                    }
                })], 1), a("a-form-item", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleSaveOptions}
                }, [t._v("保存")])], 1)], 1)], 1), a("a-tab-pane", {key: "post"}, [a("span", {
                    attrs: {slot: "tab"},
                    slot: "tab"
                }, [a("a-icon", {attrs: {type: "form"}}), t._v("文章设置\n            ")], 1), a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {
                    attrs: {
                        label: "首页文章排序：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-select", {
                    model: {
                        value: t.options.post_index_sort, callback: function (e) {
                            t.$set(t.options, "post_index_sort", e)
                        }, expression: "options.post_index_sort"
                    }
                }, [a("a-select-option", {attrs: {value: "createTime"}}, [t._v("创建时间")]), a("a-select-option", {attrs: {value: "editTime"}}, [t._v("最后编辑时间")]), a("a-select-option", {attrs: {value: "visits"}}, [t._v("点击量")])], 1)], 1), a("a-form-item", {
                    attrs: {
                        label: "首页显示条数：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "number"},
                    model: {
                        value: t.options.post_index_page_size, callback: function (e) {
                            t.$set(t.options, "post_index_page_size", e)
                        }, expression: "options.post_index_page_size"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "RSS 显示条数：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "number"}, model: {
                        value: t.options.rss_page_size, callback: function (e) {
                            t.$set(t.options, "rss_page_size", e)
                        }, expression: "options.rss_page_size"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "文章摘要字数：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "number"},
                    model: {
                        value: t.options.post_summary_length, callback: function (e) {
                            t.$set(t.options, "post_summary_length", e)
                        }, expression: "options.post_summary_length"
                    }
                })], 1), a("a-form-item", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleSaveOptions}
                }, [t._v("保存")])], 1)], 1)], 1), a("a-tab-pane", {key: "comment"}, [a("span", {
                    attrs: {slot: "tab"},
                    slot: "tab"
                }, [a("a-icon", {attrs: {type: "message"}}), t._v("评论设置\n            ")], 1), a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {
                    attrs: {
                        label: "评论者头像：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-select", {
                    model: {
                        value: t.options.comment_gravatar_default, callback: function (e) {
                            t.$set(t.options, "comment_gravatar_default", e)
                        }, expression: "options.comment_gravatar_default"
                    }
                }, [a("a-select-option", {attrs: {value: "mm"}}, [t._v("默认")]), a("a-select-option", {attrs: {value: "identicon"}}, [t._v("抽象几何图形")]), a("a-select-option", {attrs: {value: "monsterid"}}, [t._v("小怪物")]), a("a-select-option", {attrs: {value: "wavatar"}}, [t._v("Wavatar")]), a("a-select-option", {attrs: {value: "retro"}}, [t._v("复古")]), a("a-select-option", {attrs: {value: "robohash"}}, [t._v("机器人")]), a("a-select-option", {attrs: {value: "blank"}}, [t._v("不显示头像")])], 1)], 1), a("a-form-item", {
                    attrs: {
                        label: "评论审核后才显示：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-switch", {
                    model: {
                        value: t.options.comment_new_need_check, callback: function (e) {
                            t.$set(t.options, "comment_new_need_check", e)
                        }, expression: "options.comment_new_need_check"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "新评论通知：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-switch", {
                    model: {
                        value: t.options.comment_new_notice, callback: function (e) {
                            t.$set(t.options, "comment_new_notice", e)
                        }, expression: "options.comment_new_notice"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "评论回复通知对方：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-switch", {
                    model: {
                        value: t.options.comment_reply_notice, callback: function (e) {
                            t.$set(t.options, "comment_reply_notice", e)
                        }, expression: "options.comment_reply_notice"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "API 评论开关：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-switch", {
                    model: {
                        value: t.options.comment_api_enabled, callback: function (e) {
                            t.$set(t.options, "comment_api_enabled", e)
                        }, expression: "options.comment_api_enabled"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "评论模块 JS：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "textarea", autosize: {minRows: 2}, placeholder: "该设置仅对内置的评论模块有效"},
                    model: {
                        value: t.options.comment_internal_plugin_js, callback: function (e) {
                            t.$set(t.options, "comment_internal_plugin_js", e)
                        }, expression: "options.comment_internal_plugin_js"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "每页显示条数： ",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "number"},
                    model: {
                        value: t.options.comment_page_size, callback: function (e) {
                            t.$set(t.options, "comment_page_size", e)
                        }, expression: "options.comment_page_size"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "占位提示：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.comment_content_placeholder, callback: function (e) {
                            t.$set(t.options, "comment_content_placeholder", e)
                        }, expression: "options.comment_content_placeholder"
                    }
                })], 1), a("a-form-item", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleSaveOptions}
                }, [t._v("保存")])], 1)], 1)], 1), a("a-tab-pane", {key: "attachment"}, [a("span", {
                    attrs: {slot: "tab"},
                    slot: "tab"
                }, [a("a-icon", {attrs: {type: "picture"}}), t._v("附件设置\n            ")], 1), a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {
                    attrs: {
                        label: "上传图片时预览：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-switch", {
                    model: {
                        value: t.options.attachment_upload_image_preview_enable, callback: function (e) {
                            t.$set(t.options, "attachment_upload_image_preview_enable", e)
                        }, expression: "options.attachment_upload_image_preview_enable"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "最大上传文件数：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "number"},
                    model: {
                        value: t.options.attachment_upload_max_files, callback: function (e) {
                            t.$set(t.options, "attachment_upload_max_files", e)
                        }, expression: "options.attachment_upload_max_files"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "同时上传文件数：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "number"},
                    model: {
                        value: t.options.attachment_upload_max_parallel_uploads, callback: function (e) {
                            t.$set(t.options, "attachment_upload_max_parallel_uploads", e)
                        }, expression: "options.attachment_upload_max_parallel_uploads"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "存储位置：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-select", {
                    on: {change: t.handleAttachChange},
                    model: {
                        value: t.options.attachment_type, callback: function (e) {
                            t.$set(t.options, "attachment_type", e)
                        }, expression: "options.attachment_type"
                    }
                }, t._l(Object.keys(t.attachmentType), function (e) {
                    return a("a-select-option", {key: e, attrs: {value: e}}, [t._v(t._s(t.attachmentType[e].text))])
                }), 1)], 1), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.smmsFormVisible,
                        expression: "smmsFormVisible"
                    }], staticClass: "smmsForm"
                }, [a("a-form-item", {
                    attrs: {
                        label: "Secret Token：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "需要到 sm.ms 官网注册后获取"},
                    model: {
                        value: t.options.smms_api_secret_token, callback: function (e) {
                            t.$set(t.options, "smms_api_secret_token", e)
                        }, expression: "options.smms_api_secret_token"
                    }
                })], 1)], 1), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.upyunFormVisible,
                        expression: "upyunFormVisible"
                    }], staticClass: "upyunForm"
                }, [a("a-form-item", {
                    attrs: {
                        label: "绑定域名：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "需要加上 http:// 或者 https://"},
                    model: {
                        value: t.options.oss_upyun_domain, callback: function (e) {
                            t.$set(t.options, "oss_upyun_domain", e)
                        }, expression: "options.oss_upyun_domain"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "空间名称：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.oss_upyun_bucket, callback: function (e) {
                            t.$set(t.options, "oss_upyun_bucket", e)
                        }, expression: "options.oss_upyun_bucket"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "操作员名称：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.oss_upyun_operator, callback: function (e) {
                            t.$set(t.options, "oss_upyun_operator", e)
                        }, expression: "options.oss_upyun_operator"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "操作员密码：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "password"},
                    model: {
                        value: t.options.oss_upyun_password, callback: function (e) {
                            t.$set(t.options, "oss_upyun_password", e)
                        }, expression: "options.oss_upyun_password"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "文件目录：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.oss_upyun_source, callback: function (e) {
                            t.$set(t.options, "oss_upyun_source", e)
                        }, expression: "options.oss_upyun_source"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "图片处理策略：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "间隔标识符+图片处理版本名称"},
                    model: {
                        value: t.options.oss_upyun_style_rule, callback: function (e) {
                            t.$set(t.options, "oss_upyun_style_rule", e)
                        }, expression: "options.oss_upyun_style_rule"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "缩略图处理策略：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "间隔标识符+图片处理版本名称，一般为后台展示所用"},
                    model: {
                        value: t.options.oss_upyun_thumbnail_style_rule, callback: function (e) {
                            t.$set(t.options, "oss_upyun_thumbnail_style_rule", e)
                        }, expression: "options.oss_upyun_thumbnail_style_rule"
                    }
                })], 1)], 1), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.qnyunFormVisible,
                        expression: "qnyunFormVisible"
                    }], staticClass: "qnyunForm"
                }, [a("a-form-item", {
                    attrs: {
                        label: "绑定域名：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "需要加上 http:// 或者 https://"},
                    model: {
                        value: t.options.oss_qiniu_domain, callback: function (e) {
                            t.$set(t.options, "oss_qiniu_domain", e)
                        }, expression: "options.oss_qiniu_domain"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "区域：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-select", {
                    model: {
                        value: t.options.oss_qiniu_zone, callback: function (e) {
                            t.$set(t.options, "oss_qiniu_zone", e)
                        }, expression: "options.oss_qiniu_zone"
                    }
                }, [a("a-select-option", {attrs: {value: "auto"}}, [t._v("自动选择")]), a("a-select-option", {attrs: {value: "z0"}}, [t._v("华东")]), a("a-select-option", {attrs: {value: "z1"}}, [t._v("华北")]), a("a-select-option", {attrs: {value: "z2"}}, [t._v("华南")]), a("a-select-option", {attrs: {value: "na0"}}, [t._v("北美")]), a("a-select-option", {attrs: {value: "as0"}}, [t._v("东南亚")])], 1)], 1), a("a-form-item", {
                    attrs: {
                        label: "Access Key：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.oss_qiniu_access_key, callback: function (e) {
                            t.$set(t.options, "oss_qiniu_access_key", e)
                        }, expression: "options.oss_qiniu_access_key"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Secret Key：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "password"},
                    model: {
                        value: t.options.oss_qiniu_secret_key, callback: function (e) {
                            t.$set(t.options, "oss_qiniu_secret_key", e)
                        }, expression: "options.oss_qiniu_secret_key"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Bucket：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "存储空间名称"},
                    model: {
                        value: t.options.oss_qiniu_bucket, callback: function (e) {
                            t.$set(t.options, "oss_qiniu_bucket", e)
                        }, expression: "options.oss_qiniu_bucket"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "图片处理策略：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "样式分隔符+图片处理样式名称"},
                    model: {
                        value: t.options.oss_qiniu_style_rule, callback: function (e) {
                            t.$set(t.options, "oss_qiniu_style_rule", e)
                        }, expression: "options.oss_qiniu_style_rule"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "缩略图处理策略：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "样式分隔符+图片处理样式名称，一般为后台展示所用"},
                    model: {
                        value: t.options.oss_qiniu_thumbnail_style_rule, callback: function (e) {
                            t.$set(t.options, "oss_qiniu_thumbnail_style_rule", e)
                        }, expression: "options.oss_qiniu_thumbnail_style_rule"
                    }
                })], 1)], 1), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.aliyunFormVisible,
                        expression: "aliyunFormVisible"
                    }], staticClass: "aliyunForm"
                }, [a("a-form-item", {
                    attrs: {
                        label: "绑定域名：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "如不填写，路径根域名将为 Bucket + EndPoint"},
                    model: {
                        value: t.options.oss_aliyun_domain, callback: function (e) {
                            t.$set(t.options, "oss_aliyun_domain", e)
                        }, expression: "options.oss_aliyun_domain"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Bucket：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "存储空间名称"},
                    model: {
                        value: t.options.oss_aliyun_bucket_name, callback: function (e) {
                            t.$set(t.options, "oss_aliyun_bucket_name", e)
                        }, expression: "options.oss_aliyun_bucket_name"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "EndPoint（地域节点）：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.oss_aliyun_endpoint, callback: function (e) {
                            t.$set(t.options, "oss_aliyun_endpoint", e)
                        }, expression: "options.oss_aliyun_endpoint"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Access Key：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.oss_aliyun_access_key, callback: function (e) {
                            t.$set(t.options, "oss_aliyun_access_key", e)
                        }, expression: "options.oss_aliyun_access_key"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Access Secret：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "password"},
                    model: {
                        value: t.options.oss_aliyun_access_secret, callback: function (e) {
                            t.$set(t.options, "oss_aliyun_access_secret", e)
                        }, expression: "options.oss_aliyun_access_secret"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "图片处理策略：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "请到阿里云控制台的图片处理获取"},
                    model: {
                        value: t.options.oss_aliyun_style_rule, callback: function (e) {
                            t.$set(t.options, "oss_aliyun_style_rule", e)
                        }, expression: "options.oss_aliyun_style_rule"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "缩略图处理策略：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "请到阿里云控制台的图片处理获取，一般为后台展示所用"},
                    model: {
                        value: t.options.oss_aliyun_thumbnail_style_rule, callback: function (e) {
                            t.$set(t.options, "oss_aliyun_thumbnail_style_rule", e)
                        }, expression: "options.oss_aliyun_thumbnail_style_rule"
                    }
                })], 1)], 1), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.baiduyunFormVisible,
                        expression: "baiduyunFormVisible"
                    }], staticClass: "baiduyunForm"
                }, [a("a-form-item", {
                    attrs: {
                        label: "绑定域名：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "如不填写，路径根域名将为 Bucket + EndPoint"},
                    model: {
                        value: t.options.bos_baiduyun_domain, callback: function (e) {
                            t.$set(t.options, "bos_baiduyun_domain", e)
                        }, expression: "options.bos_baiduyun_domain"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Bucket：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "存储空间名称"},
                    model: {
                        value: t.options.bos_baiduyun_bucket_name, callback: function (e) {
                            t.$set(t.options, "bos_baiduyun_bucket_name", e)
                        }, expression: "options.bos_baiduyun_bucket_name"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "EndPoint（地域节点）：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.bos_baiduyun_endpoint, callback: function (e) {
                            t.$set(t.options, "bos_baiduyun_endpoint", e)
                        }, expression: "options.bos_baiduyun_endpoint"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Access Key：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.bos_baiduyun_access_key, callback: function (e) {
                            t.$set(t.options, "bos_baiduyun_access_key", e)
                        }, expression: "options.bos_baiduyun_access_key"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Secret Key：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "password"},
                    model: {
                        value: t.options.bos_baiduyun_secret_key, callback: function (e) {
                            t.$set(t.options, "bos_baiduyun_secret_key", e)
                        }, expression: "options.bos_baiduyun_secret_key"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "图片处理策略：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "请到百度云控制台的图片处理获取"},
                    model: {
                        value: t.options.bos_baiduyun_style_rule, callback: function (e) {
                            t.$set(t.options, "bos_baiduyun_style_rule", e)
                        }, expression: "options.bos_baiduyun_style_rule"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "缩略图处理策略：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "请到百度云控制台的图片处理获取，一般为后台展示所用"},
                    model: {
                        value: t.options.bos_baiduyun_thumbnail_style_rule, callback: function (e) {
                            t.$set(t.options, "bos_baiduyun_thumbnail_style_rule", e)
                        }, expression: "options.bos_baiduyun_thumbnail_style_rule"
                    }
                })], 1)], 1), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.tencentyunFormVisible,
                        expression: "tencentyunFormVisible"
                    }], staticClass: "tencentyunForm"
                }, [a("a-form-item", {
                    attrs: {
                        label: "绑定域名：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "如不填写，路径根域名将为 Bucket + 区域地址"},
                    model: {
                        value: t.options.cos_tencentyun_domain, callback: function (e) {
                            t.$set(t.options, "cos_tencentyun_domain", e)
                        }, expression: "options.cos_tencentyun_domain"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Bucket：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "存储桶名称"},
                    model: {
                        value: t.options.cos_tencentyun_bucket_name, callback: function (e) {
                            t.$set(t.options, "cos_tencentyun_bucket_name", e)
                        }, expression: "options.cos_tencentyun_bucket_name"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "区域：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-select", {
                    model: {
                        value: t.options.cos_tencentyun_region, callback: function (e) {
                            t.$set(t.options, "cos_tencentyun_region", e)
                        }, expression: "options.cos_tencentyun_region"
                    }
                }, [a("a-select-option", {attrs: {value: "ap-beijing-1"}}, [t._v("北京一区")]), a("a-select-option", {attrs: {value: "ap-beijing"}}, [t._v("北京")]), a("a-select-option", {attrs: {value: "ap-shanghai"}}, [t._v("上海（华东）")]), a("a-select-option", {attrs: {value: "ap-guangzhou"}}, [t._v("广州（华南）")]), a("a-select-option", {attrs: {value: "ap-chengdu"}}, [t._v("成都（西南）")]), a("a-select-option", {attrs: {value: "ap-chongqing"}}, [t._v("重庆")])], 1)], 1), a("a-form-item", {
                    attrs: {
                        label: "Secret Id：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.cos_tencentyun_secret_id, callback: function (e) {
                            t.$set(t.options, "cos_tencentyun_secret_id", e)
                        }, expression: "options.cos_tencentyun_secret_id"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Secret Key：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "password"},
                    model: {
                        value: t.options.cos_tencentyun_secret_key, callback: function (e) {
                            t.$set(t.options, "cos_tencentyun_secret_key", e)
                        }, expression: "options.cos_tencentyun_secret_key"
                    }
                })], 1)], 1), a("a-form-item", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleSaveOptions}
                }, [t._v("保存")])], 1)], 1)], 1), a("a-tab-pane", {key: "smtp"}, [a("span", {
                    attrs: {slot: "tab"},
                    slot: "tab"
                }, [a("a-icon", {attrs: {type: "mail"}}), t._v("SMTP 服务\n            ")], 1), a("div", {staticClass: "custom-tab-wrapper"}, [a("a-tabs", [a("a-tab-pane", {
                    key: "1",
                    attrs: {tab: "发信设置"}
                }, [a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {
                    attrs: {
                        label: "是否启用：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-switch", {
                    model: {
                        value: t.options.email_enabled, callback: function (e) {
                            t.$set(t.options, "email_enabled", e)
                        }, expression: "options.email_enabled"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "SMTP 地址：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.email_host, callback: function (e) {
                            t.$set(t.options, "email_host", e)
                        }, expression: "options.email_host"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "发送协议：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.email_protocol, callback: function (e) {
                            t.$set(t.options, "email_protocol", e)
                        }, expression: "options.email_protocol"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "SSL 端口：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.email_ssl_port, callback: function (e) {
                            t.$set(t.options, "email_ssl_port", e)
                        }, expression: "options.email_ssl_port"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "邮箱账号：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.email_username, callback: function (e) {
                            t.$set(t.options, "email_username", e)
                        }, expression: "options.email_username"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "邮箱密码：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "password", placeholder: "部分邮箱可能是授权码"},
                    model: {
                        value: t.options.email_password, callback: function (e) {
                            t.$set(t.options, "email_password", e)
                        }, expression: "options.email_password"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "发件人：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.email_from_name, callback: function (e) {
                            t.$set(t.options, "email_from_name", e)
                        }, expression: "options.email_from_name"
                    }
                })], 1), a("a-form-item", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleSaveOptions}
                }, [t._v("保存")])], 1)], 1)], 1), a("a-tab-pane", {
                    key: "2",
                    attrs: {tab: "发送测试"}
                }, [a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {
                    attrs: {
                        label: "收件人：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.mailParam.to, callback: function (e) {
                            t.$set(t.mailParam, "to", e)
                        }, expression: "mailParam.to"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "主题：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.mailParam.subject, callback: function (e) {
                            t.$set(t.mailParam, "subject", e)
                        }, expression: "mailParam.subject"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "内容：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {type: "textarea", autosize: {minRows: 5}},
                    model: {
                        value: t.mailParam.content, callback: function (e) {
                            t.$set(t.mailParam, "content", e)
                        }, expression: "mailParam.content"
                    }
                })], 1), a("a-form-item", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleTestMailClick}
                }, [t._v("发送")])], 1)], 1)], 1)], 1)], 1)]), a("a-tab-pane", {key: "api"}, [a("span", {
                    attrs: {slot: "tab"},
                    slot: "tab"
                }, [a("a-icon", {attrs: {type: "thunderbolt"}}), t._v("API 设置\n            ")], 1), a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {
                    attrs: {
                        label: "API 服务：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-switch", {
                    model: {
                        value: t.options.api_enabled, callback: function (e) {
                            t.$set(t.options, "api_enabled", e)
                        }, expression: "options.api_enabled"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "Access key：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    model: {
                        value: t.options.api_access_key, callback: function (e) {
                            t.$set(t.options, "api_access_key", e)
                        }, expression: "options.api_access_key"
                    }
                })], 1), a("a-form-item", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleSaveOptions}
                }, [t._v("保存")])], 1)], 1)], 1), a("a-tab-pane", {key: "other"}, [a("span", {
                    attrs: {slot: "tab"},
                    slot: "tab"
                }, [a("a-icon", {attrs: {type: "align-left"}}), t._v("其他设置\n            ")], 1), a("a-form", {attrs: {layout: "vertical"}}, [a("a-form-item", {
                    attrs: {
                        label: "CDN 加速域名：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {placeholder: "请确保已经正确配置好了 CDN"},
                    model: {
                        value: t.options.blog_cdn_domain, callback: function (e) {
                            t.$set(t.options, "blog_cdn_domain", e)
                        }, expression: "options.blog_cdn_domain"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "自定义 head：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {
                        type: "textarea",
                        autosize: {minRows: 5},
                        placeholder: "将放置于每个页面的<head></head>标签中"
                    }, model: {
                        value: t.options.blog_custom_head, callback: function (e) {
                            t.$set(t.options, "blog_custom_head", e)
                        }, expression: "options.blog_custom_head"
                    }
                })], 1), a("a-form-item", {
                    attrs: {
                        label: "统计代码：",
                        "wrapper-col": t.wrapperCol
                    }
                }, [a("a-input", {
                    attrs: {
                        type: "textarea",
                        autosize: {minRows: 5},
                        placeholder: "第三方网站统计的代码，如：Google Analytics、百度统计、CNZZ 等"
                    }, model: {
                        value: t.options.blog_statistics_code, callback: function (e) {
                            t.$set(t.options, "blog_statistics_code", e)
                        }, expression: "options.blog_statistics_code"
                    }
                })], 1), a("a-form-item", [a("a-button", {
                    attrs: {type: "primary"},
                    on: {click: t.handleSaveOptions}
                }, [t._v("保存")])], 1)], 1)], 1)], 1)], 1)])], 1), a("AttachmentSelectDrawer", {
                    attrs: {title: "选择 Logo"},
                    on: {listenToSelect: t.handleSelectLogo},
                    model: {
                        value: t.logoDrawerVisible, callback: function (e) {
                            t.logoDrawerVisible = e
                        }, expression: "logoDrawerVisible"
                    }
                }), a("AttachmentSelectDrawer", {
                    attrs: {title: "选择 Favicon"},
                    on: {listenToSelect: t.handleSelectFavicon},
                    model: {
                        value: t.faviconDrawerVisible, callback: function (e) {
                            t.faviconDrawerVisible = e
                        }, expression: "faviconDrawerVisible"
                    }
                })], 1)
            }, s = [], i = o("cebc"), n = o("3993"), r = o("2f62"), l = o("482b"), p = o("9efd"), c = "/api/admin/mails",
            u = {
                testMail: function (e) {
                    return Object(p["a"])({url: "".concat(c, "/test"), method: "post", data: e})
                }
            }, m = u, _ = o("a796"), d = {
                components: {AttachmentSelectDrawer: n["a"]}, data: function () {
                    return {
                        attachmentType: _["a"].type,
                        wrapperCol: {xl: {span: 8}, lg: {span: 8}, sm: {span: 12}, xs: {span: 24}},
                        smmsFormVisible: !1,
                        upyunFormVisible: !1,
                        qnyunFormVisible: !1,
                        aliyunFormVisible: !1,
                        baiduyunFormVisible: !1,
                        tencentyunFormVisible: !1,
                        logoDrawerVisible: !1,
                        faviconDrawerVisible: !1,
                        options: [],
                        mailParam: {}
                    }
                }, mounted: function () {
                    this.loadFormOptions()
                }, destroyed: function () {
                    this.faviconDrawerVisible && (this.faviconDrawerVisible = !1), this.logoDrawerVisible && (this.logoDrawerVisible = !1)
                }, beforeRouteLeave: function (e, t, o) {
                    this.faviconDrawerVisible && (this.faviconDrawerVisible = !1), this.logoDrawerVisible && (this.logoDrawerVisible = !1), o()
                }, methods: Object(i["a"])({}, Object(r["b"])(["loadUser", "loadOptions"]), {
                    loadFormOptions: function () {
                        var e = this;
                        l["a"].listAll().then(function (t) {
                            e.options = t.data.data, e.handleAttachChange(e.options["attachment_type"])
                        })
                    }, handleSaveOptions: function () {
                        var e = this;
                        if (this.options.blog_title) if (this.options.blog_url) if (!this.options.comment_new_notice && !this.options.comment_reply_notice || this.options.email_enabled) {
                            switch (this.options.attachment_type) {
                                case"SMMS":
                                    if (!this.options.smms_api_secret_token) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Secret Token不能为空！"
                                    });
                                    break;
                                case"UPYUN":
                                    if (!this.options.oss_upyun_domain) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "域名不能为空！"
                                    });
                                    if (!this.options.oss_upyun_bucket) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "空间名称不能为空！"
                                    });
                                    if (!this.options.oss_upyun_operator) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "操作员名称不能为空！"
                                    });
                                    if (!this.options.oss_upyun_password) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "操作员密码不能为空！"
                                    });
                                    if (!this.options.oss_upyun_source) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "文件目录不能为空！"
                                    });
                                    break;
                                case"QNYUN":
                                    if (!this.options.oss_qiniu_domain) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "域名不能为空！"
                                    });
                                    if (!this.options.oss_qiniu_access_key) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Access Key 不能为空！"
                                    });
                                    if (!this.options.oss_qiniu_secret_key) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Secret Key 不能为空！"
                                    });
                                    if (!this.options.oss_qiniu_bucket) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Bucket 不能为空！"
                                    });
                                    break;
                                case"ALIYUN":
                                    if (!this.options.oss_aliyun_bucket_name) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Bucket 不能为空！"
                                    });
                                    if (!this.options.oss_aliyun_endpoint) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "EndPoint（地域节点） 不能为空！"
                                    });
                                    if (!this.options.oss_aliyun_access_key) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Access Key 不能为空！"
                                    });
                                    if (!this.options.oss_aliyun_access_secret) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Access Secret 不能为空！"
                                    });
                                    break;
                                case"BAIDUYUN":
                                    if (!this.options.bos_baiduyun_bucket_name) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Bucket 不能为空！"
                                    });
                                    if (!this.options.bos_baiduyun_endpoint) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "EndPoint（地域节点） 不能为空！"
                                    });
                                    if (!this.options.bos_baiduyun_access_key) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Access Key 不能为空！"
                                    });
                                    if (!this.options.bos_baiduyun_secret_key) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Secret Key 不能为空！"
                                    });
                                    break;
                                case"TENCENTYUN":
                                    if (!this.options.cos_tencentyun_bucket_name) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Bucket 不能为空！"
                                    });
                                    if (!this.options.cos_tencentyun_region) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "区域不能为空！"
                                    });
                                    if (!this.options.cos_tencentyun_secret_id) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Secret Id 不能为空！"
                                    });
                                    if (!this.options.cos_tencentyun_secret_key) return void this.$notification["error"]({
                                        message: "提示",
                                        description: "Secret Key 不能为空！"
                                    });
                                    break
                            }
                            if (this.options.email_enabled) {
                                if (!this.options.email_host) return void this.$notification["error"]({
                                    message: "提示",
                                    description: "SMTP 地址不能为空！"
                                });
                                if (!this.options.email_protocol) return void this.$notification["error"]({
                                    message: "提示",
                                    description: "发送协议不能为空！"
                                });
                                if (!this.options.email_ssl_port) return void this.$notification["error"]({
                                    message: "提示",
                                    description: "SSL 端口不能为空！"
                                });
                                if (!this.options.email_username) return void this.$notification["error"]({
                                    message: "提示",
                                    description: "邮箱账号不能为空！"
                                });
                                if (!this.options.email_password) return void this.$notification["error"]({
                                    message: "提示",
                                    description: "邮箱密码不能为空！"
                                });
                                if (!this.options.email_from_name) return void this.$notification["error"]({
                                    message: "提示",
                                    description: "发件人不能为空！"
                                })
                            }
                            !this.options.api_enabled || this.options.api_access_key ? l["a"].save(this.options).then(function (t) {
                                e.loadFormOptions(), e.loadOptions(), e.loadUser(), e.$message.success("保存成功！")
                            }) : this.$notification["error"]({message: "提示", description: "Access key 不能为空！"})
                        } else this.$notification["error"]({
                            message: "提示",
                            description: "新评论通知或回复通知需要打开和配置 SMTP 服务！"
                        }); else this.$notification["error"]({
                            message: "提示",
                            description: "博客地址不能为空！"
                        }); else this.$notification["error"]({message: "提示", description: "博客标题不能为空！"})
                    }, handleAttachChange: function (e) {
                        switch (e) {
                            case"LOCAL":
                                this.upyunFormVisible = !1, this.qnyunFormVisible = !1, this.aliyunFormVisible = !1, this.baiduyunFormVisible = !1, this.tencentyunFormVisible = !1, this.smmsFormVisible = !1;
                                break;
                            case"SMMS":
                                this.smmsFormVisible = !0, this.upyunFormVisible = !1, this.qnyunFormVisible = !1, this.aliyunFormVisible = !1, this.baiduyunFormVisible = !1, this.tencentyunFormVisible = !1;
                                break;
                            case"UPYUN":
                                this.smmsFormVisible = !1, this.upyunFormVisible = !0, this.qnyunFormVisible = !1, this.aliyunFormVisible = !1, this.baiduyunFormVisible = !1, this.tencentyunFormVisible = !1;
                                break;
                            case"QNYUN":
                                this.smmsFormVisible = !1, this.qnyunFormVisible = !0, this.upyunFormVisible = !1, this.aliyunFormVisible = !1, this.baiduyunFormVisible = !1, this.tencentyunFormVisible = !1;
                                break;
                            case"ALIYUN":
                                this.smmsFormVisible = !1, this.aliyunFormVisible = !0, this.qnyunFormVisible = !1, this.upyunFormVisible = !1, this.baiduyunFormVisible = !1, this.tencentyunFormVisible = !1;
                                break;
                            case"BAIDUYUN":
                                this.smmsFormVisible = !1, this.aliyunFormVisible = !1, this.qnyunFormVisible = !1, this.upyunFormVisible = !1, this.baiduyunFormVisible = !0, this.tencentyunFormVisible = !1;
                                break;
                            case"TENCENTYUN":
                                this.smmsFormVisible = !1, this.aliyunFormVisible = !1, this.qnyunFormVisible = !1, this.upyunFormVisible = !1, this.baiduyunFormVisible = !1, this.tencentyunFormVisible = !0;
                                break
                        }
                    }, handleSelectLogo: function (e) {
                        this.options.blog_logo = encodeURI(e.path), this.logoDrawerVisible = !1
                    }, handleTestMailClick: function () {
                        var e = this;
                        this.mailParam.to ? this.mailParam.subject ? this.mailParam.content ? m.testMail(this.mailParam).then(function (t) {
                            e.$message.info(t.data.message)
                        }) : this.$notification["error"]({
                            message: "提示",
                            description: "内容不能为空！"
                        }) : this.$notification["error"]({
                            message: "提示",
                            description: "主题不能为空！"
                        }) : this.$notification["error"]({message: "提示", description: "收件人不能为空！"})
                    }, handleSelectFavicon: function (e) {
                        this.options.blog_favicon = encodeURI(e.path), this.faviconDrawerVisible = !1
                    }
                })
            }, b = d, h = o("2877"), y = Object(h["a"])(b, a, s, !1, null, null, null);
        t["default"] = y.exports
    }, 3993: function (e, t, o) {
        "use strict";
        var a = function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", [o("a-drawer", {
                attrs: {
                    title: e.title,
                    width: e.isMobile() ? "100%" : e.drawerWidth,
                    closable: "",
                    visible: e.visible,
                    destroyOnClose: ""
                }, on: {close: e.onClose}
            }, [o("a-row", {attrs: {type: "flex", align: "middle"}}, [o("a-input-search", {
                attrs: {
                    placeholder: "搜索附件",
                    enterButton: ""
                }
            })], 1), o("a-divider"), o("a-row", {
                attrs: {
                    type: "flex",
                    align: "middle"
                }
            }, [o("a-skeleton", {
                attrs: {
                    active: "",
                    loading: e.skeletonLoading,
                    paragraph: {rows: 18}
                }
            }, [o("a-col", {attrs: {span: 24}}, e._l(e.attachments, function (t, a) {
                return o("div", {
                    key: a, staticClass: "attach-item", on: {
                        click: function (o) {
                            return e.handleSelectAttachment(t)
                        }
                    }
                }, [o("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.handleJudgeMediaType(t),
                        expression: "!handleJudgeMediaType(item)"
                    }]
                }, [e._v("当前格式不支持预览")]), o("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.handleJudgeMediaType(t),
                        expression: "handleJudgeMediaType(item)"
                    }], attrs: {src: t.thumbPath}
                })])
            }), 0)], 1)], 1), o("a-divider"), o("div", {staticClass: "page-wrapper"}, [o("a-pagination", {
                attrs: {
                    defaultPageSize: e.pagination.size,
                    total: e.pagination.total
                }, on: {change: e.handlePaginationChange}
            })], 1), o("a-divider", {staticClass: "divider-transparent"}), o("div", {staticClass: "bottom-control"}, [e.isChooseAvatar ? o("a-button", {
                staticStyle: {marginRight: "8px"},
                attrs: {type: "dashed"},
                on: {click: e.handleSelectGravatar}
            }, [e._v("使用 Gravatar")]) : e._e(), o("a-button", {
                attrs: {type: "primary"},
                on: {click: e.handleShowUploadModal}
            }, [e._v("上传附件")])], 1)], 1), o("a-modal", {
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
            }, [o("FilePondUpload", {ref: "upload", attrs: {uploadHandler: e.uploadHandler}})], 1)], 1)
        }, s = [], i = (o("28a5"), o("c5f6"), o("ac0d")), n = o("a796"), r = {
            name: "AttachmentSelectDrawer",
            mixins: [i["a"], i["b"]],
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
                    uploadHandler: n["a"].upload
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
                    t.page--, n["a"].query(t).then(function (t) {
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
                        var o = t.split("/")[0];
                        return "image" === o
                    }
                    return !1
                }, onClose: function () {
                    this.$emit("close", !1)
                }
            }
        }, l = r, p = o("2877"), c = Object(p["a"])(l, a, s, !1, null, null, null);
        t["a"] = c.exports
    }, a796: function (e, t, o) {
        "use strict";
        var a = o("bc3a"), s = o.n(a), i = o("9efd"), n = "/api/admin/attachments", r = {
            query: function (e) {
                return Object(i["a"])({url: n, params: e, method: "get"})
            }, get: function (e) {
                return Object(i["a"])({url: "".concat(n, "/").concat(e), method: "get"})
            }, delete: function (e) {
                return Object(i["a"])({url: "".concat(n, "/").concat(e), method: "delete"})
            }, update: function (e, t) {
                return Object(i["a"])({url: "".concat(n, "/").concat(e), method: "put", data: t})
            }, getMediaTypes: function () {
                return Object(i["a"])({url: "".concat(n, "/media_types"), method: "get"})
            }
        };
        r.CancelToken = s.a.CancelToken, r.isCancel = s.a.isCancel, r.upload = function (e, t, o) {
            return Object(i["a"])({
                url: "".concat(n, "/upload"),
                timeout: 864e4,
                data: e,
                onUploadProgress: t,
                cancelToken: o,
                method: "post"
            })
        }, r.uploads = function (e, t, o) {
            return Object(i["a"])({
                url: "".concat(n, "/uploads"),
                timeout: 864e4,
                data: e,
                onUploadProgress: t,
                cancelToken: o,
                method: "post"
            })
        }, r.type = {
            LOCAL: {type: "local", text: "本地"},
            SMMS: {type: "smms", text: "SM.MS"},
            UPYUN: {type: "upyun", text: "又拍云"},
            QNYUN: {type: "qnyun", text: "七牛云"},
            ALIYUN: {type: "aliyun", text: "阿里云"},
            BAIDUYUN: {type: "baiduyun", text: "百度云"},
            TENCENTYUN: {type: "tencentyun", text: "腾讯云"}
        }, t["a"] = r
    }
}]);