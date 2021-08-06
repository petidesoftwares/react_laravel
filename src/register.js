import ReactDOM from 'react-dom';
import './App.css';
import React, {useState} from "react";
import axios from "axios";

function Register (){
        const [inputStatus,setInput] = useState({
            name: "",
            email: "",
            password: ""
        })
    const handleInput=(e)=>{
        e.persist();
        setInput({...inputStatus,[e.target.name]:[e.target.value]})
    }
    const registerUser=(e)=>{
            e.preventDefault();
            const regData = {
                name:inputStatus.name[0],
                email:inputStatus.email[0],
                password:inputStatus.password[0]
            }
        fetch('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response=>response.json()).then((resp)=>{
            console.log(resp);
        }, (error) =>{
            console.log(error);
        })
        // then(response => {
        // //     axios.post('api/register',regData).then(response=>{
        // //         console.log(response);
        //     })
        // })
    }
    return(
            <div>
                <form onSubmit={registerUser}>
                    <input type="text" name="name" placeholder="Enter Name" onChange={handleInput} value={inputStatus.name}/><br/>
                    <input type="text" name="email" placeholder="Enter Email" onChange={handleInput} value={inputStatus.email}/><br/>
                    <input type="password" name="password" placeholder={"Enter Password"} onChange={handleInput} value={inputStatus.password}/><br/>
                    <input type="submit" name="submit" value="Register"/>
                </form>
            </div>
        )
}
export default Register;