import React from "react"
import {useHistory, useParams} from "react-router-dom"

function EditPost({posts, onChangeForm, onEditPost}){
    const history = useHistory()
    const {id} = useParams()

    function handleChange(e){
        onChangeForm(e.target.name, e.target.value)
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
    
console.log()
    // return(
    //     <form onSubmit={handleSubmit}>
    //     <h3>Edit Recipe</h3>
    //         <label>Recipe Name</label>
    //             <input 
    //             id="recipe_name"
    //             name="recipeName"
    //             onChange={handleChange}
    //             value={posts.recipe_name}/>

    //         <label>Picture</label>
    //             <input 
    //             id="recipe_image"
    //             name="recipeImage"
    //             onChange={handleChange}
    //             value={posts.recipe_image}/>
        
    //         <label>Description</label>
    //             <input 
    //             id="recipe_description"
    //             name="recipeDescription"
    //             onChange={handleChange}
    //             value={posts.recipeDescription}/>
                   
    //         <label>Ingredients</label>
    //             <input 
    //             id="recipe_ingredient"
    //             name="recipeIngredient"
    //             onChange={handleChange}
    //             value={posts.recipeIngredient}/>
                
    //         <label>Difficulty</label>
    //             <input 
    //             id="recip_difficulty"
    //             name="recipeDifficulty"
    //             onChange={handleChange}
    //             value={posts.recipeDifficulty}/>

    //         <label>Prep Time</label>
    //             <input 
    //             id="prep_time"
    //             name="prepTime"
    //             onChange={handleChange}
    //             value={posts.prepTime}/>

    //         <label>cookTime</label>
    //             <input 
    //             id="cook_time"
    //             name="cookTime"
    //             onChange={handleChange}
    //             value={posts.cookTime}/>
    //         <button type="submit">Post Recipe</button>
    // </form>
    // )
}

export default EditPost