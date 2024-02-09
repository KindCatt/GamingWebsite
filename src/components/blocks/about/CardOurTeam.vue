<script>

export default {
	props: {
		team: {
			type: Object
		}
	}
}
</script>

<template>
	<div class="card">
		<div class="card__item">

			<MPicture class="card__image" :src="team.avatar" alt=""/>

			<p class="card__name">{{ team.name }}</p>

			<p class="card__position">{{ team.position }}</p>

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
		padding: 35px 10px;
		height: 100%;
		border-radius: 20px;
		background: #1C140F;
	}
	&__name {
		font-size: 19px;
		font-weight: 600;
		line-height: 202.5%;
	}
	&__position {
		color: #E8E8E8;
		font-weight: 300;
		line-height: 202.5%;
	}
}
</style>