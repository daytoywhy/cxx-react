import React from "react";
import { Outlet,useNavigate,useLocation } from 'react-router-dom'
import './layout.scss'
import avatar from '@/assets/image/avatar/avatar.jpeg'
import { GithubOutlined,QqOutlined,MailOutlined } from '@ant-design/icons'
const Home :React.FC = ()=>{
  const navList = [
    {label:'首页',key:'/home'},
    {label:'文章',key:'/article'},
    {label:'留言板',key:'/messageBoard'},
  ]
  const useRouter = useNavigate()
  const location = useLocation()
  console.log(location);
  
  const handleClick = (item:any) => {
    useRouter(item.key)
  }
  return (
    <div className="layout-container">
      <div className="left">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="nav">
          <ul>
          { navList.map(item =>{
            return (
              <li className={item.key === location.pathname ? 'active' : ''} onClick={()=> handleClick(item) } key={item.key}>{ item.label }</li>
            )
          })}
          </ul>
        </div>
        <div className="link-way">
          <ul>
            <li>
            <GithubOutlined />
            <span>https://github.com/daytoywhy</span>
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