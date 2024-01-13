export function loadAudiPage() {
  const appElement = document.getElementById('app');
  const headerImageUrl = 'img/audi-rs7.jpg';
  const cars = [
    { name: 'Audi A3 serie (2024)', price: 'ab €28.000', image: 'img/audi-a3.jpg', new: false },
    { name: 'Audi A4 serie (2024)', price: 'ab €35.000', image: 'img/audi-a4.jpg', new: false },
    { name: 'Audi A8 serie (2024)', price: 'ab €90.000', image: 'img/audi-a8.jpg', new: true },
    { name: 'Audi Q7 serie (2024)', price: 'ab €60.000', image: 'img/audi-q7.jpg', new: false },
    { name: 'Audi R8 serie (2024)', price: 'ab €165.000', image: 'img/audi-r8.jpg', new: false },
  ];

  let htmlContent = `
      <h1 class="page-title">Audi</h1>
      <p class="page-subtitle">Vorsprung durch Technik</p>
      <div class="cars-container">
        <div class="header-image">
          <img src="${headerImageUrl}" alt="Audi Header">
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
