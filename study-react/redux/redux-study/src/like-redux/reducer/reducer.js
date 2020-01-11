// 改变state时可以任意修改，只要调用store.emit
// 这样肯定不行，所以要有一个约定action，还要plan执行约定
// 假如有多个状态呢，这时plan肯定变得非常大！所以先拆分再合并
exports.countPlan = (count = 1, action) => {
  switch (action.type) {
    case "increment":
      return count + 1;
      break;
    case "decrement":
      return count - 1;
      break;
    default:
      return count;
  }
};

exports.infoPlan = (info = { name: "", love: "" }, action) => {
  switch (action.type) {
    case "name":
      return { ...info, name: action.value };
      break;
    case "love":
      return { ...info, love: action.value };
      break;
    default:
      return info;
  }
}
