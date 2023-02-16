import React from "react"

function CommentCard({comment}){
    const user = comment.user

    return(
        <div>
            <img src ={user.image}/>
            <h3>{user.first_name} {user.last_name}</h3>
            <p>@{user.username}</p>
            <p>{comment.content} </p>
        </div>
    )
}

export default CommentCard