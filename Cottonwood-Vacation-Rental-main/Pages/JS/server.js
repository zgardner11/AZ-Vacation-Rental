const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
//return correct response

app.get('/', (req, res) => {
    res.render('payment', {
        paypalClientId:
         'AX-saEjoC772LF4_aIQj4IaldHQ0_IkZIPiduFUBGc1OnNAaWXFwuU1myuFPwSjLHDsjuXyPqs3dI8Xi',
    })
});

app.listen(PORT);