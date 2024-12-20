function addCar(agentString, car) {
    const obj = JSON.parse(agentString)
    obj["car"] = car;
    return obj;
}

const agentJSON = JSON.stringify({
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
});

const updatedAgent = addCar(agentJSON, "Aston Martin");
