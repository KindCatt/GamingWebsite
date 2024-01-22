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
		<NavBar class="app__nav"/>

		<RouterView class="app__router"/>

		<FooterView class="app__footer"/>
	</div>
</template>

<style lang="scss">
.app {
	display:flex;
	flex-direction:column;
	min-height: 100vh;

	&__router {
		flex: 1 1 auto;
	}
}
</style>
