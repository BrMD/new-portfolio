import { useState } from "react";

import initFunction from "helpers/init";
import Menu from "components/Menu";
import HOCpages from "components/HOCpages";
import "styles/layout.css";

function App() {
  initFunction();
  const [option, setOption] = useState("Experience");
  return (
    <div className="layout">
      <Menu />
      <HOCpages option={option} />
    </div>
  );
}

export default App;
