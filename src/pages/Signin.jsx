import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Signin() {
  return (
    <>
        <NavBar />
    <div className="sign-in">
        <div className="sign-in-box">
            <h2>Login</h2>
            <p>Please login using account detail bellow.</p>
            <form>
                <input type="email" name="email" placeholder="Email" />
                
                <input type="password" name="password" placeholder="Password" />
                <button className="btn btn-large btn-dark mb-3">Sign in</button>
                <br></br>
                <Link to={"signup"}>Create Account?</Link>
            </form>
        </div>
    </div>
    </>
  )
}
