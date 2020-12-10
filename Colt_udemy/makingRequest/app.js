// XMLHTTP request
// old way of doing it

const req = new XMLHttpRequest();

req.onload = function () {
    console.log('ALL DONE WITH REQUEST!!')
    const data = JSON.parse(this.responseText)
    console.log(data.ticker.price)
}

req.onerror = function () {
    console.log("Error!!")
    console.log(this)
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send()


// fetch

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log('RESPONSE, waiting to parse', res)
    return res.json()
})
.then(data => {
    console.log('DATA PARSE')
    console.log(data.ticker.price)
})
.catch(err => {
    console.log('ERROR', err)
})

// Async and await

const fetchBitcoin = async() => {
    try {
        const req = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await req.json()
        console.log(data.ticker.price)
    } catch (e) {
        console.log('ERROR', e)
    }
}