import { getRequests, deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")




export const DisplayRequests = () => {
    const requests = getRequests()
    
    let html = "<h3>Submitted Requests</h3>"
    
    html += "<ul>"
    
    let requestStuff = requests.map(
        (request) => {
            return `
            <li>
            ${request.parentName} will have a party of ${request.childrenNumber} for their child ${request.childName} on ${request.partyDate}.   
            <button class="request__delete" id="request--${request.id}">Deny</button>
            </li>`
        }
        )
        html += requestStuff.join("")
        html += "</ul>"
        return html
    }
    mainContainer.addEventListener("click", click => {
        if (click.target.id.startsWith("request--")) {
            const [,requestId] = click.target.id.split("--")
            deleteRequest(parseInt(requestId))
        }
    })