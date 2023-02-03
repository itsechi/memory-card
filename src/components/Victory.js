export const Victory = (props) => {
  return (
    <div className="overlay">
      <p>VICTORY</p>
      <button onClick={props.restartGame}>
        <span className="btn__slide"></span>
        <span className="btn__text">PLAY AGAIN</span>
      </button>
    </div>
  );
};
