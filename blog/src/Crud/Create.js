import React from 'react';
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';

const Create = () => {
  const [blog, setBlog] = useState("");
  const [writername, setWritername] = useState("");
  const history = useNavigate();

  const SubmitBlog =async (e)=>{
    e.preventDefault();
      console.log("form",blog,writername);
      try {
        if(blog===""){
          alert("Blog can not be empty!")
        }
        else if(writername===""){
          alert("WriterName can not be empty!")
        }
        else{
          const abcd=await addDoc(collection(db, 'creates'), {
            blog:blog,
            writername:writername,
            createdAt: Timestamp.now()
          }).then(()=>{
            alert("Data saved successfully!")
            setBlog("")
            setWritername("")
            history("/read");
          });
          console.log("abcd",abcd)
        }}catch (err) {
          console.log("error",err)
          alert(err)
        }};   


  return (
    <>
    <div className='container mt-4'>
    <div className='d-flex justify-content-between'>
    <div className='text252 col-sm-10 fs-1'>Create Blog</div>
    <div className='text241 col-sm-2 fs-1'>
    <Link to ="/read">
    <button className='button7'>Show Data</button>
    </Link>
    </div>
    </div>
    <div className="contact col-lg-6 bg-white rounded-4 shadow mx-auto ">
        <h1 className='text251 ms-5'>Create a blog</h1>
        <div className="mb-3 ms-5 me-5">
        <textarea className="form-control pt-2 fs-5" value={blog} onChange={(e) => setBlog(e.target.value)}   rows="5" id="comment" placeholder="Blog" name="text" required/>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="mb-3 ms-5 me-5">
        <input type="text" value={writername} onChange={(e) => setWritername(e.target.value)} className="form-control pt-2 fs-5" id="Name" placeholder="WriterName" name="Name" required/>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <button onClick={SubmitBlog} className="button7 bg-primary border-0 mt-3">Blog Stored</button>
        </div>
        </div>
    </>
  )
}
export default Create;
