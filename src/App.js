import superHeroes from './data/superHeroes';
import SpiderMan from './components/SpiderMan';
import IronMan from './components/IronMan';

// import HeroList from './components/HeroList';
import HeroCard from './components/HeroCard';
import './App.css';

function App() {
  let allHeroes = superHeroes.map((hero, i) => {
    return (<HeroCard key={hero.name + i} hero={hero} />)
  })

  console.log(allHeroes);

  return (
    <div className="App">
      <h1 id="title">Marvel Superheroes!</h1>
      <button>Add a Superhero!</button>
      <div id="heroesContainer">
        {/* <SpiderMan spiderMan={superHeroes[0]}/>
        <IronMan ironMan={superHeroes[6]}/> */}
        {allHeroes}
      </div>
    </div>
  );
}

export default App;
