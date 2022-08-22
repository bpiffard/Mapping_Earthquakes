// Setting the tileLayer for light mode map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//Setting the tileLayer for dark mode map
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Adding basse layer to hold both map options
let baseMaps = {
    'Streets': streets,
    'Satellite Streets': satelliteStreets
};

// Initializing the map, center of earth
let myMap = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

// Adding base layers to layer control, and adding that to the main map
L.control.layers(baseMaps).addTo(myMap);

// Adding geoJSON data
// Setting url
let torontoHoodsData = 'https://raw.githubusercontent.com/bpiffard/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/static/js/torontoNeighborhoods.json'

// Setting parameters for polygon style
let myStyle = {
    color: '#577aeb',
    weight: 1,
    fillColor: '#f5e569' 
};

// Adding data using d3
d3.json(torontoHoodsData).then(function(data) {
    console.log(data)
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup('<h3>Neighborhood: ' + feature.properties.AREA_NAME)
        }
    }).addTo(myMap)
});
