/**
 * 类型保护机制
 * 在特定的区块中保证变量属于某种确定的类型，
 * 可以在此区块中放心地引用此类型的属性，调用此类型的方法
 * 实现方式：
 * 1. instanceof，判断某个实例属不属于某个类
 * 2. in，判断某个属性是否属于某个实例
 * 3. typeof，判断基本的类型
 * 4. 创建类型保护函数，自定义，返回值为 类型谓词
 */

enum Type {
  Strong,
  Week
}

class Java {
  helloJava() {
    console.log('helloJava')
  }
  java: string = 'java'
}

class JavaScript {
  helloJavaScript() {
    console.log('helloJavaScript')
  }
  javaScript: string = 'javaScript'
}

// 类型保护函数
function isJava(language: Java | JavaScript): language is Java {
  return (language as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
  // language是一个联合类型(Java ｜ JavaScript)
  let language = type === Type.Strong ? new Java() : new JavaScript()
  // 以下会报错
  // if (language.helloJava) {
  //   language.helloJava()
  // }
  // 第一种解决方式，添加断言
  if ((language as Java).helloJava) {
    (language as Java).helloJava()
  } else {
    (language as JavaScript).helloJavaScript()
  }
  // 第二种解决方式，instanceof
  if (language instanceof Java) {
    language.helloJava()
  } else {
    language.helloJavaScript()
  }
  // 第三种解决方式，in
  if ('java' in language) {
    language.helloJava()
  } else {
    language.helloJavaScript()
  }
  // 第四种解决方式，类型保护函数
  if (isJava(language)) {
    language.helloJava()
  } else {
    language.helloJavaScript()
  }
  // 针对x形参的判断
  if (typeof x === 'string') {
    x.toString()
  } else {
    x.toFixed(2)
  }
  return language
}