<template>
	<button>
		<slot></slot>
	</button>
</template>

<style>
.btn-nav {
	padding: 10px 27px;
	border-radius: 6px;
	background-color: #FA9021;

	font-size: 13px;
	color: #ffffff;
}

.btn-get {
	padding: 14px 30px;
	border-radius: 40px;
	background: linear-gradient(92deg, #FA8305 2.08%, #FB9E3C 117.25%);

	font-weight: 500;
	color: #ffffff;
}

.btn-see {
	padding: 9px 30px;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.11);
	
	color: #ffffff;
	font-family: 'Rubik', sans-serif;
	font-size: 20px;
	font-weight: 500;
	line-height: 187.5%;
}

.btn-more {
	padding: 13px 45px;
	background: #DC7000;

	color: #ffffff;
}

.btn-smash {
	padding: 9px 30px;

	color: #FFFCFC;
}
.btn-smash-min {
	padding: 7px 26px;

	color: #FFFCFC;
}

.btn-subscribe {
	padding: 8px 18px;
	border-radius: 8px;
	background-color: #DC7000;

	font-size: 13px;
	color: #ffffff;
}
/* .btn:hover {

} */
/* .btn:active {

} */
/* .btn:disabled, .btn:disabled:hover {

} */
</style>