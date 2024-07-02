import {
  incrementColonyMineralAmount,
  purchaseMineral,
} from "./TransientState.js";

const handlePurchaseMineralClick = (e) => {
  if (e.target.id === "purchaseMineral") {
    incrementColonyMineralAmount();

    purchaseMineral();
  }
};

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
