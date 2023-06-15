document.addEventListener('DOMContentLoaded', () => {
    const selected = document.getElementById('countries');

    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data => {

        let output = "";
        data.forEach(country => {
            output =+ `<option>${country.name}</option>`;
        });
        console.log(output)
        selected.innerHTML = output; 
    }).catch(err => {
        console.log('err');
    })


});