import React from 'react';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { Link } from 'react-router';
import * as actionCreators from '../../actions/UserList';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getUsers();
  }

  render(){
    const users = this.props.users;
    return <div className='user-list-container'>
            <h3><Link to={'/'}>返回首页</Link></h3>
            <ul>
              {users.map((user, k) => {
                return <li key={k}>
                          <h4>{user.name}</h4>
                          <div>{user.desc}</div>
                        </li>;
              })}
            </ul>
            </div>;
  }
}

function mapStoreToProps(store){
  return {
    users: store.default.UserList.users
  }
}
function mapActionsToProps(dispatch){
  return bindActionCreators(Object.assign({}, actionCreators), dispatch)
}

export default connect(mapStoreToProps, mapActionsToProps)(UserList);

