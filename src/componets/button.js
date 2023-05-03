import React,{ useEffect} from "react";

const Button = ({children,onClick}) => {
    return (
        <div onClick={onClick} className="relative flex items-start p-1.5 mt-6 border w-fit border-smart-blue bg-button-color  text-button-color-text rounded-lg cursor-pointer transition duration-150 ease-out hover:ease-in hover:duration-150 hover:bg-button-color-hover hover:scale-[1.03] active:bg-button-color-active ">{children}</div>
    )
}

export default Button;

