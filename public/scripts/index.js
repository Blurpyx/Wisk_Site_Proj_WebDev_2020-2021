window.addEventListener('load', function() {
    var jaar1_selector = document.getElementById('jaar1');
    var jaar2_selector = document.getElementById('jaar2');
    var jaar3_selector = document.getElementById('jaar3');
    var jaar4_selector = document.getElementById('jaar4');
    var jaar5_selector = document.getElementById('jaar5');
    var jaar6_selector = document.getElementById('jaar6');

    jaar1_selector.addEventListener('click', function(e) {
        // e.preventDefault();
        console.log(e.target.innerHTML);
        sessionStorage.setItem('Niveau', e.target.innerHTML);
    });
    jaar2_selector.addEventListener('click', function(e) {
        // e.preventDefault();
        console.log(e.target.innerHTML);
        sessionStorage.setItem('Niveau', e.target.innerHTML);
    });
    jaar3_selector.addEventListener('click', function(e) {
        // e.preventDefault();
        console.log(e.target.innerHTML);
        sessionStorage.setItem('Niveau', e.target.innerHTML);
    });
    jaar4_selector.addEventListener('click', function(e) {
        // e.preventDefault();
        console.log(e.target.innerHTML);
        sessionStorage.setItem('Niveau', e.target.innerHTML);
    });
    jaar5_selector.addEventListener('click', function(e) {
        // e.preventDefault();
        console.log(e.target.innerHTML);
        sessionStorage.setItem('Niveau', e.target.innerHTML);
    });
    jaar6_selector.addEventListener('click', function(e) {
        // e.preventDefault();
        console.log(e.target.innerHTML);
        sessionStorage.setItem('Niveau', e.target.innerHTML);
    });
});