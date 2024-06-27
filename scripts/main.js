//governor select html

import { facilityList } from "./facilities.js"
import { governorsList } from "./governors.js"

//facility select html

//<h2 id='colonyMinerals">Colony Minerals</h2>

//------

const mainHTML = document.querySelector("#main-container")

mainHTML.innerHTML = `
${await governorsList()}
${await facilityList()}
`