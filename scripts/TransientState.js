//inital colonyMinerals
//colonyId = 0
//mineralId = 0
//mineralAmount = 0

export const colonyState = {
    "colonyId": 0,
    "mineralId": 0,
    "mineralAmount": 0
}

//initial facilityMinerals
//facilityId = 0
//mineralId = 0
//mineralAmount = 0 

export const facilityState = {
    "facilityId": 0,
    "mineralId": 0,
    "mineralAmount": 0
}

export const setColonyId = (id) => {
    colonyState.colonyId = id
}

export const setFacilityId = (id) => {
    facilityState.facilityId = id
}

export const setMineralId = (id) => {
    colonyState.mineralId = id
    facilityState.mineralId = id
    console.log(colonyState)
    console.log(facilityState)
}





const state = {

}

export const setFacility = (facilityId) => {
    state.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const purchaseMineral = () => {
    /*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */



    document.dispatchEvent(new CustomEvent("stateChanged"))
}
