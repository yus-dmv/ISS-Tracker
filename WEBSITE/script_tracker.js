// Initialisation de la carte
const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const issIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
});
let marker = L.marker([0, 0], { icon: issIcon }).addTo(map);

// Fonction pour récupérer la localisation de l'ISS
let firstLoad = true;

// Fonction pour récupérer la localisation de l'ISS
async function fetchISSLocation() {
    try {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const data = await response.json();

        const { latitude, longitude, altitude, velocity } = data;
        marker.setLatLng([latitude, longitude]);

        // Seulement recentrer la carte au premier chargement
        if (firstLoad) {
            map.setView([latitude, longitude], 3);
            firstLoad = false;
        }

        document.getElementById('latitude').textContent = latitude.toFixed(2);
        document.getElementById('longitude').textContent = longitude.toFixed(2);
        document.getElementById('altitude').textContent = altitude.toFixed(2);
        document.getElementById('speed').textContent = velocity.toFixed(2);
    } catch (error) {
        console.error("Erreur lors de la récupération de la localisation de l'ISS :", error);
    }
}


// Mise à jour toutes les 5 secondes
setInterval(fetchISSLocation, 5000);
document.addEventListener('DOMContentLoaded', fetchISSLocation);
