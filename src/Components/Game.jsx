import React, { useState } from "react";

// correct answer will be this formate: Option A = 0, Option B = 1, Option C = 2, Option D = 3

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: 1,
  },
  {
    question: "Which is not number?",
    options: ["Space", "999", "7Eleven", "Sixteen"],
    correctAnswer: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Mars", "Venus", "Saturn"],
    correctAnswer: 1,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: 1,
  },
 
];


function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    const updatedAnswers = [...chosenAnswers];
    updatedAnswers[currentQuestion] = index;
    setChosenAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    chosenAnswers.forEach((selectedOption, index) => {
      if (selectedOption === questions[index].correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100">
      <div className="w-full mx-[50px] md:mx-[300px] p-6 bg-white rounded-lg shadow-md mt-20">
        {showScore ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Game Over!</h2>
            <p className="text-lg">Your score: {score}/{questions.length}</p>
          </div>
        ) : (
          <div>
            <p className="quenstion-length">
              <p className="question-length-inner-text">
                {currentQuestion + 1}/{questions.length}
              </p>
            </p>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {questions[currentQuestion].question}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 w-max mx-auto">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full px-4 py-2 transition duration-300 ease-in-out primary-button ${
                    chosenAnswers[currentQuestion] === index
                      ? "primary-button-active"
                      : ""
                  } hover:bg-green-400 mb-2`}
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between gap-4 items-center mt-3 ">
              {currentQuestion > 0 && (
                <button
                  className="bg-green-500 text-white rounded-md px-4 py-2"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              <div></div>
              {currentQuestion < questions.length - 1 && (
                <button
                  className="bg-green-500 text-white rounded-md px-4 py-2"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
              {currentQuestion === questions.length - 1 && (
                <button
                  className="bg-green-500 text-white rounded-md px-4 py-2"
                  onClick={handleSubmit}
                >
                  Done
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
