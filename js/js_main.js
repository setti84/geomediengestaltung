

// +++++++++++Events+++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

document.getElementById("button").addEventListener('click', (e) => {
	document.getElementById("dropdown").classList.toggle("show");
},false);

// ++++++++++++Map+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Hintergdundkarten definieren je als Variable */
if(document.getElementById("map")){

var grayscale = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {	
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.light',
			accessToken: 'pk.eyJ1Ijoic3RyYXVzc2JzdCIsImEiOiJKdmdTb0dnIn0.rjwb4txHi7xUr-TtxVpTOg'
		}),
	
	streets1 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {	
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'pk.eyJ1Ijoic3RyYXVzc2JzdCIsImEiOiJKdmdTb0dnIn0.rjwb4txHi7xUr-TtxVpTOg'
		});


		/* Point Layer Gruppe */
		
/* Definitin der Bilder für die Icons*/	
var Alex_Icon = L.icon({
	iconUrl: 'image/Test.PNG',
	iconSize:     [50, 30], 
});				/* Definitin der Bilder für die Icons*/	
var PldRep_Icon = L.icon({
	iconUrl: 'image/Test.PNG',
	iconSize:     [50, 30], 
});	
/* Einzelne Punkte in einen Gruppenlayer setzen*/
var Points = L.layerGroup();			
	L.marker([52.521918, 13.413215], {icon:Alex_Icon})
		.bindPopup("<b>Klicke hier für VR</b><br><a href=https://de.wikipedia.org/wiki/Alexanderplatz> VR Version Alexanderplatz.</a><br> Quelle: Wikipedia").addTo(Points),
				
	L.marker([52.518574, 13.373789], {icon:PldRep_Icon})
		.bindPopup("<b>Klicke hier für VR</b><br><a href=https://de.wikipedia.org/wiki/Platz_der_Republik_(Berlin)>Infos Platz der Republik</a><br> Quelle: Wikipedia").addTo(Points);



/*hier werden die BaseLayers definert(Hintergund kann nur eins gleichzeitig aktiv sein) ( "AnzeigeName": VariablenName*/
	var baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets1
	};
/*hier werden die overlays definiert also die "Thematik" ("AnzeigeName": VariablenName)*/
	var overlays = {
		"Auswahl": Points
	};
	/*einbinden der Map in Div "maps" mit den Initiallayern Streets1 und Points sowie dem setView der Karte*/
	var mymap = L.map('map', {layers:[streets1, Points]}).setView([52.520008, 13.404954], 11);
	
	/*zusammenbau des Burger Menüs für die Layer, er erkennt automatische alle nicht angegeben layer*/
	L.control.layers(baseLayers, overlays).addTo(mymap);
	
	function onMapClick(e) {
		var popup = L.popup();
		popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(mymap);
		console.log(e)
		console.log(e.latlng.lat)
		window.open("https://www.sebastiansettgast.com/#" + e.latlng.lat +"/" + e.latlng.lng , "_blank");
	}
}




