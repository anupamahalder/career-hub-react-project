import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider/AuthProvider";
const Login = () => {
    //destructure 
    const {googleSignIn, logInWithEmailAndPassword} = useContext(AuthContext);
    const navigate = useNavigate();
    //declare states for email, password and error message 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res =>{
            console.log(res.user);
            navigate('/');
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const handleLogin = (e) =>{
        e.preventDefault();
        // here we will check email, password is given or not 
        if(email, password){
            //email and password is true so call signIn
            logInWithEmailAndPassword(email,password)
            .then(res =>{
                console.log(res.user);
                setError("");
                alert("Login successful!");
                navigate('/');
            })
            .catch(error =>{
                setError(error.message);
                console.log(error.message);
            })
        }
        else{
            alert("Please give email and password both!");
        }
    }
    return (
        <div>
            {/* <h1 onClick={()=>{getValueFromWhoIsUsingIt()}}>Login here</h1> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    {
                        error && <p className="pt-3 text-red-600 w-[500px]">{error}</p>
                    }
                    </div>
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* form section  */}
                    <form
                    className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={e=>setEmail(e.target.value)}
                         type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onChange={e=>setPassword(e.target.value)} 
                        type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button onClick={handleLogin}
                         className="btn bg-blue-700 text-white">Login</button>
                        <button onClick={handleGoogleSignIn} 
                         className="btn bg-red-300 text-black mt-3">Login with Google</button>
                        </div>
                        <div className="form-control mt-6">
                        </div>

                    </form>
                    </div>
                    <p>Do not have account? <Link to='/register'><span className="text-red-600">Register</span></Link></p>
                </div>
                </div>
        </div>
    );
};

export default Login;