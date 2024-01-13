const cartKey = 'autoSearchCart';

export const viewCart = () => {
  const cart = loadCart();
  let htmlContent = '<h1>Warenkorb</h1><div class="cars-container">';

  cart.forEach(item => {
    htmlContent += `
      <div class="car">
          <div class="car-image-container">
              <img src="${item.image}" alt="${item.name}" class="car-image">
          </div>
          <div class="car-info">
              <h2>${item.name}</h2>
              <p>${item.price}</p>
              <p>Menge: ${item.quantity}</p>
          </div>
      </div>
    `;
  });

  htmlContent += '</div>';
  document.getElementById('app').innerHTML = htmlContent;
};

const saveCart = (cart) => {
  localStorage.setItem(cartKey, JSON.stringify(cart));
};

export const addToCart = (car) => {
  const cart = loadCart();
  const itemIndex = cart.findIndex(item => item.name === car.name);

  if (itemIndex > -1) {
    cart[itemIndex].quantity += 1;
  } else {
    cart.push({ ...car, quantity: 1 });
  }

  saveCart(cart);
  alert('Es wurde erfolgreich hinzugefügt');
};

export const removeFromCart = (itemId) => {
  let cart = loadCart();
  cart = cart.filter(item => item.id !== itemId);
  saveCart(cart);
};



export const updateItemQuantity = (itemId, quantity) => {
  let cart = loadCart();
  const itemIndex = cart.findIndex(item => item.id === itemId);

  if (itemIndex > -1 && quantity > 0) {
    cart[itemIndex].quantity = quantity;
  } else if (itemIndex > -1 && quantity === 0) {
    cart = cart.filter(item => item.id !== itemId);
  }

  saveCart(cart);
};
