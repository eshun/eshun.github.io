(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{226:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),a("p",[s._v("下述的指南基于以下条件：")]),s._m(1),s._m(2),s._m(3),s._m(4),s._m(5),s._m(6),s._m(7),s._m(8),s._m(9),s._m(10),s._m(11),s._m(12),s._m(13),s._m(14),a("ol",[a("li",[a("p",[s._v("请确保你已经安装了 "),a("a",{attrs:{href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"}},[s._v("firebase-tools"),a("OutboundLink")],1),s._v("。")])]),s._m(15)]),s._m(16),s._m(17),s._m(18),s._m(19),s._m(20),s._m(21),a("ol",[a("li",[a("p",[s._v("首先，假设你已经安装了 "),a("a",{attrs:{href:"https://www.npmjs.com/package/surge",target:"_blank",rel:"noopener noreferrer"}},[s._v("surge"),a("OutboundLink")],1),s._v("；")])]),s._m(22),s._m(23)]),a("p",[s._v("你也可以通过 "),a("code",[s._v("surge docs/.vuepress/dist yourdomain.com")]),s._v(" 来部署到 "),a("a",{attrs:{href:"http://surge.sh/help/adding-a-custom-domain",target:"_blank",rel:"noopener noreferrer"}},[s._v("自定义域名"),a("OutboundLink")],1),s._v("。")]),s._m(24),a("ol",[a("li",[a("p",[s._v("首先安装 "),a("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("Heroku CLI"),a("OutboundLink")],1),s._v("；")])]),a("li",[a("p",[a("a",{attrs:{href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("在这里"),a("OutboundLink")],1),s._v(" 注册一个 Heroku 账号；")])]),s._m(25)]),s._m(26),s._m(27),s._m(28),s._m(29),a("p",[s._v("这里是你项目的配置，请参考 "),a("a",{attrs:{href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"}},[s._v("heroku-buildpack-static"),a("OutboundLink")],1),s._v(" 了解更多。")]),s._m(30),s._m(31),s._m(32),s._m(33)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[this._v("$")]),this._v(" 部署")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("文档放置在项目的 "),t("code",[this._v("docs")]),this._v(" 目录中；")]),t("li",[this._v("使用的是默认的构建输出位置；")]),t("li",[this._v("VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的 npm scripts:")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[this._v("$")]),this._v(" GitHub Pages")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ol",[a("li",[a("p",[s._v("在 "),a("code",[s._v("docs/.vuepress/config.js")]),s._v(" 中设置正确的 "),a("code",[s._v("base")]),s._v("。")]),a("p",[s._v("如果你打算发布到 "),a("code",[s._v("https://<USERNAME>.github.io/")]),s._v("，则可以省略这一步，因为 "),a("code",[s._v("base")]),s._v(" 默认即是 "),a("code",[s._v('"/"')]),s._v("。")]),a("p",[s._v("如果你打算发布到 "),a("code",[s._v("https://<USERNAME>.github.io/<REPO>/")]),s._v("（也就是说你的仓库在 "),a("code",[s._v("https://github.com/<USERNAME>/<REPO>")]),s._v("），则将 "),a("code",[s._v("base")]),s._v(" 设置为 "),a("code",[s._v('"/<REPO>/"')]),s._v("。")])]),a("li",[a("p",[s._v("在你的项目中，创建一个如下的 "),a("code",[s._v("deploy.sh")]),s._v(" 文件（请自行判断去掉高亮行的注释）:")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" add -A\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" -\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),t("p",[this._v("你可以在你的持续集成的设置中，设置在每次 push 代码时自动运行上述脚本。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"gitlab-pages-and-gitlab-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-pages-and-gitlab-ci","aria-hidden":"true"}},[this._v("$")]),this._v(" GitLab Pages and GitLab CI")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ol",[a("li",[a("p",[s._v("在 "),a("code",[s._v("docs/.vuepress/config.js")]),s._v(" 中设置正确的 "),a("code",[s._v("base")]),s._v("。")]),a("p",[s._v("如果你打算发布到 "),a("code",[s._v("https://<USERNAME or GROUP>.gitlab.io/")]),s._v("，则可以省略这一步，因为 "),a("code",[s._v("base")]),s._v(" 默认即是 "),a("code",[s._v('"/"')]),s._v("。")]),a("p",[s._v("如果你打算发布到 "),a("code",[s._v("https://<USERNAME or GROUP>.gitlab.io/<REPO>/")]),s._v("（也就是说你的仓库在 "),a("code",[s._v("https://gitlab.com/<USERNAME>/<REPO>")]),s._v("），则将 "),a("code",[s._v("base")]),s._v(" 设置为 "),a("code",[s._v('"/<REPO>/"')]),s._v("。")])]),a("li",[a("p",[s._v("在 "),a("code",[s._v(".vuepress/config.js")]),s._v(" 中将 "),a("code",[s._v("dest")]),s._v(" 设置为 "),a("code",[s._v("public")]),s._v("。")])]),a("li",[a("p",[s._v("在你项目的根目录下创建一个名为 "),a("code",[s._v(".gitlab-ci.yml")]),s._v(" 的文件，无论何时你提交了更改，它都会帮助你自动构建和部署：")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("9.11.1\n\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("pages")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{attrs:{class:"token key atrule"}},[s._v("cache")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node_modules/\n\n "),a("span",{attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm install\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm run docs"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build\n "),a("span",{attrs:{class:"token key atrule"}},[s._v("artifacts")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" public\n "),a("span",{attrs:{class:"token key atrule"}},[s._v("only")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"netlify"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[this._v("$")]),this._v(" Netlify")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",[t("li",[this._v("在 Netlify 中, 创建一个新的 Github 项目，使用以下设置：")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[t("strong",[this._v("Build Command:")]),t("code",[this._v("npm run build-docs")]),this._v(" 或者 "),t("code",[this._v("yarn build-docs")])]),t("li",[t("strong",[this._v("Publish directory:")]),t("code",[this._v("docs/.vuepress/dist")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("点击 deploy 按钮！")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"google-firebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#google-firebase","aria-hidden":"true"}},[this._v("$")]),this._v(" Google Firebase")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("p",[this._v("在你项目的根目录下创建 "),t("code",[this._v("firebase.json")]),this._v(" 和 "),t("code",[this._v(".firebaserc")]),this._v("，并包含以下内容：")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("firebase.json")]),this._v(":")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{attrs:{class:"token property"}},[s._v('"hosting"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{attrs:{class:"token property"}},[s._v('"public"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"./docs/.vuepress/dist"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{attrs:{class:"token property"}},[s._v('"ignore"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v(".firebaserc")]),this._v(":")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{attrs:{class:"token string"}},[s._v('"projects"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{attrs:{class:"token string"}},[s._v('"default"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"<YOUR_FIREBASE_ID>"')]),s._v("\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("在执行了 "),t("code",[this._v("yarn docs:build")]),this._v(" 或 "),t("code",[this._v("npm run docs:build")]),this._v(" 后, 使用 "),t("code",[this._v("firebase deploy")]),this._v(" 指令来部署。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"surge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#surge","aria-hidden":"true"}},[this._v("$")]),this._v(" Surge")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("p",[this._v("运行 "),t("code",[this._v("yarn docs:build")]),this._v(" 或者 "),t("code",[this._v("npm run docs:build")]),this._v("；")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("p",[this._v("想要使用 surge 来部署，你可以运行： "),t("code",[this._v("surge docs/.vuepress/dist")]),this._v("；")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"heroku"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heroku","aria-hidden":"true"}},[this._v("$")]),this._v(" Heroku")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("p",[this._v("运行 "),t("code",[this._v("heroku login")]),this._v(" 并填写你的 Heroku 证书：")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("heroku login\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("在你的项目根目录中，创建一个名为 "),t("code",[this._v("static.json")]),this._v(" 的文件，并包含下述内容：")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("static.json")]),this._v(":")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{attrs:{class:"token property"}},[s._v('"root"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"./docs/.vuepress/dist"')]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"5"}},[t("li",[this._v("配置 Heroku 的 git 远程仓库：")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 版本变化")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" add "),a("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{attrs:{class:"token string"}},[s._v('"My site ready for deployment."')]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 以指定的名称创建一个新的 heroku 应用")]),s._v("\nheroku apps:create example\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 为静态网站设置构建包")]),s._v("\nheroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"6"}},[t("li",[this._v("部署你的网站：")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 发布网站")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push heroku master\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 打开浏览器查看 Helku CI 的 dashboard")]),s._v("\nheroku "),a("span",{attrs:{class:"token function"}},[s._v("open")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])}],!1,null,null,null);t.default=e.exports}}]);