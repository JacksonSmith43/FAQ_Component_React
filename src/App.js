import React from 'react';

const FAQ = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
  },
];

const FAQComponent = () => {
  const [visibleQuestions, setVisibleQuestions] = React.useState(
    FAQ.map((_, index) => index === 0)
  );

  const togggleVisibility = (index) => {
    setVisibleQuestions((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <div>
      {FAQ.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => togggleVisibility(index)}>{faq.question}</h3>
          <p style={{ display: visibleQuestions[index] ? "block" : "none" }}>
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="app-header">
        <FAQComponent />
      </header>
    </div>
  );
};

export default App;