function createNewField() {

    // Create a new input element
    var newField = document.createElement("input");
    newField.type = "text";
    newField.placeholder = "--word--";

    // Get form element
    var form = document.getElementById("formMonster");

    // Add new input field to the document
    form.appendChild(document.createElement("br"));
    form.appendChild(newField);
    console.log("DUPA");
}


function createMonster() {
    // Get all the input fields from the form
    var inputFields = document.querySelectorAll("#formMonster input[type='text']");

    // Concatenate all the input field values
    var concatenatedWords = "";
    for (var i = 0; i < inputFields.length; i++) {
        concatenatedWords += inputFields[i].value;
    }

    // Mix the order of the letters in the concatenated words
    var mixedLetters = "";
    while (concatenatedWords.length > 0) {
        var randomIndex = Math.floor(Math.random() * concatenatedWords.length);
        mixedLetters += concatenatedWords.charAt(randomIndex);
        concatenatedWords = concatenatedWords.slice(0, randomIndex) + concatenatedWords.slice(randomIndex + 1);
    }

    // Get the input field and output element
    var monsterResult = document.getElementById("monsterResult");

    // Output the result in the output element
    monsterResult.textContent = mixedLetters;
}

function calculateAverage() {
    // Get the input field element
    const inputField = document.getElementById("numbers");

    // Split the input string by commas and convert to an array of numbers
    const numbers = inputField.value.split(",").map(Number);

    // Calculate the sum of all the numbers in the array
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate the average by dividing the sum by the number of elements in the array
    const average = sum / numbers.length;

    // Output the average to the output field element
    const outputField = document.getElementById("averageResult");
    outputField.textContent = average;
}

function calculate() {
    // Get the input field values
    var numberOne = parseFloat(document.getElementById("numberOne").value);
    var numberTwo = parseFloat(document.getElementById("numberTwo").value);

    // Get the selected calculation type
    var calculationType = document.querySelector("#typeOfCalculation input[type='radio']:checked").id;

    // Calculate the result based on the selected type
    var result;
    switch (calculationType) {
        case "addition":
            result = numberOne + numberTwo;
            break;

        case "substraction":
            result = numberOne - numberTwo;
            break;

        case "multiplication":
            result = numberOne * numberTwo;
            break;

        case "division":
            // Check if the second number is zero for division operation
            if (numberTwo === 0) {
                alert("Cannot divide by zero");
                return;
            } else {
                result = numberOne / numberTwo;
            }
            break;

        default:
            alert("Please select a calculation type");
            return;
    }

    // Display the result
    document.getElementById("result").value = result;
}