import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

    <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
    </section>

    <div className="ticks"></div>

    <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
    </section>

    <div className="ticks"></div>
    <section id="spacer"></sectiion 


@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}

.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}

click event listener in React 
/* const click = function (){
    return (
       console.log("CLICKED!")
    )
} */
/*  <button MouseEnter={click} className="test-btn">Click Me!</button> */

const ingredients = ["Chicken", "Oregano", "Tomatoes"]
const mapIngredient = ingredients.map((ingredient) => {
  return (
   <li key={ingredient}>{ingredient}</li>
  )
}) 

  const click = function (e){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredients.push(newIngredient)
    console.log(ingredients)
  } 
  onSubmit={click} onSubmit is a event listner for submitting form data from the input for the form, it was passed to the form
<h2>Ingredient on hand</h2>
<ul>{mapIngredient}</ul> 

const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [items, setItem] = React.useState(ingredients)
    console.log(items)
    const click = function (e){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")

        setItem(
            (previousItems) => {
              return [...previousItems, newIngredient]
            }
        )
        
    }

    const mapItem = items.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

const [result, setResult] = React.useState("Hello");
# <button onClick={() =>  setResult("Fine!")}>{result}</button>
// so now the second value in the array state is a function, if we call the function and pass a value to the function the state update . But know that we can't call this function inside the function component else we are going to get an error instead we add to button
// const result = useState()
console.log(result);//console.log(result[0]); here we are we have result[0], so [0] means just give the first value in the arrat because this will return an array. we can use array destructuring instead of manually accessing value using index like this: result[0] we can write it has const [result, func] = React.useState("Hello"), we can see const [result, func] this is a way of destructuring array. we have [result, func] here result is the first value in the array and function is the second value in the array. You know the useState will return an array, and we pass "Hello" which is the initial value of the state so the output array will be [Hello, ƒ()] so as we have now destructure the array reuslt will be equal to "Hello" as the first value, and f() will be the second value. 


/* .test-btn {
  font-family: Inter, sans-serif;
  border-radius: 6px;
  border: none;
  background-color: #141413;
  color: #FAFAF8;
  width: 150px;
  font-size: 0.875rem;
  font-weight: 500;
} */

.state-practice {
  /* display: flex; */
  text-align: center;
}

.state-practice > button {
  color: white;
  width: 100px;
  height: 100px;
  text-align: center;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 50%;
  background-color: #141413;
  font-weight: 700;
  font-size: 2rem;
}

.container {
  display: flex;
  flex-direction: column;
}

.container > h1 {
  font-size: 1.5rem;
  margin-top: 0;
}

.counter {
  display: flex;
  align-items: flex-end;
  align-self: center;
  margin-top: 40px;
}

.counter > button {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #737373;
  color: #D9D9D9;
  font-size: 1.5rem;
}

.counter > button:hover {
  background-color: #404040;
  color: #D9D9D9;
}

.count {
  background-color: white;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #262626;
  margin-block: 0 10px;
  font-size: 2rem;
}

.plus {
  margin-left: -20px;
}

.minus {
  margin-right: -20px;
  z-index: 1;
}

<div className='state-practice'>
  <h1>Is State Important in React</h1>
  <button onClick={answer} aria-label={`Current answer is ${ans} `}>{ans}</button>

  <div className="container">
    <h1>How many times will Bob say {ans} in this section?</h1>
    <div className="counter">
      <button className="minus" aria-label="Decrease count" onClick={handleMinus}>–</button>
      <h2 className="count">{count}</h2>
      <button className="plus" aria-label="Increase count"onClick={handleAdd} >+</button>
    </div>
  </div>
</div>

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


.list-container {
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 70%;
  margin-inline: auto;
  margin-top: 32px;
  box-sizing: border-box;
  min-height: 60vh;
  padding: 24px;
  background-color: #64ad52;
}

.list-btn {
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 3px solid #fff;
  padding: 1rem;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Karla', sans-serif;
  margin-bottom: 20px;
}

