let searchBtn = document.getElementById("search-btn");
let countryInp =document.getElementById("country-inp");

searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].population);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));

        result.innerHTML = `
        <div style="text-align: center; margin-top: 30px;">
            <img src="${data[0].flags.svg}" class="img">
            <h2>${data[0].name.common}</h2>
        </div>
        <div style="padding-left: 10%; margin-top: 30px;">
            <h3>Currencies&nbsp;&nbsp;&nbsp;: ${Object.keys(data[0].currencies)[0]}</h3>
            <h3>Continents &nbsp;&nbsp;: ${data[0].continents[0]}</h3>
            <h3>Capital &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${data[0].capital[0]}</h3>
            <h3>Population&nbsp;&nbsp;&nbsp;: ${data[0].population}</h3>
            <h3>Language&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${Object.values(data[0].languages).toString().split(",").join(", ")}</h3>
        </div>
        `
    })
})