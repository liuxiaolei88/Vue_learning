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

