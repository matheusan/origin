import * as React from 'react';
import { format } from 'date-fns';

import * as S from './styled';
import { Goal, TextAlign } from '../../types';

import Icon, { Icons } from '../Icon';
import Header from '../Header';
import Card from '../Card';
import Grid from '../Grid';
import Label from '../Label';
import Money from '../Money';
import Button from '../Button';

import { DATE_COMPACT_FORMAT } from '../../constants';

export interface GoalCardProps {
  goal: Goal;
  onEdit: () => null;
}

const GoalCard: React.SFC<GoalCardProps> = ({ goal, onEdit }): JSX.Element => {
  const { icon, title, totalAmount, targetDate } = goal;
  const displayGoal =
    totalAmount && totalAmount !== null && targetDate && targetDate !== null;
  return (
    <S.Wrapper>
      {!displayGoal && <div></div>}
      <Header hard noMargin icon={icon}>
        {title}
      </Header>
      {displayGoal && (
        <Card>
          <Card.Single>
            <Grid nowrap>
              <Label
                size={12}
                smallsize={18}
                margin={false}
                textAlign={TextAlign.center}
                text="Goal amount"
              >
                <Money
                  round
                  amount={totalAmount}
                  fontSize={14}
                  textAlign={TextAlign.center}
                />
              </Label>
              <Label
                size={12}
                smallsize={18}
                margin={false}
                textAlign={TextAlign.center}
                text="Reach goal by"
              >
                <Header hard size={16} noMargin>{format(targetDate, DATE_COMPACT_FORMAT)}.</Header>
              </Label>
            </Grid>
          </Card.Single>
        </Card>
      )}
      {!displayGoal ? (
        <Button flex onClick={onEdit}>
          Setup goal
        </Button>
      ) : (
        <Button secondary onClick={onEdit}>
          Edit goal <Icon name="edit" />
        </Button>
      )}
    </S.Wrapper>
  );
};

export default GoalCard;
