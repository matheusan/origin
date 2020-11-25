import * as React from 'react';

import * as S from './styled';

import Grid from '../Grid';
import Header from '../Header';
import GoalCard from '../GoalCard';
import Savings from '../Savings';

import { useSavings, edit } from '../../redux';

const Goals: React.FunctionComponent = (): JSX.Element => {
  const [state, dispatch] = useSavings();
  const { goals, editGoal } = state;

  const setEdit = goalId => {
    dispatch(edit(goalId));
  };

  if (editGoal !== null) {
    return <Savings />;
  }

  return (
    <S.Wrapper>
      <Header hard>Here are your saving goals.</Header>
      <Grid columns={4}>
        {goals.map(goal => (
          <GoalCard key={goal.id} goal={goal} onEdit={() => setEdit(goal.id)} />
        ))}
      </Grid>
    </S.Wrapper>
  );
};

export default Goals;
