<template>
	<div class="footer-item">

		<h5 class="footer-item__header logo">
			<slot name="title"></slot>
		</h5>

		<p class="footer-item__content">
			<slot name="info"></slot>
		</p>

		<div class="footer-item__footer">
			<slot></slot>
		</div>

	</div>
</template>

<style lang="sass" scoped>

</style>