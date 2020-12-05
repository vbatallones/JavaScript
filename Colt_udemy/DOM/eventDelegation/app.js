const happyForm = document.querySelector('#happyForm')
const commentsList = document.querySelector('#comments')

happyForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const username = happyForm.elements.name;
    const comment = happyForm.elements.comment;
    newComment(username.value, comment.value)
    username.value = '';
    comment.value = '';

})

const newComment = (username, comment) => {

    const newComment = document.createElement('li');
    const boldName = document.createElement('b');

    boldName.append(username)
    newComment.append(boldName)
    newComment.append(` - ${comment}`)
    commentsList.append(newComment)
    console.log(commentsList)
}

commentsList.addEventListener('click', function (e) {
    
    if (e.target.nodeName === 'LI') {
        e.target.style.textDecoration = 'line-through'
    }
})

