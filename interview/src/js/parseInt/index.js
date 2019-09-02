// map.parseInt
// 因为parseInt(string,redix)中的redix表示基数(2-36)，其实也就是进制，当redix确定后，参数string必须符合redix的规定，否则函数返回NaN
// 1. 当string为1，redix为0时，当然没有基数为0的，所以redix默认值是10，即返回1
// 2. 当string为2，redix为1时，因为小于2，所以不符合redix范围的规定，即返回NaN
// 3. 当string为3，redix为2时，因为基数为2，string肯定只能由0、1，所以不符合redix的规定，即返回NaN

const newArr = ['1','2','3'].map(parseInt)

console.log('newArr: ',newArr)