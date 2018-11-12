var mymap = L.map('map').setView([52.520008, 13.404954], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {	
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1Ijoic3RyYXVzc2JzdCIsImEiOiJKdmdTb0dnIn0.rjwb4txHi7xUr-TtxVpTOg'
}).addTo(mymap);
			
var Alex_Icon = L.icon({
	iconUrl: 'image/Test.PNG',
	iconSize:     [50, 30], 
});					
var PldRep_Icon = L.icon({
	iconUrl: 'image/Test.PNG',
	iconSize:     [50, 30], 
});	
			
L.marker([52.521918, 13.413215], {icon:Alex_Icon}).addTo(mymap)
	.bindPopup("<b>Klicke hier für VR</b><br><a href=https://de.wikipedia.org/wiki/Alexanderplatz> VR Version Alexanderplatz.</a><br> Quelle: Wikipedia");
				
L.marker([52.518574, 13.373789], {icon:PldRep_Icon}).addTo(mymap)
	.bindPopup("<b>Klicke hier für VR</b><br><a href=https://de.wikipedia.org/wiki/Platz_der_Republik_(Berlin)>Infos Platz der Republik</a><br> Quelle: Wikipedia");


function onMapClick(e) {
	var popup = L.popup();
	popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(mymap);
	console.log(e)
	console.log(e.latlng.lat)
	window.open("https://www.sebastiansettgast.com/#" + e.latlng.lat +"/" + e.latlng.lng , "_blank");
	}

mymap.on('click', onMapClick);
	