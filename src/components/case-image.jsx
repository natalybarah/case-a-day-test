import ImageLogo from "../assets/gideonvwainwright.png" 
 
 const CaseImage = () => {
    return (
        <div className="relative w-full h-full">
            <img 
                src={ImageLogo}
                alt="gideon in court" 
                className="w-full h-full object-cover" 
            />
        </div>
    )
}

export default CaseImage;