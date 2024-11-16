---
title: 【面向IT类专业弱基础学生】Visual Studio Code 安装与C&C++ 编程运行环境配置等相关知识点教程
description: 针对本科阶段前未实际接触IT类知识面或者计算机使用的大学生的一体化基础教程
author: 沐（教员版）
date: 2024-10-26 23:11:21
updated: 2024-10-27 15:31:18
reward: true
readmore: true
hideTime: false
comments: false
tags:
  - 计算机基础
  - VisualStudioCode
  - 字符编码
  - MinGW
  - C语言
  - C++
categories:
  - 教程
---

# 写在开头的

说来无奈，如果不是因为要写这篇文章，我感觉我甚至连网站都懒得更新，但与此现实中的我，压根也不清楚是因为按照什么挑选，被自己学院本年级安排和其他几个小伙伴负责在大一的晚自修和各专业的程序设计基础课（C语言）学习感到吃力的学生进行“学习困难生”补习。若不是因为需要备课和准备供学生阅读的资料，我甚至不会写这类文章（其实本身也没写多少文章吧.......）
**哎！那聪明的小朋友又要问了，备课和资料为什么不通过PPT或者Words文档或者PDF的方式准备呢？**
我觉得，本着知识流通的想法（因为本博客本身就能被Bing搜索引擎展示），写都写了，不如直接对外也公开，没准真能帮到哪个清澈愚蠢的大学生呢？
说是自己写，其实也是东拼西凑总结的资料（总比东看西看要方便吧）
`声明：本文转载内容遵循 CC 4.0 BY-SA 版权协议将附上原文出处链接，用于演示的电脑系统为Windows 11，涉及的一些功能设置与 Windows 10 存在差异，如有相关需要的Windows 10 用户请通过搜索引擎搜索相关内容`
~~泥🐴的怎么这么多话！~~


