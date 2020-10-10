document.querySelector("#singin").addEventListener("click", () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("senha").value
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(result) {
     
        window.location.href = "../books.html"
    }).catch(function(error) {  
      // Handle error.
    });
})
function signIn(provider) {
  firebase.auth()
      .signInWithPopup(provider)
      .then(function (result) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
          } else {
            // User is signed out.
            // ...
          }
      });
      
         
      }).catch(function (error) {
          console.log(error);
          alert('Falha na autenticação');
      });
}
document.querySelector("#google-singin").addEventListener("click", () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  signIn(provider);
  window.location.href = "../books.html"
})




