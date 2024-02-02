//Variaveise seleção de eventos
const apiCountry = 'https://flagsapi.com/';//API fotos de bandeira
const apiKey = '275979b3686fd562e50d17d86312639a';

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');
const weatherData = document.querySelector('#weather-data');
const iconWeather = document.querySelector('#weather-icon');

const cityElement = document.querySelector('#city');
const iconcountry = document.querySelector('#country');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
//const weatherData = document.querySelector('#weather-data')

//Funções
const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch(apiWeatherURL);
  const data = await res.json();
  console.log(res);
  console.log(data.id);

  return data; //retornando os dados da api
}

const getIconWheater = async (iconCode) => {
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;
  const response = await fetch(iconURL);
  const icon = await response.blob();

  return URL.createObjectURL(icon);
};

const showWeatherData = async (city) => {
  try {
    const data = await getWeatherData(city);

    const iconURL = await getIconWheater(data.weather[0].icon);
    iconWeather.setAttribute("src", iconURL);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    iconcountry.setAttribute("src", `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
    weatherData.classList.remove("hide");
  } catch (error) {
    console.error("Erro ao buscar os dados da API:", error);
  }
};


//Eventos
searchBtn.addEventListener('click', (e) => {
  e.preventDefault(); //não enviar formulario
  const city = cityInput.value;
  
  showWeatherData(city);
})

addEventListener('keypress', (e) => {
  if(e.key === "Enter"){
    e.preventDefault(); //não enviar formulario
    const city = cityInput.value;
  
    showWeatherData(city);
  }
})