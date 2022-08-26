import { createWebHistory, createRouter } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import AddRiskPage from "@/views/AddRiskPage.vue";
import EditRiskPage from "@/views/EditRiskPage.vue";
import ViewRiskPage from '@/views/ViewRiskPage.vue';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
    {
        path: "/add-new-risk",
        name: "AddRiskPage",
        component: AddRiskPage,
    },
	{
        path: "/edit-risk",
        name: "EditRiskPage",
        component: EditRiskPage,
    },
	{
        path: "/view-risk",
        name: "ViewRiskPage",
        component: ViewRiskPage,
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;