import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"
// import { SubmitRequestButton } from "./submitRequest.js"

export const SinkRepair = () => {
    return `
    <h1 class="mainHeading">Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>

    <section class="serviceRequests">
    <h2>Service Requests</h2>
    ${Requests()}
    </section>
    `
}
//fix h1 and h2 in css make big

// <section class="serviceButton">
//     ${SubmitRequestButton()}
// </section>