$(document).ready(function() {
  const cartItems = [];
  
  $('.add-to-cart').click(function() {
    const itemName = $(this).data('name');
    const itemPrice = $(this).data('price');

    cartItems.push({ name: itemName, price: itemPrice });
    displayCart();
  });

  $(document).on('click', '.remove-item', function() {
    const index = $(this).data('index');
    cartItems.splice(index, 1);
    displayCart();
  });

  $('.clear-cart').click(function() {
    cartItems.length = 0;
    displayCart();
  });

  $('.submit-order').click(function() {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
    } else {
      const orderList = cartItems.map(item => `${item.name} - $${item.price}`).join('\n');
      const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
      alert(`Your order:\n${orderList}\nTotal: $${totalPrice}`);


      cartItems.length = 0;
      displayCart();
    }
  });

  function displayCart() {
    const cartList = $('.cart-items');
    const cartTotal = $('#cart-total');
    let total = 0;

    cartList.empty();

    cartItems.forEach(function(item, index) {
      const li = $('<li></li>').text(item.name + ' - $' + item.price);
      const removeButton = $('<button class="remove-item">Remove</button>').data('index', index);
      li.append(removeButton);
      cartList.append(li);
      total += item.price;
    });

    cartTotal.text(total);
  }
});
