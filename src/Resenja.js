import React from 'react';
import pitanja from './pitanja';
import Resenje from './Resenje';
function Resenja() {
  return (
    <div>
      {pitanja.map((item) => (
        <Resenje pitanje={item} />
      ))}
    </div>
  );
}

export default Resenja;