![E9C252110AAE2A02FBF57E0386A88DF6.gif](https://telegraph-img-by-bot.pages.dev/file/1729957060934_E9C252110AAE2A02FBF57E0386A88DF6.gif)

<!-- more -->
## 致东方学生的
除了上面是为了本人博客/公众号发布内容的格式外写的~~废~~话，以下讲的内容均等同于课堂上的教程与知识点（于2024-10-27 18:15~19:05节次课），因为资源涉及的外国服务器网站较多，为了节省课内时间，均会直接提供最新版资源。


# 导入（谁见了都想摇头的概念篇）

>~~鲁迅曾经说过~~一句真理：要写代码并让其能够运行起来得先安装编辑器和编译器

## 编辑器、编译器、解释器、调试器与IDE
**哎！那聪明的小朋友要问了，关于这类又关联的东西好像有叫编辑器、编译器、解释器、调试器与IDE的？他们分别是什么呢？**
![](https://telegraph-img-by-bot.pages.dev/file/57241216aabe66eb9abdb.jpg)

[*引用*](https://blog.csdn.net/weixin_45905650/article/details/107916093)

### 编辑器⭐
用于编程的编辑器为文本编辑器（文字编辑器）仅仅是用作编写普通文字的应用软件，
它与文档编辑器（文字处理器）最直接的不同之处在于它无法用作排版，我们最常用的手机便签，Words文档便直接意思上属于文档编辑器，是可以进行例如**字体颜色大小设置、文字居中居左居右、首行缩进等（如图所示）**操作的，但是文字编辑器只能用于编写纯文本（部分软件设置的字体大小颜色也并不会作为文字的标签一起储存）
![Word文档.png](https://telegraph-img-by-bot.pages.dev/file/1729958258044_Word文档.png)


### 编译器⭐
把源代码（我们所键入的文字属于高级语言）转换成（翻译）为低级语言（机器语言）供计算机识别的程序
~~一个现代编译器的主要工作流程：源代码 (source code) → 预处理器 (preprocessor) → 编译器 (compiler) → 目标代码 (object code) → 链接器 (Linker) → 可执行程序 (executables)。~~
对于初学者的我们来讲，这样的描述似乎有点太复杂了，依照课本以及现在编译器功能完备同时处理的步骤多，可以简单省略为三步，毕竟大多数人，在以后的工作中都不会涉及到这类底层的内容

**源代码 (source code)  → 目标代码 (object code)  → 可执行程序 (executables)**

在C语言中分别对应的文件后缀/拓展名是.c .obj(.o) .exe
>文件后缀/拓展名是操作系统用来标记文件类型格式的一种机制，在Windows操作系统上是默认隐藏常见格式的，可通过勾选打开显示（❗请注意在重命名文件时若不是**需要**，请勿错误修改）
>![后缀名显示.png](https://telegraph-img-by-bot.pages.dev/file/1729959551700_后缀名显示.png)

编译器负责将高级语言，如C语言这些编程语言转换成变为机器可识别的二进制文件。


### 解释器
直接把高级编程语言一行一行转译运行，重点是不会一次把整个程序转译出来，因此运行速度比较缓慢，它每转译一行程序就立刻运行，然后再转译下一行，再运行，如此不停地进行下去。

解释器是帮助解释型语言一行一行的翻译成机器语言，程序是不需要编译的。


### 调试器
调试器是自从计算机诞生伊始就始终伴随着程序员的一个挚友，这个很好理解，就是控制软件运行、查看软件运行中信息、修改软件执行流程等作用，通俗的讲调试器是用来在程序运行以后，根据运行状况来检查错误。


### IDE
集成开发环境（IDE，Integrated Development Environment ），一般包括代码编辑器、编译器、调试器和图形用户界面工具。集成了代码编写功能、分析功能、编译功能、调试功能等一体化的开发软件服务套。
**翻译成人话就是，在一个软件内集成了编程开发一整条的功能**

例如（黑龙江东方学院）学校机房所使用的软件**Dev-C++**(2005年)和**Code::Blocks**(2001年)均为IDE，极大方便了初学者的安装使用，虽然时至今日软件依旧存在以几年为频率的更新，但是近二十多年前的软件势必在实用性和功能上有所脱轨于实际就业使用，下文将介绍标题所示Visual Studio Code 安装与介绍。

## C语言？

C语言是一种较早的程序设计语言，诞生于1972年的贝尔实验室。1972 年，Dennis Ritchie 设计了C语言，它继承了B语言的许多思想，并加入了数据类型的概念及其他特性。 


C语言是一门**面向过程**的计算机编程语言，与C++、C#、Java等面向对象编程语言有所不同。~~C语言的设计目标是提供一种能以简易的方式编译、处理低级存储器、仅产生少量的机器码以及不需要任何运行环境支持便能运行的编程语言。C语言描述问题比汇编语言迅速、工作量小、可读性好、易于调试、修改和移植，而代码质量与汇编语言相当。C语言一般只比汇编语言代码生成的目标程序效率低10%-20%。因此，C语言可以编写系统软件。~~

![](https://telegraph-img-by-bot.pages.dev/file/1729993314693_退网了，哥们.jpg)

专业术语是这样的，我们只要看不懂就可以了，可是专业术语要考虑的事情就多了。

### 面向过程编程与面向对象编程的区别（人话版）

[*引用*](https://zhuanlan.zhihu.com/p/75265007)

假设一个问题： 洗衣机里面放有脏衣服，怎么洗干净？

#### 面向过程的解决方法

1、执行加洗衣粉方法；

2、执行加水方法；

3、执行洗衣服方法；

4、执行清洗方法；

5、 执行烘干方法；

以上就是将解决这个问题的过程拆成一个个方法（是没有对象去调用的），通过一个个方法的执行来解决问题。

#### 面向对象的解决方法

1、我先弄出两个对象：分别是“洗衣机”对象和“人”对象

2、针对对象“洗衣机”加入一些属性和方法分别是“洗衣服方法”“清洗方法”、“烘干方法”

3、针对对象“人”加入属性和方法：“加洗衣粉方法”、“加水方法”

4、然后执行

人.加洗衣粉

人.加水

洗衣机.洗衣服

洗衣机.清洗

洗衣机.烘干

面向对象编程就是先抽象出对象，再对对象进行一些定义，然后用对象执行方法的方式解决问题。

两者着重的角度不同，C语言属于面向过程语言，C++属于面向对象语言，虽然两者存在极其相似的结构与语法 **（类似于汉语和日语的关系）**，并且共用编译器，但是这完全不能混为一谈，两者都需要系统性的从头到尾学习。


### 解释型（即时编译型）语言


 常见的解释型语言包括Python、 JavaScript 、Ruby、PHP等，这些语言和编译型语言属于对立的概念，他们并不需要编译器编译后进行运行。

以JavaScript为例，这门语言常用于网页前端开发，网页中由Html定义内容，CSS定义布局，而JS定义了这些显示出来内容的行为（交互），打个比方，JS可以即时在编辑器中定义某个按钮的作用是什么，保存文件后，在测试端显示的网页就会即时更新，并不需要编译。




# Visual Studio Code 介绍与安装

Visual Studio Code（简称“VS Code” ）是Microsoft在2015年4月30日Build开发者大会上正式宣布一个运行于 Mac OS X、Windows和 Linux 之上的，针对于编写现代Web和云应用的跨平台源代码编辑器， 可在桌面上运行，并且可用于Windows，macOS和Linux。它具有对JavaScript，TypeScript和Node.js的内置支持，并具有丰富的其他语言（例如C++，C＃，Java，Python，PHP，Go）和运行时（例如.NET和Unity）扩展的生态系统。

虽然在分类上，VS Code也属于IDE，但是单论其安装时的出厂设置，虽然具有IDE的特征，但是更多的，在进行自定义安装插件和配置编译器前，对于初学者来讲，这更类似于一个有**自动补全功能**和内置调用终端的编辑器

## Why VS Code？

在如今的计算机行业中，VS Code作为轻量级拥有更加新的版本跟进，更方便的与各大平台链接，背靠丰富的插件扩展市场，更加现代化的UI

**致东方学生：
虽然贴合内容相对滞后的课本无疑让大家更容易上手，但这也容易让部分理解能力弱的同学在未来的实际使用和工作中增加了学习成本，而且课本和课堂上也并没有对编程前的环境配置展开更详细的介绍，这导致在一些同学在编程软件的使用中存在诸多问题。因此，我们抱着“授人以鱼不如授人以渔”的想法，借这个机会，从安装VSCode和配置C/C++编译器的过程中让大家更深入理解这些概念，并使用VSCode展开后续的教学。**

![VSCode.png](https://telegraph-img-by-bot.pages.dev/file/1729993952986_VSCode.png)_本网站在我计算机上的编程工作环境（JS CSS HTML)_

>补充：Visual Studio（紫色那个玩意）和Visual Studio Code（蓝色那个玩意）区别
>两者都是微软公司开发的两款不同的开发工具，它们都属于IDE（集成开发环境），但功能和使用场景有所不同。
>![对比.png](https://telegraph-img-by-bot.pages.dev/file/1729994924370_对比.png)
>**Visual Studio（VS）**是一款功能强大的IDE，适用于开发桌面应用程序、Web应用程序、移动应用程序和云服务。它支持多种编程语言，如C#、C++、Visual Basic、JavaScript和Python，并提供了丰富的工具和功能，包括代码编辑器、调试器、图形化设计工具和自动化构建工具。Visual Studio还提供了版本控制、团队协作和测试工具，帮助开发团队协同开发和管理项目。
>**Visual Studio Code（VSCode）**则是一款轻量级的跨平台代码编辑器，它同样支持多种编程语言，并提供了强大的代码编辑和调试功能。VSCode的特点包括版本控制、智能代码补全、代码片段和内置终端等。此外，VSCode还提供了丰富的主题和界面定制选项，满足开发者对个性化编辑环境的需求。
>在选择使用Visual Studio或VSCode时，可以根据具体的开发需求来决定。如果是进行大型项目开发，可能更倾向于使用Visual Studio，因为它提供了一站式的开发工具和环境。而对于Web开发或轻量级的开发任务，VSCode可能是更合适的选择，因为它的灵活性和高效性。






## 1. 下载 VS Code 安装工具
[_下文的大部分引用_](https://blog.csdn.net/qq_42417071/article/details/137438374)

官方下载链接：[Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)

![1729995824784_VSCODE 网页.png (2560×1366)](https://telegraph-img-by-bot.pages.dev/file/1729995824784_VSCODE%20%E7%BD%91%E9%A1%B5.png)

直接点*“Download for Windows”* 就可以进行下载。

## 2. 安装 VS Code
`演示版本为VSCodeUserSetup-x64-1.94.2.exe`

双击运行`VSCodeUserSetup-x64-1.94.2.exe`。
![安装包.png](https://telegraph-img-by-bot.pages.dev/file/1729996005663_安装包.png)

成功弹出安装窗口后选择`我同意此协议`并单击`下一步`。
![用户协议.png](https://telegraph-img-by-bot.pages.dev/file/1729996216629_用户协议.png)

这里提示 VS Code 的安装位置，根据你的需求选择安装位置（推荐非C盘），点击`下一步`。
![安装位置.png](https://telegraph-img-by-bot.pages.dev/file/1729997727416_安装位置.png)
这一步是创建快捷方式的名字，可以输入其他名字，下面的选项如果不勾选，就会把快捷方式添加到开始菜单中。我选择默认，直接点`下一步`。
![快捷方式.png](https://telegraph-img-by-bot.pages.dev/file/1729997771701_快捷方式.png)
这一步是附加任务，选择，圈红的部分务必勾上，其他两项是决定在右键菜单中是否集成VS Code的快捷打开功能，再点`下一步`
![勾选任务.png](https://telegraph-img-by-bot.pages.dev/file/1729997875613_勾选任务.png)
最后再确认一下信息，确认之后直接安装即可，完成后运行即可
![确认任务.png](https://telegraph-img-by-bot.pages.dev/file/1729998008673_确认任务.png)


## 3.汉化与配置
VS Code第一次弹出时是英文界面，点击左侧栏的扩展页，在搜索框搜索`简体中文`并点击`install`安装简体中文语言包
![初始页面.png](https://telegraph-img-by-bot.pages.dev/file/1729998064919_初始页面.png)
安装成功后重启软件之后便变为中文操作页面，此时再次回到扩展页，在搜索栏搜索`C/C++`，分别安装VS Code对于C/C++的编辑支持（语法补全纠正）与一个便捷调试输出的插件，如果未直接显示在左侧候选，请根据下图完整名字搜索
![C语言编辑功能1.png](https://telegraph-img-by-bot.pages.dev/file/1729998354257_C语言编辑功能1.png)
![C语言编辑功能2.png](https://telegraph-img-by-bot.pages.dev/file/1729998910982_C语言编辑功能2.png)
在已安装中点击 `C/C++ Compile Run`的设置（齿轮图案）
![终端输出设置.png](https://telegraph-img-by-bot.pages.dev/file/1729999251556_终端输出设置.png)
下滑设置菜单，找到并勾选
`C-cpp-compile-run: Run-in-external-terminal`
`□Whether should run in an external terminal`
（使输出在外部弹出终端）
![F6.png](https://telegraph-img-by-bot.pages.dev/file/1729999466591_F6.png)
如果你是按照上一步操作，此时已经是在设置页面，根据下图直接清空设置搜索栏便可打开VS Code编辑器设置，若未打开，可根据下图左下角方式打开
![设置.png](https://telegraph-img-by-bot.pages.dev/file/1729999771480_设置.png)
在搜索栏搜索`zoom`，根据需求打开选项，这几项是控制在编辑时放大缩小代码（边栏），VS Code在某些情况下并不是默认打开Ctrl+鼠标滚轮调整的功能
![zoom.png](https://telegraph-img-by-bot.pages.dev/file/1730000018309_zoom.png)



# C/C++ 编译器 MinGW 介绍与安装配置

## 介绍
MinGW，即 Minimalist GNU For Windows。*它是一些头文件和端口库的集合，该集合允许人们在没有第三方动态链接库的情况下使用 GCC（GNU  Compiler C）产生 Windows32 程序*（介绍而已，还没到需要理解的阶段）

实际上 MinGW 并不是一个 完全的C/C++ 编译器，而是一套 GNU 工具集合。除开 GCC (GNU 编译器集合) 以外，MinGW 还包含有一些其他的 GNU 程序开发工具 (比如 gawk bison 等等)。

>提示：不同于集成在Dev-C++或者Code::Blocks内的编译器，MinGW内的编译器是作为一个单独的程序应用存在于计算机内，不仅是VS Code，通过相关配置同样能在其他编辑器内运行

## 安装
MinGW-W64 可以去MinGW-w64的官网下载，也就可以直接去 MinGW-W64 的 GitHub 页面上下载。（因为在官网下载非常非常非常容易下错）


>GitHub是一个面向开源及私有软件项目的托管平台（全球最大），因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。GitHub拥有1亿以上的开发人员，400万以上组织机构和3.3亿以上资料库。
>GitHub于2008年4月10日正式上线，除了Git代码仓库托管及基本的Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能。截止到2022-11-17，其注册用户已经超过9400万，托管版本数量也是非常之多，其中不乏知名开源项目Ruby on Rails、jQuery、python等。

MinGW-W64下载链接：[Releases · msys2/msys2-installer](https://github.com/msys2/msys2-installer/releases/)
如下图所示，选择`msys2-x86_64.exe`前缀+日期的Windows64位版本，点击下载。
![github安装.png](https://telegraph-img-by-bot.pages.dev/file/1730001388426_github安装.png)

`此处以msys2-x86_64-20240727.exe为演示版本`

双击运行安装下载的程序
![运行Mingw安装.png](https://telegraph-img-by-bot.pages.dev/file/1730001657269_运行Mingw安装.png)
初始界面直接点Next下一步
![1.png](https://telegraph-img-by-bot.pages.dev/file/1730002212674_1.png)
确认安装位置（请预留10GB）
![2.png](https://telegraph-img-by-bot.pages.dev/file/1730002208836_2.png)
确认快捷方式名称
![3.png](https://telegraph-img-by-bot.pages.dev/file/1730002206868_3.png)
安装前建议断网，联网模式下会出现卡50%的可能
![4.png](https://telegraph-img-by-bot.pages.dev/file/1730002208278_4.png)

## 配置
安装完成后运行程序会弹出该窗口右键，点击paste粘贴`pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain` 并回车，安装 MinGW-w64 工具链，
![start.png](https://telegraph-img-by-bot.pages.dev/file/1730005162139_start.png)
出现这个界面，直接按回车键，默认接受所有的安装包。
![确认包.png](https://telegraph-img-by-bot.pages.dev/file/1730005516312_确认包.png)
当系统提示是否继续安装时，请输入`y`并回车。
![Y.png](https://telegraph-img-by-bot.pages.dev/file/1730005597104_Y.png)
等待再弹出彩色的运行行时便下载完成
![finish.png](https://telegraph-img-by-bot.pages.dev/file/1730005690578_finish.png)
打开安装 MSYS2 的目录，先找到`ucrt64`文件夹并进入，再找到`bin`文件夹并进入，然后在地址栏中，复制路径。

如果一开始用默认路径，那路径就是`C:\msys64\ucrt64\bin`。复制安装路径
![bin.png](https://telegraph-img-by-bot.pages.dev/file/1730005822624_bin.png)
然后在搜索框中输入 `编辑系统环境变量`，并打开编辑系统环境变量的设置界面。(或者右键此电脑点击属性后点击高级系统属性)
![cmd2.png](https://telegraph-img-by-bot.pages.dev/file/1730014052219_cmd2.png)
如下图，系统属性点击环境变量→环境变量在环境变量一栏双击Path→新建环境变量→粘贴刚刚的安装目录→逐层保存
![Path配置.png](https://telegraph-img-by-bot.pages.dev/file/1730006172087_Path配置.png)

恭喜你，现在你的计算机就拥有了全局的C/C++编译环境，能做到这一步已经很厉害了啦。
___
最后做一下测试，按组合键Win + r之后，输入`cmd`回车。

回车之后，就可以调出 CMD 的终端窗口了，然后分别输入（CMD中右键即可粘贴）下面的命令，每输入一次命令后回车一次。

`gcc --version`
`g++ --version`
`gdb --version`

出现如下图一样的信息，就说明 C/C++ 的编译环境已经安装好。
![jieguo.png](https://telegraph-img-by-bot.pages.dev/file/1730006474926_jieguo.png)

# 在VS Code开始写C语言代码吧！

在主界面资源管理器打开一个自己选定的文件夹作为代码的储存位置 **（编译运行代码后会在根目录创建名为`.vscode`的文件夹存储这个文件夹内的编程配置）**

![文件夹.png](https://telegraph-img-by-bot.pages.dev/file/1730007158270_文件夹.png)

选中文件夹后，在新弹出的窗口中可能会弹出以下提示，勾选上`信任父文件夹"Documents"中所有文件的作者`，再点`是，我信任此作者`。（如果没有则忽略）

![cnm1.png](https://telegraph-img-by-bot.pages.dev/file/1730014052551_cnm1.png)

在左上角创建第一个后缀名为`.c`的C语言源代码文件
![文件.png](https://telegraph-img-by-bot.pages.dev/file/1730007423977_文件.png)

然后就写我们需要的东西（我这里随便复制了一个源文件举例）
```
/*
描述
斐波那契数列,又称黄金分割数列,指的是这样一个数列 0 1 1 2 3 5 8 13 21 …
斐波那契数列中从第三项开始,每一项都等于前两项的和
现输入一个整数N,请你输出这个序列的前N项,每项之间用空格隔开
（非循环输入）  
输入描述
一个整数N(1<=N<=40
输出描述
在一行中输出斐波那契数列的前N项,两项之间用空格隔开
*/
#include<stdio.h> //头文件
int main() //主函数
{
    int a = 0,b = 1,n,zc; //定义几个变量，zc为暂存值
    scanf("%d",&n); //输入函数
    if( n >= 1 && n <= 40 ) ////if函数
        for(int m = 1;m <= n;m++) //for 循环函数
        {
            printf("%d ",a);  //打印
            zc = a;      
            a = b;
            b = zc + b; //赋值
        };
        return 0; // 返回值为 0（false）
}
```
书写完代码后，第一次编译在窗口栏点击运行
![第一次调试.png](https://telegraph-img-by-bot.pages.dev/file/1730009860225_第一次调试.png)
然后点击此项作为编译器进行调试编译（快捷键为`F5`)
![调试启动！.png](https://telegraph-img-by-bot.pages.dev/file/1730010004174_调试启动！.png)运行后编辑器下半会弹出调试控制台进行编译然后显示终端显示输出结果
![vscode内输出.png](https://telegraph-img-by-bot.pages.dev/file/1730010355666_vscode内输出.png)
回到编辑器内点击`F6`调试则是弹出CMD窗口输出
![cmd.png](https://telegraph-img-by-bot.pages.dev/file/1730010352374_cmd.png)

## 断点调试

_由于时间问题，这一段未编辑的功能介绍，但是不影响基础教学_




# 知识点补充之字符编码

有一些同学会发现自己在自己电脑上编写代码后输出结果会出现如下的乱码问题，无论是在哪个软件上
![乱码.png](https://telegraph-img-by-bot.pages.dev/file/1730011124230_乱码.png)
这涉及到计算机的另外一概念：字符编码，推荐观看此视频了解，这里不赘述过多。
[你懂乱码吗？锟斤拷烫烫烫（详解ASCII、Unicode、UTF-32、UTF-8编码)@林粒粒呀](https://www.bilibili.com/video/BV1xP4y1J7CS)
我们知道常用的编码方式为课本上教过的ASCII编码，但是这种编码方式并不包括汉字，在我国计算机行业发展后编写了一套名为 GBK（两种更新版本名为 GB 2312 和GB 10830），中文为《信息交换用汉字编码字符集 基本集》，用于兼容ASCII显示汉字，但是就和GBK一样，许多国家都为自己的语言文字创造了各自的编码集，背后的占位代码互相冲突，打个比方，GBK无法和阿拉伯语编码兼容。
为了解决这个问题，统一码（Unicode），也叫万国码、单一码，由统一码联盟开发的旨在用一套编码方式兼容所有文字（emoji也包括在其中😋😪😭😖）的编码方式出现了，我们常用的Unicode类型为 UTF-8（UTF-16 UTF-32 所占位数不同）

**为了尽可能提高兼容性，计算机编程中一般使用UTF-8编码进行编程**

这里有两种常见的解决方法

## ① 文件本身的编码是否为UTF-8？

如图在VS Code可点击通过底栏的编码显示修改保存文件
![utf.png](https://telegraph-img-by-bot.pages.dev/file/1730012260133_utf.png)
保证编码方式为**UTF-8**

如果是非VS Code情况下可通过计算机自带的记事本另存为修改
![notpad.png](https://telegraph-img-by-bot.pages.dev/file/1730012591650_notpad.png)_Windows 11需要点击更多选项_
![notpad2.png](https://telegraph-img-by-bot.pages.dev/file/1730012699479_notpad2.png)
![notpad3.png](https://telegraph-img-by-bot.pages.dev/file/1730012695261_notpad3.png)

## ②计算机本身的CMD窗口输出编码为GB 2312

有一些版本的Windows操作系统默认编码为GB 2312，需要通过电脑设置进行修改，以下为Windows11设置
![语言设置.png](https://telegraph-img-by-bot.pages.dev/file/1730013011860_语言设置.png)
![设置成功.png](https://telegraph-img-by-bot.pages.dev/file/1730013018199_设置成功.png)

___
将`Beta 版: 使用 Unicode UTF-8 提供全球语言支持`勾选后重启电脑，通过以上两种方式修改后再次调试编译运行，结果如图：
![OK.png](https://telegraph-img-by-bot.pages.dev/file/1730013458442_OK.png)

# 结尾

写完这篇东西，感觉自己半截入土了.......所以结尾就写不出什么了，~~希望各位写代码快乐吧。~~
我是说，希望大家能够学习的越来越顺利😊
虽然还有点小瑕疵，等我先熬过这一遭再进行修改（闭眼）
![EE6BE7D40A2D2051DDE107665FE92D4A.jpg](https://telegraph-img-by-bot.pages.dev/file/1730013728880_EE6BE7D40A2D2051DDE107665FE92D4A.jpg)
