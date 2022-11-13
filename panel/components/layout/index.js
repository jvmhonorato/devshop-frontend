import React, { useState } from "react";
import Card from "../Card";
import Menu from "../Menu";
import Title from "../title";
import { MdCategory,MdOutlineHome } from "react-icons/md";

const Layout = ({children}) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [dropdownOpen, setdropdownOpen] = useState(false)

  const close = () => {
    setSideBarOpen(false)
  }
  const open = () => {
    setSideBarOpen(true)
  }
    return(
        
            
         <div>
            <div className="flex h-screen bg-gray-200">
            <div classNameName={sideBarOpen ? 'block' : 'hidden'} onClick={close} className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
        
            <div classNameName={"fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0" +
                (sideBarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in')} >
               <Menu.Brand>DevShop</Menu.Brand>
                    <Menu.Nav>
                   <Menu.NavItem href='/' Icon={MdOutlineHome} >Home</Menu.NavItem>
                   <Menu.NavItem href='/categories'Icon={MdCategory}>Categorias</Menu.NavItem>
                   <Menu.NavItem href='/'>test</Menu.NavItem>
                   <Menu.NavItem href='/'>test</Menu.NavItem>
        
                    </Menu.Nav>
               
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
                    <div className="flex items-center">
                     
        
                        <div className="relative mx-4 lg:mx-0">
                          
                        
        
                            
                        </div>
                    </div>
        
                    <div className="flex items-center">
                        <div x-data="{ notificationOpen: false }" className="relative">
                            <button onClick="notificationOpen = ! notificationOpen"
                                className="flex mx-4 text-gray-600 focus:outline-none">
                         
                            </button>
        
                            <div onClick={() => setdropdownOpen(false)}
                                classNameName={dropdownOpen ?'block':''+'fixed inset-0 h-full w-full z-10'} ></div>
        
                           
                        </div>
        
                        <div className="relative">
                            
        
                            <div x-show="dropdownOpen" onClick="dropdownOpen = false" className="fixed inset-0 h-full w-full z-10"
                                ></div>
        
                            <div x-show="dropdownOpen"
                                className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                               >
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
                                <a href="/login"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                    {children}
                        ---
                    </div>
                </main>
            </div>
        </div>
    </div>
      
    )
}

export default Layout