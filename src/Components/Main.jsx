// import { useState } from "react"
import React from 'react'
import ProfileForm from './test'
// import avatar from './Images/user.png'
// import starEmpty from './Images/star-empty.png'
// import StarFilled from './Images/star-filled.png'

const Main = () => {
    /* Refracturing code from using onSubmit to action  */
    const ingredients = ["Apple 🍏", "Tomatoes 🍅", "Chicken 🐔"]
    const[ingredient, setIngredients] = React.useState(ingredients)
    const mapIngredients = ingredient.map((ingre) => {
        return(
            <li key={ingre}>{ingre}</li>
        )
    })
    function addIngredient(formData){
        // e.preventDefault()
        // Read the form data
        // const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredient) => {
            console.log(prevIngredient)
            return [...prevIngredient, newIngredient]
        })
    }
    console.log(ingredient)

     /*  React Forms */
    const [details, setDetails] = React.useState([])
    console.log(details)
    const mapDetails = details.map((detail) => {
        console.log(detail)
        return (
            <div  key={`${detail.email}-${detail.password}`} className='user-details'>
                <p key={detail.email}><strong>Email:</strong> {detail.email} </p>
                <p key={detail.password}><strong>Password:</strong> {detail.password} </p>
                <strong>Description:</strong>
                <p key={detail.description} className='description'> {detail.description} </p>
                <p key={detail.state} > <strong>State:</strong> {detail.state} state </p>
                <p key={detail.language}><strong>Favourite Language</strong> {detail.language} </p>
                <h3>List of Tech Stacks:</h3>
                <ul>
                    {detail.TechStack.map((stack) => {
                        return <li key={stack}> {stack} </li>
                    })}
                </ul>
            </div>
        )
    })
    const detailLogic = details.length === 0 
    ? <small>User details will show here...</small> : mapDetails
    const handleSubmit = (formData) => {
        /* <form action={handleSubmit}> 
        We pass a function to the action prop, and we are going to receive an formData as our value of the parameter of the function 
        or formData will be passed to the function as an argument, 
        so we can access the data submitted by the users. 
        So i want to asked that is this same way how it work if we put a backend file to the action too right? 
        And also i want to ask that in this console.log(dataObject) dataObject is an object 
        {email: 'caleb0@gmail.com', password: 'React02', description: ' Hello, I am Adelaja Caleb Akindele\n\n I am a Front…build and innovative web application for clients ', language: 'React.Js', TechStack: Array(4)}
        So i want to asked that in the object how are they getting the property name in that object there i know is from the name of the input right but how?
        */
        // console.log(event)
        console.log(formData)
        // event.preventDefault()
        // const form = event.currentTarget// get the whole form node, the currentTarget is the element where the (onSubmit) event handler was attached.
        // console.log(form)
        // const formData = new FormData(form)// create a new formData and pass in the whole form node right, Create a new FormData object using this form as the source of the data. "Create a FormData object and tell it to collect the data from this particular form."
        // console.log(formData)
        // console.log(FormData)
        const email = formData.get("email")//Here we get acces to the actual data from the form and use the name property in the input to get the data from the form. FormData, give me the value associated with the name email / Give me the value belonging to the field whose name is email.
        const password =formData.get("password")
        const lang = formData.get("language")
        const techStack = formData.getAll("TechStack")
        const description = formData.get("description")
        const state = formData.get("state")
        console.log(email)
        console.log(password)
        console.log(description)
        console.log(lang)
        console.log(techStack)
        console.log(`${state} state`)
        const dataObject = Object.fromEntries(formData.entries())//Here i turn the formData to a regular javascript object
        console.log(dataObject)
        dataObject.TechStack = techStack;
        console.log(dataObject)
        setDetails((prevDetails) => {
            console.log(prevDetails)
            return [
                ...prevDetails,
                dataObject
            ]
        })
        // form.reset()
    }
    
  return (
    <main>
        <form className="add-ingredient-form" action={addIngredient}>
            <label htmlFor="ingredient">
                <input 
                    type="text" 
                    name="ingredient" 
                    id="ingredient" 
                    defaultValue="Oregano"
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
            <form action={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id='email' 
                    name='email' 
                    defaultValue="caleb0@gmail.com"
                    placeholder='email'  
                    className='signup-input' 
                    
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id='password' 
                    name='password' 
                    placeholder='password' 
                    className='signup-input' 
                    
                />
                <br />
                <label htmlFor="description"></label>
                <textarea name="description" id="description" />
                <br />
                <label htmlFor="state">What state are you from</label>
                <select name="state" id="state" defaultValue="">
                    <option value="" disabled>-- Choose your state --</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Kwara">Kwara</option>
                </select>

                <br />

                <fieldset>
                    <legend>Favourite language</legend>
                        <label htmlFor="language">
                            <input type="radio" name='language' value="Javascript"/>
                            Javascript
                        </label>
                        <label htmlFor="language">
                            <input type="radio" name='language' value="React.Js"/>
                            React.Js
                        </label>
                        <label htmlFor="language">
                            <input type="radio" name='language' value="Next.Js"/>
                            Next.Js
                        </label>
                </fieldset>
                <fieldset>
                    <legend> Choose programming language you're familiar with </legend>
                        <label htmlFor="html">
                            <input type="checkbox" name='TechStack' id='html' value="HTML5" />
                            HTML5
                        </label>
                        <label htmlFor="css">
                            <input type="checkbox" name='TechStack' id='css' value="CSS3" />
                            CSS3
                        </label>
                        <label htmlFor="Javascript">
                            <input type="checkbox" name='TechStack' id='Javascript' value="JavaScript"/>
                            JavaScript
                        </label>
                        <label htmlFor="Typescript">
                            <input type="checkbox" name='TechStack' id='Typescript' value="TypeScript"/>
                            TypeScript
                        </label>
                        <label htmlFor="React">
                            <input type="checkbox" name='TechStack' id='React' value="React.Js"/>
                            React.Js
                        </label>
                        <label htmlFor="Next">
                            <input type="checkbox" name='TechStack' id='Next' value="Next.Js"/>
                            Next.Js
                        </label>
                        <label htmlFor="Node">
                            <input type="checkbox" name='TechStack' id='Node' value="Node.Js"/>
                            Node.Js
                        </label>
                        <label htmlFor="python">
                            <input type="checkbox" name='TechStack' id='python' value="Python"/>
                            Python
                        </label>
                        <label htmlFor="Django">
                            <input type="checkbox" name='TechStack' id='Django' value="Django"/>
                            Django
                        </label>
                        <label htmlFor="Java">
                            <input type="checkbox" name='TechStack' id='Java' value="Java"/>
                            Java
                        </label>
                        <label htmlFor="net">
                            <input type="checkbox" name='TechStack' id='net' value=".Net"/>
                            .Net
                        </label>
                        <label htmlFor="Golang">
                            <input type="checkbox" name='TechStack' id='Golang' value="GoLang"/>
                            GoLang
                        </label>
                        <label htmlFor="TechStack">
                            <input type="checkbox" name='TechStack' id='TechStack' value="Rust"/>
                            Rust
                        </label>
                </fieldset>
                
                <button className='sign-up-btn'>Submit</button>
            </form>
            <div className='user-details-container'>
                <h2>User Details</h2>
                {detailLogic}
            </div>
            
            
        </section>

    <ProfileForm />

    </main>
    
  )
}

export default Main
