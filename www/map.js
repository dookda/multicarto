"use strict"
var map = L.map("map", {
    // scrollWheelZoom: false,
    center: [18.802808, 98.950170],
    zoom: 15
});
//basemap
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
});

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

//overlaymap
var province = L.tileLayer.wms("https://rti2dss.com:8443/geoserver/th/wms?", {
    layers: "th:province_4326",
    format: "image/png",
    transparent: true
})

var amphoe = L.tileLayer.wms("https://rti2dss.com:8443/geoserver/th/wms?", {
    layers: "th:amphoe_4326",
    format: "image/png",
    transparent: true
})

var baseMap = {
    "แผนที่ OSM": osm,
    "แผนที่ OSM HOT": OpenStreetMap_HOT.addTo(map)
}

var overLaymap = {
    "ขอบเขตจังหวัด": province.addTo(map),
    "ขอบเขตอำเภอ": amphoe.addTo(map)
}

L.control.layers(baseMap, overLaymap).addTo(map)


