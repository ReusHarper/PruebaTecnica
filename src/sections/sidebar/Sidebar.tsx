import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './assets/Sidebar.css';

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: 'undefined' }}>
                <div className = 'navbar'>
                <NavLink to='#' className = 'menu-bars'>
                    <FaBars onClick = { showSidebar } />
                </NavLink>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className = 'nav-menu-items' onClick = { showSidebar }>
                        <li className = 'navbar-toggle'>
                        <NavLink to = '#' className = 'menu-bars'>
                            <AiOutlineClose />
                        </NavLink>
                        </li>
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li key = { index } className = { item.cName }>
                                        <NavLink to = { item.path } key = { `${ item.title }-${ index }`}>
                                            { item.icon }
                                            <span>{ item.title }</span>
                                        </NavLink>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;