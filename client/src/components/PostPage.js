import React, {useState, useEffect} from "react"
import CommentCard from "./CommentCard"
import {useParams} from "react-router-dom"

function PostPage({posts }){
    const user = posts?.user
    const [comment, setComment] = useState([])
    const [content, setContent] = useState("")
    const {id} = useParams()

console.log(id)
    useEffect(() => {
        fetch(`/post_comments/${id}`)
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
    console.log(comment)
    console.log(posts)

    // if (comment === undefined) return <h2>Loading...</h2>
    
    // const mappedComments = comment.map(comments => {
    //     return <CommentCard key={comments.id} comments={comments}/>
    // })

    const mappedComments = comment.map(comments => {
        return <commentCard key={comment.id} comments={comments}/>})

    console.log(user)

    return(
        <div className="container">
            <div>
                <div className="profileeeimage">
                    <img className="postprofileimage" src={user?.image}/>
                </div>
                <div className="postuser1">
                    <h3>{user?.first_name} {user?.last_name}</h3>
                    <p>@{user?.username}</p>
                </div>
                    <img className="postimage" src={posts?.recipe_image}/>
                    <h3>{posts?.recipe_name}</h3>
                    <p>prep time {posts?.prep_time} min | cook time {posts?.cook_time} min | difficulty level {posts?.recipe_diffuculty}</p>
                    <p>{posts?.recipe_ingredient}</p>
                    <p>{posts?.recipe_description}</p>
            </div>

            <div>
                {mappedComments}
            </div>

            {/* <div> */}
                {/* <h3>Comments</h3> */}

                {/* {comment ? comment?.map(comments => {
        return <CommentCard key={comments?.id} comments={comments}/>
    }): null */}

                {/* {mappedComments} */}
            {/* </div> */}

        </div>
    )
}

export default PostPage