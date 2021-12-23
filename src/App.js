import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'


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
    const [choiceOne, setChoiceOne] = useState(null)
    //when user clicks on first card, it will update choice one to be that card 
    const [choiceTwo, setChoiceTwo] = useState(null)
     //when user clicks on second card, it will update choice one to be that card 


  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] 
    //creates an array of 12 cards (6 each)
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random() }))

    setCards(shuffledCards)
    //updates card state to be shuffled cards 
    setTurns(0)
  }

  //handle a choice 
  const handleChoice = (card) => {
  //takes card user has chosen as an arg
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    //if choiceOne evaluates to null = false, if not null(has a value)= true
    //it will either run setChoiceTwo() or setChoiceOne() depending on what it evaluates to 
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
            //passed in the handle choice function to the single card component 
            //it takes the card argument that is then logged to console 
            />
        ))}
      </div>
    </div>
  );
}

export default App