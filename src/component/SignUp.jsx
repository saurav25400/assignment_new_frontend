import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

export const SignUp = () => {
    const[name,setName]=useState('');
    const[dob,setDob]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
     function handleSubmit(e){
        e.preventDefault();
        const userData={name,dob,email,password};
        try {
            axios.post("https://assignment-new.onrender.com/api/v1/user/signup",{
                name:name,
                dob:dob,
                email:email,
                password:password

            })
              .then(function (response) {
                console.log(response.data);
                navigate("/signin");

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
        <h2 className='heading'>SignUp</h2>
        <form onSubmit={handleSubmit}>
            <input style={{maxWidth: "59%",
    margin: "auto",backgroundColor:"rgb(77, 89, 116)",color:"white"}} type="text" value={name} onChange={(e)=>setName(e.target.value)}className="form-control" placeholder="name"/>
            <br/>
            <input type="date"  style={{maxWidth: "59%",
    margin: "auto",backgroundColor:"rgb(77, 89, 116)",color:"white"}} value={dob}
    onChange={(e)=>setDob(e.target.value)} className="form-control" placeholder="date of birth"/>
            <br/>
            <input type="email" style={{maxWidth: "59%",
    margin: "auto",backgroundColor:"rgb(77, 89, 116)",color:"white"}} value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
            <br/>
            <input type="password" style={{maxWidth: "59%",
    margin: "auto",backgroundColor:"rgb(77, 89, 116)",color:"white"}} value={password}className="form-control" onChange={(e)=>setPassword(e.target.value)}placeholder="password"/>
            <br/>
            <button type="submit" className='btn' style={{width:"140px"}}>SignUp</button>
            <div ><Link to="/signin"
  style={{textDecoration:"none",color:"rgb(0, 245, 225)"}}>Already have an account?signin.</Link></div>
        </form>

    </div>

    </>
  )
}
