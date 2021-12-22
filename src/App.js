import { useState } from 'react'
import './App.css'


//arrays can be created outside the component because they are a constant and will never need to change
//this also means that the array will not need to be recreated every time the component is re-evaluated

//CARD ARRAY
const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/portion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
  //each one is an object with 1 property, which is a src property 
]

//function inside component 
function App() {
  //function will have 3 tasks 
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] 
    //spread syntax takes each of the cardImages and dulicates it 
    //creates an array of 12 cards (6 each)
    .sort(() => Math.random() - 0.5)
    //fires a function for each item or pair of items in the above array [...cardImages, ...cardImages]
    //if we return a number less than 0, the order of items stays the same
    //greater than 0, order of 2 items gets mixed up
    .map((card) => ({...card, id: Math.random() }))
    //fires a function for each item in the sorted array; for each one, it adds an id property and will return an object
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
    </div>
  );
}

export default App