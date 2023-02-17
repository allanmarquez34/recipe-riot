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
   console.log(user)

    return(
        <div>
            <section className="profile">
                
                <div className="backgroundimagecontainer">
                    <img className="backgroundimage"src={user.background_image}/>
                </div>
                <div className="profileeimage">
                    <img className="profileimage"src={user.image}/>
                </div>
                <div className="username">
                <Link className="edituser" to="/edit_account">
                        <button class="button-27" role="button" >Update Profile Information</button>
                    </Link>
                    <h3 className="name">{user.first_name} {user.last_name}</h3>
                    <p className="user">@{user.username} | {user.email}</p>
                </div>
        
             </section>
            <section>
                {mappedPosts}
            </section>
        </div>
    )
}

export default Account