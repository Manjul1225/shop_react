require('dotenv').config();

const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.VITE_SECRET_KEY_STRIPE);
const morgan = require('morgan');
const cors = require('cors');

// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('first page');
});

app.get('/config', (req, res) => {
    res.status(200).send({
        publishableKey: process.env.VITE_PUBLIC_KEY_STRIPE
    });
});

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            customer_email: req.body.email,
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map((item) => {
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.title
                        },
                        unit_amount: Number(item.price) * 100
                    },
                    quantity: item.number
                };
            }),
            success_url: `${process.env.CLIENT_URL}`,
            cancel_url: `${process.env.CLIENT_URL}`
        });

        res.status(200).send({ url: session.url });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message
            }
        });
    }
});

const PORT = process.env.PORT || 5252;

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
