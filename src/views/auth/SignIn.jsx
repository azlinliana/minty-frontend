import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ForgotPasswordModal from "./ForgotPasswordModal/ForgotPasswordModal";
import { RiEyeCloseLine } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import mintyLogo from "../../assets/minty-logo.svg";
import "../../assets/styles/signin.css";

function SignIn() {
  const [isModalForgotPassword, setIsModalForgotPassword] = useState(false);
  const handleCloseModalForgotPassword = () => setIsModalForgotPassword(false);
  const handleIsModalForgotPassword = () => setIsModalForgotPassword(true);

  const clickForgotPasswordLink = [
    {
      label: "OK",
      variant: "primary",
      onClick: openLinkInNewTab,
    },
  ];

  function openLinkInNewTab() {
    window.open("", "_blank");
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.body.classList.add("signin-page");
    return () => {
      document.body.classList.remove("signin-page");
    };
  }, []);

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
          <h2>Welcome</h2>
          <form onSubmit={handleSubmit()} onReset={reset}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                {...register("idKakitangan", { required: true })}
                aria-invalid={errors.idKakitangan ? "true" : "false"}
                placeholder="Your username . . ."
              />
              {errors.idKakitangan?.type === "required" && <small>Username is required</small>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("kataLaluanKakitangan", { required: true })}
                  aria-invalid={errors.kataLaluanKakitangan ? "true" : "false"}
                  placeholder="Your password . . ."
                />
                <div className="toggle-password" onClick={toggleShowPassword}>
                  {showPassword ? <BsEyeFill /> : <RiEyeCloseLine />}
                </div>
              </div>
              {errors.kataLaluanKakitangan?.type === "required" && <small>Password is required</small>}
            </div>

            <button type="submit" className="signin-button">Sign In</button>
          </form>

          <div className="forgot-password">
            <p>
              <Link to="#" onClick={handleIsModalForgotPassword}>Forgotten your password?</Link>
            </p>

            <ForgotPasswordModal
              show={isModalForgotPassword}
              handleClose={handleCloseModalForgotPassword}
              title="Reset Password Unavailable"
              content={<p>Reset password is unavailable at the moment</p>}
              buttons={clickForgotPasswordLink}
            />
          </div>

          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/sign-up">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
