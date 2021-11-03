import superHeroes from './data/superHeroes';
import SpiderMan from './components/SpiderMan';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="title">Marvel Superheroes!</h1>
      <button>Add a Superhero!</button>
      <div id="heroesContainer">
        <SpiderMan spiderMan={superHeroes[0]}/>
      </div>
    </div>
  );
}

export default App;
