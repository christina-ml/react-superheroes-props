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