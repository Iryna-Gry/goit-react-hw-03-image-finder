import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        width: '100%',
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
