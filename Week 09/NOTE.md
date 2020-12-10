学习笔记
在写方法中
function tagName(c) {
    if(c.match(/^[\t\n\f ]$/)){
        return beforeAttributeName;
    }else if(c == "/"){
        return selfClosingStartTag;
    }else if(c.match(/^[a-zA-Z]$/)){
        currentToken.tagName += c;
        return tagName;
    }else if(c == ">"){
        emit(currentToken);
        return data;
    }else{
        return tagName;
    }
}
问题：
第10行，写成 tagName(c) 会循环调用，这是为什么？
是因为有()的是调用，没有()返回是函数。