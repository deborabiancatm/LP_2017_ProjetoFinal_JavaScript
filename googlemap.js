//função do googlemaps
function initMap() {
	var mydata = JSON.parse(data);

	var uluru = {lat: mydata[0].lat, lng: mydata[0].lng};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}