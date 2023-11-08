import React from 'react';
import PropTypes from "prop-types"

const PropsTest = ({name, type, children}) => {
  return (
    <div>
      <h1>Props Test : 고양이 이름 받기 : {name}</h1>
      <h1>Props Test : 고양이 종류 받기 : {type}</h1>
      <p>Props Test : 고양이 특성 설명 : {children}</p>
    </div>
  );
};

PropsTest.defaultProps = {
  name : "Just name",
  type : "Just cat",
  
}

PropsTest.propTypes = {
  name: PropTypes.string,
  type : PropTypes.string,
  
}

export default PropsTest;