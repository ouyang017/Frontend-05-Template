// 编写一个 match 函数。它接收两个参数，
// 第一个参数是一个选择器字符串性质，第二个是一个 HTML 元素。
// 这个元素你可以认为它一定会在一棵 DOM 树里面。
// 通过选择器和 DOM 元素来判断，当前的元素是否能够匹配到我们的选择器。
// （不能使用任何内置的浏览器的函数，仅通过 DOM 的 parent 和 children 这些 API，
// 来判断一个元素是否能够跟一个选择器相匹配。）以下是一个调用的例子。

// if(!element || !element.attributes || !selector)
// return false;

// if(selector.charAt(0) == "#"){
// var attr = element.attributes.filter(attr => attr.name === "id")[0];
// if(attr && attr.value === selector.replace("#",''))
//     return true;
// }else if(selector.charAt(0) == "."){
// var attr = element.attributes.filter(attr => attr.name === "class")[0];
// if(attr && attr.value === selector.replace(".",''))
//     return true;
// }else{
// if(element.tagName === selector)
//     return true;
// }
// return false;



function match(selector, element) {
    let _selectors = selector.split(" ").reverse();
    console.log(_selectors);

    let matched = false;
        
    var j = 1;
    for (let i = 0; i < _selectors.length; i++) {

        if(i!= 0){
            element = element.parentElement;
        }

        if(elematch(element,_selectors[i])){
            j++;
        }
    }

    if(j >= _selectors.length)
        matched = true;
    return matched;
}

function elematch(element,selector) {
    if(!element || !element.attributes || !selector)
    return false;

    if(selector.charAt(0) == "#"){
        var attr = element.attributes.filter(attr => attr.name === "id")[0];
        if(attr && attr.value === selector.replace("#",''))
            return true;
    }else if(selector.charAt(0) == "."){
        var attr = element.attributes.filter(attr => attr.name === "class")[0];
        if(attr && attr.value === selector.replace(".",''))
            return true;
    }else{
        if(element.tagName === selector)
            return true;
    }
    return false;
}


match("div #id .class", null);