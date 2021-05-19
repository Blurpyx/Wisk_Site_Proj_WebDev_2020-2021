window.addEventListener('load', function () {
    var Bewerking = document.getElementById('bewerking');
    var col = db.collection('optellingen');

    var listTitle = document.querySelector('#list-title');
    var listItems = document.querySelector('#list-known');

    $('#bewerking').val(sessionStorage.getItem('Bewerking')).change();

    // console.log(Bewerking);
    UpdateBewerking(Bewerking);

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
            if (Bewerking.value == 'optellingen')
                Som.value = parseInt(Term_1.value) + parseInt(Term_2.value);
            if (Bewerking.value == 'verschillen')
                Verschil.value = parseInt(Term_1.value) - parseInt(Term_2.value);
        }
    });
    Term_2.addEventListener('input', function() {
        if (Term_1.value != '') {
            if (Bewerking.value == 'optellingen')
                Som.value = parseInt(Term_1.value) + parseInt(Term_2.value);
            if (Bewerking.value == 'verschillen')
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
        // console.log(`Bewerking veranderd ${e.target.value}`);

        // console.log(e.target);
        UpdateBewerking(e.target);
        listTitle.innerHTML = e.target.value[0].toUpperCase() + e.target.value.slice(1);

        db.collection(e.target.value).orderBy('id', 'desc').limit(10)
            .onSnapshot(querySnapshot => {
                listItems.innerHTML = '';
                querySnapshot.forEach(doc => {
                    // console.log(doc.id);
                    var li = document.createElement('li');
                    li.innerHTML = doc.id;
                    listItems.appendChild(li);
                });
            })
    });

    function UpdateBewerking(e) {
        var min = document.getElementById('minteken');
        var plus = document.getElementById('plusteken');

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

        sessionStorage.setItem('Bewerking', e.value);

        if (sessionStorage.getItem('Bewerking') == 'optellingen') {
            optaftDiv.style.display = 'block';
            delDiv.style.display = 'none';
            vermDiv.style.display = 'none';
            // console.log('Optelling gedetecteerd');
            min.style.display = 'none';
            plus.style.display = 'inline-block';

            Som.style.display = 'inline-block';
            Verschil.style.display = 'none';
            document.getElementById('term1').style.marginRight = '0';
            document.getElementById('term2').style.marginLeft = '0';


        } else if (sessionStorage.getItem('Bewerking') == 'verschillen') {
            optaftDiv.style.display = 'block';
            delDiv.style.display = 'none';
            vermDiv.style.display = 'none';
            // console.log('Verschil gedetecteerd');
            plus.style.display = 'none';
            min.style.display = 'inline-block';

            Verschil.style.display = 'inline-block';
            Som.style.display = 'none';
            document.getElementById('term1').style.marginRight = '2.27px';
            document.getElementById('term2').style.marginLeft = '2.27px';


        } else if (sessionStorage.getItem('Bewerking') == 'delingen') {
            delDiv.style.display = 'block';
            optaftDiv.style.display = 'none';
            vermDiv.style.display = 'none';


        } else if (sessionStorage.getItem('Bewerking') == 'vermenigvuldigingen') {
            vermDiv.style.display = 'block';
            optaftDiv.style.display = 'none';
            delDiv.style.display = 'none';


        }
    };

    document.getElementById('bewerking-toevoegen-form').addEventListener('submit', (e) => {
        e.preventDefault();
        var form = e.target;
        var bew = form.bewerking.value;
        // console.log(bew);
        col = db.collection(bew);
        col.get().then(function(querySnapshot) {
            console.log(querySnapshot.size + 1);
            if(bew == 'optellingen') {
                col.doc(form.term1.value + ' + ' + form.term2.value + ' = ' + form.som.value).set({
                    beschrijving: 'Term 1 + Term 2 = Som',
                    term1: form.term1.value,
                    term2: form.term2.value,
                    som: form.som.value,
                    id: querySnapshot.size + 1
                });
            } else if(bew == 'verschillen') {
                col.doc(form.term1.value + ' - ' + form.term2.value + ' = ' + form.verschil.value).set({
                    beschrijving: 'Term 1 - Term 2 = Verschil',
                    term1: form.term1.value,
                    term2: form.term2.value,
                    verschil: form.verschil.value,
                    id: querySnapshot.size + 1
                });
            } else if(bew == 'delingen') {
                col.doc(form.deeltal.value + ' : ' + form.deler.value + ' = ' + form.quotient.value + ' + ' + form.rest.value).set({
                    beschrijving: 'Deeltal : Deler = Quotiënt + Rest',
                    deeltal: form.deeltal.value,
                    deler: form.deler.value,
                    quot: form.quotient.value,
                    rest: form.rest.value,
                    id: querySnapshot.size + 1
                });
            } else if(bew == 'vermenigvuldigingen') {
                col.doc(form.factor1.value + ' x ' + form.factor2.value + ' = ' + form.product.value).set({
                    beschrijving: 'Factor 1 x Factor 2 = Product',
                    factor1: form.factor1.value,
                    factor2: form.factor2.value,
                    prod: form.product.value,
                    id: querySnapshot.size + 1
                });
            }
        });
        
    });
});