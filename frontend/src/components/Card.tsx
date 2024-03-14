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
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Card