.list-btn:hover {
  background-color: #f2f7f0;
  color: #2C5E2E;
}

.list-btn:focus {
  outline: 0;
}

<div className='list-container'>
  <button className='list-btn' onClick={addList}>Add item</button>
  <section>
    {mapThings}  
  </section>
</div>

// const myFavoriteFruite = []
const [favoriteThing, setFavoriteThing] = React.useState([])//currently favoriteThing is empty array[], so the length of the array is 0.
console.log(favoriteThing)//output is [] length: 0

const allFavoriteThing = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

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
        firstName: "Bolu"
        lastName = "Chris"
    }) 
    Updating an object using the previous state. Instead of applying changes we need a callback function that holds the previous value of the state then we are going to apply changes to the previous vlaue itself not directly to the state
    setContact((prevContact) => {
      return {
        ...prevContact,
        fistName: prevContact.firstName = "Bolu"
        lastName: prevContact.lastName ="Chris"
      }  
    }) Notice what we did here with the prevContact we fistName: prevContact.firstName = "Bolu". Here, prevContact is the variable that contains the entire previous object. If the previous state is:
    { firstName: "Native", lastName: "Coder", phone: "+234 805 052 1459",email: "caleb0@gmail.com", isFavorite: true } then prevContact will be: { firstName: "Native", lastName: "Coder", phone: "+234 805 052 1459", email: "caleb0@gmail.com", isFavorite: true } so you know we are not changing the value directly we have to use the prevContact. so if we want to change anything we have to acces the propery inside the prevContact and get it's value let's say firstName: "Native" so to access the property value of firstName we can do prevContact.firstName and get the value. 
    */

    console.log(contacts);
    /* When the button star is clicked it showed update to filled star if isFavorite is false it should be empty and if isFavorite is true it should be filled */
    
    const startToggle = contacts.isFavorite === true ? StarFilled : starEmpty

    const toggleFavorite = function(){
        console.log("Added to Favorite")
        setContact((prevContact) => {
            console.log(prevContact)
            console.log(typeof(prevContact))
            return {
                ...prevContact,
                firstName: "Ade",
                lastName: "Caleb",
                isFavorite: prevContact.isFavorite === false
            }
        })
    }
    /* isFavorite: prevContact.isFavorite === false 
    This line is calculating the NEW value that the "isFavorite" property should have. isFavorite This is the property we are creating/updating in the NEW object. You know prevContact is the previous/old state object { firstName: "Native", lastName: "Coder", phone: "+234 805 052 1459", email: "caleb0@gmail.com", isFavorite: true } So "prevContact" represents that whole object. So we do prevContact.isFavorite means: "Go inside the prevContact object and get the value stored in the isFavorite property." The old object is: { isFavorite: true } then prevContact.isFavorite gives us: true
    "===" is a comparison operator.It asks: "Is the value on the left exactly equal to false?" This give either true or false. So when we do prevContact.isFavorite which is true and we compare it to false after the first click of a button it will now be true === false means: "Is true exactly equal to false?" Answer: false and compare again after the seconf click of a button false === false means: "Is false exactly equal to false?" Answer: true
    Putting everything together The complete expression is: prevContact.isFavorite === false JavaScript first gets the old value: prevContact.isFavorite Then it compares that value with false.
    */ 
 
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

.card {
  background-color: #0C4A6E;
  width: 200px;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: 350px;
}

.card .avatar {
  width: 80%;
  padding: 10%;
  padding-bottom: 0;
}

.card .name {
  margin-block: 13px;
  color: #fff;
}

.card .info {
  padding: 10px;
}

.card .favorite {
  width: 25px;
  cursor: pointer;
}

.card .contact {
  font-size: 0.75rem;
  color: #eee;
  margin-block: 7px;
}

.card .favorite-button {
  border: none;
  background: transparent;
}

.card .favorite-button:active {
  transform: none;
  box-shadow: none;
}


/* FORM IN REACT  */

* Forms and state
* onChange
* events in react form
* Connecting onChange to state
* The value prop 
* Controlled components
* 

