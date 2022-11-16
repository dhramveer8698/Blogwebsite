import React, { useState,useEffect } from 'react'
import {db} from '../firebase'
import {collection,getDocs} from 'firebase/firestore'
import { Link} from 'react-router-dom';
import { doc, deleteDoc,} from "firebase/firestore";



const Read = () => {
    const[creates,setCreates]=useState([]);
    const[tabledark,setTableDark]=useState('');
    
          useEffect( ()=>{
          console.log("fetchingData")
          const abc = fetchData();
          console.log("abc",abc);
                    },[])
          
          async function fetchData() {
            let arr=[]
              const querySnapshot = await getDocs(collection(db, "creates"));
              querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                arr=[{id:doc.id, ...doc.data()}, ...arr]
              });
              setCreates(arr);
          } 
          const handledelete=async (e,id)=>{
            e.preventDefault();
            alert("You want to delete ??")
            console.log("id...45",id)
            await deleteDoc(doc(db, "creates",id));
            fetchData();
         }
        
  return (
    <>
    <div className='container mt-5'>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox"
      onClick={()=>{
        if(tabledark==='table-dark') setTableDark("")
        else setTableDark("table-dark");
      }}
    />
    </div>
    <div className='d-flex justify-content-between'>
    <div className='col-sm-10 fs-1'>Read Operation</div>
    <div className='text241 col-sm-2 fs-1'>
    <Link to="/create">
    <button className='button7 bg-primary border-0'>Create Data</button>
    </Link>
    </div>
    </div>
      <table className={`table table-bordered mt-4 ${tabledark}`}>
  <thead>
    <tr>
      <th className='text-white' scope="col">id</th>
      <th  className='text-white' scope="col">Blog</th>
      <th  className='text-white' scope="col">WriterName</th>
      <th className='text-center text-white' scope="col">Update</th>
      <th className='text-center text-white' scope="col">Delete</th>
    </tr>
  </thead>
    {
      creates && creates.map((x)=>{
        return(
          <>
          <tbody>
          <tr>
          <th scope="row">{x.id}</th>
          <th>{x.blog}</th>
          <th>{x.writername}</th>
          <th className='text-center'>
          <Link to={`/update/${x.id}`}>
          <button type="button" className="btn bg-success text-dark">Edit</button>
          </Link>
          </th>
            <th className='text-center'><button 
            type="button" 
            class="btn bg-danger text-dark"
            onClick={(e)=>handledelete(e,x.id)} 
            >Delete</button></th>
          </tr>
        </tbody>
         </>
        )})}
</table>
</div>
    </>
  )
}

export default Read
