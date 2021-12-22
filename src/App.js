import { useState } from 'react'
import './App.css'


//CARD ARRAY
//each is an object with 1 prop 
const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },

]

//shuffle card function 
function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] 
    //creates an array of 12 cards (6 each)
    .sort(() => Math.random() - 0.5)
    //fires a function for each item or pair of items in the above array [...cardImages, ...cardImages]
    .map((card) => ({...card, id: Math.random() }))
    // ...card: takes the card and it's properties (currently only prop is src )
    //id: Match.random() sets a random ID on each object

    setCards(shuffledCards)
    //updates card state to be shuffled cards 
    setTurns(0)
  }

  console.log(cards,turns)
  //2 pieces of state

  return (
    //app div
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/cover.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App