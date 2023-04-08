import React from 'react'
import { Card } from 'antd';
import FlipClock from './components/flipClock/FlipClock';
import './home.scss'
const Home: React.FC = () => {
  const handTip = () => {
    const hour = new Date().getHours();
    return hour < 8
      ? "早上好，旅行者，新的一天也要加倍努力哦～"
      : hour <= 11
        ? "上午好，旅行者，一日之计在于晨"
        : hour <= 13
          ? "中午好，旅行者，中午要好好吃饭哦～"
          : hour <= 18
            ? "下午好，旅行者，早点下班休息～"
            : "晚上好，旅行者，愿你三冬暖，愿你春不寒";
  };
  return (
    <div id="container" className="container">
      <Card bordered={false}>
        <div className="header">
          <div className="title">
            <p>{handTip()}</p>
          </div>
          <FlipClock />
        </div>
      </Card>
    </div>
  )
}

export default Home