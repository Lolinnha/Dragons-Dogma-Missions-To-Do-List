import React from "react";



interface AvatarProps {

    imageURL : string 
    width: string;
    height: string;
}

const Avatar: React.FC<AvatarProps> = ({imageURL, width, height}) => {

    return (

        <div className={`rounded-full inline-block max-w-min bg-white`}>
            <img src={imageURL} width={width} height={height}/>
        </div>
    )

}

 


export default Avatar