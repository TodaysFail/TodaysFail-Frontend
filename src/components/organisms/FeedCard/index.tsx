import { RecordPost } from '@/types/record';
import LikeButton from '@components/atoms/LikeButton';
import FeedCardHeader from '@components/molecules/FeedCardHeader';
import FeedContentBox from '@components/molecules/FeedContentBox';
import { useState } from 'react';
import styled from 'styled-components';

const example: RecordPost = {
  profileImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnA1xVfnFpiY6CfGX0dW1C7s13OxkupauwSzhdAZrVxNT162pp',
  author: '레니니 본인',
  createdAt: '3분전',
  title: '제목이 참 길어져도 그대로 보여주자고 했는데 잘 보이는지 한번 봐야할 것 같습니다!!!',
  content:
    '안녕하세요 저는 레니니 본인이고 저는 지금 실수를 했습니다. 아주 큰 실수입니다. 눈 감아주세요. 감사합니다. 이건 네줄을 넘기 위한 노력입니다. 하하하 이제 넘네요~~ ㅎㅎ 아직 아니네요 조금만 더 작성하면 될 것 같습니다.',
  impression:
    '안녕하세요 저는 레니니 본인이고 저는 지금 실수를 했습니다. 아주 큰 실수입니다. 눈 감아주세요. 감사합니다. 이건 네줄을 넘기 위한 노력입니다. 하하하 이제 넘네요~~ ㅎㅎ 아직 아니네요 조금만 더 작성하면 될 것 같습니다.',
};

function FeedCard() {
  const [liked, setLiked] = useState(false);

  return (
    <FeedCardWrapper>
      <FeedCardHeader recordPost={example} />
      <FeedContentBox recordPost={example} />
      <FeedCardFooter>
        <LikeButton count={4} liked={liked} setLiked={setLiked} />
      </FeedCardFooter>
    </FeedCardWrapper>
  );
}

const FeedCardWrapper = styled.div`
  padding: 16px;
`;

const FeedCardFooter = styled.div`
  margin-top: 8px;
`;

export default FeedCard;
