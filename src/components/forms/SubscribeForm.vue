<template>
	<div class="subscribe-form">
		<div class="subscribe-form__row">

			<div class="subscribe-form__column">
				<div class="subscribe-form__description">
					<h2 class="subscribe-form__title">Stay in the loop</h2>
					<p class="subscribe-form__text">Subscribe to receive the latest news and updates about TDA. <br> We promise not to spam you!</p>
				</div>
			</div>

			<div class="subscribe-form__column">
				<div class="subscribe-form__body">
					<form 
							action="#" 
							class="subscribe-form__form"
							@submit.prevent
					>
						<div class="subscribe-form__wrapper">
							<input class="subscribe-form__input" placeholder="Enter email address" type="email">

							<UButton type="submit" class="subscribe-form__btn btn-subscribe">Continue</UButton>

						</div>
					</form>
				</div>
			</div>

		</div>
	</div>
</template>

<style lang="scss" scoped>
.subscribe-form {
	border-radius: 15px;
	background-color: #1C140F;
	padding: 40px 0;
	
	&__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 50px;
		column-gap: 40px;
	}
	&__column {
		flex: 1 1 auto;
	}
	&__description {
		display: flex;
		flex-direction: column;
		row-gap: 10px;
	}
	&__title {
		font-size: 30px;
		font-weight: 500;
	}
	&__text {
		font-size: 17px;
	}
	&__body {
		display: flex;
		justify-content: flex-end;
	}
	&__wrapper {
		display: flex;
		width: 385px;
		padding: 6px;
		border-radius: 8px;
		background-color: #ffffff;
	}
	&__input {
		flex: 1 1 auto;
		&::placeholder {
			color: #898989;
			font-size: 13px;
			font-weight: 300;
		}
	}
}
</style>