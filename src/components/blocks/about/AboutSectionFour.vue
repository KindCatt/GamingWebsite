<script>
import AboutSectionFour from './CardOurTeam.vue';

export default {
	components: {
		AboutSectionFour
	},

	props: {
		team: {
			type: Array
		}
	}
}
</script>

<template>
	<div class="about-four">
		
		<div class="about-four__title">Our Team</div>

		<div class="about-four__row">
			<AboutSectionFour class="about-four__card"
					v-for="item in team" :key="item.id"
					:team="item"
			/>
		</div>
		
	</div>
</template>

<style lang="scss">
.about-four {
	&__title {
		margin-bottom: 53px;
		font-size: 25px;
		font-weight: 600;
		line-height: 180.5%;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		margin: 0 -14px;
	}
	&__card {
		padding: 0 14px;
		flex: 0 1 25%;
	}
}
</style>