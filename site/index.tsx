import * as React from "react";
import ReactDOM from "react-dom";
import classnames from 'classnames';
import { HashRouter, Route, Switch, Link } from "react-router-dom";

import './index.less';
import Samples from "./pages/Samples";
import Sample from "./pages/Sample";

const NavBar = props => {
  const { location: { pathname } } = props;
  const links = [{
    to: '/',
    title: 'Samples' 
  }, {
    to: '/start',
    title: 'Quick Start' 
  }, {
    to: 'https://github.com/DiceGraph/DiceGraph',
    title: 'github' 
  }]

  return <div style={{ width: '100%', display: 'flex', margin: '30px auto' }}>
    {
      links.map(e => <div key={e.to} className={classnames("nav-link", pathname === (e.to) && 'active')}>
      <Link to={e.to}>{e.title}</Link>
    </div>)
    }
</div>
}

const App = () => (
  <HashRouter>
    <div
      style={{
        background: "#fff",
        width: "100vw",
        minHeight: "100vh",
        padding: 36,
        boxSizing: 'border-box',
      }}
    >
      <div>
        <div style={{ width: 30, height: 10, background: "#096dd9" }} />
        <h1>Dice Graph</h1>
        <h4 style={{ color: "#777", fontWeight: 200 }}>
          To use graph with data out of box, for many scenes.
        </h4>
      </div>
      <Switch>
        <NavBar/>
      </Switch>
      <div>
        <Switch>
          <Route path="/" exact component={Samples}/>
          <Route path="/sample/:name" component={Sample} exact />
        </Switch>
      </div>
    </div>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById("mountNode"));
