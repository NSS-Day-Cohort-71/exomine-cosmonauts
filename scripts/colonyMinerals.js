
import { getColonyMinerals } from "./managers/colonyMineralsManager.js";
import { colonyState } from "./TransientState.js";




export const colonyMineralList = async () => {
     
    const colonyMinerals = await getColonyMinerals()


    const filteredColonyMinerals = colonyMinerals
    .filter(inventory => colonyState.colonyId === inventory.colonyId)
    

    const colonyMineralHTML = filteredColonyMinerals.map(inventory => {
        
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



    
   
