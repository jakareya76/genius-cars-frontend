import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import loginImg from "../assets/images/login/login.svg";
import { AuthContext } from "../context/AuthProvider";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUp, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      alert("Password Must Be 6 Characters");
      return;
    }

    try {
      await signUp(email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="container mx-auto">
      <div className="min-h-screen hero">
        <div className="flex-col gap-10 hero-content lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="login-img" />
          </div>
          <div className="w-full max-w-sm border card shrink-0 bg-base-100">
            <h2 className="mt-8 text-2xl font-semibold text-center font-inter">
              Sign Up
            </h2>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="mt-6 form-control">
                <button
                  type="submit"
                  className="btn bg-[#FF3811] text-white hover:bg-red-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
