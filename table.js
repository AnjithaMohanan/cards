var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    let products = [
        {
            name: "iPHONE 13",
            category: "Mobile",
            description: "Make today magical",
            image: "https://tse4.mm.bing.net/th?id=OIP.AgpY3VtmbzDDL9h-LWPP5wHaIw&pid=Api&P=0"
        },
        {
            name: "Samsung Galaxy Note 9",
            category: "Mobile",
            description: "Good Phone",
            image: "https://tse2.mm.bing.net/th?id=OIP.3GUw8AUN1Hnx9BBsSOlV_AHaHa&pid=Api&P=0"
        },
        {
            name: "iPhone 14 pro max",
            category: "Mobile",
            description: "Good Phone",
            image: "https://tse1.mm.bing.net/th?id=OIP.VNjx1IuGuJpLTtzaaDz9BAHaJF&pid=Api&P=0"
        },
        {
            name: "OnePlus Nord N200",
            category: "Mobile",
            description: "Good Phone",
            image: "https://tse1.mm.bing.net/th?id=OIP.6tAeb0YfWosgtqaN7bfvIQHaJm&pid=Api&P=0"
        },
    ]

    res.render('table', { products });
});

module.exports = router;
