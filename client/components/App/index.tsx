import * as React from 'react';
import './app.scss';
import Header from 'components/Header';
import Auth from 'pages/Auth';
import Chat from 'pages/Chat';

interface IAppProps {
  logged: object;
}
class App extends React.Component<IAppProps> {
  render() {
    const { logged } = this.props;
    return (
      <div className="app-main">
        <Header />
        { logged ? <Chat /> : <Auth /> }
      </div>
    );
  }
}

export default App;
