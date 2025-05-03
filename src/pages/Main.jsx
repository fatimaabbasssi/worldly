import React from 'react'
import { createBrowserRouter,   createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import ErrorElement from '../components/ErrorElement'


//pages
import Layout from './Layout'
import Home , {fetCountries} from './Home'
import Detail , {fetCountry} from './Detail'
import Services from './Services'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
const Main = () => {
 let router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route   path="/"  element={<Layout/>} >
        <Route  loader={fetCountries}  path='/'  element={<Home/>}/>
        <Route loader={fetCountries}  errorElement={<ErrorElement/>} path='/home' element={<Home/>}/>
        <Route loader={({ params }) => fetCountry(params)} path='/detail/:id' element={<Detail />} />
        <Route  path='/services' errorElement={<ErrorElement/>} element={<Services/>}/>
        <Route  path='/contact' errorElement={<ErrorElement/>} element={<Contact/>}/>
        <Route  path='*' errorElement={<ErrorElement/>} element={<PageNotFound/>}/>
        <Route  />
      </Route>
    )
 )

 return(
   <>
    <RouterProvider router={router}  fallbackElement={<h1>Loading.......</h1>} />
   </>
 )
}

export default Main