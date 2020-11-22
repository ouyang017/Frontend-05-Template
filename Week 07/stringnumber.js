//完成 StringToNumber 和 NumberToString 两个函数
// 进制 2、8、10、16
function stringToNumber(str,radix){
    // const two_model = ['0', '1'];
    // const eight_model = ['0', '1', '2', '3', '4','5','6', '7'];
    // const ten_model = ['0', '1', '2', '3', '4','5','6', '7','8','9'];
    // const sixteen_model = ['0', '1', '2', '3', '4','5','6', '7','8','9','a','b','c','d','e','f'];

    // str = String(str).toLowerCase();
    // if(!radix){
    //     radix = "10";
    // }
    // if("2" === radix || "8" === radix ||"10" === radix || "16" === radix){
    //    if("2" === radix){
    //         if(!str.startsWith("0b") || checkstr(str.substr(2),two_model)){
    //             return "格式不对！";
    //         }
    //     }else if("8" === radix){
    //         if(!str.startsWith("0o") || checkstr(str.substr(2),eight_model)){
    //             return "格式不对！";
    //         }
    //     }else if("16" === radix){
    //         if(!str.startsWith("0x") || checkstr(str.substr(2),sixteen_model)){
    //             return "格式不对！";
    //         }
    //     }else if("10" === radix){
    //         if(!checkstr(str.substr(2),ten_model)){
    //             return "格式不对！";
    //         }
    //     }
    // }
    
    return  Number.parseInt(str,radix);
}

// function checkstr(resouce,model) {
//     for(str of resouce){
//        if(model.indexOf(str) == -1){
//            return false;
//        }
//     }
//     return true;
// }

function numberToString(num,radix){
    try {
        num = Number(num);
    } catch (error) {
        console.log(error);
    }
    return num.toString(radix);
}

//console.log(numberToString(0xf,"10"));
console.log(stringToNumber("22","16"));