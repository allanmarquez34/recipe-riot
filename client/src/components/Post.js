import React,{useState} from "react"
import { useHistory } from "react-router-dom"

function Post({onMakePost, user}){
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
        <form onSubmit={handleSubmit} className="container">
            <h3 className="postnew">Post new recipe</h3>
                <label className="frlabel">Recipe Name</label>
                    <input 
                    id="recipe_name"
                    name="recipeName"
                    onChange={handleChange}
                    value={formData.recipeName}/>

                <label className="frlabel">Picture</label>
                    <input 
                    id="recipe_image"
                    name="recipeImage"
                    onChange={handleChange}
                    value={formData.recipeImage}/>
            
                <label className="frlabel">Description</label>
                    <input 
                    id="recipe_description"
                    name="recipeDescription"
                    onChange={handleChange}
                    value={formData.recipeDescription}/>
                       
                <label className="frlabel">Ingredients</label>
                    <input 
                    id="recipe_ingredient"
                    name="recipeIngredient"
                    onChange={handleChange}
                    value={formData.recipeIngredient}/>
                    
                <label className="frlabel">Difficulty</label>
                    <input 
                    id="recip_difficulty"
                    name="recipeDifficulty"
                    onChange={handleChange}
                    value={formData.recipeDifficulty}/>

                <label className="frlabel">Prep Time</label>
                    <input 
                    id="prep_time"
                    name="prepTime"
                    onChange={handleChange}
                    value={formData.prepTime}/>

                <label className="frlabel">cookTime</label>
                    <input 
                    id="cook_time"
                    name="cookTime"
                    onChange={handleChange}
                    value={formData.cookTime}/>
                    <div className="updatebutton">
                <button  class="button-28" role="button" type="submit">Post Recipe</button>
                </div>
        </form>
    )

}
export default Post