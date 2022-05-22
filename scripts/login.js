const login = () => {
	document.getElementById("emailinvalid").style.display = "none";
	document.getElementById("passwordinvalid").style.display = "none";

	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	const emailValid =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
		password
	);
	console.log(emailValid, passwordValid);
	if (!emailValid) {
		return (document.getElementById("emailinvalid").style.display = "block");
	}
	if (!passwordValid) {
		return (document.getElementById("passwordinvalid").style.display = "block");
	}

	if (emailValid && passwordValid) return alert("Login Successful");
};
