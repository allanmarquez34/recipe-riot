import React, {useState, useEffect} from "react"
import CommentCard from "./CommentCard"

function PostPage({posts }){
    const user = posts.user 
    const [comment, setComment] = useState([])
    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(`/post_comments/${posts.id}`)
        .then((r) => r.json())
        .then((postComments) => setComment(postComments))
    }, [posts])

    function handleMakeComment(newComment){
        setComment([...comment, newComment])
    }
    
    function handleChange(event){
        setComment({
         ...comment,
         [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(){
        const newComment = {
            content: content,
            user_id: user.id,
            post_id: posts.id
        }

        fetch("/comments",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newComment),
        })
        .then((r) => r.json())
        .then(handleMakeComment)
    }

    const mappedComments = comment.map(comment => {
        return <CommentCard key={comment.id} comment={comment}/>
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

            <form onSubmit={handleSubmit}>
                <h3>What are your thoughts?</h3>
                <input onChange ={handleChange} value = {comment.content} type="text"/>
                <button>post comment</button>
            </form>

        </div>
    )
}

export default PostPage