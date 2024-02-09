<script>
export default {
	data() {
		return {
			src: ''
		}
	}
}
</script>

<template>
	<div class="video">
		<video controls preload="metadata" poster="">
			<source :src="src">
			<source :src="src">
		</video>
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.video {
	position: relative;
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>