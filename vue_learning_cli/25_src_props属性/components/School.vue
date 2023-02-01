
<template>
  <div class="demo">
      <h2>学校名称：{{schoolName}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="showName">点击我提示学校名称</button>
  </div>
</template>

<script>
export default {
   name:'SchoolMy',//最好和文件名一直
    // data(){
    //  return{
    //    schoolName:'熊熊幼儿园',
    //    address:'狗熊岭'
    //  }
    // },
    methods:{
      showName(){
        alert(this.schoolName)
      }
    },
    // 传递参数
    props:['schoolName','address']
  }

</script>

<style>
  .demo{
  background-color: darkorange;
  }
</style>