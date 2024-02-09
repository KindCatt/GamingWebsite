<script>
import BlockLeft from "@/components/blocks/BlockLeft.vue"
import SubscribeForm from "@/components/forms/SubscribeForm.vue"

export default {
	components: {
		SubscribeForm,
		BlockLeft
	},
}
</script>

<template>
	<BlockLeft>
		<template #title>Lorem Ipsum</template>
		<template #content>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		</template>
		<SubscribeForm></SubscribeForm>
	</BlockLeft>
</template>

<style lang="scss">

</style>