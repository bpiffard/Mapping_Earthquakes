// Setting the tileLayer for light mode map
let day = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-day-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//Setting the tileLayer for dark mode map
let night = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Adding basse layer to hold both map options
let baseMaps = {
    Day: day,
    Night: night
};

// Initializing the map, center of earth
let myMap = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [night]
});

// Adding base layers to layer control, and adding that to the main map
L.control.layers(baseMaps).addTo(myMap);

// Adding geoJSON data
// Setting url
// let airportData = 'https://raw.githubusercontent.com/bpiffard/Mapping_Earthquakes/GeoJSON_Multiple_Points/static/js/majorAirports.json'
let torontoRouteData = 'https://raw.githubusercontent.com/bpiffard/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/static/js/torontoRoutes.json'

// Adding style information for the nav lines
let myStyle = {
    color: '#ebde57',
    weight: 2,
    dashArray: '3' 
};

// Adding data using d3
d3.json(torontoRouteData).then(function(data) {
    console.log(data)
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup('<h3>Airline: ' + feature.properties.airline + 
            '</h3> <hr> <h3>Destination: ' + feature.properties.dst + '</h3>')
        }
    }).addTo(myMap)
});
