import * as React from 'react';

import * as S from './styled';

const Segment: React.SFC<SegmentProps> = ({ children }): JSX.Element => (
  <S.Segment>{children}</S.Segment>
);

export default Segment;
