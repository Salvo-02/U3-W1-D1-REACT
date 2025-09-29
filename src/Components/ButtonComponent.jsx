const ButtonComponent = function (props) {
  return (
    <a href={props.href}>
      <button>{props.name} </button>
    </a>
  );
};
export default ButtonComponent;
