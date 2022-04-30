import { FC } from 'react';
import { Button, ButtonProps } from '@accessible/button';

interface AccessibleButtonProps {
  disabled?: boolean;
  children: ButtonProps['children'];
}

export const AccessibleButton: FC<AccessibleButtonProps> = ({ disabled, children }) => {
  if (disabled) {
    return <>{children}</>;
  }

  return <Button>{children}</Button>;
};
