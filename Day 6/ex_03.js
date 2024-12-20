function addCarToAgent(agent, brand = null, model = null, color = null, power = null) {
    if (typeof agent !== "object") {
        console.warn("The agent is not an object.")
        return null
    }
    if (typeof agent.car === "object") {
        console.warn("The agent already has a car.")
        return null
    }
    if (brand === null || model === null || color === null || power === null) {
        console.warn("Missing car information.")
        return null
    }


    agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    }
    return agent
}

const agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
};

const updatedAgent = addCarToAgent(agent, "Aston Martin", "DB5", "Silver", "420hp");

if (updatedAgent) {
    shareThatBeauty(updatedAgent);
}