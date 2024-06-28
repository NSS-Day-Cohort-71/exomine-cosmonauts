import { getFacilityMinerals } from "./managers/facilityMineralsManager.js"
import { facilityState, setMineralId } from "./TransientState.js"

export const facilityMineralList = async () => {

    document.addEventListener("change", handleMineralChoice)
    //set facilityMinerals to variable
   const facilityMinerals = await getFacilityMinerals()


   const facilityMineralHTML = facilityMinerals.map(facility => {
       //if transientState.facilityId = facilityMinerals.facilityId
       if (facilityState.facilityId === facility.facilityId) {
        
           return `
               <h2>${facility.facility.name}</h2>
               <input type="radio" name="facilityMineral" value="${facility.mineralId}" data-mineral="${facility.mineral.name}" data-facility="${facility.facility.name}">${facility.mineralAmount} tons of ${facility.mineral.name}</input>
           `
       }
   }).join("")

   return facilityMineralHTML 
}

export const handleMineralChoice = (e) => {
    if (e.target.name="facilityMineral") {
        setMineralId(e.target.value)
        document.getElementById("mineralsInCart").innerHTML = `1 ton of ${e.target.dataset.mineral} from ${e.target.dataset.facility}`
    }
}