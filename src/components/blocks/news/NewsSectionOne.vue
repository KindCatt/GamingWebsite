<script>
import BlockTitleCenter from '@/components/blocks/BlockTitleCenter.vue';
import FoundNews from '@/components/blocks/news/FoundNews.vue';
import SeardhIcon from '@/components/icons/news/SeardhIcon.vue';

export default {
	components: {
		BlockTitleCenter,
		FoundNews,
		SeardhIcon
	},

	props: {
		news: {
			type: Array
		}
	},

	data() {
		return {
			findNews: '',
		}
	},

	//Поиск в массиве
	computed: {
		searchArticle() {
			const foundNews = this.news
			if (this.findNews) {
				return foundNews.filter(item => item.title.toLowerCase().includes(this.findNews.toLowerCase()))
			}
			return foundNews
		}
	},
	//Поиск в массиве
}
</script>

<template>
	<div class="news-one">

		<!-- Заголовок -->
		<BlockTitleCenter class="news-one__block">
			
			<template #home-link>News</template>

			<template #title>Lorem Ipsum is simply dummy text of the printing and.</template>

			<template #text>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</template>

			<template #ellipce>
				<span class="ellipce"></span>
			</template>

		</BlockTitleCenter>
		<!-- Заголовок -->

		<!-- Поиск -->
		<div class="news-one__search">
			<div class="news-one__search-input">
				<SeardhIcon class="news-one__search-icon"/>
				<input type="text" placeholder="Search"
						v-model="findNews"
						@keypress.enter="searchResultNews"
				>
			</div>
			<FoundNews class="news-one__search-result"
					v-if="findNews && searchArticle.length != 0"
					:searchArticle="searchArticle"
			/>
		</div>
		<!-- Поиск -->

	</div>
</template>

<style lang="scss">
.news-one {
	display: flex;
	flex-direction: column;
	align-items: center;
	
	&__block {
		margin-bottom: 74px;
	}
	&__search {
		position: relative;
	}
	&__search-input {
		display: flex;
		align-items: center;
		width: 400px;
		border-radius: 10px;
		overflow: hidden;
		background: #1C140F;

		input {
			width: 100%;
			padding: 18px;
			background: #1C140F;
			color: #FFF;

			&::-webkit-input-placeholder {
				color: #FFF;
			}
			&:-moz-placeholder {
				color: #FFF;
			}
			&::-moz-placeholder {
				color: #FFF;
			}
			&:-ms-input-placeholder {  
				color: #FFF;
			}
		}
	}
	&__search-icon {
		margin-left: 25px;
	}
	&__search-result {
		position: absolute;
		top: 56px;
		left: 0;
		z-index: 2;
	}
}

.ellipce {
	position: absolute;
	top: -3px;
	right: -126px;
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background-color: #F9D6FF;
}
</style>