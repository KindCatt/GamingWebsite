<script>
	export default {
		props: {
			searchArticle: {
				type: Array
			}
		}
	}
</script>

<template>
	<div class="search-news">

		<div class="search-news__item"
				v-for="item in searchArticle" :key="item.id"
		>

			<MPicture class="search-news__image" :src="item.img"/>

			<h1 class="search-news__text">{{ item.title }}</h1>

		</div>

	</div>
</template>

<style lang="scss" scoped>
.search-news {
	width: 400px;
	min-height: 100px;
	max-height: 400px;
	margin-top: 2px;
	padding: 20px;
	overflow: auto;
	border-radius: 10px;
	background-color: #1C140F;

	&__item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		background-color: rgb(53, 49, 45)
	}
	&__image {
		margin-right: 10px;
		flex: 0 0 50px;
		height: 50px;
		overflow: hidden;
	}
	&__text {
		font-size: 18px;
	}
}
</style>