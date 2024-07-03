//import governor data from governor manager

import { colonyMineralList } from "./colonyMinerals.js";
import { getGovernors } from "./managers/governorManager.js";
import { setColonyId } from "./TransientState.js";



export const governorsList = async () => {
    //add change event listener handleGovernorChoice
    
    //save governor data to a varaible
    const governors = await getGovernors()

    //set variable html <h2>Choose governor</h2> <select name="governors" id="governorSelect">
                    //<option disabled selected>Choose governor</option>
    let html = `
            <div id="governor-label">
                <h2>Choose a Governor</h2>
                <select name="governors" id="governorSelect">
                <option disabled selected>(SELECT)</option>
    `
    //map governors array
    const governorHTML = governors.map(governor => {
        if (governor.active === true) {
            //return <option value="colonyId">Governor Name</option>
            return `<option value="${governor.colonyId}">${governor.name}</option>` }
        //join map
    }).join("")
    html+= governorHTML
    //close select
    html += `</select></div>`
    //return html
    return html
}
        




    

const handleGovernorChoice = async (e) => {
    if (e.target.name === "governors") {
        setColonyId(parseInt(e.target.value))
        document.getElementById("facilitySelect").disabled = false
    //invoke getColonyMinerals
        await displayColonyMineralList()
    }

}

document.addEventListener("change", handleGovernorChoice)
    
export const displayColonyMineralList = async () => {
    document.getElementById("colonyMineralContainer").innerHTML = await colonyMineralList()
}