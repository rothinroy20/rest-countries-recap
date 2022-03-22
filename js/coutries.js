const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => dispilyCounteis(data));
}

const dispilyCounteis = countries => {
    console.log(countries[0]);
    const CountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHTML.join(' ');
}

const getCountryHTML = country => {
    // option 1
    const { name, flags, area, population } = country;
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <b>Population: ${population}</b>
            <img src="${flags.png}">
        </div>
    `
}

loadCountries();