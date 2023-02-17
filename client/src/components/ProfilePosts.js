import react from "react"
import {NavLink, useHistory} from "react-router-dom"

function ProfilePosts({submissions, user, posts, onSelectedPost, onPostDelete}){
    const history = useHistory()
    const {id} = posts

    function handleClick(){
        onSelectedPost(posts)
        history.push(`/edit_post/${posts.id}`)
    }

    function handlePostClick(){
        history.push("/one_post/:id")
    }

    const handleDeleteClick = () => {
        onPostDelete(id)
        fetch(`/posts/${id}`, {
            method: "DELETE"
        })
    }

    return(
        <section>
            <div className="container"> 
                <div onClick={handlePostClick}>
                <div className="profileeeimage">
                    <img className="postprofileimage" src={user.image}/>
                </div>
                <div className="postuser">
                    <h3>{user.first_name}</h3>
                    <p>@{user.username}</p>
                </div>
                <div className="postcontainer">
                <img className="postimage" src={submissions.recipe_image}/>
                    <h3>{submissions.recipe_name}</h3>
                    <p>prep time: {submissions.prep_time} min</p>
                    <p>cook time: {submissions.cook_time} min</p>
                </div>
                </div>
                    <div className="marginchange">
                        <button class="button-27" role="button" onClick={handleClick}>edit post</button>

                        <button  class="button-27" role="button" onClick={handleDeleteClick}>delete post</button>
                    </div>
                </div>
        </section>
    )
}

export default ProfilePosts 