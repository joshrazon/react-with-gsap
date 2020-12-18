import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function Controls() {
  return (
    <HashRouter>
      <div>
        <h1>GreenSock with React</h1>
        <ul className="header">
          <li><NavLink to="/" exact>Animation 1</NavLink></li>
          <li><NavLink to="/stuff">Animation 2</NavLink></li>
          <li><NavLink to="/contact">Animation 3</NavLink></li>
        </ul>
        <div className="content">
          <Route path="/" component={Animation1} exact />
          <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
      <h1 className="attribution">Powered by Green<span className="sock">Sock</span></h1>
    </HashRouter>
  );
}

export default Controls;