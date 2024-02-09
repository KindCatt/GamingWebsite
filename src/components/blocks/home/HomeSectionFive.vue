<script>
export default {
	props: {
		lastprojects: {
			type: Array
		}
	},
	
	data() {
		return {
			isShowMore: false
		}
	}
}
</script>

<template>
	<div class="home-five">

		<div class="home-five__top">
			<h2 class="home-five__title">Our Recent Projects</h2>
			<p class="home-five__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		</div>

		<div class="home-five__bottom"
				:style="this.isShowMore ? {height: 'auto'} : {height: '510px'}"
		>
			<div class="home-five__item"
					v-for="(item, index) in lastprojects" :key="index"
			>
				<MPicture class="home-five__image"
						:src="item"
				/>
			</div>
		</div>

		<UButton class="home-five__btn btn-see"
				@click="isShowMore = !isShowMore"
		>{{ isShowMore ? 'HIDE' : 'SEE ALL'}}</UButton>

	</div>
</template>

<style lang="scss">
.home-five {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&__top {
		margin-bottom: 70px;
		text-align: center;
	}
	&__title {
		margin-bottom: 15px;
		font-size: 30px;
		font-weight: 700;
		line-height: 187.5%;
	}
	&__text {
		font-size: 14px;
		line-height: 187.5%;
	}
	&__bottom {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 70px;
		column-gap: 27px;
		row-gap: 33px;
		overflow: hidden;
	}
	&__item {
		flex: 1 1 auto;
	}
	&__image {
		height: 223px;
		overflow: hidden;
		border-radius: 20px;
	}
}
</style>