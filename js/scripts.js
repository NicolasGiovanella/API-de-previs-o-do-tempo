//Variaveise seleção de eventos
const apiCountry = 'https://flagsapi.com/BE/shiny/64.png';//API fotos de bandeira
const apiKey = '275979b3686fd562e50d17d86312639a';

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')
const weatherData = document.querySelector('#weather-data')

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('#descripition')
//const weatherData = document.querySelector('#weather-data')

//Funções
const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();
  console.log(data);
  console.log(data.id);

  return data; //retornando os dados da api
}

const showWeatherData = async (city) => { //função que exibe os dados da API
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  //descElement.innerText = data.weather[0].description;
  weatherData.classList.remove('hide'); //apos buscar os dados, removoa classe com a respota da API
}


//Eventos
searchBtn.addEventListener('click', (e) => {
  e.preventDefault(); //não enviar formulario
  const city = cityInput.value;
  
  showWeatherData(city);
})