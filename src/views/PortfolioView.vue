<script>
import PortfolioSectionOne from "@/components/blocks/portfolio/PortfolioSectionOne.vue"
import PortfolioSectionTwo from "@/components/blocks/portfolio/PortfolioSectionTwo.vue"
import PortfolioSectionThree from "@/components/blocks/portfolio/PortfolioSectionThree.vue"
import PortfolioSectionFour from "@/components/blocks/portfolio/PortfolioSectionFour.vue"
import BlockSubscribe from "@/components/blocks/BlockSubscribe.vue"

export default {
	name: 'PortfolioView',
	components: {
		PortfolioSectionOne,
		PortfolioSectionTwo,
		PortfolioSectionThree,
		PortfolioSectionFour,
		BlockSubscribe
	},

	data() {
		return {
			description: [
				{
					id: 1,
					img: 'src/assets/images/Rectangle 26.png',
					title: 'Lorem Ipsum is simply dummy text dummy text',
					text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
					text2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				},
				{
					id: 2,
					img: 'src/assets/images/Rectangle 24.png',
					title: 'Lorem Ipsum is simply dummy text dummy text',
					text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
					text2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				},
				{
					id: 3,
					img: 'src/assets/images/Rectangle 25.png',
					title: 'Lorem Ipsum is simply dummy text dummy text',
					text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
					text2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				}
			],
			responses: [
				{
					id: 1,
					photo: 'src/assets/images/photo/ViezhRobert.png',
					name: 'Viezh Robert',
					city: 'Warsaw',
					country: 'Poland',
					feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
					rating: 4.0
				},
				{
					id: 2,
					photo: 'src/assets/images/photo/YessicaChristy.png',
					name: 'Yessica Christy',
					city: 'Shanxi',
					country: 'China',
					feedback: "Lorem Ipsum is simply dummy text of the printing and",
					rating: 5.0
				},
				{
					id: 3,
					photo: 'src/assets/images/photo/KimYoungJou.png',
					name: 'Viezh Robert',
					city: 'Seoul',
					country: 'South Korea',
					feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
					rating: 4.5
				},
			]
		}
	}
}
</script>

<template>
	<div class="portfolio-view">

		<section class="portfolio-view__one">
			<PortfolioSectionOne/>
		</section>

		<section class="portfolio-view__two">
			<div class="container">
				<PortfolioSectionTwo/>
			</div>
		</section>

		<section class="portfolio-view__three">
			<div class="container">
				<PortfolioSectionThree :description="description"/>
			</div>
		</section>

		<section class="portfolio-view__four">
			<PortfolioSectionFour :responses="responses"/>
		</section>
		
		<section class="portfolio-view__subscribe">
			<div class="container">
				<BlockSubscribe/>
			</div>
		</section>

		<div class="portfolio-background"></div>
	</div>
</template>

<style lang="scss">
.container {
	margin: 0 161px 0 109px;
}

.portfolio-view {
	display: flex;
	flex-direction: column;
	padding: 105px 0 165px 0;

	&__one {
		padding-top: 109px;
	}
	&__two {
		padding-top: 132px;
	}
	&__three {
		padding-top: 182px;
	}
	&__four {
		padding-top: 168px;
	}
	&__subscribe {
		padding-top: 127px;
	}
}

.portfolio-background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -10;
	background: linear-gradient(177deg, #3A299F -30.15%, #05119D 24.94%, #2351F5 92.85%);
}
</style>