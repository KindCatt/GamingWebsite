<script>
import ArrowLeftWhite from '@/components/icons/about/ArrowLeftWhite.vue';
import ArrowRightWhite from '@/components/icons/about/ArrowRightWhite.vue';

export default {
	components: {
		ArrowLeftWhite,
		ArrowRightWhite
	},

	data() {
		return {
			slides: [
				{id: 1, src: 'src/assets/images/Rectangle 26.png'},
				{id: 2, src: 'src/assets/images/Rectangle 24.png'}
			],
			currentSlide: 1,
		}
	},

	methods: {
		movePrev() {
			if (this.currentSlide > 1) {
				this.currentSlide--
			} else  {
				this.currentSlide = this.slides.length
			}
		},
		moveNext() {
			if (this.currentSlide < this.slides.length) {
				this.currentSlide++
			} else  {
				this.currentSlide = 1
			}
		}
	}
}
</script>

<template>
	<div class="slider">
		<div class="slider__inner">

			<div class="slider__slide" v-for="slide in slides" :key="slide.id">
				<transition-group name="slide">
					<MPicture class="slider__image" :src="slide.src"
							v-if="currentSlide === slide.id"
					/>
				</transition-group>
			</div>

			<div class="slider__nav nav">
				<button class="nav__prev"
						@click="movePrev"
				>
					<ArrowLeftWhite/>
				</button>

				<span>
					{{ currentSlide + ' of ' + slides.length}}
				</span>

				<button class="nav__next"
						@click="moveNext"
				>
					<ArrowRightWhite/>
				</button>
			</div>
			
		</div>
	</div>
</template>

<style lang="scss" scoped>
.slider {
	&__inner {
		position: relative;
		display: flex;
		overflow: hidden;
		width: 739px;
		height: 656px;
	}
	&__slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	&__image {
		width: 100%;
		height: 100%;
	}
	&__nav {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 3;
	}
}

.nav {
	background: #333;
	&__prev, &__next {
		display: inline-block;
		padding: 27px 29px;
		background-color: transparent;
		cursor: pointer;
	}
	&__current {
		font-weight: 500;
	}
}

.slide-item {
	opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
	transition: all 1s ease;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
}
</style>