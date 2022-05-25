const url = 'https://api.openweathermap.org/data/2.5/'
const key = '2cfeab39690590fc4bed5287d8229390'

const setQuery = (e) => {
    if(e.keyCode == '13')
       getResult(searchBar.value)
}

const getResult = (cityName) =>{
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)

}
const displayResult = (result) => {
    console.log(result);
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${(result.main.temp)}°C`

    let desc =document.querySelector('.desc')
    desc.innerText = result.weather[0].description  

    let wind = document.querySelector('.wind')
    wind.innerText = `Rüzgar Hızı ${(result.wind.speed)} km/h`

}

 
const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)