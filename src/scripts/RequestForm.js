import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
         const parentName = document.querySelector("input[name='parentName']").value
         const childName = document.querySelector("input[name='childName']").value
         const childrenNumber = document.querySelector("input[name='childrenNumber']").value
         const partyAddress = document.querySelector("input[name='partyAddress']").value
         const partyDate = document.querySelector("input[name='partyDate']").value
         const partyLength = document.querySelector("input[name='partyLength']").value

         //all the same names below may cause a big problem but will give it a try.

         const dataForAPI = {
             parentName: parentName,
             childName: childName,
             childrenNumber: childrenNumber,
             partyAddress: partyAddress,
             partyDate: partyDate,
             partyLength: partyLength
         }
         sendRequest(dataForAPI)
    }
})



export const RequestForm = () => {
    let html = `
    <div class= "field">
        <label class="label" for "parentName">Parent's Name</label>
        <input placeholder="Your Name" type="text" name="parentName" class="input" />
        </div>
    <div class="field>
        <label class="label" for "childName">Child's Name</label>
        <input type="text" placeholder="Your Child" name="childName" class="input" />
        </div>
    <div class="field>
        <label class="label" for "">Number of Attendees"</label>
        <input type="number" placeholder="How many?" name="childrenNumber" class="input" />
        </div>
    <div class="field>
        <label class="label" for "partyAddress">Party Address</label>
        <input type="text" placeholder="Your Address" name="partyAddress" class="input" />
        </div>
    <div class="field>
        <label class="label" for "partyDate">Event Date</label>
        <input type="date" placeholder="Choose date" name="partyDate" class="input" />
        </div>
    <div class="field>
        <label class="label" for "partyLength">Length of Party</label>
        <input type="text" placeholder="Number of hours" name="partyLength" class="input" />
        </div>

    <button class="button" id="submitRequest">Submit Request</button>
    `
    return html

}