import React, { ReactNode } from 'react'

interface GridBoxProps {
    id: string
    children: any
    isLoading?: boolean
}

export default function GridBox(props: GridBoxProps){
     console.log('grid')
    console.log(props)
    if(props.isLoading) {
        return (
            <div className='grid_box' id={props.id}>
                <div style={{textAlign: 'center', padding: '10px', display: 'flex', alignItems: 'center',height: '100%', justifyContent: 'center'}}>
                    <span>Loading ...</span> 
                </div>
            </div>
        )
    } else {
        return (
            <div className='grid_box' id={props.id}>
                {props.children}
            </div>
        )
    }
    

    
}