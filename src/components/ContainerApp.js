import React from 'react'

const ContainerApp = (props) => {

  return (
    <div className="container col-md-5">
      {props.children}
    </div>
  );
}

export default ContainerApp;