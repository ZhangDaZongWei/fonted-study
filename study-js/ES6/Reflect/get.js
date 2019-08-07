  
  let obj = {
    name: 'zhangzongwei',
    age: '25'
  }

  
  Object.defineProperty(obj,'power',{
    configurable: true,
    enumerable: true,
    get: function() {
      return () => this.name + ' ' + this.age
    },
    set: (value) => {
      console.log('call set function')
    }
  })
  
  console.log(Object.getOwnPropertyDescriptor(obj,'power'))

  let newObj = {
    name: 'liuguangze',
    age: '23'
  }
  
  console.log(obj.power())

  console.log(Reflect.get(obj,'power',newObj)())

  // ------------------------------------------------------------------

  var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
      return this.foo + this.bar;
    },
  };
  
  var myReceiverObject = {
    foo: 4,
    bar: 4,
  };
  
 console.log(Reflect.get(myObject, 'baz', myReceiverObject))