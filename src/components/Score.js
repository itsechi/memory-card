export const Score = (props) => {
  return (
    <header className="scoreboard">
      <p className="score">
        SCORE <span>{props.currentScore}</span>
      </p>
      <h1 className="header">VALORANT MEMORY</h1>
      <p className="score">
        BEST <span>{props.bestScore}</span>
      </p>
    </header>
  );
};
