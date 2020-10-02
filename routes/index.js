'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    function calculate(method, x, y) {

        let xFloat = parseFloat(x);
        let yFloat = parseFloat(y);
        let result;

        if (method == "add") {
            result = x + " + " + y + " = " + (xFloat + yFloat);
        }
        else if (method == "subtract") {
            result = x + " - " + y + " = " + (xFloat - yFloat);
        }
        else if (method == "multiply") {
            result = x + " * " + y + " = " + (xFloat * yFloat);
        }
        else if (method == "divide") {
            result = x + " / " + y + " = " + (xFloat / yFloat);
        }
        else {
            result = "Error! Invalid method.";
        }

        return (result);

    }

    console.log(req.query.method);

    //call calculate method
    let method = req.query.method;
    let x = req.query.x;
    let y = req.query.y;
    let result = calculate(method, x, y);

    console.log(result);

    res.render('index', { title: 'Express', result: result });

});

module.exports = router;
