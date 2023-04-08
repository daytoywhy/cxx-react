import React,{ useState,forwardRef,useImperativeHandle } from "react";
import './flipItem.scss'

interface Props {

}
const FlipItem = forwardRef<HTMLDivElement,Props>((props,ref) => {
  const [frontText,setFrontText] = useState(0)
  const [backText,setBackText] = useState(1)
  const [duration,setDuration] = useState(600)
  const [isFlipping,setIsFlipping] = useState(false)
  const [flipType,setFlipType] = useState('down')
  useImperativeHandle(ref,()=>({
    setFront,
    setBack,
    flipDown,
    flipUp,
  }))
  const textClass = (number:number) => {
    return 'number' + number
  }

  const flip = (type: string, front: number, back: number) => {
    if(isFlipping){
      return
    }
    setFrontText(front)
    setBackText(back)
    setFlipType(type)
    setIsFlipping(true)
    setTimeout(() => {
      setIsFlipping(false)
      setFrontText(back)
    }, duration);
  }
  const flipDown = (front: number, back: number): void => {
    flip("down", front, back);
  };
  const flipUp = (front: number, back: number): void => {
    flip("up", front, back);
  };

  const setFront = (text: number): void => {
    setFrontText(text)
  };
  const setBack = (text: number): void => {
    setBackText(text)
  };
  return (
    <div ref={ref} className={`m-flipper ${flipType} ${isFlipping ? 'go' : ''}`}>
      <div className={`digital front ${textClass(frontText)}`}></div>
      <div className={`digital back ${textClass(backText)}`}></div>
    </div>
  )
})


export default FlipItem