<script>
import ArrowRightWhite from '@/components/icons/about/ArrowRightWhite.vue'
import SliderSectionOne from './SliderSectionOne.vue'

export default {
	components: {
		ArrowRightWhite,
		SliderSectionOne
	}
}
</script>

<template>
	<div class="about-one">

		<div class="about-one__body">
			<div class="about-one__home-link">
				<RouterLink to="/">Home > </RouterLink>
				<span>About us</span>
			</div>
			<h1 class="about-one__title">Lorem Ipsum is simply dummy text of the printing and.</h1>
			<p class="about-one__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			<UButton class="about-one__btn btn-get">
				Get in touch
				<ArrowRightWhite style="margin-left: 18px;"/>
			</UButton>
		</div>

		<div class="about-one__slider">
			<SliderSectionOne/>
		</div>

	</div>
</template>

<style lang="scss">

.about-one {
	position: relative;
	display: flex;
	justify-content: space-between;

	&__body {
		flex: 0 0 35%;
	}
	&__home-link {
		margin-bottom: 38px;
		font-size: 12px;
		line-height: 208.5%;
		
		a {
			color: #fff;
		}
		span {
			color: #E47500;
		}
	}
	&__title {
		margin-bottom: 25px;
		font-size: 30px;
		font-weight: 700;
		line-height: 180.5%;
	}
	&__text {
		margin-bottom: 57px;
		font-size: 15px;
		line-height: 208.5%;
	}
	&__slider {
		position: absolute;
		top: -93px;
		right: -110px;
		flex: 0 0 50%;
	}
}
</style>