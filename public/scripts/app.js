var listTitle = document.querySelector('#list-title');
var listItems = document.querySelector('#items-list');
    
window.addEventListener('load', function () {
    var AddForm = document.getElementById('bewerking-toevoegen-form');

    AddForm.term1.addEventListener('input', function (e) {
        if (AddForm.bewerking.value == 'optelling') {
            // console.log('optelling test');
            console.log(`Bewerking: ${AddForm.term1.value} + ${AddForm.term2.value} = ${AddForm.som.value}`);
        }
        if (AddForm.bewerking.value == 'verschil') {
            // console.log('optelling test');
            console.log(`Bewerking: ${AddForm.term1.value} - ${AddForm.term2.value} = ${AddForm.verschil.value}`);
        }
    });
    AddForm.term2.addEventListener('input', function (e) {
        if (AddForm.bewerking.value == 'optelling') {
            // console.log('optelling test');
            console.log(`Bewerking: ${AddForm.term1.value} + ${AddForm.term2.value} = ${AddForm.som.value}`);
        }
        if (AddForm.bewerking.value == 'verschil') {
            // console.log('optelling test');
            console.log(`Bewerking: ${AddForm.term1.value} - ${AddForm.term2.value} = ${AddForm.verschil.value}`);
        }
    });
});

function RenderList(doc) {

}