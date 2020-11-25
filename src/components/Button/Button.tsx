import * as React from 'react';

import * as S from './styled';
import Icon from '../Icon';

export interface ButtonProps {
  loading: boolean;
  secondary: boolean;
  flex: boolean;
  onClick?: () => null;
}

const Button: React.SFC<ButtonProps> = ({
  onClick,
  loading = false,
  secondary = false,
  flex = false,
  children
}) => (
  <S.Button onClick={onClick} secondary={secondary} flex={flex}>
    {loading ? <Icon name="loading" /> : children}
  </S.Button>
);

export default Button;
