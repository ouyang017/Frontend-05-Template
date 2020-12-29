学习笔记

CSS排版
盒
标签 > 元素 > 盒

元素 与 盒 可以是一对多的关系

盒模型
多层结构
content、padding、border、margin、box-sizing
box-sizing: content-box,border-box(width包含padding+border尺寸)

正常流
三代排版技术
正常流、flex布局、grid排版、Css Houdini（3.5）

排版内容： 盒、文字

正常流排版步骤
1、收集盒与文字进行
2、计算盒与文字在行中的排布
3、计算行的排布

盒分类：
inline-box,block-level-box
IFC,BFC

排版类型：
行级排布
文字【横排方向】：基线、origin【原点】,bearingX【原点至xMin的距离】,bearingY【原点-yMin】,xMin【最左边】,xMax【最右边】,yMin【最下边】,yMax【最上边】,advance【字占空间】,width【宽】,height【高】

行模型
行级排布

line-top
text-top
base-line
text-bottom
line-bottom 

sub【下标】,sup【上标】

1、只有文字以字体最大的为主
2、文字、盒 混排，会影响 line-top 的位置，不影响text-top，text-bottom

块级排布
float 与 clear 

多个float 会出现堆叠的效果

clear:找一个干净的空间，再float

margin 折叠现象，以最大的margin为主；且只会发生在 正常流的BFC 中。

float,margin,BFC 现象 叠加问题。

BFC 合并
Block
Block Container：
block,inline-block,table-cell,flex item,grid cell,table-caption

Block-level Box：
display: block,flex,table,grid  [run-in]

Block Box = Block Container + Block-level Box;

设定 BFC合并
block box && overflow:visible

Flex 排版
1、收集盒进行
2、计算盒在主轴方向的排布
3、计算盒在交叉轴方向的排布

no-wrap 不换行

动画与绘制
Animation
animation-name 时间曲线
animation-duration 动画的时长
animation-timing-function 动画的时间曲线
animation-delay 动画开始前的延迟
animation-iteration-count 动画的播放次数
animation-direction 动画的方向

Transiton
transition-property 要变换的属性
transition-duration 变换的时间
transition-timing-function 时间曲线
transttion-delay 延迟

由塞尔曲线【三次】
http://cubic-bezier.com
cubic-bezier(.08,.98,.75,1.01)

颜色
CMYK（印刷） 与 RGB（显示）

HSL 与 HSV 
H ：色相，S ：纯度，L 亮度， V 明度 

绘制
几何图形
border,box-shadow,border-radius

文字
font,text-decoration

位图
background-image

data uri + svg 
