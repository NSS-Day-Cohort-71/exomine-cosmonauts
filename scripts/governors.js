//import governor data from governor manager

import { colonyMineralList } from "./colonyMinerals.js";
import { getGovernors } from "./managers/governorManager.js";
import { setColonyId } from "./TransientState.js";

//define a function to get HTML for governor select element

export const governorsList = async () => {
    //add change event listener handleGovernorChoice
    document.addEventListener("change", handleGovernorChoice)
    //save governor data to a varaible
    const governors = await getGovernors()

    //set variable html <h2>Choose governor</h2> <select name="governors" id="governorSelect">
                    //<option disabled selected>Choose governor</option>
    let html = `
                <h2>Choose a governor</h2>
                <select name="governors" id="governorSelect">
                <option disabled selected>Choose a governor</option>
    `
    //map governors array
    const governorHTML = governors.map(governor => {
        //return <option value="colonyId">Governor Name</option>
        return `<option value="${governor.colonyId}">${governor.name}</option>`
        //join map
    }).join("")

    html+= governorHTML
    //close select
    html += `</select>`
    //return html
    return html
}

    

const handleGovernorChoice = async (e) => {
    if (e.target.name === "governors") {
        setColonyId(parseInt(e.target.value))
        document.getElementById("facilitySelect").disabled = false
    //invoke getColonyMinerals
        document.getElementById("colonyMineralContainer").innerHTML = await colonyMineralList()
    }
    
}
    
