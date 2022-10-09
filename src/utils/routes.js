import { createBrowserRouter} from 'react-router-dom'

import Home from '../components/Home'

import Root from '../components/Root'

import About from '../components/About'

import ErrorPage from '../components/ErrorPage'

import Shop from '../components/Shop'


const router = createBrowserRouter([

{
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,

    loader: () => fetch ('products.json'),


    children : [
        { path: '/', element : <Home/>  },
        { path: '/home', element : <Home/>  },
        { path: '/shop', element : <Shop/>  },
        { path: '/about', element : <About/>  },


    ]
  
  
  },


])

export default router;
