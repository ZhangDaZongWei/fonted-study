/**
 * 类型推断
 * 1. 从右往左推断
 * 2. 从左往右推断
 */

// 从右往左
// 根据1，从而推断infer_a为Number类型
let infer_a = 1
// 根据[1, null]推断infer_arr为 Number | null 联合类型
let infer_arr = [1, null]

// 自动推荐参数和返回值类型
let infer_fun = (x=1) => x+1

window.onkeydown = (event: KeyboardEvent) => {
  console.log(event.altKey)
}

function infer_fun2 (x: any) { console.log(x.a) }

class Inference {}
class Inference_a extends Inference {}
class Inference_b extends Inference {}

// 指定数组为父类型
let infer: Inference[] = [new Inference_a(), new Inference_b()]