
import { facilityMineralList } from "./facilityMinerals.js";
import { getFacilities } from "./managers/facilityManager.js";
import { setFacilityId } from "./TransientState.js";

export const facilityList = async () => {
   
    const facilities = await getFacilities()
   
    let html = `
            <div id="facility-label">
                <h2>Choose a facility</h2>
                <select id="facilitySelect" name="facility" disabled>
                <option disabled selected>(SELECT)</option>
    `
   
    const facilityHTML = facilities.map(facility => {
       
        return `<option value="${facility.id}">${facility.name}</option>`
        
    }).join("")
        
    html += facilityHTML
   
   
    html += `</select></div>`
  
    return html
}


const handleFacilityChoice = async (e) => {
    if (e.target.name === "facility") {
        setFacilityId(parseInt(e.target.value))
        
        await displayFacilityList()
        }
    }

document.addEventListener("change", handleFacilityChoice)

export const displayFacilityList = async () => {
    document.getElementById("facilityMineralContainer").innerHTML = await facilityMineralList()
}

