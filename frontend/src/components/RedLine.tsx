import React from 'react'


interface Props {

    children: any
}

const RedLine: React.FC<Props> = ({children}) => {

    return (

        <div className='flex flex-col bg-[#6A2918] w-52 h-screen'>{children}</div>
    )

}

export default RedLine