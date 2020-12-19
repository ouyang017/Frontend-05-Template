学习笔记
Css选择器：简单选择器、复杂选择器。
 div#a.b .c[id=x]   0 1 2 1 
 #a:not(#b)         0 2 0 0 
 *.a                0 0 1 0 
 div.a              0 0 1 1

 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
 答：first-line 第一行的长度取决于许多因素，包括元素的宽度、文档的宽度和文本的字体大小。
 