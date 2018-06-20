(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{159:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),s("ul",[s("li",[s("router-link",{attrs:{to:"./../guide/assets.html#base-url"}},[t._v("Base URL")])],1),s("li",[s("router-link",{attrs:{to:"./../guide/deploy.html#github-pages"}},[t._v("Deploy Guide > Github Pages")])],1)]),t._m(7),t._m(8),s("p",[t._v("Title for the site. This will be the prefix for all page titles, and displayed in the navbar in the default theme.")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),s("p",[t._v("Specify the host to use for the dev server.")]),t._m(18),t._m(19),s("p",[t._v("Specify the port to use for the dev server.")]),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),s("p",[t._v("Provide the Google Analytics ID to enable integration.")]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("Please be aware of "),s("a",{attrs:{href:"https://ec.europa.eu/commission/priorities/justice-and-fundamental-rights/data-protection/2018-reform-eu-data-protection-rules_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDPR (2018 reform of EU data protection rules)"),s("OutboundLink")],1),t._v(" and consider setting Google Analytics to "),s("a",{attrs:{href:"https://support.google.com/analytics/answer/2763052?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("anonymize IPs"),s("OutboundLink")],1),t._v(" where appropriate and/or needed.")])]),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("PWA NOTES")]),s("p",[t._v("The "),s("code",[t._v("serviceWorker")]),t._v(" option only handles the service worker. To make your site fully PWA-compliant, you will need to provide the Web App Manifest and icons in "),s("code",[t._v(".vuepress/public")]),t._v(". For more details, see "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN docs about the Web App Manifest"),s("OutboundLink")],1),t._v(".")]),s("p",[t._v("Also, only enable this if you are able to deploy your site with SSL, since service worker can only be registered under HTTPs URLs.")])]),t._m(30),t._m(31),s("p",[t._v("Specify locales for i18n support. For more details, see the guide on "),s("router-link",{attrs:{to:"./../guide/i18n.html"}},[t._v("Internationalization")]),t._v(".")],1),t._m(32),t._m(33),s("p",[t._v("A function to control what files should have "),s("code",[t._v('<link rel="preload">')]),t._v(" resource hints generated. See "),s("a",{attrs:{href:"https://ssr.vuejs.org/api/#shouldprefetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("shouldPrefetch"),s("OutboundLink")],1),t._v(".")]),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),s("p",[t._v("Provide config options to the used theme. The options will vary depending on the theme you are using.")]),t._m(40),s("ul",[s("li",[s("router-link",{attrs:{to:"./../default-theme-config/"}},[t._v("Default Theme Configuration")]),t._v(".")],1)]),t._m(41),t._m(42),t._m(43),s("p",[t._v("Whether to show line numbers to the left of each code blocks.")]),t._m(44),s("ul",[s("li",[s("router-link",{attrs:{to:"./../guide/markdown.html#line-numbers"}},[t._v("Line Numbers")])],1)]),t._m(45),s("ul",[t._m(46),s("li",[t._v("Default: "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/lib/markdown/slugify.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),s("OutboundLink")],1)])]),s("p",[t._v("Function for transforming header texts into slugs. This affects the ids/links generated for header anchors, table of contents and sidebar links.")]),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),s("p",[t._v("Options for "),s("a",{attrs:{href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-anchor"),s("OutboundLink")],1),t._v(". (Note: prefer "),s("code",[t._v("markdown.slugify")]),t._v(" if you want to customize header ids.)")]),t._m(52),t._m(53),s("p",[t._v("Options for "),s("a",{attrs:{href:"https://github.com/Oktavilla/markdown-it-table-of-contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-table-of-contents"),s("OutboundLink")],1),t._v(". (Note: prefer "),s("code",[t._v("markdown.slugify")]),t._v(" if you want to customize header ids.)")]),t._m(54),t._m(55),s("p",[t._v("A function to modify default config or apply additional plugins to the "),s("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),s("OutboundLink")],1),t._v(" instance used to render source files. Example:")]),t._m(56),t._m(57),t._m(58),t._m(59),s("p",[t._v("Options for "),s("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-loader"),s("OutboundLink")],1),t._v(". Note specifying this value will overwrite autoprefixer and you will need to include it yourself.")]),t._m(60),t._m(61),s("p",[t._v("Options for "),s("a",{attrs:{href:"https://github.com/shama/stylus-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylus-loader"),s("OutboundLink")],1),t._v(".")]),t._m(62),t._m(63),s("p",[t._v("Options for "),s("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),s("OutboundLink")],1),t._v(" to load "),s("code",[t._v("*.scss")]),t._v(" files.")]),t._m(64),t._m(65),s("p",[t._v("Options for "),s("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),s("OutboundLink")],1),t._v(" to load "),s("code",[t._v("*.sass")]),t._v(" files.")]),t._m(66),t._m(67),s("p",[t._v("Options for "),s("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("less-loader"),s("OutboundLink")],1),t._v(".")]),t._m(68),t._m(69),s("p",[t._v("Modify the internal webpack config. If the value is an Object, it will be merged into the final config using "),s("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-merge"),s("OutboundLink")],1),t._v("; If the value is a function, it will receive the config as the 1st argument and an "),s("code",[t._v("isServer")]),t._v(" flag as the 2nd argument. You can either mutate the config directly, or return an object to be merged:")]),t._m(70),t._m(71),t._m(72),s("p",[t._v("Modify the internal webpack config with "),s("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),s("OutboundLink")],1),t._v(".")]),t._m(73),t._m(74),t._m(75),t._m(76),t._m(77)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"config-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Config Reference")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"basic-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"base"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base","aria-hidden":"true"}},[this._v("#")]),this._v(" base")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("/")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The base URL the site will be deployed at. You will need to set this if you plan to deploy your site under a sub path, for example GitHub pages. If you plan to deploy your site to "),e("code",[this._v("https://foo.github.io/bar/")]),this._v(", then "),e("code",[this._v("base")]),this._v(" should be set to "),e("code",[this._v('"/bar/"')]),this._v(". It should always start and end with a slash.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("base")]),this._v(" is automatically prepended to all the URLs that start with "),e("code",[this._v("/")]),this._v(" in other options, so you only need to specify it once.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Also see:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title","aria-hidden":"true"}},[this._v("#")]),this._v(" title")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" description")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Description for the site. This will be rendered as a "),e("code",[this._v("<meta>")]),this._v(" tag in the page HTML.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head","aria-hidden":"true"}},[this._v("#")]),this._v(" head")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Array")])]),e("li",[this._v("Default: "),e("code",[this._v("[]")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Extra tags to be injected to the page HTML "),e("code",[this._v("<head>")]),this._v(". Each tag can be specified in the form of "),e("code",[this._v("[tagName, { attrName: attrValue }, innerHTML?]")]),this._v(". For example, to add a custom favicon:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  head"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'link'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'icon'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/logo.png'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host","aria-hidden":"true"}},[this._v("#")]),this._v(" host")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("'0.0.0.0'")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"port"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port","aria-hidden":"true"}},[this._v("#")]),this._v(" port")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("number")])]),e("li",[this._v("Default: "),e("code",[this._v("8080")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"dest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dest","aria-hidden":"true"}},[this._v("#")]),this._v(" dest")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v(".vuepress/dist")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Specify the output directory for "),e("code",[this._v("vuepress build")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ga"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ga","aria-hidden":"true"}},[this._v("#")]),this._v(" ga")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"serviceworker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker","aria-hidden":"true"}},[this._v("#")]),this._v(" serviceWorker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("boolean")])]),e("li",[this._v("Default: "),e("code",[this._v("false")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If set to "),e("code",[this._v("true")]),this._v(", VuePress will automatically generate and register a service worker that caches the content for offline use (only enabled in production).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If developing a custom theme, the "),e("code",[this._v("Layout.vue")]),this._v(" component will also be emitting the following events:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("sw-ready")])]),e("li",[e("code",[this._v("sw-cached")])]),e("li",[e("code",[this._v("sw-updated")])]),e("li",[e("code",[this._v("sw-offline")])]),e("li",[e("code",[this._v("sw-error")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"locales"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#locales","aria-hidden":"true"}},[this._v("#")]),this._v(" locales")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("{ [path: string]: Object }")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"shouldprefetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shouldprefetch","aria-hidden":"true"}},[this._v("#")]),this._v(" shouldPrefetch")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),e("li",[this._v("Default: "),e("code",[this._v("() => true")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"theming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theming","aria-hidden":"true"}},[this._v("#")]),this._v(" Theming")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme","aria-hidden":"true"}},[this._v("#")]),this._v(" theme")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Specify this to use a custom theme. With the value of "),e("code",[this._v('"foo"')]),this._v(", VuePress will attempt to load the theme component at "),e("code",[this._v("node_modules/vuepress-theme-foo/Layout.vue")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"themeconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig","aria-hidden":"true"}},[this._v("#")]),this._v(" themeConfig")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{}")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Also see:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"markdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Markdown")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-linenumbers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-linenumbers","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.lineNumbers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("boolean")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Also see:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-slugify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-slugify","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.slugify")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Type: "),e("code",[this._v("Function")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-externallinks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-externallinks","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.externalLinks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{ target: '_blank', rel: 'noopener noreferrer' }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The key and value pair will be added to "),e("code",[this._v("<a>")]),this._v(" tags that points to an external link. The default option will open external links in a new window.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-anchor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-anchor","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.anchor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-toc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-toc","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.toc")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{ includeLevel: [2, 3] }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" md "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      md"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" breaks"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      md"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"build-pipeline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-pipeline","aria-hidden":"true"}},[this._v("#")]),this._v(" Build Pipeline")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"postcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postcss","aria-hidden":"true"}},[this._v("#")]),this._v(" postcss")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{ plugins: [require('autoprefixer')] }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"stylus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stylus","aria-hidden":"true"}},[this._v("#")]),this._v(" stylus")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{ preferPathResolver: 'webpack' }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"scss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scss","aria-hidden":"true"}},[this._v("#")]),this._v(" scss")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{}")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sass","aria-hidden":"true"}},[this._v("#")]),this._v(" sass")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{ indentedSyntax: true }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less","aria-hidden":"true"}},[this._v("#")]),this._v(" less")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{}")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configurewebpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurewebpack","aria-hidden":"true"}},[this._v("#")]),this._v(" configureWebpack")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object | Function")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("isServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// mutate the config for client")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chainwebpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chainwebpack","aria-hidden":"true"}},[this._v("#")]),this._v(" chainWebpack")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainWebpack"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// config is an instance of ChainableConfig")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"browser-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browser-compatibility","aria-hidden":"true"}},[this._v("#")]),this._v(" Browser Compatibility")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"evergreen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evergreen","aria-hidden":"true"}},[this._v("#")]),this._v(" evergreen")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("boolean")])]),e("li",[this._v("Default: "),e("code",[this._v("false")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set to "),e("code",[this._v("true")]),this._v(" if you are only targeting evergreen browsers. This will disable ES5 transpilation and polyfills for IE, and result in faster builds and smaller files.")])}],!1,null,null,null);e.default=r.exports}}]);