import * as React from "react";

export function useActiveItem<T>(
    itemsIdentifications: T[]
): [T, (itemIdentification: T) => void] {
  const [activeItemIdentification, setActiveItem] = React.useState<T>(
      itemsIdentifications[0]
  );

  const onClickItem = React.useCallback(
      (itemIdentification: T) => {
        setActiveItem(itemIdentification);
      },
      [setActiveItem]
  );

  return [activeItemIdentification, onClickItem];
}
