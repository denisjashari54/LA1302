export function loadMercedesPage() {
  const appElement = document.getElementById('app');
  const headerImageUrl = 'img/mercedes-header.jpg';
  const cars = [
    { name: 'Mercedes A-Klasse serie (2024)', price: 'ab €25.000', image: 'img/mercedes-aklasse.webp', new: false },
    { name: 'Mercedes C-Klasse serie (2024)', price: 'ab €35.000', image: 'img/mercedes-cklasse.jpeg', new: false },
    { name: 'Mercedes E-Klasse serie (2024)', price: 'ab €45.000', image: 'img/mercedes-eklasse.avif', new: true },
    { name: 'Mercedes AMG GT R', price: 'ab €165.000', image: 'img/mercedes-gtr.jpg', new: false },
    { name: 'Mercedes G-Klasse', price: 'ab €100.000', image: 'img/mercedes-gklasse.webp', new: false },
    { name: 'Mercedes SL-Klasse', price: 'ab €90.000', image: 'img/mercedes-slklasse.jpg', new: false },
  ];

  let htmlContent = `
      <h1 class="page-title">Mercedes</h1>
      <p class="page-subtitle">Die Welt von Mercedes</p>
      <div class="cars-container">
        <div class="header-image">
          <img src="${headerImageUrl}" alt="Mercedes Header">
        </div>
    `;

  cars.forEach(car => {
    htmlContent += `
        <div class="car">
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image">
                <button class="add-to-warenkorb" onclick="addToWarenkorb(${JSON.stringify(car)})">Zum Warenkorb hinzufügen</button>
            </div>
            <div class="car-info">
                <h2>${car.name}</h2>
                <p>${car.price}</p>
                ${car.new ? '<span class="new">NEU</span>' : ''}
            </div>
        </div>
    `;
  });

  htmlContent += '</div>';
  document.getElementById('app').innerHTML = htmlContent;
}
