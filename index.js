const urlString = 'https://restcountries.eu/rest/v2/name/spain';
const baseURL = 'https://restcountries.eu/rest/v2/name/'; // all requests go to this url

const countryList = document.querySelector('#country-list');
const button = document.querySelector('#the-button');

// axios must be in html as script, to use it at the frontend


function getCountryByInfo(countryName) {  // If a letter is entered, the user gets a list
    axios.get(`${baseURL}{$countryName}`) 
    .then( (responseFromAPI) => {
        const countries = responseFromAPI.data;

        let htmlString = '';

        countries.forEach ((countryObj) => {  // object details can be found in console
            htmlString += `
            <h2> ${coutryObj.name} </h2>
            <p> ${countryObj.capital} <p>
            <br>`;
        })
        countryList.innerHTL = htmlString;
})
    .catch (err => console.log(err))
}

const getCountryByName = axios.create(  // get request is put into a variable; this is called axios service
     {baseURL: 'https://restcountries.eu/rest/v2/name/',
      method: get
    });


function getCountryByInfo2(countryName) {
    getCountryByName(countryName)
    .then(responseFromAPI => {
      const countries = responseFromAPI.data;

      let htmlString = "";

      countries.forEach(countryObj => {
        htmlString += `
        <h2> ${countryObj.name} </h2>
        <p> ${countryObj.capital}</p>
        <br>
      `;
      });

      countryList.innerHTML = htmlString;
    })
    .catch(err => console.log(err));
}




button.addEventListener('click', () => {
    const country = document.getElementById('the-input').value;
    
    getCountryByInfo(country);
});

