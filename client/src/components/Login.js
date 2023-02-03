import React,{useState} from "react"
import LoginForm from "./LoginForm"
import CreateAccountForm from "./CreateAccountForm"

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <div>
            <h1>Recipe Riot</h1>
            {showLogin ? (
             <div>
                <LoginForm onLogin={onLogin}/>
                <p>
                    Dont have an account? &nbsp;
                    <button onClick={() => setShowLogin(false)}>
                     Sign Up
                    </button>
                </p>
             </div>
            ) : (
              <div>
                 <CreateAccountForm onLogin={onLogin}/>
                 <p>
                    Already Have an Account? &nbsp;
                    <button onClick={()=> setShowLogin(true)}>
                        Log In
                    </button>
                 </p>
              </div>
            )}  
        </div>
    )
}

export default Login