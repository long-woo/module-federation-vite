import { createRouter, createWebHistory } from "vue-router";
import { loadRemote } from '@module-federation/enhanced/runtime'
import * as bridge from "@module-federation/bridge-vue3";

import HomeView from "../views/HomeView.vue";

const App1 = bridge.createRemoteComponent({
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	loader: () => loadRemote("app1/mod"),
});

const App2 = bridge.createRemoteComponent({
	loader: () => loadRemote("app2/mod"),
});

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/app1/:pathMatch(.*)*",
			name: "app1",
			component: App1,
		},
		{
			path: "/app2/:pathMatch(.*)*",
			name: "app2",
			component: App2,
		},
	],
});

export default router;
