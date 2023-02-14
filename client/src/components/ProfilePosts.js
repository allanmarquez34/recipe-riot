import react from "react"
import {NavLink, useHistory} from "react-router-dom"

function ProfilePosts({submissions, user, posts, onSelectedPost, onPostDelete}){
    const history = useHistory()
    const {id} = posts

    function handleClick(){
        onSelectedPost(posts)
        history.push(`/edit_post/${posts.id}`)
    }

    const handleDeleteClick = () => {
        onPostDelete(id)
        fetch(`/posts/${id}`, {
            method: "DELETE"
        })
    }
    return(
        <div> 
            <img src={user.image}/>
            <h3>{user.first_name}</h3>
            <p>@{user.username}</p>
            <img src={submissions.recipe_image}/>
            <h3>{submissions.recipe_name}</h3>
            <p>prep time: {submissions.prep_time} min</p>
            <p>cook time: {submissions.cook_time} min</p>
                <button onClick={handleClick}>edit post</button>
            <button onClick={handleDeleteClick}>delete post</button>
        </div>
    )
}

export default ProfilePosts 