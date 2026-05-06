import {
    createRouter,
    createWebHistory
} from "vue-router";

import MainLayout
    from "@/components/layout/MainLayout.vue";

import CreateAccountView
    from "@/views/CreateAccountView.vue";

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                path: "",
                component: CreateAccountView
            }
        ]
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});