
import { useNavigate } from "react-router-dom";
import './auth.css'

export const Auth = () => {

  const navigate = useNavigate();
 
  const handleLogin = () => {
    navigate("/");
  }
  return (
    <div class="container">
    <form action="./" method="post">
      <label for="username">Email or Phone Number:</label>
      <input type="text" id="username" name="username" placeholder="Enter email or phone number" />

      <label for="password">Password:</label>
      <div class="password-container">
        <input type="password" id="password" name="password" placeholder="Password" />
        <i class="fas fa-eye" id="togglePassword"></i> </div>

      <button type="submit">Log In</button>

      <a href="#" class="forgot-password">Forgot Password?</a>
      <p>Don't have an account? <a href="#">Sign Up</a></p>
    </form>
  </div>
  );
};