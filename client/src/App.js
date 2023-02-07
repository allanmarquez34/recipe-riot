import React, {useState, useEffect} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import Post from "./components/Post";

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([])

  useEffect(() => {
      fetch("/posts")
      .then((r) => r.json())
      .then(setPosts)
  },[])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  

  console.log(user)

  function handleMakePost(newPost){
    setPosts([...posts, newPost])
  }

  if (!user) return <Login onLogin={setUser} />;
  
  return (
    <BrowserRouter>
    <NavBar setUser={setUser}/>
      <Switch>
        <Route exact path = "/">
          <Home posts={posts}/>
        </Route>
        <Route>
          <Post onMakePost ={handleMakePost} user={user} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;

