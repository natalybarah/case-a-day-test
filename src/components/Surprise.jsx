import {useState, useEffect} from 'react'



const Surprise=()=>{

    const [revealText, setRevealText] = useState(false)
    const [revealText2, setRevealText2] = useState(false)

    useEffect(()=>{
        const timer1 = setTimeout(() => {
            setRevealText(true);
            
     
            const timer2 = setTimeout(() => {
                setRevealText2(true); 
            }, 2000);

        }, 4000);
        return ()=> clearTimeout(timer1)

    }, [])

    return(
       <div className="h-dvh bg-black flex flex-col items-center justify-center p-[16px] font-mono">
         
            <h1 className="text-[100px] text-green-500 font-bold animate-glitch mb-8">
                NIN
            </h1>

            {revealText && (
                <div className="text-green-400 space-y-4 text-center border-t border-green-900 pt-6">
                    <p className="typing-effect uppercase tracking-wide text-xs sm:text-sm">
                        [SUCCESS] Access Granted to Centre Bell
                    </p>
               {revealText2 && (
                        <>
                            <p className=" text-white font-bold text-xl p-[16px]">
                                CITA CON NINE INCH NAILS: 
                                <br/>
                                PEEL IT BACK TOUR - 2026
                                <br/>
                                LUNES, 16 DE FEBRERO
                            </p>
                            <p className="text-sm text-green-700 mt-4 ">
                                Happy Valentine's Day
                            </p>
                        </>
                    )}
                </div>
                
            )}
        </div>
    )
}

export default Surprise;

