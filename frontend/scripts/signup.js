





document.querySelector("#envio").addEventListener("click", () => {
    let email = document.getElementById("email").value

    let password = document.getElementById("senha").value
    let passwordConfirmed = document.getElementById("senha-confirmed").value

    if(password === passwordConfirmed){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
            firebase.auth().currentUser.sendEmailVerification().then(function() {
                alert('Email Verification Sent!');
                window.location.href = "../signin/"
    
            });
        })

    }else{
        alert(`As senhas não conhecidem!`)
    }

})


        
    
    

    
