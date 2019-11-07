import TsWebpack from './main';

let content = document.querySelector('.content')

content.innerHTML = TsWebpack('ts-loader')

