import React,{useEffect, useState} from 'react'
import axios from 'axios';
export const Table = () => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
        try {
            axios.get("https://assignment-new.onrender.com/api/v1/user/get-all"
            )
              .then(function (response) {
                console.log(response.data);
                setUser(response.data.user);

              })
              .catch(function (error) {
                console.log(error);
              });
            
        } catch (error) {
            console.log(error);
            
        }

    },[]);
    if(!user){
        return (<div>...Loading</div>)
    }
   return (
    <>
    <h1 className='heading' style={{width:"400px"}}>User's Data</h1>
    <table class="table custom">    
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">dob</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
    </tr>
  </thead>
  <tbody>
    {user.map((userdata,index)=>(
        <tr>
        <th scope="row">{userdata._id}</th>
        <td>{userdata.name}</td>
        <td>{userdata.dob}</td>
        <td>{userdata.email}</td>
        <td>@{userdata.password}</td>
      </tr>
    ))}
    
  </tbody>
</table>
    
    </>
    )
}
