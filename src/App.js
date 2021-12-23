import { useState, useEffect} from 'react'
import './App.css'
import SingleCard from './components/SingleCard'


//CARD ARRAY
//each is an object with 1 prop 
const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false},
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false }
  //cards will keep matched property set to false when cards are shuffled 

]

//shuffle card function 
function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)


  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] 
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  //handle a choice 
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //comparing two cards 
  //useEffect accepts two arguments, function(), dependency - second is optional 
  //listens for change of state. Triggers anytime an update happens to the react component 
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        //updates card state
        setCards(prevCards => {
          //returns new array of cards
          return prevCards.map(card => {
            //fires function for each card 
            //each time we fire a function, we return the object that we want to return inside the new array we're returning
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
       } else {
      
        resetTurn()
    }
  }
}, [choiceOne, choiceTwo])

console.log(cards)

//reset choices & increase turn 
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}

  return (
    //app div
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            //passes card to SingleCard object 
            handleChoice={handleChoice}
            />
        ))}
      </div>
    </div>
  );
}

export default App