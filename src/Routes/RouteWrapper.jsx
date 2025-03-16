import React from 'react'
import Home from '../pages/Home'
import ProtectedRoute from '../components/ProtectedRoute'
import Success from '../pages/Success'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RouteWrapper = () => {
  const route_s = [
    {
        id:1,
        path:"/",
        element:<Home/>
    },
    {
        id:2,
        path:"/success",
        element:<ProtectedRoute element={<Success path={'/success'}/>}/>
    },
    {
        id:3,
        path:"/*",
        element:<Error/>
    }
    
  ]
  return (
    <BrowserRouter>
      <Routes>
        {
            route_s.map(({id,path,element})=>{
                return <Route path={path} key={id} element={element}/>
            })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default RouteWrapper