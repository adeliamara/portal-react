import React from 'react';
import { TagsDetailsStyled } from './styles';

interface PropsTagDetails{
  tag: string
}

const TagDetails = ({ tag }: PropsTagDetails) => {
  return (
    <TagsDetailsStyled>
      {tag}
    </TagsDetailsStyled>
  );
};

export default TagDetails;
