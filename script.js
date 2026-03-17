function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + ' added');
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let output = '';
  let total = 0;

  cart.forEach(item => {
    output += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });
 document.getElementById('cart-items').innerHTML = output;
  document.getElementById('total').innerText = 'Total: ₹' + total;
}
