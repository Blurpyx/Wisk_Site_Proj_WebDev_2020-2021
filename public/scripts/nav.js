window.addEventListener('load', function() {
    var modals = document.querySelectorAll('.modal');
    // console.log(modals);
    M.Modal.init(modals);

    $( document ).ready(function() {
        $('.toast').toast('show');
    });
});