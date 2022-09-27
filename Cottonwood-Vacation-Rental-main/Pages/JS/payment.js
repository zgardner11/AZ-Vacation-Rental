// prerequisites 

//Initiate json folder with 'npm init -y'
//Install packages: 'npm i express ejs dotenv @paypal/checkout-server-sdk'
//Optional: install nodemon for live server changes. command: 'npm i --save-dev nodemon'
// import {loadScript} from "@paypal/paypal-js";

import { loadScript } from "@paypal/paypal-js";

let paypal;

try {
    paypal = await loadScript({ "client-id": "AX-saEjoC772LF4_aIQj4IaldHQ0_IkZIPiduFUBGc1OnNAaWXFwuU1myuFPwSjLHDsjuXyPqs3dI8Xi" });
} catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
}

if (paypal) {
    try {
        await paypal.Buttons({

            createOrder: (actions) => {
        
              // Set up the transaction
        
              return actions.order.create({
        
                purchase_units: [{
        
                  amount: {
        
                    value: '0.01'
        
                  }
        
                }]
        
              });
        
            },
            onApprove: (actions) => {
                return actions.order.capture().then(function(details) {
                    alert('Transaction completed by ' + details.payer.name.given_name)
                    ;
                });
            }
          }).render('#paypal');
    } catch (error) {
        console.error("failed to render the PayPal Buttons", error);
    }
};

