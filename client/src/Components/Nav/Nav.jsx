import { Outlet, NavLink } from 'react-router-dom'
import './Nav.css'
import { useState } from 'react'

import DoubleArrow from '../../assets/doubleArrow.svg?react'
import MoneySVG from '../../assets/money.svg?react'
import AccountsSVG from '../../assets/accounts.svg?react'
import AddSVG from '../../assets/add.svg?react'
import ReportsSVG from '../../assets/reports.svg?react'
import HelpSVG from '../../assets/help.svg?react'
import Profile from '../../assets/profile.svg?react'



const navList = [
    {
        path: '/budget',
        icon: <MoneySVG/>,
        name: 'Budget',
        inDesktop: true
    },
    {
        path: '/accounts',
        icon: <AccountsSVG/>,
        name: 'Accounts',
        inDesktop: true
    },
    {
        path: '/add',
        icon: <AddSVG/>,
        name: 'Add',
        inDesktop: false 
    },
    {
        path: '/reports',
        icon: <ReportsSVG/>,
        name: 'Reports',
        inDesktop: true
    },
    {
        path: '/help',
        icon: <HelpSVG/>,
        name: 'Help',
        inDesktop: false
    },
]

const ifMobile = () => window.innerWidth <= 600

export default function Nav() {

    const [open, setOpen] = useState(false)

    return (
        <div className='nav-wrapper'>
            <div className={`nav-content ${open ? 'nav-close' : ''}`}>
                {ifMobile() ? '' : 
                    <div className='nav-header'>
                        <Profile/>
                        <div className='nav-header-container'>
                            <h3>Adam Aranha</h3>
                            <p>The secret sauce</p>
                        </div>
                    </div>
                    }
                <ul className='nav-list'>

                    {navList.map((item) => (
                    <NavLink to={item.path}>
                        <li className='nav-item'>
                            <div className='svg'>{item.icon}</div>
                            {ifMobile() ? '' : <h5 className='nav-title'>{item.name}</h5>}
                        </li>
                    </NavLink>
                    ))}
                </ul>
                {ifMobile() ? '' :
                <div className='nav-collapse'>
                    <DoubleArrow onClick={() => {setOpen(!open)}}/>
                </div>
                }
            </div>
            <div className={`content ${open ? 'content-open' : ''}`}><Outlet /></div>
            
        </div>        
    )
}