import React, {useState, useEffect} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Account from "./components/Account";
import EditAccount from "./components/EditAccount";
import EditPost from "./components/EditPost";

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

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

  function handleMakePost(newPost){
    setPosts([...posts, newPost])
  }

  function handleEditPost(updatedPost){
    const updatedPosts = posts.map((onePost) =>
    onePost.id === updatedPost.id ? updatedPost : onePost
    )
    setSelectedPost(updatedPost)
    setPosts(updatedPosts)
  }

  function handleChangeForm(name, value) {
    setSelectedPost({
      ...selectedPost,
      [name]: value,
    });
  }

  if (!user) return <Login onLogin={setUser} />;
  
  return (
    <BrowserRouter>

    <NavBar setUser={setUser}/>

      <Switch>

        <Route exact path = "/">
          <Home 
            posts={posts}/>
        </Route>

        <Route path = "/post">
          <Post 
            onMakePost={handleMakePost} 
            user={user}/>
        </Route>

        <Route path = "/account">
          <Account  
            user={user}
            posts={posts}
            onSelectedPost={setSelectedPost}/>
        </Route>

        <Route path="/edit_account">
          <EditAccount 
            user={user}/>
        </Route>

        <Route path="/edit_post/:id">
          <EditPost 
            posts={selectedPost}
            onChangeForm={handleChangeForm}
            onEditPost={handleEditPost}/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}


export default App;

