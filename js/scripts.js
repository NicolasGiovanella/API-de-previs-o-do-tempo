//Variaveise seleção de evento's
const apiCountry = 'https://flagsapi.com/BE/shiny/64.png';
const apiKey = '275979b3686fd562e50d17d86312639a';


const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#csearch')

cityInput.addEventListener('click', e => {
  console.log("clicado")
  console.log(cityInput);
})