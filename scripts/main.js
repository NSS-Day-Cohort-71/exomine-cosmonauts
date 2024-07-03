
import { displayFacilityList, facilityList } from "./facilities.js";
import { displayColonyMineralList, governorsList, handleGovernorChoice } from "./governors.js";
import { spaceCartElement } from "./spaceCart.js";



const render = async () => {
  const mainHTML = document.querySelector("#main-container");
  const governorHTML = document.querySelector("#governor-colony-container")

  mainHTML.innerHTML = `
    <div id="governor-colony-container">
        ${await governorsList()}
        <div id="colonyMineralContainer">
            <h2 class="colony-header"><span class="colony-name">Colony</span> Minerals</h2>
        </div>
    </div>
    
    <div id="facility-container">
        ${await facilityList()}
        <div id="facilityMineralContainer">
            <h2 class="facility-header">Facility Minerals</h2>
        </div>
    </div>

    ${await spaceCartElement()}
`;
};


render();

document.addEventListener("stateChanged", async () => {
    await displayFacilityList()
    await displayColonyMineralList()
});







