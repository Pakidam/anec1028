import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const init_state = props.anecdotes;

  const [selected, setSelected] = useState(0);
  const [list, setList] = useState(init_state);

  const inCreaseVote = i => {
    const anecdoteDisplayed = list.map((anecdote, j) => {
      if (j === i) {
        return { ...anecdote, vote: anecdote.vote + 1 };
      } else {
        return anecdote;
      }
    });
    setList(anecdoteDisplayed);
  };

  return (
    <div>
      <ul>
        {list.map((anecdote, index) => (
          <li key={anecdote.id}>
            {anecdote.message}
            has {anecdote.vote} votes.
            <button type="button" onClick={() => inCreaseVote(index)}>
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const anecdotes = [
  { message: "If it hurts, do it more often", vote: 0, id: 0 },
  {
    message: "Adding manpower to a late software project makes it later!",
    vote: 0,
    id: 1
  },
  {
    message:
      "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    vote: 0,
    id: 2
  },
  {
    message:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    vote: 0,
    id: 3
  },
  {
    message: "Premature optimization is the root of all evil.",
    vote: 0,
    id: 4
  },
  {
    message:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    vote: 0,
    id: 5
  }
];

const anecdotes2 = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
