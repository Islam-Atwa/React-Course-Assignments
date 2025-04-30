import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import MangingState from './MangingState';
import MangingStateForm from './MangingStateForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-header App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton/>
        <MangingState/>
        <h1>-------- State Forms --------</h1>
        <MangingStateForm/>
      </header>
    </div>
  );
}

export default App;
