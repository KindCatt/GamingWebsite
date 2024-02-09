<script>
import ColumnLeft from './ColumnLeft.vue';
import ColumnRight from './ColumnRight.vue';

export default {
	components: {
		ColumnLeft,
		ColumnRight,
	},

	props: {
		newsGame: {
			type: Array
		},
		news: {
			type: Array
		}
	}
}
</script>

<template>
	<div class="news-two">
		<div class="news-two__row">

			<div class="news-two__column">
				<ColumnLeft class="news-two__column-left"
						:newsGame="newsGame"
				/>
			</div>

			<div class="news-two__column">
				<ColumnRight class="news-two__column-right"
						:news="news"
				/>
			</div>

		</div>
	</div>
</template>

<style lang="scss">
.news-two {
	margin: 0 53px 0 109px;
	&__row {
		display: flex;
		justify-content: space-between;
		column-gap: 72px;
	}
	&__column {
		flex: 0 1 50%;
	}
}
</style>