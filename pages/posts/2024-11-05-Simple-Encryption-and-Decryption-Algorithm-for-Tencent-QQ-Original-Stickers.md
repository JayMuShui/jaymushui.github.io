---
title: 
  zh-CN: QQ原创表情简单加密算法与解密
  en: Simple Encryption and Decryption Algorithm for Tencent QQ Original Stickers
icon: i-carbon-code
color: purple
description: 
  zh-CN: 简单修改字节的方法真的算的上是一种算法吗?
  en: Can a method of simply modifying bytes really be considered an algorithm?
author: JayMuShui
date: 2024-11-15 10:12:12
updated: 2025-04-16 23:19:22
toc: true
aside: true
tags:
  - {"zh-CN":"计算机实践","en":"Computer Practice"}
  - Python
  - {"zh-CN":"编程","en":"Programming"}
  - {"zh-CN":"算法","en":"Algorithm"}
  - {"zh-CN":"加密","en":"Encryption"}
  - HEX
  - QQ
  - {"zh-CN":"表情包","en":"Emojis"}
categories:
  - {"zh-CN":"教程","en":"Tutorials"}
---

::: zh-CN
_此方法最后更新于`UTC+8 2024-11-14 23:10:39`_

_此项目文件最后更新于`UTC+8 2025-04-16 23:19:22`_


提示：这个项目仅仅是我用来熟悉编辑逻辑的一个小尝试，并不是一个完美的解决方案，只是提供了解密思路和简易程序。
::: 

## 废话  {lang="zh-CN"}
::: zh-CN
随着腾讯QQ的版本迭代，对于在其软件上的表情包保存限制越来越大，用户自定义的表情包直接可以保存到相册的功能被删除，用户可以通过以下方法：

①通过`收藏`然后去收藏当中找到对应内容进行保存

②通过`用小程序打开`然后进行保存

