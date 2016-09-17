import React from 'react';
import { Link }from 'react-router' ;

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <div className='not-found-container'>
              <p>没有找到你要的页面，
                <Link to={'/'}>返回首页</Link>
              </p>
            </div>;
  }
}

export default NotFound;
