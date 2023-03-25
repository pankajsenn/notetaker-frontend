import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"
const SignUp = () => {
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");
    const[repeatpass,setrepeatpass] = useState("");
    const[check,setcheck] = useState(false);
    const navigate = useNavigate();
    function Check(){
        if(!check){
           setcheck(true);
        }
        else{
            setcheck(false);
        }
    }
    function SignUpHandler(){
        if(email===""||password===""||repeatpass===""){
           alert("All fiels are required");
        }
        else {
            if(!check){
                alert('please accept terms and condition for registering')
            }
            if(repeatpass!==password){
                alert('Password and repeat password are not same')
            }
            if(check&&repeatpass===password){
              fetch("http://localhost:3001/signup",{
                method:"POST",
                body:JSON.stringify({
                    email:email,
                    password:password
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
              }).then((res)=>res.json()).then((data)=>{
                console.log(data)
                if(data.status==="Success"){
                    alert("Registered successfully")
                    navigate("/signin")
                }
              })
        }
    }
}
  return (
    <>
    <div id='main-container'>
       <div id='inner-container'>
       <h1 id='signin-heading'>Sign Up </h1> 
       <div>
        <h4>Email address</h4>
        <input placeholder='Enter your email address' className='input'  onChange={(e)=>{setemail(e.target.value)}}></input>
       </div>
       <div>
       <h4>Password</h4>
        <input placeholder='Enter your Password' className='input'  onChange={(e)=>{setpassword(e.target.value)}}></input>
       </div>
       <div>
       <h4>Repeat Password</h4>
        <input placeholder='Enter your Password' className='input'  onChange={(e)=>{setrepeatpass(e.target.value)}}></input>
       </div>
       <div id='remember'>
       <input type='checkbox' onClick={Check}></input>
       <span>I agree with terms and conditions</span>
       </div>
       <div id='btn-div'>
       <button onClick={SignUpHandler}>Continue</button>
       </div>
       <div id='forgot-password'>
        <p>Forgot <span>Password?</span></p>
       </div>
       </div>
    </div>
    </>
  )
}

export default SignUp
