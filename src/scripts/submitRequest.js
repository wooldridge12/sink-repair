//make a button to submit request from the serviceForm.js
import { postRequest, saveRequestToAPI } from "./dataAccess.js"

const container = document.querySelector("#container")


container.addEventListener(
    "click",
    (clikcEvent) => {
        if (clikcEvent.target.id === "submitRequest") {
            postRequest()
        }
    }
)
export const SubmitRequestButton = () => {
    return `
    <button id="submitRequest">Submit Request</button>`
}