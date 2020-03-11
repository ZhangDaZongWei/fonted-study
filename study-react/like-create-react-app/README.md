### React全家桶构建过程

> 整个构建过程能学到不少知识，主要是`webpack`这方面的，不过在整个构建的过程中，我认为照着教程一步步走，并不是目的，而是要发现在开发应用中一些通用的问题，并且得到解决方法。参考文章：[从零搭建React全家桶框架教程](https://github.com/brickspert/blog/issues/1#explain)

#### 总结

**babel**

用于将最新标准的ES版本或者一些框架语言格式，转换为通用的ES版本，具体来说就是将`ES6`、`ES7`或者`JSX`转换为`ES5`。使用时需要一个配置文件，以前是`.babelrc`，babel v7是`babel.config.js`。搭配`webpack`使用时需要配置`babel-loader`。

**webpack**

1. webpack-dev-server：一个小型的静态服务器，为`webpack`打包后的资源提供web服务。使用它之后，打包的资源都会放入内存中，所以配置的`output`中`path`目录中是没有文件的。
2. Hot Moudle Replacement：热模块替换。默认是当改动后，就会重新刷新浏览器页面，这样的话用户体验不好，而且页面的先前状态也没法保存。使用`HMR`之后，不用刷新浏览器就能变动修改的地方。
3. devtool：可以更方便地调试代码。
4. loader：
   - css：`css-loader`, 可以使用`@import`和`url()`；`style-loader`，将css注入`DOM`中的`<style>`中。另外可以使用`extract-text-webpack-plugin`或者`extract-css-webpack-plugin`去提取`css`代码到单独的文件。
   - image：`url-loader`，将文件(包括图片)转为`base64 url`，`file-loader`，使图片等静态资源也可以使用`import`导入文件中。
5. code split 代码分割/按需加载：默认情况下，访问应用时，打包后的资源都会全部加载，这样首屏速度肯定会慢。如果在打开某个页面时在加载相应的代码，就很棒了。本项目是以路由为分割参考，引入`@babel/plugin-syntax-dynamic-import`动态加载包和`react-loadable`依据动态导入加载相应的`React`组件。
6. cache：浏览器为了提高加载资源的速度，会依据文件名称自动进行缓存。但是有一种情况是如果文件内容变了，但是文件名没变，就不会重新加载，这样是不行了。所以可以将`output`中的`filename`值使用substitute来命名。
7. HtmlWebpackPlugin：若是依据第6点去命名，那么每次`html`模板中引入`js`文件时都要修改，太麻烦了，而且不现实。而此插件就是自动将`js`文件引入`html`模板中。
8. 提取公共代码：如第三方库的一些代码。
9. 在开发环境`development`中，注重的是具有实时重新加载(`live reloading`)或热模块替换(`hot module replacement`)能力的 `source map` 和 `localhost server`，而在生产环境中，我们的目标则转向于关注更小的`bundle`，更轻量的`source map`，以及更优化的资源，以改善加载时间。这里用到`webpack-merge`插件可以提取两种环境`webpack`配置的公共部分。
10. 文件压缩：webpack v4自带，但是只针对`js`文件。
11. cache优化：对于公共代码，都不应该去重新加载的，但是事实上当某个应用文件变化后，同样会重新加载，所以可以使用`HashedModuledsPlugin`插件。
12. pulicPath: `output`中的`publicPath`作用是配置项目中的资源基础路径，主要在上传到服务器时使用。
13. 打包优化：使用`clean-webpack-plugin`去清理`dist`文件夹。