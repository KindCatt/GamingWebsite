<template>
	<div class="item">

		<div class="item__body">
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
	&__body {
		margin-bottom: 46px;
	}
	&__title {
		margin-bottom: 43px;
		font-size: 30px;
		font-weight: 500;
	}
	&__content {
		font-size: 17px;
	}
}
</style>