<template>
	<div class="about-three">

		<MPicture class="about-three__image" src="src/assets/images/Rectangle 24.png" alt=""/>

		<div class="about-three__body">
			<p class="about-three__subtitle">Lorem ipsum</p>
			<h2 class="about-three__title">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</h2>
			<p class="about-three__text">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
			</p>
		</div>
	</div>
</template>

<style lang="scss">
.about-three {
	display: flex;
	background: #1C140F;
	padding: 110px 110px 0;
	
	&__image {
		width: 490px;
		height: 490px;
		margin-right: 95px;
	}
	&__body {
		flex: 1 1 50%;
		margin: 21px 0;
	}
	&__subtitle {
		margin-bottom: 14px;
		font-weight: 500;
		line-height: 202.5%;
	}
	&__title {
		margin-bottom: 30px;
		font-size: 28px;
		font-weight: 600;
		line-height: 157.5%;
	}
	&__text {
		line-height: 202.5%;
	}
}
</style>