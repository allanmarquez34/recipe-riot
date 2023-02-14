import React,{useState} from "react"
import { useHistory } from "react-router-dom";

function EditAccount({user}){
    const [editFirstName, setFirstName] = useState("")
    const [editLastName, setLastName] = useState("")
    const [editEmail, setEmail] = useState("")
    const [editUsername, setUsername] = useState("")
    const [editImage, setImage] = useState("")
    const [editBackgroundImage, setBackgroundImage] = useState("")
    const [editPassword, setPassword] = useState("");
    const [editPasswordConfirmation, setPasswordConfirmation] = useState("");
    const [editAccount, setEditAccount] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()

        const editAccount = {
            first_name: editFirstName,
            last_name: editLastName,
            email: editEmail, 
            username: editUsername, 
            image: editImage,
            background_imag: editBackgroundImage,
            password: editPassword,
            password_confirmation: editPasswordConfirmation
        }

        fetch(`/users/${user.id}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(editAccount)  
        })
        .then((r) => r.json())
        .then((editAccount) => console.log(editAccount))
            setEditAccount({
                email: "",
                password: ""
            })
         history.push("/account")
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
                <input
                type="text"
                id="first_name"
                value={editFirstName}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value) }/>
            <label>Last Name</label>
            <input
                type="text"
                id="last_name"
                value={editLastName}
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value) }/>
            <label>Email</label>
                <input
                type="text"
                id="email"
                value={editEmail}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value) }/>
            <label>Photo</label>
                <input
                type="text"
                id="image"
                value={editImage}
                autoComplete="off"
                onChange={(e) => setImage(e.target.value) }/>
            <label>Cover Photo</label>
                <input
                type="text"
                id="background_image"
                value={editBackgroundImage}
                autoComplete="off"
                onChange={(e) => setBackgroundImage(e.target.value) }/>
            <label>Username</label>
                <input
                type="text"
                id="username"
                value={editUsername}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value) }/>
            <label>Password</label>
                <input
                type="text"
                id="password"
                value={editPassword}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value) }/>
            <label>confirm password</label>
                <input
                type="password"
                id="password_confirmation"
                value={editPasswordConfirmation}
                autoComplete="off"
                onChange={(e) => setPasswordConfirmation(e.target.value) }/>
            <button type="submit">{isLoading ? "Loading..." : "update profile"}</button>
                <div>
                {errors.map((err) => (
                <p key={err}>{err}</p>
                ))}
                </div>
        </form>
    )
}

export default EditAccount
