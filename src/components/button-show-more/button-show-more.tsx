import * as React from 'react';

// Types
import { TProps } from './button-show-more.types';

export function ButtonShowMore(props: TProps): JSX.Element {
  const {onClick} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>
        Show more
      </button>
    </div>
  );
}
