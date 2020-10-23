学习笔记
##正则表达式可以被用于 RegExp 的 exec 和 test 方法以及 String 的 match、replace、search 和 split 方法
###使用正则表达式的方法
| 方法	|描述|
|  ----  | ----  |
|exec	|一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。|
|test	|一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false。|
|match	|一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null。|
|matchAll	|一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）。|
|search	|一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。|
|replace	|一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。|
|split	|一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。|
来源：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions