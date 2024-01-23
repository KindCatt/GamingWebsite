<script>
import SubscribeForm from "@/components/forms/SubscribeForm.vue"

export default {
	name: 'HomeView',
	components: {
		SubscribeForm
	},

	data() {
		return {}
	}
}
</script>

<template>
	<div class="home-view">
		<!-- Заголовок и описание страницы -->
		<div class="home-view__body" style="font-size: 30px;">HomeView</div>
		<!-- / Заголовок и описание страницы -->
		<div class="home-view__subscribe">
			<div class="container">
				<SubscribeForm></SubscribeForm>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.container {
	margin: 0 135px;
}
.home-view {
	display: flex;
	flex-direction: column;
	
	background: linear-gradient(181deg, #39289F 0.82%, #422F9C 129.1%);
	backdrop-filter: blur(7px);

	&__body {
		flex: 1 1 auto;
	}
}

</style>