import * as React from 'react';
import './app.styl';
import Dashboard from 'components/Dashboard';
import Authenticate from 'components/Authenticate';
import IUser from 'types/IUser';

interface IAppProps {
  logged?: IUser;
}

const App = (props: IAppProps) => (
  <div className="app-container">
    { props.logged ? <Dashboard /> : <Authenticate /> }
  </div>
);

export default App;
