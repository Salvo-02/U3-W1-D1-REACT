const Nav = function (props) {
  return (
    <nav>
      <div>
        <a href={props.href}>
          <img src={props.imgLogo} alt={props.title} />
        </a>
      </div>
    </nav>
  );
};
export default Nav;
