// Initializing the map, center of earth
let myMap = L.map('mapid').setView([30, 30], 2);

// Setting the tileLayer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(myMap);

// Adding geoJSON data
// Setting url
let airportData = 'https://raw.githubusercontent.com/bpiffard/Mapping_Earthquakes/GeoJSON_Multiple_Points/static/js/majorAirports.json'

// Adding data using d3
d3.json(airportData).then(function(data) {
    L.geoJSON(data,
        {onEachFeature: function(feature, layer) {
            layer.bindPopup('<h3> Airport Code: ' + feature.properties.faa + '</h3> <hr> <h3>Airport Name: '
            + feature.properties.name + '</h3>');
        }}).addTo(myMap)
});
