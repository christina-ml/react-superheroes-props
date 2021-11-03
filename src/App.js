import HeroList from './components/HeroList';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="heroesContainer">
        <NavBar />
        <HeroList />
      </div>
    </div>
  );
}

export default App;


/* No longer using these in App.js: */
// import superHeroes from './data/superHeroes';
// import SpiderMan from './components/SpiderMan';
// import IronMan from './components/IronMan';
// import HeroCard from './components/HeroCard';

{/* <SpiderMan spiderMan={superHeroes[0]}/>
<IronMan ironMan={superHeroes[6]}/> */}