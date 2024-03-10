import React from "react";

interface Props {
    title: string;
    color: string;
}

const Task: React.FC<Props> = ({ title, color}) => {

    return (


        <div className="flex justify-evenly bg-[#EC9D22] rounded-2xl" style={{ width: "200px", height: "40px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6A2918" className="w-6 h-6 mt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div className="mt-2">{title}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6A2918" className="w-6 h-6 mt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>


    )
}

export default Task