var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');
var countryName = document.getElementById('country-name');

document.getElementById('search').addEventListener('click', searchCountries);

countryName.addEventListener('keyup', function(){
    searchCountries();
});

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList)
        .catch(function() {
            console.log("no such country");
        });
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        var liEl = document.createElement('li');
        liEl.innerHTML = '<div>' + item.name + ':' + '<br>' + ' - Capital city: ' + item.capital + '<br>' + ' - Currency: ' + item.currencies + '<br>' + ' -population: ' + item.population + '</div>';
        countriesList.appendChild(liEl);
    });
}

