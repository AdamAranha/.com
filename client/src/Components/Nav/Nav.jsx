import './Nav.css'
import { Outlet } from 'react-router-dom'

export default function Nav() {

    return (
        <div className="nav-wrapper">
            <div className='nav-conent'></div>
            <div className='content'><Outlet/></div>
        </div>
    )
}