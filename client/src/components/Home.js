import React,{useState, useEffect} from "react"
import PostCard from "./PostCard"

function Home({posts}){

    const mappedPosts = posts.map(onePost => {

        return <PostCard
                key={onePost.id}
                posts={onePost}/>
    })
    
return(
    <div>
        {mappedPosts}
    </div>
)
}

export default Home