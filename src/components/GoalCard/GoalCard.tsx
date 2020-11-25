import * as React from 'react';

import * as S from './styled';
import { TextAlign } from '../../types';

import Icon, { Icons } from '../Icon';
import Header from '../Header';
import Card from '../Card';
import Grid from '../Grid';
import Label from '../Label';
import Money from '../Money';
import Button from '../Button';

export interface GoalCardProps {
  goal: {
    icon: Icons;
    title: string;
    amount: number;
    date: number;
  };
  onSet: () => null;
  onEdit: () => null;
}

const GoalCard: React.SFC<GoalCardProps> = ({
  goal,
  onSet,
  onEdit
}): JSX.Element => {
  const { icon, title, amount, date } = goal;
  const displayGoal = amount && amount !== null && date && date !== null;
  return (
    <S.Wrapper>
      {!displayGoal && <div></div>}
      <Header hard icon={icon}>
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
                  amount={23344}
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
                <strong>May 2020</strong>
              </Label>
            </Grid>
          </Card.Single>
        </Card>
      )}
      {!displayGoal ? (
        <Button flex>Setup goal</Button>
      ) : (
        <Button secondary>
          Edit goal <Icon name="edit" />
        </Button>
      )}
    </S.Wrapper>
  );
};

export default GoalCard;
