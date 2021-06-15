import { Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Stuffs from "./pages/Stuff";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Stuff" component={Stuffs} />
      </Switch>
    </>
  );
}

export default App;
