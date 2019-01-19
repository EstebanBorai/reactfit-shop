import * as React from "react";
import "./aside.styl";

class Aside extends React.Component {
  render() {
    return (
      <aside className="main-aside">
        <ul className="icon-container-list">
          <li className="icon-container">Home</li>
        </ul>
      </aside>
    );
  }
}

export default Aside;
