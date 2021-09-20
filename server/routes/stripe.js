const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

// STRIPE_KEY is the Stripe secret Key used in the backend only. In Stripe Developer dashboard, we have also the published key that is used in Front End only
// Stripe fake credit card number: check stripe web site
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
