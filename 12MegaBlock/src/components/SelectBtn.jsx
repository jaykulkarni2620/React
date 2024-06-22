
import React, {useId} from "react";


 function SelectBtn({
    // dropdown ahe so option dyave lagnar
    options,
    label,
    className="",
    ...props
}, ref) {

    const id = useId()
    return(
    <div className="w-full">
        {label && <label className="" htmlFor={id}> </label>}
        <select 
        ref={ref}
        {...props}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        id={id}
        >
            
            {// using ? which means jar option madhe value asel 
            options?.map((option)=> {
                <option key={option} value={option}>
                    {option}
                </option>
            })}
            
        </select>
    </div>
)}


export default React.forwardRef(SelectBtn);