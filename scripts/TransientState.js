//inital colonyMinerals
//colonyId = 0
//mineralId = 0
//mineralAmount = 0

import { getColonyMinerals } from "./managers/colonyMineralsManager.js"

export let colonyState = {
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


export const purchseFromSpaceCart = async () => {
    const colonyMinerals = await getColonyMinerals()

    const inventory = colonyMinerals.map(inventory => inventory.mineralId)

    if (!inventory.includes(colonyState.mineralId)) {
        colonyState = {
            "colonyId": colonyState.colonyId,
            "mineralId": colonyState.mineralId,
            "mineralAmount": 1
        }

        const colonyMineralPostOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(colonyState)
        }

        const colonyPostResponse = await fetch("http://localhost:8088/colonyMinerals", colonyMineralPostOptions)
        
    } else {
        const colonyMineralPutOptions = {
            method: "Put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(colonyState)
        }

        const colonyPutResponse = await fetch(`http://localhost:8088/colonyMinerals/${colonyState.id}`, colonyMineralPutOptions)
    }

    const facilityMineralPutOptions = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(facilityState)
    }

    const facilityPutResponse = await fetch(`http://localhost:8088/facilityMinerals/${facilityState.id}`, facilityMineralPutOptions)

    document.dispatchEvent(new CustomEvent("stateChanged"))
}