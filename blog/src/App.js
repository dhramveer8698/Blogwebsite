import React from "react";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Create from './Crud/Create';
import Read from './Crud/Read';
import Update from './Crud/Update';
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Admin from "./Crud/Admin";

const App =()=>{
    return(
        <>
         <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Registration/>}/>
                <Route exact path="/registration" element={<Registration/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/create" element={<Create/>}/>
                <Route exact path="/read" element={<Read/>}/>
                <Route exact path="/admin" element={<Admin/>}/>
                <Route exact path="/create" element={<Create/>}/>
                <Route exact path="/update/:id" element={<Update/>}/> 
            </Routes>
         </BrowserRouter> 
        </>
    )
}
export default App;