function displayAgentInfo(obj) {
    const paragraph = document.querySelector("#container").querySelector("p")
    paragraph.textContent = `My name is ${obj.lastName}, ${obj.firstName} ${obj.lastName}! I'm the agent ${obj.code} and I'm ${obj.age} years old.`
}

window.addEventListener("DOMContentLoaded", () => {
    const agent = {
        age: 57,
        code: "007",
        firstName: "James",
        lastName: "Bond"
    };

    displayAgentInfo(agent);
});
