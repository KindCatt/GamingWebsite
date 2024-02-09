<script>
import StarRating from '@/components/icons/portfolio/StarRating.vue';

export default {
	components: {
		StarRating
	},
	
	props: {
		response: {
			type: Object
		}
	}
}
</script>

<template>
	<div class="slide">
		<div class="slide__item">
			
			<div class="slide__top">

				<MPicture class="slide__photo" :src="response.photo"/>

				<div class="slide__description">
					<p class="slide__name">{{ response.name }}</p>
					<p class="slide__location">
						<span>{{ response.city }}, </span>
						<span>{{ response.country }}</span>
					</p>
				</div>

				<div class="slide__rating">
					<p class="slide__number">{{ response.rating }}</p>
					<StarRating class="slide__star"/>
				</div>
				
			</div>

			<div class="slide__bottom">
				<p class="slide__text">{{ response.feedback }}</p>
			</div>

		</div>
	</div>
</template>

<style lang="scss" scoped>
.slide {
	&__item {
		min-height: 100%;
		padding: 30px;
		border-radius: 10px;
		border: 2px solid #DDD;
	}
	&__top {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		column-gap: 20px;
		font-family: 'Rubik', sans-serif;
	}
	&__photo {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
	}
	&__description {
		flex: 1 1 auto;
	}
	&__name {
		margin-bottom: 5px;
		font-size: 18px;
		font-weight: 500;
	}
	&__location {
		color: #4F5665;
		font-size: 14px;
	}
	&__rating {
		display: flex;
		align-items: center;
		font-size: 16px;
	}
	&__number {
		margin-right: 10px;
	}
	&__text {
		font-size: 14px;
		line-height: 187.5%;
	}
}
</style>