<script>
import BlockTitleCenter from '@/components/blocks/BlockTitleCenter.vue';

export default {
	components: {
		BlockTitleCenter,
	}
}
</script>

<template>
	<div class="contact-one">

		<BlockTitleCenter class="contact-one__block">
			
			<template #home-link>Contact</template>

			<template #title>Lorem Ipsum is simply dummy text of the printing and.</template>

			<template #text>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</template>

			<template #ellipce>
				<span class="ellipce"></span>
			</template>
			
		</BlockTitleCenter>

		<!-- Компонент карты -->

		<!-- Компонент контактов -->

	</div>
</template>

<style lang="scss">
.ellipce {
	position: absolute;
	top: -3px;
	right: -126px;
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background-color: #F9D6FF;
}
</style>