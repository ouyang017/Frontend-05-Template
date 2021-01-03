学习笔记
重学HTML
XML 与 SGML
XHTML

HTML5
&nbsp; 以前一直用这个实体代替空格，应用css 实现。
必须记住以下实体对应的符号：
&quot; &amp; &lt; &gt;

语意化 HTML
1、首先关注HTML标签的语意化表达，再用Css调整呈现。
2、如果找不到合适的标签，可以用P、DIV标签代替，命一个有语义的CSS class 名。
3、strong 与 em 的区别，em 表示语气加重
4、figure
5、ol li : 用 css counter 添加序号，或改成.
6、dfn,pre,samp,code

合法的6种元素
1、Element
2、Text
3、Comment
4、DocumentType
5、ProcessingInstruction
6、CDATA

浏览器API 
操作
导航类
parentNode,parentElement
childNodes,children
firstChild,firstElementChild
~~

修改
appendChild,insertBefore,removeChild,replaceChild
为什么没有 insertAfter？

高级
compareDocumentPosition 是一个用于比较两个节点中关系的函数。
contains检查一个节点是否包含另一个节点的函数
isEqualNode 检查两个节点是否完全相同
isSameNode 检查两个节点是否是同一个节点，实际上在
JavaScript中可以用“===”
cloneNode复制一个节点，如果传入参数true,则会连同子元素做深拷贝

事件
addEventListener
capture

once

parsive
移动端 默认：false;

Event 冒泡与捕获
a.addEventListener("click",function(){console.log("a")})

为什么捕获阶段，只能加入一个事件呢？我b加入第2个b.addEventListener("click",function(){console.log("b3")},true) 后，事件打印会出现在 冒泡 阶段。

Range API
Range 创建 new Range（）， selection

CSSOM
document.styleSheets
两种使用方法
1、style标签，2、link标签

Rules
document.styleSheets[0].cssRules
insertRule("",0)
removeRule(0)

CSSStyleRule

window.getComputedStyle

CSSOM View
window 
window.innerHeight,window.innerWidth
window.outerWidth,window.outerHeight
window.devicePixelRatio 与硬件有关， retina 2：1 
window.screen
width,height,availWidth,availHeight

window.open()
moveTo(x,y),moveBy(x,y)
resizeTo(x,y),resizeBy(x,y)

scroll
scrollTop
scrollLeft
scrollWidth
scrollHeight
scroll(x,y)
scrollBy(x,y)
scrollIntoView() 滚动到可见区域

window
scrollX
scrollY
scroll(x,y)
scrollBy(x,y)

layout
getClientRects()
getBoundingClientRect()

API 来源

标准化组织
khronos   WebGL
ECMA    ECMAScript
WHATWG  HTML
W3C webaudio CG/WG/IG

