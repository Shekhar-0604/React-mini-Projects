import React, { useState } from "react";
import { QuestionData } from "../QuestionData";
function Quiz() {
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const changeQuestion = () => {
    updateScore();
    if (currentQues < QuestionData.length - 1) {
      setCurrentQues(currentQues + 1);
    }
  };
  const updateScore = () => {
    if (clickedOption === QuestionData[currentQues].answer) {
      setScore(score + 1);
    }
  };
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        <div className="question">
          <span id="question-number">{currentQues + 1}.</span>
          <span id="question-txt">{QuestionData[currentQues].question}</span>
        </div>
        <div className="option-container">
          {QuestionData[currentQues].options.map((option, i) => {
            return (
              <button
                className={`option-btn ${
                  clickedOption == i + 1 ? "checked" : null
                }`}
                //className="option-btn"
                key={i}
                onClick={() => setClickedOption(i + 1)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <input
          type="button"
          value="Next"
          id="next-button"
          onClick={changeQuestion}
        />
      </div>
    </div>
  );
}

export default Quiz;
