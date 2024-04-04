import React from 'react'
import {Outlet, Navigate} from "react-router-dom"

function PrivateComp() {
const logAuth = localStorage.getItem("log-in")
  return (
    <>
  {logAuth?<Outlet/>: <Navigate to="/signup"/>}
    </>
  )
}

export default PrivateComp;