
function splitOperation(operation) {
    let splitOperation = operation.split(' ');
    return [parseInt(splitOperation[0]), splitOperation[1], parseInt(splitOperation[2])];
}