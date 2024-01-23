<script>
import BlockLeft from "@/components/blocks/BlockLeft.vue"
import SubscribeForm from "@/components/forms/SubscribeForm.vue"

export default {
	name: 'ServicesView',
	components: {
		SubscribeForm,
		BlockLeft
	},

	data() {
		return {}
	}
}
</script>

<template>
	<div class="services-view">

		<!-- Заголовок и описание страницы -->
		<div style="font-size: 30px;">ServicesView</div>
		<!-- / Заголовок и описание страницы -->

		<section class="home-view__subscribe home-subscribe">
			<div class="container">
				<BlockLeft>
					<template #title>Lorem Ipsum</template>
					<template #content>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</template>
					<SubscribeForm></SubscribeForm>
				</BlockLeft>
			</div>
		</section>

		<div class="services-background"></div>
	</div>
</template>

<style lang="scss">
.container {
	margin: 0 135px;
}

.home-view {
	display: flex;
	flex-direction: column;
	padding: 105px 0 165px 0;

	&__three {
		padding-top: 130px;
	}
	&__subscribe {
		padding-top: 105px;
	}
}

.services-background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -10;
	background: linear-gradient(177deg, #3A299F -30.15%, #05119D 24.94%, #2351F5 92.85%);
}
</style>