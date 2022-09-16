import React from "react";
import {Link} from "react-router-dom";

import "./index.scss";

const App = () => (
  <>
   <div className="container">
    Formsflow.ai micro front end application
  </div>
  <div>
  <div><Link to="/applications">Application</Link></div>
  <div><Link to="/task">Task</Link></div>
  <div><Link to="/dashboard">Dashboard</Link></div>
  <div><Link to="/admin">Admin</Link></div>
  <div><Link to="/forms">Forms</Link></div>
  </div>
  </>
 
);
export default App;
