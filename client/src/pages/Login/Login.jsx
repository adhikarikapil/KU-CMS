// Styles
import "./Login.css";

function Login() {
  return (
    <>
      <div className="loginContainer" id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Login as Teacher</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Login as Student</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Teachers!!!</h1>
              <p>Enter your credentials to use all of site features</p>
              <button className="hidden"onClick={() => {
                container.classList.remove('active') 
              }
              }>Login as Student</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome Students!</h1>
              <p>
                Enter your credentials to use all of site features
              </p>
              <button className="hidden" onClick={() => {
                container.classList.add('active')
              }
              }>Login as Teacher</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
