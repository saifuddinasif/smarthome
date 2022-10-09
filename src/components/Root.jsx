import React, { createContext } from 'react';
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLoaderData } from 'react-router-dom';


 export  const ProduceContext = createContext([])

const Root = () => {

const products = useLoaderData();



/* the procuts value will be available to all the components inside ProductContext.Provider */
    return (
        <ProduceContext.Provider value={[products]}>
        <div>


            <Header></Header>
             
             <Outlet/>
            <Footer/>
        </div>
        </ProduceContext.Provider>
    );
};

export default Root;