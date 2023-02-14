import react from "react"
import {NavLink, useHistory} from "react-router-dom"

function ProfilePosts({submissions, user, posts, onSelectedPost}){
    

    // function handleClick() {
    //     onSelectedPost(posts);
    //   }

    const history = useHistory()

    function handleClick(){
        history.push(`/edit_post/${posts.id}`)
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
            <button>delete post</button>
        </div>
    )
}

export default ProfilePosts 