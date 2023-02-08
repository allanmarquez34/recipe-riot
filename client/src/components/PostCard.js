import React from "react"

function PostCard({posts}){
    const user = posts.user
    
return(
    <div>
        <img src={user.image}/>
        <h3>{user.first_name}</h3>
        <p>@{user.username}</p>
        <img src={posts.recipe_image}/>
        <h3>{posts.recipe_name}</h3>
        <p>prep time: {posts.prep_time} min</p>
        <p>cook time: {posts.cook_time} min</p>
    </div>
)

}

export default PostCard