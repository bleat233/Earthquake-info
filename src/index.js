import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Show from "./components/Show";
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import data from "./earthquake.json"
const bymag = data.sort(function(a,b){return a.properties.mag - b.properties.mag;});
const bygap = data.sort(function(a,b){return a.properties.gap - b.properties.gap;});

let Gap = () => <div><p>not done yet</p> <Show earthquake={bygap} /> </div>;
let Mag = ()=> <div> <p>under construction</p><Show earthquake={bymag} /> </div>;
let Home = () => <div class="row"> <div class="col-4"><Show earthquake={data} /> </div></div>;
//let response=fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?minmagnitude=3&format=geojson');
//let data=response.json();


const App = () => (
  <Router>
  <div style={{borderColor: "white", height:"10px", margin:"0px"}}> 
    <nav>
      <Link to="/">Home</Link> 
      <Link to="mag">Mag</Link>
      <Link to="gap">Gap</Link>
    </nav>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/gap"  component={Gap} />
    <Route path="/mag"  component={Mag} />
  </Switch>
  </div>
</Router>
);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();