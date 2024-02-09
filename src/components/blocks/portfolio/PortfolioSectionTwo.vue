<script>
import GreenCircleCheck from '@/components/icons/portfolio/GreenCircleCheck.vue';
import IconPlay from '@/components/icons/portfolio/IconPlay.vue';

export default {
	components: {
		IconPlay,
		GreenCircleCheck,
	}
}
</script>

<template>
	<div class="portfolio-two">
		
		<div class="portfolio-two__video">
			<MPicture class="portfolio-two__poster" src="src/assets/images/Rectangle 4.png"/>
			<IconPlay class="portfolio-two__icon-play"/>
		</div>
			
		<div class="portfolio-two__body">
			<h2 class="portfolio-two__title">Lorem Ipsum is simply dummy text.</h2>
			<p class="portfolio-two__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
			<ul class="portfolio-two__list">
				<li class="portfolio-two__list-text">
					<GreenCircleCheck class="portfolio-two__list-icon"/>
					<span>Lorem Ipsum is simply</span>
				</li>
				<li class="portfolio-two__list-text">
					<GreenCircleCheck/>
					<span>Lorem Ipsum is simply</span>
				</li>
				<li class="portfolio-two__list-text">
					<GreenCircleCheck/>
					<span>Lorem Ipsum is simply</span>
				</li>
				<li class="portfolio-two__list-text">
					<GreenCircleCheck/>
					<span>Lorem Ipsum is simply</span>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<style lang="scss">
.portfolio-two {
	display: flex;

	&__video {
		position: relative;
		display: inline-block;
		flex: 1 0 669px;
		height: 354.937px;
		margin-right: 87px;
		border-radius: 16px;
		overflow: hidden;
	}
	&__poster {
		width: 669px;
		height: 354.937px;
		box-shadow: 0px 2px 4px 0px rgba(47, 48, 53, 0.15);

		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 2;
			background: linear-gradient(0deg, rgba(47, 48, 53, 0.50) 0%, rgba(47, 48, 53, 0.50) 100%)
		}
	}
	&__icon-play {
		position: absolute;
		top: 50%;
		left: 50%;
		transform:translate(-50%, -60%);
		z-index: 5;
	}
	&__body {
		margin-top: -15px;
	}
	&__title {
		margin-bottom: 12px;
		font-size: 30px;
		font-weight: 700;
		line-height: 180.5%;
	}
	&__text {
		margin-bottom: 28px;
		font-size: 14px;
		line-height: 187.5%;
	}
	&__list-text {
		display: flex;
		margin-bottom: 18px;
		column-gap: 10px;
		&:last-child {
			margin-bottom: 0;
		}
		span {
			font-size: 14px;
		}
		&__list-icon {
			flex: 1 0 24px;
		}
	}
}

</style>