function ShopItem(props) {
  return (
    <article className="ShopItem">
      <div className="ShopItem__cell">
        <img
          className="ShopItem__img"
          alt="{props.name}"
          title="{props.name}"
          src="{props.img}"
        />
      </div>
      <div className="ShopItem__cell">
        <h3 className="ShopItem__header">{props.name}</h3>
      </div>
      <div className="ShopItem__cell">
        <span className="ShopItem__color"> {props.color} </span>
      </div>
      <div className="ShopItem__cell">
        <span className="ShopItem__price"> ${props.price} </span>
      </div>
      <div className="ShopItem__cell">
        <div className="ShopItem__button">ADD TO CART</div>
      </div>
    </article>
  );
}
export default ShopItem;
