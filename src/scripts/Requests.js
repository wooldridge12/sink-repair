//The function you write will convert each service request object into HTML representations. Since it is wrapped with a <ul> element, make each one an <li> element showing only the description of the request to start.
import { getRequests, deleteRequest } from "./dataAccess.js"



export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
        ${requests.map(convertRequestToListElement => {
                return `
                <li>${convertRequestToListElement.description}
                <button class="request__delete"id="request--${convertRequestToListElement.id}">
                Delete
                </button>
                </li>
                `
            }).join("")}
        </ul>
    `
    
    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})