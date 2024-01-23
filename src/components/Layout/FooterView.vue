<script setup>
import FooterItem from "@/components/FooterItem.vue";
import FooterFacebook from "@/components/icons/FooterFacebook.vue";
import FooterInstagram from "@/components/icons/FooterInstagram.vue";
import FooterTwitter from "@/components/icons/FooterTwitter.vue";
import FooterLinkedin from "@/components/icons/FooterLinkedin.vue";
</script>

<template>
	<footer class="footer-view">
		
		<div class="footer-view__top">
			<div class="footer-view__row">

				<div class="footer-view__column">
					<FooterItem>
						<template #title>
							<div class="footer-view__logo logo">
								LOGO
							</div>
						</template>
						<template #info>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</template>
						@Logo
					</FooterItem>
				</div>

				<div class="footer-view__column">
					<FooterItem>
						<template #title>
							<div class="footer-view__logo">
								About us
							</div>
						</template>
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
						<template #title>
							<div class="footer-view__logo">
								Contact us
							</div>
						</template>
						<template #info>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</template>
						+908 89097 890
					</FooterItem>
				</div>

				<div class="footer-view__column">
					<FooterItem>
						<template #icon>
							<ul class="footer-view__social">
								<li class="footer-view__circle"><FooterFacebook/></li>
								<li class="footer-view__circle"><FooterInstagram/></li>
								<li class="footer-view__circle"><FooterTwitter/></li>
								<li class="footer-view__circle"><FooterLinkedin/></li>
							</ul>
						</template>
					</FooterItem>
					
				</div>
			</div>
		</div>

		<div class="footer-view__bottom">
			<p class="footer-view__bottom-text">Copyright ® 2022 prodesigner All rights Rcerved</p>
		</div>

	</footer>
</template>

<style lang="scss">
.footer-view {
	display: flex;
	flex-direction: column;

	background: #070707;

	font-family: 'Poppins', sans-serif;
	color: #FFFFFF;

	&__top {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 120px 0 101px;
		padding: 79px 0 53px 0;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		margin: 0 -40px;
	}
	&__column {
		padding: 0 45px;
		&:first-child {
			flex: 0 1 45%;
		}
		&:nth-child(2) {
			flex: 0 1 20%;
		}
		&:nth-child(3) {
			flex: 0 1 35%;
		}
		&:last-child {
			align-self: flex-end;
		}
	}
	&__link {
		color: #ffffff;
		line-height: 186.3%;
	}
	&__social {
		display: flex;
		column-gap: 16px;
	}
	&__circle {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 34px;
		height: 34px;
		overflow: hidden;

		border-radius: 50%;
		background-color: #ffffff;
	}
	&__bottom {
		padding: 29px 0;
		border-top: 1px solid #D2D2D2;
	}
	&__bottom-text {
		font-size: 13px;
		text-align: center;
		line-height: 190.6%;
	}
}
.logo {
	font-size: 24px;
	font-weight: 800;
	line-height: 153.5%;
}
</style>