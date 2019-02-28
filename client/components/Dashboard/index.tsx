import * as React from 'react';
import './dashboard.styl';
import Nav from 'components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from 'containers/Chat';
import Contacts from 'components/Contacts';
import NoMatch from 'components/NoMatch';

interface IDashboardProps {
  onGetConversations: Function
};

class Dashboard extends React.Component<IDashboardProps> {
  componentDidMount() {
    this.props.onGetConversations();
  }

  render() {
    return (
      <Router>
        <div className="lobby-dashboard">
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={Chat} />
              <Route path="/contacts" component={Contacts} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default Dashboard;
