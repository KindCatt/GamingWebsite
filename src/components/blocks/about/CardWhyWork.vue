<script>
export default {
	props: {
		info: {
			type: Object
		}
	}
}
</script>

<template>
		<div class="card">
			<div class="card__item">
				<p class="card__label">{{ info.label }}</p>
				<h3 class="card__title">{{ info.title }}</h3>
				<p class="card__text">{{ info.text }}</p>
			</div>
		</div>
</template>

<style lang="scss" scoped>
.card {
	&__item {
		padding: 64px 31px;
		height: 100%;
		border-radius: 20px;
		background: #1C140F;
	}
	&__label {
		display: inline-block;
		padding: 7px 25px;
		margin-bottom: 25px;
		border-radius: 8px;
		background: v-bind('info.color');
		font-size: 14px;
		line-height: 187.5%;
	}
	&__title {
		margin-bottom: 16px;
		font-size: 20px;
		font-weight: 600;
		line-height: 187.5%;
	}
	&__text {
		font-size: 14px;
		line-height: 187.5%;
	}
}
</style>