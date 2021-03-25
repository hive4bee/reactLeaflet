// if (window == undefined) {
//     return true
// }
import React,{useEffect, useState} from 'react';



import dynamic from "next/dynamic";


const PageName = () => {

    const Map = dynamic(() => import("./map"), { ssr: false });
    return(
        <div>
            <Map/>
        </div>
    )
};

export default PageName;