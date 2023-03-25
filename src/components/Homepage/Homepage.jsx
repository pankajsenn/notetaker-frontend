import React, { useEffect, useState } from 'react'
import "./Homepage.css";
import Navbar from '../Navbar/Navbar';
import Searchbar from '../SearchBar/Searchbar';

const Homepage = () => {
  const [notes,setnotes] = useState([]);
  useEffect(()=>{
       fetch("http://localhost:3001/getnotes")
       .then((res)=>res.json())
       .then((data)=>{
        setnotes(data.notes)
      })
       .catch((e)=>console.log(e))
  },[])
  function DeleteNote(note){
    let newnote = notes.filter((newnotes)=>{
        return newnotes._id!==note._id
    })
    setnotes(newnote)
  }
  return (
    <>
    <Navbar/>
    <Searchbar/>
    <div id='card-container'>
      {
        notes.map((note,index)=>{
            return (
              <div id='card' key={index} >
                <h1>{note.title}</h1>
                <p>{note.description}</p>
                <button onClick={()=>{DeleteNote(note)}}> Delete</button>
              </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Homepage;
