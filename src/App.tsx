import React from 'react';
import Blink from './components/Blink';
import logo from './logo.svg';
import './App.css';
import { DocumentTitleMarquee, Marquee } from './components/Marquee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><DocumentTitleMarquee timeout={100} message="Welcome to the 0ld Sk00l! " /></h1>
        <Blink timeout={1000} smoothing="ease">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </Blink>
      </header>
      <footer style={{
        whiteSpace: 'nowrap',
        overflowY: 'hidden',
      }}>
        <Marquee timeout={100} message="The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name." />
      </footer>
    </div>
  );
}

export default App;
