import { DropDownMenuType } from '@/types/menu';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as EllipseIcon } from '../../../assets/ellipse.svg';
import Typography from '../Typography';

function DropDown({ dropDownMenuList }: { dropDownMenuList: DropDownMenuType[] }) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [showDropDown, setShowDropDown] = useOutsideClick(dropDownRef, false);

  const handleClickDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <DropDownWrapper ref={dropDownRef}>
      <EllipseIcon onClick={handleClickDropDown} />
      {showDropDown ? <MenuList menuList={dropDownMenuList} /> : <></>}
    </DropDownWrapper>
  );
}

const MenuList = ({ menuList }: { menuList: DropDownMenuType[] }) => {
  return (
    <MenuListWrapper>
      {menuList.map((menu) => (
        <MenuButton key={menu.text} menu={menu} />
      ))}
    </MenuListWrapper>
  );
};

const MenuButton = ({ menu }: { menu: DropDownMenuType }) => {
  return (
    <MenuButtonWrapper onClick={menu.handleClickMenu}>
      <Typography $level="body3" $color="--gray-600">
        {menu.text}
      </Typography>
    </MenuButtonWrapper>
  );
};

const DropDownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
`;

const MenuButtonWrapper = styled.button`
  border: none;
  display: flex;
  padding: 0;
  width: 100%;
  height: 32px;
  justify-content: center;
  align-items: center;
  background: none;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  :hover {
    background: var(--gray-050);
  }
`;

const MenuListWrapper = styled.div`
  top: 20px;
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 72px;

  border-radius: 8px;
  background: var(--white);
  padding: 8px 0;
  box-shadow: -2px 0px 8px 0px rgba(0, 0, 0, 0.06);
`;

export default DropDown;
