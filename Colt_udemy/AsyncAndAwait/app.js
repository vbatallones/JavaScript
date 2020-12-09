// ASYNC

const firstAndLastname = async (firstName, lastName) => {
    if (!firstName || !lastName) throw 'Please enter first name and last name';
    if (firstName === "Levin" && lastName === 'Batallones' ) return `Welcome Mr. ${firstName} ${lastName}`;
    throw 'Check your last name or first name'
}

firstAndLastname('Levin', 'Batallones')
.then(data => {
    console.log('Hello')
    console.log(data)
}) 
.catch(err => {
    console.log('Error')
    console.log(err)
})