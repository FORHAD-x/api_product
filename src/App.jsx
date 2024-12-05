
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { Details } from './components/Details'
import { Product } from './components/Product'

function App() {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Product/>}/>
      <Route path="/Details" element={<Details/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute}/>
        
    </>
  )
}

export default App
