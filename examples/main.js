/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import VIcon from '../dist/vicon.min.js';

Vue.use(VueRouter);
Vue.use(VIcon);
Vue.prototype.ICONCLASS = 'iconfont';
// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    esModule: false,
    mode: 'history',
    routes: [
        {
            path: '/',
            component: (resolve) => require(['./routers/icon.vue'], resolve)
        },
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
