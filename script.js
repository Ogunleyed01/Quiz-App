const quizData = [
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Berlin",
        d: "Madrid",
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        answer: "Jupiter"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "Jane Austen",
        c: "Mark Twain",
        d: "William Shakespeare",
        answer: "William Shakespeare"
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        a: "Silver",
        b: "Copper",
        c: "Gold",
        d: "Aluminum",
        answer: "Gold"
    },
    {
        question: "What year did World War II end?",
        a: "1945",
        b: "1944",
        c: "1946",
        d: "1943",
        answer: "1945"
    },
    {
        question: "Which programming language was created by James Gosling?",
        a: "Python",
        b: "JavaScript",
        c: "Java",
        d: "C++",
        answer: "Java"
    },
    {
        question: "What is the fastest land animal?",
        a: "Lion",
        b: "Cheetah",
        c: "Gazelle",
        d: "Leopard",
        answer: "Cheetah"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which continent is the largest by land area?",
        a: "North America",
        b: "Asia",
        c: "Africa",
        d: "Antarctica",
        answer: "Asia"
    },
    {
        question: "What is the chemical symbol for Iron?",
        a: "Ir",
        b: "Fe",
        c: "In",
        d: "Au",
        answer: "Fe"
    },
    {
        question: "Who invented the telephone?",
        a: "Thomas Edison",
        b: "Alexander Graham Bell",
        c: "Nikola Tesla",
        d: "Albert Einstein",
        answer: "Alexander Graham Bell"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Pacific Ocean",
        d: "Arctic Ocean",
        answer: "Pacific Ocean"
    },
    {
        question: "In what year did the first iPhone release?",
        a: "2005",
        b: "2006",
        c: "2007",
        d: "2008",
        answer: "2007"
    },
    {
        question: "What is the capital of Japan?",
        a: "Seoul",
        b: "Beijing",
        c: "Tokyo",
        d: "Bangkok",
        answer: "Tokyo"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Mercury",
        answer: "Mars"
    },
    {
        question: "Who wrote '1984'?",
        a: "George Orwell",
        b: "Aldous Huxley",
        c: "Ray Bradbury",
        d: "H.G. Wells",
        answer: "George Orwell"
    },
    {
        question: "What is the smallest prime number?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        answer: "2"
    },
    {
        question: "Which country has the largest population?",
        a: "India",
        b: "China",
        c: "USA",
        d: "Russia",
        answer: "India"
    },
    {
        question: "What is the main component of the Sun?",
        a: "Helium",
        b: "Oxygen",
        c: "Hydrogen",
        d: "Nitrogen",
        answer: "Hydrogen"
    },
    {
        question: "Who painted 'The Starry Night'?",
        a: "Claude Monet",
        b: "Vincent van Gogh",
        c: "Pablo Picasso",
        d: "Salvador Dali",
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the hardest natural substance?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Platinum",
        answer: "Diamond"
    },
    {
        question: "Which language has the most native speakers?",
        a: "English",
        b: "Spanish",
        c: "Hindi",
        d: "Mandarin Chinese",
        answer: "Mandarin Chinese"
    },
    {
        question: "What is the speed of light?",
        a: "299,792 km/s",
        b: "199,792 km/s",
        c: "399,792 km/s",
        d: "499,792 km/s",
        answer: "299,792 km/s"
    },
    {
        question: "Who discovered penicillin?",
        a: "Marie Curie",
        b: "Alexander Fleming",
        c: "Louis Pasteur",
        d: "Robert Koch",
        answer: "Alexander Fleming"
    },
    {
        question: "What is the currency of Brazil?",
        a: "Peso",
        b: "Dollar",
        c: "Real",
        d: "Euro",
        answer: "Real"
    },
    {
        question: "Which element is essential for human bones?",
        a: "Iron",
        b: "Calcium",
        c: "Potassium",
        d: "Sodium",
        answer: "Calcium"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Mark Twain",
        answer: "William Shakespeare"
    },
    {
        question: "What is the capital of Australia?",
        a: "Sydney",
        b: "Melbourne",
        c: "Canberra",
        d: "Perth",
        answer: "Canberra"
    },
    {
        question: "Which year did the Berlin Wall fall?",
        a: "1987",
        b: "1988",
        c: "1989",
        d: "1990",
        answer: "1989"
    },
    {
        question: "What is the largest species of shark?",
        a: "Great White Shark",
        b: "Whale Shark",
        c: "Tiger Shark",
        d: "Hammerhead Shark",
        answer: "Whale Shark"
    }
];

// Add this function to get random questions
function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Modify the start of your code to use only 10 random questions
const selectedQuestions = getRandomQuestions(quizData, 10);
let currentQuiz = 0;
let score = 0;
const submitBtn = document.querySelector('button');

// Update loadQuiz function to use selectedQuestions instead of quizData
function loadQuiz() {
    const currentQuizData = selectedQuestions[currentQuiz];
    
    const ibeere = document.querySelector('h3');
    // Add question number (currentQuiz + 1) before the question
    ibeere.innerText = `Question ${currentQuiz + 1}/10: ${currentQuizData.question}`;
    
    const options = document.querySelectorAll('label');

    options[0].innerText = currentQuizData.a;
    options[1].innerText = currentQuizData.b;
    options[2].innerText = currentQuizData.c;
    options[3].innerText = currentQuizData.d;
    
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => radio.checked = false);
}

submitBtn.addEventListener('click', () => {
    // Get selected answer
    const selectedAnswer = document.querySelector('input[type="radio"]:checked');
    
    if (!selectedAnswer) {
        alert('Please select an answer!');
        return;
    }

    // Get the label text of selected answer
    const answer = document.querySelector(`label[for="${selectedAnswer.id}"]`).innerText;
    
    // Check if answer is correct
    if (answer === quizData[currentQuiz].answer) {
        score++;
    }
    
    currentQuiz++;
    
    // Check if quiz is finished
    if (currentQuiz < selectedQuestions.length) {
        loadQuiz();
    } else {
        // Show results
        const quizContainer = document.querySelector('.quiz-container');
        quizContainer.innerHTML = `
            <h2>You answered correctly ${score}/10 questions.</h2>
            <button onclick="location.reload()">Reload Quiz</button>
        `;
    }
});

loadQuiz();