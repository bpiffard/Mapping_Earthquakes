// Initializing the map
let myMap = L.map('mapid').setView([34.0522, -118.2437], 14);

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

// Testing differnt ways to make circles
var marker = L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    fillColor: '#fcba03',
    color: '#000000'
}).addTo(myMap);

var markerTwo = L.circle([34.0522, -118.2437], {
    radius: 300,
    fillColor: '#aa44c9',
    color: '#dccce0'
}).addTo(myMap);