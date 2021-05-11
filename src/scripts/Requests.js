import { getRequests } from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement => {
                return `<li>${convertRequestToListElement.description}</li>`
            })}
        </ul>
    `

    return html
}