//You need to fetch the data from the API and store it in application state before you can convert the data structures to HTML representations.
import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(
        ()=> {
    mainContainer.innerHTML = SinkRepair()
        }    
    )
    
}

render()

//Now your main module has to listen for the custom event and invoke the render() function to build all the HTML again.
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
//Now submit another service request with your form, and the service request should now be immediately rendered in the list without the need to refresh the browser. Have your Developer Tools > Network tab open and inspect both the POST request, and the subsequent GET request to see what happened.


