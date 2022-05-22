const register = () => {
    const firstname = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(firstname === '' || lastname === '' || email === '' || password === '' || confirmPassword === '') {
        alert("Please fill in all the fields");
        return false;
    }

    if(password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    const nameregex = /^([^0-9]*)$/;

    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


    if(!nameregex.test(firstname) || !nameregex.test(lastname)) {
        alert("Please enter a valid name");
        return false;
    }

    console.log(email)
    if(!emailregex.test(email)) {
        alert("Please enter a valid email");
        return false;
    }
    if(!passwordregex.test(password)) {
        alert("Please enter a valid password");
        return false;
    }

    const accountData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    }
    const jsonstring = JSON.stringify(accountData)
    localStorage.setItem("accountData", jsonstring);
    window.location.href = "index.html";
}