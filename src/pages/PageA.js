import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'dva';

let PageA = (props) => {

  console.log(props);
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  }

  return (
    <div>
      <p onClick={handleClick}>A page</p>
      <Link to="/" className="App-link">返回</Link>
    </div>
  )
}

PageA = connect(({ global }) => ({
  loading: global.loading
}))(PageA);

export default PageA;