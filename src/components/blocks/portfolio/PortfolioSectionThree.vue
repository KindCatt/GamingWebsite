<script>
import BlockLeftImage from '@/components/blocks/BlockLeftImage.vue';

export default {
	components: {
		BlockLeftImage
	},

	props: {
		description: {
			type: Array
		}
	}
}
</script>

<template>
	<div class="portfolio-three" v-for="(item, index) in description" :key="item.id">
		<div class="portfolio-three__row">

			<BlockLeftImage class="portfolio-three__block">

				<template #title>
					{{ item.title }}
				</template>

				<template #content>
					<p>{{ item.text1 }}</p>
					<p>{{ item.text2 }}</p>
				</template>

				<UButton class="portfolio-three__btn btn-more">Read more</UButton>
				
			</BlockLeftImage>

			<MPicture class="portfolio-three__image" :src="item.img"
					:style="index % 2 ? {order: '-1'} : {order: '0'}"
			/>
			
		</div>
	</div>
</template>

<style lang="scss">
.portfolio-three {
	margin-bottom: 189px;
	&:last-child {
		margin-bottom: 0;
	}
	&__row {
		display: flex;
		column-gap: 138px;
	}
	&__block {
		p:not(:last-child) {
			margin-bottom: 45px;
		}
	}
	&__image {
		flex: 1 0 496px;
		height: 489px;
	}
}
</style>