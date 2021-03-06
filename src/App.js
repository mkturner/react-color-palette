import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  // set up state hooks to use later
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  // handleSubmit function
  const handleSubmit = (e) => {
    // prevent default page refresh
    e.preventDefault();
    // validation with values.js
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setError(true);
      // display error on console
      console.log(console.error);
    }
  };

  return (
    <>
      <section className='container'>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#0000ff'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            Button
          </button>
        </form>
      </section>
      <section className='colors'>
        <h3>List goes here.</h3>
      </section>
    </>
  );
}

export default App;
