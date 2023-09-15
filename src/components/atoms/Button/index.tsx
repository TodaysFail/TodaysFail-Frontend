import styled from 'styled-components';
import { ReactComponent as PlusEnabledIcon } from '@assets/plus-enabled.svg';
import { ReactComponent as PlusHoverIcon } from '@assets/plus-hover.svg';
import { ReactComponent as PlusDisabledIcon } from '@assets/plus-disabled.svg';
import { ReactComponent as PlusFilledIcon } from '@assets/plus-filled.svg';
import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';

interface ButtonProps {
  type?: 'outlined' | 'filled';
  size?: 'small' | 'large' | 'long';
  disabled?: boolean;
  onClick?: () => void;
  icon?: boolean;
  children?: React.ReactNode;
}

interface StyledButtonProps {
  type?: 'outlined' | 'filled';
  size?: 'small' | 'large' | 'long';
  disabled?: boolean;
  onClick?: () => void;
  icon?: boolean;
  children?: React.ReactNode;
}

const StyledButton = styled.button<StyledButtonProps>`
  /* 공통 스타일 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  font-family: 'SpoqaHanSansNeo-Regular';
  font-size: 0.875rem;

  /* 버튼 타입에 따른 스타일 */
  background-color: ${(props) =>
    props.type === 'outlined'
      ? 'transparent'
      : props.disabled
      ? 'var(--button-disabled)'
      : 'var(--primary)'};
  color: ${(props) =>
    props.type === 'filled'
      ? 'var(--white)'
      : props.disabled
      ? 'var(--gray-400)'
      : 'var(--primary)'};
  border: ${(props) =>
    props.type === 'filled'
      ? 'transparent'
      : props.disabled
      ? '1px solid var(--gray-400)'
      : '1px solid var(--primary)'};

  /* 마우스 호버 시 스타일 */
  &:hover {
    background-color: ${(props) =>
      props.type === 'outlined'
        ? 'transparent'
        : props.disabled
        ? 'var(--button-disabled)'
        : 'var(--orange-500)'};
    color: ${(props) =>
      props.type === 'filled'
        ? 'var(--white)'
        : props.disabled
        ? 'var(--gray-400)'
        : 'var(--orange-500)'};
  }

  /* 버튼 사이즈에 따른 스타일 */
  min-width: ${(props) => {
    if (props.size === 'long') return '20.5rem';
  }};

  height: ${(props) => {
    switch (props.size) {
      case 'small':
        return '2rem 2rem';
      case 'large':
        return '2.75rem';
      case 'long':
        return '2.75rem';
      default:
        return '2rem';
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '0.5rem';
      case 'large':
        return '0.5rem 1rem';
      case 'long':
        return '0.5rem 1rem';
      default:
        return '0.5rem';
    }
  }};

  /* 비활성화 시 스타일링 */
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

function Button({
  type = 'outlined',
  size = 'small',
  disabled = false,
  onClick,
  icon = false,
  children,
}: ButtonProps) {
  const [isPlusIconActive, setIsPlusIconActive] = useState(false);
  console.log(type, size, icon, isPlusIconActive, !children);
  const handlePlusIconActive = () => {
    setIsPlusIconActive((prev) => !prev);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'icon'}>
      <StyledButton
        type={type}
        size={size}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        icon={icon}
        onMouseEnter={handlePlusIconActive}
        onMouseLeave={handlePlusIconActive}
      >
        {icon &&
          size !== 'long' &&
          (type === 'filled' ? (
            <PlusFilledIcon />
          ) : disabled ? (
            <PlusDisabledIcon />
          ) : isPlusIconActive ? (
            <PlusHoverIcon />
          ) : (
            <PlusEnabledIcon />
          ))}
        {children}
        {icon &&
          size === 'long' &&
          (type === 'filled' ? (
            <PlusFilledIcon />
          ) : disabled ? (
            <PlusDisabledIcon />
          ) : isPlusIconActive ? (
            <PlusHoverIcon />
          ) : (
            <PlusEnabledIcon />
          ))}
      </StyledButton>
    </StyleSheetManager>
  );
}

export default Button;
