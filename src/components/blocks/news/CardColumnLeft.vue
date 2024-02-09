<script>
export default {
	props: {
		newsGame: {
			type: Object
		}
	}
}
</script>

<template>
	<div class="card">
		<div class="card__item">

			<MPicture class="card__image" :src="newsGame.img"/>
			
			<UButton class="card__btn-smash btn-smash">John smash</UButton>
			<span>.5min</span>
			
			<h2 class="card__title">{{ newsGame.title }}</h2>

			<div class="card__text">
				<p>{{ newsGame.text1 }}</p>
				<p>{{ newsGame.text2 }}</p>
			</div>
			
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	border-bottom: 0.7px solid #A5A5A5;

	&:last-child {
		border-bottom: none;
	}
	&__image {
		height: 295px;
		margin-bottom: 21px;
		overflow: hidden;
		border-radius: 20px;
	}
	&__btn-smash {
		margin-bottom: 21px;
		margin-right: 20px;
		background: #2351F5;
	}
	&__title {
		margin-bottom: 32px;
		font-size: 30px;
		font-weight: 600;
	}
	&__text {
		font-size: 17px;
		line-height: 207.8%;
		p {
			margin-bottom: 44px;
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>