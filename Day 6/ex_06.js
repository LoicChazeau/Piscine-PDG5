function searchCars(agents, key, value) {
    if (!Array.isArray(agents)) {
        console.error("Le premier argument doit être un tableau d'agents.");
        return [];
    }

    const matchingCars = [];
    agents.forEach((agent) => {
        if (agent.car && agent.isMatching && agent.isMatching(key, value)) {
            matchingCars.push(agent.car);
        }
    });

    return matchingCars;
}

Object.prototype.isMatching = function (key, value) {
    if (!this.car || typeof this.car !== "object") {
        console.error("Cet agent n'a pas de voiture.");
        return false;
    }

    return this.car[key] && this.car[key] === value;
};

const agents = [
    {
        firstName: "James",
        lastName: "Bond",
        car: {
            brand: "Aston Martin",
            model: "DB5",
            color: "Silver",
            power: "420hp"
        }
    },
    {
        firstName: "Ethan",
        lastName: "Hunt",
        car: {
            brand: "BMW",
            model: "i8",
            color: "Black",
            power: "370hp"
        }
    },
    {
        firstName: "Jimmy",
        lastName: "crocilla",
        car: {
            brand: "Audi",
            model: "A8",
            color: "White",
            power: "320hp"
        }
    }
];
