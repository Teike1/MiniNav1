function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById('login-container').style.display = 'none';
    })
    .catch(error => alert("Fout bij inloggen: " + error.message));
}