const Questions = [{
    id: 0,
    q: "In what year was basketball invented?",
    a: [{ text: "1756", isCorrect: false },
        { text: "1918", isCorrect: false },
        { text: "1891", isCorrect: true },
        { text: "1782", isCorrect: false }
    ]

},
{
    id: 1,
    q: "How long does a netball game last?",
    a: [{ text: "30 minutes", isCorrect: false, isSelected: false },
        { text: "50 minutes", isCorrect: false },
        { text: "45 minutes", isCorrect: false },
        { text: "60 minutes", isCorrect: true }
    ]

},
{
    id: 2,
    q: "How many rules were there initally in basketball?",
    a: [{ text: "12", isCorrect: false },
        { text: "15", isCorrect: false },
        { text: "13", isCorrect: true },
        { text: "7", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Who invented basketball?",
    a: [{ text: "James Naismith", isCorrect: true },
        { text: "Clara Baer", isCorrect: false },
        { text: "Clara Naismith", isCorrect: false },
        { text: "John Naismith", isCorrect: false }
    ]

},
{
    id: 4,
    q: "What was initally used as goals in basketball?",
    a: [{ text: "cooking pots", isCorrect: false },
        { text: "water buckets", isCorrect: false },
        { text: "peach baskets", isCorrect: true },
        { text: "square boxed", isCorrect: false }
    ]

},
]
 

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(203, 160, 232)";
    op2.style.backgroundColor = "lightgrey";
    op3.style.backgroundColor = "lightgrey";
    op4.style.backgroundColor = "lightgrey";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgrey";
    op2.style.backgroundColor = "rgb(203, 160, 232)";
    op3.style.backgroundColor = "lightgrey";
    op4.style.backgroundColor = "lightgrey";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgrey";
    op2.style.backgroundColor = "lightgrey";
    op3.style.backgroundColor = "rgb(203, 160, 232)";
    op4.style.backgroundColor = "lightgrey";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgrey";
    op2.style.backgroundColor = "lightgrey";
    op3.style.backgroundColor = "lightgrey";
    op4.style.backgroundColor = "rgb(203, 160, 232)";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correct!";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Try Again";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 5) {
    id++;
    iterate(id);
    console.log(id);
}

})