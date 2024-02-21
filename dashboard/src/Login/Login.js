import React from 'react';
import './Login.css';

const Login = () => {
    return ( 
        <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
          </div>
          <button>OK</button>
        </form>
      </div>
     );
}
 
export default Login;