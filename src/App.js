import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import LotteryEntry from "./pages/LotteryEntry";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/theatreShows/:id">
            <LotteryEntry />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
