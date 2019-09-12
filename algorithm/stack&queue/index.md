> 数据结构基础知识, 一直认为数据结构是很难的, 不过的确如此. 但是它的抽象性正是揭示出代码运行的本质,世界的本质. 好吧,这说的有点儿严重. 但是掌握它让你不仅仅是个程序员.

### 基础数据结构

#### 栈

1. **逻辑结构** 栈是一种先进后出的线性表,分成栈底和栈顶. 注意进出都是从栈顶开始的.

2. **存储结构** 分为顺序存储和链式存储, 都是利用线性表实现的.
   > 顺序存储:   
    1. 使用数组实现。只需要一个指针top(top指针只是使用下标来代替), 因为进出都在栈顶. 初始化时, 指针是并不是指向数组的第一个元素的, 即为top = -1. 那么具体的入栈和出栈过程是怎样的呢?  
    2. 入栈。先移动top指针，再入栈元素。很合理，因为是用数组实现的，而且初始top并不指向数组，所以只能先指向数组，才能加入元素。 
    出栈。先出栈元素，再移动栈顶指针top。这里需要注意，这时只是指针指向变了，但其实元素还是在数组中的。
    3. 栈满和栈空。当top = -1时为栈空；当top = maxSize - 1为满。
    4. 图示。之后再说吧。
    
    > 链式存储：
    1. 使用结构体实现。每个结构体分为两块，一块是存储数据，一块是存储指针。这时会有一个额外的空间，称为头指针head，它存储数据的块是空的，但是存储指针的块一直指向栈顶。
    2. 入栈，申请一个新的空间，将head所存储的指针赋值给新空间的存储指针块，再将新空间的指针赋值给head存储指针块。  
       出栈，将head所存指针指向的空间的所存指针赋值给head存储指针块即可。很绕是不是，但是很好理解。  
       可以发现，入栈和出栈都是从head开始或者说是从栈顶开始的。另外说一下，栈底空间的存储指针块指向null。
    3. 栈满和栈空。只要内存有空间，栈满无界限；栈空，当然是head存储指针块指向null了。
    4. 图示，之后再说吧。

#### 队列

1. **逻辑结构** 队列是一种先进先出的线性表，分为队头和队尾。

2. **存储结构** 分为顺序存储和链式存储，都是利用线性表实现的。
   > 顺序存储：  
   1. 使用数组实现。和栈不同，队列需要两个指针，一个指向队头front，一个指向队尾rear。初始化时队头指针和队尾指针都指向数组第一个位置，即front=rear=0。注意啊，这时就和栈有区别咯，就是说在顺序结构中front位置没有元素哦！
   2. 入队。先移动队尾指针，然后入队。  
      出队。先移动出队指针，然后出队。这里要记住front指针是增大的。
   3. 队满和队空。嗯。。。，这里确实有些问题，因为当你说front=rear时，队不就空了？天真！当你说rear=maxSize-1,队不就满了？天真！  
      需要借助循环队列来辅助计算。将队列想象成一个环形，这时会出现一个很有意思的现象，设某一位置为a，则(a + 1) % maxSize = a的下一个位置。这样来说则对空为front=rear；那么队满呢？是不是还为front=rear呢？当然不是了，这样的话，队空和队满就无法分辨了。所以使用front=(rear+1) % maxSize视为队满，也就是front和rear错了一个位置。
   4. 图示，之后再说吧。

   > 链式存储：
   1. 使用结构体实现。每个结构体分为两块，一块是存储数据，一块是存储指针。这时会有一个额外的空间，称为头指针head，它存储数据的块是空的，但是存储指针的块一直指向队头。还拥有front指针指向head和rear指针指向队尾。
   2. 入队。申请一个新空间，将队尾结构体的指针指向新块，移动rear指针指向新块。
      出队。将head所存指针指向的空间的所存指针赋值给head存储指针块即可。
   3. 队满和队空。队满不满，取决于内存有没有空间；队空时head存储指针块指向null了，这是front=rear=>head。
   4. 图示，之后再说吧。