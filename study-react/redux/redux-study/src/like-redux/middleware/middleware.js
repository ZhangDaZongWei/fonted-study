// 现在需要一个中间件来增强一下功能，打印出日志
// 再加一个打印错误日志
// 再加一个...，这样就会越来越多，所以拆开合并
// 每个中间件中的next不能写死，要可扩展其他的中间件
// 那就传入next就好了

exports.printLogs = state => next => action => {
  console.log("previous state: ", state);
  console.log("action: ", action);
  next(action);
  console.log("next state: ", state);
};

exports.printError = state => next => action => {
  try {
    next(action);
  } catch (err) {
    console.log("error is : ", err);
  }
};

exports.printTime = state => next => action => {
  console.log('current time: ', new Date().toLocaleString())
  next(action)
}