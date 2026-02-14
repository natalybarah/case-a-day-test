import {Heart, Bookmark, SendHorizontal} from "lucide-react"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";



const CaseActions=({glitch, setGlitch})=>{
       const navigate= useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            if(glitch){
                navigate("/surprise")
            } else null
        }, 1000)
    },
[glitch, navigate])

const handleNavigate=()=>{
 navigate("/surprise")
}


    return(
        <div className="flex flex-col items-center absolute gap-2.5 top-1/2 -translate-y-1/2  right-2 z-20 "> 
            <div onClick={()=> {setGlitch(!glitch); handleNavigate}} className="flex flex-col items-center gap-0.5">
                <Heart size={24} className={`transition-colors ${glitch ? 'fill-brand-solid text-brand-solid' : 'text-text-neutral-primary'}`}/>
                <span className="text-text-neutral-primary text-xs text-center">267</span>
            </div>   
                <button  >
                    <Bookmark  size={24} className="text-text-neutral-primary "/>
                </button>


                <SendHorizontal size={24} className="text-text-neutral-primary "/>
            
        </div>
    )
}

export default CaseActions;
