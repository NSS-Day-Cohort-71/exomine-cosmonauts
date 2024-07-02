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

    const colonyMineralHTML = colonyMinerals
        .filter(inventory => colonyState.colonyId === inventory.colonyId)
        .reduce((html, inventory) => {
            if (!html) {
                html += `<h2>${inventory.colony.name}</h2>`
            }
            if (inventory.mineralAmount != 0) {
                html += `<div>${inventory.mineralAmount} tons of ${inventory.mineral.name}</div>`
            }
            colonyState.mineralAmount = inventory.mineralAmount
            colonyState.id = inventory.id
            return html
        }, '')

        return colonyMineralHTML

}


    
   
