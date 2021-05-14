//this module makes a copy of the json server and allows you to access it here.

const applicationState = {
    requests: [],
    orderBuilder: {
        description: "Sup bruh",
        address: "1800 getcash",
        budget: 1000,
        neededBy: "tomorrow"
    }

}
//You will need to store that external data in your application state when you fetch it. Create a property named requests in your application state object. Its initial value must be an empty array.
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )


    }

export const saveRequestToAPI = () => {
    console.log(applicationState.orderBuilder)
}
export const setJobDescription = (description) => {
    applicationState.orderBuilder.description = description
}
export const setJobAddress = (address) => {
    applicationState.orderBuilder.address = address
}
export const setJobBudget = () => (budget) => {
    applicationState.orderBuilder.budget = budget
}


//Before you get to saving new requests, you should list any previous requests. You are going to use a fetch() to get all existing requests and then list them in the UI.
//Place the following function in your dataAccess.js module. The POST method on any HTTP request means "Hey API!! I want you to create something new!"
const mainContainer = document.querySelector("#container")
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/requests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


    // const newDate = new Date ()

    // const newRequestToBeCreated = {
    //     jobDescription: applicationState.orderBuilder.description,
    //     jobAddress: applicationState.orderBuilder.address,
    //     jobBudget: applicationState.orderBuilder.budget,
    //     finishDate: applicationState.orderBuilder.neededBy
    // }

    //function whose responsiblity it is to initiate the fetch request for DELETE must have the primary key sent to it as an argument.
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, 
    {method: "DELETE"})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}


//Define and export a function named getRequests that returns a copy of the requests state.
export const getRequests = () => {
    return [...applicationState.requests]
}

