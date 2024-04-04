import React from 'react'
import {Outlet, Navigate} from "react-router-dom"

function PrivateComp() {
const signAuth = localStorage.getItem("sign-up")
return (
    <>
  {signAuth?<Outlet/>: <Navigate to="/signup"/>}

    </>
  )
}

export default PrivateComp;