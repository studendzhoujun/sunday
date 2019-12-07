import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import hello from "./components/HelloWorld.vue";
import about from "./components/about.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/hello",
        component: hello
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "*",
        component: hello
    }
]

var router =  new VueRouter({
    routes
})
export default router;