{
    // 基本定义和生成实例
    class Parent {
        constructor(name = 'hhhh') {
            this.name = name;
        }
    }

    let parent = new Parent();
    console.log('构造函数和实例', parent); // Parent {name: "hhhh"}

    let v_parent = new Parent('v');
    console.log('构造函数和实例', v_parent); // Parent {name: "v"}
}

{
    // 继承
    class Parent {
        constructor(name = 'abc') {
            this.name = name;
        }
    }

    class Child extends Parent {

    }

    console.log('继承', new Child()); // 返回Child {name: "abc"}
}

{
    // 继承传递参数
    class Parent {
        constructor(name = 'ddd') {
            this.name = name;
        }
    }

    class Child extends Parent {
        constructor(name = 'child') {
            // 修改父类的属性
            super(name);
            // 定义子类属性要放在 supper 之后
            this.type = 'child';
        }
    }

    console.log('继承传递参数', new Child('hello')); // 返回_Child {name: "hello", type: "child"}
}

{
    // getter,setter
    class Parent {
        constructor(name = 'popo') {
            this.name = name;
        }

        get longName() {
            return 'mk' + this.name
        }

        set longName(value) {
            this.name = value;
        }
    }

    let v = new Parent();
    console.log('getter', v.longName); // 返回mkpopo
    v.longName = 'hello';
    console.log('setter', v.longName); // 返回mkhello
}

{
    // 静态方法
    class Parent {
        constructor(name = 'bbb') {
            this.name = name;
        }

        static tell() {
            console.log('tell');
        }
    }

    Parent.tell(); // 返回tell

}

{
    // 静态属性
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }

        static tell() {
            console.log('tell');
        }
    }

    Parent.type = 'test';

    console.log('静态属性', Parent.type);


}
