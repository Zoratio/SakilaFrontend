import React, { useState } from 'react'
import SeparateActor from './components/SeparateActor'
import SeparateGenre from './components/SeparateGenre'
import './App.css'

export default function Page() {
    // these are the states for the function
    const [actorId, setActorId] = useState(0) // this contains the input for the actorId to be found
    const [actor, setActor] = useState(null) // this contains the data for the actor retrieved from the database
    const [actor2, setActor2] = useState(null) // this contains the data for the actor retrieved from the database
    const [actors, setActors] = useState(null) // this contains the data for all the actors
    const [genres, setGenres] = useState(null) // this contains the data for all the genres

    let updateNames = {
        aOFName: "",
        aOLName: "",
        aNFName: "",
        aNLName: ""
    }

    const [updateNamesData, setUpdateNamesData] = useState(updateNames);

    let createNames = {
        cAFName: "",
        cALName: ""
    }

    const [createNamesData, setCreateNamesData] = useState(createNames);

    const [actorIdForDelete, setActorIdForDelete] = useState(0) // this contains the input for the actorId to be found

    // get all actors form
    // handles the form submission - called when form button is clicked
    function handleSubmitForAllActors(e) {
        e.preventDefault() // prevents the page from reloading

        // gets the data from the database using JS fetch API
        return fetch(`https://sakilabackend20220809145429.azurewebsites.net/getnamesofallactors`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data) // check data format in the console
                setActors(data) // set the actor retrieved from the database
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    // get the total revenue for each genre in alphabetical order
    // handles the form submission - called when form button is clicked
    function handleSubmitForGenres(e) {
        e.preventDefault() // prevents the page from reloading

        // gets the data from the database using JS fetch API
        return fetch(`https://sakilabackend20220809145429.azurewebsites.net/getgenrerevenues`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data) // check data format in the console
                setGenres(data) // set the actor retrieved from the database
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    // get an actor by ID
    // handles the form submission - called when form button is clicked
    function handleSubmitForActorByID(e) {
        e.preventDefault() // prevents the page from reloading

        // gets the data from the database using JS fetch API
        return fetch(`https://sakilabackend20220809145429.azurewebsites.net/getactor/${actorId}`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data) // check data format in the console
                setActor(data) // set the actor retrieved from the database
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    // update an actor's name
    // handles the form submission - called when form button is clicked
    function handleSubmitForUpdateActor(e) {
        e.preventDefault() // prevents the page from reloading

        // gets the data from the database using JS fetch API
        return fetch(`https://sakilabackend20220809145429.azurewebsites.net/updateExistingActorName/${updateNamesData.aOFName}/${updateNamesData.aOLName}/${updateNamesData.aNFName}/${updateNamesData.aNLName}`, {
            method: "PUT"
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                console.log(data) // check data format in the console
                setActor2(data) // set the actor retrieved from the database
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    // create a new actor
    // handles the form submission - called when form button clicked
    function handleSubmitForCreateActor(e) {
        e.preventDefault() // prevents the page from reloading

        // gets the data from the database using JS fetch API
        return fetch(`https://sakilabackend20220809145429.azurewebsites.net/setnewactor/${createNamesData.cAFName}/${createNamesData.cALName}`, {
            method: "PUT"
        })
    }

    // create a new actor
    // handles the form submission - called when form button clicked
    function handleSubmitForDeleteActor(e) {
        e.preventDefault() // prevents the page from reloading

        // gets the data from the database using JS fetch API
        return fetch(`https://sakilabackend20220809145429.azurewebsites.net/deleteactor/${actorIdForDelete}`, {
            method: "DELETE"
        })
    }

    // handles the input change (used in the form text)- updated whenever the user changes something in the input field
    function handleChangeActorId(e) {
        setActorId(e.target.value) // sets the actorId to be used in the handleSubmit function above
    }

    // handles the input change (used in the form text)- updated whenever the user changes something in the input field
    function handleChangeAName(e) {
        setUpdateNamesData({...updateNamesData, [e.target.name]: e.target.value}) // sets the actorId to be used in the handleSubmit function above
    }

    // handles the input change (used in the form text)- updated whenever the user changes something in the input field
    function handleNewActorFirstName(e) {
        setCreateNamesData({...createNamesData, [e.target.name]: e.target.value}) // sets the actorId to be used in the handleSubmit function above
    }

    // handles the input change (used in the form text)- updated whenever the user changes something in the input field
    function handleDeleteActor(e) {
        setActorIdForDelete(e.target.value) // sets the actorId to be used in the handleSubmit function above
    }

    
    return (
        <div>
            <h1>Get all actors</h1>
            <form>
                <button type="submit" onClick={handleSubmitForAllActors}>Return</button>
            </form>
            <ul>            
                {actors && actors.map((item, index) => (
                <li key={index}>
                    <SeparateActor actor={item} />
                </li>
                ))}
            </ul>


            <h1>Get a specific actor by ID</h1>
            <form>
                <input type="text" value={actorId} onChange={handleChangeActorId} />
                <button type="submit" onClick={handleSubmitForActorByID}>Return</button>
            </form>
            { actor && <SeparateActor actor={actor[0]} />}


            <h1>Get all genres' total revenue in GBP</h1>
            <form>
                <button type="submit" onClick={handleSubmitForGenres}>Return</button>
            </form>
            <ul>        
                {genres && genres.topGenres.map((item, index) => (
                <li key={index}>
                    <SeparateGenre genre={item} />
                </li>
                ))}
            </ul>


            <h1>Update an existing actor's names</h1>
            <form>
                <input type="text" name="aOFName" value={updateNamesData.aOFName} onChange={handleChangeAName} />
                <input type="text" name="aOLName" value={updateNamesData.aOLName} onChange={handleChangeAName} />
                <input type="text" name="aNFName" value={updateNamesData.aNFName} onChange={handleChangeAName} />
                <input type="text" name="aNLName" value={updateNamesData.aNLName} onChange={handleChangeAName} />
                <button type="submit" onClick={handleSubmitForUpdateActor}>Return</button>
            </form>
            { actor2 && <SeparateActor actor={actor2[0]} />}


            <h1>Create a new actor</h1>
            <form>
                <input type="text" name="cAFName" value={createNamesData.cAFName} onChange={handleNewActorFirstName} />
                <input type="text" name="cALName" value={createNamesData.cALName} onChange={handleNewActorFirstName} />            
                <button type="submit" onClick={handleSubmitForCreateActor}>Return</button>
            </form>


            <h1>Delete an actor</h1>
            <form>
                <input type="text" value={actorIdForDelete} onChange={handleDeleteActor} />                       
                <button type="submit" onClick={handleSubmitForDeleteActor}>Return</button>
            </form>
        </div>
    )
}