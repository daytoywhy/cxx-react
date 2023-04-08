import React,{ lazy } from "react";
import { useRoutes,Navigate,HashRouter } from 'react-router-dom'
import Layout from '../pages/layout'

/**
 * 实现路由懒加载
 */
const lazyComponent = (path:string) => {
  const Comp = lazy(()=> import(/* @vite-ignore */`../pages/${path}`))
  return (
    <React.Suspense fallback={<>加载中...</>}>
      <Comp />
    </React.Suspense>
  )
}

const GetRoute = () =>{
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/home"></Navigate>
    },
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:'home',
          element:lazyComponent('home/index.tsx')
        },
        {
          path:'article',
          element:lazyComponent('article/index.tsx')
        },
        {
          path:'messageBoard',
          element:lazyComponent('messageBoard/index.tsx')
        },
        {
          path:'code-rain',
          element:lazyComponent('code-rain/index.tsx')
        },
      ]
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