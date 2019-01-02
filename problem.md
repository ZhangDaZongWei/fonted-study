## git问题及解决方式
1. **LF will be replaced by CRLF in readme.md. The file will have its original line endings in your working directory.** LF将被CRLF替换，在工作区里,这个文件会保持它原本的换行符。
- 答：首先CRLF是Windows系统所用的换行符，而LF是Linux系统的换行符，又因为将设置了 $git config autoCRLF true ，所以在转换时，会出现问题，而git会提醒你。具体见下面的解答：[解决方法一](https://www.aliyun.com/jiaocheng/878594.html); [解决方法二](https://www.aliyun.com/jiaocheng/132118.html); [解决方法三](https://blog.csdn.net/qq_38473236/article/details/81531870)。
2. **使用“$git commit”提交时，会调用出之前的编辑器进行编辑，这时默认的提交信息会包括被注释掉的git status命令的最新输出结果，且最上方是空行；下面又说当你推出编辑器时，git会移除注释内容和差异比对，把剩下的信息记录到所创建的提交中，那么问题来了，到底这些注释的信息提交了没有?**
- ![problem-2](\images\problem-2.JPG)
- **尚未解决**
3. **在git的忽略机制中，‘空行或者以#开始的行会被忽略’是什么意思？**
- **尚未解决** (我认为应该是说，在.gitignore文件中使用 空行或者以#开始的行 会被忽略，也就是说它就是在.gitignore文件中起注释的作用。)
4. **为什么使用$git rm log/\\*.log可以执行**,**而使用"$rm log/\\*.log"不可以执行呢？**
- ![problem4](\images\problem-4.1.JPG)
- ![problem4](\images\problem-4.2.JPG)
- **尚未解决**
5. **不能执行$git log --pretty=online命令**
- **尚未解决**                                                                                                                                                                                                                                                                                 