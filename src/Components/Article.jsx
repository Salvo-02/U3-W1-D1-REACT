const Article = function (props) {
  return (
    <p>
      <span> {props.span}</span>
      <hr /> {props.description}
    </p>
  );
};
export default Article;
