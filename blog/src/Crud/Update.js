import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link,useParams, useNavigate  } from 'react-router-dom';
import { doc,getDoc, setDoc } from "firebase/firestore";
import {db} from '../firebase'


const Update = () => {
     const [tittle, setTittle] = useState("");
     const[blog,setBlog]=useState("");
     const [image,setImage] = useState("");
     const[writername,setWritername]=useState("");
     const { id:createId } = useParams();
     const navigate = useNavigate();

     useEffect(()=>{
      loadData();
     },[]);
     const loadData=async ()=>{
     const docRef = doc(db, "creates", createId );
    try {
    const doc = await getDoc(docRef);
    console.log("Cached document data:", doc.data());
    setTittle(doc.data().tittle)
    setBlog(doc.data().blog)
    setImage(doc.data().image)
    setWritername(doc.data().writername)
    }catch (e) {
    console.log("Error getting cached document:", e);
    }
    } 
    const handleUpdate=async (e)=>{
      e.preventDefault();
      console.log("id...45", createId)
      await setDoc(doc(db, "creates", createId),{
        tittle:tittle,
        blog:blog,
        image:image,
        writername:writername,
      });
      navigate("/admin/");
   };
  return (
    <>
    <div className='container mt-4'>
    <h1>Update Operation</h1>
    <div className="contact col-lg-6 bg-white rounded-4 shadow mx-auto ">
        <h1 className='text251 ms-5 mt-3'>Update a Blog</h1>
        <div className="mb-3 ms-5 me-5">
        <input type="text" 
        value={tittle} 
        onChange={(e) => setTittle(e.target.value)} 
        className="form-control pt-2 fs-5" id="Name" placeholder="Title" name="Name" required/>
        </div>
        <div className="mb-3 ms-5 me-5">
        <textarea type="text" 
        value={blog} 
        onChange={(e) => setBlog(e.target.value)}
        className="form-control pt-2 fs-5" rows="4" id="comment" placeholder="Blog" name="text"></textarea>
        </div>
        <div className="mb-3 ms-5 me-5">
        <input type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        className="form-control pt-2 fs-5" id="Name" placeholder="ImageUrl" name="Name" required/>
        </div>
        <div className="mb-3 ms-5 me-5">
        <input type="text" 
        value={writername} 
        onChange={(e) => setWritername(e.target.value)} 
        className="form-control pt-2 fs-5" id="Name" placeholder="WriterName" name="Name" required/>
        </div>
        <Link to="/admin">
        <button 
        onClick={handleUpdate} 
        className="button7 mt-3 bg-primary border-0">Update</button>
        </Link>
        <Link to="/create">
        <button className="button6 mt-3">Back</button>
        </Link>
        </div>
        </div>
    </>
  )
}

export default Update;
