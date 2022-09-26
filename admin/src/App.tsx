import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateUserName} from "store/userActions"
import "./index.scss";

const App = () =>{
  const username = useSelector((state) => state.user.name)
  const dispatch = useDispatch()

  const updateName = ()=>{
    dispatch(updateUserName('formsflowadmin'))
  }
  return (
    <div className="container">
    <div >Name: {username}</div>
    <button onClick={()=>{updateName()}}> click to update name</button>
  </div>
  )
}

export default App;