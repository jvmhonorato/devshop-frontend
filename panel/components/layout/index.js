import React, { useState } from "react";
import Card from "../Card";
import Menu from "../Menu";
import Title from "../title";


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
            <div class="flex h-screen bg-gray-200">
            <div className={sideBarOpen ? 'block' : 'hidden'} onClick={close} class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
        
            <div className={"fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0" +
                (sideBarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in')} >
               <Menu.Brand>DevShop</Menu.Brand>
                    <Menu.Nav>
                   <Menu.NavItem href='/'>Home</Menu.NavItem>
                   <Menu.NavItem href='/categories'>Categorias</Menu.NavItem>
                   <Menu.NavItem href='/'></Menu.NavItem>
                   <Menu.NavItem href='/'>test</Menu.NavItem>
        
                    </Menu.Nav>
               
            </div>
            <div class="flex-1 flex flex-col overflow-hidden">
                <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
                    <div class="flex items-center">
                     
        
                        <div class="relative mx-4 lg:mx-0">
                          
                        
        
                            
                        </div>
                    </div>
        
                    <div class="flex items-center">
                        <div x-data="{ notificationOpen: false }" class="relative">
                            <button onClick="notificationOpen = ! notificationOpen"
                                class="flex mx-4 text-gray-600 focus:outline-none">
                         
                            </button>
        
                            <div onClick={() => setdropdownOpen(false)}
                                className={dropdownOpen ?'block':''+'fixed inset-0 h-full w-full z-10'} ></div>
        
                           
                        </div>
        
                        <div class="relative">
                            
        
                            <div x-show="dropdownOpen" onClick="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"
                                ></div>
        
                            <div x-show="dropdownOpen"
                                class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                               >
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
                                <a href="/login"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
                            </div>
                        </div>
                    </div>
                </header>
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div class="container mx-auto px-6 py-8">
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