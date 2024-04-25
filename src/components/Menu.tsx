import "styles/menu.css";

const Option = ({ children }: typeButtonHeader) => {
  return <button className="buttonMenuHeader">{children}</button>;
};

const Menu = () => {
  return <div className="menuHeader"></div>;
};

export default Menu;
