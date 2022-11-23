import Link from "next/link";
import React from "react";


const Button = ({children, className}) => {
    return (
        <button className={className}>
            {children}
        </button>
    )
}
const ButtonLink = ({children, href, className}) => {
    return(
        <Link href={href}><p className={className}>{children}</p></Link>
    )
}
const ButtonRemove = ({children, onClick}) => {
    return(
        <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none" onClick={onClick}>
            {children}
        </button>
    )
}
const ButtonBack = ({children, href, className}) => {
    return (
        <Link className={className} href={href} >{children}</Link>
    )
}

Button.Link = ButtonLink
Button.Remove = ButtonRemove
Button.Back = ButtonBack
export default Button