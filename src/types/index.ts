export enum TextAlign {
  right = 'right',
  left = 'left',
  center = 'center'
}

export type Goal = {
  id: string;
  icon: string;
  title: string;
  amount?: number;
  date?: number;
};
