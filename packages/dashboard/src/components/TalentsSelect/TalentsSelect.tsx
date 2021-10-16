import React, { useEffect, useState } from 'react';
import { Talent } from '@teendeer/types';
import { Tag } from 'antd';

const { CheckableTag } = Tag;

type Props = {
  talents: Talent[];
  selected?: Talent[];
  onFinish?: (selectedTalents: Talent[]) => void;
};

const TalentsSelect = ({ talents, selected = [], onFinish }: Props) => {
  const [selectedTalents, setSelectedTalents] = useState<Talent[]>(selected);

  useEffect(() => {
    if (onFinish) {
      onFinish(selectedTalents);
    }
  }, [onFinish, selectedTalents]);

  const handleSelect = (value: Talent, state: boolean) => {
    if (state) {
      setSelectedTalents([...selectedTalents, value]);
    } else {
      setSelectedTalents([...selectedTalents].filter((tag) => tag !== value));
    }
  };

  return (
    <React.Fragment>
      {talents.map((talent) => {
        if (onFinish) {
          return (
            <CheckableTag
              key={talent.id}
              style={{ padding: 16 }}
              checked={selectedTalents.indexOf(talent) > -1}
              onChange={(checked) => handleSelect(talent, checked)}>
              {talent.name}
            </CheckableTag>
          );
        }

        return (
          <Tag key={talent.id} style={{ padding: 12 }} color="default">
            {talent.name}
          </Tag>
        );
      })}
    </React.Fragment>
  );
};

export default TalentsSelect;
