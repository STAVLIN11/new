function addToCart(name, price, image) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, image, qty: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(${name} added to cart!);
}

// Cart Page
if (location.pathname.includes('cart.html')) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div><strong>${item.name}</strong><br>₹${item.price} × ${item.qty}</div>
        <div>₹${item.price * item.qty}</div>
      `;
      container.appendChild(div);
      total += item.price * item.qty;
    });

    totalPrice.innerText = Total: ₹${total};
  }
}
