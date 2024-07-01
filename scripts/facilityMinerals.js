import { getFacilityMinerals } from "./managers/facilityMineralsManager.js";
import { facilityState, setMineralId } from "./TransientState.js";

export const facilityMineralList = async () => {
  document.addEventListener("change", handleMineralChoice);
  //set facilityMinerals to variable
  const facilityMinerals = await getFacilityMinerals();


   const facilityMineralHTML = facilityMinerals
    .filter(facility => facilityState.facilityId === facility.facilityId)
    .reduce((html, facility) => {
        if (!html) {
            html += `<h2>${facility.facility.name}</h2>`;
        }
        if (facility.mineralAmount === 0) {
            html += `<div><p>${facility.mineralAmount} tons of ${facility.mineral.name}</p></div>`;
        } else {
            html += `<div><input type="radio" name="facilityMineral" value="${facility.mineralId}" data-mineral="${facility.mineral.name}" data-facility="${facility.facility.name}">${facility.mineralAmount} tons of ${facility.mineral.name}</input></div>`;
        }
        facilityState.mineralAmount = facility.mineralAmount
        facilityState.id = facility.id
        return html;
    }, '');

return facilityMineralHTML;

}


export const handleMineralChoice = (e) => {
    let mineralsInCart = document.getElementById("mineralsInCart")
    mineralsInCart.innerHTML = ``
  if ((e.target.name = "facilityMineral")) {
    setMineralId(e.target.value);
    mineralsInCart.innerHTML = `1 ton of ${e.target.dataset.mineral} from ${e.target.dataset.facility}`;
  }
};
