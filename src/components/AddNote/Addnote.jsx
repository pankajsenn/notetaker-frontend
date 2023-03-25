import React, { useState } from 'react'
import './Addnote.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
const Addnote = () => {
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const navigate = useNavigate();

    function Postnote(){
      if(title===""||description===""){
        alert("please fill the title and description")
      }
      else{
        fetch("http://localhost:3001/postnotes",{
            method:"POST",
            body:JSON.stringify({
                title:title,
               description:description
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then((res)=>res.json())
        .then((data)=>{
            if(data.status==="Success"){
                navigate("/homepage");
            }
        })
        .catch((e)=>{console.log(e)})
      }
    }
    return (
        <>
            <Navbar />
            <div id='addnote-container'>
                <div>
                    <h2>Title</h2>
                    <input placeholder='Title' onChange={(e)=>{settitle(e.target.value)}}></input>
                </div>
                <div id='description-div'>
                    <h2>Description</h2>
                    <input placeholder="what's on your mind?"  onChange={(e)=>{setdescription(e.target.value)}}></input>
                </div>
                <div id='btn'>
                <button onClick={Postnote}>Add Note</button>
                </div>
            </div>
        </>
    )
}

export default Addnote
