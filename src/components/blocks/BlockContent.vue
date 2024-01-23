<template>
	<div class="item">

		<div class="item__title">
			<slot name="title"></slot>
		</div>

		<p class="item__content">
			<slot name="content"></slot>
		</p>

		<div class="item__bottom">
			<slot></slot>
		</div>

	</div>
</template>

<style lang="scss" scoped>
.item {
	display: flex;
	flex-direction: column;
	height: 100%;
}
</style>