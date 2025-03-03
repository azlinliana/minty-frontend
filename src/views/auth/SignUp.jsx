import { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import mintyLogo from "../../assets/minty-logo.svg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSignUp = (data) => {
    console.log("User Registered:", data);
    reset();
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-left">
          <div className="logo-container">
            <img src={mintyLogo} alt="minty-logo" />
          </div>
        </div>
        <div className="signin-right">
          <h3>Minty</h3>
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit(handleSignUp)} onReset={reset}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                {...register("username", { required: true })}
                placeholder="Your username . . ."
                aria-invalid={errors.username ? "true" : "false"}
              />
              {errors.username && <small>A username is required</small>}
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your email . . ."
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <small>Email is required</small>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="Create a password . . ."
                />
                <div className="toggle-password" onClick={toggleShowPassword}>
                  {showPassword ? <BsEyeFill /> : <RiEyeCloseLine />}
                </div>
              </div>
              {errors.password && <small>Password is required</small>}
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <div className="password-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm your password . . ."
                />
                <div className="toggle-password" onClick={toggleShowConfirmPassword}>
                  {showConfirmPassword ? <BsEyeFill /> : <RiEyeCloseLine />}
                </div>
              </div>
              {errors.confirmPassword && <small>Confirm Password is required</small>}
            </div>

            <button type="submit" className="signin-button">Sign Up</button>
          </form>

          <div className="forgot-password">
            <p>
              Already have an account? <Link to="/">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
