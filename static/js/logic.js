// Initializing the map
let myMap = L.map('mapid').setView([40.7, -94.5], 4);

// Setting the tileLayer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(myMap);

let cityData = cities;

// Adding a marker for each city
cityData.forEach(city =>
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: '#dccce0',
        fillColor: '#d957fa',
        weight: 4
    })
    .bindPopup('<h2>' + city.city + ', ' + city.state + '</h2> <hr> <h3>Population: ' + city.population.toLocaleString() + '</h3>')
    .addTo(myMap)
);
