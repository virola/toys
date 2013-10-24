Title: 哪些属性可以触发`hasLayout`? `hasLayout`的意义到底是什么？
Date: 2013-06-06
Tags: css

# 何为`hasLayout`？它为什么如此重要？

IE浏览器中有一些bug（如 [dimensional bug fixes]() and [Holly hack]()），是可以通过强制IE下的DOM元素变成'layout'（IE下一种数据结构）来解决的。而大部分使用者并不知道让DOM元素应用'layout'之后的影响到底是怎样。

首先，有这样的两组元素：

- 一组元素根据父元素来确定自己内容的尺寸大小；
- 一组元素根据自身内容自适应尺寸大小；

一般来说，IE下的元素是不能自适应地安排自身元素尺寸大小的，例如： 一个`div`或者一个`p`元素可能位于文档流的内部，但他们的内容总是根据其最近的拥有`a layout`结构祖先元素来进行组织（通常都是`body`），这些元素根据那个祖先元素的布局来处理自身元素尺寸的测量和计算。


## `hasLayout`是什么意思？

* 简单来说，元素`hasLayout`就是指元素可以负责自身的尺寸和定位的定义，同时也具备给其后代元素定义大小和尺寸的能力。
* 一些元素本身有固定的尺寸、或者有一些特殊尺寸的约束，如： `button`, `img`, `input`, `select`, `marquee` ，即使不指定这些元素本身的width和height，它们也有定义好的大小属性，所以他们总是“有layout”的。  
* 一些元素通常没有布局信息如`span`和`div`，可能需要强制其`hasLayout`来支持一些特殊的属性，例如： 元素必须`hasLayout`才能显示滚动条(scrollbar)。
* 如果元素触发了`hasLayout`属性，其值返回为`true`。

## 触发`hasLayout`的利弊

* 将元素限制为矩形。这意味着里面的元素再也不能浮动到其他盒模型中去，比如：IE中的float的元素不会浮出至超过其元素边界的地方。
* 有layout的元素可以建立一个块格式上下文（block formatting context）
* 触发hasLayout也不能是那么随便的事情，因为hasLayout增加了一个额外缓存信息的对象，同时参与尺寸计算和定位算法，因此它会增加额外的内存消耗、降低性能。
* 使用自动调整也有副作用——hasLayout的元素不能“收缩自适应”其子元素。例如：一个设置了绝对定位的块元素如果触发了hasLayout，那么就不能根据其子元素大小进行收缩自适应。
* 触发了hasLayout的块元素会变得和子元素内容一样大小（IE 6中的高度bug）
* 很多人通过触发hasLayout来处理IE 6的一些bug，尤其是对于那些相对定位的元素，但是，相对定位的元素并不需要layout对象，这种情况下触发hasLayout却会导致更多的问题。


### Which elements always have a Layout?
Broadly, any element that owns its extents and needs to maintain specific information and functionality to position and render its contents into those extents.

- Images
- Tables, TableRows, TableCells
- HR
- Input elements: text, button, file, select
- Marquee
- Framesets, Frames
- Objects, applets, plugins
- Absolute positioned elements
- Floated elements
- Inline-block elements
- Filters (rotation, dropshadow, etc.)
- Body (as well as HTML element in strict mode)

### Which elements can get a Layout?

- Block level elements with width or height specified under strict mode
- Any element with width/height specified under compat mode
- Elements that have the Zoom property set
- Elements that are in edit mode
- Elements that host to a viewlinked behavior
- Layout-flow is different from parent layout flow (rtl to ltr)


[To be continue…]


# 哪些属性可以触发IE下的`hasLayout`?




# 参考文章

<http://msdn.microsoft.com/en-us/library/bb250481(VS.85).aspx>