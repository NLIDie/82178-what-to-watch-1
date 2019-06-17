import * as React from 'react';

export function useShowMore<T>(items: T[], size: number): {
  readonly visibleItems: T[],
  readonly handleShowMore: () => void,
  readonly canShowMore: boolean
} {
  const [step, setStep] = React.useState(1);

  React.useEffect(() => {
    setStep(1);
  }, [items]);

  const visibleItems = React.useMemo(() => {
    return items.slice(0, size * step);
  }, [items, size, step]);

  const handleShowMore = React.useCallback(() => {
    setStep((step) => step + 1);
  }, []);

  const canShowMore: boolean = visibleItems.length !== items.length;

  return {
    visibleItems,
    handleShowMore,
    canShowMore
  };
}
