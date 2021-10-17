import { Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';

const options = [
  {
    label: 'Самое большое кол-во',
    value: 'big',
  },
  {
    label: 'Самое малое кол-во',
    value: 'small',
  },
];

const UserSubsFilter = () => {
  const [value, setValue] = useState();

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      options={options}
      onChange={handleChange}
      value={value}
      optionType="button"
      buttonStyle="solid"
    />
  );
};

export default UserSubsFilter;
