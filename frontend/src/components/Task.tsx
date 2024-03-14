import React from "react";

interface Props {
    title: string;
    color: string;
    mission: {
        id: number
        title: string
        status: string
        mainQuest: boolean
    }
    onNext: Function
    onLast: Function
    onDelete: Function
}


const Task: React.FC<Props> = ({ title, color, mission, onNext, onLast, onDelete }) => {

    return (


        <div className="flex justify-evenly bg-[#EC9D22] rounded-2xl" style={{ width: "200px", height: "40px" }}>
            <svg onClick={() => onLast(mission)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6A2918" className="w-6 h-6 mt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div className="mt-3 text-[12px]">{title}</div>
            <div className="flex items-center">
            <svg onClick={() => onDelete(mission)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6A2918" className="w-3 h-3 justify-center">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
            <svg onClick={() => onNext(mission)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6A2918" className="w-6 h-6 mt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            

        </div>


    )
}

export default Task