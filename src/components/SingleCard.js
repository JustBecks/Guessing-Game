import './SingleCard.css'

//props object 
export default function SingleCard({ card, handleChoice, flipped }) {
  //card is a prop that is passed in from app.js so you have access to it here 

  const handleClick = () => {
    //two
    handleChoice(card)

  }
  return (
    <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="card front" />
              <img 
                className="back" 
                src="/img/cover.png" 
                //one
                onClick={handleClick} 
                alt="card back" 
              />
          </div>
      </div>
    )
}
