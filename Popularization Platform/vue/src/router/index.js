import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/views/Login.vue";
import Planting from "@/views/Planting.vue";
import Layout from "@/views/Layout.vue";
import Register from "@/views/Register.vue";
import FireProof from "@/views/FireProof.vue";
import Ecology from "@/views/Ecology.vue";
import BasicKnowledge from "@/views/BasicKnowledge.vue";
import Characteristics from "@/views/Characteristics.vue";
import Services from "@/views/Services.vue";
import Culture from "@/views/Culture.vue";
import Climate from "@/views/Climate.vue";
import Farmer from "@/views/Farmer.vue";
import Economy from "@/views/Economy.vue";
import AntiPoverty from "@/views/AntiPoverty.vue";
import Land from "@/views/Land.vue";
import Equipment from "@/views/Equipment.vue";
import Policy from "@/views/Policy.vue";
import Innovation from "@/views/Innovation.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '1',
                name: 'home',
                component: Home
            },
            {
                path: '2',
                name: 'basicKnowledge',
                component: BasicKnowledge
            },
            {
                path: 'characteristics',
                name: 'characteristics',
                component: Characteristics
            },
            {
                path: 'services',
                name: 'services',
                component: Services
            },
            {
                path: 'culture',
                name: 'culture',
                component: Culture
            },
            {
                path: '3',
                name: 'ecology',
                component: Ecology
            },
            {
                path: '4',
                name: 'climate',
                component: Climate
            },
            {
                path: '5',
                name: 'fireproof',
                component: FireProof
            },
            {
                path: '6',
                name: 'farmer',
                component: Farmer
            },
            {
                path: 'planting',
                name: 'planting',
                component: Planting
            },
            {
                path: 'economy',
                name: 'economy',
                component: Economy
            },
            {
                path: 'antiPoverty',
                name: 'antiPoverty',
                component: AntiPoverty
            },
            {
                path: 'land',
                name: 'land',
                component: Land
            },
            {
                path: 'equipment',
                name: 'equipment',
                component: Equipment
            },
            {
                path: '7',
                name: 'policy',
                component: Policy
            },
            {
                path: '8',
                name: 'innovation',
                component: Innovation
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 解决跳转同一个路由的报错方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

/*//路由守卫
router.beforeEach((to, form, next) => {
    if (to.path === '/login') {
        next();
    }
    const user = localStorage.getItem("user");
    if (!user && to.path !== '/login' && to.path !== '/register') {
        return next("/login");
    }
    next();
})*/

export default router
