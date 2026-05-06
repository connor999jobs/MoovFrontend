import {
    createRouter,
    createWebHistory
} from "vue-router";

import MainLayout
    from "@/components/layout/MainLayout.vue";

import CreateAccountView
    from "@/views/CreateAccountView.vue";

import AccountsView
    from "@/views/AccountsView.vue";

import AccountView
    from "@/views/AccountView.vue";

const routes = [

    {
        path: "/",

        component:
        MainLayout,

        children: [

            {
                path: "",

                redirect:
                    "/create-account"
            },

            {
                path: "create-account",

                component:
                CreateAccountView
            },

            {
                path: "accounts",

                component:
                AccountsView
            },

            {
                path: "accounts/:id",

                component:
                AccountView
            }
        ]
    }
];

export default createRouter({

    history:
        createWebHistory(),

    routes
});