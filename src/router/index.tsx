import React,{ lazy } from "react";
import { useRoutes,Navigate,HashRouter } from 'react-router-dom'
import Layout from '../pages/layout'

const GetRoute = ()=>{
  const element = useRoutes([
    {
      path:'/',
      element:<Layout />
    }
  ])

  return (
    element
  )
}

const SetRoute = ()=>{
  return (
    <HashRouter>
      <GetRoute />
    </HashRouter>
  )
}

export default SetRoute