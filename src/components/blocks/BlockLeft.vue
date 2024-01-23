<template>
	<div class="item">

		<div class="item__text">
			<h2 class="item__title">
				<slot name="title"></slot>
			</h2>

			<p class="item__content">
				<slot name="content"></slot>
			</p>
		</div>

		<div class="item__bottom">
			<slot></slot>
		</div>

	</div>
</template>

<style lang="scss" scoped>
.item {
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	&__text {
		flex: 0 1 50%;
	}
	&__title {
		font-size: 30px;
		font-weight: 600;
		line-height: 187.5%;
		margin-bottom: 15px;
	}
	&__content {
		margin-bottom: 70px;
		line-height: 187.5%;
	}
	&__bottom {
		flex: 1 1 100%;
	}
}
</style>