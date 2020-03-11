class StaticProperty {
  constructor(){
    this.x = 3
    this.y = 5
  }

  [Symbol.iterator]() { return this }

  next() {
    for (let i=0; i<2; i++){
      
    }
  }
}

let static = new StaticProperty()

console.log(static)
