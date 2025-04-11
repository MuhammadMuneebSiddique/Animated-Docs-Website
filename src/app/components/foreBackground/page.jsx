"use client"

import { useRef } from "react";
import Card from "../card/page";

export default function ForeBackground(){

    let ref = useRef(null);

    let cardDetails = [
        {text:"lorem bhag piscum and the last thing is" , fileSize:3.6 , isDownload:true},
        {text:"lorem bhag piscum and the last thing is" , fileSize:5.6 , isDownload:false},
        {text:"lorem bhag piscum and the last thing is" , fileSize:0.6 , isDownload:true},
        {text:"lorem bhag piscum and the last thing is" , fileSize:3 , isDownload:false},
        {text:"lorem bhag piscum and the last thing is" , fileSize:1.5 , isDownload:false},
        {text:"lorem bhag piscum and the last thing is" , fileSize:2.2 , isDownload:true},
    ]

    return(
        <div ref={ref} className="w-[100%] h-[100%] top-0 left-0 p-[2em] absolute flex justify-center flex-wrap items-center gap-[2em]">
            {cardDetails.map((data,index)=>{
                return(
                    <Card details={data} key={index} reference={ref} />
                )
            })}
        </div>
    )
}