import React, {useState, useEffect} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return <Login onLogin={setUser} />;
  
  return (
    <BrowserRouter>
    <Switch>
      <Route>
        <Home/>
       </Route>
    </Switch>
    </BrowserRouter>
  );
}


export default App;

