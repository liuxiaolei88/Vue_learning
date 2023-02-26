https://blog.csdn.net/qq_55593227/article/details/119717498?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167728535616800182720035%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=167728535616800182720035&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-119717498-null-null.142^v73^insert_down2,201^v4^add_ask,239^v2^insert_chatgpt&utm_term=vue&spm=1018.2226.3001.4187


74:删除
- confirm（弹窗可以点确认或者删除）
- v-model：双向绑定checkbox
- filter ！=，进行删除

75：底部统计
- 全部，遍历数组，已完成，判断done
- 计数：reduce 条件判断 
  - retuen pre+条件判断

76：底部交互
- 当数量为0，把底部栏隐藏
- 实现全选
  - 计算属性需要get 和set
- 清楚已完成

77：todolist总结
- 实现动态组件：（状态提升），一些组件在用，放在共同的父组件上。
- 子组件到父组件，要求父组件给子组件一个函数

78：浏览器的本地存储
- localstrotage.setItem('msg','hello')
- 对象可以转json存储（stringfy），不然直接tostring，解析就是json.parse
- 读取 getItem（）
- 清空 clear
- 删除  removeItem
- 如果没有读出来就是null
- sessionStrage：随着浏览器的关闭而关闭

79：本地存储
- 深度监视要写handler

80：自定义事件
- v-on：事件名=""
- $emit（'事件名'）
- ref
- .once 只点一次才有用

81：解绑自定义事件
- this.$off

82
- native使用原生事件
- 子组件和父组件（自定义事件）

83 全局事件总线
- 创建一个让所有组件都可以看到的对象  

87：消息订阅与发布（第三方库，类似全局事件总线）
- https://zhuanlan.zhihu.com/p/506510610

89
- vue添加响应式数据 ：$set
- 绑定失去焦点事件：@blur
- 判断有没有属性
- input框

90
- nextTick
- https://www.jianshu.com/p/a7550c0e164f

91 动画
- Keyframes
- transform

92 过渡
-  -

96 跨域
- https://juejin.cn/post/6844903767226351623
- Node中间件代理(两次跨域)
- https://blog.csdn.net/Vest_er/article/details/126632637
- pathRewrite
- changeOrigin：更改请求来自于

98 静态组件
- 放到public文件夹内

100
- 加入loading 效果

101 vue-resource

102 插槽
- https://blog.csdn.net/weixin_53614367/article/details/123512913
- <\slot>

103 具名插槽
- slot=

104 作用域插槽
- 把数据传给使用者，外面包裹一层template scope=名字

105 vuex
- 先import才运行代码

133 hash和history
- https://www.jianshu.com/p/ab085ae33ee5

