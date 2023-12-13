import React, { useState } from "react";


function Quizzo(){
            const [showResults, setShowResults] = useState(false);
            const [currentQuestion, setCurrentQuestion] = useState(0);
            const [score, setScore] = useState(0);

            const questions = [
                {
        text: "What is Credit?",
        options: [
            { id: 0, text: "the reputation you have among local vendors", facts: false },
            { id: 1, text: "the amount of money you have", facts: false },
            { id: 2, text: "The ability to borrow money or acess goods  or servis with the understanding that payment is done at a later date", facts: true },
            { id: 3, text: "the governments records of wheter you paid taxes or not", facts: false },
        ],
        },
        {
        text: "Why is credit Imporant?",
        options: [
            { id: 0, text: "it affects your ability to make huge purcahses or get loans", facts: true },
            { id: 1, text: "it can prevent you from getting married", facts: false },
            { id: 2, text: "you get a party if your credit is good", facts: false },
            { id: 3, text: "having a good credit  makes you rich", facts: false },
        ],
        },
        {
        text: "Which of the following is NOT one of the four types of credit?",
        options: [
            { id: 0, text: "Spinning Credit", facts: true },
            { id: 1, text: "Installment Credit", facts: false },
            { id: 2, text: "Open Credit", facts: false },
            { id: 3, text: "Closed Credit", facts: false },
        ],
        },
        {
        text: "What is installment credit?",
        options: [
            { id: 0, text: "paying money all at once for a purchase", facts: false },
            { id: 1, text: "borrowing a set amoutn and paying it back over in installments", facts: true },
            { id: 2, text: "a preset credit limit with flexible repayment terms", facts: false },
            { id: 3, text: "borrowing for a specific purpose typically fore homebuying", facts: false },
        ],
        },
        {
        text: "Which credit score is the best?",
        options: [
            { id: 0, text: "700", facts: false },
            { id: 1, text: "850", facts: true },
            { id: 2, text: "300", facts: true },
            { id: 3, text: "555", facts: false },
        ],
        },
    ];

    // Helper Functions

    /* A possible answer was clicked */
    const optionClicked = (facts) => {
        // Increment the score
        if (facts) {
        setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        } else {
        setShowResults(true);
        }
    };

   
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    return (
        <div className="App">
        
        <h1>Credit Quiz!</h1>

        
        <h2>Score: {score}</h2>

       
        {showResults ? (
            
            <div className="final-results">
            <h1>Final Results</h1>
            <h2>
                {score} out of {questions.length} correct - (
                {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Restart game</button>
            </div>
        ) : (
            
            <div className="question-card">
            
            <h2>
                Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>

          
            <ul>
                {questions[currentQuestion].options.map((option) => {
                return (
                    <li
                    key={option.id}
                    onClick={() => optionClicked(option.facts)}
                    >
                    {option.text}
                    </li>
                );
                })}
            </ul>
            </div>
        )}
        </div>
    );
}

const container = document.getElementById('quiz-container');
ReactDOM.render(React.createElement(Quizzo), container);

