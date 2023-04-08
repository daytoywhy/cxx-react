import React from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import './layout.scss'
import avatar from '@/assets/image/avatar/avatar.png'
import { GithubOutlined, QqOutlined, MailOutlined } from '@ant-design/icons'
import Avatar from "@/components/avatar/index.tsx";
const Home: React.FC = () => {
  const navList = [
    { label: '首页', key: '/home' },
    { label: '文章', key: '/article' },
    { label: '留言板', key: '/messageBoard' },
    { label: '代码雨', key: '/code-rain' },
  ]
  const useRouter = useNavigate()
  const location = useLocation()
  const goGithub = () =>{
    window.open('https://github.com/daytoywhy')
  }

  const handleClick = (item: any) => {
    useRouter(item.key)
  }
  return (
    <div className="layout-container">
      <div className="left">
        <div className="avatar">
          <Avatar avatar={avatar} width={256} height={256}/>
        </div>
        <div className="nav">
          <ul>
            {navList.map(item => {
              return (
                <li className={item.key === location.pathname ? 'active' : ''} onClick={() => handleClick(item)} key={item.key}>{item.label}</li>
              )
            })}
          </ul>
        </div>
        <div className="link-way">
          <ul>
            <li>
              <GithubOutlined />
              <a onClick={goGithub}>https://github.com/daytoywhy</a>
            </li>
            <li>
              <QqOutlined />
              <span>1320007006</span>
            </li>
            <li>
              <MailOutlined />
              <span>1320007006@qq.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
          <Outlet />
      </div>
    </div>
  )
}

export default Home