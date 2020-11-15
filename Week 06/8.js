//写一段JS的函数，把一个string它代表的字节给它转换出来，用UTF8对string进行编码。
function UTF8_Encoding(string) {
    let strbuffer = [];
    for (const iterator of string) {
        strbuffer.push(iterator.codePointAt());
    }
    console.log(strbuffer);
    return strbuffer;
}

UTF8_Encoding("ouyc");