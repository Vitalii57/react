import product from "../data/products";

function ShopCard(props) {
  return (
    <article className="ShopCard">
      <h3 className="ShopCard__header">{props.name}</h3>
      <span className="ShopCard__color"> {props.color} </span>
      <img
        className="ShopCard__img"
        alt="{props.name}"
        title="{props.name}"
        src={props.img}
      />
      <div className="ShopCard__footer">
        <span className="ShopCrad__price"> ${props.price} </span>
        <div className="ShopCard__button">ADD TO CART</div>
      </div>
    </article>
  );
}
export default ShopCard;
