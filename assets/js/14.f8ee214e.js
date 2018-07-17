(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{224:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._m(1),s._m(2),s._m(3),s._m(4),s._m(5),s._m(6),e("p",[s._v("参见 "),e("router-link",{attrs:{to:"./../config/"}},[s._v("配置")]),s._v(" 来查看所有可配置的选项。")],1),s._m(7),s._m(8),e("p",[s._v("一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 "),e("router-link",{attrs:{to:"./../default-theme-config/"}},[s._v("默认主题")]),s._v(" 。")],1),e("p",[s._v("如果你想开发一个自定义主题，可以参考 "),e("router-link",{attrs:{to:"./custom-themes.html"}},[s._v("自定义主题")]),s._v("。")],1),s._m(9),s._m(10),s._m(11)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[this._v("$")]),this._v(" 基本配置")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[this._v("$")]),this._v(" 配置文件")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("如果没有任何配置，这个网站将会是非常局限的，用户也无法在你的网站上自由导航。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 "),t("code",[this._v(".vuepress")]),this._v(" 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br"),t("span",{staticClass:"line-number"},[this._v("5")]),t("br"),t("span",{staticClass:"line-number"},[this._v("6")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("一个 VuePress 网站必要的配置文件是 "),t("code",[this._v(".vuepress/config.js")]),this._v("，它应该导出一个 JavaScript 对象：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  title"),e("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v("'Hello VuePress'")]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  description"),e("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v("'Just playing around'")]),s._v("\n"),e("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("对于上述的配置，如果你运行起 dev server，你应该能看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、"),t("code",[this._v("h2")]),this._v(" 和 "),t("code",[this._v("h3")]),this._v(" 构建起一个简单的搜索索引。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("其他配置格式")]),t("p",[this._v("你也可以使用 YAML ("),t("code",[this._v(".vuepress/config.yml")]),this._v(") 或是 TOML ("),t("code",[this._v(".vuepress/config.toml")]),this._v(") 格式的配置文件。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"主题配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题配置","aria-hidden":"true"}},[this._v("$")]),this._v(" 主题配置")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"应用级别的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用级别的配置","aria-hidden":"true"}},[this._v("$")]),this._v(" 应用级别的配置")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 "),t("code",[this._v(".vuepress/enhanceApp.js")]),this._v(" 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。"),t("code",[this._v("enhanceApp.js")]),this._v(" 应该 "),t("code",[this._v("export default")]),this._v(" 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),e("span",{attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue"),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{attrs:{class:"token comment"}},[s._v("// VuePress 正在使用的 Vue 构造函数")]),s._v("\n  options"),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{attrs:{class:"token comment"}},[s._v("// 附加到根实例的一些选项")]),s._v("\n  router"),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{attrs:{class:"token comment"}},[s._v("// 当前应用的路由实例")]),s._v("\n  siteData "),e("span",{attrs:{class:"token comment"}},[s._v("// 站点元数据")]),s._v("\n"),e("span",{attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{attrs:{class:"token comment"}},[s._v("// ...做一些其他的应用级别的优化")]),s._v("\n"),e("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])}],!1,null,null,null);t.default=n.exports}}]);