import React from 'react'
import { hourglass } from 'ldrs'

const LoaderComponent = () => {
    hourglass.register()
    return (
        <div style={{width:"100vw", height:" 90vh", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff"}}>
            <l-hourglass
                size="100"
                speed="1"
                color="white"
            ></l-hourglass>
        </div>
    );
};

export default LoaderComponent