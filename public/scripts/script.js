window.addEventListener('load', function() {
    var jaar1_selector = document.getElementById('jaar1');
    var jaar2_selector = document.getElementById('jaar2');
    var jaar3_selector = document.getElementById('jaar3');
    var jaar4_selector = document.getElementById('jaar4');
    var jaar5_selector = document.getElementById('jaar5');
    var jaar6_selector = document.getElementById('jaar6');

    jaar1_selector.addEventListener('click', function(e) {
        console.log(this.value);
    });
});