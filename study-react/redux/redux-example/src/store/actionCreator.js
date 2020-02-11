export const ADD = "ADD"
export const UPSTATUS = "updateStatus"

export function addAction(text) {
  return {
    type: ADD,
    text
  }
}

export function upStatusAction(index) {
  return {
    type: UPSTATUS,
    index
  }
}