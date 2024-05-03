var map = L.map('map').setView([28.3949, 84.1240], 2);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

L.control.locate().addTo(map);

var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false,
}).on('markgeocode', function (e) {
    map.setView(e.geocode.center, 16);

    var marker = L.marker(e.geocode.center).addTo(map);
    marker.bindPopup(e.geocode.name).openPopup();
}).addTo(map);

var provider = new GeoSearch.OpenStreetMapProvider();
var searchControl = new GeoSearch.GeoSearchControl({
    provider: provider,
});
searchControl.addTo(map);

L.control.locate().addTo(map);
