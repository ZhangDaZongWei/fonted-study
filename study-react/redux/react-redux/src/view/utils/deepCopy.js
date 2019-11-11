export const deepCopy = (object) => {

  if (typeof object !== 'object') return object

  const obj = Array.isArray(object) ? [] : {}

  for(let key in object) {
    if (Object.prototype.hasOwnProperty.call(object,key)) {
      if (typeof object[key] === 'object') {
        obj[key] = deepCopy(object[key])
      } else {
        obj[key] = object[key]
      }
    }
  }
  
  return obj
}