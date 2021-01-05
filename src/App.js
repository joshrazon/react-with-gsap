import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Animation1 from "./Animation1";
import Stuff from "./Stuff";
import Animation3 from "./Animation3";
import Animation4 from "./Animation4";

function App() {
  return (
    <HashRouter>
      <div>
        <h1 className="attribution">Green<span className="sock">Sock</span> Animations</h1>
        <ul className="header">
          <li>
            <NavLink to="/" exact>
              Animation 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/stuff">Animation 2</NavLink>
          </li>
          <li>
            <NavLink to="/animation3">Animation 3</NavLink>
          </li>
          <li>
            <NavLink to="/animation4">Animation 4</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route path="/" component={Animation1} exact />
          <Route path="/stuff" component={Stuff} />
          <Route path="/animation3" component={Animation3} />
          <Route path="/animation4" component={Animation4} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
