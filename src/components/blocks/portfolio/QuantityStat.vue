<script>
export default {
	data() {
		return {
			info: [
				{icon: 'src/assets/svg/heroicons_sm-user.svg', quantity: `${90}+`, titleText: 'Clients'},
				{icon: 'src/assets/svg/gridicons_location.svg', quantity: `${30}+`, titleText: 'Countries'},
				{icon: 'src/assets/svg/bx_bxs-server.svg', quantity: `${50}+`, titleText: 'Projects'},
			],
		}
	}
}
</script>

<template>
	<div class="qnt">
		<div 
				class="qnt__column"
				v-for="(item, index) in info" :key="index"
		>
			<div class="qnt__item">

				<div class="qnt__icon">
					<img :src="item.icon">
				</div>

				<div class="qnt__body">
					<p class="qnt__number">{{ item.quantity }}</p>
					<p class="qnt__text">{{ item.titleText }}</p>
				</div>

			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.qnt {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1140px;
	height: 200px;
	border-radius: 10px;
	background: #1C140F;
	
	&__column {
		border-right: 2px solid #EEEFF2;
		flex: 1 1 auto;
		&:last-child {
			border-right: none;
		}
	}
	&__item {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 55px;
		height: 55px;
		margin-right: 36px;
		border-radius: 50%;
		background: #FFECEC;
	}
	&__body {
		padding: 30px;
	}
	&__number {
		font-family: 'Rubik', sans-serif;
		font-size: 25px;
		font-weight: 700;
		line-height: 30px;
	}
	&__text {
		font-family: 'Rubik', sans-serif;
		font-size: 20px;
		line-height: 30px;
	}
}

</style>