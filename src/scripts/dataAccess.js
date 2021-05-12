const apiLink = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

//setting five main functions here. Getting requests from the API, copying the received info for use on the site, sending new information to the API, and deleting requests from the API.


//First we create this application state to save the info we receive from the API. It is empty initially. 
const applicationState = {
    requests:[]
}


//get requests from API
export const fetchRequests = () => {
    return fetch (`${apiLink}/requests`)
    .then (res => res.json())
    .then(
        (requestsData) => {
            applicationState.requests = requestsData
        }
    )
}

//copy requests for local use.
export const getRequests = () => {
    return [...applicationState.requests]
}

//send a request to the API
export const sendRequest = (userRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userRequest)
    }

    return fetch(`${apiLink}/requests`, fetchOptions)
    .then (res => res.json())
    .then (() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


//ask the API to delete a request.
export const deleteRequest = (id) => {
    return fetch(`${apiLink}/requests/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}