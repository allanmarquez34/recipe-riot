import React from "react"
import {useHistory, useParams} from "react-router-dom"

function EditPost({posts, onChangeForm, onEditPost}){
    const history = useHistory()
    const {id} = useParams()
    const {recipe_name, recipe_image} = posts

    function handleChange(event){
        onChangeForm(event.target.name, event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch(`/posts/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(posts),
         },)
         .then((r) => r.json())
         .then(onEditPost)
         history.push("/account")

    }

console.log(posts)
    return(
        <form className="container" onSubmit={handleSubmit}>
        <h3 className="postnew">Edit Recipe</h3>
            <label className="frlabel">Recipe Name</label>
                <input 
                id="recipe_name"
                name="recipe_name"
                onChange={handleChange}
                value={recipe_name}/>

            <label className="frlabel">Picture</label>
                <input 
                id="recipe_image"
                name="recipe_image"
                onChange={handleChange}
                value={recipe_image}/>
        
            <label className="frlabel">Description</label>
                <input 
                id="recipe_description"
                name="recipe_description"
                onChange={handleChange}
                value={posts.recipe_description}/>
                   
            <label className="frlabel">Ingredients</label>
                <input 
                id="recipe_ingredient"
                name="recipe_ingredient"
                onChange={handleChange}
                value={posts.recipe_ingredient}/>
                
            <label className="frlabel">Difficulty</label>
                <input 
                id="recip_difficulty"
                name="recipe_difficulty"
                onChange={handleChange}
                value={posts.recipe_difficulty}/>

            <label className="frlabel">Prep Time</label>
                <input 
                id="prep_time"
                name="prep_time"
                onChange={handleChange}
                value={posts.prep_time}/>

            <label className="frlabel">cookTime</label>
                <input 
                id="cook_time"
                name="cook_time"
                onChange={handleChange}
                value={posts.cook_time}/>
            <button class="button-28" role="button" type="submit">update Recipe</button>
    </form>
    )
}

export default EditPost