import styled from 'styled-components';
import { ReactComponent as BlankHeartIcon } from '../../../assets/blank_heart.svg';
import { ReactComponent as FilledHeartIcon } from '../../../assets/filled_heart.svg';

import React, { SetStateAction } from 'react';
import Typography from '../Typography';

type LikeButtonProps = {
  count: number;
  liked: boolean;
  setLiked: React.Dispatch<SetStateAction<boolean>>;
};

function LikeButton({ count, liked, setLiked }: LikeButtonProps) {
  const handleClickLike = () => {
    setLiked(!liked);
  };

  return (
    <LikeButtonWrapper>
      <HeartWrapper onClick={handleClickLike}>
        {liked ? <FilledHeartIcon /> : <BlankHeartIcon />}
      </HeartWrapper>
      <Typography $level="overline">{count}</Typography>
    </LikeButtonWrapper>
  );
}

const LikeButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
`;

export default LikeButton;
