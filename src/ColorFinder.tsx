import { useState } from "react";
import { optionsAndAnswerGenerator } from "./utils";

function ColorFinder() {
  const [optionsAndAnswer, setOptionsAndAnswer] = useState(
    optionsAndAnswerGenerator()
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<null | boolean>(null);
  const { options, answer } = optionsAndAnswer;

  const getMessage = () => {
    let message = "";
    if (isAnswerCorrect) message = "Answer is correct!!";
    else if (isAnswerCorrect === false) message = "Answer is wrong :(";
    return <span>{message}</span>;
  };

  const handleClick = (optionValue: number) => {
    const isCorrect = optionValue === answer;
    if (isCorrect) setOptionsAndAnswer(optionsAndAnswerGenerator());
    setIsAnswerCorrect(optionValue === answer);
  };

  return (
    <>
      <div className="inner-container">
        <div
          className="color-box"
          style={{
            background: options[answer],
          }}
        ></div>
        <div className="options">
          {Array.from({ length: 3 }, (_, i) => (
            <button onClick={() => handleClick(i)} key={i}>
              {options[i]}
            </button>
          ))}
        </div>
        {getMessage()}
      </div>
    </>
  );
}

export default ColorFinder;
