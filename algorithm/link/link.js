/**
 * 单链表存储，判断是否为回文字符串
 */
// let link5 = {
//   data: 'D',
//   next: null
// }

// let link4 = {
//   data: 'A',
//   next: link5
// }

// let link3 = {
//   data: 'B',
//   next: link4
// }

let link2 = {
  data: 'C',
  next: null
}

let link1 = {
  data: 'A',
  next: link2
}


// 空间复杂度为O(1)，因为没有占据额外空间
// 时间复杂度为O(n/2) = O(n)
function isPalindrome(linkTitle) {
  if (!linkTitle) {
    throw TypeError("argument value is invaild")
  }
  if (!linkTitle.next) return true
  let slow = linkTitle
  let quick = linkTitle
  let temp1 = null    // 存储上一个slow值
  let temp2 = null    // 存储下一个slow值
  let temp3 = null
  let result = null
 while(quick && quick.next) {   // 反转中点以前的值
   quick = quick.next.next
   temp2 = slow.next
   slow.next = temp1
   temp1 = slow
   slow = temp2
 }
 temp3 = temp1
 if (quick) {   // 对于奇数和偶数链表，quick的值不一样
   slow = slow.next
 }

 while(temp1 && slow && temp1.data === slow.data) {
   temp1 = temp1.next
   slow = slow.next
 }

 if (!temp1 && !slow) {
   result = true
 } else {
   result = false
 }

 // 恢复链表
let temp4 = temp2
let temp5 = null
while(temp3) {
  temp5 = temp3.next
  temp3.next = temp4
  temp4 = temp3
  temp3 = temp5
}
 return result
}

console.log("isPalindrome: ", isPalindrome(link1))

/**
 * 单链表反转
 */

function reverse(linkTitle) {
  if (!linkTitle) {
    throw TypeError("argument value is invaild")
  }
  if (!linkTitle.next) return linkTitle
  let p = linkTitle
  let temp1 = null
  let temp2 = null
  while(p) {
    temp2 = p.next
    p.next = temp1
    temp1 = p
    p = temp2
  }
}

/**
 * 求链表中间节点
 */

function getMiddleNode(linkTitle) {
  if (!linkTitle) {
    throw TypeError("argument value is invalid")
  }
  if (!linkTitle.next) return linkTitle
  let slow = linkTitle
  let quick = linkTitle
  while(quick && quick.next) {
    quick = quick.next.next
    slow = slow.next
  }
  return slow
}

/**
 * 删除链表倒数第n个节点
 */

function deleteNodeEnd(head, n) {
  if (!head || !n) {
    throw Error("argument head or n is invalid!")
  }
  // 快慢指针
  let slow = head
  let quick = head
  let temp = null
  n = n-1
  while(quick && n) {
    quick = quick.next
    n--
  }
  if (!quick) {
    throw Error("argument n is invalid!")
  }
  while(quick.next) {
    temp = slow
    quick = quick.next
    slow = slow.next
  }
  if (temp) {
    temp.next = slow.next
  } else {
    head = slow.nextx
  }
  return head
}

/**
 * 两个有序链表的合并
 */

// 链表1
let link_one_3 = {
  data: 5,
  next: null
}

let link_one_2 = {
  data: 3,
  next: link_one_3
}

let link_one_1 = {
  data: 1,
  next: link_one_2
}

// 链表2
let link_two_3 = {
  data: 6,
  next: null
}

let link_two_2 = {
  data: 4,
  next: link_two_3
}

let link_two_1 = {
  data: 2,
  next: link_two_2
}

// 空间复杂度，因为新创建了一个newLink，所以为O(n)
// 时间复杂度，主要在于while，为O(n)
function merge(linkTitle1,linkTitle2) {
  if (!linkTitle1 || !linkTitle2) {
    throw TypeError("argument value is invaild")
  }
  let newLink = {
    data: undefined,
    next: null
  }
  let new_p = newLink
  let p1 = linkTitle1
  let p2 = linkTitle2
  while(p1 && p2) {
    if (p1.data > p2.data) {
      new_p.next = p2
      new_p = new_p.next
      p2 = p2.next
    } else {
      new_p.next = p1
      new_p = new_p.next
      p1 = p1.next
    }
  }

  if (p1) {
    new_p.next = p1
  }
  if (p2) {
    new_p.next = p2
  }
  return newLink
}

/**
 * 链表环形的检测
 */
let link_cycle_3 = {
  data: 3,
  next: null
}

let link_cycle_2 = {
  data: 2,
  next: null
}

let link_cycle_1 = {
  data: 1,
  next: null
}

link_cycle_1.next = link_cycle_2
link_cycle_2.next = link_cycle_3
link_cycle_3.next = link_cycle_2

function testCycle(linkTitle) {
  if (!linkTitle) {
    throw TypeError("argument value is invaild")
  }
  let linkArr = []
  let p = linkTitle
  while(p) {
    let index = linkArr.findIndex(item => item === p)
    if (index !== -1) {
      return index
    }
    linkArr.push(p)
    p = p.next
  }
  return -1
}

function testCycle2(linkTitle) {
  if (!linkTitle || !linkTitle.next) return false
  // 快慢指针
  let slow = linkTitle
  let quick = linkTitle
  while(quick) {
    quick = quick.next.next
    slow = slow.next
    if (quick === slow) return true
  }
  return false
}
