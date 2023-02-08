import react from "react"

function ProfilePosts({submissions, user}){



    return(
        <div> 
            <img src={user.image}/>
            <h3>{user.first_name}</h3>
            <p>@{user.username}</p>
            <img src={submissions.recipe_image}/>
            <h3>{submissions.recipe_name}</h3>
            <p>prep time: {submissions.prep_time} min</p>
            <p>cook time: {submissions.cook_time} min</p>
            <button>edit post</button>
            <button>delete post</button>
        </div>
    )
}

export default ProfilePosts 