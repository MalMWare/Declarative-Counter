// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to become God.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css'

function App(){
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter
  return ( 
    <div>
      <h1>{counter}</h1>
      <h2>{counter}</h2>
      <h4>{counter}</h4>
    </div>
  )
}

export default App;