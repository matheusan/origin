import * as React from 'react';

import academy from '../../assets/icons/academy.svg';
import arrow from '../../assets/icons/arrow.svg';
import dollar from '../../assets/icons/dollar.svg';
import house from '../../assets/icons/house.svg';
import loading from '../../assets/icons/loading.svg';
import logo from '../../assets/icons/logo.svg';
import tip from '../../assets/icons/tip.svg';

const icons = {
  academy = academy,
  arrow = arrow,
  dollar = dollar,
  house = house,
  loading = loading,
  logo = logo,
  tip = tip
};

export type Icons = keyof typeof icons;
export interface IconProps {
  name: Icons;
  width?: string;
  height?: string;
}

const Icon: React.SFC<IconProps & React.HTMLAttributes> = ({
  name,
  width = '',
  height = '',
  ...otherProps
}): JSX.Element | null => {
  if (!icons[name]) {
    return;
  }

  return (
    <img src={icons[name]} width={width} height={height} {...otherProps} />
  );
};

export default Icon;
