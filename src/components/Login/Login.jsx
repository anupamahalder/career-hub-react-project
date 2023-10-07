import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
    // we can access function which is shared by AuthContext 
    // const {getValueFromWhoIsUsingIt} = useContext(AuthContext);
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        // call the googleSignIn function after calling this we'll get then and there will be response 
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => console.log(error.message));
    }
    return (
        <div>
            {/* <h1 onClick={()=>{getValueFromWhoIsUsingIt()}}>Login here</h1> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <button onClick={handleGoogleSignIn}
                         className="btn bg-red-400 text-black">Login with Google</button>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* form section  */}
                    <form 
                    className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-blue-600 text-white">Login</button>
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