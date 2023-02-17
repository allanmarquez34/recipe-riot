import React, {useState} from "react"

function CreateAccountForm({onLogin}){
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [image, setImage] = useState("")
    const [background_image, setBackgroundImage] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            image,
            background_image,
            username,
            email,
            password,
            password_confirmation: passwordConfirmation,
    
          }),
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
        <form onSubmit={handleSubmit}>
          <div className="signup">
            <label className="frlabel">First Name</label>
              <input
                type="text"
                id="first_name"
                value={first_name}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value) }/>
            <label className="frlabel">Last Name</label>
              <input
                type="text"
                id="last_name"
                value={last_name}
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value) }/>
            <label className="frlabel">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value) }/>
            <label className="frlabel">Photo</label>
              <input
                type="text"
                id="image"
                value={image}
                autoComplete="off"
                onChange={(e) => setImage(e.target.value) }/>
            <label className="frlabel">Cover Photo</label>
              <input
                type="text"
                id="backgroundImage"
                value={background_image}
                autoComplete="off"
                onChange={(e) => setBackgroundImage(e.target.value) }/>
            <label className="frlabel">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value) }/>
            <label className="frlabel">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value) }/>
            <label className="frlabel">confirm password</label>
              <input
                type="password"
                id="passwordConfirmation"
                value={passwordConfirmation}
                autoComplete="off"
                onChange={(e) => setPasswordConfirmation(e.target.value) }/>
            <button class="button-28" role="button" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            </div>
                <div>
                  {errors.map((err) => (
                  <p key={err}>{err}</p>
                  ))}
                </div>
        </form>
      )
}

export default CreateAccountForm