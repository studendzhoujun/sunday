<template>
  <div class="hello">
    <h1 @click="goNext">{{ msg }}</h1>
  </div>
</template>

<script>
import Alert from './modal/modal.js'
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg:'hello word'
    }
  },
  created(){
    console.log('111')
    new Alert({
        title:'hello',
        flag:'',
        message:'this is test this is testthis is test this is testthis is test this is testthis is test this is testthis is test this is testthis is test this is test',
        okTitle:'',
        cancelTitle:'取消',
        okCallback:function(){
            console.log('ok')
        },
        cancelCallback:function(){
            console.log('canceld')
        },
      }).show()
  },
  methods:{
    goNext(){
      this.$router.push({path:'./about'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
