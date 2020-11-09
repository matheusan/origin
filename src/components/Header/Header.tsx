import * as React from 'react';

import * as S from './styled';
import DisplayIcon, { Icons } from '../Icon';
import findByType from '../../utils/findByType';

const Title = () => null;
const Description = () => null;

export interface HeaderProps {
  icon?: Icons;
}

const Header: React.SFC<HeaderProps> = ({
  icon = null,
  children
}): JSX.Element => {
  const title = findByType(children, Title);
  const description = findByType(children, Description);
  if (icon === null && !title && !description) {
    return <S.SingleTitle>{children}</S.SingleTitle>;
  }

  return (
    <S.IconWrapper>
      {icon !== null && <DisplayIcon name={icon} />}
      <div>
        {title && <S.IconTitle>{title.props.children}</S.IconTitle>}
        {description && (
          <S.IconDescription>{description.props.children}</S.IconDescription>
        )}
      </div>
    </S.IconWrapper>
  );
};

Header.Title = Title;
Header.Description = Description;

export default Header;
