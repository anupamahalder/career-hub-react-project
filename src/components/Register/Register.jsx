/* eslint-disable no-constant-condition */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider/AuthProvider";
const Register = () => {
    const {signUp} = useContext(AuthContext);
    // declare states for EmailAuthCredential,password and error 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // handle register 
    const handleRegister = (e) =>{
        e.preventDefault();
        // password validation 
        if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
            setError("Minimum eight characters, at least one letter, one number and one special character is required!");
        }
        else{
            // password is okay 
            setError("");
            // validate email 
            if(!/^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/.test(email)){
                setError('Please give valid email!');
            }
            else{
                // if email and password both true or valid then only call signUp 
                signUp(email,password)
                .then(res=>{
                    console.log(res.user);
                    alert('Registration done successfully!');
                    navigate('/');
                })
                .catch(error => console.log(error.message));
            }
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    {
                        error && <p className="w-[500px] pt-3 text-red-600">{error}</p>
                    }
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
                        <button onClick={handleRegister}
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