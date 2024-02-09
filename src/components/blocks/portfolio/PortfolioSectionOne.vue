<script>
import BlockTitleCenter from '@/components/blocks/BlockTitleCenter.vue';
import QuantityStat from './QuantityStat.vue';

export default {
	components: {
		BlockTitleCenter,
		QuantityStat
	}
}
</script>

<template>
	<div class="portfolio-one">

		<BlockTitleCenter class="portfolio-one__block">
			
			<template #home-link>Portfolio</template>
			<template #title>Lorem Ipsum is simply dummy text of the printing and.</template>
			<template #text>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</template>

		</BlockTitleCenter>

		<QuantityStat class="portfolio-one__qnt"/>

	</div>
</template>

<style lang="scss">
.portfolio-one {
	&__block {
		margin-bottom: 45px;
	}
	&__qnt {
		margin: 0 130px 0 170px ;
	}
}
</style>