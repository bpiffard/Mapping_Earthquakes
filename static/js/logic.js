// Initializing the map
let myMap = L.map('mapid').setView([37.5, -122.5], 10);

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
let sfAirport = {"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Adding data to map
/*
// pointToLayer method
L.geoJson(sfAirport, {
    pointToLayer: function(feature, latlng) {
        console.log(feature)
        return L.marker(latlng)
        .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + 
        feature.properties.city + ', ' + feature.properties.country)
    }
}).addTo(myMap);
*/
// onEachFeature methos
L.geoJson(sfAirport, {
    onEachFeature: function (feature, layer) {
        console.log(layer)
        layer.bindPopup('<h3> Airport Code: ' + feature.properties.faa + '</h3> <hr> <h3>Airport Name: '
        + feature.properties.name + '</h3>')
    }
}).addTo(myMap);
