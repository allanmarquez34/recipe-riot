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
        <form onSubmit={handleSubmit}>
        <h3>Edit Recipe</h3>
            <label>Recipe Name</label>
                <input 
                id="recipe_name"
                name="recipeName"
                onChange={handleChange}
                value={recipe_name}/>

            <label>Picture</label>
                <input 
                id="recipe_image"
                name="recipeImage"
                onChange={handleChange}
                value={recipe_image}/>
        
            <label>Description</label>
                <input 
                id="recipe_description"
                name="recipeDescription"
                onChange={handleChange}
                value={posts.recipe_description}/>
                   
            <label>Ingredients</label>
                <input 
                id="recipe_ingredient"
                name="recipeIngredient"
                onChange={handleChange}
                value={posts.recipe_ingredient}/>
                
            <label>Difficulty</label>
                <input 
                id="recip_difficulty"
                name="recipeDifficulty"
                onChange={handleChange}
                value={posts.recipe_difficulty}/>

            <label>Prep Time</label>
                <input 
                id="prep_time"
                name="prepTime"
                onChange={handleChange}
                value={posts.prep_time}/>

            <label>cookTime</label>
                <input 
                id="cook_time"
                name="cookTime"
                onChange={handleChange}
                value={posts.cook_time}/>
            <button type="submit">update Recipe</button>
    </form>
    )
}

export default EditPost