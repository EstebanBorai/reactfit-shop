import * as React from 'react';
import './app.styl';
import Chat from 'components/Chat';
import Login from 'components/Login';
import IUser from 'types/IUser';

// const logged: IUser = {
//   id: '',
//   active: true,
//   avatar: [''],
//   country: 'AR',
//   firstName: 'Esteban',
//   lastName: 'Borai',
//   genre: 1,
//   username: 'estebanborai' 
// };

const logged = null;

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        { logged ? <Chat /> : <Login /> }
      </div>
    );
  }
}

export default App;
