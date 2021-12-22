import './SingleCard.css'

export default function SingleCard({ card }) {
  //card is a prop that is passed in from app.js
  return (
    <div className="card">
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/cover.png" alt="card back" />
            </div>
          </div>
    )
}