export const Card = (props) => {
  function importImages(r) {
    let images = {};
    r.keys().map((item) => (images[item.replace("./", "")] = r(item)));
    return images;
  }

  const images = importImages(
    require.context("../assets", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div>
      <img
        width="100"
        src={images[`${props.id}.png`]}
        className="card"
        data-id={props.id}
        alt=""
      ></img>
    </div>
  );
};
