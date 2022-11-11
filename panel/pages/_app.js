import React from "react";
import '../styles/global.css'
import 'tailwindcss/tailwind.css'
const App = ({Component, pageProps}) => {

    return(
       <div>
         <Component {...pageProps}/>
       </div>
    )
   
}

export default App