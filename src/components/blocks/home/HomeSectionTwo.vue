<script>
import CardFollowers from './CardFollowers.vue'

export default {
	components: {
		CardFollowers
	},

	props: {
		followers: {
			type: Array
		}
	}
}
</script>

<template>
	<div class="home-two">

		<div class="home-two__top">
			<h2 class="home-two__title">Currently Trending Games</h2>
			<UButton class="home-two__btn btn-see">SEE ALL</UButton>
		</div>

		<div class="home-two__bottom">
			<CardFollowers class="home-two__card"
					v-for="item in followers" :key="item.id"
					:followers="item"
			/>
		</div>

	</div>
</template>

<style lang="scss">
.home-two {
	&__top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 57px;
	}
	&__title {
		font-family: 'Rubik', sans-serif;
		font-size: 31px;
		font-weight: 700;
		line-height: 187.5%;
	}
	&__bottom {
		display: flex;
		justify-content: space-between;
		margin: 0 -23px;
	}
	&__card {
		flex: 0 1 25%;
		padding: 0 23px;
	}
}
</style>