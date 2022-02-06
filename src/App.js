import NavBar from './components/NavBar';
import Cards from './components/Cards';
import './App.css';
import CardData from './components/CardData';

function App() {
  let eachCard = CardData.map(item=>
      <Cards
          key ={item.key}
          item = {item}
          
      />
      )
  return (
    <div className="App">
        <NavBar/>
        <section>
          {eachCard}
        </section>
    </div>
  );
}

export default App;
