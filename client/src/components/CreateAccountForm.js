import React, {useState} from "react"

function CreateAccountForm({onLogin}){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    // const [birthday, setBirthday ] = useState("")
    const [image, setImage] = useState("")
    const [backgroundImage, setBackgroundImage] = useState("")
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
            first_name: firstName,
            last_name: lastName,
            // birthday,
            image,
            background_image: backgroundImage,
            username,
            email,
            password_digest: password,
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
            <label>First Name</label>
            <input
            type="text"
            id="first_name"
            value={firstName}
            autoComplete="off"
            onChange={(e) => setFirstName(e.target.value) }/>
            <label>Last Name</label>
            <input
            type="text"
            id="last_name"
            value={lastName}
            autoComplete="off"
            onChange={(e) => setLastName(e.target.value) }/>
            <label>Email</label>
            <input
            type="text"
            id="email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value) }/>
            <label>Photo</label>
            <input
            type="text"
            id="image"
            value={image}
            autoComplete="off"
            onChange={(e) => setImage(e.target.value) }/>
            <label>Cover Photo</label>
            <input
            type="text"
            id="background_image"
            value={backgroundImage}
            autoComplete="off"
            onChange={(e) => setBackgroundImage(e.target.value) }/>
            <label>Username</label>
            <input
            type="text"
            id="username"
            value={username}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value) }/>
            <label>Password</label>
            <input
            type="text"
            id="password"
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value) }/>
            <label>confirm password</label>
            <input
            type="text"
            id="password_confirmation"
            value={passwordConfirmation}
            autoComplete="off"
            onChange={(e) => setPasswordConfirmation(e.target.value) }/>
            <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                <div>
                {errors.map((err) => (
                <p key={err}>{err}</p>
                ))}
                </div>
        </form>
      )
}

export default CreateAccountForm