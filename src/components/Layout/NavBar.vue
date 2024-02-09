<script>
import NavbarLink from '@/components/icons/NavbarLink.vue';
import { RouterLink } from 'vue-router';

export default {
	components: {
		RouterLink,
		NavbarLink,
},

	data() {
		return {
			menu: [
				{path: '/', name: 'Home', isLineShow: false},
				{path: '/about', name: 'About us', isLineShow: false},
				{path: '/portfolio', name: 'Portfolio', isLineShow: false},
				{path: '/news', name: 'News', isLineShow: false}
			]
		}
	},

	methods: {
		activeLink(index) {
			this.menu = this.menu.map(item => ({ ...item, isLineShow: false}));
			this.menu[index].isLineShow = true
		}
	}
}
</script>

<template>
	<nav class="nav-bar">
		<div class="nav-bar__logo logo">

			<p class="logo__text">
				<slot name="logo"></slot>
			</p>

		</div>

		<div class="nav-bar__nav">

			<ul class="nav-bar__list">
				<li class="nav-bar__link" 
						v-for="(item, index) in menu" :key="index"
						@click="activeLink(index)"
				>
					<RouterLink :to="item.path">{{ item.name }}</RouterLink>
					<NavbarLink class="nav-bar__link-line"
							v-if="item.isLineShow"
					/>
				</li>
			</ul>

			<UButton 
					type="button" 
					class="nav-bar__btn btn-nav"
					@click="$router.push('/contact')"
			>
				Contact us
			</UButton>

		</div>
	</nav>
</template>

<style lang="scss" scoped>
.nav-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 130px;
	padding: 0 60px;
	background-color: transparent;

	&__logo {
		margin: -7px 0 0 -5px;
	}
	&__nav {
		display: flex;
		align-items: center;
	}
	&__list {
		display: flex;
		column-gap: 60px;
		margin-right: 22px;
	}
	&__link {
		position: relative;
		padding: 10px 14px;
		cursor: pointer;
	}
	&__link-line {
		position: absolute;
		left: 0;
		bottom: 0;
	}
}
</style>