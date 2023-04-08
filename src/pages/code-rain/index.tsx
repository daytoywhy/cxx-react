import React,{useEffect,useRef} from "react";
import './code.scss'
const codeRain:React.FC = () => {
  const cvs = useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const canvas = cvs.current!;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    const fontsize = 20 * devicePixelRatio
    ctx.font = `${fontsize}px "Roboto Mono"`
    const colunmCount = Math.floor(canvas.width / fontsize);
    const charIndex = new Array(colunmCount).fill(0)

    const draw = () =>{
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = '#6BE445';
      ctx.textBaseline = 'top'
      for(let i =0;i< colunmCount;i++){
        const text = getRandomChar()
        const x = i * fontsize
        const y = charIndex[i] * fontsize
        ctx.fillText(text,x,y)
        if(y > canvas.height && Math.random() > 0.99){
          charIndex[i] = 0
        }else{
          charIndex[i]++;
        }
        
      }
    }

    draw()
    setInterval(draw,50)
  },[])

  const getRandomChar = ()=>{
    const str = '0123456789abcdefghijklmnopqrstuvwxyz'
    return str[Math.floor(Math.random() * str.length)]
  }
  
  return (
    <div>
      <canvas ref={cvs}></canvas>
    </div>
  )
}

export default codeRain