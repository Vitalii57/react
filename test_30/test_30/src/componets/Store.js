import IconSwitch from "./IconSwitch";
import { useState } from "react";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store(props) {
  const [viewState, setViewState] = useState("Cards");
  const [currentIcon, setCurrentIcon] = useState("view_list");

  return (
    <div className="Store">
      <header>
        <IconSwitch
          icon={currentIcon}
          onSwitch={() => {
            if (viewState === "Cards") {
              setViewState("List");
              setCurrentIcon("view_module");
            } else {
              setViewState("Cards");
              setCurrentIcon("view_list");
            }
          }}
        />
      </header>
      <div className="shop">
        {viewState === "List" ? (
          <ListView products={props.products} />
        ) : (
          <CardsView products={props.products} />
        )}
      </div>
    </div>
  );
}

export default Store;
