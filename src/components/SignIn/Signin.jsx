import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signin.css"
const Signin = () => {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const navigate = useNavigate();
  function submithandler(){
       if(email!==""&&password!==""){
        fetch("http://localhost:3001/signin",{
          method:"POST",
          body:JSON.stringify({
              email:email,
              password:password
          }),
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          }
        }).then((res)=>res.json())
        .then((data)=>{
         if(data.status==="Success"){
           navigate("/homepage");
         }
         else{
          alert('user does not exist please register first');
          navigate("/signup");
         }
        }).catch((e)=>console.log(e))
       }
       else{
        alert("please provide valid data")
       }
  }
  return (
    <>
    <div id='main-container'>
       <div id='inner-container'>
       <h1 id='signin-heading'>Sign in </h1> 
       <div>
        <h4>Email address</h4>
        <input placeholder='Enter your email address' className='input' onChange={(e)=>{setemail(e.target.value)}}></input>
       </div>
       <div>
       <h4>Password</h4>
        <input placeholder='Enter your Password' className='input'  onChange={(e)=>{setpassword(e.target.value)}}></input>
       </div>
       <div id='remember'>
       <input type='checkbox'></input>
       <span>Remember me</span>
       </div>
       <div id='btn-div'>
       <button onClick={submithandler}>Submit</button>
       </div>
       <div id='forgot-password'>
        <p>Forgot <span>Password?</span></p>
       </div>
       </div>
    </div>
    </>
  )
}

export default Signin
