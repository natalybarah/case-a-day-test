import {useState, useEffect} from 'react'



const Surprise=()=>{

    const [revealText, setRevealText] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setRevealText(!revealText)
        }, 3000)

    }, [])

    return(
       <div className="h-dvh bg-black flex flex-col items-center justify-center p-6 font-mono">
         
            <h1 className="text-[80px] text-green-500 font-bold animate-glitch mb-8">
                NIN
            </h1>

            {revealText && (
                <div className="text-green-400 space-y-4 text-center border-t border-green-900 pt-6">
                    <p className="typing-effect uppercase tracking-widest">
                        [SUCCESS] Access Granted
                    </p>
                    <p className="text-xl text-white font-bold">
                        CITA CON NINE INCH NAILS: LUNES, 19 DE FEBRERO
                    </p>
                    <p className="text-sm text-green-700">
                        Happy Valentine's Day
                    </p>
                </div>
            )}
        </div>
    )
}

export default Surprise;

