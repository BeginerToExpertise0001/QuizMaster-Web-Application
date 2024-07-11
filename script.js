// Get DOM elements
const homepageSection = document.getElementById('homepageSection');
const quizSection = document.getElementById('quizSection');
const dashboardSection = document.getElementById('dashboardSection');
const leaderboardSection = document.getElementById('leaderboardSection');
const backToHomepageBtn = document.getElementById('backToHomepageBtn');
const startQuizBtn = document.getElementById('startQuizBtn');
const finishQuizBtn = document.getElementById('finishQuizBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');

const userNameInput = document.getElementById('userName');
const quizProgressSpan = document.getElementById('quizProgress');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const quizScoreDashboard = document.getElementById('quizScoreDashboard');
const quizTimeDashboard = document.getElementById('quizTimeDashboard');
const leaderboardList = document.getElementById('leaderboardList');

// Quiz data (example structure, replace with your actual quiz data)


const quizData = [{
        question: "What does HTML stand for?",
        options: [
            "Hyper Transfer Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        options: [
            "<a>",
            "<link>",
            "<href>",
            "<hyperlink>"
        ],
        answer: "<a>"
    },
    {
        question: "Which attribute is used to specify that an input field must be filled out?",
        options: [
            "required",
            "validate",
            "placeholder",
            "mandatory"
        ],
        answer: "required"
    },
    {
        question: "In HTML, which tag is used to create a numbered list?",
        options: [
            "<ol>",
            "<ul>",
            "<list>",
            "<li>"
        ],
        answer: "<ol>"
    },
    {
        question: "What does the <canvas> element in HTML5 provide?",
        options: [
            "A container for graphics",
            "A way to embed audio files",
            "A method to embed video files",
            "A container for text formatting"
        ],
        answer: "A container for graphics"
    },
    {
        question: "Which tag is used to define an image in HTML?",
        options: [
            "<img>",
            "<image>",
            "<picture>",
            "<src>"
        ],
        answer: "<img>"
    },
    {
        question: "What does the <header> tag represent in HTML5?",
        options: [
            "A section that contains navigation links",
            "The main content area of the page",
            "The introductory content at the top of the page",
            "A footer section at the bottom of the page"
        ],
        answer: "The introductory content at the top of the page"
    },
    {
        question: "Which attribute is used in HTML to specify a tooltip for an element?",
        options: [
            "title",
            "tooltip",
            "hover",
            "info"
        ],
        answer: "title"
    },
    {
        question: "What is the correct HTML for inserting an image?",
        options: [
            "<image src='image.jpg' alt='MyImage'>",
            "<img src='image.jpg' alt='MyImage'>",
            "<image href='image.jpg' alt='MyImage'>",
            "<img href='image.jpg' alt='MyImage'>"
        ],
        answer: "<img src='image.jpg' alt='MyImage'>"
    },
    {
        question: "Which tag is used to define a table row in HTML?",
        options: [
            "<table>",
            "<tr>",
            "<td>",
            "<th>"
        ],
        answer: "<tr>"
    },
    {
        question: "Which property is used to change the background color of an element in CSS?",
        options: [
            "color",
            "background-color",
            "bg-color",
            "bgcolor"
        ],
        answer: "background-color"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which CSS property controls the text size within an element?",
        options: [
            "text-style",
            "font-size",
            "text-size",
            "font-style"
        ],
        answer: "font-size"
    },
    {
        question: "How do you apply a CSS rule to an element with id 'myElement'?",
        options: [
            "#myElement { ... }",
            ".myElement { ... }",
            "element.myElement { ... }",
            "id:myElement { ... }"
        ],
        answer: "#myElement { ... }"
    },
    {
        question: "Which CSS property is used to make text italic?",
        options: [
            "font-style",
            "text-decoration",
            "italic",
            "font-italic"
        ],
        answer: "font-style"
    },
    {
        question: "What does the CSS 'float' property do?",
        options: [
            "Aligns an element to the center",
            "Floats an element to the right or left",
            "Makes an element transparent",
            "Adds a shadow to an element"
        ],
        answer: "Floats an element to the right or left"
    },
    {
        question: "How can you include a CSS file named 'styles.css' in an HTML document?",
        options: [
            "<link href='styles.css' rel='stylesheet'>",
            "<style src='styles.css'></style>",
            "<css src='styles.css'></css>",
            "<include src='styles.css'>"
        ],
        answer: "<link href='styles.css' rel='stylesheet'>"
    },
    {
        question: "Which CSS property is used to add spacing between letters in a text?",
        options: [
            "letter-spacing",
            "word-spacing",
            "line-spacing",
            "text-spacing"
        ],
        answer: "letter-spacing"
    },
    {
        question: "What does the CSS property 'position: absolute;' do?",
        options: [
            "Positions an element relative to its parent",
            "Positions an element relative to the browser window",
            "Positions an element at the center of the page",
            "Positions an element with a fixed position"
        ],
        answer: "Positions an element relative to the browser window"
    },
    {
        question: "What is the purpose of responsive web design?",
        options: [
            "To create websites that are compatible with older browsers",
            "To make websites load faster",
            "To optimize websites for search engines",
            "To ensure websites look good on all devices and screen sizes"
        ],
        answer: "To ensure websites look good on all devices and screen sizes"
    },
    {
        question: "What does SEO stand for in the context of web development?",
        options: [
            "Search Engine Optimization",
            "Search Engine Operations",
            "Site Engine Optimization",
            "Site Engine Operations"
        ],
        answer: "Search Engine Optimization"
    },
    {
        question: "Which programming language is commonly used for server-side scripting in web development?",
        options: [
            "JavaScript",
            "HTML",
            "CSS",
            "PHP"
        ],
        answer: "PHP"
    },
    {
        question: "What is a CSS framework?",
        options: [
            "A tool for compressing CSS files",
            "A library of pre-written CSS styles",
            "A method for securing CSS code",
            "A technique for animating CSS properties"
        ],
        answer: "A library of pre-written CSS styles"
    },
    {
        question: "What is the purpose of AJAX in web development?",
        options: [
            "To create animations using JavaScript",
            "To make asynchronous HTTP requests from the browser to the server",
            "To compress images on a web page",
            "To manage sessions in PHP"
        ],
        answer: "To make asynchronous HTTP requests from the browser to the server"
    },
    {
        question: "What is the role of a web server in serving web pages?",
        options: [
            "To store HTML and CSS files",
            "To manage databases",
            "To process requests from clients and send back responses",
            "To execute JavaScript code"
        ],
        answer: "To process requests from clients and send back responses"
    },
    {
        question: "What is the purpose of a CSS reset file?",
        options: [
            "To clear browser caches",
            "To provide default styles for all HTML elements",
            "To reload the CSS files",
            "To reset the layout of a web page"
        ],
        answer: "To provide default styles for all HTML elements"
    },
    {
        question: "What does HTTP stand for in the context of web development?",
        options: [
            "Hyperlinks and Text Transfer Protocol",
            "HyperText Transfer Protocol",
            "High Transfer Text Protocol",
            "Hyper Text and Transfer Protocol"
        ],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        options: [
            "To define metadata about an HTML document",
            "To insert images into an HTML document",
            "To create hyperlinks to other web pages",
            "To style text within an HTML document"
        ],
        answer: "To define metadata about an HTML document"
    },
    {
        question: "What is the role of JavaScript in web development?",
        options: [
            "To create the structure and content of web pages",
            "To define the styling of web pages",
            "To enhance interactivity and functionality of web pages",
            "To define the layout of web pages"
        ],
        answer: "To enhance interactivity and functionality of web pages"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let startTime, endTime;

// Event listeners
startQuizBtn.addEventListener('click', startQuiz);
finishQuizBtn.addEventListener('click', finishQuiz);
backToHomepageBtn.addEventListener('click', showHomepage);

// Functions
function startQuiz() {
    const userName = userNameInput.value.trim();
    if (userName !== '') {
        homepageSection.style.display = 'none';
        quizSection.style.display = 'block';
        backToHomepageBtn.style.display = 'inline-block';
        quizProgressSpan.textContent = userName;

        showQuestion();
        startTime = new Date().getTime();
    } else {
        alert('Please enter your name to start the quiz.');
    }
}

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;

    // Clear previous options
    optionsList.innerHTML = '';

    // Display options as radio buttons
    currentQuestion.options.forEach((option, index) => {
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.id = `option${index}`;
        optionInput.name = 'quizOption';
        optionInput.value = option;

        const optionLabel = document.createElement('label');
        optionLabel.setAttribute('for', `option${index}`);
        optionLabel.textContent = option;

        const br = document.createElement('br');

        optionsList.appendChild(optionInput);
        optionsList.appendChild(optionLabel);
        optionsList.appendChild(br);
    });
}

function finishQuiz() {
    endTime = new Date().getTime();
    const elapsedTime = (endTime - startTime) / 1000;

    // Calculate score based on selected answers
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    if (selectedOption) {
        const selectedValue = selectedOption.value;
        const correctAnswer = quizData[currentQuestionIndex].answer;
        if (selectedValue === correctAnswer) {
            score++;
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        quizSection.style.display = 'none';
        dashboardSection.style.display = 'block';
        backToHomepageBtn.style.display = 'inline-block';

        quizScoreDashboard.textContent = `Your Score: ${score}/${quizData.length}`;
        quizTimeDashboard.textContent = `Time taken: ${elapsedTime.toFixed(1)} seconds`;

        // Save score to local storage (example)
        const quizResult = {
            userName: userNameInput.value.trim(),
            score: `${score}/${quizData.length}`,
            time: `${elapsedTime.toFixed(1)} seconds`
        };

        // Retrieve existing leaderboard data from local storage
        let leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];

        // Add current quiz result to leaderboard data
        leaderboardData.push(quizResult);

        // Sort leaderboard by score (descending order)
        leaderboardData.sort((a, b) => {
            const scoreA = parseInt(a.score.split('/')[0]);
            const scoreB = parseInt(b.score.split('/')[0]);
            return scoreB - scoreA;
        });

        // Limit leaderboard to top 10 scores (adjust as needed)
        leaderboardData = leaderboardData.slice(0, 10);

        // Update local storage with sorted leaderboard data
        localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));

        // Display leaderboard
        displayLeaderboard(leaderboardData);
    }
}

function displayLeaderboard(data) {
    leaderboardList.innerHTML = ''; // Clear existing leaderboard list

    data.forEach((result, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${result.userName} - ${result.score}, Time: ${result.time}`;
        leaderboardList.appendChild(listItem);
    });

    leaderboardSection.style.display = 'block';
}

function showHomepage() {
    homepageSection.style.display = 'block';
    quizSection.style.display = 'none';
    dashboardSection.style.display = 'none';
    leaderboardSection.style.display = 'none';
    backToHomepageBtn.style.display = 'none';

    // Reset quiz variables if needed
    currentQuestionIndex = 0;
    score = 0;
}

// Initialize leaderboard display on page load
window.onload = () => {
    const leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];
    displayLeaderboard(leaderboardData);
};