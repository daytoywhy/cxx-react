import React from "react";
import './avatar.css'

type IProps = {
  avatar?:String,
  width?:Number,
  height?:Number,
}
const Avatar:React.FC<IProps> = (props)=>{
  const {avatar,width,height} = props
  return (
    <div>
      <img src={avatar} alt="avatar" width={width} height={height}/>
    </div>
  )
}


export default Avatar