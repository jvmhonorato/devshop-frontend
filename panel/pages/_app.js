import React from "react";
import '../styles/global.css'

const App = ({Component, pageProps}) => {

    return(
       <div>
         <Component {...pageProps}/>
       </div>
    )
   
}

export default App