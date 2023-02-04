export const Score = (props) => {
  return (
    <header className="scoreboard">
      <p className="scoreboard__score">
        SCORE <span>{props.currentScore}</span>
      </p>
      <h1 className="scoreboard__header">VALORANT MEMORY</h1>
      <p className="scoreboard__score">
        BEST <span>{props.bestScore}</span>
      </p>
    </header>
  );
};
