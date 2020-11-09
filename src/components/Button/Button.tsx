import * as React from 'react';

import * as S from './styled';
import Icon from '../Icon';

export interface ButtonProps {
  loading: boolean;
  onClick?: () => null;
}

const Button: React.SFC<ButtonProps> = ({
  onClick,
  loading = false,
  children
}) => (
  <S.Button onClick={onClick}>
    {loading ? <Icon name="loading" /> : children}
  </S.Button>
);

export default Button;
