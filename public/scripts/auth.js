var signupForm = document.querySelector('#signup-form');
var signupFault = document.querySelector('#signup-fault');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    var email = signupForm['signup-email'].value;
    var pwd = signupForm['signup-password'].value;

    // console.log('email: \'' + email + '\' with password: \'' + pwd + '\'.');
    // console.log(signupForm['signup-age'].value);

    // sign the user up
    auth.createUserWithEmailAndPassword(email, pwd)
        .then((cred) => {
            console.log(cred.user.email);

            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();

            db.collection('users').doc(cred.user.uid).set({
                leeftijd: signupForm['signup-age'].value,
                email: cred.user.email
            });

            signupForm.reset();
        })
        .catch((err) => {
            // console.log(err.message);
            if (err.message == 'The email address is already in use by another account.') {
                signupFault.innerHTML = 'Dit email-adres is al in gebruik!'
            }
            else {
                signupFault.innerHTML = err.message + '<br>Ga je juf halen, zij moet hiervan een foto doorgeven aan de ontwerper.';
            }
        });
});


var btnLogout = document.querySelector('#logout');

btnLogout.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut()
        .then(() => {
            console.log('user signed out.');
            alert('Gebruiker uitgelogd.');
        })
        .catch((err) => {
            console.log(err.message);
        });
});


var loginForm = document.querySelector('#login-form');
var loginFault = document.querySelector('#login-fault');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var email = loginForm['login-email'].value;
    var pwd = loginForm['login-password'].value;
    // console.log('email: \'' + email + '\', password: \'' + pwd + '\'.');

    auth.signInWithEmailAndPassword(email, pwd)
        .then((cred) => {
            console.log('user \'' + cred.user.email + '\' logged in.');

            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();

            loginForm.reset();
        })
        .catch((err) => {
            console.log(err.message);
        })
});


