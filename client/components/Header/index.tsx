import * as React from "react";

interface HeaderProps {
  title: string;
}

class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <header className="main-header">
        {this.props.title}
      </header>
    );
  }
}

export default Header;
