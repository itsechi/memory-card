export const Score = (props) => {
  return (
    <div>
      <h1>Current score: {props.currentScore}</h1>
      <h1>Best score: {props.bestScore}</h1>
    </div>
  );
};
