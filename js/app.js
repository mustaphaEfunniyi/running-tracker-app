const goal = 25;
const form = document.querySelector('form');
const entriesWrapper = document.querySelector('#entries');
document.querySelector('#target').innerHTML = goal;

let entries = [];

const addNewEntry = function(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);
    entriesWrapper.appendChild(listItem);
}

const reducer = function(total, currentValue) {
    return total + currentValue;
}

const calculateTotal = function(entries) {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.querySelector('#total').innerHTML = totalValue;
    document.querySelector('#progressTotal').innerHTML = totalValue;
}

const calculateAverage = function() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.querySelector('#average').innerHTML = average;
}

const weeklyHigh = function() {
    const high = Math.max(...entries);
    document.querySelector('#high').innerHTML = high;
}

const calculateGoal = function() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completedPercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector('#progressCircle');
    if (completedPercent > 100) {
        completedPercent === 100;
    }
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}

const submitHandler = function(event) {
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    if (!entry) return;
    form.reset();
    entries.push(entry);
    addNewEntry(entry);
    calculateTotal(entries);
    calculateAverage(entries);
    weeklyHigh(entries);
    calculateGoal(entries);
}

form.addEventListener('submit', submitHandler);