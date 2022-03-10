

const loadData =async (url) =>{
    
    try{
        
        const res = await fetch(url);
        const data = await res.json(); displayCountries(data);
        }catch(e){
    
        }
}

const loadCountries =  (url) =>{

    document.getElementById('detail-container').classList.add('d-none')
    loadData(url);
}

const loadDeatil= async (countryName)=>{
    const url =`https://restcountries.com/v3.1/name/${countryName}`;
    
    try{
        
        const res = await fetch(url);
        const data = await res.json(); showDetail(data[0]);
        }catch(e){
    
        }

}

const showDetail = (country) =>{
    document.getElementById('detail-container').classList.remove('d-none')
    const showDetail = document.getElementById('show-detail');
    console.log(country);
    showDetail.textContent='';

    showDetail.innerHTML = `
    <img src="${country.flags.png}" class="card-img-top" alt="${country.name.common} Flag">
        <div class="card-body">
          <h5 class="card-title">${country.name.common}</h5>
         <div class="d-flex flex-column justify-content-between">
         <p class="card-text"><b>Capital:</b>  ${country.capital}
         <p class="card-text"><b>Region: </b> ${country.region}
         <p class="card-text"><b>Population:</b> ${country.population}
         </p>
         </div>
         <div class="d-flex justify-content-between">
         <p class="card-text"><b>Independent:</b> ${country.independent}</p>
         
         </div>
        </div>
    `
}
const loadHomeData = () =>{
    const url ='https://restcountries.com/v3.1/all';
    loadCountries(url);
}
loadHomeData()

const displayCountries = (countries) =>{
    const countryDiv = document.getElementById('country-div');
    countryDiv.textContent='';
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('col');
        
        div.innerHTML = `
        <div onclick="loadDeatil('${country.name.common}')" class="card h-100">
                <img height="150px" src="${country.flags.png}" class="card-img-top" alt="${country.name.common} Flag">
                <div class="card-body">
                  <h5 class="card-title text-center">${country.name.common}</h5>
                  <p class="card-text text-center">Capital: ${country.capital}</p>
                </div>
              </div>
        `;

        countryDiv.appendChild(div);
    });
}

const searchCountry = ()=> {
    const searchInput = document.getElementById('input-search');
    const countryName = searchInput.value;
    const url =`https://restcountries.com/v3.1/name/${countryName}`;
    
    loadData(url);

}

const regionCountries= (region) =>{
    url = `https://restcountries.com/v3.1/region/${region}`;
    loadCountries(url)
}