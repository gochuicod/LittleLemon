import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Homepage'
import Layout from './Layout'
import About from './About'
import { HelmetProvider } from 'react-helmet-async'

const helmetContext = {}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    path: "/LittleLemon/",
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  }
])

const App = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router}/>
    </HelmetProvider>
  )
}

export default App