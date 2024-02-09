<template>
	<div class="item">

		<div class="item__home-link">
			<RouterLink to="/">Home > </RouterLink>
			<span><slot name="home-link"></slot></span>
		</div>

		<div class="item__title-ellipce">
			<h1 class="item__title">
				<slot name="title"></slot>
			</h1>
			<div class="item__ellipce">
				<slot name="ellipce"></slot>
			</div>
		</div>

		<p class="item__text">
			<slot name="text"></slot>
		</p>

	</div>
</template>

<style lang="scss" scoped>
.item {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__home-link {
		margin-bottom: 15px;
		line-height: 208.5%;

		a {
			color: #fff;
		}
		span {
			color: #E47500;
		}
	}
	&__title-ellipce {
		position: relative;
	}
	&__title {
		margin-bottom: 13px;
		font-size: 33px;
		font-weight: 600;
		line-height: 180.5%;
	}
	&__text {
		font-weight: 500;
		line-height: 187.5%;
	}
}
</style>