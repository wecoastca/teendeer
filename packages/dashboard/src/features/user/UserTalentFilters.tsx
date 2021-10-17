import { Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { useAppSelector } from '../../tools/hooks';
import { selectTalents } from '../talent/talentSlice';

const UserTalentFilters = () => {
  const [value, setValue] = useState<number>(-1);
  const talents = useAppSelector(selectTalents);

  const options = talents.map((talent) => ({
    label: talent.name,
    value: talent.id,
  }));

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Radio.Group
        options={options}
        onChange={handleChange}
        value={value}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};

export default UserTalentFilters;
