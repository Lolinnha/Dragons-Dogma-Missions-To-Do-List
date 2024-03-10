import React from "react";

interface Props {

    status: string;
    children?: any;

}

const Card: React.FC<Props> = ({ status, children }) => {

    return (

        <div className="flex justify-center bg-[#F7BD62] rounded-3xl" style={{ width: "250px", height: "400px" }}>
            <div>
                <div className="flex justify-center items-center space-x-4 mb-4">
                <p className="mt-4 uppercase text-[25px] text-[#6A2918]">{status}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6A2918" className="w-6 h-6 mt-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Card