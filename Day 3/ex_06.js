fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getIndexFromName(name) {
    const i = fruits.indexOf(name);
    if (i == -1) return null
    return i
}