import { Switch,Route } from "react-router-dom"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Navbar from "./componenets/Navbar"
import Home from "./componenets/Home.js"
import Skills from "./componenets/Skills"
import Contact from "./componenets/Contact"
import Template from "./componenets/TemplateBody"
import AboutMe from "./componenets/AboutMe";


function App() {

  return (
    <div className="app">
      <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={AboutMe}/>
            <Route exact path="/Skills" component={Skills}/>
            <Route exact path="/Projects" component={Template}/>
            <Route exact path="/Contact" component={Contact}/>
            <Redirect to="/" />
        </Switch>
    </div>
   );
 }

export default App;
