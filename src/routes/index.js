import React from 'react';
import { Router, Route } from 'react-router';

class Routers extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
      <Router history={this.props.history}>
        <Route path="/" getComponent={(location, callback) => {
          require.ensure([], (require) => {callback(null, require('../views/App.jsx'));}, 'App');
        }}>
          <Route path="user">
            <Route path="list" getComponent={(location, callback) => {
              require.ensure([], (require) => {callback(null, require('../views/user/List.jsx'));}, 'UserList');
            }} />

          </Route>

          <Route path="*" getComponent={(location, callback) => {
            require.ensure([], (require) => {callback(null, require('../views/common/NotFound.jsx'));}, 'NotFound');
          }} />

        </Route>
      </Router>
    );
  }
}

export default Routers;
