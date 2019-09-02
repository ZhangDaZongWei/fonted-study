/**
 * 1. parseInt(string,radix) 将一个字符串string转换为redix进制的数，然后在输出它的十进制的数
 *    1. 参数string，应当为一串数字，若其不是string类型，会自动转换成字符串。而且字符串两边的空白符会被忽略
 *    2. 参数redix表示基数，范围是2-36。默认是十进制。每次最好指明redix
 *    3. 返回值，除了正确输出十进制的数，当不能解析string时，返回NaN
 *    4. 深入此函数，注意事项：
 *       1. 在解析string这个参数时，类似于一位一位地进行，就是说当某一位不满足redix基数所对应的数字时，就会截断，造成前面的正常输出，后面不管
 *       2. 当基数为undefined或为0或没有指定，这时string的作用就体现出来了：
 *          1. 如果string为以'0X'开头，不用说了，十六进制
 *          2. 如果string为以'0'开头，这时八进制和十进制都符合要求，不过ES5规定使用十进制，很合理
 *          3. 除了上面两种开头情况外，其余都是十进制
 */
const p1 = parseInt('123 ')

console.log('p1: ',p1)

const p2 = parseInt(true,10)

console.log('p2: ',p2)

const p3 = parseInt(' 100 0A ',10)

console.log('p3: ', p3)

const p4 = parseInt('6.022e2',10)

const p5 = parseInt(6.022e2,10)

// 你会发现p4和p5竟然不一样！原因在于ToString时的转换成不同字符串了
console.log('p4: ', p4, 'p5: ',p5)

const p6 = parseInt('0X123')

console.log('p6: ',p6)

// 将整型数值转化为特定基数的字符串值这样做
// 发现没有使用parseInt可以将其他进制的数转化为十进制，而intValue.toString(radix)又可以将十进制转换为任意进制。
const s1 = p6.toString(8) 

console.log('s1: ',s1)