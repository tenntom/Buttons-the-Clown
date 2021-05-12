import { RequestForm } from "./RequestForm.js"
import { DisplayRequests } from "./RequestDisplay.js"

export const Buttons = () => {
    return `
    <h1>Button's Big Clowning Around Bonanza</h1>
    <p>Let Buttons the Clown make lifelong memories for you and your family! Please fill out a party request form for more information.
    </p>
    <article class="requestForm">
        ${RequestForm()}
        </article>
    <article class="displayRequest">
        ${DisplayRequests()}
    `
}