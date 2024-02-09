<script>
import ContactSectionOne from "@/components/blocks/contact/ContactSectionOne.vue"
import ContactSectionTwo from "@/components/blocks/contact/ContactSectionTwo.vue"
import BlockSubscribe from "@/components/blocks/BlockSubscribe.vue"

export default {
	name: 'ContactUsView',
	components: {
		ContactSectionOne,
		ContactSectionTwo,
		BlockSubscribe
	},

	data() {
		return {}
	}
}
</script>

<template>
	<div class="contact-view">

		<section class="contact-view__one">
			<div class="container">
				<ContactSectionOne/>
			</div>
		</section>

		<section class="contact-view__two">
			<div class="container">
				<ContactSectionTwo/>
			</div>
		</section>

		<section class="contact-view__subscribe">
			<div class="container">
				<BlockSubscribe/>
			</div>
		</section>
		
		<div class="contact-background"></div>
	</div>
</template>

<style lang="scss">
.container {
	margin: 0 109px;
}

.contact-view {
	display: flex;
	flex-direction: column;
	padding: 105px 0 165px 0;

	&__one {
		padding-top: 100px;
	}
	&__two {
		padding-top: 147px;
	}
	&__subscribe {
		margin-right: 52px;
		padding-top: 150px;
	}
}

.contact-background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -10;
	background: linear-gradient(176deg, #2211E7 -26.24%, #383837 96.98%);
}
</style>