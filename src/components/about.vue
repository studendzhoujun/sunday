<template>
  <div class="hello">
    <h1 @click="showw">{{ msg }}</h1>
  </div>
</template>

<script>
import Alert from './modal/modal.js'

export default {
  name:'about',
  data(){
      return {
          msg:'this is about me'
      }
  },
  created(){
      console.log('222')
  },
  beforeRouteLeave (to, from , next) {
       new Alert({
                title:'hello',
                flag:'t',
                message:'this is test',
                okTitle:'okok',
                cancelTitle:'quxiao',
                okCallback:function(){
                    console.log('ok')
                    setTimeout(function(){
                       next()
                    },2000)
                },
                cancelCallback:function(){
                   console.log('cancel')
                   next(false)
                },
            }).show()
  },
  methods:{
      showw(){
        //   new Alert({
        //         title:'hello',
        //         flag:'t',
        //         message:'this is test',
        //         ok:'ok',
        //         cancel:'cancel',
        //         okTitle:'okok',
        //         cancelTitle:'quxiao',
        //         okCallback:function(){
        //             console.log('ok')
        //         },
        //         cancelCallback:function(){
        //            console.log('cancel')
        //         },
        //     }).show()
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
.hello{
    background:#990;
}
</style>
