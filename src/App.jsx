import './App.css';
import story from './data/story.json';
import { useState } from 'react';

function App() {
  console.log(story[0]);

  const [pageState, setPageState] = useState(0);

  console.log(pageState);

  return (
    <div>
      <h1>{story[pageState].description}</h1>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          listStyle: 'none',
        }}
      >
        {story[pageState].options.map((option, index) => {
          return (
            <li key={index}>
              <button onClick={() => setPageState(option.target)}>
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
