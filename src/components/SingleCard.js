import './SingleCard.css'

//props object 
export default function SingleCard({ card, handleChoice }) {
  //card is a prop that is passed in from app.js so you have access to it here 

  const handleClick = () => {
    handleChoice(card)
    //calls function that was passed into props object 

  }
  return (
    <div className="card">
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img 
                className="back" 
                src="/img/cover.png" 
                onClick={handleClick} 
                alt="card back" 
              />
          </div>
      </div>
    )
}
