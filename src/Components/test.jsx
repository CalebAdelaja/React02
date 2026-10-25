import { useState } from 'react';

function ProfileForm() {
  const [formData, setFormData] = useState({ firstName: '', email: '' }); //This is the initial state, so formData = { firstName: '', email: '' }
    console.log(formData)// The output will be { firstName: '', email: '' }
    // Whenever the state updates, React renders the component again, and this console.log runs again with the latest formData.
  const handleInputChange = (e) => {/* This funcion runs whenever the user types into either  input(They're two inputs the first input is the firstName, while the second input is the email). The event object(e) which give use information about the input that triggers the onChange events */
    console.log(e)/*This displays the event object(e) in the console.Inside the event object there's target so e.target refers to the actual input element that the user is currently typing into so e.target is the input element that triggered the event. 
    */
   /* This is called Object Destructing  */
    const { name, value } = e.target; /* e.target is the input element that triggered the event. The input element has properties such as name and value. name gets the value of e.target.name. value gets the value of e.target.value. 
    For example, if the user types "Caleb" into the first input:
    name = "firstName"
    value = "Caleb"

    If the user types "hello@gmail.com" into the email input:
    name = "email"
    value = "calebadelaja0@gmail.com" 
    const { name, value } = e.target; is same way as writing const name = e.target; and const value = e.target; but you know this const {name, value} = e.target is a shorter way and clean but the thing you must use the actual property name remember, e.target is the input element. That element has properties such as name, value and other properties too. 
    */
    console.log(name)//firstName
    console.log(value)// Display whatever user enter to the inputs
    // Dynamically update the specific object key based on input name
    setFormData({
      ...formData,//This is spread operator(...) copies the existing properties fron the current state formData into a new objects
       
      [name]: value /* The square bracket[name] tells Javascript to use the VALUE stored inside the NAME variable here: 
      const { name, value } = e.target; as the property name of value 
      Therefore if name = "firstName" so 
      [name]: value will be firstName: value 
      If name ="email"
      [name]: value will be: email: value
      */
    });
    
  };

  return (
    <form>
      <input name="firstName" value={formData.firstName} onChange={handleInputChange} />
      <input name="email" value={formData.email} onChange={handleInputChange} />
    </form>
  );
}

export default ProfileForm
