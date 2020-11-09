import * as React from 'react';

import * as S from './styled';
import findByType from '../../utils/findByType';

const Top = () => null;
const Bottom = () => null;

const Card: React.SFC = ({ children }): JSX.Element => {
  const top = findByType(children, Top);
  const bottom = findByType(children, Bottom);

  if (!top && !bottom) {
    return <S.Wrapper>{children}</S.Wrapper>;
  }

  return (
    <S.Wrapper>
      {top && <S.Top>{top.props.children}</S.Top>}
      {bottom && <S.Bottom>{bottom.props.children}</S.Bottom>}
    </S.Wrapper>
  );
};

Card.Top = Top;
Card.Bottom = Bottom;

export default Card;
