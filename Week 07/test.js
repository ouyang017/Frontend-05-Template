var a = 2;
void function(){
    a = 1;
    {
        const a;
    } 
}();
console.log(a);
