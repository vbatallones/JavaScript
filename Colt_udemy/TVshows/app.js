const form = document.querySelector('#form')

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchValue = form.elements.q.value
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchValue}`)
    searchView(res.data)
    

})

const searchView = (shows) => {

    for (let result of shows) {
        if (result.show.image) {
            const newImg = document.createElement('img')
            newImg.src = result.show.image.medium
            document.body.append(newImg)
        }
    }
    
}