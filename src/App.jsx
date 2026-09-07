import './App.css';
import { add, divide, multiply, substract } from '@ykuete/unit_test2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input id="a" />
        <input id="b" />
        <button onClick={ ()=> alert(multiply(document.getElementById('a').value, document.getElementById('b').value))}>Multiply</button>
        <button onClick={ ()=> alert(divide(document.getElementById('a').value, document.getElementById('b').value))}>Divide</button>
        <button onClick={ ()=> alert(add(document.getElementById('a').value, document.getElementById('b').value))}>Add</button>
        <button onClick={ ()=> alert(substract(document.getElementById('a').value, document.getElementById('b').value))}>substract</button>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
