import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyYouxi from "../views/MyYouxi.vue"
import Wangzhe from '../views/WangZhe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path:"/wangzhe",
    name:"wangzhe",
    component: Wangzhe
  },
  {
    path:"/juedi",
    name:"juedi",
    component:()=>import('../views/JueDi'),
  },
  {
    path:"/chhe",
    name:"juedi",
    component:()=>import('../views/JueDi'),
  },
  {
    path:"/yingxiong",
    name:"yingxiong",
    component:()=>import('../views/YingXiong'),
  },
  {
    path:"/xingxiu",
    name:"xingxiu",
    component:()=>import('../views/XingXiu'),
  },
  {
    path:"/all",
    name:"all",
    component:()=>import('../views/QuadraticElement/all'),
  },
  {
    path:"/appearance",
    name:"appearance",
    redirect:{path:"/appearance/all/1"},
    component:()=>import('../views/Appearance'),
    children:[
      {
        path:"all/:name",
        name:"all",
        component:()=>import('../views/Appearance/all.vue'),
        props:true
      }
    ]
  },
  {
    path:"/quadraticElement",
    name:"quadraticElement",
    redirect:{path:"/quadraticElement/all/1"},
    component:()=>import('../views/QuadraticElement'),
    children:[
      {
        path:"all/:name",
        name:"all",
        component:()=>import('../views/QuadraticElement/all.vue'),
        props:true
      }
    ]
  },
 {
    path:'/3203:id',
    name:'heping',
    component:()=> import('../views/qiangzhan/HePing')
  },
  {
    path:'/3204:id',
    name:'chuanyue',
    component:()=> import('../views/qiangzhan/ChuanYue')
  },
  {
    path:'/youxi',
    name:"MyYouxi",
    component:MyYouxi
  }
  
]

const router = new VueRouter({
  routes
})

export default router
