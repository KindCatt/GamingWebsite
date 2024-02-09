<script>
import BlockLeft from "@/components/blocks/BlockLeft.vue"
import PointField from "@/components/icons/home/PointField.vue"

export default {
	components: {
		BlockLeft,
		PointField
	}
}
</script>

<template>
	<div class="home-three">
		<div class="home-three__title">
			<h2 class="home-three__title-text">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</h2>
		</div>

		<BlockLeft class="home-three__block">
			<template #title>Lorem Ipsum</template>
			<template #content>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
			</template>
			<PointField class="home-three__field"/>
			<MPicture class="home-three__image" src="src/assets/images/Rectangle 4.png"/>
		</BlockLeft>

	</div>
</template>

<style lang="scss">
.home-three {
	&__title {
		width: 826px;
		margin: 0 auto 65px;
	}
	&__title-text {
		text-align: center;
		font-size: 35px;
		font-weight: 600;
		line-height: 187.5%;
	}
	&__block {
		position: relative;
	}
	&__field {
		position: absolute;
		bottom: 375px;
		right: 125px;
		z-index: -1;
	}
	&__image {
		height: 462px;
		border-radius: 5px;
		overflow: hidden;
	}
}
</style>