<script>
import NewsSectionOne from "@/components/blocks/news/NewsSectionOne.vue"
import NewsSectionTwo from "@/components/blocks/news/NewsSectionTwo.vue"
import BlockSubscribe from "@/components/blocks/BlockSubscribe.vue"

export default {
	name: 'NewsView',
	components: {
		NewsSectionOne,
		NewsSectionTwo,
		BlockSubscribe
	},

	data() {
		return {
			newsGame: [
				{
					id: 1,
					img: 'src/assets/images/Rectangle 24.png',
					title: 'Lorem Ipsum is simply dummy text dummy text',
					text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
					text2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
				},
				{
					id: 2,
					img: 'src/assets/images/Rectangle 26.png',
					title: 'Lorem Ipsum is simply dummy text dummy text',
					text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
					text2: ''
				}
			],
			news: [
				{
					id: 1,
					title: 'Lorem Ipsum is simply dummy text dummy text ?',
					img: 'src/assets/images/news/1.png',
				},
				{
					id: 2,
					title: 'Lorem is simply dummy text dummy text ?',
					img: 'src/assets/images/news/2.png',
				},
				{
					id: 3,
					title: 'Lorem Ipsum is dummy text dummy text ?',
					img: 'src/assets/images/news/3.png',
				},
				{
					id: 4,
					title: 'Is simply dummy text ?',
					img: 'src/assets/images/news/4.png',
				},
				{
					id: 5,
					title: 'Lorem dummy text dummy text ?',
					img: 'src/assets/images/news/5.png',
				},
				{
					id: 6,
					title: 'Lorem Ipsum is simply dummy text ?',
					img: 'src/assets/images/news/6.png',
				},
				{
					id: 7,
					title: 'Ipsum is simply dummy text dummy text ?',
					img: 'src/assets/images/news/7.png',
				}
			]
		}
	},

	mounted() {
		// Случайный цвет фона, вложенный в массив news
		const rand = () => Math.round(Math.random() * 255)
		return (this.news = this.news.map(item => (
			{ ...item, background: `rgb(${rand()}, ${rand()}, ${rand()})` }
		)))
		// Случайный цвет фона, вложенный в массив news
	}
}
</script>

<template>
	<div class="news-view">

		<section class="news-view__one">
			<div class="container">
				<NewsSectionOne
						:news="news"
				/>
			</div>
		</section>

		<section class="news-view__two">
			<NewsSectionTwo
					:newsGame="newsGame"
					:news="news"
			/>
		</section>

		<section class="news-view__subscribe">
			<div class="container">
				<BlockSubscribe/>
			</div>
		</section>

		<div class="news-background"></div>
	</div>
</template>

<style lang="scss">
.container {
	margin: 0 109px;
}

.news-view {
	display: flex;
	flex-direction: column;
	padding: 105px 0 165px 0;

	&__one {
		padding-top: 109px;
	}
	&__two {
		padding-top: 103px;
	}
	&__subscribe {
		margin-right: 52px;
		padding-top: 73px;
	}
}

.news-background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -10;
	background: linear-gradient(176deg, #3165CB -34.57%, #030115 96.75%);
}
</style>