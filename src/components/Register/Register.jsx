import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider/AuthProvider";
const Register = () => {
    const {signUp} = useContext(AuthContext);
    // declare states for EmailAuthCredential,password and error 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* form section  */}
                    <form 
                    className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input type="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        {/* using onChange event handler set value to state  */}
                        <input onChange={(e) => setEmail(e.target.value)}
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
                        <button
                        className="btn bg-blue-600 text-white">Register</button>
                        </div>
                        <div className="form-control mt-6">
                        </div>

                    </form>
                    </div>
                    <p>Have already account? <Link to='/login'><span className="text-red-600">Login</span></Link></p>
                </div>
                </div>
        </div>
    );
};

export default Register;