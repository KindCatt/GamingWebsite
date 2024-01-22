<script setup>
import FooterItem from "@/components/FooterItem.vue";
</script>

<template>
	<footer class="footer-view">
		
		<div class="footer-view__top">
			<div class="footer-view__row">

				<div class="footer-view__column">
					<FooterItem>
						<template #title>LOGO</template>
						<template #info>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</template>
						@Logo
					</FooterItem>
				</div>

				<div class="footer-view__column">
					<FooterItem>
						<template #title>About us</template>
						<template #info>
							<p><a class="footer-view__link" href="#">Zeux</a></p>
							<p><a class="footer-view__link" href="#">Portfolio</a></p>
							<p><a class="footer-view__link" href="#">Careers</a></p>
							<p><a class="footer-view__link" href="#">Contact us</a></p>
						</template>
					</FooterItem>
				</div>

				<div class="footer-view__column">
					<FooterItem>
						<template #title>Contact us</template>
						<template #info>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</template>
						+908 89097 890
					</FooterItem>
				</div>

				<div class="footer-view__column">
					<FooterItem>
						Здесь SVG иконки
					</FooterItem>
					
				</div>
			</div>

			<div class="footer-view__bottom">
				<p class="footer-view__bottom-text">Copyright ® 2022 prodesigner All rights Rcerved</p>
			</div>
		</div>

	</footer>
</template>

<style>
.footer-view__column {
	border: 1px solid #000;
}
</style>