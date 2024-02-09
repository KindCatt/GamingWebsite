<script>
import HomeSectionOne from "@/components/blocks/home/HomeSectionOne.vue"
import HomeSectionTwo from "@/components/blocks/home/HomeSectionTwo.vue"
import HomeSectionThree from "@/components/blocks/home/HomeSectionThree.vue"
import HomeSectionFour from "@/components/blocks/home/HomeSectionFour.vue"
import HomeSectionFive from "@/components/blocks/home/HomeSectionFive.vue"
import BlockSubscribe from "@/components/blocks/BlockSubscribe.vue"
import GameMobile from '@/components/icons/home/GameMobile.vue'
import GamePc from '@/components/icons/home/GamePc.vue'
import GamePs4 from '@/components/icons/home/GamePs4.vue'
import GameArVrSolutions from '@/components/icons/home/GameArVrSolutions.vue'
import GameArVrDesign from '@/components/icons/home/GameArVrDesign.vue'
import Game3dModeling from '@/components/icons/home/Game3dModeling.vue'

export default {
	name: 'HomeView',
	components: {
		HomeSectionOne,
		HomeSectionTwo,
		HomeSectionThree,
		HomeSectionFour,
		HomeSectionFive,
		BlockSubscribe,
	},

	data() {
		return {
			followers: [
				{
					id: 1,
					img: 'src/assets/images/Rectangle 23.png',
					qnt: 40
				},
				{
					id: 2,
					img: 'src/assets/images/Rectangle 24.png',
					qnt: 50
				},
				{
					id: 3,
					img: 'src/assets/images/Rectangle 25.png',
					qnt: 30
				},
				{
					id: 4,
					img: 'src/assets/images/Rectangle 26.png',
					qnt: 45
				}
			],
			devices: [
				{
					id: 1,
					svg: GameMobile,
					text: 'Mobile Game Development'
				},
				{
					id: 2,
					svg: GamePc,
					text: 'PC Game Development'
				},
				{
					id: 3,
					svg: GamePs4,
					text: 'PS4 Game Development'
				},
				{
					id: 4,
					svg: GameArVrSolutions,
					text: 'AR/VR Solutions'
				},
				{
					id: 5,
					svg: GameArVrDesign,
					text: 'AR/ VR design'
				},
				{
					id: 6,
					svg: Game3dModeling,
					text: '3D Modelings'
				}
			],
			lastprojects: [
				'src/assets/images/Rectangle 15.png',
				'src/assets/images/Rectangle 16.png',
				'src/assets/images/Rectangle 17.png',
				'src/assets/images/Rectangle 19.png',
				'src/assets/images/Rectangle 18.png',
				'src/assets/images/Rectangle 20.png',
			],
		}
	}
}
</script>

<template>
	<div class="home-view">

		<section class="home-view__one">
			<div class="container">
				<HomeSectionOne/>
			</div>
		</section>

		<section class="home-view__two">
			<div class="container">
				<HomeSectionTwo :followers="followers"/>
			</div>
		</section>

		<section class="home-view__three">
			<div class="container">
				<HomeSectionThree/>
			</div>
		</section>

		<section class="home-view__four">
			<HomeSectionFour :devices="devices"/>
		</section>

		<section class="home-view__five">
			<div class="container">
				<HomeSectionFive :lastprojects="lastprojects"/>
			</div>
		</section>

		<section class="home-view__subscribe">
			<div class="container">
				<BlockSubscribe/>
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

	&__one {
		padding-top: 116px;
	}
	&__two {
		padding-top: 178px;
	}
	&__three {
		padding-top: 129px;
	}
	&__four {
		padding-top: 157px;
	}
	&__five {
		padding-top: 141px;
	}
	&__subscribe {
		padding-top: 105px;
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