import './App.css';
import Pessoas from "./vqv";

function Estudando() {
  return 'React!';
}

function App() {
  return (
    <div>
      <h1>Vamo que vamo!</h1>
      <span><p>Aprendendo {Estudando()}</p></span>
      <Pessoas />
    </div>
  );
}

export default App;
