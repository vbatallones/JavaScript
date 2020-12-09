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