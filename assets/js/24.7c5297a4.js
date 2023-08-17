(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{338:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"正则简介和图形化工具使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则简介和图形化工具使用"}},[s._v("#")]),s._v(" 正则简介和图形化工具使用")]),s._v(" "),a("p",[s._v("正则表达式是一套匹配固定格式字符串的语法规则。常用来对字符串的查找替换等操作。\n为了方便学习和使用正则表达式，可以借助图形化工具翻译\n如网站"),a("a",{attrs:{href:"https://regexper.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("regexper"),a("OutboundLink")],1),s._v("可以将表达式转换为图形语义")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\w{3,8}@(\\w|\\d){2,5}\\.(\\w){2}")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如下图展示"),a("img",{attrs:{src:"/assets/images/regex1.png",alt:"regex1"}}),s._v("正则表达式可以通过对象字面量创建：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\d+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以使用构造函数创建")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\\\bhello\\\\b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("正则表达式只有一个test方法，即(正则)."),a("strong",[s._v("test")]),s._v("(字符串)，其他的为字符串方法如(字符串)."),a("strong",[s._v("match")]),s._v("(正则)，(字符串)."),a("strong",[s._v("search")]),s._v("(正则)，(字符串)."),a("strong",[s._v("replace")]),s._v("(正则)，(字符串)."),a("strong",[s._v("split")]),s._v("(正则)")]),s._v(" "),a("h2",{attrs:{id:"修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[s._v("#")]),s._v(" 修饰符")]),s._v(" "),a("ul",[a("li",[s._v("g: global全局搜索，不添加的话，只搜索到第一个就会停止")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'上海市北京市郑州市'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("市")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"省"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["市", index: 2, input: "上海市北京市郑州市", groups: undefined]')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'上海市北京市郑州市'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("市")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"省"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//  ["市", "市", "市"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("i: ignore case 忽略大小写，默认是大小写敏感")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'heLlo worLd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("l")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"heL!o worLd"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'heLlo worLd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("l")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("gi")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"he!!o wor!d"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("m：multiple line多行搜索")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v('"@'),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("456")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("789")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".replace(/^@./g,"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v('\n"'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("456")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("789")]),s._v('"\n\n"@'),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("456")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("789")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".replace(/^@./gm,"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v('\n"'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v('"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"元字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[s._v("#")]),s._v(" 元字符")]),s._v(" "),a("p",[s._v("正则表达是有两种基本字符类型组成")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("原义文本字符：如“是”，“s”")])]),s._v(" "),a("li",[a("p",[s._v("元字符:在正则表达式中有特殊含义的非字母字符\n^ |  $ ? * + . \\ ( ) { } [ ]\n|名称|含义|\n|:---|:--😐\n| ^ | 匹配输入字符串的开始位置。如果是在[]内，表示否定的意思 |\n| $ | 匹配字符串结束的位置。 |\n| . | 匹配除换行符（\\n、\\r）之外的任何单个字符。 |\n| \\ | 将下一个字符标记为一个特殊字符的引用转义符。 |\n| * | 匹配显示零次或多次 |\n| + | 匹配显示1次或多次 |\n| ? | 匹配显示0次或1次 |\n| \\b | 匹配一个单词边界，也就是指单词和空格间的位置。 |\n| \\B | 匹配非单词边界。 |\n| \\d | 匹配一个数字字符。 |\n| \\D |匹配一个非数字字符。 |\n| \\n |匹配一个换行符。 |\n| \\r | 匹配一个回车符 |\n| \\s | 匹配任何空白字符，包括空格、制表符、换页符等等。 |\n| \\S | 匹配任何非空白字符。 |\n| \\w | 匹配字母、数字、下划线。 |\n| \\W | 匹配非字母、数字、下划线。 |")]),s._v(" "),a("p",[a("strong",[s._v("\\b")]),s._v("  匹配边界值\n"),a("img",{attrs:{src:"/assets/images/regex2.png",alt:"regex2"}})])])]),s._v(" "),a("p",[s._v('"hello world lo".replace(/lo\\b/g,"!")       >   "hel! world !"')]),s._v(" "),a("p",[s._v('"hello world lo".replace(/\\Blo\\b/g,"!")   >   "hel! world lo"')]),s._v(" "),a("p",[a("strong",[s._v("\\w")]),s._v(" "),a("img",{attrs:{src:"/assets/images/regex3.png",alt:"regex3"}}),s._v(" "),a("strong",[s._v("\\d")]),s._v(" "),a("img",{attrs:{src:"/assets/images/regex4.png",alt:"regex4"}})]),s._v(" "),a("h2",{attrs:{id:"字符类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符类"}},[s._v("#")]),s._v(" 字符类")]),s._v(" "),a("p",[s._v("一般情况下正则字符匹配的是一个字符串。如果匹配一类特性的字符，要创建一个特定的字符类，元字符[]可以把一些字符归为一类，表达式可以匹配这一类的字符。")]),s._v(" "),a("p",[s._v("如果使用/[hello]/,匹配到单独的或h、或e、或l、或o单个字母\n/hello/匹配到完整的hello单词")]),s._v(" "),a("p",[s._v("/[hello]/\n"),a("img",{attrs:{src:"/assets/images/regex5.png",alt:"regex5"}}),s._v("\n/hello/\n"),a("img",{attrs:{src:"/assets/images/regex6.png",alt:"regex6"}})]),s._v(" "),a("p",[a("strong",[s._v("在字符类里面写上^表示否定")])]),s._v(" "),a("p",[s._v("[^hello]\n"),a("img",{attrs:{src:"/assets/images/%5Ehello.png",alt:"^hello"}})]),s._v(" "),a("h2",{attrs:{id:"量词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#量词"}},[s._v("#")]),s._v(" 量词")]),s._v(" "),a("p",[s._v("{20}匹配20次\n{4,}至少4次\n{1,5}1次到5次\n{0,8} 0次到8次\n? 零次或一次，最多一次\n+一次或多次，至少一次\n*零次或者多次")]),s._v(" "),a("h2",{attrs:{id:"分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[s._v("#")]),s._v(" 分组")]),s._v(" "),a("p",[s._v("可以使用()对要匹配的内容进行分组")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a1a2a3a4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\w\\d{3}")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 匹配不到结果 "a1a2a3a4"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a1a2a3a4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("(\\w\\d){3}")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//可以匹配字母加数字的重复3次  "Xa4"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("分组常用于改变数据格式，反向引用\n$代表分组的内容，$1表示第一组，$2表示第二组")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-08-06"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("(\\d{4})-(\\d{2})-(\\d{2})")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$2/$3/$1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "08/06/2019"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"范围类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#范围类"}},[s._v("#")]),s._v(" 范围类")]),s._v(" "),a("p",[s._v("正则表达式里有创建字符类，可以用来匹配一类字符，如[0123456789],这样会造成书写困难不雅观。可以直接写成[0-9],字母可以写成[a-z]。这是一个闭区间，包含了两头的字符。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-05-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[0-9]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx-xx-xx"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-05-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[0-9-]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxxxxxx"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"贪婪模式和非贪婪模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪婪模式和非贪婪模式"}},[s._v("#")]),s._v(" 贪婪模式和非贪婪模式")]),s._v(" "),a("p",[s._v("正则表达式会尽可能多的匹配，默认贪婪模式")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1234567"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\d{3,5}")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "X67"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将贪婪模式转为非贪婪模式，只需要在量词后加?")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1234567"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\d{3,5}?")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "XX7"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"前瞻"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前瞻"}},[s._v("#")]),s._v(" 前瞻")]),s._v(" "),a("p",[s._v("正则表达式从文本左边往右边匹配解析，向右边的方向称作“前”\n从右往左匹配称作“后”\n"),a("strong",[s._v("正向前瞻")]),s._v("  exp(?=assert)  当符合了第一个表达式后，继续向右查看是否符合断言部分（也是正则表达式），符合了则为匹配\n"),a("strong",[s._v("负向前瞻")]),s._v("  exp(?!assert)   当符合了第一个表达式后，继续向右查看是否符合断言部分（也是正则表达式），不符合断言，则为匹配")]),s._v(" "),a("p",[a("strong",[a("u",[s._v("断言部分不参与替换")])])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123wfor!dword789"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\d{3}(?!(w))")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"N"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "123wfor!dwordN" 匹配到789并替换成N，因为123后面是w，不符合断言部分的后边不是w条件')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123wfor!dword789"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\d{3}(?!(f))")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"N"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "Nwfor!dwordN"  匹配到123和789，断言是后边不能是f，都符合条件')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123wfor!dword789"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\d{3}((?!(for)).)*$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"N"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"123wfor!dwordN" 匹配到了789，因为123后边包含了for单词   ')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (assert.)*$表示以任意字符结尾往左查找，来判断断言部分的内容")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ((?!word).)*$ 表示字符串中不能包含word的断言")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123wfor!dword789"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\d{3}((?!(word)).)*$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"N"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"123wfor!dwordN"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);