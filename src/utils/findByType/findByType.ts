import * as React from 'react';

const findByType = (children, component) => {
  const type = component.displayName || component.name;

  const result = React.Children.map(children, child => ({
    type: child && child.type && (child.type.displayName || child.type.name),
    child
  })).find(child => type === child.type);

  return (result && result.child) || undefined;
};

export default findByType;
