// import { useState } from "react"
import React from 'react'
// import avatar from './Images/user.png'
// import starEmpty from './Images/star-empty.png'
// import StarFilled from './Images/star-filled.png'

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
        // Readthe form data
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredient) => {
            console.log(prevIngredient)
            return [...prevIngredient, newIngredient]
        })
    }
    console.log(ingredient)

    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault()
        const form = event.currentTarget// get the whole form node, the currentTarget is the element where the event handler was attached.
        console.log(form)
        const formData = new FormData(form)// create a new formData and pass in the whole form node right, Create a new FormData object using this form as the source of the data. "Create a FormData object and tell it to collect the data from this particular form."
        console.log(formData)
        console.log(FormData)
        const email = formData.get("email") //Here we get acces to the actual data from the form and use the name property in the input to get the data from the form. FormData, give me the value associated with the name email / Give me the value belonging to the field whose name is email.
        console.log(email)
        const password =formData.get("password")
        console.log(password)
        form.reset()
    }
    
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

        <section>
            <h1>Signup Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' name='email' placeholder='email'  className='signup-input' />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' name='password' placeholder='password' className='signup-input'/>

                <button className='sign-up-btn'>Submit</button>
            </form>
        </section>

    </main>
    
  )
}

export default Main
