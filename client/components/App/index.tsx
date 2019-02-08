import * as React from 'react';
import './app.styl';
import Dashboard from 'components/Dashboard';
import Authenticate from 'components/Authenticate';
import IUser from 'types/IUser';

interface IAppProps {
  logged?: IUser;
  onMount: Function;
}

class App extends React.Component<IAppProps, {}> {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { logged } = this.props;
    return (
      <div className="app-container">
        { logged ? <Dashboard /> : <Authenticate /> }
      </div>
    );
  }
}

export default App;
