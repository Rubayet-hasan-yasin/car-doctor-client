import NavBar from "../Shared/NavBar/NavBar";
import img from '../../assets/images/login/login.svg'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';


    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(error=> console.log(error.message))



    }
    return (
        <>
            <NavBar />
            <div className="hero min-h-screen">
                <div className="flex w-full justify-between">
                    <div className="w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card shadow-2xl border w-2/5 bg-base-100">

                        <div className="card-body">
                            <h2 className="text-gray-600 text-4xl font-bold text-center my-5">Sign Up</h2>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password"
                                        placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn btn-primary" />
                                </div>
                            </form>
                            <p className="text-lg text-gray-500 font-semibold text-center my-4">Already have an account? <Link to={'/login'} className="text-orange-600">Login</Link></p>

                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;