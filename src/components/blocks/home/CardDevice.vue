<script>
import OrangeArrow from '@/components/icons/home/OrangeArrow.vue'

export default {
	components: {
		OrangeArrow
	},

	props: {
		devices: {
			type: Object
		}
	},
}
</script>

<template>
	<div class="card">
		<div class="card__item">

			<div class="card__image">
				<slot></slot>
			</div>

			<p class="card__text">{{ devices.text }}</p>

			<div class="card__arrow">
				<OrangeArrow/>
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
		display: flex;
		justify-content: center;
		align-items: center;
		width: 65px;
		height: 65px;
		margin-bottom: 30px;
		border-radius: 50%;
		background-color: #ffffff;
	}
	&__text {
		margin-bottom: 24px;
		text-align: center;
		font-weight: 500;
		line-height: 187.5%;
	}
}
</style>