import ShopItem from "./ShopItem";

function ListView(props) {
  return (
    <section className="ListView">
      {Array.from(props.products).map((product, productIndex) => {
        return (
          <ShopItem
            key={productIndex}
            name={product.name.toUpperCase()}
            price={product.price}
            color={product.color}
            img={product.img}
          />
        );
      })}
    </section>
  );
}

export default ListView;
