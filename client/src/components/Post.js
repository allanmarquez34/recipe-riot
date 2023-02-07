import React,{useState} from "react"
import { useHistory } from "react-router-dom"

function Post({onMakePost, user}){
    console.log(user)
    const [formData, setFormData] = useState({
        recipeName:"",
        recipeImage:"",
        recipeDescription:"",
        recipeIngredient:"",
        recipeDifficulty:"",
        prepTime:"",
        cookTime:""
    })

    const history = useHistory()
    
    function handleChange(event){
        setFormData({
         ...formData,
         [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(){
        const newPost = {
            recipe_name: formData.recipeName,
            recipe_image: formData.recipeImage,
            recipe_description: formData.recipeDescription,
            recipe_ingredient: formData.recipeIngredient,
            recipe_difficulty: formData.recipeDifficulty,
            prep_time: formData.prepTime,
            cook_time: formData.cookTime,
            user_id: user.id
        }
        fetch("/posts",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newPost),
        })
        .then((r) => r.json())
        .then(onMakePost)
        history.push(`/`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Post new recipe</h3>
                <label>Recipe Name</label>
                    <input 
                    id="recipe_name"
                    name="recipeName"
                    onChange={handleChange}
                    value={formData.recipeName}/>

                <label>Picture</label>
                    <input 
                    id="recipe_image"
                    name="recipeImage"
                    onChange={handleChange}
                    value={formData.recipeImage}/>
            
                <label>Description</label>
                    <input 
                    id="recipe_description"
                    name="recipeDescription"
                    onChange={handleChange}
                    value={formData.recipeDescription}/>
                       
                <label>Ingredients</label>
                    <input 
                    id="recipe_ingredient"
                    name="recipeIngredient"
                    onChange={handleChange}
                    value={formData.recipeIngredient}/>
                    
                <label>Difficulty</label>
                    <input 
                    id="recip_difficulty"
                    name="recipeDifficulty"
                    onChange={handleChange}
                    value={formData.recipeDifficulty}/>

                <label>Prep Time</label>
                    <input 
                    id="prep_time"
                    name="prepTime"
                    onChange={handleChange}
                    value={formData.prepTime}/>

                <label>cookTime</label>
                    <input 
                    id="cook_time"
                    name="cookTime"
                    onChange={handleChange}
                    value={formData.cookTime}/>
                <button type="submit">Post Recipe</button>
        </form>
    )

}
export default Post