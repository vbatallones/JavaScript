// ASYNC

const firstAndLastname = async (firstName, lastName) => {
    if (!firstName || !lastName) throw 'Please enter first name and last name';
    if (firstName === "Levin" && lastName === 'Batallones' ) return `Welcome Mr. ${firstName} ${lastName}`;
    throw 'Check your last name or first name'
}

// firstAndLastname('Levin', 'Batallones')
// .then(data => {
//     console.log('Hello')
//     console.log(data)
// }) 
// .catch(err => {
//     console.log('Error')
//     console.log(err)
// })

// ------------------------------------------

//AWAIT

async function makeRequest() {
    try {
        let myData = await firstAndLastname('Levin', 'Batallones');
        console.log(myData)
    } catch(e) {
        console.log("There's an error")
    }
}

makeRequest()