import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/pages/home.vue"
import about from "@/components/pages/about.vue"
import fournotfour from "@/components/pages/fournotfour.vue"
import service from "@/components/pages/service.vue"
import blog from "@/components/pages/blog.vue"
import contact from "@/components/pages/contact.vue"
import career from "@/components/pages/career.vue"
import header from "@/components/pages/header.vue"
import footer from "@/components/pages/footer.vue"
Vue.use(Router)
export default new Router({
    mode:"history",
    routes:[
        {
            path: '/',
            name:'home',
            component:home
        },
        {
            path:"/about",
            name:'about',
            component:about
        },
        {
            path:"*",
            name:'404',
            component:fournotfour
        },
        {
            path:"/service",
            name:'service',
            component:service
        },
        {
            path:"/blog",
            name:'blog',
            component:blog
        },
        {
            path:"/contact",
            name:'contact',
            component:contact
        },
        {
            path:"/career",
            name:'career',
            component:career
        },
        {
            path:"/header",
            name:'header',
            components:header
        },
        {
            path:"/footer",
            name:'footer',
            components:footer
        }
    ]
})