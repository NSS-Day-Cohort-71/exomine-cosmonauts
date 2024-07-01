//inital colonyMinerals
//colonyId = 0
//mineralId = 0
//mineralAmount = 0

export const colonyMineralState = {
    "id": 0,
    "colonyId": 0,
    "mineralId": 0,
    "mineralAmount": 0
}

//initial facilityMinerals
//facilityId = 0
//mineralId = 0
//mineralAmount = 0 

export const facilityMineralState = {
    "id": 0,
    "facilityId": 0,
    "mineralId": 0,
    "mineralAmount": 0
}

export const setColonyId = (id) => {
    colonyMineralState.colonyId = id
}

export const setColonyMineralId = (id) => {
    colonyMineralState.id = id
}

export const setColonyMineralAmount = (amount) => {
    colonyMineralState.mineralAmount = amount
}

export const setFacilityId = (id) => {
    facilityState.facilityId = id
}

export const setFacilityMineralId = (id) => {
    facilityMineralState.id = id
}

export const setFacilityMineralAmount = (amount) => {
    facilityMineralState.mineralAmount = amount
}

export const setMineralId = (id) => {
    colonyState.mineralId = id
    facilityState.mineralId = id
    console.log(colonyState)
    console.log(facilityState)
}

export const incrementColonyMineralAmount = (amount) => {
    colonyMineralState.mineralAmount = amount++
}

export const decrementFacilityMineralAmount = (amount) => {
    facilityMineralState.mineralAmount = amount--
}


export const setFacility = (facilityId) => {
    state.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const purchaseMineral = async () => {
    // 'POST' fetch method is used to create a new resource
    // 'PUT' fetch method is used to update an existing resource
    // OR create a resource if it does not exist at a specific URL

    // create 'PUT' request for facilityMineralState
    const facilityMineralPutOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(facilityMineralState)
    }

    const facilityMineralPutOptionsFetch = await fetch(
        'http://localhost:8088/facilityMinerals',
        facilityMineralPutOptions
    )
    // 'PUT' request for colonyMineralState
    
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
