 <template>
	<nav class="nav-bar">
		<div class="nav-bar__logo logo">
			<p class="logo__text">
				<slot name="logo"></slot>
			</p>
		</div>
		<div class="nav-bar__nav">
			<ul class="nav-bar__list">
				<li class="nav-bar__link"><RouterLink to="/">Home</RouterLink></li>
				<li class="nav-bar__link"><RouterLink to="/about">About us</RouterLink></li>
				<li class="nav-bar__link"><RouterLink to="/services">Portfolio</RouterLink></li>
				<li class="nav-bar__link"><RouterLink to="/news">News</RouterLink></li>
			</ul>
			<RouterLink to="/contact"><button class="nav-bar__btn">Contact us</button></RouterLink>
		</div>
		
	</nav>
</template>

<style lang="scss" scoped>
.nav-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 130px;
	padding: 0 60px;

	background-color: transparent;
	&__logo {
		margin: -7px 0 0 -5px;
	}
	&__nav {
		display: flex;
		align-items: center;
	}
	&__list {
		display: flex;
		column-gap: 88px;
		margin-right: 36px;
	}
	&__link {
		position: relative;
		& a {
			color: #ffffff;
		}
		// Временный кусок кода
		&:before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			margin: 0 0 -7px -14px;

			width: 39px;
			height: 4px;

			background-color: #DC7000;
		}
		// Временный кусок кода
	}
	&__btn {
		padding: 10px 27px;

		border-radius: 6px;
		background-color: #FA9021;

		font-size: 13px;
		color: #ffffff;
	}
}
</style>