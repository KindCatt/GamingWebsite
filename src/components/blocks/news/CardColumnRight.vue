<script>
export default {
	props: {
		news: {
			type: Object
		}
	}
}
</script>

<template>
	<div class="card">
		<RouterLink :to="{path: `/news/${news.id}`}">
			<div class="card__item">

				<MPicture class="card__image" :src="news.img"/>

				<div class="card__body">

					<UButton class="card__btn-smash btn-smash-min" :style="{background: news.background}">
						John smash
					</UButton>
					<span>.5min</span>

					<h2 class="card__title">{{ news.title }}</h2>

				</div>

			</div>
		</RouterLink>
	</div>
</template>

<style lang="scss" scoped>
.card {
	&__item {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	&__image {
		margin-right: 31px;
		flex: 0 0 195px;
		height: 183px;
		overflow: hidden;
		border-radius: 20px;
	}
	&__body {
		flex: 1 1 auto;
	}
	&__btn-smash {
		margin-bottom: 23px;
		margin-right: 16px;
		font-size: 14px;
		line-height: 187.5%;
	}
	&__title {
		font-size: 23px;
		font-weight: 600;
	}
}
</style>