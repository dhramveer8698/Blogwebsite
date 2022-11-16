import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link,useParams, useNavigate  } from 'react-router-dom';
import { doc,getDoc, setDoc } from "firebase/firestore";
import {db} from '../firebase'


const Update = () => {
     const[blog,setBlog]=useState("");
     const[writername,setWritername]=useState("");
     const { id:createId } = useParams();
     const navigate = useNavigate();

     useEffect(()=>{
      loadData();
     },[createId ]);
     const loadData=async ()=>{
     const docRef = doc(db, "creates", createId );
    try {
    const doc = await getDoc(docRef);
    console.log("Cached document data:", doc.data());
    setBlog(doc.data().blog)
    setWritername(doc.data().writername)
    }catch (e) {
    console.log("Error getting cached document:", e);
    }
    } 
    const handleUpdate=async (e)=>{
      e.preventDefault();
      console.log("id...45",createId )
      await setDoc(doc(db, "creates", createId ), {
        blog:blog,
        writername:writername,
      })
      navigate("/read/");
   }
  return (
    <>
    <div className='container mt-5'>
    <h1>Update Operation</h1>
    <div className="contact col-lg-6 bg-white rounded-4 shadow mx-auto ">
        <h1 className='text251 ms-5 mt-5'>Update a Blog</h1>
        <div className="mb-3 ms-5 me-5">
        <textarea type="text" 
        value={blog} 
        onChange={(e) => setBlog(e.target.value)}
        className="form-control pt-2 fs-5" rows="5" id="comment" placeholder="Blog" name="text"></textarea>
        </div>
        <div className="mb-3 ms-5 me-5">
        <input type="text" 
        value={blog} 
        onChange={(e) => setWritername(e.target.value)} 
        className="form-control pt-2 fs-5" id="Name" placeholder="WriterName" name="Name" required/>
        </div>
        <Link to="/read">
        <button 
        onClick={handleUpdate} 
        className="button7 mt-3 bg-primary border-0">Update</button>
        </Link>
        <Link to="/read">
        <button className="button6 mt-3">Back</button>
        </Link>
        </div>
        </div>
    </>
  )
}

export default Update;
