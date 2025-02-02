

import { getColonyMinerals } from "./managers/colonyMineralsManager.js";

export let colonyState = {
  id: 0,
  colonyId: 0,
  mineralId: 0,
  mineralAmount: 0,
};



export const facilityState = {
  id: 0,
  facilityId: 0,
  mineralId: 0,
  mineralAmount: 0,
};

export const setColonyId = (id) => {
  colonyState.colonyId = id;
};

export const setColonyMineralId = (id) => {
  colonyState.id = id;
};

export const setColonyMineralAmount = (amount) => {
  colonyState.mineralAmount = parseInt(amount);
};

export const setFacilityId = (id) => {
  facilityState.facilityId = id;
};

export const setFacilityMineralId = (id) => {
  facilityState.id = id;
};

export const setFacilityMineralAmount = (amount) => {
  facilityState.mineralAmount = amount;
};

export const setMineralId = (id) => {
  colonyState.mineralId = parseInt(id);
  facilityState.mineralId = parseInt(id);
  console.log(colonyState);
  console.log(facilityState);
};

export const incrementColonyMineralAmount = () => {
  colonyState.mineralAmount++;
};

export const decrementFacilityMineralAmount = () => {
  if (facilityState.mineralAmount > 0) {
    facilityState.mineralAmount--;
  }
  console.log(facilityState);
};

export const setFacility = (facilityId) => {
  state.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const purchseFromSpaceCart = async () => {
  decrementFacilityMineralAmount();
  const colonyMinerals = await getColonyMinerals();

  const inventory = colonyMinerals.filter(
    (inventory) => inventory.colonyId === colonyState.colonyId
  );

  const hasMineral = inventory.some(
    (item) => item.mineralId === colonyState.mineralId
  );

  if (hasMineral) {
    const colonyMineralPutOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(colonyState),
    };

    const colonyPutResponse = await fetch(
      `http://localhost:8088/colonyMinerals/${colonyState.id}`,
      colonyMineralPutOptions
    );
  } else if (!hasMineral) {
    colonyState = {
      colonyId: colonyState.colonyId,
      mineralId: colonyState.mineralId,
      mineralAmount: 1,
    };

    const colonyMineralPostOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(colonyState),
    };

    const colonyPostResponse = await fetch(
      "http://localhost:8088/colonyMinerals",
      colonyMineralPostOptions
    );
  }

  const facilityMineralPutOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(facilityState),
  };

  const facilityPutResponse = await fetch(
    `http://localhost:8088/facilityMinerals/${facilityState.id}`,
    facilityMineralPutOptions
  );

  document.dispatchEvent(new CustomEvent("stateChanged"));
};
