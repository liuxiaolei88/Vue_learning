<!--
ref属性：用来给元素或者子组件注册引用信息（id的替代者）
用在html标签就是获取真实dow元素，应用在组件标签上是组件实例对象vc
-->
<template>
  <div className="demo">
    <SchoolMy ref="sch"></SchoolMy>
    <button ref="btn" @click="ShowInfo">点我获取组件实例对象</button>
  </div>
</template>

<script>
import SchoolMy from "./components/School.vue";

export default {
  name: 'App',//最好和文件名一直
  components: {
    SchoolMy
  },
  methods:{
    ShowInfo(){
      console.log(this.$refs.sch)
    }
  }


}

</script>
