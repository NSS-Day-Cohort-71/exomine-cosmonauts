

import { colonyMineralList } from "./colonyMinerals.js";
import { getGovernors } from "./managers/governorManager.js";
import { clearSpaceCart } from "./spaceCart.js";
import { setColonyId } from "./TransientState.js";



export const governorsList = async () => {
    
    const governors = await getGovernors()

   
    let html = `
            <div id="governor-label">
                <h2>Choose a Governor</h2>
                <select name="governors" id="governorSelect">
                <option disabled selected>(SELECT)</option>
    `
   
    const governorHTML = governors.map(governor => {
        if (governor.active === true) {
           
            return `<option value="${governor.colonyId}">${governor.name}</option>` }
        
    }).join("")
    html+= governorHTML
    
    html += `</select></div>`
   
    return html
}
        

    

export const handleGovernorChoice = async (e) => {
    if (e.target.name === "governors") {
        setColonyId(parseInt(e.target.value))
        document.getElementById("facilitySelect").disabled = false
    
        await displayColonyMineralList()
        clearSpaceCart()
    }

}

document.addEventListener("change", await handleGovernorChoice)
    
export const displayColonyMineralList = async () => {
    document.getElementById("colonyMineralContainer").innerHTML = await colonyMineralList()
}