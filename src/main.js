import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from "vue-router"
import HomeView from './Views/HomeView.vue'
import DetailView from './Views/DetailView.vue'

// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'

const routes= [
        {path:'/',name:'home',component: HomeView},
        {path:'/details',name:'details',component: DetailView}
]


const router= createRouter({
    history:createWebHashHistory(),
    routes
})
.use(router)
createApp(App).mount('#app')