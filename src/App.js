import { useState, useEffect} from 'react'
import './App.css'
import SingleCard from './components/SingleCard'


//CARD ARRAY
//each is an object with 1 prop 
const cardImages = [
  { "src": "/img/tiger-1.png", matched: false },
  { "src": "/img/butterfly-1.png", matched: false },
  { "src": "/img/frog-1.png", matched: false },
  { "src": "/img/chamelion-1.png", matched: false},
  { "src": "/img/birds-1.png", matched: false },
  { "src": "/img/monkey-1.png", matched: false }
]

//shuffle card function 
function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)


  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] 
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  //handle a choice 
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //comparing two cards 
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
       } else {
       setTimeout(() => resetTurn(), 1000)
    }
  }
}, [choiceOne, choiceTwo])

console.log(cards)

//reset choices & increase turn 
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)
}

// start a new game 
useEffect(() => {
  shuffleCards()
}, [])

  return (
    //app div
    <div className="App">
      <h1>Jungle Matching Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            //3 instances where a card should be flipped 
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
            //passing disabled value into disabled prop
            />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App