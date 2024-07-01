//inital colonyMinerals
//colonyId = 0
//mineralId = 0
//mineralAmount = 0

export const colonyState = {
    "id": 0,
    "colonyId": 0,
    "mineralId": 0,
    "mineralAmount": 0
}

//initial facilityMinerals
//facilityId = 0
//mineralId = 0
//mineralAmount = 0 

export const facilityState = {
    "id": 0,
    "facilityId": 0,
    "mineralId": 0,
    "mineralAmount": 0
}

export const setColonyId = (id) => {
    colonyState.colonyId = id
}

export const setColonyMineralId = (id) => {
    colonyState.id = id
}

export const setColonyMineralAmount = (amount) => {
    colonyState.mineralAmount = parseInt(amount)
}

export const setFacilityId = (id) => {
    facilityState.facilityId = id
}

export const setFacilityMineralId = (id) => {
    facilityState.id = id
}

export const setFacilityMineralAmount = (amount) => {
    facilityState.mineralAmount = amount
}

export const setMineralId = (id) => {
    colonyState.mineralId = parseInt(id)
    facilityState.mineralId = parseInt(id)
    console.log(colonyState)
    console.log(facilityState)
}

export const incrementColonyMineralAmount = () => {
    colonyState.mineralAmount++
}

export const decrementFacilityMineralAmount = () => {
    facilityState.mineralAmount--
}


export const setFacility = (facilityId) => {
    state.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const purchaseMineral = async () => {
    // 'POST' fetch method is used to create a new resource
    // 'PUT' fetch method is used to update an existing resource
    // OR create a resource if it does not exist at a specific URL
    const colonyMineralPutOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(colonyState)
    }

    const apiColonyMineralURL = `http://localhost:8088/colonyMinerals/${colonyState.id}`

    const colonyMineralPutOptionsFetch = await fetch(
        apiColonyMineralURL,
        colonyMineralPutOptions
    )
    // create 'PUT' request for facilityMineralState
    const facilityMineralPutOptions = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(facilityState)
    }

    const apiFacilityMineralURL = `http://localhost:8088/facilityMinerals/${facilityState.id}`
    const facilityMineralPutOptionsFetch = await fetch(
        apiFacilityMineralURL,
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
