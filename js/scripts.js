//Variaveise seleção de eventos
const apiCountry = 'https://flagsapi.com/';//API fotos de bandeira
const apiKey = '275979b3686fd562e50d17d86312639a';

const apiAcesskey = 'e-f7Y_cXA6yu2oQeNnAXMx_XSUyG2I9XWvbfuynVcEM';

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');
const weatherData = document.querySelector('#weather-data');
const iconWeather = document.querySelector('#weather-icon');

const cityElement = document.querySelector('#city');
const iconcountry = document.querySelector('#country');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const error_msg = document.querySelector('#error-message');
const item_suggestion = document.querySelector('.item-suggestion')
const div_suggestion =document.querySelector('#suggestions');

//Funções
const getWeatherData = async(city) => { //função para buscar dados da API
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data; //retornando os dados da api
}

const getImage = async(city) => { //função para buscar dados da API de imagens aleartorias
  const apiImageURL = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(city)}&client_id=${apiAcesskey}`;
  const res = await fetch(apiImageURL);
  const data = await res.json();

  console.log(data.results[0].urls.full);
}

const getIconWheater = async (iconCode) => { //função para buscar imagens de bandeiras dos paises
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;
  const response = await fetch(iconURL);
  const icon = await response.blob();
  return URL.createObjectURL(icon);
};

const showWeatherData = async (city) => {//função para exibir os dados na tela
  try {
    if(error_msg.className != "hide"){
      error_msg.classList.add("hide");
    }
    const data = await getWeatherData(city);
    const iconURL = await getIconWheater(data.weather[0].icon);//chamando função assincornas para exibir icone
    iconWeather.setAttribute("src", iconURL);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);//convertendo para inteiro
    descElement.innerText = data.weather[0].description;
    iconcountry.setAttribute("src", `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
    weatherData.classList.remove("hide");
  } catch (error) {
    error_msg.classList.remove("hide");
    weatherData.classList.add("hide");
    console.error("Erro ao buscar os dados da API:", error);
  }
};


//Eventos
searchBtn.addEventListener('click', (e) => {//chama função ao clicar no btn pesquisar
  e.preventDefault(); //não enviar formulario
  const city = cityInput.value;
  getImage(city);
  showWeatherData(city);
})

addEventListener('keypress', (e) => { //chamar funções ao clicar no enter
  if(e.key === "Enter"){
    e.preventDefault(); //não enviar formulario
    const city = cityInput.value;
    showWeatherData(city);
  }
})

div_suggestion.addEventListener('click', (e) =>{//selecionar as cidades de sugestão
  e.preventDefault();
  const item = e.target;
  showWeatherData(item.innerText);
})
