import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '../../components/AboutMe'
import myStore from '../../components/myStore'
import moreAbout from '../../../src/components/moreAbout'
    
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name:'mystore',
        path: '/myStore',
        component: myStore
    },
        {name:'aboutme',
        path: '/aboutme',
        component: AboutMe
        },
        {
            name:'moreAbout',
        path: '/myStore/:id',
        component: moreAbout
    },
    ]
})