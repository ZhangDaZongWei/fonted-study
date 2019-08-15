// 循环复制的实现
// 即深度优先遍历

function cloneLoop(x) {
  const root = {};

  // 栈
  const loopList = [
      {
          parent: root,
          key: undefined,
          data: x,
      }
  ];

  while(loopList.length) {
      console.log('loopList: ',loopList)
      // 深度优先
      const node = loopList.pop();
      const parent = node.parent;
      const key = node.key;
      const data = node.data;

      // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
      let res = parent;
      if (typeof key !== 'undefined') {
          res = parent[key] = {};
      }

      for(let k in data) {
          if (data.hasOwnProperty(k)) {
              if (typeof data[k] === 'object') {
                  // 下一次循环
                  loopList.push({
                      parent: res,
                      key: k,
                      data: data[k],
                  });
              } else {
                  res[k] = data[k];
              }
          }
      }
  }

  return root;
}

const source = {
  name: 'zhangzongwei',
  age: 25,
  apprance: {
    tall: 170,
    weight: 130
  }
}

const newObj = cloneLoop(source)

console.log('newObj: ',newObj)