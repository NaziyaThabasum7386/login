import { useState } from 'react';
import './App.css';


export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

const haandleSubmit =(e) => {
  e.preventDefault();
  if(username === "user" && password === "password") {
    setError("");
    setIsSubmitted(true);

  }else {
    
    setError("Invalid username or password");
    setIsSubmitted(false);
  }
};

  return (
    <div> 
      <h1>Login Page</h1>
      {isSubmitted? (
          <div>
            <p>Welcome, {username}!</p>
          </div>
         ) : (
            <form onSubmit= {haandleSubmit}>
              {error && <p> {error}</p>}
              <div>
                <label htmlFor="username">Username:</label>
                <input 
                id = "username"
                type= "text"
                placeholder="username"
                value= {username}
                onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input 
                id = "password"
                type= "text"
                placeholder="password"
                value= {password}
                onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button type = "submit">Submit</button>
              </div>
            </form> 
        )
      }
    </div>
  )
}