但是其QQ官方提供的表情包集（贴纸集）并不能进行此操作，静态的表情可以在对应缓存目录下直接复制出来使用，但是动态的GIF无法直接获得，研究了一下发现实际使用的文件是可预览的图片文件对应名字的无后缀名文件，但是并不能直接打开，会显示乱码，一通冲浪后，在
哔哩哔哩上发布于`UTC+8 2017-07-10 14:47:56`的  [【教程】提取qq原创表情为gif](https://www.bilibili.com/video/av12064055/)和其评论区中名为[海馬](https://space.bilibili.com/619422)用户的评论中得到启发总结后并成功解密同时编写了一个简单的C++程序用于批量解密
::: 

## 原理  {lang="zh-CN"}

::: zh-CN
这里以哔哩哔哩UP主[明风OuO](https://space.bilibili.com/274939213)（ 男 娘 武 器 库 ）的表情包为例



![明风_拿心心.gif](https://cloudflare-imgbed-telegraph.pages.dev/file/1731597689310_明风_拿心心.gif)


这个表情包在QQ缓存的无后缀文件用十六进制编辑器打开后前三行为
![example-QQ加密后十六进制码显示.png](https://cloudflare-imgbed-telegraph.pages.dev/file/1731598017540_example-QQ加密后十六进制码显示.png)

:::


::: en

_This method was last updated at `UTC+8 2024-11-14 23:10:39`_  
_The project files were last updated at `UTC+8 2025-04-16 23:19:22`_  


Note: This project is just a small attempt for me to familiarize myself with editing logic. It is not a perfect solution but only provides decryption ideas and a simple program.
:::

## Nonsense {lang="en"} 

::: en
With the iteration of Tencent QQ's versions, the restrictions on saving stickers in the software have become increasingly strict. The function for users to directly save custom stickers to the album has been removed. Users can use the following methods:  
① Save them by favoriting and then finding the corresponding content in favorites.  
② Open them with a mini-program and then save them.  

However, the official sticker sets provided by QQ cannot be operated in this way. Static stickers can be directly copied and used from the corresponding cache directory, but dynamic GIFs cannot be directly obtained. Through research, it was found that the actual file used is a file without a suffix corresponding to the name of the previewable image file. However, this file cannot be directly opened and will display garbled characters. After surfing the Internet, I was inspired by the tutorial [【教程】提取qq原创表情为gif](https://www.bilibili.com/video/av12064055/) (Extract QQ Original Emojis as GIFs）posted on Bilibili at `UTC+8 2017-07-10 14:47:56` and the comments of a user named [Boot Leg](https://space.bilibili.com/619422) in its comment section. After summarization, I successfully decrypted the stickers and wrote a simple C++ program for batch decryption.
:::

## Principle {lang="en"} 
::: en
Take the sticker package of Bilibili UP [明风OuO](https://space.bilibili.com/274939213) as an example.  

![明风_拿心心.gif](https://cloudflare-imgbed-telegraph.pages.dev/file/1731597689310_明风_拿心心.gif)  

When the suffixless file in the QQ cache of this sticker is opened with a hex editor, the first three lines are:  
![example-QQ加密后十六进制码显示.png](https://cloudflare-imgbed-telegraph.pages.dev/file/1731598017540_example-QQ加密后十六进制码显示.png)  
:::

<!-- more -->

::: zh-CN
经过解密后能够正常显示时为

![example-解密后十六进制码显示.png](https://cloudflare-imgbed-telegraph.pages.dev/file/1731598023015_example-解密后十六进制码显示.png)


**看到上图前三个字节修改后ASCII码对应为"GIF"即可知文件标头被修改回.gif格式了，包含后续的内容在内因此，我们可以总结出以下规则：**
**腾讯QQ对缓存在data目录中的原创表情包为对应的无后缀文件，我们对当中对前`24`个字节当中的`偶数次序`字节转化为十六进制格式进行显示时，转化的十六进制数如果是`偶数`则在其基础上`+1`，如果是`奇数`则在其基础上`-1`，完成后重新保存便可正常显示，这便是解密的方式。**



相反的可知道，QQ的加密方式为对于一个正常显示的表情包文件在前`24`个字节上的`偶数次序`的`偶数`则在基础上`-1`，`奇数`则在基础上`+1`、

但同时，我有注意到一些未解密表情包文件会被标记上_apng，我并没有继续详细挖掘下去，但是似乎这个转化为.gif的小程序对其无效，应该是文件类型不同导致的，请有闲心的大佬研究一下（`UTC+8 2025-04-16 23:19:22`）
:::

## 项目使用方式  {lang="zh-CN"}
::: zh-CN
根据此原理，编写一个程序读取其相同目录下的文件提取其前24字节，按照原理的方式进行修改覆盖便可得到正常表情。

~~这是大一入学时刚刚研究的小项目，先后使用了C语言和C++实现功能（感谢强大的LLM技术），最后发现还是Python最简单也最适合处理这些问题，于是现在改为用Python实现示范功能~~
:::


### 在手机QQ聊天框中发送所有你想要保存的表情包  {lang="zh-CN"}

::: zh-CN
如图所示，这样才能在缓存目录中产生无后缀缓存文件
![1000049950.jpg](https://cloudflare-imgbed-telegraph.pages.dev/file/1731598798639_1000049950.jpg)
:::
### 访问QQ对应的原创表情包缓存目录文件夹  {lang="zh-CN"}
::: zh-CN
可通过MT管理器或者数据线连接PC并允许管理文件，找到
`/storage/emulated/0/Android/data/com.tencent.mobileqq/Tencent/MobileQQ/.emotionsm/`


您需要自行解决高版本安卓无法访问`data`/`.emotionsm`文件夹需要取消隐藏的问题，然后按照时间顺序排序文件夹，找到对应表情包的编号文件夹，如下图所示的标红文件即是我们需要进行解密的文件，将其拷贝至PC内的文件夹

![QQ原创表情包缓存文件.png](https://cloudflare-imgbed-telegraph.pages.dev/file/1731636209772_QQ原创表情包缓存文件.png)
:::


### 运行main.py {lang="zh-CN"}

::: zh-CN
>❗开发版本为Python 3.13.1，若失败请检查Python版本是否兼容

将这些文件复制到`main.py`所在目录下的`Input`文件夹运行py文件后
即可自动提取字节修改覆写（会自动给新产生的文件添加上`.gif`后缀）后同名输出到`Output`文件夹内
:::


## 链接 {lang="zh-CN"}

::: zh-CN
✨项目地址:https://github.com/JayMuShui/Encrypted-QQ-Original-Sticker-Decryption
:::



::: en 
After decryption, when it can be displayed normally, it is:  
![example-解密后十六进制码显示.png](https://cloudflare-imgbed-telegraph.pages.dev/file/1731598023015_example-解密后十六进制码显示.png)  

**By observing that the first three bytes in the above image are modified to have ASCII codes corresponding to "GIF", we can see that the file header has been modified back to the .gif format. Including the subsequent content, we can summarize the following rules:**  
**Tencent QQ stores original stickers in the data directory as suffixless files. For the even-order bytes among the first 24 bytes, when converted to hexadecimal format, if the hexadecimal number is even, add 1 to it; if it is odd, subtract 1 from it. After completion, save the file again to display it normally. This is the decryption method.**  

Conversely, we can know that QQ's encryption method is to subtract 1 from even numbers and add 1 to odd numbers among the even-order bytes of the first 24 bytes of a normally displayed sticker file.  

However, I have noticed that some undecrypted sticker files are marked with _apng. I did not continue to dig deeper, but it seems that this small program converted to .gif is invalid for them, probably due to different file types. I hope some interested experts can study it further (`UTC+8 2025-04-16 23:19:22`).
:::

## How to Use the Project {lang="en"}
::: en
According to this principle, write a program to read the files in the same directory, extract their first 24 bytes, modify and overwrite them according to the principle, and then obtain normal stickers.  
~~This was a small project I just researched when I first entered university. I successively used C and C++ to implement the function (thanks to the powerful LLM technology). Finally, I found that Python is the simplest and most suitable for handling these problems, so now I have switched to using Python for demonstration.~~  
:::

### Send all the stickers you want to save in the mobile QQ chat box {lang="en"}
::: en
As shown in the figure, this is to generate suffixless cache files in the cache directory.  
![1000049950.jpg](https://cloudflare-imgbed-telegraph.pages.dev/file/1731598798639_1000049950.jpg)  
::: 

### Access the cache directory folder of QQ's original stickers {lang="en"}
::: en
You can use MT Manager or connect to a PC via a data cable and allow file management, then find:  
`/storage/emulated/0/Android/data/com.tencent.mobileqq/Tencent/MobileQQ/.emotionsm/`  

You need to solve the problem that high-version Android cannot access the `data`/`.emotionsm` folder (which needs to unhide hidden files by yourself). Then sort the folders by time, find the folder with the corresponding sticker number. The file marked in red in the following figure is the file we need to decrypt. Copy it to a folder on your PC.  
![QQ原创表情包缓存文件.png](https://cloudflare-imgbed-telegraph.pages.dev/file/1731636209772_QQ原创表情包缓存文件.png)  
:::


### Run main.py {lang="en"}
::: en
>❗ The development version is Python 3.13.1. If it fails, please check whether the Python version is compatible.  

Copy these files to the `Input` folder in the directory where `main.py` is located. After running the py file, it will automatically extract and modify the bytes and overwrite them (automatically adding a `.gif` suffix to the newly generated files) and output them to the `Output` folder with the same name.  
:::

## Links {lang="en"}
::: en
✨ Project address: [https://github.com/JayMuShui/Encrypted-QQ-Original-Sticker-Decryption](https://github.com/JayMuShui/Encrypted-QQ-Original-Sticker-Decryption)

:::

::: en
<div class="translation-note" style="padding: 1.2em; margin: 1.5em 0; border-radius: 6px; background-color: rgba(76, 175, 80, 0.05); border-left: 3px solid rgba(76, 175, 80, 0.7);">
  <p style="margin: 0; font-size: 0.95em; line-height: 1.4; color: #333;">
    <span style="color: #4CAF50; font-weight: 500; display: inline-flex; align-items: center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16" style="margin-right: 0.5em;">
        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
      </svg>
      Friendly Translation Note
    </span>
    <br>
    This English version is AI-assisted. For any ambiguities or discrepancies, the original Chinese text prevails. We've strived to preserve the emotional tone, but nuances may vary. Your understanding is appreciated.
  </p>
</div>
:::