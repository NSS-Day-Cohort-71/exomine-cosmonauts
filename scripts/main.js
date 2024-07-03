//governor select html
import { displayFacilityList, facilityList } from "./facilities.js";
import { displayColonyMineralList, governorsList } from "./governors.js";
import { spaceCartElement } from "./spaceCart.js";

//facility select html

//<h2 id='colonyMinerals">Colony Minerals</h2>

//------

const render = async () => {
  const mainHTML = document.querySelector("#main-container");
  const governorHTML = document.querySelector("#governor-colony-container")

  mainHTML.innerHTML = `
    <div id="governor-colony-container">
        ${await governorsList()}
        <div id="colonyMineralContainer">
            <h2>Colony Minerals</h2>
        </div>
    </div>
    
    <div id="facility-container">
        ${await facilityList()}
        <div id="facilityMineralContainer">
            <h2>Facility Minerals</h2>
        </div>
    </div>

    ${await spaceCartElement()}
`;
};

//first render
render();

document.addEventListener("stateChanged", async () => {
    await displayFacilityList()
    await displayColonyMineralList()
});





