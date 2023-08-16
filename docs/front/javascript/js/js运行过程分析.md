---
title: js 运行过程分析
date: 2023-08-12 12:16:05
permalink: /pages/a38cdb/
categories:
  - front
  - javascript
  - js
tags:
  - 
author: 
  name: 北鸟南游
  link: http://www.shenshuai.me
---
# js 运行过程分析
#### 程序运行的概念
JS可以在浏览器中运行，运行在V8引擎中执行过程
了解运行过程前，先弄清编程中的几个概念。
- 编译器（Compiler）：源代码在运行之前编译成计算机能执行的机器码，由于要编译完所有源代码后在执行，所以编译器需要更多的内存存储机器码，但执行快；如【java、c】等语言
- 解释器（Interpreter）：将源代码在运行时逐行解释执行，由于是一边解释一边执行，故启动快，执行慢；如【javascript、python】

1. 抽象语法树（AST）：解析器（Parser) 将源代码进行词法分析、语法分析后生成的抽象语法树，想要看生成的结果请戳：astexplorer.net/
2. 字节码（Bytecode）：又称作中间代码，在JS解析中就是从AST -> 字节码 -> 机器码，字节码是后面才被V8引擎引入的，主要目的是为了解决机器码带来的内存占用问题；
3. 即时编译器（JIT）：简单的理解就是一段代码被解释器执行多次之后就会变成热点代码（HotSpot），热点代码会被编译器直接编译成机器码，当代码再次执行时直接运行机器码，从而达到提高性能的目的，这种编译器和解释器混合使用的技术被叫做即时编译。
#### V8执行一段JS代码的过程图
![V8执行一段JS代码的过程图](/assets/images/article/image_2023-08-16_13-47-34.png)

#### JS即时编译器的运行过程
![JS即时编译器的运行过程](/assets/images/article/image_2023-08-16_14-12-09.png)

图片绘制参考来源：[极客时间-浏览器工作原理与实践](https://time.geekbang.org/column/intro/100033601)


