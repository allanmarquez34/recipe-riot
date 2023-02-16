import React, {useState, useEffect} from "react"
import CommentCard from "./CommentCard"

function PostPage({posts }){
    const user = posts.user 
    const [comment, setComment] = useState([])

    useEffect(() => {
        fetch(`/post_comments/${posts.id}`)
        .then((r) => r.json())
        .then((postComments) => setComment(postComments))
    }, [posts])

    const mappedComments = comment.map(comment => {
        return <CommentCard key={comment.id}/>
    })

    return(
        <div>
            <div>
                <img src={user.image}/>
                <h3>{user.first_name} {user.last_name}</h3>
                <p>@{user.username}</p>
                <img src={posts.recipe_image}/>
                <h3>{posts.recipe_name}</h3>
                <p>prep time {posts.prep_time} min | cook time {posts.cook_time} min | difficulty level {posts.recipe_diffuculty}</p>
                <p>{posts.recipe_ingredient}</p>
                <p>{posts.recipe_description}</p>
            </div>

            <div>
                <h3>Comments</h3>
                <div>{mappedComments}</div>
            </div>

        </div>
    )
}

export default PostPage