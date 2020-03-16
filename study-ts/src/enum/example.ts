// 可读性差，难以维护，牵一发而动全身
// function initByRole(role: Number) {
  // if (role === 1 || role === 2) {
    // do sth
  // } else if (role === 3 || role === 4) {
    // do sth
  // } else if (role === 5) {
    // do sth
  // } else {
    // do sth
//   }
// }

// 使用枚举改进
const enum Member {
  Reporter=1,
  Developer,
  Maintainer,
  Owner,
  Guest
}

function initByRole(role:Number) {
  if (role === Member.Reporter || role === Member.Developer) {
    // do sth
  } else if (role === Member.Maintainer || role === Member.Owner) {
    // do sth
  } else if (role === Member.Guest) {
    // do sth
  } else {
    // do sth
  }
}


