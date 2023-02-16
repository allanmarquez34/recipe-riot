import React,{useState, useEffect} from "react"
import PostCard from "./PostCard"

function Home({posts, onSelectedPost}){

    const mappedPosts = posts.map(onePost => {

        return <PostCard
                key={onePost.id}
                posts={onePost}
                onSelectedPost={onSelectedPost}/>
    })
    
return(
    <div>
        {mappedPosts}
    </div>
)
}

export default Home