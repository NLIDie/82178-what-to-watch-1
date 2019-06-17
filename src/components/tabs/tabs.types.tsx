export type TProps = {
  className?: string;
  tabs: string[];
  children: (activeTab: string) => JSX.Element;
};
