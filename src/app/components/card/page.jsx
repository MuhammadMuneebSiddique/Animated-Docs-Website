"use client"


import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiSaveDown1 } from "react-icons/ci";
import { motion } from "framer-motion"



export default function Card({details , reference}){
    return(
            <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1, backgroundColor: "#32CD32" }} className="w-[12em] text-white h-[14em] relative rounded-[1em] flex-shrink-0 bg-[#0000008f] overflow-hidden">
                <div className="p-[1em]">
                    <FaRegFileAlt/>
                </div>
                <p className="text-[0.8em] p-[1em]">{details.text}</p>
                <div className="absolute bottom-0 w-full">
                    <div className="flex justify-between px-[1em] py-[1em] items-center">
                        <h3 className="text-[0.8em]">{details.fileSize}mb</h3>
                        {details.isDownload ? <IoMdCloseCircleOutline /> : <CiSaveDown1 />}
                    </div>
                    {details.isDownload ? null : ( 
                        <div className="download py-[0.7em]  capitalize font-bold bg-green-600">
                            <h3 className="capitalize font-bold text-center text-white text-[0.7em]">download now</h3>
                        </div>
                    )}
                </div>
            </motion.div>
        )
}