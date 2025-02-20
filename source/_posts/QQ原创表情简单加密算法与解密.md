---
title: QQ原创表情简单加密算法与解密
description: 简单修改字节的方法真的算的上是一种算法吗?
author: JayMuShui
date: 2024-11-15 10:12:12
updated: 
reward: true
readmore: true
hideTime: false
comments: false
tags:
  - 计算机实践
  - C++
  - 编程
  - 算法
  - 加密
  - Hex
  - QQ
  - 表情包
categories:
  - 教程
---
# 废话
随着腾讯QQ的版本迭代，对于在其软件上的表情包保存限制越来越大，用户自定义的表情包直接可以保存到相册的功能被删除，用户可以通过以下方法：

①通过`收藏`然后去收藏当中找到对应内容进行保存
②通过`用小程序打开`然后进行保存

但是其QQ官方提供的表情包集（贴纸集）并不能进行此操作，静态的表情可以在对应缓存目录下直接复制出来使用，但是动态的GIF无法直接获得，研究了一下发现实际使用的文件是可预览的图片文件对应名字的无后缀名文件，但是并不能直接打开，会显示乱码，一通冲浪后，在
哔哩哔哩上发布于`UTC+8 2017-07-10 14:47:56`的  [【教程】提取qq原创表情为gif](https://www.bilibili.com/video/BV1AxmUYTEL8)和其评论区中名为[海馬](https://space.bilibili.com/619422)用户的评论中得到启发总结后并成功解密同时编写了一个简单的C++程序用于批量解密

# 原理

这里以哔哩哔哩UP主[明风OuO](https://space.bilibili.com/274939213)（ 男 娘 武 器 库 ）的表情包为例



![明风_拿心心.gif](https://telegraph-img-by-bot.pages.dev/file/1731597689310_明风_拿心心.gif)


这个表情包在QQ缓存的无后缀文件用十六进制编辑器打开后前三行为
![example-QQ加密后十六进制码显示.png](https://telegraph-img-by-bot.pages.dev/file/1731598017540_example-QQ加密后十六进制码显示.png)

<!-- more -->

经过解密后能够正常显示时为

![example-解密后十六进制码显示.png](https://telegraph-img-by-bot.pages.dev/file/1731598023015_example-解密后十六进制码显示.png)


**因此，我们可以总结出以下规则：**
**腾讯QQ对缓存在data目录中的原创表情包为对应的无后缀文件，我们对当中对前`24`个字节当中的`偶数次序`字节转化为十六进制格式进行显示时，转化的十六进制数如果是`偶数`则在其基础上`+1`，如果是`奇数`则在其基础上`-1`，完成后重新保存便可正常显示，这便是解密的方式。**



相反的，加密方式为对于一个正常显示的表情包文件在前`24`个字节上的`偶数次序`的`偶数`则在基础上`-1`，`奇数`则在基础上`+1`、



# 项目使用方式

根据此原理，通过一个程序读取其相同目录下的文件提取其前24字节，按照原理的方式进行修改覆盖便可得到正常表情。



## 在手机QQ聊天框中发送所有你想要保存的表情包
如图所示，这样才能在缓存目录中产生无后缀缓存文件
![1000049950.jpg](https://telegraph-img-by-bot.pages.dev/file/1731598798639_1000049950.jpg)
## 访问QQ对应的原创表情包缓存目录文件夹

可通过MT管理器或者数据线连接PC并允许管理文件，找到
`/storage/emulated/0/Android/data/com.tencent.mobileqq/Tencent/MobileQQ/.emotionsm/`


您需要自行解决高版本安卓无法访问`data`/`.emotionsm`文件夹需要取消隐藏的问题，然后按照时间顺序排序文件夹，找到对应表情包的编号文件夹，如下图所示的标红文件即是我们需要进行解密的文件，将其拷贝至PC内的文件夹

![QQ原创表情包缓存文件.png](https://telegraph-img-by-bot.pages.dev/file/1731636209772_QQ原创表情包缓存文件.png)



## 运行 [decrypt].exe可执行文件

将这些文件复制到`[decrypt].exe`所在目录下运行即可自动提取字节修改覆写（会自动给新产生的文件添加上`.gif`后缀


# ❗注意


`[decrypt].exe`会将同一目录下除自身为所有的文件都进行在此程序不可逆单向的解密（按照上述规则），请确保是运行在没有其他重要文件的环境下并且对已经解密的文件再次运行则是会得到新的不可用的文件。


# 链接
✨项目地址:https://github.com/JayMuShui/Encrypted-QQ-Original-Sticker-Decryption



