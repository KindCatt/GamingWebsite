<script>
	export default {

}
</script>

<template>
	<div class="home-one">
		<div class="home-one__column">
			<p class="home-one__subtitle">Proved By prodesigner</p>
			<h1 class="home-one__title">Work that we produce for our clients</h1>
			<p class="home-one__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
			<UButton class="home-one__btn btn-get">Get more details</UButton>
		</div>

		<div class="home-one__column">
			<div class="home-one__image">
				<img class="home-one__image-joystick" src="@/assets/images/joy_stick 1.png" alt="">
				<img class="home-one__image-unity" src="@/assets/images/unity 1.png" alt="">
				<img class="home-one__image-cry" src="@/assets/images/cry 1.png" alt="">
				<img class="home-one__image-unreal" src="@/assets/images/unreal 1.png" alt="">
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.home-one {
	display: flex;
	justify-content: space-between;
	column-gap: 105px;
	&__column {
		flex: 0 1 50%;
	}
	&__subtitle {
		margin-bottom: 17px;
		color: #E87D0E;
		font-size: 20px;
		font-weight: 700;
		line-height: 155.2%;
	}
	&__title {
		margin-bottom: 26px;
		padding-right: 50px;
		font-size: 50px;
		font-weight: 700;
		line-height: 155.2%;
	}
	&__text {
		margin-bottom: 50px;
		font-weight: 500;
		line-height: 200%;
	}
	&__image {
		position: relative;
		&-joystick {
			position: absolute;
			top: -220px;
			width: 806px;
		}
		&-unity {
			position: absolute;
			top: 205px;
			left: -125px;
			width: 96px;
		}
		&-cry {
			position: absolute;
			top: 0;
			left: 56px;
			width: 101px;
		}
		&-unreal {
			position: absolute;
			top: 16px;
			left: 396px;
			width: 59px;

		}
	}
}
</style>