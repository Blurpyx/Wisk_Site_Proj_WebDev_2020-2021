window.addEventListener('load', function() {
    document.querySelectorAll("#jaarSelectie").forEach(elem => {
        elem.innerHTML = sessionStorage.getItem('Niveau');
    });
    console.log(sessionStorage.getItem('Niveau'));
    ShowYear(sessionStorage.getItem('Niveau'));
});


function ShowYear(Jaar) {
    var jaren = [
        document.querySelectorAll('.jaar1'),
        document.querySelectorAll('.jaar2'),
        document.querySelectorAll('.jaar3'),
        document.querySelectorAll('.jaar4'),
        document.querySelectorAll('.jaar5'),
        document.querySelectorAll('.jaar6')
    ];

    if(Jaar == 'Jaar 1') {
        jaren.forEach(elem => {
            elem.forEach(jaar => {
                jaar.style.display = 'none';
            });
        });
        jaren[0].forEach(elem => {
            elem.style.display = 'block';
        });
    } 
    
    
    else if(Jaar == 'Jaar 2') {
        jaren.forEach(elem => {
            elem.forEach(jaar => {
                jaar.style.display = 'none';
            });
        });
        jaren[1].forEach(elem => {
            elem.style.display = 'block';
        });
    } 
    
    
    else if(Jaar == 'Jaar 3') {
        jaren.forEach(elem => {
            elem.forEach(jaar => {
                jaar.style.display = 'none';
            });
        });
        jaren[2].forEach(elem => {
            elem.style.display = 'block';
        });
    } 
    
    
    else if(Jaar == 'Jaar 4') {
        jaren.forEach(elem => {
            elem.forEach(jaar => {
                jaar.style.display = 'none';
            });
        });
        jaren[3].forEach(elem => {
            elem.style.display = 'block';
        });
    } 
    
    
    else if(Jaar == 'Jaar 5') {
        jaren.forEach(elem => {
            elem.forEach(jaar => {
                jaar.style.display = 'none';
            });
        });
        jaren[4].forEach(elem => {
            elem.style.display = 'block';
        });
    } 
    
    
    else if(Jaar == 'Jaar 6') {
        jaren.forEach(elem => {
            elem.forEach(jaar => {
                jaar.style.display = 'none';
            });
        });
        jaren[5].forEach(elem => {
            elem.style.display = 'block';
        });
    }
}
