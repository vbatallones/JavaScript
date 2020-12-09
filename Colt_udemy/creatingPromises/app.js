const request = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.7) {
                resolve('Your data is in')
            }
            reject('ERROR, NO DATA FOUND!!')

        }, 3000)
    })
}

request('myData')
.then((data) => {
    console.log('Data success in here')
    console.log(data)
})
.catch((err) => {
    console.log(err)
})