import {motion} from 'motion/react'
import {useState,useRef} from 'react'
import Back from './Back.jsx';
import Nav from './Nav.jsx'
import Footer from './Footer.jsx';

const MovingCard = ({children}) => {

  const [mousePos, setMousePos]=useState({x:0,y:0})
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);


  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;


    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const distX = (mouseX - centerX) / centerX;
    const distY = (mouseY - centerY) / centerY;

    
    setMousePos({
      x:distX*-1,
      y: distY*-1
     
    })
  };

  return (
    <main >
      <Nav/>
  
     <div className='flex flex-col md:flex-row w-full  items-center py-12.75  md:py-35 lg:py-30 md:px-5 justify-around  perspective-dramatic gap-10'>
      <Back/>
       <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={()=>{
        setMousePos({x:0,y:0})
        setIsHovering(false)
      }}

      onMouseEnter={()=>setIsHovering(true)}
      animate={{
        rotateX:mousePos.x,
        rotateY:mousePos.y
      }}
      transition={{
      ease:"easeInOut",
      duration:0.2

      }}
      style={{
        boxShadow:isHovering? `inset 0.1px 0.1px 1px 0.4px #1a202c`:`0 4px 10px rgba(0,0,0,0.1)`
      }}
        className='bod '>
        {children}
      </motion.div>
     </div>

     <Footer/>


      

    
    </main>
  )
}

export default MovingCard
