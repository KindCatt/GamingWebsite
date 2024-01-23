<template>
	<div class="footer-item">

		<h5 class="footer-item__header">
			<slot name="title"></slot>
		</h5>

		<p class="footer-item__content">
			<slot name="info"></slot>
		</p>

		<div class="footer-item__footer">
			<slot></slot>
		</div>

		<div class="footer-item__icon">
			<slot name="icon"></slot>
		</div>
		
	</div>
</template>

<style lang="scss" scoped>
.footer-item {
	display: flex;
	flex-direction: column;
	height: 90%;
	&__header {
		margin-bottom: 15px;
	}
	&__content {
		flex: 1 1 auto;
	}
}
</style>