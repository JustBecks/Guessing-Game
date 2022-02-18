import './SingleCard.css'

//props object 
export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  //card is a prop that is passed in from app.js so you have access to it here 

  const handleClick = () => {
    if(!disabled) {
    handleChoice(card)
    }
  }
  return (
    <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="card front" />
              <img 
                className="back" 
                src="/img/junglecover-1.png"
                onClick={handleClick} 
                alt="card back" 
              />
          </div>
      </div>
    )
}
