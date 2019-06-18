import * as React from "react";

// Components
import {TabsItem} from "_Components/tabs-item/tabs-item";

// Hooks
import {useActiveItem} from "_Hooks/use-active-item";

// Types
import {TProps} from "./tabs.types";

export function Tabs(props: TProps): JSX.Element {
  const {
    className = `movie-card__nav`,
    tabs = [`Overview`, `Details`, `Reviews`],
    children
  } = props;

  const [activeTab, handleTabClick] = useActiveItem<string>(tabs);

  const tabList: JSX.Element[] = tabs.map<JSX.Element>((tab: string) => (
    <TabsItem
      key={tab}
      tab={tab}
      onClick={handleTabClick}
      isActive={tab === activeTab}
    />
  ));

  return (
    <div>
      <nav className={`movie-nav ${className}`}>
        <ul className="movie-nav__list">{tabList}</ul>
      </nav>

      {children(activeTab)}
    </div>
  );
}
