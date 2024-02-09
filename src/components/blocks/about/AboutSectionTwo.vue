<script>
import CardWhyWork from './CardWhyWork.vue';

export default {
	components: {
		CardWhyWork
	},

	props: {
		info: {
			type: Array
		}
	}
}
</script>

<template>
	<div class="about-two">
		
		<h2 class="about-two__title">Why work with us</h2>

		<div class="about-two__row">
			<CardWhyWork class="about-two__card"
					v-for="item in info" :key="item.id"
					:info="item"
			/>
		</div>

	</div>
</template>

<style lang="scss">
.about-two {
	&__title {
		margin-bottom: 63px;
		font-size: 25px;
		font-weight: 600;
		line-height: 180.5%;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		margin: 0 -21.5px;
	}
	&__card {
		padding: 0 21.5px;
		flex: 0 1 33.333%;
	}
}
</style>