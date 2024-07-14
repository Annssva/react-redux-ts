import React from 'react';
import  "./Loading.scss"

const Loading = () => {
  return (
    <div className="container">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
};

export default Loading;