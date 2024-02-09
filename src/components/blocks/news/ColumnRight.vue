<script>
import CardColumnRight from './CardColumnRight.vue';

export default {
	components: {
		CardColumnRight,
},

	props: {
		news: {
			type: Array
		}
	}
}
</script>

<template>
	<div class="column-right">
		<CardColumnRight class="column-right__card"
				v-for="item in news" :key="item.id"
				:news="item"
		/>
	</div>
</template>

<style lang="scss">
.column-right {
	display: flex;
	flex-direction: column;
	margin: -30px 0;
	&__card {
		padding: 30px 0;
	}
}
</style>