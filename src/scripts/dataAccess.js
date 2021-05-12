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



//Place the following function in your dataAccess.js module. The POST method on any HTTP request means "Hey API!! I want you to create something new!"
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

    })
}


    // const newDate = new Date ()

    // const newRequestToBeCreated = {
    //     jobDescription: applicationState.orderBuilder.description,
    //     jobAddress: applicationState.orderBuilder.address,
    //     jobBudget: applicationState.orderBuilder.budget,
    //     finishDate: applicationState.orderBuilder.neededBy
    // }


// return fetch(`${API}/requests`, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(userServiceRequest)
// })
//     .then(response => response.json())
//     .then(() => {

//     })

// }




export const getRequests = () => {
    return [...applicationState.requests]
}