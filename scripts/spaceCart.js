import { decrementFacilityMineralAmount, incrementColonyMineralAmount, purchaseMineral } from "./TransientState.js"

export const spaceCartElement = async () => {
    
        return `
        <div id="space-cart-container">
            <h2>Space Cart</h2>
            <div id="mineralsInCart"></div>
            <button id="purchaseMineral">Purchase Mineral</button>
        </div>
    ` 
}

const handlePurchaseMineralClick = (e) => {
    if (e.target.id === "purchaseMineral") {
        incrementColonyMineralAmount()
        decrementFacilityMineralAmount()
        purchaseMineral()
    }
}