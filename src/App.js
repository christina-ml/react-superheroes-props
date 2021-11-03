import superHeroes from './data/superHeroes';
import SpiderMan from './components/SpiderMan';
import IronMan from './components/IronMan';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="title">Marvel Superheroes!</h1>
      <button>Add a Superhero!</button>
      <div id="heroesContainer">
        <SpiderMan spiderMan={superHeroes[0]}/>
        <IronMan ironMan={superHeroes[6]}/>
      </div>
    </div>
  );
}

export default App;
