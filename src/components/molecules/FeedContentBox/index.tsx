import { RecordPost } from '@/types/record';
import Typography from '@components/atoms/Typography';
import ShowMoreText from 'react-show-more-text';
import styled from 'styled-components';

function FeedContentBox({ recordPost }: { recordPost: RecordPost }) {
  return (
    <BoxWrapper>
      <ContentSection>
        <Typography $level="subtitle2">{recordPost.title}</Typography>
        <Typography $level="body3-long">
          <ShowMoreText lines={3} more={'더보기'} less="" anchorClass="anchor">
            {recordPost.content}
          </ShowMoreText>
        </Typography>
      </ContentSection>
      <ContentSection>
        <Typography $level="subtitle2">느낀점</Typography>
        <Typography $level="body3-long">
          <ShowMoreText lines={3} more={'더보기'} less="" anchorClass="anchor">
            {recordPost.impression}
          </ShowMoreText>
        </Typography>
      </ContentSection>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  border-radius: 8px;
  background: var(--white);

  span {
    word-break: break-all;
    word-wrap: break-word;
  }

  .anchor {
    color: var(--primary);
    text-align: right;
    font-size: 10px;
    font-style: normal;
    line-height: 18px; /* 180% */
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default FeedContentBox;
