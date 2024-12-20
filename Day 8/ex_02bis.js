document.addEventListener("DOMContentLoaded", () => {
    const epitechSchools = [
        { city: "Paris", coords: [48.8566, 2.3522] },
        { city: "Lyon", coords: [45.7640, 4.8357] },
        { city: "Toulouse", coords: [43.6047, 1.4442] },
        { city: "Nantes", coords: [47.2184, -1.5536] },
        { city: "Bordeaux", coords: [44.8378, -0.5792] },
        { city: "Marseille", coords: [43.2965, 5.3698] },
    ];
    const map = L.map("map", { scrollWheelZoom: false }).setView([46.6034, 1.8883], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors',
    }).addTo(map);
    const markers = epitechSchools.map((school) => {
        const marker = L.marker(school.coords).addTo(map);
        marker.bindPopup(`${school.city} rocks!`);
        return marker;
    });
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds(), { padding: [50, 50] });
    map.setMaxBounds(group.getBounds());
});
