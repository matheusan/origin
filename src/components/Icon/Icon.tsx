import * as React from 'react';

import academy from '../../assets/icons/academy.svg';
import arrow from '../../assets/icons/arrow.svg';
import dollar from '../../assets/icons/dollar.svg';
import house from '../../assets/icons/house.svg';
import loading from '../../assets/icons/loading.svg';
import logo from '../../assets/icons/logo.svg';
import tip from '../../assets/icons/tip.svg';
import piggy from '../../assets/icons/piggy_academy.svg';
import vacation from '../../assets/icons/vacation.svg';
import car from '../../assets/icons/car.svg';
import wedding from '../../assets/icons/wedding.svg';
import vault from '../../assets/icons/vault.svg';
import baby from '../../assets/icons/baby.svg';
import edit from '../../assets/icons/edit.svg';

const icons = {
  academy,
  arrow,
  dollar,
  house,
  loading,
  logo,
  tip,
  piggy,
  vacation,
  car,
  wedding,
  vault,
  baby,
  edit
};

export type Icons = keyof typeof icons;
export interface IconProps extends HTMLImageElement {
  name: Icons;
}

const Icon: React.SFC<IconProps> = ({
  name,
  width = '',
  height = '',
  ...otherProps
}): JSX.Element | null => {
  if (!Object.keys(icons).includes(name)) {
    return <></>;
  }

  const icon = icons[name];
  return <img src={icon} width={width} height={height} {...otherProps} />;
};

export default Icon;
