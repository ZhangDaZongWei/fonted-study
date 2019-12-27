// json数据
function test1() {
  let jsonText = '[{"name":"zhangzongwei"},"graduation",[2,5]]';
  let jsText = JSON.parse(jsonText);
  console.log(jsText instanceof Array);
}

function test2() {
  let jsonObj = {
    big: 25,
    small: 15,
    success: "hahaha"
  };

  let jsonArray = [25, 15, "hahaha"];

  let jsonText = JSON.stringify(
    jsonArray,
    function(key, value) {
      if (value === "hahaha") {
        return function() {
          console.log("ha");
        };
      } else {
        return value;
      }
    },
    "~"
  );

  console.log("序列化的json文本为：", jsonText);
}
