// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}


// making request from the past
// success or failure request nesting callbacks
fakeRequestCallback('levin.com',
    function (response) {
        console.log('Success!!')
        console.log(response)
        fakeRequestCallback('levin.com/POGI',
            function (response) {
                console.log('2nd request Success!!')
                console.log(response)
                fakeRequestCallback('levin.com/POGIpogi',
                function (response) {
                    console.log('3nd request Success!!')
                    console.log(response)
                },
                function (err) {
                    console.log('3rd ERROR', err)
                })
            },
            function (err) {
                console.log('2nd ERROR', err)
            })
    },
    function (err) {
        console.log('ERROR', err)
    })

//-------------------------------------------------------------

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// Promise request

fakeRequestPromise('levinlevin.com/1')
    .then(() => {
        console.log('Promise Success 1')
        fakeRequestPromise('levinlevin.com/2')
            .then(() => {
                console.log('Promise Success 2')
                fakeRequestPromise('levinlevin.com/3')
                    .then(() => {
                        console.log('Promise Success 3')
                    })
                    .catch(() => {
                        console.log('Promise Error')
                    })
            })
            .catch(() => {
                console.log('Promise Error')
            })
    })
    .catch(() => {
        console.log('Promise Error')
    })

    //cleaner request promise with return

    fakeRequestPromise('hello.com/1')
    .then((response) => {
        console.log('Success call 1')
        console.log(response)
        return fakeRequestPromise('hello.com/2')
    })
    .then((response) => {
        console.log('Success call 2')
        console.log(response)
        return fakeRequestPromise('hello.com/3')
    })
    .then((response) => {
        console.log('Success call 3')
        console.log(response)
    })
    .catch((err) => {
        console.log('Error', err)
    })