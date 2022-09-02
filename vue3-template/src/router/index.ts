/**
 * createRouter 这个为创建路由的方法
 * createWebHashHistory 这个就是vue2中路由的模式，
 *                      这里的是hash模式，这个还可以是createWebHistory等
 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const adminRouterChildren = [
    {
        path: '/admin/home',
        name: 'home111',
        component: () => import("@/views/admin/views/home/index.vue"),
        icon: 'jiaozi',
        meta: {
            title: '首页',
            showInMenu: false
        }
    },
    {
        path: '/admin/iconfont',
        name: 'iconfont',
        component: () => import("@/views/admin/views/iconfont/index.vue"),
        icon: 'xuegao',
        meta: {
            title: '图标'
        }
    },
    {
        path: '/admin/mockTable',
        name: 'mockTable',
        component: () => import("@/views/admin/views/mockTable/index.vue"),
        icon: 'kele',
        meta: {
            title: '虚拟表格'
        }
    },
    {
        path: '/admin/canvas',
        name: 'canvas',
        component: () => import("@/views/admin/views/canvas/index.vue"),
        icon: 'kafei',
        meta: {
            title: 'canvas'
        }
    },
    {
        path: '/admin/worker',
        name: 'worker',
        component: () => import("@/views/admin/views/worker/index.vue"),
        icon: 'tilamisu',
        meta: {
            title: 'worker'
        }
    },
    {
        path: '/admin/fabric',
        name: 'fabric',
        component: () => import("@/views/admin/views/fabric/index.vue"),
        icon: 'chengzhi',
        meta: {
            title: 'fabric'
        }
    },
    {
        path: '/admin/directive',
        name: 'directive',
        component: () => import("@/views/admin/views/directive/index.vue"),
        icon: 'doujiang',
        meta: {
            title: 'directive'
        }
    },
    {
        path: '/admin/cc-scroll',
        name: 'cc-scroll',
        component: () => import("@/views/admin/views/cc-scroll/index.vue"),
        icon: 'hebaodan',
        meta: {
            title: 'cc-scroll'
        }
    },
    {
        path: '/admin/testApi',
        name: 'testApi',
        component: () => import("@/views/admin/views/testApi/index.vue"),
        icon: 'zhouzi',
        meta: {
            title: 'testApi'
        }
    },
    {
        path: '/admin/cp',
        name: 'cp',
        component: () => import("@/views/admin/views/cp/index.vue"),
        icon: 'zhouzi',
        meta: {
            title: 'cp'
        }
    }
]
// 路由记录，这个跟vue2中用法一致，就不做过多解释了
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/home/index.vue"),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/home',
        component: () => import("@/views/admin/index.vue"),
        meta: {
            title: 'admin页面'
        },
        children: adminRouterChildren
    },
    {
        path: '/game',
        name: 'game',
        component: () => import("@/game/index.vue"),
        meta: {
            title: '游戏'
        }
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
