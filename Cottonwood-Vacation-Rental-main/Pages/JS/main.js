
//Hamburger menu for mobile navigation

// const { render } = require("ejs");

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Payment functionality
//(count number of days booked w/ active classes - 1)

   // let nightsBooked = '';
     // console.log(nightsBooked);
     
  let nightsBooked = document.querySelectorAll(".active").length;
  const rentalRate = 375;
  const totalPrice = rentalRate * nightsBooked;

function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',             
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
              "amount":{"currency_code":"USD","value":totalPrice}
            }]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }

  initPayPalButton();

