
// ouput message
const ip = document.getElementById('ip');
const locationIP = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');

// imput message
const inputIP = document.getElementById ('inputIP');
const btnIP = document.getElementById ('btnIP');

let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const searchIP = (event) => {
 const geoAPI = async(url) => {
 const dataGEO = await fetch(url);
 const resultData = await dataGEO.json();
 return resultData;
 }
 geoAPI(`https://geo.ipify.org/api/v2/country,city?apiKey=at_7YNnrt5gTvVQniS4ncpyp4h3tO9zb&ipAddress=${inputIP.value}`)
 .then((res) => {
    ip.innerText = res.ip;
    locationIP.innerText = res.location.city;
    timezone.innerText = res.location.timezone;
    isp.innerText = res.isp;
 })
 .catch((err) => console.log(err));
}

btnIP.addEventListener ('click', searchIP);