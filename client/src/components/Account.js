import React, { useState, useEffect } from "react"
import ProfilePosts from "./ProfilePosts"

function Account({user, posts}){
    // console.log(posts)
    // console.log(user)

    // const profilePosts = []

    // posts.map((post) => {
    //     if(post.user_id === user.id)
    //         profilePosts.push(post)
    //         console.log(post.user_id)
    // })

    const [submissions, userSubmissions] = useState([])

    useEffect(() => {
        fetch(`/user_posts/${user.id}`)
        .then((r) => r.json())
        .then((userPosts) => userSubmissions(userPosts))
    }, [user])

    const mappedPosts = submissions.map(submission => {
        return <ProfilePosts key={submission.id} submissions={submission} user={user}/>
    })


    return(
        <div>
            <section>
                <h1>Profile</h1>
                <img src={user.background_image}/>
                <img src={user.image}/>
                <h2>welcome back {user.first_name}</h2>
                <h3>{user.first_name}</h3>
                <h3>{user.last_name}</h3>
                <h3>{user.email}</h3>
                <h3>{user.username}</h3>
            </section>
             <button>update user</button>
            <section>
                {mappedPosts}
            </section>
        </div>
    )
}

export default Account