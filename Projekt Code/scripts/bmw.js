export function loadBMWPage() {
  const appElement = document.getElementById('app');
  const headerImageUrl = 'img/bmw-header.webp';
  const cars = [
    { name: 'BMW 3er serie (2024)', price: 'ab €40.000', image: 'img/bmw-3series.jpg', new: true },
    { name: 'BMW 5er serie (2024)', price: 'ab €55.000', image: 'img/bmw-5series.jpg', new: false },
    { name: 'BMW X5 serie (2024)', price: 'ab €75.000', image: 'img/bmw-x5.jpg', new: false },
    { name: 'BMW i8 serie (2024)', price: 'ab €140.000', image: 'img/bmw-i8.jpg', new: true },
    { name: 'BMW M4 serie (2024)', price: 'ab €80.000', image: 'img/bmw-m4.jpg', new: false },
  ];

  let htmlContent = `
      <h1 class="page-title">BMW</h1>
      <p class="page-subtitle">Freude am Fahren</p>
      <div class="cars-container">
        <div class="header-image">
          <img src="${headerImageUrl}" alt="BMW Header">
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
  document.getElementById('app').innerHTML = htmlContent;
}
