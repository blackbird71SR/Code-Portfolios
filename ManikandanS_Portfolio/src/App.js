import Header from "./components/header";
import { Route, Switch } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";


const App = () => {
  return (
    <div>
    
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route path="/skills">
          <Skills />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        

        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
