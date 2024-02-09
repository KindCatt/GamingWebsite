import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'about-us',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/AboutUsView.vue')
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: () => import('@/views/PortfolioView.vue')
		},
		{
			path: '/news',
			name: 'news',
			component: () => import('@/views/NewsView.vue')
		},
		{
			path: '/news/:id',
			name: 'article',
			component: () => import('@/views/NewsArticle.vue')
		},
		{
			path: '/contact',
			name: 'contact-us',
			component: () => import('@/views/ContactUsView.vue')
		},
	]
})

export default router
