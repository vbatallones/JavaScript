"use strict"

const { chartreuse } = require("color-name");

function calculate() {
    const amount = document.getElementById('amount');
    const apr = document.getElementById('apr');
    const years = document.getElementById('years');
    const zipcode = document.getElementById('zipcode');
    const payment = document.getElementById('payment');
    const total = document.getElementById('total');
    const totalinterest = document.getElementById('totalinterest');

    // Get the user's input from the input elements. Assume it is all valid. 
    // Convert interest from a percentage to a decimal, and convert from
    // an annual rate to a monthly rate. Convert payment period in years
    // to the number of monthly payments.

    let principal = parseFloat(amount.value);
    let interest = parseFloat(apr.value) / 100 / 12;
    let payments = parseFloat(years.value) * 12;

    // Now compute the monthly payment figure.

    let x = Math.pow(1 + interest, payments); // Math.pow() computes powers.
    let monthly = (principal * x * interest) / (x - 1);

    /* If the result is a finite number, the user's input was good and we have meaningful results to display
     */

    if (isFinite(monthly)) {
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);


    // Save the user's input so we can restore it the next time they visit 
        save(amount.value, apr.value, years.value, zipcode.value);

    } else {
        payment.innerHTML = '';
        total.innerHTML = '';
        totalinterest.innerHTML = '';
        chart();
    }
}

