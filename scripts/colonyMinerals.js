//import colonyMinerals data from manager
import { getColonyMinerals } from "./managers/colonyMineralsManager.js";
import { colonyState } from "./TransientState.js";


//define colonyMineralList

export const colonyMineralList = async () => {
     //set colonyMinerals to variable
    const colonyMinerals = await getColonyMinerals()

    const filteredColonyMinerals = colonyMinerals
    .filter(inventory => colonyState.colonyId === inventory.colonyId)
    

    const colonyMineralHTML = filteredColonyMinerals.map(inventory => {
        //if transientState.colonyId = colonyMinerals.colonyId
            colonyState.mineralAmount = inventory.mineralAmount
            colonyState.id = inventory.id
            
            return `
                <div><span>${inventory.mineralAmount}</span> tons of <span>${inventory.mineral.name}</span></div>
            `
        }).join("")

    if (filteredColonyMinerals.length > 0) {
        const headerHTML = `<h2 class="colony-header"><span class="colony-name">${filteredColonyMinerals[0].colony.name}</span></h2>`
        return headerHTML + colonyMineralHTML
    } else {
        return  headerHTML
    }
}
// export const colonyMineralList = async () => {
//      //set colonyMinerals to variable
//     const colonyMinerals = await getColonyMinerals()

//     const colonyMineralHTML = colonyMinerals.map(inventory => {
//         //if transientState.colonyId = colonyMinerals.colonyId
//         if (colonyState.colonyId === inventory.colonyId) {
//             colonyState.mineralAmount = inventory.mineralAmount
//             colonyState.id = inventory.id
            
//             return `
//                 <h2>${inventory.colony.name}</h2>
//                 <div>${inventory.mineralAmount} tons of ${inventory.mineral.name}</div>
//             `
//         }
//     })
//     .join("")

//     return colonyMineralHTML

    

//         //document.getElementbyId(colonyMinerals).textContent = colonyMinerals.colony.name

//         //<ul>
//         //print colonyMinerals.mineral.name
//         //print colonyMinerals.mineralAmount
//         //<ul>

// }


    
   
