import React,{useRef,useState,useEffect} from "react";
import FlipItem from "./components/FlipItem";
import { formatDate } from '../../../../utils/date'
import './flipClock.scss'
const FlipClock:React.FC = () => {
  const flipperHour1 = useRef<HTMLDivElement | null>(null)
  const flipperHour2 = useRef<HTMLDivElement | null>(null)
  const flipperMinutes1 = useRef<HTMLDivElement | null>(null)
  const flipperMinutes2 = useRef<HTMLDivElement | null>(null)
  const flipperSecond1 = useRef<HTMLDivElement | null>(null)
  const flipperSecond2 = useRef<HTMLDivElement | null>(null)
  const [timer,setTimer] = useState(null)
  const [flipObjs,setFlipObjs] = useState<Array<HTMLDivElement | null>>([])
  useEffect(() => {
    setFlipObjs([
      flipperHour1.current,
      flipperHour2.current,
      flipperMinutes1.current,
      flipperMinutes2.current,
      flipperSecond1.current,
      flipperSecond2.current,
    ]);
  }, [flipperHour1, flipperHour2, flipperMinutes1, flipperMinutes2, flipperSecond1, flipperSecond2]);
  useEffect(()=>{
      init()
      run()
    return () => {
      // 执行清理操作
      if (timer) {
        clearInterval(timer);
        setTimer(null)
      }
    };
  },[flipObjs])

  const init = () =>{
    const now = new Date();
    const nowTimeStr = formatDate(new Date(now.getTime()), "hhiiss");
    console.log(nowTimeStr,'nowTimeStr');
    console.log(flipObjs);
    for (let i = 0; i < flipObjs.length; i++) {
      flipObjs[i].setFront(nowTimeStr[i]);
    }
  }
  const run = () => {
    setTimer(setInterval(() => {
      const now = new Date();
      const nowTimeStr = formatDate(new Date(now.getTime() - 1000), "hhiiss");
      const nextTimeStr = formatDate(now, "hhiiss");
      for (let i = 0; i < flipObjs.length; i++) {
        if (nowTimeStr[i] === nextTimeStr[i]) {
          continue;
        }
        flipObjs[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
      }
    }, 1000))
  };
  return (
    <div className="flip-clock">
    <FlipItem ref={flipperHour1} />
    <FlipItem ref={flipperHour2} />
    <em>:</em>
    <FlipItem ref={flipperMinutes1} />
    <FlipItem ref={flipperMinutes2} />
    <em>:</em>
    <FlipItem ref={flipperSecond1} />
    <FlipItem ref={flipperSecond2} />
  </div>
  )
}

export default FlipClock