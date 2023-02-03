export const Victory = (props) => {
  return (
    <div className="overlay">
      <p>VICTORY</p>
      <button onClick={props.restartGame}>PLAY AGAIN</button>
    </div>
  );
};
