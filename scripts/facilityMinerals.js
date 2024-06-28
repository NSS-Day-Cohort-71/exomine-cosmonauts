import { getFacilityMinerals } from "./managers/facilityMineralsManager.js"
import { facilityState } from "./TransientState.js"

export const facilityMineralList = async () => {
    //set facilityMinerals to variable
   const facilityMinerals = await getFacilityMinerals()


   const facilityMineralHTML = facilityMinerals.map(facility => {
       //if transientState.facilityId = facilityMinerals.facilityId
       if (facilityState.facilityId === facility.facilityId) {
        
           return `
               <h2>${facility.facility.name}</h2>
               <input type="radio" name="facilityMineral">${facility.mineralAmount} tons of ${facility.mineral.name}</input>
           `
       }
   }).join("")

   return facilityMineralHTML 
}