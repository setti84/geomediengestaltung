

// +++++++++++Events+++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

document.getElementById("button").addEventListener('click', (e) => {
	document.getElementById("dropdown").classList.toggle("show");
},false);

// ++++++++++++Map+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// prevents map init from starting without container, this script is used for various websites
if(document.getElementById("map")){

  const onMapClick = (e) => {
    window.open("https://www.sebastiansettgast.com/#" + e.latlng.lat +"/" + e.latlng.lng , "_blank");
  }

	const grayscale = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 16,
			id: 'mapbox.light',
			accessToken: 'pk.eyJ1Ijoic3RyYXVzc2JzdCIsImEiOiJKdmdTb0dnIn0.rjwb4txHi7xUr-TtxVpTOg'
		});
	
	const streets1 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 16,
			id: 'mapbox.streets',
			accessToken: 'pk.eyJ1Ijoic3RyYXVzc2JzdCIsImEiOiJKdmdTb0dnIn0.rjwb4txHi7xUr-TtxVpTOg'
		});

	const alexIcon = L.icon({
		iconUrl: 'image/test.PNG',
		iconSize:     [50, 30],
		});

	const pldRepIcon = L.icon({
		iconUrl: 'image/test.PNG',
		iconSize:     [50, 30],
		});

	const points = L.layerGroup();

	const markerAlex = L.marker([52.521918, 13.413215], {icon:alexIcon});
	markerAlex.bindPopup("<b>Klicke hier für VR</b><br><a href=https://de.wikipedia.org/wiki/Alexanderplatz> VR Version Alexanderplatz.</a><br> Quelle: Wikipedia");
	markerAlex.addTo(points);

	const repMarker = L.marker([52.518574, 13.373789], {icon:pldRepIcon});
	repMarker.bindPopup("<b>Klicke hier für VR</b><br><a href=https://de.wikipedia.org/wiki/Platz_der_Republik_(Berlin)>Infos Platz der Republik</a><br> Quelle: Wikipedia")
	repMarker.addTo(points);

	const baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets1
	};

	const overlays = {
		"Standort": points
	};

	const map = L.map('map', {layers:[streets1, points]}).setView([52.520008, 13.404954], 11);

	const layerControl = L.control.layers(baseLayers, overlays).addTo(map);

	map.on('click', onMapClick );

}




