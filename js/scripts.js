//Variaveise seleção de evento's
const apiCountry = 'https://flagsapi.com/BE/shiny/64.png';
const apiKey = '275979b3686fd562e50d17d86312639a';

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')
const weatherData = document.querySelector('#weather-data')

//Funções

//Eventos
searchBtn.addEventListener('click', (e) => {
  e.preventDefault(); //não enviar formulario
  console.log("clicado")
  
})