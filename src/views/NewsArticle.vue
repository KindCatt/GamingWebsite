<script>
	export default {
		data() {
			return {
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
			],
				article: '',
			}
		},

		mounted() {
			const article = this.news.find(item => item.id == this.$route.params.id)
			if (article) {
				this.article = article
			}
		}
	}
</script>

<template>
	<div class="news-article">
		<div class="container">
			<h1>Статья ID = {{ $route.params.id }}</h1>
		
			<div class="news-article__item">
				<h1 class="news-article__title">{{ article.title }}</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et voluptatibus quibusdam impedit hic aspernatur officia saepe nemo perspiciatis. Nihil est corporis, dolorem exercitationem commodi cum possimus hic nemo a?</p>
				<MPicture class="news-article__image" :src="article.img"/>
			</div>
			
		</div>

		<div class="news-article-background"></div>
	</div>
</template>

<style lang="scss">
.container {
	margin: 0 109px;
}

.news-article {
	&__item {
		display: flex;
		flex-direction: column;
		padding: 105px 0 165px 0;
	}
	&__title {
		font-size: 24px;
	}
	&__image {
		width: 100%;
		height: 500px;
		overflow: hidden;
		border-radius: 20px;
	}
}

.news-article-background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -10;
	background: linear-gradient(176deg, #3165CB -34.57%, #030115 96.75%);
}
</style>