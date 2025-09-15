// ===============================
// PART 1: Variable Declarations & Conditionals
// ===============================
let userName = "Bunmi";
let isStudent = true;

// Conditional Example
if (isStudent) {
    document.getElementById("greeting").innerText = "Hello " + userName + ", welcome student!";
} else {
    document.getElementById("greeting").innerText = "Hello " + userName + ", welcome guest!";
}

// ===============================
// PART 2: Custom Functions
// ===============================

// Function 1: Change text dynamically
function changeText() {
    document.getElementById("result").innerText = "You clicked the button!";
}

// Function 2: Calculate sum of numbers
function calculateSum(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// ===============================
// PART 3: Loops
// ===============================

// Example 1: For loop to generate numbers
function generateNumbers() {
    let list = document.getElementById("numberList");
    list.innerHTML = ""; // clear previous numbers
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.innerText = "Number " + i;
        list.appendChild(li);
    }
}

// Example 2: While loop to display only even numbers
function displayEvenNumbers() {
    let evens = [];
    let i = 2;
    while (i <= 10) {
        evens.push(i);
        i += 2;
    }
    return evens;
}

// ===============================
// PART 4: DOM Interactions
// ===============================
// 1) Add event listener to change text
document.getElementById("btnChangeText").addEventListener("click", changeText);

// 2) Generate numbers and display them
document.getElementById("btnGenerateNumbers").addEventListener("click", generateNumbers);

// 3) Calculate sum and show result
document.getElementById("btnCalculateSum").addEventListener("click", function() {
    let evens = displayEvenNumbers();
    let sum = calculateSum(evens);
    document.getElementById("result").innerText = "Sum of even numbers (2-10) is: " + sum;
});
