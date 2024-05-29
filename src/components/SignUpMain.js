import "../App.css";
import googleIcon from "../assets/google.svg";

function SignUpMain() {
  return (
    <div className="main">
      <h1>Sign Up</h1>
      <div className="btn_main">
        <button className="main_btn">
          <img src={googleIcon} alt="Sign in with Google" />
          Sign in with Google
        </button>
      </div>
      <div className="txt">
        <p className="main_txt">or sign in with</p>
      </div>
    </div>
  );
}

export default SignUpMain;
