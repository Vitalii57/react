function ToolbarItem(props) {
  const handleClick = (evt) => {
    Array.from(evt.target.parentElement.children).map((elem) => {
      if (elem.classList.contains("selected")) {
        elem.classList.remove("selected");
      }
    });
    evt.target.classList.add("selected");
    props.eventHandler(evt.target.textContent);
  };
  return (
    <div
      className={
        props.name === props.selected ? "ToolbarItem selected" : "ToolbarItem"
      }
      onClick={handleClick}
    >
      {props.name}
    </div>
  );
}

export default ToolbarItem;
