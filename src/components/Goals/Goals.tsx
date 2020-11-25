import * as React from 'react';

import * as S from './styled';

import Grid from '../Grid';
import Header from '../Header';
import GoalCard from '../GoalCard';

export interface GoalsProps {
  
}

const goal = {
  icon: 'piggy',
  title: 'Save it'
};

const Goals: React.SFC<GoalsProps> = (): JSX.Element => {
  return (
    <S.Wrapper>
      <Header hard>Here are your saving goals.</Header>
      <Grid>
        <GoalCard goal={goal} />
      </Grid>
    </S.Wrapper>
  );
};

export default Goals;
