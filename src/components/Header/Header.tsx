import * as React from 'react';

import * as S from './styled';
import DisplayIcon, { Icons } from '../Icon';
import findByType from '../../utils/findByType';

const Title = () => null;
const Description = () => null;

export interface HeaderProps {
  icon?: Icons;
  hard?: boolean;
}

const Header: React.SFC<HeaderProps> = ({
  icon = null,
  hard = false,
  children
}): JSX.Element => {
  const title = findByType(children, Title);
  const description = findByType(children, Description);
  if (icon === null && !title && !description) {
    return <S.SingleTitle hard={hard}>{children}</S.SingleTitle>;
  }

  if (icon !== null && children) {
    return (
      <S.SingleTitle hard={hard} noMargin>
        <DisplayIcon name={icon} />
        <br />
        {children}
      </S.SingleTitle>
    );
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
