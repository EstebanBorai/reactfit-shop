import * as React from 'react';
import './app.styl';
import Dashboard from 'containers/Dashboard';
import Authenticate from 'components/Authenticate';
import IUser from 'types/IUser';
import Loading from 'components/lib/Loading';

interface IAppProps {
  logged?: IUser;
  loading: boolean;
  onMount: Function;
}

class App extends React.Component<IAppProps, {}> {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { logged, loading } = this.props;
    if (loading) {
      return <Loading />;
    }

    return (
      <div className="app-container">
        { logged ? <Dashboard /> : <Authenticate /> }
      </div>
    );
  }
}

export default App;
