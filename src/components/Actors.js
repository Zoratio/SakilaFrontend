// import React, { useState } from 'react'
// import SeparateActor from './SeparateActor.js'

// export default function Actor() {
//     // these are the states for the function
//     const [actorId, setActorId] = useState(0) // this contains the input for the actorId to be found
//     const [actor, setActor] = useState(null) // this contains the data for the actor retrieved from the database

//     // handles the form submission - called when form button is clicked
//     function handleSubmit(e) {
//         e.preventDefault() // prevents the page from reloading

//         // gets the data from the database using JS fetch API
//         return fetch(`https://sakila20220809143255.azurewebsites.net/getnamesofallactors`, {
//             method: "GET"
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data) // check data format in the console
//                 setActor(data) // set the actor retrieved from the database
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     }

//     // handles the input change - updated whenever the user changes something in the input field
//     function handleChange(e) {
//         setActorId(e.target.value) // sets the actorId to be used in the handleSubmit function above
//     }

//     return (
//         <div>
//             <h1>Actor</h1>
//             <form>
//                 <input type="text" value={actorId} onChange={handleChange} />
//                 <button type="submit" onClick={handleSubmit}>Find Actor</button>
//             </form>
//             {/* the {actor} is the props that are being passed to the seperate actor component */}
//             {<SeparateActor actor={actor} />}   
//         </div>
//     )
// }
