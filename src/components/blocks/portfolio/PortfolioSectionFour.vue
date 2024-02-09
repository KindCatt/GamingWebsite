<script>
import CardSlider from './CardSlider.vue';

export default {
	components: {
		CardSlider
	},

	props: {
		responses: {
			type: Array
		}
	}
}
</script>

<template>
	<div class="portfolio-four">

		<div class="portfolio-four__top">
			<h2 class="portfolio-four__title">Trusted by Thousands of Happy Customer</h2>
			<p class="portfolio-four__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
		</div>

		<div class="portfolio-four__bottom">
			<div class="portfolio-four__slider slider">
				<CardSlider class="slider__card"
						v-for="item in responses" :key="item.id"
						:response="item"
				/>
			</div>
		</div>

	</div>
</template>

<style lang="scss">
.portfolio-four {
	padding: 88px 31px 60px 109px;
	background: #1C140F;
	
	&__top {
		margin-bottom: 68px;
		text-align: center;
	}
	&__title {
		margin-bottom: 20px;
		font-family: 'Rubik', sans-serif;
		font-size: 35px;
		font-weight: 500;
		line-height: 50px;
	}
	&__text {
		font-size: 14px;
		line-height: 187.5%;
	}
}

.slider {
	display: flex;
	column-gap: 50px;
	
	&__card {
		flex: 0 0 400px;
	}
}

</style>