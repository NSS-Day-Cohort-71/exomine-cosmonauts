import {
  decrementFacilityMineralAmount,
  incrementColonyMineralAmount,
  purchseFromSpaceCart,
} from "./TransientState.js";


export const spaceCartElement = async () => {
  document.addEventListener("click", handlePurchaseMineralClick);

  return `
        <div id="space-cart-container">
            <h2>Space Cart</h2>
            <div id="mineralsInCart"></div>
            <button id="purchaseMineral">Purchase Mineral</button>
        </div>
    `;
};

const handlePurchaseMineralClick = (e) => {
  if (e.target.id === "purchaseMineral") {
    incrementColonyMineralAmount();
    purchseFromSpaceCart();
    clearSpaceCart();
  }
};

const clearSpaceCart = () => {
  const mineralsInCart = document.querySelector("#mineralsInCart");
  mineralsInCart.innerHTML = "";
};
