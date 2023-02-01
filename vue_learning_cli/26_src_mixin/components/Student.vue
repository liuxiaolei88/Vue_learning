
<template>
  <div class="demo">
      <h2>学生名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <br><br>
      <button @click="showName">点击我提示学生名称</button>
  </div>
</template>

<script>
import {mixN} from "@/mixn";

export default {
   name:'StudentMy',//最好和文件名一直
    data(){
     return{
       name:'熊熊',
       address:'狗熊岭'
     }
    },
    mixins:[mixN]
    // methods:{
    //   showName(){
    //     alert(this.schoolName)
    //   }
    // },
    // 传递参数
    // props:['schoolName','address']
  }

</script>

<style>
  .demo{
  background-color: darkorange;
  }
</style>