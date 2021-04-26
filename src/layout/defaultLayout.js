// header sidebar content footer layout

import React from 'react';

const DefaultLayout = ({ header, sidebar, content, footer }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: 'lightskyblue',
          height: '50px',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {header()}
      </div>
      <div style={{ display: 'flex', minHeight: '700px' }}>
        <div
          style={{
            width: '15%',
            minWidth: '200px',
            borderRight: 'solid lightgrey 1px',
          }}>
          {sidebar()}
        </div>
        <div style={{ width: '85%' }}>{content()}</div>
      </div>
      <div
        style={{
          backgroundColor: 'lightskyblue',
          height: '50px',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {footer()}
      </div>
    </div>
  );
};

export default DefaultLayout;
