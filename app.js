let map = L.map('map').setView([52.37, 4.89], 13); // Amsterdam

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    L.marker([lat, lon]).addTo(map)
      .bindPopup('Je bent hier!').openPopup();
    map.setView([lat, lon], 15);
  });
}