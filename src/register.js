import ReactDOM from 'react-dom';
import './App.css';
import React from "react";

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
render() {
    return(
            <div>
                <form>
                    <input type="text" name="name"/>
                    <input type="text" name="email"/>
                    <input type="password" name="password"/>
                </form>
            </div>
        )
    }
}
export default Register;