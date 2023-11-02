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

interface StyledButtonProps extends ButtonProps {
  getBackgroundColor: (props: ButtonProps) => string;
  getColor: (props: ButtonProps) => string;
  getBorder: (props: ButtonProps) => string;
  getBackgroundColorHover: (props: ButtonProps) => string;
  getColorHover: (props: ButtonProps) => string;
}

function Button({
  type = 'outlined',
  size = 'small',
  disabled = false,
  onClick,
  icon = false,
  children,
}: ButtonProps) {
  const [isPlusIconActive, setIsPlusIconActive] = useState(false);
  const handlePlusIconActive = () => {
    setIsPlusIconActive((prev) => !prev);
  };

  const renderIcon = (icon: boolean) => {
    if (!icon) return null;

    if (type === 'filled') {
      return <PlusFilledIcon />;
    } else if (disabled) {
      return <PlusDisabledIcon />;
    } else if (isPlusIconActive) {
      return <PlusHoverIcon />;
    } else {
      return <PlusEnabledIcon />;
    }
  };

  const getBackgroundColor = (props: ButtonProps) => {
    if (props.type === 'outlined') {
      return 'transparent';
    } else if (props.disabled) {
      return 'var(--button-disabled)';
    } else {
      return 'var(--primary)';
    }
  };

  const getColor = (props: ButtonProps) => {
    if (props.type === 'filled') {
      return 'var(--white)';
    } else if (props.disabled) {
      return 'var(--gray-400)';
    } else {
      return 'var(--primary)';
    }
  };

  const getBorder = (props: ButtonProps) => {
    if (props.type === 'filled') {
      return 'transparent';
    } else if (props.disabled) {
      return '1px solid var(--gray-400)';
    } else {
      return '1px solid var(--primary)';
    }
  };

  const getBackgroundColorHover = (props: ButtonProps) => {
    if (props.type === 'outlined') {
      return 'transparent';
    } else if (props.disabled) {
      return 'var(--button-disabled)';
    } else {
      return 'var(--orange-500)';
    }
  };

  const getColorHover = (props: ButtonProps) => {
    if (props.type === 'filled') {
      return 'var(--white)';
    } else if (props.disabled) {
      return 'var(--gray-400)';
    } else {
      return 'var(--orange-500)';
    }
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
        getBackgroundColor={getBackgroundColor}
        getColor={getColor}
        getBorder={getBorder}
        getBackgroundColorHover={getBackgroundColorHover}
        getColorHover={getColorHover}
      >
        {size !== 'long' && renderIcon(icon)}
        {children}
        {size === 'long' && renderIcon(icon)}
      </StyledButton>
    </StyleSheetManager>
  );
}

export default Button;

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
  background-color: ${(props) => props.getBackgroundColor(props)};
  color: ${(props) => props.getColor(props)};
  border: ${(props) => props.getBorder(props)};

  /* 마우스 호버 시 스타일 */
  &:hover {
    background-color: ${(props) => props.getBackgroundColorHover(props)};
    color: ${(props) => props.getColorHover(props)};
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
