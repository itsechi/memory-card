export const Card = (props) => {
  return (
    <div>
      <h1 className="card" data-id={props.id}>{props.id}</h1>
    </div>
  );
};
