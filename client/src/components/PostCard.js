import React from "react"
import {useHistory} from "react-router-dom"

function PostCard({posts, onSelectedPost}){
    const user = posts.user
    const history = useHistory()
    
    function handleClick(){
        onSelectedPost(posts)
        history.push(`/one_post/${posts.id}`)
    }

return(
    <div className="container"onClick ={handleClick}>
        <div className="profileeeimage">
            <img className="postprofileimage"src={user.image}/>
        </div>
        <div className="postuser">
            <h3>{user.first_name}</h3>
            <p>@{user.username}</p>
        </div>
        <div className="postcontainer">
            <img className="postimage"src={posts.recipe_image}/>
            <h3>{posts.recipe_name}</h3>
            <p>prep time: {posts.prep_time} min</p>
            <p>cook time: {posts.cook_time} min</p>
        </div>
    </div>
)

}

export default PostCard