// import { useState } from "react"
import React from 'react'

const Main = () => {

    const ingredients = ["Apple 🍏", "Tomatoes 🍅", "Chicken 🐔"]
    const[ingredient, setIngredients] = React.useState(ingredients)
    const mapIngredients = ingredient.map((ingre) => {
        return(
            <li key={ingre}>{ingre}</li>
        )
    })
    function addIngredient(e){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredient) => {
            console.log(prevIngredient)
            return [...prevIngredient, newIngredient]
        })
    }
    console.log(ingredient)
  return (
    <main>
        <form className="add-ingredient-form" onSubmit={addIngredient}>
            <label htmlFor="ingredient">
                <input 
                    type="text" 
                    name="ingredient" 
                    id="ingredient" 
                    placeholder="e.g peper, orange" 
                />
            </label>
            <button>Add Ingredient</button>
        </form>
        <h2>Ingredient on hand</h2>
        <ul>
            {mapIngredients}
        </ul>
    </main>
    
  )
}

export default Main
