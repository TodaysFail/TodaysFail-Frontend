import Typography from '@components/atoms/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as FeedIcon } from '../../../assets/feed.svg';
import { ReactComponent as HomeIcon } from '../../../assets/home.svg';
import { ReactComponent as MypageIcon } from '../../../assets/mypage.svg';
import { ReactComponent as RecordIcon } from '../../../assets/record.svg';

export function NavigationIcon({ menu, isActive }: { menu: Menu; isActive: boolean }) {
  const navigate = useNavigate();
  const color = isActive ? '--primary' : '--gray-300';

  const handleNavigate = () => {
    navigate(menu.path);
  };

  return (
    <NavigationIconWrapper onClick={handleNavigate}>
      <menu.svg fill={`var(${color})`} stroke={`var(${color})`} width={24} height={24} />
      <Typography $level="overline" $color={color}>
        {menu.text}
      </Typography>
    </NavigationIconWrapper>
  );
}

type Menu = {
  text: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
};

const menus: Menu[] = [
  {
    text: '홈',
    svg: HomeIcon,
    path: '/',
  },
  {
    text: '기록',
    svg: RecordIcon,
    path: '/',
  },
  {
    text: '피드',
    svg: FeedIcon,
    path: '/feed',
  },
  {
    text: '마이',
    svg: MypageIcon,
    path: '/',
  },
];

function NavigationBar() {
  const [activeIdx, setActiveIdx] = useState(2);
  return (
    <Wrapper>
      {menus.map((menu, idx) => (
        <div key={menu.text} onClick={() => setActiveIdx(idx)}>
          <NavigationIcon menu={menu} isActive={activeIdx === idx} />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 10px 0px 6px 0px;
  justify-content: center;
  align-items: center;
  background: var(--white);

  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 390px;
  /* height: 60px; */
`;

const NavigationIconWrapper = styled.div`
  display: flex;
  width: 82px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  /* color: var(--gray-300); */
`;

export default NavigationBar;
