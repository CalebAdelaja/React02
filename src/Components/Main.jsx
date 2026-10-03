// import { useState } from "react"
import React from 'react'
import avatar from './Images/user.png'
import starEmpty from './Images/star-empty.png'
import StarFilled from './Images/star-filled.png'

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
    /* Object in state */
    const[contacts, setContact] = React.useState({
        firstName: "Native",
        lastName: "Coder",
        phone: "+234 805 052 1459",
        email: "caleb0@gmail.com",
        isFavorite: true
    })
    /* Here, contact is an object stored inside React state. The object contains five properties: firstName, lastName, phone, email, isFavorite and each has their value. So, contacts.firstName is Ade, contact.lastName is Caleb, contact.phone is +234 805 052 1459, contact.email is caleb0@gmail.com, contact.isFavorite is true.
    changing an object in state, if you do contacts.firstName = Bolu and  contact.lastName = chris it can't change the state, but you're just change the javascript object and you're modifying, Note: Don't directly modify the existing object. Instead create a new object and give it to the setter.
    setContact(
        firstName: "Bolu"
        lastName = "Chris"
    )
    But what if I only want to change one property i can:
    setPerson({
        name: "John"
    }) but there's a problem here, you eventually saying i create a new object that only has one property 
    So how do we preserve the other properties, by using the spread operator: 
    setPerson({
        ...contact //you're essentially spreading its properties into a new object
        name: "John"
    }) 
    Updating an object using the previous state. Instead of applying changes we all know we need a callback function to hold the previous value the we are going to applychanges to the previous vlaue itself. 
    setContact((prevContact) => {
      return {
        ...prevContact,
        
      }  
    })
    */

    console.log(contacts);
    /* When the button star is clicked it showed update to filled star if isFavorite is false it should be empty and if isFavorite is true it should be filled */
    
    const startToggle = contacts.isFavorite === true ? StarFilled : starEmpty

    const toggleFavorite = function(){
        console.log("Added to Favorite")
        setContact((prevContact) => {
            return {
                ...prevContact,
                firstName: prevContact.firstName = "Ade",
                lastName: prevContact.lastName = "Caleb",
                isFavorite: prevContact.isFavorite === false
            }
        })
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

        <article className="card">
            <img
                src={avatar}
                className="avatar"
                alt="User profile picture of John Doe"
            />
            <div className="info">
                <button
                    onClick={toggleFavorite}
                    aria-pressed={startToggle}
                    aria-label={contacts.isFavorite ? "Remove to Favorites" : "Add to Favorite" }
                    className="favorite-button"
                >
                    <img
                        src={startToggle}
                        alt={contacts.isFavorite ? "filled star" : "empty star icon"}
                        className="favorite"
                    />
                </button>
                <h2 className="name">
                    {`${contacts.firstName} ${contacts.lastName}`} 
                </h2>
                <p className="contact">{contacts.phone}</p>
                <p className="contact">{contacts.email}</p>
            </div>

        </article>

    </main>
    
  )
}

export default Main
