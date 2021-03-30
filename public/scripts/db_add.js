window.addEventListener('load', function () {
    var Bewerking = document.getElementById('bewerking');
    {
        var optaftDiv = document.getElementById('opt-aft');
        var delDiv = document.getElementById('del');
        var vermDiv = document.getElementById('verm');

        var Term_1 = document.getElementById('term1');
        var Term_2 = document.getElementById('term2');
        var Som = document.getElementById('som');
        var Verschil = document.getElementById('verschil');
    }

    {
        var Deeltal = document.getElementById('deeltal');
        var Deler = document.getElementById('deler');
        var Quotient = document.getElementById('quotient');
        var Rest = document.getElementById('rest');
    }

    {
        var Factor_1 = document.getElementById('factor1');
        var Factor_2 = document.getElementById('factor2');
        var Product = document.getElementById('product');
    }
    

    Term_1.addEventListener('input', function() {
        if (Term_2.value != '') {
            if (Bewerking.value == 'optelling')
                Som.value = parseInt(Term_1.value) + parseInt(Term_2.value);
            if (Bewerking.value == 'verschil')
                Verschil.value = parseInt(Term_1.value) - parseInt(Term_2.value);
        }
    });
    Term_2.addEventListener('input', function() {
        if (Term_1.value != '') {
            if (Bewerking.value == 'optelling')
                Som.value = parseInt(Term_1.value) + parseInt(Term_2.value);
            if (Bewerking.value == 'verschil')
                Verschil.value = parseInt(Term_1.value) - parseInt(Term_2.value);
        }
    });

    Deeltal.addEventListener('input', function () {
        if (Deler.value != ''){
            Quotient.value = Math.floor(parseInt(Deeltal.value) / parseInt(Deler.value))
            Rest.value = parseInt(Deeltal.value) % parseInt(Deler.value)
        }
    });

    Deler.addEventListener('input', function () {
        if (Deeltal.value != ''){
            Quotient.value = Math.floor(parseInt(Deeltal.value) / parseInt(Deler.value))
            Rest.value = parseInt(Deeltal.value) % parseInt(Deler.value)
        }
    });

    Factor_1.addEventListener('input', function () {
        if(Factor_2.value != '') {
            Product.value = parseInt(Factor_1.value) * parseInt(Factor_2.value);
        }
    });

    Factor_2.addEventListener('input', function () {
        if(Factor_1.value != '') {
            Product.value = parseInt(Factor_1.value) * parseInt(Factor_2.value);
        }
    });
    
    Bewerking.addEventListener('change', function (e) {
        console.log(`Bewerking veranderd ${e.target.value}`);
        var min = document.getElementById('minteken');
        var plus = document.getElementById('plusteken');

        if (e.target.value == 'optelling') {
            optaftDiv.style.display = 'block';
            delDiv.style.display = 'none';
            vermDiv.style.display = 'none';
            console.log('Optelling gedetecteerd');
            min.style.display = 'none';
            plus.style.display = 'inline-block';

            Som.style.display = 'inline-block';
            Verschil.style.display = 'none';
            document.getElementById('term1').style.marginRight = '0';
            document.getElementById('term2').style.marginLeft = '0';


        } else if (e.target.value == 'verschil') {
            optaftDiv.style.display = 'block';
            delDiv.style.display = 'none';
            vermDiv.style.display = 'none';
            console.log('Verschil gedetecteerd');
            plus.style.display = 'none';
            min.style.display = 'inline-block';

            Verschil.style.display = 'inline-block';
            Som.style.display = 'none';
            document.getElementById('term1').style.marginRight = '2.27px';
            document.getElementById('term2').style.marginLeft = '2.27px';


        } else if (e.target.value == 'deling') {
            delDiv.style.display = 'block';
            optaftDiv.style.display = 'none';
            vermDiv.style.display = 'none';


        } else if (e.target.value == 'vermenigvuldiging') {
            vermDiv.style.display = 'block';
            optaftDiv.style.display = 'none';
            delDiv.style.display = 'none';


        }
    });
});