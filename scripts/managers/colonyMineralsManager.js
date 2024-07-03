export const getColonyMinerals = async () => {
    const response = await fetch("http://localhost:8088/colonyMinerals?_expand=colony&_expand=mineral")
    const colonyMinerals = await response.json()
    return colonyMinerals
}