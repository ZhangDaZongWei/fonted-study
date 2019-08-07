const ages = [11,33,12,54,18,96]

const youngest = Math.min.apply(Math,ages)

const oldest = Math.max.apply(Math,ages)

console.log(youngest,oldest)

const y1 = Reflect.apply(Math.min,Math,ages)

console.log(y1)