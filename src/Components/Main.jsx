// import { useState } from "react"
import React from 'react'

const Main = () => {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    // console.log(isGoingOut) That is isGoingOut = true, so now isGoingOut is true
    const ans = isGoingOut === true ? "Yes" : "No"

    const answer = () => {
        setIsGoingOut ( (prevAns) => !prevAns )
    }
    
    const [count, setCount] = React.useState(0)
    function handleAdd(){
        setCount((prevCount) => prevCount + 1)
    }
    function handleMinus(){
        setCount((prevCount) => prevCount - 1)
    }

    // const myFavoriteFruite = []
    const [favoriteThing, setFavoriteThing] = React.useState([])//currently favoriteThing is empty array[], so the length of the array is 0.
    console.log(favoriteThing)//output is [] length: 0

    const allFavoriteThing = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

  const mapThings = favoriteThing.map((thing) => {
    return <p key={thing}>{thing}</p>
  })// Here we want to display and we are mapping from the the empty array that we currently have(Obviously it will display nothing to the page). 

  function addList(){
    setFavoriteThing((prevThing) => 
        [...prevThing, allFavoriteThing[prevThing.length]]
    )
  }
  /* function addList() is a function that is attached to a button inside the this function we have the setFavoriteThing once the button is clicked the function addList() run and what is inside it also. 

  setFavoriteThing is the updater that will change the state for us,inside the setFavoriteThing we have a callback function which holds the previous the state value. [...prevThing, allFavoriteThing[prevThing.length]] here we crated a new array we are suppose to use the .push method but in React we wouldn't want to use that bacuse we are just modifying the array but we are going to create a new array. 
  [...prevThing, allFavoriteThing[prevThing.length]] let's, break it down: first note that our favoriteThing here is an empty array which length will be 0 therefore (prevThing) which is the parameter of the callback function that will hold the prev value of the state and the our current state value is favoriteThing(which is an empty array) so definitely the prevThing will also be empty. 
  [...prevThing, allFavoriteThing[prevThing.length]] This ...prevThing means put or spread the previous value to the new array (this is just like spread operator and our previous value is empty)
  Trust me the second on looks tricky. allFavoriteThing[prevThing.length] But this is how it goes, allFavoriteThing contain all 10 items, 
  const allFavoriteThing = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  [prevThing.length] here prevThing.length is 0, how? because our prevThing is an empty so the lenght is 0. 
  Now that we have get prevThing.lenght as 0, so it will now be allFavoriteThing[0] 
  We are almost done with the second one, You know i said ealier that  allFavoriteThing is an array that contain all 10 item, and you know array count from 0 so now allFavoriteThing[0] will be "💦🌹" as the first index inside the allFavoriteThing array. Now the whole thing setFavoriteThing((prevThing) => [...prevThing, allFavoriteThing[prevThing.length]]) will now be setFavoriteThing("💦🌹") so our state has now update and once the state is updated our favoriteThing is not empty again favoriteThing now contain just on item, favoriteThing = ["💦🌹"] now the length is 1.
  Note don't forget that our favoriteThing state is not an empty array again setFavoriteThing has update the state and the length is 1 not 0 again. So if the button is clicked again the function addList() will run again and setFavoriteThing also.
  [...prevThing, allFavoriteThing[prevThing.length]] This will also run again now that out initial state favoriteThing contain one items("💦🌹") and the length is 1 so prevThing will hold the the previous value which is ["💦🌹"]. Therefore prevThing.length is now 1 so allFavoriteThing[prevThing.length] now becomes allFavoriteThing[1] and index 1 → "😺" which fall in the index of 1 [...prevThing, allFavoriteThing[prevThing.length]] becomes: [...["💦🌹"], "😺"]  ["💦🌹", "😺"] so setFavoriteThing(["💦🌹", "😺"]) Our state changes from: favoriteThing = ["💦🌹"] to: favoriteThing = ["💦🌹", "😺"] Now there are TWO items in the array. Therefore: favoriteThing.length = 2 Again, we did NOT manually change the length. JavaScript automatically knows the array has a length of 2 because there are two items inside it. React then renders the component again. map() now loops through: ["💦🌹", "😺"] So it displays: 💦🌹 😺 */


  return (
    <main>
        <form className="add-ingredient-form" >
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

        <div className='state-practice'>
            <h1>Is State Important in React</h1>
            <button onClick={answer} aria-label={`Current answer is ${ans} `}>{ans}</button>

            <div className="container">
                <h1>How many times will Bob say "state" in this section?</h1>
                <div className="counter">
                    <button className="minus" aria-label="Decrease count" onClick={handleMinus}>–</button>
                    <h2 className="count">{count}</h2>
                    <button className="plus" aria-label="Increase count"onClick={handleAdd} >+</button>
                </div>
            </div>

        </div>

        <div className='list-container'>
                <button className='list-btn' onClick={addList}>Add item</button>
                <section>
                    {mapThings}  
                </section>
        </div>
    </main>
    

    
  )
}

export default Main
