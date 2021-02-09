async function getCommentsByUserId(userId) {
    let comments = [];
    await fetch('/api/comments')
    .then(response=> response.json())
    .then(data=>{
        data.forEach(comment=>{
            if(comment.userId === userId){
                comments.push(comment.data)
            }
        })
    })
    return comments;
}

module.exports = getCommentsByUserId;
