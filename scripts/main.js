//governor select html

import { facilityList } from "./facilities.js";
import { governorsList } from "./governors.js";
import { spaceCartElement } from "./spaceCart.js";

//facility select html

//<h2 id='colonyMinerals">Colony Minerals</h2>

//------

const render = async () => {
  const mainHTML = document.querySelector("#main-container");

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
  //reRender once the purchaseMineral is clicked
  document.querySelector("#purchaseMineral").addEventListener("click", () => {
    // if (e.target.id === "purchaseMineral") {
    //     incrementColonyMineralAmount()
    //     decrementFacilityMineralAmount()
    //     purchaseMineral()
    // }
    render();
  });
};

//first render
render();

document.addEventListener("stateChanged", () => {
  render();
});
