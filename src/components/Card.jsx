import './Card.css';

function Card({ workout, showFront, flipCard }) {
  return (
    <div className="card-container" onClick={flipCard}>
      <div className={`card-inner ${showFront ? '' : 'flipped'}`}>
        <div className="card-front">
          {workout.name}
        </div>
        <div className="card-back">
          {workout.description}
        </div>
      </div>
    </div>
  );
}

export default Card;
