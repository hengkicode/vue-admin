import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/components/Template'
import ElementTable from '@/components/ElementTable'
import DetailInfo from '@/components/DetailInfo'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Template
        },
        {
            path: '/user',
            name: 'User',
            component: ElementTable,
        },
        {
            path: '/userInfo/:id',
            name: 'HalamanDetail',
            component: DetailInfo
        },
        {
            path: '/psd',
            name: 'Password',
            component: Template
        },
        {
            path: '/salary',
            name: 'Gaji',
            component: Template
        },
        {
            path: '/attendence',
            name: 'Kehadiran',
            component: Template
        },
        {
            path: '/perform',
            name: 'Kinerja',
            component: Template
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Template
        },
        {
            path: '/feedback',
            name: 'UmpanBalik',
            component: Template
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})