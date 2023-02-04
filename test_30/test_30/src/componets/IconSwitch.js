function IconSwitch(props) {
  return (
    <div className="IconSwitch" onClick={props.onSwitch}>
      <span className="material-icons">{props.icon}</span>
    </div>
  );
}

export default IconSwitch;
