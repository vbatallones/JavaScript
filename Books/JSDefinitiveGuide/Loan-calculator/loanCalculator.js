"use strict"

    const amount = document.getElementById('amount');
    const apr = document.getElementById('apr');
    const years = document.getElementById('years');
    const payment = document.getElementById('payment');
    const total = document.getElementById('total');
    const totalinterest = document.getElementById('totalinterest');
    const graph = document.getElementById('graph');

function calculate() {
    
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
        payment.innerHTML = new Intl.NumberFormat().format(monthly.toFixed(2));
        total.innerHTML = new Intl.NumberFormat().format((monthly * payments).toFixed(2))
        totalinterest.innerHTML = new Intl.NumberFormat().format(((monthly * payments) - principal).toFixed(2));

    // Save the user's input so we can restore it the next time they visit 
    chart(principal, interest, monthly, payments);
        save(amount.value, apr.value, years.value);

    } 
}
function resetCalc () {
    document.getElementById('amount').value = ''
    document.getElementById('apr').value = ''
    document.getElementById('years').value = ''
    payment.innerHTML = '';
    total.innerHTML = '';
    totalinterest.innerHTML = '';
    chart()
}
const save = (amount, apr, years) => {
    if (window.localStorage) {
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
    }
};

// Automatically attempt to restore input fields when the document first loads.
window.onload = () => {
    // If the browser supports localStorage and we have some stored data
    if (window.localStorage && localStorage.loan_amount) {
        document.getElementById("amount").value = localStorage.loan_amount;
        document.getElementById("apr").value = localStorage.loan_apr; 
        document.getElementById("years").value = localStorage.loan_years;
    }
}

const chart = (principal, interest, monthly, payments) => {

    graph.width = graph.width // to clear and reset the canvas element.

    let g = graph.getContext('2d') // all drawing is done with this object
    let width = graph.width, height = graph.height; // get canvas size

    // These functions convert payment numbers and dollar amounts to pixels

    const paymentToX = (n) => n * width/payments;
    const amountToY = (a) => height-(a * height/(monthly * payments * 1.05))

    // Start at lower left
    g.moveTo(paymentToX(0), amountToY(0));
    // Draw to upper right
    g.lineTo(paymentToX(payments), amountToY(monthly * payments));
    g.lineTo(paymentToX(payments), amountToY(0)); g.closePath();
    g.fillStyle = "#FFD700";
    g.fill();
    g.font = "bold 12px sans-serif"; 
    g.fillText("Total Interest Payments", 20,20);
    let equity = 0;
    g.beginPath();
    g.moveTo(paymentToX(0), amountToY(0));
    for(let p = 1; p <= payments; p++) {
        let thisMonthsInterest = (principal-equity)*interest;
        equity += (monthly - thisMonthsInterest); 
        g.lineTo(paymentToX(p),amountToY(equity))
    }
    g.lineTo(paymentToX(payments), amountToY(0)); 
    g.closePath();
    g.fillStyle = "#6B8E23";
    g.fill();
    g.fillText("Total Equity", 20,35);
    // Loop again, as above, but chart loan balance as a thick black line 
    let bal = principal;
    g.beginPath();
    g.moveTo(paymentToX(0),amountToY(bal));
    for(let p = 1; p <= payments; p++) {
        let thisMonthsInterest = bal*interest; bal -= (monthly - thisMonthsInterest); 
        g.lineTo(paymentToX(p),amountToY(bal));
    }
    g.lineWidth = 3
    g.stroke();
    g.fillStyle = "black";
    g.fillText("Loan Balance", 20,50);
    g.textAlign="center";
    let y = amountToY(0);
    for(let year=1; year*12 <= payments; year++) {
    
        let x = paymentToX(year*12); 
        g.fillRect(x-0.5,y-3,1,3);
        if (year == 1) g.fillText("Year", x, y-5); 
        if (year % 5 == 0 && year*12 !== payments)
        g.fillText(String(year), x, y-5);
    }
        g.textAlign = "right";
        g.textBaseline = "middle";
        let ticks = [monthly*payments, principal]; 
        let rightEdge = paymentToX(payments); 
        for(let i = 0; i < ticks.length; i++) {
            let y = amountToY(ticks[i]);
            g.fillRect(rightEdge-3, y-0.5, 3,1); 
            g.fillText(String(ticks[i].toFixed(0)), rightEdge-5, y);
        }
}