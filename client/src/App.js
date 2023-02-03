import React, {useState, useEffect} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home"

function App() {
// const [test, setTest] = useState("")

// useEffect(() => {
//   fetch("/posts")
//   .then((r) => r.json())
//   .then(data => {
//     setTest(data)
//   })
// })
// console.log(test)
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
       <Home/>
    </Switch>
    </BrowserRouter>
  );
}


export default App;

