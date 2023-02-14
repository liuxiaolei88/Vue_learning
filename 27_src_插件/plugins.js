export default {
    install(Vue) {
        alert('我是一个插件')

        //     全局过滤器
        Vue.filter('mySlice', function (val) {
            return val.slice(0,1)
        })

    //     全局指令
        Vue.directive('fbind',{

        })
    //     定义混入
        Vue.mixin({

        })
    //     给vue原型添加方法，vm和vc都可以用
        Vue.prototype.hello = ()=>{alert('嗨')}

    }
}