const map = L.map('map').setView([33.8886, 35.4955], 8); // Default center on Lebanon

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

fetch('mapData.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(loc => {
      const marker = L.marker([loc.lat, loc.lng]).addTo(map);
      const imagesHTML = Array.isArray(loc.images)
        ? loc.images.map(src => `
            <a href="${src}" data-lightbox="${loc.title}">
              <img src="${src}" class="popup-img" />
            </a>
          `).join('')
        : '';

      const popupHTML = `
        <strong>${loc.title}</strong><br/>
        ${imagesHTML}
        <p>${loc.description}</p>
      `;
      marker.bindPopup(popupHTML);
    });
  });