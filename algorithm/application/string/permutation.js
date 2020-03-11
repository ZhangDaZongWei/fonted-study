/**
 * 实现字符串的全排列，例如“abc” => abc acb bac bca cab cba
 */

const str = 'abc'

function Permutation(str) {
  const result = [];
  if (str) {
    queue = str.split('')
    PermutationCore(queue, result);
  }
  result.sort();
  return [... new Set(result)];
}

function PermutationCore(queue, result, temp = "", current = "") {
  current += temp;
  if (queue.length === 0) {
    result.push(current);
    return;
  }
  for (let i = 0; i < queue.length; i++) {
    temp = queue.shift();
    PermutationCore(queue, result, temp, current);
    queue.push(temp);
  }
}

console.log('permutation: ',Permutation(str))