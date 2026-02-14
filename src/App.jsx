import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/content';
import CaseActions from './components/case-actions';
import CaseImage from './components/case-image';
//className={`mobile-shell ${glitch ? 'animate-glitch' : ''}`}

function App() {
  const [glitch, setGlitch] = useState(false);



  return (
    <div className='mobile-shell'> 
      <div className="sticky top-0 h-[350px] w-full z-10">
        <CaseImage />
        <CaseActions glitch={glitch} setGlitch={setGlitch} />
      </div>
      
      <div className="-mt-8 z-20">
        <Content />
      </div>
    </div>
  )
}



export default App
