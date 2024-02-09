<script>
export default {
	props: {
		src: String
	}
}
</script>

<template>
	<div class="image">
		<img :src="src" alt="">
	</div>
</template>

<style lang="scss" scoped>
.image {
	position: relative;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>