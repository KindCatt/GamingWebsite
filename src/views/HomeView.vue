<script>
import BlockLeft from "@/components/blocks/BlockLeft.vue"
import SubscribeForm from "@/components/forms/SubscribeForm.vue"

export default {
	name: 'HomeView',
	components: {
		SubscribeForm,
		BlockLeft
	},

	data() {
		return {
			img: ''
		}
	}
}
</script>

<template>
	
	<div class="home-view">

		<!-- Заголовок и описание страницы -->
		<section style="font-size: 30px;">HomeView</section>
		<!-- / Заголовок и описание страницы -->


		<section class="home-view__three home-three">
			<div class="container">
				<div class="home-three__title">
					<h2 class="home-three__title-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</h2>
				</div>
				<BlockLeft>
					<template #title>Lorem Ipsum</template>
					<template #content>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					</template>
					<div class="home-three__image">
						<img src="@/assets/images/Rectangle 4.png" alt="Что-то пошло не так">
					</div>
				</BlockLeft>
			</div>
		</section>

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

		<div class="home-background"></div>
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

.home-three {
	&__title {
		width: 826px;
		margin: 0 auto 65px;
	}
	&__title-text {
		text-align: center;
		font-size: 35px;
		font-weight: 600;
		line-height: 187.5%;
	}
	&__image {
		height: 462px;
		// background: rgba(0, 0, 0, 0.3) url('@/assets/images/Rectangle 4.png') center/cover no-repeat;
		& img {
			object-fit: cover;
			height: 100%;
			width: 100%;

		}
	}
}

.home-background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -10;
	background: linear-gradient(181deg, #39289F 0.82%, #422F9C 129.1%);
	backdrop-filter: blur(7px);
}
</style>