import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ title, feedback, feedbackHandler }) => {
  return (
    <button className={title} onClick={() => feedbackHandler(feedback + 1)}>
      {title}
    </button>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="total" value={total} />
            <Statistic text="average" value={average.toFixed(2)} />
            <Statistic text="positive" value={good ? positive.toFixed(2) : 0} />
          </tbody>
        </table>
      </>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = total / 3;
  const positive = (good / total) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <div className="buttons">
        <Button title="good" feedback={good} feedbackHandler={setGood} />
        <Button title="bad" feedback={bad} feedbackHandler={setBad} />
        <Button
          title="neutral"
          feedback={neutral}
          feedbackHandler={setNeutral}
        />
      </div>

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
