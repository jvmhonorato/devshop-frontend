import React, { useState } from "react";
import Link from "next/link";
import Menu from "../Menu";

import { MdCategory,MdOutlineHome } from "react-icons/md";

const Layout = ({children}) => {


    return(
        
            
         <div>
            <div className="flex h-screen bg-gray-200">
            <div  ></div>
        
            <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0" 
                 >
               <Menu.Brand>DevShop</Menu.Brand>
                    <Menu.Nav>
                   <Menu.NavItem href='/' Icon={MdOutlineHome} >Home</Menu.NavItem>
                   <Menu.NavItem href='/categories'Icon={MdCategory}>Categorias</Menu.NavItem>
                   <Menu.NavItem href='/products'Icon={MdCategory}>Produtos</Menu.NavItem>
                   <Menu.NavItem href='/brand'Icon={MdCategory}>Brands</Menu.NavItem>
               
        
                    </Menu.Nav>
               
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
                    <div className="flex items-center">
                     
        
                        <div className="relative mx-4 lg:mx-0">
                          
                        
        
                            
                        </div>
                    </div>
        
                    <div className="flex items-center">
                        <div className="relative">
                            <button>
                         
                            </button>
        
                            <div></div>
        
                           
                        </div>
        
                        <div className="relative">
                            
        
                            <div
                                ></div>
        
                            <div 
                                className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                               >
                                <Link href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</Link>
                                <Link href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</Link>
                                <Link href="/login"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</Link>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        
                    {children}
                        
                    </div>
                </main>
            </div>
        </div>
    </div>
      
    )
}

export default Layout