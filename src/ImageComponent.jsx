import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div className="ImageComponent" class>
        <div></div>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

export default ImageComponent;
