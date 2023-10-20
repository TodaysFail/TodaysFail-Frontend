import Typography from '@components/atoms/Typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MainPage() {
  const guideUrl = import.meta.env.VITE_GUIDE_URL;
  const storyUrl = import.meta.env.VITE_STORY_URL;

  return (
    <MainPageLayout>
      <MainPageContainer>
        <GuideContainer>
          <GuideHeader>
            <Typography $level="heading4" $color="--gray-900">
              어떻게 써야 하나요?
            </Typography>
          </GuideHeader>
          <GuideContent to={guideUrl}>
            <Typography $level="subtitle2" $color="--white">
              실패 기록 가이드
            </Typography>
            <Typography $level="caption" $color="--white">
              오늘의 실패 100% 활용법
            </Typography>
          </GuideContent>
          <StoryContainer to={storyUrl}>
            <Typography $level="subtitle2" $color="--white">
              오늘의 실패 이야기
            </Typography>
            <Typography $level="caption" $color="--white">
              왜 실패 기록일까요?
            </Typography>
          </StoryContainer>
        </GuideContainer>
      </MainPageContainer>
    </MainPageLayout>
  );
}

const MainPageLayout = styled.div`
  width: 22.5rem;
  height: 78.3125rem;
  background-color: var(--red-900);
  display: flex;
  justify-content: center;
`;

const MainPageContainer = styled.div`
  width: 20.5rem;
`;

const GuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const GuideHeader = styled.div`
  margin: 0.5rem 0;
`;

const GuideContent = styled(Link)`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  background-color: var(--orange-400);
  border-radius: 0.5rem;
  text-decoration: none;
`;

const StoryContainer = styled(GuideContent)`
  background-color: var(--gray-800);
`;
