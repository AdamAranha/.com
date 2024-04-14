
import { Outlet, NavLink } from 'react-router-dom'
import './oldNav.css'
import MoneySVG from '../../assets/money.svg?react'
import AccountsSVG from '../../assets/accounts.svg?react'
import AddSVG from '../../assets/add.svg?react'
import ReportsSVG from '../../assets/reports.svg?react'
import HelpSVG from '../../assets/help.svg?react'
import DoubleArrow from '../../assets/doubleArrow.svg?react'
import { useState } from 'react'

const navList = [
    {
        link: '/budget',
        image: <MoneySVG/>,
        name: 'Budget'
    },    
    {
        link: '/accounts',
        image: <AccountsSVG/>,
        name: 'Accounts'
    },    
    {
        link: '/add',
        image: <AddSVG/>,
        name: 'Add'
    },    
    {
        link: '/reports',
        image: <ReportsSVG/>,
        name: 'Reports'
    },
    {
        link: '/help',
        image: <HelpSVG/>,
        name: 'Help'
    }
]

const ifMobile = () => {
    return window.innerWidth <= 600 ? true : false
}

// const

export default function Nav() {

    const [open, setOpen] = useState(false)

    if(window.innerWidth <= 600) {console.log('In Mobile')}else{console.log('In Desktop')}

    return (
        <>
            <div className={`nav-wrapper ${open ? 'nav-open' : ''}`}>
                <ul className='nav-content'>
                    <li className='nav-header-container'>
                        <h3 className='nav-header'>Adam Aranha</h3>
                        <p>Some magic stuff</p>
                    </li>
                    {navList.map((item) => (
                        <NavLink to= {item.link} key= {item.name}>
                            <li className='nav-item'>
                                {item.image}
                                <h5 className='nav-title'>{item.name}</h5>
                            </li>
                        </NavLink>
                    ))}

                    {/* <NavLink to= '/budget'>
                        <li className='nav-item'>
                            <MoneySVG/>
                            <h5 className='nav-title'>Budget</h5>
                        </li>
                    </NavLink>
                    <NavLink to= '/accounts'>
                        <li className='nav-item'>
                            <AccountsSVG/>
                            <h5 className='nav-title'>Accounts</h5>
                        </li>
                    </NavLink>
                    <NavLink to= '/add'>
                        <li className='nav-item'>
                            <AddSVG/>
                            <h5 className='nav-title'>Add</h5>
                        </li>
                    </NavLink>
                    <NavLink to= '/reports'>
                        <li className='nav-item'>
                            <ReportsSVG/>
                            <h5 className='nav-title'>Reports</h5>
                        </li>
                    </NavLink>
                    <NavLink to= '/help'>
                        <li className='nav-item'>
                            <HelpSVG/>
                            <h5 className='nav-title'>Help</h5>
                        </li>
                    </NavLink> */}

                </ul>

                <div className='nav-collapsible'>
                    <DoubleArrow onClick={() => setOpen(!open)}/>

                </div>
            </div>
            <Outlet/>
        </>

    )
}