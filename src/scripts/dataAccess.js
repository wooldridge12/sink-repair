//this module makes a copy of the json server and allows you to access it here.

const applicationState = {
    requests: [],
    orderBuilder: {
        description: "",
        address: "",
        budget: "",
        neededBy: ""
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




export const postRequest = (customerObject) => {
    const newDate = new Date ()

    const newRequestToBeCreated = {
        jobDescription: applicationState.orderBuilder.description,
        jobAddress: applicationState.orderBuilder.address,
        jobBudget: applicationState.orderBuilder.budget,
        finishDate: applicationState.orderBuilder.neededBy
    }


return fetch(`${apiURL}/orders`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newOrderToBeCreated)
})
    .then(response => response.json())
    .then(() => {

    })

}




export const getRequests = () => {
    return [...applicationState.requests]
}