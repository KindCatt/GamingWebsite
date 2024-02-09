<script>
import CardColumnLeft from './CardColumnLeft.vue';

export default {
	components: {
		CardColumnLeft
	},

	props: {
		newsGame: {
			type: Array
		}
	}
}
</script>

<template>
	<div class="column-left">
		<CardColumnLeft class="column-left__card"
				v-for="item in newsGame" :key="item.id"
				:newsGame="item"
		/>
	</div>
</template>

<style lang="scss">
.column-left {
	display: flex;
	flex-direction: column;
	margin: -90px 0;
	&__card {
		padding: 90px 0;
	}
}
</style>