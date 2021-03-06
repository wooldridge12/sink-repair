import { sendRequest } from "./dataAccess.js"

const container = document.querySelector("#container")


//HTML input fields are how you collect user data. Time for you to define some fields to collect the information from a user that Maude and Merle want about a service request.
//Then import the HTML into the main module and interpolate it in the site structure.sink-repair/src/scripts/SinkRepair.js
export const ServiceForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="serviceDescription">Description</label>
        <input type="text" name="serviceDescription" class="input firstBox" />
    </div>
    <div class="field">
        <label class="label" for="serviceAddress">Address</label>
        <input type="text" name="serviceAddress" class="input secondBox" />
    </div>
    <div class="field">
        <label class="label" for="serviceBudget">Budget</label>
        <input type="number" name="serviceBudget" class="input thirdBox" />
    </div>
    <div class="field">
        <label class="label" for="serviceDate">Date needed</label>
        <input type="date" name="serviceDate" class="input fourthBox" />
    </div>
    <button class="button" id="submitRequest">Submit Request</button>
    `



    return html
}




//Add the following event listener to the ServiceForm module. Read each line of code, discuss with your teammates, and see if you can understand what everything is doing. Make sure you write down any questions you have about the code for the review with the instruction team.
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})