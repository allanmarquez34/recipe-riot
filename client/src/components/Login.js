import React,{useState} from "react"
import LoginForm from "./LoginForm"
import CreateAccountForm from "./CreateAccountForm"

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <div>
            <h1 className="logo">Recipe Riot</h1>
            <div className="container">
            {showLogin ? (
             <div>
                <LoginForm onLogin={onLogin}/>
                <p className="frlabel">
                    Dont have an account? &nbsp;
                    <button class="button-28" role="button" onClick={() => setShowLogin(false)}>
                     Sign Up
                    </button>
                </p>
             </div>
            ) : (
              <div>
                 <CreateAccountForm onLogin={onLogin}/>
                 <p className="frlabel">
                     Already Have an Account? &nbsp;
                    <button class="button-28" role="button" onClick={()=> setShowLogin(true)}>
                        Log In
                    </button>
                 </p>
              </div>
            )}  
            </div>
        </div>
    )
}

export default Login