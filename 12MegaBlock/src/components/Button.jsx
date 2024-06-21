import React from "react";


function Button({
    // jo text pass karaycha ahe tyala children as boltat
    children,
    type = 'button',
    bgColor = "bg-blue-600",
    textColor = 'text-white',
    className = "", 
    // Extra kahi goshti jar pass kele tar te props madhe jatat
    ...props


}) {
    return(
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button