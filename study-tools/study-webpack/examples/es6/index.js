import { Es6Webpack } from './utils';

let content = document.querySelector('.content')

content.innerHTML = new Es6Webpack('webpack-babel-loader').print()

