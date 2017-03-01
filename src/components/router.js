import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);
let routes = [
    {
        path: '/',
        component: require('./LoginForm.vue')
    },
    {
        path: '/admin-page',
        component: require('./AdminPage.vue')
    }
];

export default new VueRouter({
    routes,
    LinkActiveClass: 'active'
})
