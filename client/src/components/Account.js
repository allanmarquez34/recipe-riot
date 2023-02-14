import React, { useState, useEffect } from "react"
import ProfilePosts from "./ProfilePosts"
import { Link } from "react-router-dom"

function Account({user, posts, onSelectedPost, onPostDelete}){
    const [submissions, userSubmissions] = useState([])

    useEffect(() => {
        fetch(`/user_posts/${user.id}`)
        .then((r) => r.json())
        .then((userPosts) => userSubmissions(userPosts))
    }, [user])

    const mappedPosts = submissions.map(submission => {
        return <ProfilePosts key={submission.id}
                             submissions={submission}
                              user={user} posts={submission}
                               onSelectedPost={onSelectedPost}
                               onPostDelete={onPostDelete}/>
    })
   

    return(
        <div>
            <section>
                <h1>Profile</h1>
                <img src={user.background_image}/>
                <img src={user.image}/>
                <h3>{user.first_name} {user.last_name}</h3>
                <p>@{user.username} {user.email}</p>
            </section>
             <Link to="/edit_account">update user</Link>
            <section>
                {mappedPosts}
            </section>
        </div>
    )
}

export default Account