import React from 'react' 
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='w-60  h-72 relative flex-shrink-0 rounded-[45px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 '>{data.desc}</p>
        <div className="footer absolute w-full bottom-0 left-0">
            <div className='flex items-center justify-between px-8 py-3 '>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center '>
                    {data.close ? <IoClose /> : <LuDownload />}
                
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-400"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            )}
        </div>
    </motion.div>
  )
}

export default Card