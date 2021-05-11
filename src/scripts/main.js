import { fetchRequests } from "./dataAccess.js"
import { Buttons } from "./Buttons.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderHTML()
    }
)

const renderHTML = () => {
    fetchRequests()
    .then(
        () => {
        mainContainer.innerHTML = Buttons()
        }
    )
}

renderHTML()