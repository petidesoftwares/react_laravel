import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Register from "./register";

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
