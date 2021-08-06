// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Register from "./register";
import axios from "axios";

axios.defaults.baseURL="http://127.0.0.1:8000";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <h1>React Laravel</h1>

            <div>
                <Route exact path="/" component={Register}/>
            </div>
        </div>
    </BrowserRouter>

  );
}

export default App;
