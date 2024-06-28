//When a governor is selected

//get the colony that the governor belongs to

//Print colony Name

//list mineral inventory
//-------------------------------


//import colonyMinerals data from manager
import { getColonyMinerals } from "./managers/colonyMineralsManager.js";
import { colonyState } from "./TransientState.js";


//define colonyMineralList

export const colonyMineralList = async () => {
     //set colonyMinerals to variable
    const colonyMinerals = await getColonyMinerals()

    const colonyMineralHTML = colonyMinerals.map(mineral => {
        //if transientState.colonyId = colonyMinerals.colonyId
        if (colonyState.colonyId === mineral.colonyId) {
            return `
                <h2>${mineral.colony.name}</h2>
                <div>${mineral.mineralAmount} tons of ${mineral.mineral.name}</div>
            `
        }
    }).join("")

    return colonyMineralHTML

    

        //document.getElementbyId(colonyMinerals).textContent = colonyMinerals.colony.name

        //<ul>
        //print colonyMinerals.mineral.name
        //print colonyMinerals.mineralAmount
        //<ul>

}

    
   
