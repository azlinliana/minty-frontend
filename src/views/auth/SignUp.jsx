import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorAlert from "../components/sweet-alert/ErrorAlert";
import { RiEyeCloseLine } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import mintyLogo from "../../assets/minty-logo.svg";
import "../../assets/styles/signup.css";
import axiosCustom from "../../axios";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  
  useEffect(() => {
    document.body.classList.add("signup-page");
    return () => {
      document.body.classList.remove("signup-page");
    };
  }, []);

  const navigate = useNavigate();

  const handleSignUp = async (signUpInput) => {
    try {
      const response = await axiosCustom.post(`/auth/register`, signUpInput);
      if (response.status === 201) {
        navigate("/signup");
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-left">
          <div className="logo-container">
            <img src={mintyLogo} alt="minty-logo" />
          </div>
        </div>
        <div className="signup-right">
          <h3>Minty</h3>
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit(handleSignUp)} onReset={reset}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                {...register("fullName", { required: true })}
                placeholder="Your full name . . ."
              />
              {errors.fullName && <small>Full Name is required</small>}
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your email . . ."
              />
              {errors.email && <small>Email is required</small>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="Your password . . ."
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
              {errors.confirmPassword && <small>Confirmation is required</small>}
            </div>

            <button type="submit" className="signup-button">Sign Up</button>
          </form>

          <div className="forgot-password">
            <p>
              Already have an account? <Link to="/signup">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
