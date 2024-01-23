<script>
import NavBar from "@/components/Layout/NavBar.vue";
import FooterView from "@/components/Layout/FooterView.vue";

export default {
	name: 'App',
	components: {
		NavBar,
		FooterView
	}
}
</script>

<template>
	<div class="app">
		<NavBar class="app__nav">
			<template #logo>LOGO</template>
		</NavBar>

		<RouterView class="app__router"/>

		<FooterView class="app__footer"/>
	</div>
</template>

<style lang="scss">
.app {
	position: relative;

	display:flex;
	flex-direction:column;
	min-height: 100vh;

	&__nav {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}
	&__router {
		flex: 1 1 auto;
		padding-top: 130px;
	}
}
</style>
