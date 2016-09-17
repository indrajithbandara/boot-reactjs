import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getDefaultComponent(){
    return <div className='default-container'>
      <h2 className='title'>Hello Reactjs!</h2>
      访问 <Link to={'/user/list'}>/user/list</Link> 试试路由
    </div>;
  }

  render(){
    return <div className='app-container'>
            <div className='wrapper-header'>
              <h1 className='logo'>
                <Link to={'/'}>boot-reactjs demo</Link>
              </h1>
            </div>
            <div className='wrapper-body'>
              {this.props.children||this.getDefaultComponent()}
            </div>
            <div className='wrapper-footer'>Footer</div>
          </div>;
  }
}

export default App;

