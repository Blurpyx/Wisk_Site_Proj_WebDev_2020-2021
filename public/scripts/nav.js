window.addEventListener('load', function() {
    var modals = document.querySelectorAll('.modal');
    // console.log(modals);
    M.Modal.init(modals);

    $( document ).ready(function() {
        $('#toast-register').toast('hide');
        $('#toast-logout').toast('hide');
        $('#toast-login').toast('hide');
    });
});