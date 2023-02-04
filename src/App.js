import React, { useState } from 'react'
import './App.css';

const questions = [
  {
    title: 'What is the capital of Azerbaijan?',
    options: ['Baku', 'Banjul', 'Stockholm'],
    correct: 0,
  },
  {
    title: 'What is the capital of Iceland?',
    options: ['Bangkok', 'Reykjavík', 'London'],
    correct: 1,
  },
  {
    title: 'What is the capital of Norway?',
    options: ['Tehrān', 'Oslo', 'Dortmund'],
    correct: 1,
  },
  {
    title: 'What is the capital of Greece?',
    options: ['Singapore', 'Chișinău', 'Athens'],
    correct: 2,
  },
  {
    title: ' What is the capital of the United Kingdom?',
    options: ['Madrid', 'Liverpool', 'London'],
    correct: 2,
  },
];

function Game({ step, nextQuestion }) {
  return (
    <div className='card'>
      <h2 className='title'>{questions[step].title}</h2>
      <div className='questions'>
        {
          questions[step].options.map((item, index) =>
            <p key={item} className='li__item' onClick={() => nextQuestion(index)}>{item}</p>
          )
        }
      </div>
    </div>
  );
}

function Result({ correct }) {
  return (
    <div className='result'>
      <div className='result__text'>Congratulation, you finish the test. You have {correct} correct answers</div>
      <a href="https://vitaliyzekter.github.io/quiz/">
        <button>Start again</button>
      </a>
    </div>
  );
}


function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const nextQuestion = (index) => {
    if (questions[step].correct === index) {
      setCorrect(correct + 1);
    }

    setStep(step + 1);
  }
  return (
    <>
      {
        step !== questions.length ? <Game step={step} nextQuestion={nextQuestion} /> : <Result correct={correct} />
      }
    </>
  );
}

export default App;
