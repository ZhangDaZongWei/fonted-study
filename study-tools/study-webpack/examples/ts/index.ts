import {tsWebpack} from './main';

let content = document.querySelector('.content')

content.innerHTML = tsWebpack('ts-loader')

