function request() {
  let data = 'initValue'
  ajax({
    url: 'https://www.baidu.com',
    data: '',
    success: () => {
      data='请求成功！'
      console.log('请求成功！')
    },
    error: () => {
      data='请求失败！'
      console.log('请求失败！')
    }
  })

  console.log('data: ',data)
}

request()