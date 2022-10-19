//Hamburger menu for mobile navigation

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const userName = document.getElementById('name-book');
const userEmail = document.getElementById('email-book');
const date = document.getElementById('date-book');
const form = document.getElementById('contact-form');

// tell user the inputs are not filled out correctly

const showError = () => {

  //get form-field element
  const formField= input.parentElement;

  //add error class to form-field div
  formField.classList.remove('success');
  formField.classList.add('error');
  // add event listener for success class 

  form.addEventListener('submit', )


};










































// Payment functionality

//(count number of days booked w/ active classes - 1)

   // let nightsBooked = '';
     // console.log(nightsBooked);
     
let nightsBooked = document.querySelectorAll(".active").length;
const rentalRate = 199;
const totalPrice = rentalRate * 1;

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

