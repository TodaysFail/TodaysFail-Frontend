import NavigationBar from '@components/molecules/NavigationBar';
import FeedCard from '@components/organisms/FeedCard';
import { styled } from 'styled-components';

export default function Feed() {
  return (
    <Layout>
      <FeedWrapper>
        <Header>헤더</Header>
        <div>
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
      </FeedWrapper>
      <NavigationBar />
    </Layout>
  );
}

const Layout = styled.div`
  max-width: 390px;
  height: 100vh;
`;

const FeedWrapper = styled.div`
  background: var(--default-background);
  min-height: 100%;
  padding-top: 48px;
  padding-bottom: 60px;
`;

const Header = styled.div`
  background: var(--default-background);
  position: fixed;
  top: 0;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 390px;
`;
