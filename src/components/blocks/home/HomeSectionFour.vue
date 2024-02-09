<script>
import CardDevice from './CardDevice.vue'

export default {
	components: {
		CardDevice
	},

	props: {
		devices: {
			type: Array
		}
	}
}
</script>

<template>
	<div class="home-four">
		<div class="home-four__body">

			<div class="home-four__top">
				<h2 class="home-four__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
				<p class="home-four__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
			</div>

			<div class="home-four__bottom">
				<CardDevice class="home-four__card"
						v-for="item in devices" :key="item.id"
						:devices="item"
				>
					<component :is="item.svg"/>
				</CardDevice>
			</div>
		</div>

		<div class="home-four__background">
			<MPicture class="home-four__background-img" src="src/assets/images/db4d123c4b390965f684f22d4bf13849 1.png" alt=""/>
		</div>

	</div>
</template>

<style lang="scss">
.home-four {
	position: relative;
	overflow: hidden;

	&__body {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 93px 197px;
	}
	&__top {
		width: 820px;
		margin-bottom: 100px;
		text-align: center;
	}
	&__title {
		margin-bottom: 25px;
		font-size: 30px;
		font-weight: 700;
		line-height: 187.5%;
	}
	&__text {
		line-height: 187.5%;
	}
	&__bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 -50px;
		row-gap: 62px;
	}
	&__card {
		flex: 0 1 25%;
		padding: 0 50px;
	}
	&__background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -2;

		&-img {
			width: 100%;
			height: 100%;
		}
		
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 2;
			background: linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), rgba(0, 0, 0, 0.54);
			backdrop-filter: blur(2px);
		}
	}
}
</style>