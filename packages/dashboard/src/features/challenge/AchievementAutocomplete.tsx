import { AutoComplete } from 'antd';
import React, { useState } from 'react';
import { useAppSelector } from '../../tools/hooks';
import { selectAchievements } from '../achievement/achievementSlice';

const { Option } = AutoComplete;

const AchievementAutocomplete = () => {
  const [results, setResults] = useState<string[]>([]);
  const achievements = useAppSelector(selectAchievements);

  const handleSearch = (value: string) => {
    setResults(achievements.map((element) => element.name));
  };

  return (
    <AutoComplete onSearch={handleSearch}>
      {results.map((result) => (
        <Option key={result} value={result}>
          {result}
        </Option>
      ))}
    </AutoComplete>
  );
};

export default AchievementAutocomplete;
