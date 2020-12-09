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
// promise request

// request('myData')
// .then((data) => {
//     console.log('Data success in here')
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })

const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve() // this is a callBack that will run the next function
        }, delay)
    })
}

delayedColor('red', 1000)
// using implicit return
.then(() => delayedColor('orange', 1000))
.then(() => delayedColor('yellow', 1000))
.then(() => delayedColor('green', 1000))