import styled from 'styled-components';

interface ButtonProps {
  type?: 'outlined' | 'filled';
  size?: 'small' | 'large' | 'long';
  disabled?: boolean;
  onClick?: () => void;
  icon?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  /* 공통 스타일 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  height: 2.75rem;
  border-radius: 0.5rem;

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
      ? 'var(--button-disabled)'
      : 'var(--primary)'};
  border: ${(props) =>
    props.type === 'filled'
      ? 'transparent'
      : props.disabled
      ? '1px solid var(--button-disabled)'
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
        ? 'var(--button-disabled)'
        : 'var(--orange-500)'};
  }

  /* 버튼 사이즈에 따른 스타일 */
  min-width: ${(props) => {
    if (props.size === 'long') return '20.5rem';
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

  /* 아이콘만 있을 때 스타일 */
  padding: ${(props) => {
    if (!props.children) return '0.5rem';
  }};
`;

function Button({
  type = 'outlined',
  size = 'small',
  disabled = false,
  onClick,
  icon = false,
  children,
}: ButtonProps) {
  console.log(type, size, icon);
  return (
    <StyledButton
      type={type}
      size={size}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      icon={icon}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
