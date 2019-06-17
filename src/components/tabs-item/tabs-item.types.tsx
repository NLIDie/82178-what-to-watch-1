import * as React from 'react';

export type TProps = {
  tab: string;
  isActive: boolean;
  onClick: (tab: string, event: React.SyntheticEvent<HTMLElement>) => void,
}
