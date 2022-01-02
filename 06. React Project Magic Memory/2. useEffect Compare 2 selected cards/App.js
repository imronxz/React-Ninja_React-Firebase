import './App.css';
import { useState, useEffect } from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  { src: '/img/helmet-1.png', matched: false },
  { src: '/img/potion-1.png', matched: false },
  { src: '/img/ring-1.png', matched: false },
  { src: '/img/scroll-1.png', matched: false },
  { src: '/img/shield-1.png', matched: false },
  { src: '/img/sword-1.png', matched: false },
];

function App(props) {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // TODO: shuffel cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    // TODO: set shuffledCards into setCards()
    setCards(shuffledCards);
    setTurns(0);
  };

  // TODO: handleChoice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // TODO: compare 2 selected cards
  /**
   * @param {choiceOne} : first selected card
   * @param {choiceTwo} : second selected card
   * @returns {Conditional_1} choiceOne.src === choiceTwo.src: true if the 2 cards match
   * @returns {Conditional_2} choiceOne.src !== choiceTwo.src: false if the 2 cards don't match
   * @description compare 2 selected cards
   * @description if the 2 cards match, set matched to true
   */
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        // FIXME: set matched to true
        const newCards = cards.map((card) => {
          if (card.src === choiceOne.src || card.src === choiceTwo.src) {
            return { ...card, matched: true };
          }
          return card;
        });
        setCards(newCards);
        resetChoices();
      } else {
        resetChoices();
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  // TODO: reset choices & increase turn
  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
  };

  return (
    <div className="App">
      <h1>Magic Match 🧩</h1>
      <button onClick={shuffleCards}>New Game 🎲</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
