import React, { useState } from 'react';

const HooksUseState = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeType = e => {
    setType(e.target.value);
  };

  

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={type} onChange={onChangeType} />
      </div>

      <div>
        <h1>이름 : {name}</h1>
      </div>
      <div>
        <h1>종류 : {type}</h1>
      </div>
    </div>
  );
};

export default HooksUseState;
