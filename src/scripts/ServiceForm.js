

const container = document.querySelector("#container")



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
`
   // <button class="button" id="submitRequest">Submit Request</button>



    return html
}

