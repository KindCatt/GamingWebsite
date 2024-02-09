<script>
import FireFollowers from '@/components/icons/home/FireFollowers.vue'

export default {
	components: {
		FireFollowers,
	},

	props: {
		followers: {
			type: Object,
		}
	}
}
</script>

<template>
	<div class="card">
		<div class="card__item">

			<MPicture class="card__image" :src="followers.img" alt=""/>

			<div class="card__followers">
				<FireFollowers/>
				<span>{{ followers.qnt }} Followers</span>
			</div>

		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	&__item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	&__image {
		height: 277px;
		margin-bottom: 25px;
		border-radius: 20px;
		overflow: hidden;
	}
	&__followers {
		font-family: 'Rubik', sans-serif;
		font-size: 22px;
		font-weight: 500;
		line-height: 187.5%;

		span {
			margin-left: 9px;
		}
	}
}
</style>