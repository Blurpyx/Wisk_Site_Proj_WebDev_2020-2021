$(document).ready(function () {
    $('#toast-register').toast('hide');
    $('#toast-logout').toast('hide');
    $('#toast-login').toast('hide');

    document.querySelectorAll('.logged-in').forEach(elem => {
        elem.style.display = 'none';
    });
    document.querySelectorAll('.logged-out').forEach(elem => {
        elem.style.display = 'none';
    })
});

auth.onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        document.querySelectorAll('.logged-in').forEach(elem => {
            elem.style.display = 'block';
        });
        document.querySelectorAll('.logged-out').forEach(elem => {
            elem.style.display = 'none';
        })
    } else {
        // No user is signed in.
        document.querySelectorAll('.logged-in').forEach(elem => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.logged-out').forEach(elem => {
            elem.style.display = 'block';
        })
    }
});

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
    auth.createUserWithEmailAndPassword(email, pwd)             // REGISTREREN
        .then((cred) => {
            console.log(cred.user.email);

            const modal = document.querySelector('#modal-signup');  // REGISTRATIEFORM VERBERGEN
            M.Modal.getInstance(modal).close();

            db.collection('users').doc(cred.user.uid).set({     // BIJKOMENDE INFORMATIE IN DATABASE STEKEN
                leeftijd: signupForm['signup-age'].value,
                email: cred.user.email
            });

            $('#toast-register').toast('show');         // ALLE 3 DE TOASTS VERSCHIJNEN => MOET MAAR 1 ZIJN

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
            $('#toast-logout').toast('show');
            // alert('Gebruiker uitgelogd.');
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

            $('#toast-login').toast('show');

            loginForm.reset();
        })
        .catch((err) => {
            console.log(err.message);
        })
});


