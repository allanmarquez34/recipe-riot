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
    const history = useHistory()

    console.log(editAccount)

    function handleSubmit(e){
        e.preventDefault()

        const editAccount = {
            first_name: editFirstName,
            last_name: editLastName,
            email: editEmail, 
            username: editUsername, 
            image: editImage,
            background_image: editBackgroundImage,
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
        <form className="container"onSubmit={handleSubmit}>
         <div className="signup">
            <label className="frlabel" >First Name</label>
                <input
                    type="text"
                    name="editFirstName"
                    id="editFirstName"
                    value={editFirstName}
                    autoComplete="off"
                    onChange={(e) => setFirstName(e.target.value) }/>
            <label className="frlabel">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    value={editLastName}
                    autoComplete="off"
                    onChange={(e) => setLastName(e.target.value) }/>
            <label className="frlabel">Email</label>
                <input
                    type="text"
                    id="email"
                    value={editEmail}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value) }/>
            <label className="frlabel">Photo</label>
                <input
                    type="text"
                    id="image"
                    value={editImage}
                    autoComplete="off"
                    onChange={(e) => setImage(e.target.value) }/>
            <label className="frlabel">Cover Photo</label>
                <input
                    type="text"
                    id="backgroundImage"
                    value={editBackgroundImage}
                    autoComplete="off"
                    onChange={(e) => setBackgroundImage(e.target.value) }/>
            <label className="frlabel">Username</label>
                <input
                    type="text"
                    id="username"
                    value={editUsername}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value) }/>
            <label className="frlabel">Password</label>
                <input
                    type="text"
                    id="password"
                    value={editPassword}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value) }/>
            <label className="frlabel">confirm password</label>
                <input
                    type="text"
                    id="passwordConfirmation"
                    value={editPasswordConfirmation}
                    autoComplete="off"
                    onChange={(e) => setPasswordConfirmation(e.target.value) }/>
                <div className="updatebutton">
                    <button  class="button-28" role="button" type="submit">update profile</button>
                </div>
            
            </div>
        </form>
    )
}

export default EditAccount
