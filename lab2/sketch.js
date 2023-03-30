<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>Voting Place in Vancouver</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <link rel='stylesheet' href='https://unpkg.com/leaflet/dist/leaflet.css' integrity='sha384-BnXfM/OaNPvoC/ZzwoSvgLtjsGw6DtkPbYTzMTKjyN9hF0NtuNp6SL27EJBLxpk/' crossorigin=''/>
    <script src='https://unpkg.com/leaflet/dist/leaflet.js' integrity='sha384-V/Dqa6I3xq3v7Q2wnhqowS3t+mmIg8XvRly+4C4JxpPzmsxHL+uV7wMfhMnZpw7G' crossorigin=''></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.4/nouislider.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.4/nouislider.min.js"></script>
    <style>
        body { margin: 0; padding: 0; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; }
        #slider { position: absolute; bottom: 10px; left: 10px; right: 10px; }
    </style>
</head>
<body>

<div id="map"></div>
<div id="slider"></div>

<script>
var map = L.map('map').setView([49.256, -123.128], 11.5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2RhbnRlIiwiYSI6ImNsZnV4YnA5ODAwZmIzZW5wNnYzYjloM2IifQ.FSDNFvLVG42S_6AMgEMWAw', {
    attribution: '',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);

var voting_locations_2011 = L.geoJSON(null, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 5,
            fillColor: "#FF0000",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

var voting_locations_2014 = L.geoJSON(null, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 5,
            fillColor: "#00FF00",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

var voting_locations_2017 = L.geoJSON(null, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 5,
            fillColor: "#000FF00",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
  }).addTo(map);
  
var voting_locations_2018 = L.geoJSON(null, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 5,
            fillColor: "##800080",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
  }).addTo(map);
  
var voting_locations_2022 = L.geoJSON(null, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 5,
            fillColor: "#	#FFFF00",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
  }).addTo(map);

// Define the URL to retrieve the voting locations data
var voting_locations_2011_url = 'https://data.vancouver.ca/datacatalogue/election2011votinglocationswgs84.zip';
var voting_locations_2014_url = 'https://opendata.arcgis.com/datasets/cbe6db73c6d341e6a474c6f3a3fc0faa_0.geojson';
var voting_locations_2017_url = 'https://opendata.arcgis.com/datasets/31587eb53f314ca088e9ac7d0e4fa4c4_0.geojson';
var voting_locations_2018_url = 'https://opendata.arcgis.com/datasets/9fc87af8adb54dbfb6a855d9077a764c_0.geojson';
var voting_locations_2022_url = 'https://opendata.arcgis.com/datasets/28d6d1e6a8a54f79b3f57c9a2a2c109e_0.geojson';

// Load the data from each URL
Promise.all([
fetch(voting_locations_2011_url).then(function(response) { return response.json(); }),
fetch(voting_locations_2014_url).then(function(response) { return response.json(); }),
fetch(voting_locations_2017_url).then(function(response) { return response.json(); }),
fetch(voting_locations_2018_url).then(function(response) { return response.json(); }),
fetch(voting_locations_2022_url).then(function(response) { return response.json(); })
]).then(function(data) {
// Add the data to the map layers
voting_locations_2011.addData(data[0]);
voting_locations_2014.addData(data[1]);
voting_locations_2017.addData(data[2]);
voting_locations_2018.addData(data[3]);
voting_locations_2022.addData(data[4]);
}).catch(function(err) {
console.log(err);
});

// Define the slider and its options
var slider = document.getElementById('slider');
var yearRange = ['2011', '2014', '2017', '2018', '2022'];
noUiSlider.create(slider, {
start: [0, yearRange.length - 1],
connect: true,
range: {
'min': 0,
'max': yearRange.length - 1
}
});

// Update the map layers based on the slider value
slider.noUiSlider.on('update', function(values, handle) {
var selectedYears = values.map(function(value) { return yearRange[Math.round(value)]; });
voting_locations_2011.clearLayers();
voting_locations_2014.clearLayers();
voting_locations_2017.clearLayers();
voting_locations_2018.clearLayers();
voting_locations_2022.clearLayers();
selectedYears.forEach(function(year) {
switch(year) {
case '2011':
voting_locations_2011.addTo(map);
break;
case '2014':
voting_locations_2014.addTo(map);
break;
case '2017':
voting_locations_2017.addTo(map);
break;
case '2018':
voting_locations_2018.addTo(map);
break;
case '2022':
voting_locations_2022.addTo(map);
break;
default:
break;
}
});
});
</script>

</body>
</html>

