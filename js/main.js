$(document).ready(function() {
	$('.menu').on('click',function(){
		$('.h-menu').slideToggle();
	});
	var map = L.map('map').setView([-12.184051, -76.95881], 15);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.marker([-12.184051, -76.95881]).addTo(map)
			.bindPopup('<b>Lamparería Abril</b>')
			.openPopup();
});