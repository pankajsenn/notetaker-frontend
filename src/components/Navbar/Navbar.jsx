import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const navigate = useNavigate();
  function Delete(){
    fetch("http://localhost:3001/deletenotes",{
      method:"DELETE"
    }).then((res)=>res.json())
    .then((data)=>{
       if(data.status==="Success"){
          window.location.reload();
          alert("All the notes have deen Deleted successfully")
       }
    })
    .catch((e)=>console.log(e))
  }
  return (
    <>
    <div id='navbar-container'>
     <div onClick={()=>{navigate("/homepage")}}>Home</div>
     <div onClick={()=>{navigate("/addnote")}}>+ AddNote</div>
     <div onClick={Delete}>x Delete All</div>
     <div>Export</div>
    </div>
    </>
  )
}

export default Navbar
