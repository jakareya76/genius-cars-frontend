import { useContext } from "react";
import loginImg from "../assets/images/login/login.svg";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await login(email, password);

      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        alert("invalid credential");
        return;
      }
    }
  };

  // if (user) {
  //   navigate("/");
  // }

  return (
    <div className="container mx-auto">
      <div className="min-h-screen hero">
        <div className="flex-col gap-10 hero-content lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="login-img" />
          </div>
          <div className="w-full max-w-sm border card shrink-0 bg-base-100">
            <h2 className="mt-8 text-2xl font-semibold text-center font-inter">
              Login
            </h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="mt-6 form-control">
                <button
                  type="submit"
                  className="btn bg-[#FF3811] text-white hover:bg-red-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
