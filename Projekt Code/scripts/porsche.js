export function loadPorschePage() {
  const appElement = document.getElementById('app');
  const headerImageUrl = 'img/porsche-header.jpg';
  const cars = [
    { name: 'Porsche 911 serie (2024)', price: 'ab €120.000', image: 'img/porsche-911.jpg', new: true },
    { name: 'Porsche Panamera serie (2024)', price: 'ab €150.000', image: 'img/porsche-panamera.jpg', new: false },
    { name: 'Porsche Cayenne serie (2024)', price: 'ab €75.000', image: 'img/porsche-cayenne.jpg', new: false },
    { name: 'Porsche Taycan serie (2024)', price: 'ab €105.000', image: 'img/porsche-taycan.jpg', new: true },
  ];

  let htmlContent = `
      <h1 class="page-title">Porsche</h1>
      <p class="page-subtitle">Exklusive Sportlichkeit</p>
      <div class="cars-container">
        <div class="header-image">
          <img src="${headerImageUrl}" alt="Porsche Header">
        </div>
    `;

  cars.forEach(car => {
    htmlContent += `
        <div class="car">
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image">
                <button class="add-to-warenkorb">Zum Warenkorb hinzufügen</button>
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
  appElement.innerHTML = htmlContent;
}
