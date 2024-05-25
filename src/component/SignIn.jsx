import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

export const SignIn = ({userData,setUserData}) => {
    const [name,setName]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        try {
            axios.post("https://assignment-new.onrender.com/api/v1/user/signin",{
                name:name,
                password:password
            })
              .then(function (response) {
                console.log(response.data);
                setUserData(response.data);
                navigate("/home");

              })
              .catch(function (error) {
                console.log(error);
              });
            
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <>
    <div className='parent'>
        <h2 className='heading'>SignIn</h2>
        <form onSubmit={handleSubmit}>
            <input style={{maxWidth: "59%",
    margin: "auto",backgroundColor:"rgb(77, 89, 116)",color:"white"}} type="text" value={name}onChange={(e)=>setName(e.target.value)}className="form-control" placeholder="name"/>
            <br/>
            <input type="password" value={password}onChange={(e)=>setPassword(e.target.value)} style={{maxWidth: "59%",
    margin: "auto",backgroundColor:"rgb(77, 89, 116)",color:"white"}}  className="form-control" placeholder="password"/>
            <br/>
            <button type="submit" className='btn' style={{width:"140px"}}>SignIn</button>
            <div ><Link to="/"  style={{textDecoration:"none",color:"rgb(0, 245, 225)"}}>Don't have an account?signUp.</Link></div>
        </form>

    </div>

    </>
  )
}
