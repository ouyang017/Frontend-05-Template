//用JavaScript去设计狗咬人的代码
class Person{
    constructor(name){
        this.name = name;
    }

    hurt(obj){
        console.log(this.name +"被"+obj.name+"伤害了");
    }
}

class Dog{
    constructor(name){
        this.name = name;
    }
}

new Person("张三").hurt(new Dog("wangcai"));