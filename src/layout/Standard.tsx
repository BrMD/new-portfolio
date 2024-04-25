import Menu from "components/Menu";

const Standard = ({ children }: ChildrenWithoutProps) => {
  return (
    <div className="layout">
      <Menu />
      {children}
    </div>
  );
};

export default Standard;
