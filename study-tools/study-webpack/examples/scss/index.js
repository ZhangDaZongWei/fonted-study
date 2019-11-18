import { scssWebpack } from './main';
import './index.scss';

let content = document.querySelector('.content')

content.innerHTML = scssWebpack('webpack-scss-loader')

