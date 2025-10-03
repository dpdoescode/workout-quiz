import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

// Workout data
const workouts = [
  { name: 'Push-ups', description: 'A chest and arm exercise that strengthens the upper body.' },
  { name: 'Squats', description: 'A lower body exercise that targets quads, hamstrings, and glutes.' },
  { name: 'Plank', description: 'A core exercise that improves stability and endurance.' },
  { name: 'Burpees', description: 'A full body exercise combining squat, push-up, and jump.' },
  { name: 'Lunges', description: 'Targets glutes and legs while improving balance.' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFront, setShowFront] = useState(true);

  // Flip the card
  const flipCard = () => setShowFront(!showFront);

  // Show next random card
  const nextCard = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * workouts.length);
    } while (randomIndex === currentIndex); // Avoid repeating the same card
    setCurrentIndex(randomIndex);
    setShowFront(true);
  };

  return (
    <div className="App">
      <Header
        title="Workout Quiz"
        description="Click the card to see the workout description, then test yourself!"
        total={workouts.length}
      />
      <Card
        workout={workouts[currentIndex]}
        showFront={showFront}
        flipCard={flipCard}
      />
      <button className="next-button" onClick={nextCard}>Next Workout</button>
    </div>
  );
}

export default App;
