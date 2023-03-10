import React,{useState} from "react"

function LoginForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
    

    return(
        <form onSubmit={handleSubmit}
              className="loginform">
          <label className="frlabel">Username </label>
            <input
              type ="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          <label className="frlabel">Password</label>
            <input 
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
        <button class="button-28" role="button" type="submit">{isLoading ? "Loading..." : "Login"} </button>
            <div>
              {errors.map((err) => (
                <p key={err}>{err}</p>
              ))}
            </div>
    </form>
    )
}

export default LoginForm 