
const form  = document.querySelector('#login-form');
var k=0;

function validate(doc) {
    if(form.username.value == doc.data().name){
        if(form.password.value == doc.data().password){
            k=1;
            window.location.replace("E:/iwp lab project/online movie ticket/Home.html");
        }
        else {
            k=2;
            alert("wrong password");
        }
    }
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    k=0;
    db.collection('users').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            validate(doc);
            console.log(doc.data());
        })
        if(k==0){
            alert("User Not Found");
        }

    });
})



