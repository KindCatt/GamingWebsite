<script>
import AboutSectionOne from "@/components/blocks/about/AboutSectionOne.vue"
import AboutSectionTwo from "@/components/blocks/about/AboutSectionTwo.vue"
import AboutSectionThree from "@/components/blocks/about/AboutSectionThree.vue"
import AboutSectionFour from "@/components/blocks/about/AboutSectionFour.vue"
import BlockSubscribe from "@/components/blocks/BlockSubscribe.vue"

export default {
	name: 'AboutUsView',
	components: {
		AboutSectionOne,
		AboutSectionTwo,
		AboutSectionThree,
		AboutSectionFour,
		BlockSubscribe
	},

	data() {
		return {
			info: [
				{
					id: 1,
					color: 'rgba(176, 0, 220, 0.11)',
					label: 'Lorem ipsum',
					title: 'Lorem Ipsum 1',
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					id: 2,
					color: 'rgba(220, 66, 0, 0.11)',
					label: 'Lorem ipsum',
					title: 'Lorem Ipsum 2',
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				},
				{
					id: 3,
					color: 'rgba(0, 220, 141, 0.11)',
					label: 'Lorem ipsum',
					title: 'Lorem Ipsum 3',
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
				},
			],
			team: [
				{
					id: 1,
					avatar: 'src/assets/images/Avatar/Bill 1.png',
					name: 'John Peter',
					position: 'COO'
				},
				{
					id: 2,
					avatar: 'src/assets/images/Avatar/Beverly 1.png',
					name: 'Julie Peter',
					position: 'COO'
				},
				{
					id: 3,
					avatar: 'src/assets/images/Avatar/Claudia 1.png',
					name: 'Jane Peter',
					position: 'COO'
				},
				{
					id: 4,
					avatar: 'src/assets/images/Avatar/Avatar 1.png',
					name: 'Jonathan Peter',
					position: 'COO'
				},
			]
		}
	}
}
</script>

<template>
	<div class="about-view">

		<section class="about-view__one">
			<div class="container">
				<AboutSectionOne/>
			</div>
		</section>

		<section class="about-view__two">
			<div class="container">
				<AboutSectionTwo :info="info"/>
			</div>
		</section>

		<section class="about-view__three">
			<AboutSectionThree/>
		</section>

		<section class="about-view__four">
			<div class="container">
				<AboutSectionFour :team="team"/>
			</div>
		</section>

		<section class="about-view__subscribe">
			<div class="container">
				<BlockSubscribe/>
			</div>
		</section>
		
		<div class="about-background"></div>
	</div>
</template>

<style lang="scss">
.container {
	margin: 0 110px;
}

.about-view {
	display: flex;
	flex-direction: column;
	padding: 105px 0 165px 0;

	&__one {
		padding-top: 127px;
	}
	&__two {
		padding-top: 257px;
	}
	&__three {
		padding-top: 147px;
	}
	&__four {
		padding-top: 148px;
	}
	&__subscribe {
		padding-top: 157px;
	}
}

.about-background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -10;
	background: linear-gradient(180deg, #3B2A9F 33.88%, rgba(47, 69, 182, 0.44) 81.32%, rgba(114, 138, 185, 0.23) 99.57%);
}
</style>