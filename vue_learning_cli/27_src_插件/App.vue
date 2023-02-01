<!--
ref属性：用来给元素或者子组件注册引用信息（id的替代者）
用在html标签就是获取真实dow元素，应用在组件标签上是组件实例对象vc
-->
<template>
  <div className="demo">
    <SchoolMy ref="sch" address = '111' schoolName = '222'></SchoolMy>
    <StudentMy></StudentMy>
    <button ref="btn" @click="ShowInfo">点我获取组件实例对象</button>
  </div>
</template>

<script>
import SchoolMy from "./components/School.vue";
import StudentMy from "@/components/Student.vue";

// 可以全局混合,写上vm上也会用于混合方法
// import {mixN} from "@/mixn";
// Vue.mixin(mixN)

export default {
  name: 'App',//最好和文件名一直
  components: {
    SchoolMy,
    StudentMy
  },
  methods:{
    ShowInfo(){
      console.log(this.$refs.sch)
    }
  }


}

</script>
