const form = document.querySelector('#register-form');

function direct(){
    window.location.assign("E:/iwp lab project/online movie ticket/login.html");
}

if(form.password.value != form.cpassword.value){
    alert("password and confirm password does not match");
    form.password.value = '';
    form.cpassword.value = '';
}
else {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        db.collection('users').add({
            name: form.uname.value,
            password: form.password.value
        }).then(() => {
			window.location.assign("E:/iwp lab project/online movie ticket/login.html");
		});
    });
}
